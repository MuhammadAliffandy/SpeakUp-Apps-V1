
import React, { useEffect, useState } from "react";
import like from './../assets/images/like.png'
import comment from './../assets/images/comment.png'
import forum from './../assets/images/forum.png'
import Image from 'next/image';

const ProfilPage = () => {

    const [person , setPerson ] = useState([]);

    useEffect(()=>{
        var token = sessionStorage.getItem('token')

        userChecked(token)
    })


    const userChecked = async (token) => {
        const options = {
          method: 'GET',
          headers: new Headers({
              "Authorization": `Bearer ${token}`,
              'Content-Type': 'application/json',
            }),
          
        };
    
       await fetch("http://localhost:3000/api/person", 
        options)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Invalid Person');
          }
        })
        .then(data => {
            setPerson(data.person)
          return data ;
        })
      }

        // button update

    const editProfilNama = (idForm) => {
        const edit = document.getElementById(idForm)
        const nama = document.getElementById('nama')
        const buttonNama = document.getElementById('buttonNama')
        if(edit.style.display == ''){
            edit.style.display = 'flex'
            nama.style.display = 'none'
            buttonNama.style.display = 'none'
        }
    }

    const editProfilEmail = (idForm) => {
        const edit = document.getElementById(idForm)
        const email = document.getElementById('email')
        const buttonEmail = document.getElementById('buttonEmail')
        if(edit.style.display == ''){
            edit.style.display = 'flex'
            email.style.display = 'none'
            buttonEmail.style.display = 'none'
        }
    }

    const cancelEdit = (idForm , text , button )=>{
        const edit = document.getElementById(idForm)
        const email = document.getElementById(text)
        const buttonEmail = document.getElementById(button)
        if(edit.style.display == 'flex'){
            edit.style.display = ''
            email.style.display = ''
            buttonEmail.style.display = ''
        }
    }    

     

    return(
        <>
        <section >
            {
                person.map((data)=>{
        
                    return(

                        <div  className="flex flex-col items-center justify-center h-max w-[100%]">
                        <div className="relative w-[65%] h-[62vh] rounded-[10px] border border-green-900 flex justify-center my-10">
                            <div id="bgProfil" className="w-[100%] h-[30vh] bg-black rounded-xl">
                            </div>
                            <div className="bg-[#1A1A1A] flex-col  w-[600px] h-max p-6 rounded-[10px] absolute top-[20%] shadow-[0px_46px_39px_-38px_rgba(31, 46, 35, 0.82)] "> 
                                <div className="flex  ">
                                    <div className="w-[80px] h-[80px] bg-orange-500 rounded-full" >
                                        <img src={ data.avatar}/>
                                    </div>
                                        {/* column text */}
                                    <div className="flex flex-col ml-5 w-[150px] mb-5 ">
                                        <h2 className=" text-[30px] font-bold text-white">{data.nickname}</h2>
                                        <div className="flex-col items-start justify-center ">
                                            <div className="flex items-center justify-start gap-[20px]">
                                                <p id="nama" className="text-[12px] text-gray-500">{data.username}</p>
                                                <button id="buttonNama" onClick={()=>{ editProfilNama('editNama') }}><i className="fa-solid fa-pen-to-square  text-white"></i></button>
        
                                                {/* Edit nama */}
        
                                                <div id="editNama" className="hidden items-center gap-[10px] my-1">
                                                    <input className="bg-white bg-opacity-5 text-gray-500 p-1 text-[14px] rounded-md"></input>
                                                    <button><i className="fa-solid fa-square-check text-green-500"></i></button>
                                                    <button onClick={()=>{ cancelEdit('editNama','nama','buttonNama',) }}><i className="fa-solid fa-square-xmark text-red-500"></i></button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-start gap-[20px]">
                                                <p id="email" className="text-[12px] text-gray-500" >{data.email}</p>
                                                <i id="buttonEmail" onClick={()=>{ editProfilEmail('editEmail')}}  className="fa-solid fa-pen-to-square  text-white"></i>
                                                
                                                {/* Edit email */}
        
                                                <div id="editEmail" className="hidden items-center gap-[10px] my-1">
                                                    <input className="bg-white bg-opacity-5 text-gray-500 p-1 text-[14px] rounded-md"></input>
                                                    <button><i className="fa-solid fa-square-check text-green-500"></i></button>
                                                    <button onClick={()=>{ cancelEdit('editEmail','email','buttonEmail',) }}><i className="fa-solid fa-square-xmark text-red-500"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    {/* divider */}
                                    <div className="w-[100%] h-[2px] rounded-full bg-white  mt-2  bg-opacity-[20%]"></div>
                                    {/* divider */}
                                    <div className="flex flex-col gap-[20px] mt-8"> 
                                    <div>
                                        <h3 className="text-white font-bold text-opacity-[60%]" >Speak</h3>
                                        <div className="relative">
                                            <div className="w-[100%] h-[7px] rounded-full bg-white bg-opacity-[20%]  mt-2 "></div>
                                            <div className="w-[70%] h-[7px] rounded-full bg-green-700  absolute  top-0"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-opacity-[60%]">Like</h3>
                                        <div className="relative">
                                            <div className="w-[100%] h-[7px] rounded-full bg-white bg-opacity-[20%] mt-2 "></div>
                                            <div className="w-[90%] h-[7px] rounded-full bg-green-700  absolute  top-0"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-opacity-[60%]">Comment</h3>
                                        <div className="relative">
                                            <div className="w-[100%] h-[7px] rounded-full bg-white bg-opacity-[20%]  mt-2 "></div>
                                            <div className="w-[50%] h-[7px] rounded-full bg-green-700  absolute  top-0"></div>
                                        </div>
                                    </div>
                                        
                                    </div>
                            </div>
                        </div>
                        {/* board */}
                        <div className="w-[65%] flex flex-col">
                            <h2 className="text-white text-[25px] font-bold my-1">Board</h2>
                            <div className="flex gap-[45px]">
                                <div className="bg-[#1A1A1A] w-[270px] h-[130px] rounded-xl flex justify-around items-center">
                                    <div className=" flex flex-col text-white items-center">
                                        <h3 className="text-[40px]">{data.forum.length}</h3>
                                        <p className="text-[16px]">Speak</p>
                                    </div>
                                    <Image
                                        src={like}
                                        width={160}
                                        height={40}
                                    />
                                </div>
                                <div className="bg-[#1A1A1A] w-[270px] h-[130px] rounded-xl flex justify-around items-center">
                                    <div className=" flex flex-col text-white items-center">
                                        <h3 className="text-[40px]">{data.like.length}</h3>
                                        <p className="text-[16px]">Like</p>
                                    </div>
                                    <Image
                                        src={comment}
                                        width={160}
                                        height={40}
                                    />
                                </div>
                                <div className="bg-[#1A1A1A] w-[270px] h-[130px] rounded-xl flex justify-around items-center">
                                    <div className=" flex flex-col text-white items-center">
                                        <h3 className="text-[40px]">{data.comment.length}</h3>
                                        <p className="text-[16px]">Comment</p>
                                    </div>
                                    <Image
                                        src={forum}
                                        width={160}
                                        height={40}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }

        </section>
        </>
    )
}

export default ProfilPage;