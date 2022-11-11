import React from 'react';
import logo from '../assets/trybolao.png';

function Login() {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-emerald-500 w-full h-screen">
      <form className="flex flex-col form mx-8 my-auto justify-center content-center h-full">
        <img src={logo} alt="logo" className="w-32 mx-auto mb-16" />
        <div className="flex flex-col gap-4">
          <button type="button" className="btn glass" onSubmit={(e) => handleClick(e)}>
            Login with
            {' '}
            <img
              className="google-icon ml-2"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google login"
            />
          </button>
          <button type="button" className="btn glass">
            Login with Email
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
