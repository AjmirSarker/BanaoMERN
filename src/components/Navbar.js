import React, { useState } from 'react';
import NavbarStyle from './Styles/Navbar.module.css'
import loginPic from '../resources/img/login.png'
import { MdFacebook } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import person1 from '../resources/img/person/person4.png'
import auth from '../Firebase/Firebase';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import {signOut} from 'firebase/auth'
import logo from "../resources/img/logo.png"
const Navbar = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className='d-none d-md-block'>
            <nav class="navbar navbar-light mx-5 my-2">
                <div class="container-fluid d-flex align-items-center">
                    <a class="navbar-brand">
                        <img src={logo} alt="" />
                    </a>
                    <input class={`form-control ${NavbarStyle.navSearch}`} type="search" placeholder=" 🔍   search for your favorite group in ATG" aria-label="Search" />
                    {
                        user ?
                            
                                <div className='d-flex '>
                                    <img src={person1} className='img-fluid' alt="" />
                                    <div class="dropdown nav-link">
                                        <a class=" dropdown-toggle text-decoration-none" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                        Siddharth Goyal
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                            <li><button onClick={()=>signOut(auth)} class="dropdown-item" type="button">Log Out</button></li>
                                        </ul>
                                    </div>
                                </div>
                            
                            :
                            <div className='d-flex align-items-center'>
                            <a className={NavbarStyle.navLink1} data-bs-toggle="modal" href="#exampleModalToggle" role="button">Create account.</a>
                            <span className='nav-item dropdown'>
                                <a class="nav-link dropdown-toggle p-1" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    It's free
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                </ul>
                            </span>
                        </div> 
                    }
                </div>
            </nav>
            <div>
                <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                    <div class="modal-dialog  modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div style={{ backgroundColor: '#effff4' }} class="modal-header position-relative">
                                <h5 class="modal-title mx-auto" id="exampleModalToggleLabel" style={{ fontSize: '15px', color: '#008a45' }}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h5>
                                <button style={{ position: 'absolute', right: '-5px', top: '-35px', background: '#ffffff', borderRadius: '50%', padding: '0 5px 10px 5px' }} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
                            </div>
                            <div class="modal-body mx-4 my-2">
                                <div className='d-flex justify-content-between'><h1 style={{ fontSize: '24px', fontWeight: '700' }}>Create Account</h1> <p>Already have an account yet ? <a style={{ color: '#2f6ce5', cursor: 'pointer' }} data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Sign in</a></p></div>
                                <div className='row'>
                                    <div className="col-6">
                                        <div >
                                            <div className='d-flex'>
                                                <input placeholder='First name' style={{ backgroundColor: '#f7f8fa', border: '1px solid #d9d9db', padding: '8px 0', borderRadius: '2px 2px 0 0' }} className='w-100 p-3' type="text" />
                                                <input placeholder='Last name' style={{ backgroundColor: '#f7f8fa', border: '1px solid #d9d9db', padding: '8px 0', borderRadius: '2px 2px 0 0' }} className='w-100 p-3' type="text" />
                                            </div>
                                            <div><input placeholder='Email' style={{ backgroundColor: '#f7f8fa', border: '1px solid #d9d9db', padding: '8px 0', borderRadius: '2px 2px 0 0' }} className='w-100 p-3' type="text" /></div>
                                            <div><input placeholder='Password' style={{ backgroundColor: '#f7f8fa', border: '1px solid #d9d9db', padding: '8px 0', borderRadius: '2px 2px 0 0' }} className='w-100 p-3' type="password" /></div>
                                            <div><input placeholder='Confirm Password' style={{ backgroundColor: '#f7f8fa', border: '1px solid #d9d9db', padding: '8px 0', borderRadius: '2px 2px 0 0' }} className='w-100 p-3' type="password" /></div>
                                        </div>
                                        <div><input style={{ borderRadius: '20px', backgroundColor: '#2f6ce5', fontSize: '16px', fontWeight: '600' }} type="button" value="Create Account" className='w-100 my-4 py-2 border-0 text-light' /></div>
                                        <div><button style={{ backgroundColor: '#ffffff', border: '1px solid #d9d9db', borderRadius: '2px' }} className='w-100 py-2 '><span className='text-primary'><MdFacebook /></span> Sign up with Facebook</button></div>
                                        <div><button style={{ backgroundColor: '#ffffff', border: '1px solid #d9d9db', borderRadius: '2px' }} className='w-100 py-2 mt-2' onClick={() => signInWithGoogle()}><FcGoogle /> Sign up with Google</button></div>
                                    </div>
                                    <div className="col-6 text-center my-auto">
                                        <img className='w-100' src={loginPic} alt="" />
                                        <p style={{ marginTop: '44px', fontSize: '11px', color: 'gray', fontWeight: '500' }}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                    <div class="modal-dialog  modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header position-relative">
                                <h5 class="modal-title mx-auto" id="exampleModalToggleLabel2" style={{ fontSize: '15px', color: '#008a45' }}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h5>
                                <button style={{ position: 'absolute', right: '-5px', top: '-35px', background: '#ffffff', borderRadius: '50%', padding: '0 5px 10px 5px' }} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
                            </div>
                            <div class="modal-body mx-4 my-2">
                                <div className='d-flex justify-content-between'><h1 style={{ fontSize: '24px', fontWeight: '700' }}>Sign in</h1> <p>Don't have an account yet ? <a style={{ color: '#2f6ce5', cursor: 'pointer' }} data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Create new for free!</a></p></div>
                                <div className='row'>
                                    <div className="col-6">
                                        <div >
                                            <div><input placeholder='Email' style={{ backgroundColor: '#f7f8fa', border: '1px solid #d9d9db', padding: '8px 0', borderRadius: '2px 2px 0 0' }} className='w-100 p-3' type="text" /></div>
                                            <div><input placeholder='Password' style={{ backgroundColor: '#f7f8fa', border: '1px solid #d9d9db', padding: '8px 0', borderRadius: '2px 2px 0 0' }} className='w-100 p-3' type="password" /></div>
                                        </div>
                                        <div><input style={{ borderRadius: '20px', backgroundColor: '#2f6ce5', fontSize: '16px', fontWeight: '600' }} type="button" value="Sign In" className='w-100 my-4 py-2 border-0 text-light' /></div>
                                        <div><button style={{ backgroundColor: '#ffffff', border: '1px solid #d9d9db', borderRadius: '2px' }} className='w-100 py-2 '><span className='text-primary'><MdFacebook /></span> Sign up with Facebook</button></div>
                                        <div><button
                                            onClick={() => signInWithGoogle()}
                                            style={{ backgroundColor: '#ffffff', border: '1px solid #d9d9db', borderRadius: '2px' }} className='w-100 py-2 mt-2'><FcGoogle /> Sign up with Google</button></div>
                                        <div><button style={{ backgroundColor: '#ffffff', border: 'none', fontWeight: '500', fontSize: '14px' }} className='w-100 py-2 mt-2'>Forget Password ?</button></div>

                                    </div>
                                    <div className="col-6 text-center my-auto">
                                        <img src={loginPic} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;