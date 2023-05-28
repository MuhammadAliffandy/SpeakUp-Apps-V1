import React ,{ useState , useEffect, } from 'react';
import moment from 'moment/moment';
import CardSpeak from './CardSpeak';
import CommentWrap from './CommentSpeak';

const SpeakMe = () => {

    const [  allSpeak, setSpeak  ] = useState([]);
    const [  sessionPersonId, setSessionPersonId  ] = useState('');
  
    useEffect(()=>{

        var token = sessionStorage.getItem('token');

        userChecked(token)
        
    });



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
            setSpeak(data.person[0].forum)
          return data ;
        })
      }
  


    // action input search 

    const customSearch = () => {
        const searchSpeak = document.getElementById('searchSpeak').value.toLowerCase();
        allSpeak.map((data)=>{
            const listForum = document.getElementById(`forumGet${data.id}`);   
            const listUi = document.getElementById(`list${data.id}`);   
            if( listForum.innerText.toLowerCase().indexOf(searchSpeak) >= 0 ){
                listForum.style.display = '';   
                listUi.style.display = '';   
            }else{
                listForum.style.display = 'none';
                listUi.style.display = 'none';   
            }
        })    
    }
    

    return(
        <section className='flex items-center justify-center h-[100vh] ' >
        
            {/* judul */}
  

            <div  className='w-[900px] h-[90vh] flex flex-col items-center justify-center'>

                {/* custom search */}
                <div className='flex gap-[8px] '>
                    <input id='searchSpeak' onChange={customSearch}   className=' p-2 w-[45vw] rounded-[12px] bg-[#303030] placeholder-white text-[12px] focus:text-white' placeholder='Cari speak...' type='text'></input>

                    <button  onClick={customSearch} className='p-2 w-[40px] h-[40px] bg-green-700 rounded-[10px]'><i className="fa-solid fa-magnifying-glass text-white "></i></button>
                </div>
                {/* card */}
                <div className=' my-2 flex flex-col  items-start w-[65vw] h-[90vh] p-5 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-w-1 scrollbar-track-transparent'>
                    {
                        allSpeak.map((data)=> {

                            const tanggal = data.updatedAt ; 
                            const displayTanggal = moment(tanggal).format('DD MMMM YYYY');

                            // 

                            return(
                                <>
                                    <div className='flex items-center h-max w-max'>
                                        <div  id={`list${data.id}`} className='w-[100px] h-full  flex flex-col justify-center items-center relative'>
                                            <div className='h-full bg-[#1A1A1A] w-[3px]'></div>
                                            <div className='absolute flex items-center w-[35px] h-[35px] justify-center bg-[#1A1A1A] rounded-full'>
                                                <i className="fa-solid fa-star fa-1x text-green-700"></i>
                                            </div>
                                        </div>
                                        <CardSpeak
                                            //argument speak card 
                                            key={data.id}
                                            keyCard={data.id}
                                            name = {data.person.nickname}
                                            avatar={data.person.avatar}
                                            title={data.title} 
                                            speak={data.speak}
                                            creatDate={displayTanggal}
                                            commentCount={data.comment.length}
                                            likeCount={data.countLike}
                                            forumGet={`forumGet${data.id}`}

                                        />
                                    </div>
                                </>
                            )
                        })

                    }
                </div>
            </div>
        </section>
    )
}


export default SpeakMe;