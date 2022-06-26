import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa'
import { GoLocation } from "react-icons/go"
import { BiLike } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import groupPic1 from '../resources/img/group/group.png'
import groupPic2 from '../resources/img/group/group2.png'
import groupPic3 from '../resources/img/group/group3.png'
import groupPic4 from '../resources/img/group/group4.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase';
import './Styles/Others.css'
const Sidebar = () => {
    const [user] = useAuthState(auth)
    const [follow,setFollow] = useState(true)
    const [follow2,setFollow2] = useState(true)
    const [follow3,setFollow3] = useState(true)
    const [follow4,setFollow4] = useState(true)

    const followed = () =>{
        setFollow(!follow)
    }
    const followed2 = () =>{
        setFollow2(!follow2)
    }
    const followed3 = () =>{
        setFollow3(!follow3)
    }
    const followed4 = () =>{
        setFollow4(!follow4)
    }
    return (
        <>
         <div className='d-none d-md-block'>
         {
            user ? 
                <>
                <div className='d-flex justify-content-end mt-4'>
                <div className='d-flex justify-content-between' style={{ width: '250px' }}><span style={{ fontSize: '16px', fontWeight: '500' }}> <span><GoLocation /></span>| Enter your location</span> <span><AiOutlineClose /></span></div>
            </div>
            <div className='d-flex justify-content-end'><hr style={{ width: '255px', color: '#b8b8b8' }} /></div>
            <div className='d-flex justify-content-end'><span className='d-flex' style={{ width: '260px', color: '#b8b8b8', fontSize: '14px' }}> <span className='me-1'><AiOutlineExclamationCircle /></span><span>Your location will help us serve better and extend a personalised experience.</span></span></div>
                </>
            :
            
                <>
                <div className='d-flex justify-content-end mt-4'>
                <div className='d-flex justify-content-between' style={{ width: '250px' }}><span style={{ fontSize: '16px', fontWeight: '500' }}> <span><GoLocation /></span> Nodia, India</span> <span><FaPen /></span></div>
            </div>
            <div className='d-flex justify-content-end'><hr style={{ width: '255px', color: '#b8b8b8' }} /></div>
            <div className='d-flex justify-content-end'><span className='d-flex' style={{ width: '260px', color: '#b8b8b8', fontSize: '14px' }}> <span className='me-1'><AiOutlineExclamationCircle /></span><span>Your location will help us serve better and extend a personalised experience.</span></span></div>
                </>
            
          }
            <div className={`${user ? 'd-block':'d-none'}`}>
                <div className='d-flex justify-content-end'>
                    <div style={{ width: '230px' }} className='my-3'>
                        <p style={{ fontSize: '15px', fontWeight: '500' }}> <span><BiLike /></span> RECOMMENDED GROUPS</p>

                        <div className='d-flex justify-content-between align-items-center mb-2'>
                            <div className=' d-flex align-items-center'>
                                <img src={groupPic4} alt="" />
                                <p className='my-auto ms-2'>Leisure</p>
                            </div>
                            <span style={{
                                 background: follow ? '#edeef0' : 'black', 
                                 borderRadius: '14px', 
                                 padding: '2px 12px', 
                                 fontSize: '13px', 
                                 fontWeight: '500',
                                 color:follow ? 'black':'white'
                                }} 
                                 onClick={followed} >
                                    {
                                        follow ?
                                        <span>Follow</span>:
                                        <span>Followed</span>
                                    }
                                    </span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center my-3'>
                            <div className=' d-flex align-items-center'>
                                <img src={groupPic1} alt="" />
                                <p className='my-auto ms-2'>Activism</p>
                            </div>
                            <span style={{
                                 background: follow2 ? '#edeef0' : 'black', 
                                 borderRadius: '14px', 
                                 padding: '2px 12px', 
                                 fontSize: '13px', 
                                 fontWeight: '500',
                                 color:follow2 ? 'black':'white'
                                }} 
                                 onClick={followed2} >
                                    {
                                        follow2 ?
                                        <span>Follow</span>:
                                        <span>Followed</span>
                                    }
                                    </span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center my-3'>
                            <div className='d-flex align-items-center'>
                                <img src={groupPic2} alt="" />
                                <p className='my-auto ms-2'>MBA</p>
                            </div>
                            <span style={{
                                 background: follow3 ? '#edeef0' : 'black', 
                                 borderRadius: '14px', 
                                 padding: '2px 12px', 
                                 fontSize: '13px', 
                                 fontWeight: '500',
                                 color:follow3 ? 'black':'white'
                                }} 
                                 onClick={followed3} >
                                    {
                                        follow3 ?
                                        <span>Follow</span>:
                                        <span>Followed</span>
                                    }
                                    </span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center my-3'>
                            <div className=' d-flex align-items-center'>
                                <img src={groupPic3} alt="" />
                                <p className='my-auto ms-2'>Philosophy</p>
                            </div>
                            <span style={{
                                 background: follow4 ? '#edeef0' : 'black', 
                                 borderRadius: '14px', 
                                 padding: '2px 12px', 
                                 fontSize: '13px', 
                                 fontWeight: '500',
                                 color:follow4 ? 'black':'white'
                                }} 
                                 onClick={followed4} >
                                    {
                                        follow4 ?
                                        <span>Follow</span>:
                                        <span>Followed</span>
                                    }
                                    </span>
                        </div>
                        <div className='d-flex justify-content-end mt-5'>
                            <a href="#" style={{ fontSize: '14px', textDecoration: 'none' }}>See more...</a>
                        </div>
                    </div>
                </div>
            </div>
            
         </div>
        </>
    );
};

export default Sidebar;