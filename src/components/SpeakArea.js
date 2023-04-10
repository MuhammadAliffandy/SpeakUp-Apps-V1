import React ,{ useState , useEffect, } from 'react';
import CardSpeak from './CardSpeak';
import CommentWrap from './CommentSpeak';


const SpeakArea = () => {

    const [  allSpeak, setSpeak  ] = useState([]);
    const [  person, setPerson  ] = useState();
  
    useEffect(()=>{
        fetch("http://localhost:3000/api/forum")
        .then( response => {
            return response.json(); 
        } )
        .then( data => {
            setSpeak(data.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)));
            
        });
        
        var userID = sessionStorage.getItem('userID');
            
        const buttons = document.querySelectorAll(`.edit${userID}`);
        buttons.forEach(button => {
            button.setAttribute('disabled', false);
            button.style.visibility = 'visible'

        });
        const buttond = document.querySelectorAll(`.del${userID}`);
        buttond.forEach(button => {
            button.setAttribute('disabled', false);
            button.style.visibility = 'visible'
           
        });

    
        const options = {
            method: 'GET',
            headers: new Headers({
                "Authorization": `Bearer ${sessionStorage.getItem("token")}`
              })
        }

        fetch("http://localhost:3000/api/person",options)
        .then( response => {
        return response.json(); 
        } )
        .then( data => {
            setPerson( data.person.id );

        });


    });


    // action button edit dan delete

    const editConsume = async(speak) => {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(speak)
          };
      
          await fetch("http://localhost:3000/api/edit", 
          options)
          .then(response => {
            if (response.ok) {

            cancelEdit( `forumGet${speak.id}`,`buttonGet${speak.id}`,`forumEdit${speak.id}`,`buttonEdit${speak.id}`,`comButtonWrap${speak.id}` )

              return response.json();
            } else {
              throw new Error('Invalid edit');
            }
          })
          .then(data => {
            return data ;
          })
          .catch(error => {
              if(error){
                alert(error)
              } ;
          });
    }

    const delSpeak = async ( id ) => {


        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id : id 
            })
        };
    
        const response = await fetch("http://localhost:3000/api/delete", options);
        const responseJson = await response.json();
    }

    const editSpeak = (forumGet , buttonGet , forumEdit , buttonEdit ,comButton) => {

        var ForumGet = document.getElementById(forumGet)
        var ButtonGet = document.getElementById(buttonGet)
        var ForumEdit = document.getElementById(forumEdit)
        var ButtonEdit= document.getElementById(buttonEdit)
        var CommentButton= document.getElementById(comButton)

        if ( ForumGet.style.display = 'flex' ) {
            ForumGet.style.display = 'none'
            ButtonGet.style.display = 'none'
            CommentButton.style.display = 'none'
        }
        
        ForumEdit.style.display = 'flex'
        ButtonEdit.style.display = 'flex'

    }
    
    const cancelEdit = (forumGet , buttonGet , forumEdit , buttonEdit,comButton) => {

        var ForumGet = document.getElementById(forumGet)
        var ButtonGet = document.getElementById(buttonGet)
        var ForumEdit = document.getElementById(forumEdit)
        var ButtonEdit= document.getElementById(buttonEdit)
        var CommentButton= document.getElementById(comButton)

        if ( ForumGet.style.display = 'none' ) {

            CommentButton.style.display = 'flex'
            ForumGet.style.display = 'flex'
            ButtonGet.style.display = 'flex'
            ForumEdit.style.display = ''
            ButtonEdit.style.display = ''
        }
    }
    
    const editDone = (id , x , y) => {

        var titleEditValue = document.getElementById(x).value;
        var textEditValue = document.getElementById(y).value;

        const forum = {
            id : id,
            title : titleEditValue,
            speak : textEditValue,
        }

        editConsume(forum)
    }

    // action button comment 
    
    const commentSpeak = ( forumComment , comArea) => {
        var ForumCom = document.getElementById(forumComment)     
        var ComArea = document.getElementById(comArea)

        if ( ForumCom.style.display == 'flex' ) {
            ForumCom.style.display = ''
            ComArea.style.display = ''
        }else{
            ComArea.style.display = 'flex'
            ForumCom.style.display = 'flex'
        }
    }
    
    const commentConsume = async(com) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(com)
          };
      
          await fetch("http://localhost:3000/api/comment", 
          options)
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Invalid comment');
            }
          })
          .then(data => {
            return data ;
          })
    }

    const sendConsume = (idCom ,f , p) => {

        const comText = document.getElementById(idCom)

        const com = {
            comment : comText.value,
            forumId : f,
            personId : p
        }

        commentConsume(com);
        comText.value = '';
    }

    // show all action button 

    const allButton = ( wrapButton ) => {
        var WrapButton = document.getElementById(wrapButton)     

        if ( WrapButton.style.display == 'flex' ) {
            WrapButton.style.display = ''
        }else{
            WrapButton.style.display = 'flex'
        }
    }

    return(
        <section className='flex items-center justify-center h-[100vh] ' >
            <div  className='w-[900px] h-[90vh] flex flex-col items-center justify-center  '>
                <h1 id='speakupForum' className='text-white font-bold text-4xl mb-5' >SpeakUp Forum</h1>
                <p className='text-white font-semibold text-md mb-5'  >Suarakan keluh kesah hatimu sebelum merusak raga jiwamu</p>
                <div className='  flex flex-col gap-[10px] items-center w-[880px] h-[87vh] p-10 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-w-1 scrollbar-track-transparent '>
                    {
                        allSpeak.map((data)=>{
                            return(
                                <CardSpeak
                                    //argument speak card 
                                    key={data.id}
                                    keyCard={data.id}
                                    name = {data.person.nickname}
                                    avatar={data.person.avatar}
                                    title={data.title} 
                                    speak={data.speak}

                                    // inisiasi per id card
                                    forumGet={`forumGet${data.id}`}
                                    buttonGet={`buttonGet${data.id}`}
                                    forumEdit={`forumEdit${data.id}`}
                                    buttonEdit={`buttonEdit${data.id}`}
                                    
                                    // inisiasi button edit delete
                                    idEditTitle={`title${data.id}`}
                                    idEditSpeak={`speak${data.id}`}
                                    buttonEditAllow={`edit${data.personId}`}
                                    buttonDeleteAllow={`del${data.personId}`}
                                    
                                    // action button edit delete
                                    deleteAction={() => { delSpeak(data.id) }}
                                    editAction={()=>{
                                        editSpeak( `forumGet${data.id}`,`buttonGet${data.id}`,`forumEdit${data.id}`,`buttonEdit${data.id}`,`comButtonWrap${data.id}` )
                                    }}
                                    cancelAction={()=>{
                                        cancelEdit( `forumGet${data.id}`,`buttonGet${data.id}`,`forumEdit${data.id}`,`buttonEdit${data.id}`,`comButtonWrap${data.id}` )
                                    }}
                                    editDone={()=>{
                                        editDone(data.id,`title${data.id}`,`speak${data.id}`)
                                    }}
                                    
                                    // inisiasi  comment
                                    commentAllow={`com${data.id}`}
                                    idComment={ `comment${data.id}` }
                             
                                    // inisiasi button comment
                                    addComment={ `forumComment${data.id}` }
                                    buttonComHis={`comButtonWrap${data.id}`}

                                    // action button comment
                                    commentAction={( )=>{
                                        commentSpeak(`forumComment${data.id}`,`comWrap${data.id}` )
                                    }}

                                    sendComment={()=>{
                                        sendConsume( `comment${data.id}`, data.id , person )
                                    }}

                                    // show all button 
                                    allButtonWrap={`wrapbutton${data.id}`}
                                    showAllButton={()=>{
                                        allButton(`wrapbutton${data.id}`)
                                    }}

                                    // comment area

                                    comWrapId={`comWrap${data.id}`}

                                    allComm={
                                        data.comment.map((data)=>{
                                            return(
                                                <CommentWrap
                                                    comment={data.comment}
                                                    avatar={data.person.avatar}
                                                    person={data.person.nickname}
                                                />
                                            )
                                        })
                                    }

                                    />
                            )
                        })

                    }
                </div>
            </div>
        </section>
    )
}


export default SpeakArea;