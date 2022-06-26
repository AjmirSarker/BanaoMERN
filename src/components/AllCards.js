import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { HiShare } from 'react-icons/hi';
import { RiCalendarEventLine } from 'react-icons/ri';
import { GoLocation } from 'react-icons/go';
import { IoBagOutline } from 'react-icons/io5';
import postImg from '../resources/img/post/post1.png';
import postImg2 from '../resources/img/post/post2.png';
import postImg3 from '../resources/img/post/post3.png';
import person1 from '../resources/img/person/person1.png';
import person2 from '../resources/img/person/person2.png';
import person3 from '../resources/img/person/person3.png';
import person4 from '../resources/img/person/person4.png';
import { ImPencil } from 'react-icons/im';
import './Styles/Others.css';
const AllCards= () => {
  return (
    <div className="Relativee ">
      <div className="d-flex justify-content-end fixed-bottom me-5 pe-5  mb-3">
        <div className="Fixed-button d-block d-md-none d-flex align-items-center justify-content-center">
          <a href="#" className="to-top ">
            <ImPencil />
          </a>
        </div>
      </div>
      <div class="card mb-3 ">
        <img className="card-img-top" src={postImg} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title d-none d-md-block" style={{ fontSize: '18px' }}>
            ✍️ <span style={{ fontSize: '20px' }}>Article</span>
          </h5>
          <h5 class="card-title d-block d-md-none" style={{ fontSize: '14px' }}>
            ✍️ <span style={{ fontSize: '16px' }}>Article</span>
          </h5>
          <div className="d-flex justify-content-between align-items-start mt-3 mb-2">
            <h4 className="col-9 d-none d-md-block">
              What if famous brands had regular fonts? Meet RegulaBrands!
            </h4>
            <p className="d-block d-md-none">
              What if famous brands had regular fonts? Meet RegulaBrands!
            </p>
            <div className="d-flex justify-content-start">
              <div class="dropdown-menu-end user-select-none">
                <a
                  style={{ fontSize: '25px', color: 'black' }}
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsThreeDots />
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p
            class="card-text d-none d-md-block"
            style={{ color: '#5C5C5C', fontSize: '19px', fontWeight: '400' }}
          >
            I've worked in UX for the better part of a decade...
          </p>
          <p
            class="card-text d-block d-md-none"
            style={{ color: '#5C5C5C', fontSize: '14px', fontWeight: '400' }}
          >
            I've worked in UX for the better part of a decade...
          </p>

          <div className="d-none d-md-block">
            <div className="d-flex justify-content-between ">
              <div className="d-flex align-items-center">
                <div>
                  <img src={person1} alt="" />
                </div>
                <div>
                  <h5
                    className="mt-1 ms-2"
                    style={{ fontSize: '18px', fontWeight: '600' }}
                  >
                    Sharthak Kamra
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <p>
                  <AiOutlineEye /> <span>1.4k views</span>
                </p>

                <p style={{ backgroundColor: ' #E5E5E5' }} className="btn ms-5">
                  <HiShare />
                </p>
              </div>
            </div>
          </div>

          <div className="d-block d-md-none">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <img src={person1} alt="" />
                <div className="d-grid ms-1">
                  <span>Sharthak Kamra</span>
                  <span>1.4k views</span>
                </div>
              </div>
              <div className="">
                <p
                  style={{ background: '#d9d9db' }}
                  className="border p-1 my-auto"
                >
                  <HiShare />
                  <span className="ms-1">Share</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3">
        <img className="card-img-top" src={postImg3} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title d-none d-md-block" style={{ fontSize: '18px' }}>
            🔬️ <span style={{ fontSize: '20px' }}>Education</span>
          </h5>
          <h5 class="card-title d-block d-md-none" style={{ fontSize: '14px' }}>
            🔬️ <span style={{ fontSize: '16px' }}>Education</span>
          </h5>
          <div className="d-flex justify-content-between align-items-start mt-3 mb-2">
            <h4 className="col-9 d-none d-md-block">
              Tax Benefits for Investment under National Pension Scheme launched
              by Government
            </h4>
            <p className="d-block d-md-none">
              Tax Benefits for Investment under National Pension Scheme launched
              by Government
            </p>
            <div className="d-flex justify-content-start">
              <div class="dropdown-menu-end user-select-none">
                <a
                  style={{ fontSize: '25px', color: 'black' }}
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsThreeDots />
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p
            class="card-text d-none d-md-block"
            style={{ color: '#5C5C5C', fontSize: '19px', fontWeight: '400' }}
          >
            I've worked in UX for the better part of a decade...
          </p>
          <p
            class="card-text d-block d-md-none"
            style={{ color: '#5C5C5C', fontSize: '14px', fontWeight: '400' }}
          >
            I've worked in UX for the better part of a decade...
          </p>

          <div className="d-none d-md-block">
            <div className="d-flex justify-content-between ">
              <div className="d-flex align-items-center">
                <div>
                  <img src={person2} alt="" />
                </div>
                <div>
                  <h5
                    className="mt-1 ms-2"
                    style={{ fontSize: '18px', fontWeight: '600' }}
                  >
                    Sarah West
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <p>
                  <AiOutlineEye /> <span>1.4k views</span>
                </p>

                <p style={{ backgroundColor: ' #E5E5E5' }} className="btn ms-5">
                  <HiShare />
                </p>
              </div>
            </div>
          </div>

          <div className="d-block d-md-none">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <img src={person2} alt="" />
                <div className="d-grid ms-1">
                  <span>Sarah West</span>
                  <span>4.8k views</span>
                </div>
              </div>
              <div className="">
                <p
                  style={{ background: '#d9d9db' }}
                  className="border p-1 my-auto"
                >
                  <HiShare />
                  <span className="ms-1">Share</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3">
        <img className="card-img-top" src={postImg2} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title d-none d-md-block" style={{ fontSize: '18px' }}>
            🗓️ <span style={{ fontSize: '20px' }}>Meetup</span>
          </h5>
          <h5 class="card-title d-block d-md-none" style={{ fontSize: '15px' }}>
            🗓️ <span style={{ fontSize: '16px' }}>Meetup</span>
          </h5>
          <div className="d-flex justify-content-between align-items-start mt-3 mb-2">
            <h4 className="col-9 d-none d-md-block">
              Finance & Investment Elite Social Mixer @Lujiazui
            </h4>
            <p className="d-block d-md-none">
              Finance & Investment Elite Social Mixer @Lujiazui
            </p>
            <div className="d-flex justify-content-start">
              <div class="dropdown-menu-end user-select-none">
                <a
                  style={{ fontSize: '25px', color: 'black' }}
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsThreeDots />
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-none d-md-block">
              <p
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  marginRight: '85px'
                }}
              >
                <span className="me-2">
                  <RiCalendarEventLine />
                </span>
                Fri, 12 Oct, 2018
              </p>
            </div>
            <div className="d-block d-md-none">
              <p style={{ fontSize: '12px', fontWeight: '600' }}>
                <span className="me-2">
                  <RiCalendarEventLine />
                </span>
                Fri, 12 Oct, 2018
              </p>
            </div>
            <div className="d-none d-md-block">
              <p
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  lineHeight: '20px'
                }}
              >
                <span className="me-2">
                  <GoLocation />
                </span>
                Ahmedabad, India
              </p>
            </div>
            <div className="d-block d-md-none">
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  lineHeight: '20px'
                }}
              >
                <span className="me-2">
                  <GoLocation />
                </span>
                Ahmedabad, India
              </p>
            </div>
          </div>
          <div>
            <button
              className="w-100 py-2 mt-2 mb-4"
              style={{
                border: '1px solid #A9AEB8',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '600',
                backgroundColor: '#ffffff',
                color: '#E56135'
              }}
            >
              Visit Website
            </button>
          </div>

          <div className="d-none d-md-block">
            <div className="d-flex justify-content-between ">
              <div className="d-flex align-items-center">
                <div>
                  <img src={person3} alt="" />
                </div>
                <div>
                  <h5
                    className="mt-1 ms-2"
                    style={{ fontSize: '18px', fontWeight: '600' }}
                  >
                    Sarah West
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <p>
                  <AiOutlineEye /> <span>1.4k views</span>
                </p>

                <p style={{ backgroundColor: ' #E5E5E5' }} className="btn ms-5">
                  <HiShare />
                </p>
              </div>
            </div>
          </div>

          <div className="d-block d-md-none">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <img src={person3} alt="" />
                <div className="d-grid ms-1">
                  <span>Sarah West</span>
                  <span>4.8k views</span>
                </div>
              </div>
              <div className="">
                <p
                  style={{ background: '#d9d9db' }}
                  className="border p-1 my-auto"
                >
                  <HiShare />
                  <span className="ms-1">Share</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title d-none d-md-block" style={{ fontSize: '18px' }}>
            💼️ <span style={{ fontSize: '20px' }}>Job</span>
          </h5>
          <h5 class="card-title d-block d-md-none" style={{ fontSize: '15px' }}>
            💼️ <span style={{ fontSize: '16px' }}>Job</span>
          </h5>

          <div className="d-flex justify-content-between align-items-start mt-3 mb-2">
            <h4 className="col-9 d-none d-md-block">Software Developer</h4>

            <p className="d-block d-md-none">Software Developer</p>
            <div className="d-flex justify-content-start">
              <div class="dropdown-menu-end user-select-none">
                <a
                  style={{ fontSize: '25px', color: 'black' }}
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsThreeDots />
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-none d-md-block">
              <p
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  marginRight: '85px'
                }}
              >
                <span className="me-2">
                  <IoBagOutline />
                </span>
                Innovaccer Analytics Private Ltd.{' '}
              </p>
            </div>
            <div className="d-block d-md-none">
              <p style={{ fontSize: '12px', fontWeight: '600' }}>
                <span className="me-2">
                  <IoBagOutline />
                </span>
                Innovaccer Analytics...{' '}
              </p>
            </div>
            <div className="d-none d-md-block">
              <p style={{ fontSize: '15px', fontWeight: '600' }}>
                <span className="me-2">
                  <GoLocation />
                </span>
                Nodia, India
              </p>
            </div>
            <div className="d-block d-md-none">
              <p style={{ fontSize: '12px', fontWeight: '600' }}>
                <span className="me-2">
                  <GoLocation />
                </span>
                Nodia, India
              </p>
            </div>
          </div>
          <div>
            <button
              className="w-100 py-2 mt-2 mb-4"
              style={{
                border: '1px solid #A9AEB8',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '600',
                backgroundColor: '#ffffff',
                color: '#02B875'
              }}
            >
              Apply on Timesjobs
            </button>
          </div>
          <div className="d-none d-md-block">
            <div className="d-flex justify-content-between ">
              <div className="d-flex align-items-center">
                <div>
                  <img src={person4} alt="" />
                </div>
                <div>
                  <h5
                    className="mt-1 ms-2"
                    style={{ fontSize: '18px', fontWeight: '600' }}
                  >
                    Joseph Gray
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <p>
                  <AiOutlineEye /> <span>1.4k views</span>
                </p>

                <p style={{ backgroundColor: ' #E5E5E5' }} className="btn ms-5">
                  <HiShare />
                </p>
              </div>
            </div>
          </div>

          <div className="d-block d-md-none">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <img src={person4} alt="" />
                <div className="d-grid ms-1">
                  <span>Joseph Gray</span>
                  <span>4.8k views</span>
                </div>
              </div>
              <div className="">
                <p
                  style={{ background: '#d9d9db' }}
                  className="border p-1 my-auto"
                >
                  <HiShare />
                  <span className="ms-1">Share</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCards;
