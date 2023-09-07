import React from 'react';
import '../css/custom.css'
import { HexagonPath } from 'svgpaths';
import { Link } from 'react-router-dom';

export default function Header({children}){

  const onMapClick = () => {
    // console.log("map clicked");

  }
  const onMenuClick = () => { 
    console.log("menu clicked");
  }

  return (
    <div className="relative w-full flex justify-between p-5 items-top bg-white z-20" style={{
      fontFamily: 'SUITE Variable'
    }}>
      <Link to={'/'}>
        <svg onClick={onMapClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">    
          <path d="M11.5 0C6.80071 0 3 3.756 3 8.4C3 14.7 11.5 24 11.5 24C11.5 24 20 14.7 20 8.4C20 3.756 16.1993 0 11.5 0ZM11.5 11.4C9.82429 11.4 8.46429 10.056 8.46429 8.4C8.46429 6.744 9.82429 5.4 11.5 5.4C13.1757 5.4 14.5357 6.744 14.5357 8.4C14.5357 10.056 13.1757 11.4 11.5 11.4Z" fill="#60E4F1"/>
        </svg>
      </Link>
      {children}
      <svg onClick={onMenuClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5Z" fill="#4DC8E0"/>
        <path d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z" fill="#4DC8E0"/>
        <path d="M12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17Z" fill="#4DC8E0"/>
      </svg>
    </div>
  )
}