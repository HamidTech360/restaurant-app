import React from 'react';
import {AiFillStar} from 'react-icons/ai'

const RecipeCard = ({image, name, tags, star, rating}:any) => {
    return ( 
        <div>
            <img 
                src={image} alt="" 
                className="w-full rounded-lg h-44 object-cover mb-5" 
            />
            <div>
                <div className="font-semibold text-xl mb-2">{name}</div>
                <div className="text-sm text-gray-400 mb-2"> {tags.join(', ')} </div>
                <div className='flex items-center '>
                    <AiFillStar size={20} color="teal" />
                    <span className='mr-3'>{star} </span>
                    <span>{rating}+ Ratings</span>
                </div>
            </div>
        </div>
     );
}
 
export default RecipeCard;
