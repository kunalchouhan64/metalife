import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='md:py-14 bg-[#090945] flex md:justify-evenly md:items-start md:flex-row text-white font-Montserrat mb:flex-col mb:justify-center mb:items-center mb:py-5 mb:space-y-4 md:space-y-0 overflow-hidden'>
                {/* contact div  */}
                <div className=''>
                    <h3 className='text-[#22BBFD] md:text-2xl md:font-semibold mb:text-center md:text-left  mb:text-xl mb:font-Montserrat'>Contact Us</h3>
                    <div className='space-y-3 py-4'>
                        <div className='flex space-x-3 justify-center items-center'><img className='h-5' src="\Images\Footer_Img\mail.webp" alt="" /> <a href="">info@metalife.city</a> </div>
                        <div className='flex space-x-3 justify-center items-center'><img className='h-5' src="\Images\Footer_Img\call.webp" alt="" /> <a href="">+91 000-0000-000</a> </div>

                    </div>
                    <div className='flex justify-center items-start space-x-0 py-2 mb:space-x-3'>
                        <img className='h-20 mb:h-14' src="\Images\Footer_Img\facebook.webp" alt="" />
                        <img className='h-20 mb:h-14' src="\Images\Footer_Img\insta.webp" alt="" />
                        <img className='h-20 mb:h-14' src="\Images\Footer_Img\twitter.webp" alt="" />
                    </div>
                </div>

                {/* explore div  */}
                <div>
                    <h3 className='text-[#22BBFD] md:font-Poppins md:text-2xl font-semibold mb:text-center md:text-left  mb:text-xl mb:font-Montserrat'>Explore</h3>
                    <div className='space-y-4 py-4 font-Montserrat mb:text-center md:text-start mb:flex-col mb:flex'>
                        <a href='/'>Home</a>
                        <a href='#whitepaper'>Map</a>
                        <a href='#marketplace'>Market Place</a>
                        <a href='#nft'>NFT Collections</a>
                        <a href='#tokenomics'>Tokenomics</a>
                    </div>
                </div>
                {/* Legal div  */}
                <div>
                    <h3 className='text-[#22BBFD] md:font-Poppins md:text-2xl font-semibold mb:text-center md:text-left mb:text-xl mb:font-Montserrat'>Legal</h3>
                    <div className='space-y-4 py-4 font-Montserrat mb:text-center md:text-start mb:flex-col mb:flex'>
                        <a href='#'>Disclaimer</a>
                        <a href='#'>Privacy Policy</a>
                        <a href='#whitepaper'>White Paper</a>
                    </div>
                </div>
                {/* Legal div  */}
                <div>
                    <h3 className='text-[#22BBFD] md:font-Poppins md:text-2xl font-semibold mb:text-center md:text-left mb:text-xl mb:font-Montserrat'>Join Us</h3>
                    <div className='space-y-4 py-4 font-Montserrat flex flex-col justify-start items-start mb:justify-center mb:items-center md:items-start mb:px-4 md:px-0'>
                        <input className='font-Poppins py-2 px-4 rounded-xl border-2 border-white bg-transparent outline-none focus:border-2 focus:border-r-red-800 mb:w-[90%] md:w-full ' type="text" name="" id="" placeholder='example@gmail.com' />
                        <button type='submit' className='py-1 px-5 font-Montserrat mb:text-base md:text-lg border-2 border-[#ff1ce5] hover:bg-[#ff1ce5bf] text-white rounded-xl mb:text-center bg-transparent'>Submit</button>
                    </div>
                </div>
            </div>
            <div className='py-2 bg-[#090945] flex justify-center items-center mb:px-4'>
                <p className='font-Montserrat text-center text-white mb:w-full mb:text-sm md:text-base'>Copyright © 2023 metalife.city | All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer