
const MessageCard = ({bgColor='black', heading, message}:any)=>{
    return(
       <div 
            style={{background:bgColor}} 
            className="h-44 rounded-lg py-7 px-5 text-white flex flex-col"
        >
            <div className="font-semibold text-2xl">{heading}</div>
            <div className="text-lg"> {message} </div>
            <button style={{color:bgColor}} className="rounded-xl bg-white w-fit mt-5 py-1 px-3 text-sm">Tap to order</button>
       </div>
    )
}

export default MessageCard;