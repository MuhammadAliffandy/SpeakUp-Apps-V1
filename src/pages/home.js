import React,{useEffect } from "react";
import View3dBox from "@/components/view3dbox";
import { useRouter } from "next/router";
import Typewriter from 'typewriter-effect/dist/core';
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';


const HomePage = () => {
    const router = useRouter()

    useEffect(()=>{
        history.pushState(null, null, null);
        var app = document.getElementById('headline');

        var typewriter = new Typewriter(app, {
        loop: true,
        delay: 75,
        });

        typewriter
        .pauseFor(2500)
        .typeString('SpeakUp Apps')
        .pauseFor(300)
        .deleteChars(12)
        .typeString('Berceritalah Tanpa Beban')
        .pauseFor(1000)
        .start();
            })

    return(
        <>
            <Cursor 
                isGelly={true}
                cursorSize={40}
        
            />
            <section data-cursor-exclusion id="landingpage" className="flex h-[100vh] w-[100vw] items-center justify-around bg-black ">
                <div className="bg-green-500 w-[70vw] h-[70vh] absolute top-[-30%] rounded-full" id="circleWarm"></div>
                <View3dBox/>
                <div className="flex items-center justify-around h-[100vh]">
                    <div className="py-4  m-10 flex-col w-[80%] h-max justify-end ">
                        <h1  data-cursor-size="80px" className="text-white font-bold font-serif text-[85px] mb-4"  id="headline"></h1>
                        <blockquote  data-cursor-size="80px" className="text-white text-[16px]">
                        Platform Bertukar Cerita Secara Anonim Berbasis Website “Speak Up”. Speak Up menjadi solusi yang tepat bagi pengguna yang membutuhkan teman cerita dengan mencurahkan isi hatinya kepada seseorang secara anonim serta menyediakan berbagai fitur yang menarik yaitu antara lain fitur pencarian, comment, forum, dan favorite. Pengguna dapat menikmati semua fitur yang ada dengan mudah dan nyaman.
                        </blockquote>
                        <button  data-cursor-size="80px" onClick={()=>{ router.push('login')}} className=" text-green-500 text-[18px] border-[2px] border-green-700 px-16 py-2 mt-8 h-[50px] hover:bg-green-700 rounded-[10px] hover:text-white" >Mulai</button>
                    </div>
                </div>

            </section>
        </>
    )

}

export default HomePage;