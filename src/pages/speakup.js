import React ,{ useState , useEffect, } from 'react';
import SpeakArea from '@/components/SpeakArea';
import SpeakForm from '@/components/SpeakForm';
import SideNav from '@/components/sideNav';

const SpeakBoundary = () => {
    return(
        <div className='flex'>
            Y<SideNav/>
            <main className='bg-black w-[100%] h-[100vh] overflow-auto float-right'>
                <SpeakForm/>
                <SpeakArea/>
            </main>
        </div>
    )
}
export default function Dashboard (){
    return(
        <SpeakBoundary/>
    )
}