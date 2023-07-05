import React from 'react'

const Subscription = () => {
    return (
        <>
            <div className='bg-gradient-to-b from-[#0B011E] to-[#2A0E68] h-auto w-full mb:h-auto mb:w-full overflow-hidden'>
                <h2 className='md:text-3xl font-Montserrat text-white text-center mb:text-[1.5rem] font-[500]'> Early <span className='text-[#ff1ce5] font-[550]'> Subscription Benefits</span></h2>
                <div className="wrapper flex justify-center items-center md:flex-row md:py-3 md:px-10 mb:flex-col mb:px-5 mb:py-5 md:space-x-5">
                    {/* img div  */}
                    <div data-aos="zoom-in" data-aos-duration="2500" id='getsubscription' className='md:py-10 bg-yellow300 mb:py-4 tb:p-10 md:p-0'>
                        <img loading='lazy' className='md:h-[32rem] md:w-auto mb:h-auto mb:w-full tb:h-auto tb:w-full' src="\Images\Subscriptio_Images\subscription_img.png" alt="" />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2500" className='flex flex-col justify-center items-start text-white mb:w-full mb:py-6 md:w-auto tb:px-8 md:px-0'>
                        <ul className='space-y-3 flex flex-col justify-center items-start font-Montserrat md:text-lg mb:text-sm'>
                            <li className='flex space-x-2 items-center justify-center font-Montserrat tb:text-base'> <img className='h-8' src="\Images\Subscriptio_Images\tick.webp" alt="" /> <span>Free access to Premium NFTs.</span> </li>

                            <li className='flex space-x-2 items-center justify-center font-Montserrat tb:text-base'> <img className='h-8' src="\Images\Subscriptio_Images\tick.webp" alt="" /> <span>The first 10,000 plots will be distributed to early users for free.

                            </span> </li>
                            <li className='flex space-x-2 items-center justify-center font-Montserrat tb:text-base'> <img className='h-8' src="\Images\Subscriptio_Images\tick.webp" alt="" /> <span>20% Discounts on residential plots ( size: 1000 square feet of space).</span> </li>

                        </ul>
                        <div className='md:mt-8 mb:mt-7 btnhover mb:pl-4'>
                            <button className='md:py-2 md:px-5 mb:text-sm mb:py-2 mb:px-4 font-Montserrat border-2 border-[#ff1ce5] md:text-base'>Buy Subscription</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Subscription