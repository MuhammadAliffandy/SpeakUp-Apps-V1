import React ,{ useState , useEffect, } from 'react';
import SpeakArea from '@/components/SpeakArea';
import SpeakForm from '@/components/SpeakForm';
import NavSpeak from '@/components/NavBar';

const SpeakBoundary = () => {
    return(
        <main className='bg-black'>
            <NavSpeak/>
            <SpeakForm/>
            <SpeakArea/>
        </main>
    )
}
export default function Dashboard (){
    return(
        <SpeakBoundary/>
    )
}