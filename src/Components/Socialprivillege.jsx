import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Socialprivillege = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>

            {/* For Desktop  3 x 3  */}
            <section className='py-10 mb:hidden md:block  bg-gradient-to-b from-[#2a0e68] to-[#0b011e]'>
                <h2 className='md:text-3xl font-Montserrat text-white text-center mb:text-[1.5rem]  mb:text-center font-[500]'> Meta Life <span className='text-[#ff1ce5] font-[550]'> Social Privileges</span> </h2>
                <div className="destopdiv md:px-20 md:py-9 md:flex md:flex-col md:justify-center md:items-center md:gap-16">
                    {/* Innder div 1  */}
                    <div data-aos="fade-up" data-aos-duration="2500" className="innerwrapper md:flex md:gap-20 md:justify-center md:items-center">
                        {/* slider 1st  */}
                        <div data-aos="fade-up" data-aos-duration="2000" className='socialprevdiv1 flex flex-col justify-center items-center  md:border-2 md:border-violet-600 h-auto w-full md:rounded-t-[4rem] shadow-xl shadow-pink-700 mb:rounded-t-[2rem] mb:pb-5 md:pb-0 mb:border-0 cursor-pointer tb:px-7 tb:py-6 md:px-0 md:py-0'>
                            <div className='sociprev_img1 md:h-[20rem] mb:h-[19rem] w-full flex justify-end items-end md:rounded-t-[4rem] mb:rounded-t-[2rem]'>
                                <div className='h-full w-full flex justify-center items-end  rounded-t-3xl'>
                                    <div className='bg-[#C547F2] py-2 px-8 rounded-t-[4rem]'>
                                        <img className='md:h-10 mb:h-8' src="\Images\Social_Img\mall.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='md:h-64 md:p-7 text-center myblurr flex flex-col justify-start items-center md:gap-2 mb:p-4 mb:gap-1'>
                                <h3 className='md:text-xl text-cyan-400 font-Montserrat mb:text-lg mb:font-semibold md:font-[500] tb:text-xl'>Meta Life Malls</h3>
                                <p className='text-white font-Poppins font-[400] md:text-base mb:text-sm tb:text-base'>Metalife Malls offer a futuristic shopping experience where users can explore virtual stores. These malls provide a wide range of virtual storefronts from popular brands, making it a convenient and immersive way to shop without leaving the comfort of your home.
                                </p>


                            </div>
                        </div>
                        {/* slider 2nd  */}
                        <div data-aos="fade-up" data-aos-duration="2000" className='socialprevdiv1 flex flex-col justify-center items-center  md:border-2 md:border-violet-600 h-auto w-full md:rounded-t-[4rem] shadow-xl shadow-pink-700 mb:rounded-t-[2rem] mb:pb-5 md:pb-0 mb:border-0 cursor-pointer tb:px-7 tb:py-6 md:px-0 md:py-0'>
                            <div className='sociprev_img2 md:h-[20rem] mb:h-[19rem] w-full flex justify-end items-end md:rounded-t-[4rem] mb:rounded-t-[2rem]'>
                                <div className='h-full w-full flex justify-center items-end  rounded-t-3xl'>
                                    <div className='bg-[#C547F2] py-2 px-8 rounded-t-[4rem]'>
                                        <img className='md:h-10 mb:h-8' src="\Images\Social_Img\mall.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='md:h-64 md:p-7 text-center myblurr flex flex-col justify-start items-center md:gap-2 mb:p-4 mb:gap-1'>
                                <h3 className='md:text-xl text-cyan-400 font-Montserrat mb:text-lg mb:font-semibold md:font-[500] tb:text-xl'>Metalife Event Spaces</h3>
                                <p className='text-white font-Poppins font-[400] md:text-base mb:text-sm tb:text-base'>Metalife Event Spaces within the metaverse serve as virtual venues for hosting various events such as conferences, seminars, exhibitions, and even social gatherings. </p>


                            </div>
                        </div>
                        {/* slider 3rd  */}
                        <div data-aos="fade-up" data-aos-duration="2000" className='socialprevdiv1 flex flex-col justify-center items-center  md:border-2 md:border-violet-600 h-auto w-full md:rounded-t-[4rem] shadow-xl shadow-pink-700 mb:rounded-t-[2rem] mb:pb-5 md:pb-0 mb:border-0 cursor-pointer tb:px-7 tb:py-6 md:px-0 md:py-0'>
                            <div className='sociprev_img3 md:h-[20rem] mb:h-[19rem] w-full flex justify-end items-end md:rounded-t-[4rem] mb:rounded-t-[2rem]'>
                                <div className='h-full w-full flex justify-center items-end  rounded-t-3xl'>
                                    <div className='bg-[#C547F2] py-2 px-8 rounded-t-[4rem]'>
                                        <img className='md:h-10 mb:h-8' src="\Images\Social_Img\mall.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='md:h-64 md:p-7 text-center myblurr flex flex-col justify-start items-center md:gap-2 mb:p-4 mb:gap-1'>
                                <h3 className='md:text-xl text-cyan-400 font-Montserrat mb:text-lg mb:font-semibold md:font-[500] tb:text-xl'>Metalife Cruises</h3>
                                <p className='text-white font-Poppins font-[400] md:text-base mb:text-sm tb:text-base'>Metalife Cruises take the concept of traditional cruises to the next level by offering immersive virtual voyages. Users can explore stunning virtual landscapes, interact with fellow travelers, virtual reality experiences, and interactive storytelling, all within the metaverse.
                                </p>


                            </div>
                        </div>
                    </div>
                    {/* Inner div 2 */}
                    <div className="innerwrapper md:flex md:gap-20 md:justify-center md:items-center">
                        {/* slider 4rth  */}
                        <div className='socialprevdiv1 flex flex-col justify-center items-center  md:border-2 md:border-violet-600 h-auto w-full md:rounded-t-[4rem] shadow-xl shadow-pink-700 mb:rounded-t-[2rem] mb:pb-5 md:pb-0 mb:border-0 cursor-pointer tb:px-7 tb:py-6 md:px-0 md:py-0'>
                            <div className='sociprev_img4 md:h-[20rem] mb:h-[19rem] w-full flex justify-end items-end md:rounded-t-[4rem] mb:rounded-t-[2rem]'>
                                <div className='h-full w-full flex justify-center items-end  rounded-t-3xl'>
                                    <div className='bg-[#C547F2] py-2 px-8 rounded-t-[4rem]'>
                                        <img className='md:h-10 mb:h-8' src="\Images\Social_Img\mall.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='md:h-60 md:p-7 text-center myblurr flex flex-col justify-start items-center md:gap-2 mb:p-4 mb:gap-1'>
                                <h3 className='md:text-xl text-cyan-400 font-Montserrat mb:text-lg mb:font-semibold md:font-[500] tb:text-xl'>Metalife Sports Clubs</h3>
                                <p className='text-white font-Poppins font-[400] md:text-base mb:text-sm tb:text-base'>Metalife Sports Clubs provide users with the opportunity to engage in virtual sports activities and competitions.</p>


                            </div>
                        </div>
                        {/* slider 5th  */}
                        <div className='socialprevdiv1 flex flex-col justify-center items-center  md:border-2 md:border-violet-600 h-auto w-full md:rounded-t-[4rem] shadow-xl shadow-pink-700 mb:rounded-t-[2rem] mb:pb-5 md:pb-0 mb:border-0 cursor-pointer tb:px-7 tb:py-6 md:px-0 md:py-0'>
                            <div className='sociprev_img5 md:h-[20rem] mb:h-[19rem] w-full flex justify-end items-end md:rounded-t-[4rem] mb:rounded-t-[2rem]'>
                                <div className='h-full w-full flex justify-center items-end  rounded-t-3xl'>
                                    <div className='bg-[#C547F2] py-2 px-8 rounded-t-[4rem]'>
                                        <img className='md:h-10 mb:h-8' src="\Images\Social_Img\mall.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='md:h-60 md:p-7 text-center myblurr flex flex-col justify-start items-center md:gap-2 mb:p-4 mb:gap-1'>
                                <h3 className='md:text-xl text-cyan-400 font-Montserrat mb:text-lg mb:font-semibold md:font-[500] tb:text-xl'>Meta life Gymnasium</h3>
                                <p className='text-white font-Poppins font-[400] md:text-base mb:text-sm tb:text-base'>Meta Life Gymnasiums are virtual fitness centers within the metaverse, offering a range of workout programs, classes, and personalized training experiences for users.
                                </p>


                            </div>
                        </div>
                        {/* slider 6th  */}
                        <div className='socialprevdiv1 flex flex-col justify-center items-center  md:border-2 md:border-violet-600 h-auto w-full md:rounded-t-[4rem] shadow-xl shadow-pink-700 mb:rounded-t-[2rem] mb:pb-5 md:pb-0 mb:border-0 cursor-pointer tb:px-7 tb:py-6 md:px-0 md:py-0'>
                            <div className='sociprev_img6 md:h-[20rem] mb:h-[19rem] w-full flex justify-end items-end md:rounded-t-[4rem] mb:rounded-t-[2rem]'>
                                <div className='h-full w-full flex justify-center items-end  rounded-t-3xl'>
                                    <div className='bg-[#C547F2] py-2 px-8 rounded-t-[4rem]'>
                                        <img className='md:h-10 mb:h-8' src="\Images\Social_Img\mall.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='md:h-60 md:p-7 text-center myblurr flex flex-col justify-start items-center md:gap-2 mb:p-4 mb:gap-1'>
                                <h3 className='md:text-xl text-cyan-400 font-Montserrat mb:text-lg mb:font-semibold md:font-[500] tb:text-xl'>Metalife Temples</h3>
                                <p className='text-white font-Poppins font-[400] md:text-base mb:text-sm tb:text-base'>Metalife Temples in the metaverse provide users with a serene and spiritual environment where they can engage in virtual meditation, and mindfulness practices, and explore various religious and spiritual teachings.
                                </p>


                            </div>
                        </div>
                    </div>
                    {/* Inner div 3 */}
                    <div className="innerwrapper md:flex md:gap-20 md:justify-center md:items-center">
                        {/* slider 7th  */}
                        <div className='socialprevdiv1 flex flex-col justify-center items-center  md:border-2 md:border-violet-600 h-auto w-full md:rounded-t-[4rem] shadow-xl shadow-pink-700 mb:rounded-t-[2rem] mb:pb-5 md:pb-0 mb:border-0 cursor-pointer tb:px-7 tb:py-6 md:px-0 md:py-0'>
                            <div className='sociprev_img7 md:h-[20rem] mb:h-[19rem] w-full flex justify-end items-end md:rounded-t-[4rem] mb:rounded-t-[2rem]'>
                                <div className='h-full w-full flex justify-center items-end  rounded-t-3xl'>
                                    <div className='bg-[#C547F2] py-2 px-8 rounded-t-[4rem]'>
                                        <img className='md:h-10 mb:h-8' src="\Images\Social_Img\mall.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='md:h-64 md:p-7 text-center myblurr flex flex-col justify-start items-center md:gap-2 mb:p-4 mb:gap-1'>
                                <h3 className='md:text-xl text-cyan-400 font-Montserrat mb:text-lg mb:font-semibold md:font-[500] tb:text-xl'>Metalife Music Concerts</h3>
                                <p className='text-white font-Poppins font-[400] md:text-base mb:text-sm tb:text-base'>Metalife users can attend virtual concerts featuring their favorite artists, enjoy stunning visual effects, and even have the option to access exclusive backstage experiences or meet-and-greets, all while feeling the energy and excitement of a live music performance.
                                </p>


                            </div>
                        </div>
                        {/* slider 8th  */}
                        <div className='socialprevdiv1 flex flex-col justify-center items-center  md:border-2 md:border-violet-600 h-auto w-full md:rounded-t-[4rem] shadow-xl shadow-pink-700 mb:rounded-t-[2rem] mb:pb-5 md:pb-0 mb:border-0 cursor-pointer tb:px-7 tb:py-6 md:px-0 md:py-0'>
                            <div className='sociprev_img8 md:h-[20rem] mb:h-[19rem] w-full flex justify-end items-end md:rounded-t-[4rem] mb:rounded-t-[2rem]'>
                                <div className='h-full w-full flex justify-center items-end  rounded-t-3xl'>
                                    <div className='bg-[#C547F2] py-2 px-8 rounded-t-[4rem]'>
                                        <img className='md:h-10 mb:h-8' src="\Images\Social_Img\mall.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='md:h-64 md:p-7 text-center myblurr flex flex-col justify-start items-center md:gap-2 mb:p-4 mb:gap-1'>
                                <h3 className='md:text-xl text-cyan-400 font-Montserrat mb:text-lg mb:font-semibold md:font-[500] tb:text-xl'>Metalife restaurants</h3>
                                <p className='text-white font-Poppins font-[400] md:text-base mb:text-sm tb:text-base'>Metalife users can explore virtual restaurants, taste digital delicacies, interact with AI chefs and waitstaff, and even customize their dining environment to suit their preferences.
                                </p>


                            </div>
                        </div>
                        {/* slider 9th  */}
                        <div className='socialprevdiv1 flex flex-col justify-center items-center  md:border-2 md:border-violet-600 h-auto w-full md:rounded-t-[4rem] shadow-xl shadow-pink-700 mb:rounded-t-[2rem] mb:pb-5 md:pb-0 mb:border-0 cursor-pointer tb:px-7 tb:py-6 md:px-0 md:py-0'>
                            <div className='sociprev_img9 md:h-[20rem] mb:h-[19rem] w-full flex justify-end items-end md:rounded-t-[4rem] mb:rounded-t-[2rem]'>
                                <div className='h-full w-full flex justify-center items-end  rounded-t-3xl'>
                                    <div className='bg-[#C547F2] py-2 px-8 rounded-t-[4rem]'>
                                        <img className='md:h-10 mb:h-8' src="\Images\Social_Img\mall.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='md:h-64 md:p-7 text-center myblurr flex flex-col justify-start items-center md:gap-2 mb:p-4 mb:gap-1'>
                                <h3 className='md:text-xl text-cyan-400 font-Montserrat mb:text-lg mb:font-semibold md:font-[500] tb:text-xl'>Metalife adventure park</h3>
                                <p className='text-white font-Poppins font-[400] md:text-base mb:text-sm tb:text-base'>Metalife Adventure Parks offer thrilling and adrenaline-pumping experiences within the metaverse. Users can engage in virtual extreme sports, and water slides and explore virtual world adventures. </p>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* For Mobile 3 slider  */}

            <section className='md:py-4 md:hidden mb:bg-gradient-to-b from-[#2a0e68] to-[#0b011e] h-auto w-full mb:h-auto mb:w-full mb:py-6 overflow-hidden'>
                <h2 className='md:text-3xl font-Montserrat text-white text-center mb:text-[1.5rem]  mb:text-center font-[500]'> Meta Life <span className='text-[#ff1ce5] font-[550]'> Social Privileges</span> </h2>
                <div className='md:py-10 md:px-24 mb:px-5 mb:py-6 mb:space-y-10'>

                    {/* 1st swipper  */}
                    <Swiper
                        // install Swiper modules
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            500: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            865: {
                                slidesPerView: 3
                            },
                            1000: {
                                slidesPerView: 3
                            },
                            1500: {
                                slidesPerView: 3
                            }
                        }}
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={70}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <div id='nft' className='px-20 mb:flex-col'>

                            {/* slidre 1 */}
                            <SwiperSlide>
                                <div data-aos="fade-up" data-aos-duration="2000" className='socialprevdiv1 flex flex-col justify-center items-center  md:border-2 md:border-violet-600 h-auto w-full md:rounded-t-[4rem] shadow-xl shadow-pink-700 mb:rounded-t-[2rem] mb:pb-5 md:pb-0 mb:border-0 cursor-pointer tb:px-7 tb:py-6 md:px-0 md:py-0'>
                                    <div className='sociprev_img1 md:h-[20rem] mb:h-[19rem] w-full flex justify-end items-end md:rounded-t-[4rem] mb:rounded-t-[2rem]'>
                                        <div className='h-full w-full flex justify-center items-end  rounded-t-3xl'>
                                            <div className='bg-[#C547F2] py-2 px-8 rounded-t-[4rem]'>
                                                <img className='md:h-10 mb:h-8' src="\Images\Social_Img\mall.webp" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='md:h-72 md:p-7 text-center myblurr flex flex-col justify-start items-center md:gap-2 mb:p-4 mb:gap-1'>
                                        <h3 className='md:text-xl text-cyan-400 font-Montserrat mb:text-lg mb:font-semibold md:font-[500] tb:text-xl'>Meta Life Malls</h3>
                                        <p className='text-white font-Poppins font-[400] md:text-base mb:text-sm tb:text-base'>Metalife Malls offer a futuristic shopping experience where users can explore virtual stores, and purchase products in the real world. These malls provide a wide range of virtual storefronts from popular brands, making it a convenient and immersive way to shop without leaving the comfort of your home.
                                        </p>


                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* slidre 2 */}
                            <SwiperSlide>
                                <div data-aos="fade-up" data-aos-duration="2000" className='socialprevdiv1 flex flex-col justify-center items-center  md:border-2 md:border-violet-600 h-auto w-full md:rounded-t-[4rem] shadow-xl shadow-pink-700 mb:rounded-t-[2rem] mb:pb-5 md:pb-0 mb:border-0 cursor-pointer tb:px-7 tb:py-6 md:px-0 md:py-0'>
                                    <div className='sociprev_img2 md:h-[20rem] mb:h-[19rem] w-full flex justify-end items-end md:rounded-t-[4rem] mb:rounded-t-[2rem]'>
                                        <div className='h-full w-full flex justify-center items-end  rounded-t-3xl'>
                                            <div className='bg-[#C547F2] py-2 px-8 rounded-t-[4rem]'>
                                                <img className='md:h-10 mb:h-8' src="\Images\Social_Img\mall.webp" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='md:h-72 md:p-7 text-center myblurr flex flex-col justify-start items-center md:gap-2 mb:p-4 mb:gap-1'>
                                        <h3 className='md:text-xl text-cyan-400 font-Montserrat mb:text-lg mb:font-semibold md:font-[500] tb:text-xl'>Metalife Event Spaces</h3>
                                        <p className='text-white font-Poppins font-[400] md:text-base mb:text-sm tb:text-base'>Metalife Event Spaces within the metaverse serve as virtual venues for hosting various events such as conferences, seminars, exhibitions, and even social gatherings. </p>


                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* slidre 3 */}
                            <SwiperSlide>
                                <div data-aos="fade-up" data-aos-duration="2000" className='socialprevdiv1 flex flex-col justify-center items-center  md:border-2 md:border-violet-600 h-auto w-full md:rounded-t-[4rem] shadow-xl shadow-pink-700 mb:rounded-t-[2rem] mb:pb-5 md:pb-0 mb:border-0 cursor-pointer tb:px-7 tb:py-6 md:px-0 md:py-0'>
                                    <div className='sociprev_img3 md:h-[20rem] mb:h-[19rem] w-full flex justify-end items-end md:rounded-t-[4rem] mb:rounded-t-[2rem]'>
                                        <div className='h-full w-full flex justify-center items-end  rounded-t-3xl'>
                                            <div className='bg-[#C547F2] py-2 px-8 rounded-t-[4rem]'>
                                                <img className='md:h-10 mb:h-8' src="\Images\Social_Img\mall.webp" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='md:h-72 md:p-7 text-center myblurr flex flex-col justify-start items-center md:gap-2 mb:p-4 mb:gap-1'>
                                        <h3 className='md:text-xl text-cyan-400 font-Montserrat mb:text-lg mb:font-semibold md:font-[500] tb:text-xl'>Metalife Cruises</h3>
                                        <p className='text-white font-Poppins font-[400] md:text-base mb:text-sm tb:text-base'>Metalife Cruises take the concept of traditional cruises to the next level by offering immersive virtual voyages. Users can explore stunning virtual landscapes, interact with fellow travelers, virtual reality experiences, and interactive storytelling, all within the metaverse.
                                        </p>


                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                    {/* 2nd slider  */}
                    <Swiper
                        // install Swiper modules
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            500: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            865: {
                                slidesPerView: 3
                            },
                            1000: {
                                slidesPerView: 3
                            },
                            1500: {
                                slidesPerView: 3
                            }
                        }}
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={70}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <div id='nft' className='px-20 mb:flex-col'>

                            {/* slidre 4 */}
                            <SwiperSlide>
                                <div className='socialprevdiv1 flex flex-col justify-center items-center  md:border-2 md:border-violet-600 h-auto w-full md:rounded-t-[4rem] shadow-xl shadow-pink-700 mb:rounded-t-[2rem] mb:pb-5 md:pb-0 mb:border-0 cursor-pointer tb:px-7 tb:py-6 md:px-0 md:py-0'>
                                    <div className='sociprev_img4 md:h-[20rem] mb:h-[19rem] w-full flex justify-end items-end md:rounded-t-[4rem] mb:rounded-t-[2rem]'>
                                        <div className='h-full w-full flex justify-center items-end  rounded-t-3xl'>
                                            <div className='bg-[#C547F2] py-2 px-8 rounded-t-[4rem]'>
                                                <img className='md:h-10 mb:h-8' src="\Images\Social_Img\mall.webp" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='md:h-72 md:p-7 text-center myblurr flex flex-col justify-start items-center md:gap-2 mb:p-4 mb:gap-1'>
                                        <h3 className='md:text-xl text-cyan-400 font-Montserrat mb:text-lg mb:font-semibold md:font-[500] tb:text-xl'>Metalife Sports Clubs</h3>
                                        <p className='text-white font-Poppins font-[400] md:text-base mb:text-sm tb:text-base'>Metalife Sports Clubs provide users with the opportunity to engage in virtual sports activities and competitions.</p>


                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* slidre 5 */}
                            <SwiperSlide>
                                <div className='socialprevdiv1 flex flex-col justify-center items-center  md:border-2 md:border-violet-600 h-auto w-full md:rounded-t-[4rem] shadow-xl shadow-pink-700 mb:rounded-t-[2rem] mb:pb-5 md:pb-0 mb:border-0 cursor-pointer tb:px-7 tb:py-6 md:px-0 md:py-0'>
                                    <div className='sociprev_img5 md:h-[20rem] mb:h-[19rem] w-full flex justify-end items-end md:rounded-t-[4rem] mb:rounded-t-[2rem]'>
                                        <div className='h-full w-full flex justify-center items-end  rounded-t-3xl'>
                                            <div className='bg-[#C547F2] py-2 px-8 rounded-t-[4rem]'>
                                                <img className='md:h-10 mb:h-8' src="\Images\Social_Img\mall.webp" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='md:h-72 md:p-7 text-center myblurr flex flex-col justify-start items-center md:gap-2 mb:p-4 mb:gap-1'>
                                        <h3 className='md:text-xl text-cyan-400 font-Montserrat mb:text-lg mb:font-semibold md:font-[500] tb:text-xl'>Meta life Gymnasium</h3>
                                        <p className='text-white font-Poppins font-[400] md:text-base mb:text-sm tb:text-base'>Meta Life Gymnasiums are virtual fitness centers within the metaverse, offering a range of workout programs, classes, and personalized training experiences for users.
                                        </p>


                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* slidre 6 */}
                            <SwiperSlide>
                                <div className='socialprevdiv1 flex flex-col justify-center items-center  md:border-2 md:border-violet-600 h-auto w-full md:rounded-t-[4rem] shadow-xl shadow-pink-700 mb:rounded-t-[2rem] mb:pb-5 md:pb-0 mb:border-0 cursor-pointer tb:px-7 tb:py-6 md:px-0 md:py-0'>
                                    <div className='sociprev_img6 md:h-[20rem] mb:h-[19rem] w-full flex justify-end items-end md:rounded-t-[4rem] mb:rounded-t-[2rem]'>
                                        <div className='h-full w-full flex justify-center items-end  rounded-t-3xl'>
                                            <div className='bg-[#C547F2] py-2 px-8 rounded-t-[4rem]'>
                                                <img className='md:h-10 mb:h-8' src="\Images\Social_Img\mall.webp" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='md:h-72 md:p-7 text-center myblurr flex flex-col justify-start items-center md:gap-2 mb:p-4 mb:gap-1'>
                                        <h3 className='md:text-xl text-cyan-400 font-Montserrat mb:text-lg mb:font-semibold md:font-[500] tb:text-xl'>Metalife Temples</h3>
                                        <p className='text-white font-Poppins font-[400] md:text-base mb:text-sm tb:text-base'>Metalife Temples in the metaverse provide users with a serene and spiritual environment where they can engage in virtual meditation, and mindfulness practices, and explore various religious and spiritual teachings.
                                        </p>


                                    </div>
                                </div>
                            </SwiperSlide>

                        </div>
                    </Swiper>
                    {/* 3rd slider  */}
                    <Swiper
                        // install Swiper modules
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            500: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            865: {
                                slidesPerView: 3
                            },
                            1000: {
                                slidesPerView: 3
                            },
                            1500: {
                                slidesPerView: 3
                            }
                        }}
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={70}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <div id='nft' className='px-20 mb:flex-col'>
                            {/* slidre 7 */}
                            <SwiperSlide>
                                <div className='socialprevdiv1 flex flex-col justify-center items-center  md:border-2 md:border-violet-600 h-auto w-full md:rounded-t-[4rem] shadow-xl shadow-pink-700 mb:rounded-t-[2rem] mb:pb-5 md:pb-0 mb:border-0 cursor-pointer tb:px-7 tb:py-6 md:px-0 md:py-0'>
                                    <div className='sociprev_img7 md:h-[20rem] mb:h-[19rem] w-full flex justify-end items-end md:rounded-t-[4rem] mb:rounded-t-[2rem]'>
                                        <div className='h-full w-full flex justify-center items-end  rounded-t-3xl'>
                                            <div className='bg-[#C547F2] py-2 px-8 rounded-t-[4rem]'>
                                                <img className='md:h-10 mb:h-8' src="\Images\Social_Img\mall.webp" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='md:h-72 md:p-7 text-center myblurr flex flex-col justify-start items-center md:gap-2 mb:p-4 mb:gap-1'>
                                        <h3 className='md:text-xl text-cyan-400 font-Montserrat mb:text-lg mb:font-semibold md:font-[500] tb:text-xl'>Metalife Music Concerts</h3>
                                        <p className='text-white font-Poppins font-[400] md:text-base mb:text-sm tb:text-base'>Metalife users can attend virtual concerts featuring their favorite artists, enjoy stunning visual effects, and even have the option to access exclusive backstage experiences or meet-and-greets, all while feeling the energy and excitement of a live music performance.
                                        </p>


                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* slidre 8 */}
                            <SwiperSlide>
                                <div className='socialprevdiv1 flex flex-col justify-center items-center  md:border-2 md:border-violet-600 h-auto w-full md:rounded-t-[4rem] shadow-xl shadow-pink-700 mb:rounded-t-[2rem] mb:pb-5 md:pb-0 mb:border-0 cursor-pointer tb:px-7 tb:py-6 md:px-0 md:py-0'>
                                    <div className='sociprev_img8 md:h-[20rem] mb:h-[19rem] w-full flex justify-end items-end md:rounded-t-[4rem] mb:rounded-t-[2rem]'>
                                        <div className='h-full w-full flex justify-center items-end  rounded-t-3xl'>
                                            <div className='bg-[#C547F2] py-2 px-8 rounded-t-[4rem]'>
                                                <img className='md:h-10 mb:h-8' src="\Images\Social_Img\mall.webp" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='md:h-72 md:p-7 text-center myblurr flex flex-col justify-start items-center md:gap-2 mb:p-4 mb:gap-1'>
                                        <h3 className='md:text-xl text-cyan-400 font-Montserrat mb:text-lg mb:font-semibold md:font-[500] tb:text-xl'>Metalife restaurants</h3>
                                        <p className='text-white font-Poppins font-[400] md:text-base mb:text-sm tb:text-base'>Metalife users can explore virtual restaurants, taste digital delicacies, interact with AI chefs and waitstaff, and even customize their dining environment to suit their preferences.
                                        </p>


                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* slidre 9 */}
                            <SwiperSlide>
                                <div className='socialprevdiv1 flex flex-col justify-center items-center  md:border-2 md:border-violet-600 h-auto w-full md:rounded-t-[4rem] shadow-xl shadow-pink-700 mb:rounded-t-[2rem] mb:pb-5 md:pb-0 mb:border-0 cursor-pointer tb:px-7 tb:py-6 md:px-0 md:py-0'>
                                    <div className='sociprev_img9 md:h-[20rem] mb:h-[19rem] w-full flex justify-end items-end md:rounded-t-[4rem] mb:rounded-t-[2rem]'>
                                        <div className='h-full w-full flex justify-center items-end  rounded-t-3xl'>
                                            <div className='bg-[#C547F2] py-2 px-8 rounded-t-[4rem]'>
                                                <img className='md:h-10 mb:h-8' src="\Images\Social_Img\mall.webp" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='md:h-72 md:p-7 text-center myblurr flex flex-col justify-start items-center md:gap-2 mb:p-4 mb:gap-1'>
                                        <h3 className='md:text-xl text-cyan-400 font-Montserrat mb:text-lg mb:font-semibold md:font-[500] tb:text-xl'>Metalife adventure park</h3>
                                        <p className='text-white font-Poppins font-[400] md:text-base mb:text-sm tb:text-base'>Metalife Adventure Parks offer thrilling and adrenaline-pumping experiences within the metaverse. Users can engage in virtual extreme sports, and water slides and explore virtual world adventures. </p>


                                    </div>
                                </div>
                            </SwiperSlide>




                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Socialprivillege