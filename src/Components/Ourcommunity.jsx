import React from 'react'

const Ourcommunity = () => {
    return (
        <>
            <div className='bg-gradient-to-b from-[#2A0E68] to-[#080831]  h-auto w-full py-5 overflow-hidden tb:px-5 md:px-0'>
                <h2 className='md:text-3xl font-Montserrat text-white text-center mb:text-[1.5rem] font-[500]'> Join Our <span className='text-[#ff1ce5] font-[550]'> Community</span></h2>
                <div className="wrapper flex justify-center items-center py-3 px-10 mb:flex-col-reverse mb:gap-4 mb:px-6 mb:py-7 md:flex-row">
                    <div data-aos="fade-right" data-aos-duration="2500" className='flex flex-col justify-center items-start text-white md:w-[40%] mb:w-full'>
                        <p className='font-Montserrat w-full md:text-lg mb:text-sm tb:text-base'>Join our community of like-minded creators, collaborate on groundbreaking projects, and leave your mark on the metaverse. It's time to ignite your imagination, push boundaries, and shape the digital realm with your unique creative voice.</p>
                        <div className='mt-6 btnhover'>
                            <button className='md:py-2 md:px-7 font-Montserrat border-2 border-[#ff1ce5] mb:text-sm mb:px-4 mb:py-2'>Join Now</button>
                        </div>
                    </div>
                    {/* img div  */}
                    <div data-aos="zoom-in" data-aos-duration="2500" className='md:py-10 mb:py-0 bg-yellow300 tb:p-3'>
                        <img loading='lazy' className='h-auto w-full rounded-2xl mb:h-auto mb:w-full tb:h-auto tb:w-full' src="\Images\our_community_img.webp" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourcommunity