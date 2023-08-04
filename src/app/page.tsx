"use client";
import {useEffect, useState} from 'react'
import _ from 'lodash'
import axios from 'axios'
import {apiBaseUrl} from '../config/config.json'
import PreLoader from '@/components/preLoader';
import AppHeader from "@/components/header"
import { notfications,sortParams } from '@/utils/data';
import {BiSolidMessageAltMinus} from 'react-icons/bi'
import {GiKnifeFork} from 'react-icons/gi'
import {FaShoppingBag} from 'react-icons/fa'
import AppSwiper from "@/components/swiper";
import {BsSortDown} from 'react-icons/bs'
import MessageCard from "@/components/cards/messageCard";
import RecipeCard from '@/components/cards/recipeCard';
import { log } from 'console';



export default function Home() {
   
   const [isFetching, setIsFetching] = useState(true)
   const [filterKey, setFilterKey] = useState(null)
   const [searchQuery, setSearchQuery] = useState(null)
   const [allTags, setAllTags] = useState([])
   const [restaurantData, setrestaurantData] = useState([])
   const [filteredRestaurants, setFilteredRestaurants] = useState([])

   useEffect(()=>{     
      fetchRestaurants(null)
   }, [])

   const fetchRestaurants = async (sortKey:any)=>{ 
      try{
         
         const {data} = await axios.get(`${apiBaseUrl}/restaurant?sortBy=${sortKey}`)
         const {data:tagData} = await axios.get(`${apiBaseUrl}/restaurant/tags`)
         console.log(data, tagData);
         setFilteredRestaurants([])
         setrestaurantData(data.restaurants)
         setAllTags(tagData.tags)
      }catch(ex){
         console.log(ex); 
      }finally{
         setIsFetching(false)
      }
   }

   const handleFilterRestaurant = (key:any)=>{
      setFilterKey(key)
      if (!key) return setFilteredRestaurants([])
      const filtered = restaurantData.filter((item:any)=>item?.recipes?.includes(key))
      console.log(filtered);
      setFilteredRestaurants(filtered)
   }

   const searchRestaurant = async (e:any)=>{
      const query = e.target.value
      console.log(query);
      
      try{
         const {data} = await axios.get(`${apiBaseUrl}/restaurant/search?keyword=${query}`)
         setFilteredRestaurants(data.restaurants)
      }catch(error){
         console.log(error); 
      }
   }
 
   
   if(isFetching){
      return  <PreLoader open={isFetching} />
   }

  return (
      <div >
         <AppHeader 
            onSortRestaurant={fetchRestaurants}
            onSearchRestaurant = {searchRestaurant}
         />
        
         
         <div className="sm:pt-20 pt-32" >
            <div className="py-7 sm:px-10 px-5 flex" style={{borderBottom:'2px solid whitesmoke'}}>
               
               <div className="cursor-pointer sm:mr-14 mr-1 bg-black text-white flex w-fit px-5 sm:py-3 py-2 rounded-3xl">
                  <GiKnifeFork size={25} />
                  <span className="sm:text-lg text-md ml-2">Restaurants</span>
               </div>

               <div className="cursor-pointer flex w-fit px-5 sm:py-4 py-2 rounded-3xl">
                  <FaShoppingBag size={25} />
                  <span className="text-md sm:text-lg ml-2 font-semibold">Grocery</span>
               </div>

            </div>

            <div className={`flex sm:mx-5 mx-3 py-5 slider`}>
                  <div onClick={()=>handleFilterRestaurant(null)} style={{background:filterKey==null?'#d6ece0':''}}  className="w-40 mr-5 py-2 px-2 rounded-md cursor-pointer">
                     <div className=""><img src="https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Ffrench-fries-svgrepo-com%202.svg_1657123642089?alt=media&token=1e069634-295b-4bdb-b0ca-ca980127363d" className="h-10 w-10 m-auto" alt="" /></div>
                     <div className="text-sm text-center mt-2"> All </div>
                  </div>
               {allTags?.map((item:any, i)=>
                  <div onClick={()=>handleFilterRestaurant(item.name)} style={{background:filterKey==item.name?'#d6ece0':''}} key={i} className="w-40 mr-5 px-2 py-2 rounded-md cursor-pointer">
                     <div className=""><img src={item?.image} className="h-10 w-10 m-auto" alt="" /></div>
                     <div className="text-sm text-center mt-2"> {item?.name} </div>
                  </div>
               )}
            </div>
         </div>

         <div 
            className="cursor-pointer fixed flex h-14 w-14 rounded-full justify-center items-center text-white bottom-0 mb-7 ml-5" 
            style={{background:'#00b331'}}
         >
            <BiSolidMessageAltMinus size={30}/>
          
         </div>

         <div className="px-5 mt-7">
            <AppSwiper
               slides={notfications.map((item)=>
                  <MessageCard 
                     bgColor={item.bgColor}
                     message={item.message}
                     heading={item.heading}
                  />
               ) }
            />
         </div>

         <div  className="flex mt-14 "  >

            <div className="2xl:w-80 lg:w-72 px-10 hidden sm:block">
               <div className="text-2xl font-semibold">All Stores</div>
               <div className="text-lg mt-1">(184 Stores)</div>
               <div className="flex mt-14">
                  <BsSortDown size={30} />
                  <span className="ml-3 font-semibold text-2xl">Sort</span>
               </div>
               <div className="mt-5">
                  {sortParams.map((item, i)=>
                  <div key={i} className="flex mb-4">
                     <input onClick={()=>fetchRestaurants(item.key)} type="radio" className=' mr-2 ' name="types"  id="" />
                     <span>{item.label}</span>
                  </div>
                  )}
               </div>
               
            </div>

            <div  className="flex-1 px-3 sm:px-0 sm:pr-10 pb-5">
                  <div className="sm:text-3xl text-2xl font-semibold mb-10">All Restaurants</div>
                  <div  className='grid gap-x-5 gap-y-14 sm:gap-y-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3' >
                     {/* @ts-ignore */}
                    {(filteredRestaurants.length>0 ? 
                     filteredRestaurants:restaurantData)?.map((item:any, i:any)=>
                     <div className='h-fit' key={i} >
                        <RecipeCard
                           image={item.image}
                           name={item.name}
                           rating={item.ratings}
                           star={item.star}
                           tags={item.recipes}
                        />
                     </div>
                    )}
                  </div>
            </div>

         </div>
         
      </div>
      )
}
