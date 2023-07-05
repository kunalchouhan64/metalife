import React from 'react'

const Metatokens = () => {
    return (
        <>
            <div id='tokenomics' className='md:py-7 mb:py-3 bg-gradient-to-b from-[#2A0E68] to-[#0B011E] mb:h-auto mb:w-full overflow-hidden tb:px-6 md:px-0'>
                <h2 className='md:text-3xl font-Montserrat text-white text-center mb:text-[1.5rem] font-[500]'> Meta life<span className='text-[#ff1ce5] font-[550]'> Tokenomics</span> </h2>
                <div className="imgwrapper flex justify-center items-center md:py-10 cursor-pointer mb:py-5 mb:px-3 md:px-0">
                    <img data-aos="fade-up" data-aos-duration="3000" className='md:h-[35rem] border border-cyan-400 hover:border-[2.5px] transitionclass shadow-lg shadow-[#0B011E] rounded-3xl md:w-auto mb:h-auto mb:w-full' src="\Images\tokenomics_img.webp" alt="" />
                </div>
            </div>
        </>
    )
}

export default Metatokens