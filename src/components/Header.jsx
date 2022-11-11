/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import logo from '../assets/trybolao-shield.png';

function Header() {
  return (
    <div className=" h-14 w-full">
      <div className="navbar bg-emerald-500">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>Home</li>
              <li>Ranking</li>
              <li>Contato</li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <img src={logo} alt="logo" className="w-12" />
        </div>
        <div className="navbar-end">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="https://placeimg.com/192/192/people" alt="avatar" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header;
