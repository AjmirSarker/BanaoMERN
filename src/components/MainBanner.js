import React from 'react';
import BannerStyle from './Styles/HeroBanner.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { MdFacebook } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase';
import { signOut } from 'firebase/auth';
const MainBanner = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);
  return (
    <>
      <div className={BannerStyle.banner}>
        <div className={BannerStyle.backgroundOverlay}>
          <div>
            <div className="d-flex justify-content-between p-2 d-block d-md-none">
              <span style={{ fontSize: '18px', color: '#ffffff' }}>
                <AiOutlineArrowLeft />
              </span>
              {user ? (
                <span
                  onClick={() => signOut(auth)}
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasBottom"
                  aria-controls="offcanvasBottom"
                  className="p-1"
                  style={{
                    fontSize: '15px',
                    color: '#ffffff',
                    border: '2px solid white'
                  }}
                >
                  Leave Group
                </span>
              ) : (
                <span
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasBottom"
                  aria-controls="offcanvasBottom"
                  className="p-1"
                  style={{
                    fontSize: '15px',
                    color: '#ffffff',
                    border: '2px solid white'
                  }}
                >
                  Join Group
                </span>
              )}
            </div>
          </div>
          <div className="container h-100 d-flex align-items-end pb-md-5">
            <div className="pb-5">
              <h1 className={BannerStyle.bannerTitle}>Computer Engineering</h1>
              <p className={BannerStyle.bannerText}>
                142,765 Computer Engineers follow this
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="offcanvas offcanvas-bottom h-75 d-block d-md-none"
        tabindex="-1"
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasBottomLabel">
            Create Account
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body small">
          <input
            placeholder="First Name"
            type="text"
            style={{
              backgroundColor: '#f7f8fa',
              border: '1px solid #d9d9db',
              padding: '8px 0',
              borderRadius: '2px 2px 0 0'
            }}
            className="w-100 p-2"
          />
          <input
            placeholder="Last Name"
            type="text"
            style={{
              backgroundColor: '#f7f8fa',
              border: '1px solid #d9d9db',
              padding: '8px 0',
              borderRadius: '2px 2px 0 0'
            }}
            className="w-100 p-2"
          />
          <input
            placeholder="email"
            type="email"
            style={{
              backgroundColor: '#f7f8fa',
              border: '1px solid #d9d9db',
              padding: '8px 0',
              borderRadius: '2px 2px 0 0'
            }}
            className="w-100 p-2"
          />
          <input
            placeholder="password"
            type="password"
            style={{
              backgroundColor: '#f7f8fa',
              border: '1px solid #d9d9db',
              padding: '8px 0',
              borderRadius: '2px 2px 0 0'
            }}
            className="w-100 p-2"
          />
          <input
            placeholder="confirm password"
            type="password"
            style={{
              backgroundColor: '#f7f8fa',
              border: '1px solid #d9d9db',
              padding: '8px 0',
              borderRadius: '2px 2px 0 0'
            }}
            className="w-100 p-2"
          />
          <div className="d-flex justify-content-between align-items-center my-4">
            <input
              type="button"
              className="btn btn-primary  w-50 rounded-pill"
              value="Crate Account"
            />
            <a
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom2"
              aria-controls="offcanvasBottom"
              style={{ color: 'gray', textDecoration: 'underline' }}
            >
              or, Sign In
            </a>
          </div>
          <div>
            <button
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #d9d9db',
                borderRadius: '2px'
              }}
              className="w-100 py-2 "
            >
              <span className="text-primary">
                <MdFacebook />
              </span>{' '}
              Sign up with Facebook
            </button>
          </div>
          <div>
            <button
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #d9d9db',
                borderRadius: '2px'
              }}
              className="w-100 py-2 mt-2"
              onClick={() => signInWithGoogle()}
            >
              <FcGoogle /> Sign up with Google
            </button>
          </div>
        </div>
      </div>

      <div
        class="offcanvas offcanvas-bottom h-75 d-block d-md-none"
        tabindex="-1"
        id="offcanvasBottom2"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasBottomLabel">
            Sign in
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body small">
          <input
            placeholder="email"
            type="email"
            style={{
              backgroundColor: '#f7f8fa',
              border: '1px solid #d9d9db',
              padding: '8px 0',
              borderRadius: '2px 2px 0 0'
            }}
            className="w-100 p-2"
          />
          <input
            placeholder="password"
            type="password"
            style={{
              backgroundColor: '#f7f8fa',
              border: '1px solid #d9d9db',
              padding: '8px 0',
              borderRadius: '2px 2px 0 0'
            }}
            className="w-100 p-2"
          />
          <div className="d-flex justify-content-between align-items-center my-4">
            <input
              type="button"
              className="btn btn-primary  w-50 rounded-pill"
              value="Crate Account"
            />
            <a
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              aria-controls="offcanvasBottom"
              style={{ color: 'gray', textDecoration: 'underline' }}
            >
              or, Create an account
            </a>
          </div>
          <div>
            <button
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #d9d9db',
                borderRadius: '2px'
              }}
              className="w-100 py-2 "
            >
              <span className="text-primary">
                <MdFacebook />
              </span>{' '}
              Sign up with Facebook
            </button>
          </div>
          <div>
            <button
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #d9d9db',
                borderRadius: '2px'
              }}
              className="w-100 py-2 mt-2"
              onClick={() => signInWithGoogle()}
            >
              <FcGoogle /> Sign up with Google
            </button>
          </div>
          <div>
            <button
              style={{ backgroundColor: '#ffffff', border: 'none' }}
              className="w-100 py-2 mt-2"
            >
              Forgot Password ?
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
