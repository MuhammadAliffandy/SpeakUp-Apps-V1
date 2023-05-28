import React ,{ useState , useEffect, } from 'react';

import SideNav from '@/components/sideNav';
import ProfilPage from '@/components/profilComponent';

export default function Profil (){
    return(
        <section  className='flex'>
            <aside className='bg-[#0D0D0D] flex justify-center'>
                <SideNav/>
            </aside>
            <main  className='bg-[#0D0D0D] w-[100%] h-[100vh] overflow-auto float-right'>
                <ProfilPage/>
            </main> 
        </section>
    )
}