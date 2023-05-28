import React ,{ useState , useEffect, } from 'react';
import SpeakArea from '@/components/SpeakArea';
import SpeakForm from '@/components/SpeakForm';
import SideNav from '@/components/sideNav';



const SpeakBoundary = () => {
    return(
        <>
     
            <SpeakForm/>
            <SpeakArea/>
        
        </>
    )
}
export default function Dashboard (){
    return(
        <section  className='flex'>
            <aside className='bg-[#0D0D0D] flex justify-center'>
                <SideNav/>
            </aside>
            <main  className='bg-[#0D0D0D] w-[100%] h-[100vh] overflow-auto float-right'>
                <SpeakBoundary/>
            </main> 
        </section>
    )
}