import 'bootstrap/dist/css/bootstrap.css';
import './News.css';
const Main_news = () => {
    return (
    
      <div className='main-news'>
        <div className="container">

           <div className="row">
           <div className='first-news'>
              <div className="col-lg-8">
                <img src="./img/img.jpg"  alt="" />
                <div class="">
                  <div class="Lead_font">
                   <h1 class="card-text">الشاب البيطار يروى معاناته مع مرض السرطان: شفيت منه وعاد بقوة - فيديو</h1>
                  </div>
                </div>
              </div>
            </div>
           </div>

            <div className='row'>
              <div className='col-lg-8'>
                <div className="row">
                  <div className="col-lg-4">
                   <img class="card-img" src="./img/1.jpg" alt="succulent" />
                   <p>رفع كسوة الكعبة المشرفة استعدادا للحجعربي </p>
                   <br />
                   <p className='stylespan' >الأردن | <span>منذ 16 دقيقة</span></p>
                  </div>
                  <div className="col-lg-4">
                   <img class="card-img" src="./img/2.jpg" alt="succulent" />
                   <p>ولي العهد للملك والملكة: ثلاثون عاما من المودة والرحمة</p>
                   <p className='stylespan' >عربي ودولي | <span>منذ 16 دقيقة</span></p>
                  </div>
                  <div className="col-lg-4">
                   <img class="card-img" src="./img/3.jpg" alt="succulent" />
                   <p>ضحايا انفجار وحريق في مصنع صواريخ في أنقرة</p>
                   <br />
                   <p className='stylespan' >دولي | <span>منذ 16 دقيقة</span></p>
                  </div>
                  <div className="col-lg-4">
                   <img class="card-img" src="./img/4.jpg" alt="succulent" />
                   <p>حجر ياقوت يُباع بـ٣٤.٨ مليون دولار في نيويورك</p>
                   <p className='stylespan' >دولي | <span>منذ 16 دقيقة</span></p>
                  </div>
                  <div className="col-lg-4">
                   <img class="card-img" src="./img/5.jpg" alt="succulent" />
                   <p>"وثائق سرية" تعرض ترمب للاتهام بتشكيل خطر على الولايات المتحدة</p>
                   <p className='stylespan' >دولي | <span>منذ 16 دقيقة</span></p>
                  </div>
                  <div className="col-lg-4">
                   <img class="card-img" src="./img/6.jpg" alt="succulent" />
                   <p>رصد خنازير البحر المهددة بالانقراض في المحيط الهادئ - فيديو</p>
                   <p className='stylespan' >دولي | <span>منذ 16 دقيقة</span></p>
                  </div>
                </div>
              </div>

            </div>
           </div>
        </div>



        )
    };


        export default Main_news;
