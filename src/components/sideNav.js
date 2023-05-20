import React ,{ useState , useEffect, } from 'react';
import { useRouter } from 'next/router'
import ListNav from '@/components/listNav';

const SideNav = () => {

    const route = useRouter()
    const [widthListCurrent ,setWidthList ] = useState('w-[160px]');
    const [chevronIcon , setChevronIcon] = useState('fa-solid fa-chevron-left fa-1x text-green-700 hover:text-white p-2');

    const SmallNav = () => {
        for( let i=1 ; i < 5 ; i++ ){
            const contentList = document.getElementById(`list${i}`);
            if( widthListCurrent == 'w-[160px]'){
                setWidthList('w-[50px]')
                contentList.style.visibility = 'hidden';
                contentList.style.display = 'none';
                setChevronIcon('fa-solid fa-chevron-right fa-1x text-green-700 hover:text-white p-2')
                document.getElementById('list5').style.justifyContent = 'center'
            }else{
                setWidthList('w-[160px]')
                contentList.style.visibility = '';
                contentList.style.display = '';
                setChevronIcon('fa-solid fa-chevron-left fa-1x text-green-700 hover:text-white p-2')
                document.getElementById('list5').style.justifyContent = 'end'
            }
        }


    } 

    const signOut = ()=> {
        route.push('/')
        history.replaceState(null, null, "/");
        sessionStorage.setItem('userID','')
    }
    return (
        <>
        <aside  className='bg-black flex justify-center'>
            <div className='flex items-center justify-start w-[200px] h-[100vh]'>
                <div className='m-2 h-[95%] w-max bg-green-500 rounded-[15px] flex flex-col justify-between items-center'>
                    <ul className='list-none'>
                        {/* listt nav */}
                        <li  id='list5' className=' p-2 m-2 flex items-center justify-end rounded-[10px]'>
                            <div   onClick={SmallNav} className='flex items-center justify-center  hover:bg-green-700 w-[28px] h-[28px] bg-white rounded-[10px]'>
                                <i className={ chevronIcon }></i>
                            </div>
                        </li>
                        <ListNav
                            idList={'list1'}
                            textNav={'Home'}
                            iconNav={'fa-solid fa-house text-green-500'}
                            widthList={widthListCurrent}
                        />
                        <ListNav
                            idList={'list2'}
                            textNav={'Speakmu'}
                            iconNav={'fa-solid fa-face-grin-beam text-green-500'}
                            widthList={widthListCurrent}
                        />
                        <ListNav
                            idList={'list3'}
                            textNav={'Profil'}
                            iconNav={'fa-solid fa-user text-green-500'}
                            widthList={widthListCurrent}
                        />
                        <div  className=' mx-2 h-[1px] bg-slate-50'></div>
                    </ul>
                    <ul className='list-none'>
                        <div  className=' mx-2 h-[1px] bg-slate-50'></div>
                        <ListNav
                            idList={'list4'}
                            textNav={'SignOut'}
                            iconNav={'fa-solid fa-right-from-bracket text-red-500'}
                            
                            widthList={widthListCurrent} 
                            functionButton={()=>{
                                signOut();
                            }}
                        />
                    </ul>

                </div>
            </div>
        </aside>
        </>
    )
}

export default SideNav