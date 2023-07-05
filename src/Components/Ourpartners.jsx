import React from 'react'

const Ourpartners = () => {
    return (
        <>
            <div className='bg-gradient-to-b py-5  from-[#2A0E68] to-[#0B011E] h-auto w-full overflow-hidden'>
                <h2 className='md:text-3xl font-Montserrat text-white text-center mb:text-[1.5rem] font-[500]'> Our <span className='text-[#ff1ce5] font-[550]'> Partners</span></h2>
                <div className='md:flex md:justify-center md:space-x-20 md:items-center md:py-10 mb:grid mb:grid-cols-1 mb:place-items-center mb:gap-7 mb:px-5 mb:py-7 tb:grid tb:place-items-center tb:grid-cols-2'>
                    <img data-aos="zoom-in" data-aos-duration="2500" loading='lazy' className='mb:h-20 mb:w-auto md:h-24 md:w-auto hover:border-2 ' src="\Images\Our_parnter\partner_img1.webp" alt="" />
                    <img data-aos="zoom-in" data-aos-duration="2500" loading='lazy' className='mb:h-20 mb:w-auto md:h-14 md:w-auto' src="\Images\Our_parnter\partner_img_2.webp" alt="" />
                    <img data-aos="zoom-in" data-aos-duration="2500" loading='lazy' className='mb:h-20 mb:w-auto md:h-24 md:w-auto' src="\Images\Our_parnter\partner_img_3.webp" alt="" />
                    <img data-aos="zoom-in" data-aos-duration="2500" loading='lazy' className='mb:h-6 mb:w-auto md:h-6 md:w-auto' src="\Images\Our_parnter\partner_img_4.webp" alt="" />
                    <img data-aos="zoom-in" data-aos-duration="2500" loading='lazy' className='mb:h-20 mb:w-auto md:h-20 md:w-auto tb:place-items-center' src="\Images\Our_parnter\partner_img_5.webp" alt="" />
                </div>
            </div>
        </>
    )
}

export default Ourpartners