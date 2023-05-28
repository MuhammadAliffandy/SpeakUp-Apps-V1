
import comment from '@/pages/api/comment';
import React ,{ useState , useEffect, } from 'react';



const CardSpeak = ({

    allComm,
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
    creatDate,
    likeId,
    commentCount,
    likeCount,
    likeAction,
    deleteAction , 
    editAction , 
    editDone , 
    cancelAction}) => {

    return(
        <div className='flex flex-col'>
             <div key={keyCard} className='flex w-[780px] h-max '>
                
                {/* forum area */}
                
                <div id={forumGet} className='rounded-[10px] bg-white bg-opacity-10 w-[740px] h-max p-5 m-2 flex flex-col'>
                    <div className='flex justify-between'>

                    {/* col avatar with date */}

                        <div className='flex items-center gap-[8px] pb-2'>
                            <img  src={avatar} className='w-[18px] h-[18px] bg-orange-300 rounded-[100px]'/>
                            <p className='text-[14px]  text-gray-500'>{name}</p>
                        </div>
                        <div><p className='text-white text-[12px]' >{creatDate}</p></div>
                    </div>

                    {/* forum */}

                    <h2 className='text-white text-2xl font-bold'>{title}</h2>
                    <div className='text-white t px-2 py-1 bg-green-300 bg-opacity-20 rounded-[10px] border-gray-200 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-w-1 scrollbar-track-transparent scrollbar-thumb-green-200 scrollbar-thumb-rounded-[20px]  break-words w-[700px] h-max mt-[10px]'>
                        <p className='w-[680px] text-sm '>{speak}</p>
                    </div>

                    {/* button */}

                    <div className='flex text-[12px] text-white gap-[20px] mt-3 '>
                        <div id={buttonComHis} className='flex m-2 gap-[40px]'>
                            <button className= {  commentAllow }  onClick={ commentAction }  ><p className=' cursor-pointer'>Comment    {commentCount}</p>
                            </button>
                            <button id= {  likeId }  onClick={ likeAction }  className='flex items-center gap-[6px]'><i className='fa-solid fa-thumbs-up  cursor-pointer' ></i><p>{likeCount}</p>
                            </button>
                        </div>
                        <div  id={buttonGet} className='flex  m-2 gap-[40px]'>
                            <button className= { buttonEditAllow } style={{
                                visibility : 'hidden'
                            }} onClick={editAction}><p className=' cursor-pointer'>Edit</p>
                            </button>
                            <button  className={ buttonDeleteAllow } style={{
                                visibility : 'hidden'
                            }} onClick={deleteAction}><p className=' cursor-pointer'>Hapus</p>
                            </button>
                            
                        </div>
                    </div>
                </div>

                {/* early button */}

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

            <div id={addComment} className='rounded-[10px] w-[740px]  bg-white bg-opacity-10 px-5 py-3 m-2 hidden flex-col gap-[10px]'>
                <div className='overflow-y-hidden break-words w-[700px] h-[6vh] flex items-center'>
                    <textarea  id={idComment} rows='1' cols='0' className='w-[700px] p-[10px] bg-green-100 rounded-[10px] text-sm' placeholder='beri komentar anda' ></textarea>
                    <button className='w-10 h-10 rounded-[6px]' onClick={sendComment} ><i className="fa-solid fa-paper-plane text-white"></i></button>
                </div>
            </div>
            
            {/* comment area */}
            <div id={comWrapId} className='rounded-[10px] w-[750px] px-5 py-3 m-2 hidden flex-col gap-[10px]'>
                <ul className='overflow-y-hidden w-[640px]h-max gap-[10px] flex-col flex items-end'>
                    {allComm}
                </ul>
            </div>

        </div>
    )
}

export default CardSpeak;