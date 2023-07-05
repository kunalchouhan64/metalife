import React from 'react'

const Nextgen = () => {
    return (
        <>
            <div className='flex justify-center md:gap-20 md:flex-row items-center md:px-20 md:py-5 bg-gradient-to-b from-[#0B011E] to-[#2A0E68] mb:gap-3 mb:px-5 mb:flex-col overflow-hidden mb:h-full mb:w-full mb:py-8 tb:px-10'>
                <div data-aos="zoom-out" data-aos-duration="1500" className='flex flex-col md:w-[40%] cursor-pointer mb:w-full'>
                    <div className='flex justify-center items-center'>
                        <div className='bg-[#D621F4] md:rounded-full mb:rounded-[50%] mb:translate-y-7 md:translate-y-9 md:p-4 mb:p-4'><img className='md:h-14 mb:h-8' src="\Images\Nextgen_Images\people.webp" alt="" /></div>
                    </div>
                    <div className='md:py-10 md:px-6 text-center rounded-[3rem] border border-cyan-400 space-y-3 md:h-[59vh] transitionclass shadow-lg shadow-cyan-500 hover:shadow-lg hover:shadow-violet-700 mb:h-auto mb:w-full mb:px-5 mb:space-y-2 mb:py-8'>
                        <h2 className='font-Montserrat md:text-2xl text-white font-semibold mb:text-lg md:mt-5 mb:mt-2'>Next Generation <br />
                            of Digital Assets</h2>
                        <p className='font-Poppins text-white mb:text-sm md:text-base'>The future brings forth a new era of highly immersive, realistic, and interactive assets that blur the lines between the physical and digital realms.

                            Next-gen assets leverage cutting-edge technologies like virtual reality, augmented reality, and photorealistic rendering to create a truly immersive and engaging experience.

                        </p>
                        <br />
                        <p className='font-Poppins text-white mb:text-sm md:text-base'>These assets go beyond mere visual appeal.  They encompass dynamic physics, lifelike animations, and intricate details that bring them to life in the metaverse.

                        </p>
                    </div>
                </div>
                <div data-aos="zoom-out" data-aos-duration="1500" className='flex flex-col md:w-[40%] cursor-pointer transitionclass mb:w-full'>
                    <div className='flex justify-center items-center'>
                        <div className='bg-[#D621F4] md:rounded-full mb:rounded-[50%] mb:translate-y-7 md:translate-y-9 md:p-4 mb:p-4'><img className='md:h-14 mb:h-8' src="\Images\Nextgen_Images\finance.webp" alt="" /></div>
                    </div>
                    <div className='md:py-7 md:px-6 text-center rounded-[3rem] border border-cyan-400 space-y-3 transitionclass shadow-lg shadow-cyan-500 hover:shadow-lg hover:shadow-violet-700 mb:h-auto mb:w-full mb:py-6 mb:px-5'>
                        <h2 className='font-Montserrat md:text-2xl text-white font-semibold mb:text-lg mb:mt-5 md:mt-5'>Financial Solution</h2>
                        <p className='font-Poppins text-white mb:text-sm md:text-base'>We understand the importance of secure transactions, reliable currencies, and seamless financial operations. Whether you're buying virtual assets, conducting virtual commerce, or managing digital investments, our metaverse financial solutions offer a range of services to meet your needs.


                        </p>
                        <br />
                        <p className='font-Poppins text-white mb:text-sm md:text-base'>From decentralized virtual currencies to blockchain-based smart contracts, we provide robust and transparent financial infrastructure to ensure trust and efficiency within the metaverse. Our solutions enable secure transactions, asset management, and liquidity options, allowing you to navigate the metaverse economy with confidence.


                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nextgen