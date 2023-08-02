"use client";
import AppHeader from "@/components/header"
import {BiSolidMessageAltMinus} from 'react-icons/bi'
import {GiKnifeFork} from 'react-icons/gi'
import {FaShoppingBag} from 'react-icons/fa'

export default function Home() {

   const tags = [
      {
         label:'Rice',
         image:'https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fjapanese-food-rice-svgrepo-com%201.svg_1657125340797?alt=media&token=5e4c0b0b-4a87-45c5-b053-85dfd13f624e'
      },
      {
         label:'Pounded Yam',
         image:'https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fnoodles-svgrepo-com%202.svg_1657125918230?alt=media&token=06ae207d-6f03-4e55-a1ac-e4e725b34acf'
      },
      {
         label:'Spaghetti',
         image:'https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fpasta-svgrepo-com%201.svg_1657126023636?alt=media&token=7d56c084-109c-4976-8716-8e1e455b73e6'
      },
      {
         label:'Chicken',
         image:'https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fchicken-christmas-food-svgrepo-com%201.svg_1657123972810?alt=media&token=6258348f-0c78-4df0-a15b-f1f1813fb042'
      },
      {
         label:'Juice',
         image:'https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fjuice-svgrepo-com%202.svg_1657125631077?alt=media&token=7c8056d4-400a-4ed2-b88e-e456458769cb'
      },
      {
         label:'Ice cream',
         image:'https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fice-cream-svgrepo-com%20(1)%201.svg_1657125237440?alt=media&token=2702f233-e7e5-43e1-9324-84f6d11901a7'
      },
      {
         label:'Fries',
         image:'https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Ffrench-fries-svgrepo-com%202.svg_1657123642089?alt=media&token=1e069634-295b-4bdb-b0ca-ca980127363d'
      },
      {
         label:'Doughnut',
         image:'https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fdoughnut-svgrepo-com%201.svg_1657124741318?alt=media&token=b023bd80-983b-4bf1-8d95-3ba8a01b6e52'
      },
      {
         label:'Burger',
         image:'https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fburger-svgrepo-com%202.svg_1657122987363?alt=media&token=ae88b275-a3d9-43b1-8baf-a0e430a57a1d'
      },
      {
         label:'Amala',
         image:'https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2F192px.svg_1666186478054?alt=media&token=f060fce9-2a2c-4164-873d-a65cf05a6f56'
      },
      {
         label:'Soup Bowl',
         image:'https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fsoup-svgrepo-com%201.svg_1657126696679?alt=media&token=1a7a0734-e08a-4eef-8554-03f014210b7a'
      },
      
   ]
   
  return (
      <div >
         <AppHeader />
         
         <div className="pt-20" >
            <div className="py-7 px-10 flex" style={{borderBottom:'2px solid whitesmoke'}}>
               
               <div className="cursor-pointer mr-14 bg-black text-white flex w-fit px-5 py-3 rounded-3xl">
                  <GiKnifeFork size={25} />
                  <span className="text-lg ml-2">Restaurants</span>
               </div>

               <div className="cursor-pointer flex w-fit px-5 py-4 rounded-3xl">
                  <FaShoppingBag size={25} />
                  <span className="text-lg ml-2 font-semibold">Grocery</span>
               </div>

            </div>

            <div className={`flex px-5 py-5 slider`}>
               {tags.map((item, i)=>
                  <div key={i} className="w-40 mr-5">
                     <div className=""><img src={item.image} className="h-10 w-10 m-auto" alt="" /></div>
                     <div className="text-sm text-center mt-2"> {item.label} </div>
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


      </div>
      )
}
