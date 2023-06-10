import React from "react";
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaTwitter, FaFacebook, FaInstagram ,FaYoutube,FaWifi} from "react-icons/fa";



const Footer = () => {
return (
	<section className="box">
	<div className="Container">
		<div className="row">
		<div className="col-lg-4">
			<div className="info">
           <h2>عن رؤيا الإخباري</h2>
			  <p>موقع أخباري أردني تابع لقناة رؤيا الفضائية ينقل لكم الأخبار المحلية الأردنية وأخبار فلسطين وأبرز الأخبار العربية والدولية.</p>
         </div>
         </div>
		<div className="col-lg-4">
      <div className="info">
			<h2> اتصل بنا </h2>
            <p>مكاتب رؤيا في عمّان، الأردن، أم الحيران، مبنى المدينة الاعلامية، شارع الصخرة المشرفة بجانب مبنى الاذاعة والتلفزيون</p>
            <span>هاتف رقم:0096264206419</span> <br />
            <span>فاكس رقم: 0096264206524</span><br />
            <span>صندوق البريد: 961401 عمّان-الأردن 11196</span>
      </div>

 		</div>
         <div className="col-lg-4" >
            <div className="info">
            <h2> تواصلوا معنا </h2>
            <div>
            <div className='navbar__title navbar__item  '>

             <div className='navbar__item' >
               <FaTwitter />
            </div>

            <div className='navbar__item '>
               <FaFacebook />
            </div>

            <div className='navbar__item '>
               <FaInstagram />
            </div>
            <div className='navbar__item '>
               <FaYoutube />
            </div>
            <div className='navbar__item '>
               <FaWifi />
            </div>
            <div className='navbar__item '>
               <img style={{width:'25px'}} src="./img/nbd.png"></img>
            </div>
          </div>
        </div>
            </div>
		
            
 		</div>
		</div>
<br /><br />
      <div className="row">
        <div className="col-lg-6">
        <span>سياسة الخصوصية</span>
        <span className="footer-bottom">الملكية الفكرية</span>
        <span className="footer-bottom2">معايير التصحيح</span>
        </div>

        <div className="col-lg-6">
        <p className="copyright">جميع الحقوق محفوظة © 2023 رؤيا</p>
        </div>
      </div>
	</div>

	</section>
);
};
export default Footer;
