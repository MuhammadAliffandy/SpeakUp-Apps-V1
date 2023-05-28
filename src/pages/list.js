import React ,{ useState , useEffect, } from 'react';

import SideNav from '@/components/sideNav';
import SpeakMe from '@/components/SpeakMe';

export default function ListSpeak (){
    return(
        <section  className='flex'>
            <aside className='bg-[#0D0D0D] flex justify-center'>
                <SideNav/>
            </aside>
            <main  className='bg-[#0D0D0D] w-[100%] h-[100vh] overflow-auto float-right'>
                <SpeakMe/>
            </main> 
        </section>
    )
}