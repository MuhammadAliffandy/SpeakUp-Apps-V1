import React ,{ useState , useEffect, } from 'react';
import { useRouter } from 'next/router'

const NavSpeak = () => {

    const route = useRouter()

    const signOut = ()=> {
        sessionStorage.setItem('userID','')
        route.push('/')
        history.replaceState(null, null, "/");
    }

    return(
        <>
            <nav id='navSpeak' className='flex justify-end fixed top-0 left-0 right-0 '>
                <div className=' flex items-center justify-center w-[100px] h-[20px] p-[20px] bg-red-500 m-2 rounded-[20px]' onClick={signOut}>
                    <h2 className='text-white' >Logout</h2>
                </div>
            </nav>
        </>
    )
}

export default NavSpeak;