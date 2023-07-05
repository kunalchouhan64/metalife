import React from 'react'

const Innercreater = () => {
    return (
        <>
            <div className='inner_bg md:h-screen w-full flex justify-between items-center flex-col md:py-0 mb:py-0 mb:h-auto mb:w-full md:gap-0 mb:gap-20 overflow-hidden'>
                <div className="overlay h-full w-full bg-black md:bg-opacity-60 mb:bg-opacity-70 flex-col flex justify-between py-8 mb:gap-8">

                    <div className='text-white mb:px-4 md:px-0'>
                        <h2 className='text-white font-Montserrat md:text-3xl text-center font-[500] mb:text-2xl'>Unleash Your <span className='text-[#ff1ce5] font-Montserrat font-semibold'> Inner Creator.</span></h2>
                    </div>
                    <div className='flex justify-center items-center flex-col space-y-5'>
                        <p className='font-Poppins md:w-3/5 md:text-base text-center text-white mb:w-full mb:font-Montserrat mb:text-sm  mb:px-5 md:px-0'>Step into a world where your imagination knows no bounds and where the power to bring your wildest ideas to life lies at your fingertips. Whether you're a visionary artist, a master builder, or a digital storyteller, the metaverse provides the ultimate canvas for your creativity to flourish. </p>
                        <button className='py-1 btnhover px-7 border-2 border-[#ff1ce5] md:text-lg font-Montserrat mb:text-base text-white'>Create</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Innercreater