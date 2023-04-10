
import React ,{ useState , useEffect, } from 'react';

const CommentWrap = ({ avatar , person , comment }) => {
    return(
        <li className='flex items-center h-max gap-[10px]'>
            <div className='flex w-[80px] items-center gap-[8px]'>
                <img  src={avatar} className='w-[18px] h-[18px] bg-orange-300 rounded-[100px]'/>
                <p className='text-[14px]  text-gray-500'>{person}</p>
            </div>  
            <p className='w-[500px] p-[10px] bg-green-100 break-words rounded-[10px] text-sm' >{comment}</p>
        </li>
    )
}

export default CommentWrap;