import React ,{ useState , useEffect, } from 'react';


const ListNav = ({ idList, textNav , iconNav ,functionButton , widthList }) => {
    const settingsIcon = `${iconNav} p-2 `;
    const widthListNav = `${widthList}  p-2 m-2  hover:bg-green-700 rounded-[10px] cursor-pointer `;

    return (
        <>
            <li className={widthListNav} onClick={functionButton}>
                <div className=' flex items-center justify-left '>
                    <div className='flex items-center justify-center  w-[35px] h-[35px] bg-white rounded-[10px]'>
                        <i className= {settingsIcon}></i>
                    </div>
                    <h3 id={idList} className='px-4 text-white '>{textNav}</h3>
                </div>
            </li>
        </>
    )
}

export default ListNav;