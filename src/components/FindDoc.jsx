import React from 'react'
import styles, { layout } from "../style";
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate  } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { heid1, heid2 } from '../assets';
const SliderTemperory = ({icon}) =>{
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

  };
  return( 
    <Slider {...settings}
    className="w-80 h-48 bg-sky-50 md:h-full md:w-full lg:h-full lg:w-full "
    >
    <img src={heid1} alt="hospital" className='w-20 h-36 lg:h-52 lg:w-96' />
    <img src={heid2} alt="hospital" className='w-20 h-36 lg:h-52 lg:w-96' />
    </Slider>
  )
    }
   
export const Card = ({ _id,icon, name,index, href, bg,t, setDoc}) =>{
  const navigate = useNavigate();
  const { getOneHospital,setDeptarray } = useContext(AuthContext)
  const handleHospital = (i) =>{
    setDoc(i)
    localStorage.setItem('IdMainHosp', i)
    setTimeout(()=>{
      navigate('/dept');
    },[6000])
    alert("Wait")
    }
   
  return (  
    <div className='flex xl:px-10 py-3 lg:py-0 sm:px-10 px-10 '>
  <div className={`flex flex-col  rounded-sm shadow-md w-full overflow-hidden sm:w-52  
  
  `}
  style={{
    backgroundColor:bg,
  
  }}
  >
    <SliderTemperory className="lg:w-1/2 lg:h-1/2 
    bg-red-500
    
    "
    icon={icon}
    style={{
      display:'block',
      marginLeft:'auto',
      marginRight:'auto',
      width:'80%',
      padding:'1rem',
    
    }}/>
    
    <button 
       className='bg-transparent border-0 border-transparent'
       onClick={()=>handleHospital(_id)}
       >
            <h5 class="text-gray-900 font-poppins text-lg tracking-tight mb-2
            cursor:pointer
            dark:text-white p-10 hover:underline hover:text-secondary" >
              {t(name)}</h5>
              </button>
     
  </div>
  
   </div>
  )
}
export const CardDoc = ({ icon, title,index,name, href, bg, t, doc,departments }) =>{
  const navigate = useNavigate();
  return (  
    <div className='flex xl:px-10 py-3 lg:py-0 sm:px-10 px-10 '>
  <div className={`flex flex-col  rounded-sm shadow-md w-full overflow-hidden sm:w-52  
  
  `}
  style={{
    backgroundColor:bg,
  
  }}
  >
    <SliderTemperory className="lg:w-1/2 lg:h-1/2 
    bg-red-500
    "
    icon={icon}
    style={{
      display:'block',
      marginLeft:'auto',
      marginRight:'auto',
      width:'80%',
      padding:'1rem',
    
    }}/>
    
    <button 
       className='bg-transparent border-0 border-transparent'
       onClick={()=>navigate(href)}>
            <h5 class="text-gray-900 font-poppins text-lg tracking-tight mb-2
            cursor:pointe
            dark:text-white p-10 hover:underline hover:text-secondary" >
              {t(name)}</h5>
              </button>
            
     
  </div>
  
   </div>
  )
}


const FindDoc = () => {
  const {t} = useTranslation(['ABOUT']);

 
  return (
    <>
    <section id="doc" name="doc" className={layout.section}>
    <div className={`${layout.sectionInfo} xl:px-10 sm:px-10 px-10 `}>
      <h2 className={styles.heading2}>
       {t("Choose Hospital")}, <br className="sm:block hidden " /> 
       {t("For Yourself")}
      
      </h2>
    </div>
  </section>
    </>
  )
}

export default FindDoc
