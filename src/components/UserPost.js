import React from 'react';
import PostStyle from './Styles/AllPost.module.css';
import { MdOutlineGroupAdd, MdArrowDropDown } from 'react-icons/md';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase';
const UserPost = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="d-none d-md-none d-lg-block sticky-top">
        <div className="" style={{ background: '#ffffff' }}>
          <div className="container position-relative">
            <div className="d-flex justify-content-between align-items-center">
              <ul class="nav nav-pills py-3">
                <li class="nav-item pb-3 border-bottom border-dark border-2">
                  <a class="nav-link  text-dark" aria-current="page" href="#">
                    All Posts(32)
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">
                    Article
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">
                    Event
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">
                    Education
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">
                    Job
                  </a>
                </li>
              </ul>
              <div>
                <button
                  className="mx-2 btn btn-light"
                  style={{ fontSize: '18px', fontWeight: '500' }}
                >
                  Write Post{' '}
                  <span className="ms-1">
                    <MdArrowDropDown />
                  </span>
                </button>
                {user ? (
                  <button
                    className="btn border"
                    style={{ fontSize: '18px', fontWeight: '500' }}
                  >
                    <span className="me-2">
                      <RiLogoutBoxRLine />
                    </span>{' '}
                    Leave Group
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    style={{ fontSize: '18px', fontWeight: '500' }}
                  >
                    <span className="me-2">
                      <MdOutlineGroupAdd />
                    </span>{' '}
                    Join Group
                  </button>
                )}
              </div>
            </div>
            <hr className={PostStyle.Hr} />
          </div>
        </div>
      </div>
      <div className="d-block d-md-block d-lg-none">
        <div className="d-flex justify-content-between align-items-center my-2 px-2">
          <p>Posts(368)</p>
          <p>
            <div class="dropdown">
              <button
                class="btn btn-secondary bg-light text-dark dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter:All
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li>
                  <button class="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default UserPost;
