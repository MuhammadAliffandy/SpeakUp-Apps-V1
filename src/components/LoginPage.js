import React ,{ useState , useEffect, } from 'react';
import { useRouter } from 'next/router'
import RegisPage from '@/components/RegisPage'
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';

const LoginPage = () => {
  
    const router = useRouter()
  
    const [ heightTitle , setHeightTitle ] = useState('0')
    const [ heightLogin , setHeightLogin ] = useState('150px')
    const [ visibility , setVisibility ] = useState('hidden')
    const [ vislogin , setVisLogin ] = useState('visible')


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
        sessionStorage.setItem('userID',data.person[0].id);
        return data ;
      })
    }

  
    const signUpButton = () => {
      setHeightTitle('70px')
      setVisibility('')
      setVisLogin('hidden')
      setHeightLogin('100px')
  
      var regis = document.getElementById('regis')
      var regisform = document.getElementById('formRegis')
      var warpRegis = document.getElementById('warp')
      var sign = document.getElementById('signin')

      warpRegis.style.height = '100%';
      warpRegis.style.top = '-100%';
      
      if(warpRegis.style.height == '100%'){
        regis.style.transition = 'height 1s ease-out';
        regisform.style.marginTop = '20px'
        regis.style.height = '400px'
        
        if(regis.style.height == '400px'){
          regisform.style.display = 'flex'
          regisform.style.opacity = '1';
          regisform.style.transition = 'opacity 1s ease-in 0.5s';
          sign.style.opacity = '1';
          sign.style.display = 'block'
          sign.style.transition = 'opacity 1s ease-in 0.5s';
        }
      }

    }

    const signInButton = () => {
      if( document.getElementById('subtitleLogin').style.visibility == 'hidden'){

        setVisibility('hidden')
        setVisLogin('visible')
        setHeightLogin('150px')
        setHeightTitle('0px')

        var warpRegis = document.getElementById('warp')
        var sign = document.getElementById('signin')
        var regis = document.getElementById('regis');
        var regisform = document.getElementById('formRegis');
  
        warpRegis.style.height = '';
        warpRegis.style.top = '';
        regis.style.height = '';
        regis.style.transition = '';
        regisform.style.opacity = '0'
        regisform.style.marginTop = ''
        regisform.style.transition = '';
        regisform.style.display = '';
        sign.style.display = '';
        sign.style.opacity = '0';
        sign.style.transition = '';
      
      }
    }
  
    const loginConsume = async (account) => {
      
        const options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
            },
          body: JSON.stringify(account)
        };
  
        await fetch("http://localhost:3000/api/authentication", 
        options)
        .then(response => {
          if (response.ok) {
            router.push('/speakup');
            return response.json();
          } else {
            throw new Error('Invalid username or password');
          }
        })
        .then(data => {
          sessionStorage.setItem("token", data.token)
          userChecked(data.token)
        })
        .catch(error => {
            if(error){
              alert('Email atau password anda salah')
            } ;
        });
    }
  
    const signIn = (event) => {

      event.preventDefault();

      const emailValue = document.getElementById('email').value;
      const passValue = document.getElementById('pass').value;
  
      const account = {
        email : emailValue,
        password : passValue
      }
       loginConsume(account);

       history.replaceState(null, null, "/speakup")

    }
  
  
    return(
      <>
        
        <Cursor 
        isGelly={true}
        cursorSize={40}

        />

      <section  data-cursor-exclusion id='loginpage' className=' bg-black h-[100vh] flex items-center justify-center overflow-hidden '>
        <div className='h-[500px]'>
          <div id='login' className=' w-[400px] h-[500px] bg-white flex flex-col   rounded-[20px] z-2 relative' >
              <div  style={{ height: heightLogin }}  className=' p-5 gap-[10px] flex flex-col items-center justify-center mt-[20px] '  >
                  <h2 className='text-3xl text-green-600 font-bold  cursor-default ' style={{ visibility : vislogin }}   >Sign In!</h2>
                  <p  id='subtitleLogin'  style={{ visibility : vislogin }} className='' >Silahkan masuk terlebih dahulu untuk lanjut</p>
              </div>
              <form style={{ visibility : vislogin }} className=' flex flex-col gap-[15px] items-center mt-[70px] '>
                  <input className='w-[330px] h-[25px] py-5 px-2 rounded-[5px] text-black bg-green-300 bg-opacity-25'  type='email' id='email' placeholder='Masukkan email'/>
                  <input className='w-[330px] h-[25px] py-5 px-2 rounded-[5px] text-black bg-green-300 bg-opacity-25'  type='password' id='pass' placeholder='Masukkan password'/>
                  <div className='flex w-full px-14 py-0 text-[12px]  '>     
                    <p className='' ></p>      
                  </div>
                  <button data-cursor-size='80px' type='submit' className='w-[250px] px-10 py-3  text-white bg-green-300 rounded-[5px]  hover:bg-green-900 hover:shadow-xl hover:shadow-gray-500  ' onClick={ signIn }  >Masuk</button>
              </form>
          </div>
          <div id='warp' className='z-10 relative h-max top-[-12%] flex flex-col  justify-end items-center'>
            <h2 id='signin' data-cursor-size='80px' onClick={ signInButton } className=' cursor-pointer text-3xl text-green-600 font-bold m-10 hidden opacity-0'>Sign In</h2>
              <RegisPage 
                
                subtitle={{
                  visibility : visibility
                }}

                formAction={{
                  visibility : visibility,
                }}
                
                titleGap={{
                  height : heightTitle
                }}

                titleAction={signUpButton}
              />
          </div>
        </div>
        </section>
      </>

 
    )
  }

export default LoginPage;