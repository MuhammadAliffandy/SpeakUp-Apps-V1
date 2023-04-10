
import React ,{ useState , useEffect, } from 'react';



const CardSpeak = ({

    allComm,
    showAllButton,
    allButtonWrap,
    comWrapId,
    // argument comment button

    buttonComHis,
    idComment,
    commentAction,
    commentAllow,
    addComment,
    sendComment, 

    // argument edit button
    
    buttonEditAllow,
    buttonDeleteAllow,
    idEditTitle,
    idEditSpeak,  
    forumGet , 
    buttonGet , 
    forumEdit , 
    buttonEdit , 

    // argument render cardSpeak

    keyCard , 
    avatar,  
    name  , 
    title , 
    speak , 
    deleteAction , 
    editAction , 
    editDone , 
    cancelAction}) => {

    return(
        <div className='flex flex-col'>
             <div key= {keyCard} className='flex w-[780px] h-max '>
                
                {/* forum area */}
                
                <div id={forumGet} className='rounded-[10px] bg-white bg-opacity-10 w-[680px] h-max p-5 m-2 flex flex-col'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-[8px] pb-2'>
                            <img  src={avatar} className='w-[18px] h-[18px] bg-orange-300 rounded-[100px]'/>
                            <p className='text-[14px]  text-gray-500'>{name}</p>
                        </div>
                        <div><button onClick={showAllButton} ><i  className='fa-solid fa-ellipsis text-white'></i></button></div>
                    </div>
                    <h2 className='text-white text-2xl font-bold'>{title}</h2>
                    <div className='text-white t px-2 py-1 bg-green-300 bg-opacity-20 rounded-[10px] border-gray-200 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-w-1 scrollbar-track-transparent scrollbar-thumb-green-200 scrollbar-thumb-rounded-[20px]  break-words w-[650px] h-max mt-[10px]'>
                        <p className='w-[600px] text-sm '>{speak}</p>
                    </div>
                </div>

                {/* early button */}

                <div id={allButtonWrap} className='hidden '> 

                    {/* button comment   */}

                    <div id={buttonComHis} className='flex flex-col m-2 gap-[10px]'>
                        <button className= {  commentAllow } style={{
                            backgroundColor: 'white',
                            width : '2.5rem',
                            height : '2.5rem',
                            borderRadius: '6px',
                        }} onClick={ commentAction }  ><i className="fa-solid fa-comment text-yellow-300" ></i>
                        </button>
                        <button className= {  commentAllow } style={{
                            backgroundColor: 'white',
                            width : '2.5rem',
                            height : '2.5rem',
                            borderRadius: '6px',
                        }} onClick={ commentAction }  ><i className="fa-solid fa-history text-yellow-300" ></i>
                        </button>
                    </div>

                    <div  id={buttonGet} className='flex flex-col m-2 gap-[10px]'>
                        <button  className={ buttonDeleteAllow } style={{
                            backgroundColor: 'rgb(239 68 68 / var(--tw-bg-opacity))',
                            width : '2.5rem',
                            height : '2.5rem',
                            borderRadius: '6px',
                            visibility : 'hidden'
                        }} onClick={deleteAction}><i className="fa-solid fa-trash-can text-white"></i>
                        </button>
                        <button className= { buttonEditAllow } style={{
                            backgroundColor: 'white',
                            width : '2.5rem',
                            height : '2.5rem',
                            borderRadius: '6px',
                            visibility : 'hidden'
                        }} onClick={editAction}><i className="fa-solid fa-pen-to-square text-green-600" ></i>
                        </button>
                    </div>
                </div>

                {/* change to edit data */}

                <div id={forumEdit} className='rounded-[10px] w-[690px]  bg-white bg-opacity-10 px-5 py-3 m-2 hidden flex-col gap-[10px]'>
                    <input  id={idEditTitle} className='w-[660px] p-[10px] bg-green-100 rounded-[10px] '  type='text' placeholder={title} ></input>
                    <div className='overflow-y-hidden break-words w-[670px] h-[11vh]'>
                        <textarea  id={idEditSpeak} rows='3' cols='60' className='w-[650px] p-[10px] bg-green-100 rounded-[10px] text-sm' placeholder={speak} ></textarea>
                    </div>
                </div>
                <div id={buttonEdit} className='flex-col m-2 gap-[10px] hidden'>
                    <button  className='w-10 h-10 bg-green-500 rounded-[6px]' onClick={editDone} ><i className="fa-solid fa-circle-check text-white"></i></button>
                    <button className='w-10 h-10 bg-white rounded-[6px]' onClick={cancelAction} ><i className="fa-solid fa-circle-xmark text-red-600"></i></button>
                </div>
            </div>

            {/*  form  input comment */}

            <div id={addComment} className='rounded-[10px] w-[680px]  bg-white bg-opacity-10 px-5 py-3 m-2 hidden flex-col gap-[10px]'>
                <div className='overflow-y-hidden break-words w-[650px] h-[6vh] flex items-center'>
                    <textarea  id={idComment} rows='1' cols='0' className='w-[650px] p-[10px] bg-green-100 rounded-[10px] text-sm' placeholder='beri komentar anda' ></textarea>
                    <button className='w-10 h-10 rounded-[6px]' onClick={sendComment} ><i className="fa-solid fa-paper-plane text-white"></i></button>
                </div>
            </div>
            
            {/* comment area */}
            <div id={comWrapId} className='rounded-[10px] w-[680px] px-5 py-3 m-2 hidden flex-col gap-[10px]'>
                <ul className='overflow-y-hidden w-[640px]h-max gap-[10px] flex-col flex items-end'>
                    {allComm}
                </ul>
            </div>

        </div>
    )
}

export default CardSpeak;