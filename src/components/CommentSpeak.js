
import React ,{ useState , useEffect, } from 'react';

const CommentWrap = ({  avatar , person , comment ,commentDate }) => {
    return(
        <li className='flex-col justify-start items-center h-max mt-3 mb-3 '>
            <div className='flex justify-between items-center'>
                <div className='flex w-[80px] items-center gap-[8px] mb-2'>
                    <img  src={avatar} className='w-[18px] h-[18px] bg-orange-300 rounded-[100px]'/>
                    <p className='text-[12px]  text-green-500'>{person}</p>
                </div> 
                <p className='text-[8px] text-white opacity-[70%]'>{commentDate}</p>
            </div> 
            <p className='w-[500px] p-[10px] bg-green-100 opacity-[70%] break-words rounded-[8px] text-sm' >{comment}</p>
        </li>
    )
}

export default CommentWrap;