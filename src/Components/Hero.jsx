import React from 'react'

const Hero = () => {
    return (
        <>
            {/* ///  */}
            <header className="relative mobileimg flex items-center justify-center md:h-screen mb:justify-start overflow-hidden mb:h-[90vh] tb:h-[90vh]">
                <div className="overlay relative z-30 md:h-full md:w-full top-0 left-0  md:bg-black md:bg-opacity-50 mb:bg-black mb:bg-opacity-60 mb:w-full text-white mb:h-[90vh] tb:bg-black tb:bg-opacity-60 tb:w-full tb:h-[90vh] md:bg-none mb:py-5 md:py-0">
                    <div className="inner_overlay h-full w-full  flex justify-start items-center flex-col">
                        {/* Navbar div  */}
                        <div className='w-full px-7 sticky top-0'>
                            <nav className="nav flex flex-wrap md:py-2 items-center justify-between px-4 top-0 z-50 sticky bg-transparent">
                                <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
                                    <a href='/' className="text-2xl font-[Popp] cursor-pointer text-white">
                                        {/* <img src="\Images\Footer\Tripocio_logo.webp" className="h-32 px-5 py- inline mb:h-20 mb:py-2 lg:h-20" alt="" /> */}
                                        <h2 className='font-Montserrat md:text-3xl md:font-[500]'>MetaLife</h2>
                                    </a>
                                </div>



                                <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
                                <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">
                                    <span className="navicon bg-grey-darkest flex items-center relative text-3xl"></span>
                                </label>

                                <ul className="menu md:border-none flex justify-center items-center list-reset m-0 w-full md:w-auto md:space-x-3">
                                    <li className="text-center md:border-none">
                                        <a href='/' className="block md:text-lg md:inline-block px-4 py-3 no-underline font-[500] text-white md:font-Poppins text-xl">Home</a>
                                    </li>

                                    <li className="border-t text-center md:border-none">
                                        <a href='#tokenomics' className="block md:text-lg md:inline-block px-4 py-3 no-underline font-[400] text-white font-Poppins text-xl">Tokenomics</a>
                                    </li>

                                    <li className="border-t text-center md:border-none">
                                        <a href='#marketplace' className="block md:text-lg md:inline-block px-4 py-3 no-underline font-[400] text-white font-Poppins text-xl">Marketplace</a>
                                    </li>

                                    <li className="border-t text-center md:border-none">
                                        <a href='#whitepaper' className="block md:text-lg md:inline-block px-4 py-3 no-underline  font-Poppins text-xl font-[400] text-white">Whitepaper</a>
                                    </li>
                                    <li className="border-t text-center md:border-none">
                                        <a href='#getsubscription' className="block md:text-lg md:inline-block px-4 py-3 no-underline  font-Poppins text-xl font-[400] text-white">Get Subscription</a>
                                    </li>

                                </ul>
                            </nav>

                        </div>
                        {/* Content Div  */}
                        <div className=' md:pb-0 md:w-full md:h-full flex md:justify-end md:items-center flex-col text-center gap-3 mb:justify-center mb:h-full mb:w-full mb:px-5 mb:py-10'>
                            <p className='font-Montserrat mb:text-lg md:text-2xl mb:font-Poppins '>WELCOME TO THE</p>
                            <h2 className='text-center md:text-8xl md:w-[60%] mb:w-auto mb:text-center mb:text-4xl md:font-NatoSarif Sarif md:font-[300] text-transparent text-white drop-shadow-md mb:font-[500]'>META LIFE CITY</h2>
                            {/* <p className='md:hidden mb:block font-Montserrat text-sm mb:pt-3 md:pt-0 mb:px-2 md:px-0'>Welcome to Meta Life City, where dreams come to life and possibilities are limitless. Explore our vibrant community, indulge in exciting experiences, and embrace a new chapter of urban living.  <br /> <br />Discover a world that redefines modernity, where every moment is infused with innovation and inspiration. Start your extraordinary journey in Meta Life City today!</p>
                            <div className='md:hidden mb:block mb:pt-5 md:pt-0'>
                                <a href="#multiimg">  <button className='text-white py-2 px-4 border-2 border-pink-600 font-Montserrat mb:rounded-lg'>View Meta Life</button></a>
                            </div> */}
                        </div>

                        <div className='bg-gradient-to-b from-[#00000000] via-[#00000062] to-[#000000de] md:w-full md:h-full flex md:justify-center md:items-end md:py-10'>

                        </div>
                    </div>

                </div>

                <video
                    loop autoPlay="autoPlay" muted
                    className="absolute z-10 w-auto min-w-full min-h-full max-w-none mb:hidden md:block"
                >
                    <source
                        src="./Images/Hero_Images/hero_video.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </header>
        </>
    )
}

export default Hero