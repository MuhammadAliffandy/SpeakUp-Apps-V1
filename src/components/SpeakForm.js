import React ,{ useState , useEffect, } from 'react';
import { useRouter } from 'next/router'

const SpeakForm = () => {

    const route = useRouter()


    const addConsume = async (speak) => {
        const options = {
          method: 'POST',
          headers: new Headers({
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
            'Content-Type': 'application/json',
          }),
          
          body: JSON.stringify(speak)
        };
    
        await fetch("http://localhost:3000/api/add", 
        options)
        .then(response => {
          if (response.ok) {
            alert('SpeakUp Berhasil')
            document.getElementById('speakForm').reset()
            route.push('#speakupForum')
            return response.json();
          } else {
            throw new Error('Invalid register');
          }
        })
        .then(data => {
          return data ;
        })
        .catch(error => {
            if(error){
              alert('speak gagal ')
            } ;
        });
      }
    
    const addSpeak = (event) => {
        event.preventDefault()

        var titleValue = document.getElementById('titleSpeak').value;
        var textValue = document.getElementById('textSpeak').value;

        const forum = {
            title : titleValue,
            speak : textValue,
        }
        addConsume(forum)
      }


    return(
    <section className='flex items-center justify-center  h-max'>
      <div className='flex-col items-center justify-center mt-8'>
        <div className=' flex flex-col justify-center bg-[#1A1A1A] w-max h-max py-7  gap-[20px] rounded-[20px] ' >
            <h2 className='px-5 text-white font-bold'>Buat Speak</h2>
            <form id='speakForm' className='flex flex-col items-center gap-[15px] ' >
                <input  id='titleSpeak' className='  rounded-[10px] w-[95%] p-[10px]  bg-white bg-opacity-[10%] focus:text-white text-white' type='text' placeholder='Masukkan judul speak anda' ></input>
                <div className='flex justify-center relative h-max w-max'>
                  <textarea  id='textSpeak' rows='2' cols='100' className='bg-white focus:text-white text-white bg-opacity-[10%] rounded-[10px] w-[95%] p-[10px] bg-grey ' placeholder='Tuliskan keluh kesah anda pada dunia' >
                  </textarea>
                  <button type='submit'  className='w-[40px] h-[40px] p-2 bg-green-600 text-white  rounded-full  hover:bg-green-900 hover:shadow-xl hover:shadow-gray-500  absolute right-8 bottom-2' onClick={addSpeak}  >
                      <i className="fa-solid fa-plus text-white"></i>
                  </button>
                </div>
            </form>
        </div>
      </div>
    </section>
    )
}

export default SpeakForm;