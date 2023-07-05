import React from 'react'

const Prolife = () => {
    return (
        <>
            <div className='py-8 bg-gradient-to-b from-[#2A0E68] to-[#0B011E] mb:h-auto mb:w-full mb:px-3 overflow-hidden'>
                <h2 id='whitepaper' className='md:text-3xl font-Montserrat text-white text-center mb:text-[1.5rem] mb:w-full font-[500]'> Build A<span className='text-[#ff1ce5] font-[550]'> PRO </span> Life at <span className='text-[#ff1ce5] font-[550]'> Meta Life City </span></h2>


                <div className="wrapper flex justify-center items-center md:py-14 md:gap-8 md:flex-row mb:flex-col-reverse mb:gap-8 mb:py-8">
                    <div data-aos="fade-right" data-aos-duration="1500" className='md:w-[35%] md:space-y-6 mb:w-full mb:space-y-3 mb:px-5 md:px-0'>
                        <h3 className='md:text-3xl font-Montserrat text-white mb:text-xl tb:text-2xl'> Meta Life City <span className='text-[#ff1ce5]'> Map </span></h3>
                        <p className='text-white md:font-Poppins md:text-base mb:font-Montserrat mb:text-sm mb:w-full md:pb-5 mb:pb-6 tb:text-base'>Take the best parts of real life and make it your own. No matter where you are, be whoever you want to be, and create anything you can imagine. Find out more about the MetaLife Metaverse with the MetaLife Whitepaper.</p>
                        <a href="\Images\Meta_Life_Whitepaper.pdf" download className='mt-5'> <button className='md:py-2 btnhover md:px-5 font-Montserrat text-white border-2 border-[#ff1ce5] mb:text-xs mb:py-2 mb:px-3 md:text-base tb:text-sm'>Download Whitepaper</button></a>
                    </div>
                    <div className='tb:p-10 md:p-0'>
                        <img data-aos="fade-left" data-aos-duration="1500" className='md:h-[28rem] mb:h-auto mb:w-full tb:h-auto tb:w-full' src="\Images\prolife.webp" alt="" />
                    </div>
                </div>


            </div>
        </>
    )
}

export default Prolife