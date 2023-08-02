import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {AiOutlineClose, AiOutlineLock} from 'react-icons/ai'

export default function AppDrawer ({openDrawer, toggleDrawer}:any) {


  return (
    <div>
         <SwipeableDrawer
            anchor={'left'}
            open={openDrawer}
            onClose={toggleDrawer( false)}
            onOpen={toggleDrawer( true)}
          >
            <div className="w-80 px-5 py-10">
                <div className="flex justify-end"> 
                    <AiOutlineClose 
                        className="cursor-pointer" 
                        size={23} 
                        onClick={toggleDrawer(false)}
                    /> 
                </div>
                <div className="mb-20 mt-10 flex">
                    <AiOutlineLock size={25} /> <span className="text-md ml-7">Sign in</span>
                </div>

                <div className=''>
                    <div className="font-semibold mb-5 text-lg">Add Your restaurant</div>
                    <div className="font-semibold mb-5 text-lg">Become a delivery rider</div>
                    <div className="font-semibold mb-5 text-lg">Go to Homepage</div>
                </div>

                <div className="mt-28 flex">
                    <img src="/assets/logo.svg" className='mr-3' alt="" />
                    <div className="text-md font-medium">
                        Experience the Heyfood mobile app
                    </div>
                </div>
                <div className="flex mt-7">
                    <div className="bg-black text-white mr-2 flex items-center py-2 px-5 rounded-2xl">
                        <img src="/assets/apple.svg" alt="" />
                        <span className='text-xs ml-3'>App Store</span>
                    </div>
                    <div className="bg-black text-white flex items-center py-2 px-5 rounded-2xl">
                        <img src="/assets/gplay.svg" alt="" />
                        <span className='text-xs ml-3'>Play Store</span>
                    </div>
                </div>
            </div>
          </SwipeableDrawer>
   </div>
  );
}
