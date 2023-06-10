import React from 'react';
import './TopNavbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle, faVideo,faBell,faFileText,faEnvelope,faArrowUp} from '@fortawesome/free-solid-svg-icons';


function TopNavbar() {
  return (
<div className="main-header">


    <header className='navbar'>
      <nav className="navbar-top">
       <div className='container'>
         <div className='row'>
          <div className='col-lg-6'>
           <div>
        <div className="class"></div>
      <div className='navbar__title navbar__item  '>
      <div className='navbar__item'>
      <button>EN</button>
      </div>
      <div className='nav-icon'></div>
      <div className='navbar__item '>
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faArrowUp} />
      </div>
      <div className='nav-icon'></div>
      <div className='navbar__item'>
      <FontAwesomeIcon icon={faFileText} />
      </div>
      <div className='nav-icon'></div>
      <div className='navbar__item '>
      <FontAwesomeIcon icon={faBell} />
      </div>
      <div className='nav-icon'></div>
      <div className='navbar__item '>
      <FontAwesomeIcon icon={faVideo} />
      </div>
      <div className='nav-icon'></div>
      <div className='navbar__item icons'>
        <FontAwesomeIcon icon={faUserCircle} className="register-icon" />
      </div>
      <div className='nav-icon'></div>
      </div>
        </div>
    

    
          </div>
          <div className='col-lg-6'>

      <div className='navbar__item navbar__search'>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="أدخل كلمة البحث " />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </div> 
          </div>
         </div>
       </div>
       </nav>
    </header>




    
    <div className='row'>
        <div className='col-lg-12'>
        <div className="logo-container">
       <img src="./img/logo.png" alt="" />
        <h5>رؤيا الإخباري</h5>
        </div>
        </div>
       </div>


    <nav className="main-nav">
    <ul className="navbar">     
     <li><a href="/">الرئيسية</a></li>
       <li><a href="/about">الأردن</a></li>
       <li><a href="/footer">فلسطين</a></li>
      <li><a href="/">عربي دولي</a></li>
       <li><a href="/about">اقتصادي</a></li>
       <li><a href="/footer">رياضة</a></li>
       <li><a href="/">هنا وهناك</a></li>
      <li><a href="/about">الطقس</a></li>
             <li><a href="/footer">فيديو</a></li>
            <li><a href="/">كاريكاتير</a></li>
           <li><a href="/about">وفيات</a></li>
       <li><a href="/footer">أحداث بارزة</a></li>
        </ul>
       </nav>
       </div>

  );
}

export default TopNavbar;
