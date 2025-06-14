import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation,Pagination } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import heroimage1 from './../../assets/hero-bg-1.jpg'
import heroimage2 from './../../assets/hero-bg-2.jpg'
import heroimage3 from './../../assets/hero-bg-3.jpg'
import heroicon1 from './../../assets/hero-icon1.svg'
import heroicon2 from './../../assets/hero-icon2.svg'
import heroicon3 from './../../assets/hero-icon3.svg'

function Index() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{clickable:true}}
        modules={[Navigation,Pagination]}
        className='mb-4'>        
          {[heroimage2,heroimage3,heroimage1].map((img,index) => (
            <SwiperSlide key={index}>
              <div className='hero-main mb-4 position-relative'>
                <img src={img}  />
                <div className='hero-content'>
                  <div className='container my-5'>
                    <div className='hero-info p-5 rounded-4 shadow d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center bg-white'>                      
                      <div>
                        <h5 className='mb-1 fs-4 fw-semibold'>
                          Home in coral Gables
                          <small className='text-muted ms-2 fs-6 fw-normal'>Build 2019</small>
                        </h5>
                        <p className='mb-2 text-muted'><strong>Added:</strong>June 8, 2022</p>
                      </div>
                      <div className='d-flex gap-4 align-items-center my-3 my-md-0 text-primary'>
                        <div className='d-flex align-items-center text-black'>
                          <img src={heroicon1} className='hero-icon me-2' /> 4
                        </div>
                        <div className='d-flex align-items-center text-black'>
                          <img src={heroicon2} className='hero-icon me-2' /> 4.5
                        </div>
                        <div className='d-flex align-items-center text-black'>
                          <img src={heroicon3} className='hero-icon me-2' /> 3800 sq ft
                        </div>                      
                      </div>
                      <div className='text-end sm-md-3 hero-sale'>
                        <span className='text-start d-block mb-1'>For Sale</span>
                        <h4 className='mb-0 fw-bold fs-3'>$850,000</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default Index
