import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Landowner = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);

    }
    const btn1 = document.getElementById('btn1')
    const btn2 = document.getElementById('btn2')
    const btn3 = document.getElementById('btn3')
    
    const btnhigh1 = () => {
        // btn1.classList.add(' "active", "animate-pulse" ')
        btn1.classList.add('active', 'animate-pulse')
        btn2.classList.remove('active', 'animate-pulse')
        btn3.classList.remove('active', 'animate-pulse')
    }
    const btnhigh2 = () => {
        btn2.classList.add('active', 'animate-pulse')
        btn1.classList.remove('active', 'animate-pulse')
        btn3.classList.remove('active', 'animate-pulse')
    }
    const btnhigh3 = () => {
        btn3.classList.add('active', 'animate-pulse')
        btn2.classList.remove('active', 'animate-pulse')
        btn1.classList.remove('active', 'animate-pulse')
    }
    return (
        <>
            <section className='h-auto w-full bg-gradient-to-b from-[#13013c] to-[#110333] md:py-0 mb:py-6 overflow-hidden'>
                <div className='bg-gradient-to-t from-[#00000000] via-[#00000053] to-[#000000c0] md:w-full md:h-full flex md:justify-center md:items-end md:py-10'>

                </div>
                <h2 className='md:text-3xl mb:text-2xl font-Montserrat text-white text-center font-[500]'> Become A<span className='text-[#ff1ce5] font-[550]'> Land Owner</span> </h2>
                {/* Wrapper  */}
                <div id='marketplace' className="main_wrapper md:h-auto md:w-full flex justify-between md:px-20 md:py-14 md:gap-10 mb:h-auto mb:w-full mb:px-2 mb:py-6 mb:flex-col-reverse md:flex-row mb:gap-5">
                    <div className='md:flex md:flex-col md:gap-8 md:w-[40%] md:items-start justify-center md:px-5 mb:flex-row mb:w-full mb:items-center mb:gap-1  mb:space-x-3 mb:px-0 md:space-x-0 md:pb-8 mb:justify-center mb:text-center tb:space-x-9'>
                        <button id='btn1' onClick={() => { handleTabClick(1); btnhigh1() }} className='active md:py-4 md:px-0 border-2 border-white md:rounded-2xl text-white font-Montserrat md:text-lg mb:text-sm mb:py-1 mb:px-2 md:flex md:items-center md:justify-center md:w-full animate-pulse mb:rounded-lg tb:py-2 tb:px-7'> <span className='mb:hidden md:block  md:pl-1'>  Become <span className='pr-1'>A</span> </span>  Residential <br className='mb:hidden md:hidden' />
                            Land <span className='mb:hidden md:block md:pl-1'> Owner</span> </button>
                        <button id='btn2' onClick={() => { handleTabClick(2); btnhigh2() }} className='md:py-4 md:px-5 border-2 border-white md:rounded-2xl text-white font-Montserrat md:text-lg mb:text-sm mb:py-1 mb:px-2 md:flex md:items-center md:justify-center md:w-full mb:rounded-lg tb:py-2 tb:px-7'> <span className='mb:hidden md:block'>  Buy <span className='md:pr-1'>Your</span> </span> Commerical
                            <br className='mb:hidden md:hidden' /> Spaces</button>
                        <button id='btn3' onClick={() => { handleTabClick(3); btnhigh3() }} className='md:py-4 md:px-5 border-2 border-white md:rounded-2xl text-white font-Montserrat md:text-lg mb:text-sm mb:py-1 mb:px-3 mb:hidden md:w-full md:block md:items-center md:justify-center  mb:rounded-lg'>Public Corridors </button>

                    </div>
                    <div className='flex flex-col justify-center items-center gap-6 transition-all delay-200 tb:px-5'>


                        {
                            activeTab === 1 ?
                                <div >
                                    <img data-aos="fade-up" data-aos-duration="3000" id='transid1' className='transitionclass md:h-auto md:w-full rounded-[2rem] shadow-md shadow-[#DE87FE] mb:h-auto mb:w-full' src="\Images\Owner_Images\residiantial_img.webp" alt="" />
                                </div>
                                : ''
                        }
                        {
                            activeTab === 2 ? <div>
                                <img data-aos="fade-up" data-aos-duration="3000" id='transid2' className='transitionclass h-auto w-full rounded-[2rem] shadow-md shadow-[#DE87FE] mb:h-auto mb:w-full' src="\Images\Owner_Images\commercial_img.webp" alt="" />
                            </div> : ''
                        }
                        {
                            activeTab === 3 ? <div>
                                <img data-aos="fade-up" data-aos-duration="3000" id='transid3' className='transitionclass h-auto w-full rounded-[2rem] shadow-md shadow-[#DE87FE] mb:h-auto mb:w-full' src="\Images\Owner_Images\public_img.webp" alt="" />
                            </div> : ''
                        }
                        <div data-aos="zoom-in" data-aos-duration="2000" className='flex justify-center items-center gap-6'>
                            <button className='btnhover active font-Montserrat md:py-2 md:px-5 border-2 border-violet-700 text-white rounded-lg activebtn md:text-base mb:py-1 mb:px-3 mb:text-sm tb:text-lg'>Buy Land</button>
                            <button className='btnhover font-Montserrat md:py-2 md:px-5 border-2 border-violet-700 text-white rounded-lg activebtn md:text-base mb:py-1 mb:px-3 mb:text-sm tb:text-lg'>Browse Map</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Landowner