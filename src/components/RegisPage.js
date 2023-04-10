
import React ,{ useState , useEffect, } from 'react';

const RegisPage = ({ subtitle , formAction ,titleAction ,titleGap}) => {

    const [ name , setName ] = useState('');
    const [ avatar , setAvatar ] = useState('');


    useEffect(()=>{
        getNickname();
    })

    const getNickname = async() => {
      await fetch("https://random-data-api.com/api/v2/users")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Invalid getting ');
        }
      })
      .then(data => {
         setName( data.first_name )
         setAvatar( data.avatar )
      })
      .catch(error => {
          return error;
      });
  }


    const regisConsume = async (account) => {
      const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(account)
      };
  
      await fetch("http://localhost:3000/api/regis", 
      options)
      .then(response => {
        if (response.ok) {
          alert('register berhasil')
          document.location.reload()
          return response.json();
        } else {
          throw new Error('Invalid register');
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
          if(error){
            alert('register gagal ')
          } ;
      });
    }
  
    const signUp = async (event) => {
  
      event.preventDefault();
      
      const formRegis = document.getElementById('formRegis')
      const usernameValue = document.getElementById('username').value;
      const emailValue = document.getElementById('emailRegis').value;
      const passValue = document.getElementById('passRegis').value;
      const passValueV = document.getElementById('passV').value;
  
  
      if (passValue != passValueV) {
        alert(`password tidak sama `);
        formRegis.reset();
      } else{
        const account = {
          username : usernameValue,
          nickname : name, 
          avatar : avatar,
          email : emailValue,
          password : passValueV
        }
    
        await regisConsume(account);
      }
      
      
    }
  
    return (
      <div id='regis' className=' bg-green-800 w-[400px] h-[60px] flex flex-col items-center rounded-b-[20px] rounded-t-[50px]  ' >
        <div style={titleGap}  className=' p-5 gap-[10px] flex flex-col items-center mb-[20px]' >
            <h2 className='text-2xl font-bold text-white cursor-pointer ' onClick={ titleAction }  >Sign Up!</h2>
            <p style={subtitle} className='text-white' >Silahkan membuat akun baru </p>
        </div>
  
        <form  id='formRegis' style={ formAction }  className=' flex flex-col gap-[15px] items-center opacity-0'  >
          <input className='w-[330px] h-[25px] py-5 px-2 rounded-[5px] bg-white bg-opacity-25 placeholder-white text-white placeholder:text-opacity-40 placeholder:text-white'  type='text' id='username' placeholder='Masukkan username'/>
          <input className='w-[330px] h-[25px] py-5 px-2 rounded-[5px] bg-white bg-opacity-25 placeholder-white  text-white placeholder:text-opacity-40 placeholder:text-white'  type='email' id='emailRegis' placeholder='Masukkan email'/>
          <input className='w-[330px] h-[25px] py-5 px-2 rounded-[5px] bg-white bg-opacity-25 placeholder-white  text-white placeholder:text-opacity-40 placeholder:text-white'  type='password' id='passRegis' placeholder='Masukkan password'/>
          <input className='w-[330px] h-[25px] py-5 px-2 rounded-[5px] bg-white bg-opacity-25 placeholder-white  text-white placeholder:text-opacity-40 placeholder:text-white'  type='password' id='passV' placeholder='konfirmasi password'/>
          <button  type='submit' className=' w-[250px] px-10 py-3 bg-white text-green-700 font-bold rounded-[5px]  hover:bg-yellow-300 hover:text-white 'onClick={ signUp }  >Sign Up</button>
      </form>
    </div>
    )
  }
  
export default RegisPage;