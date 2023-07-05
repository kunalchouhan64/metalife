import React from 'react'

const Multichain = () => {
    return (
        <>
            <div className="wrapper h-full w-full flex justify-center md:flex-row items-center md:gap-9 bg-gradient-to-b from-[#110333] to-[#2a0e68] mb:h-auto mb:w-full mb:flex-col-reverse mb:px-5 mb:py-3 mb:gap-0  overflow-hidden tb:px-10 md:px-0">
                <div data-aos="fade-right" data-aos-duration="2000" className='flex flex-col md:gap-5 justify-center items-start md:w-[40%] mb:w-full mb:gap-2'><h2 className='md:text-3xl   font-Montserrat text-white mb:text-[1.5rem] mb:w-full font-[500]'> Multichain<span className='text-[#ff1ce5] font-[550]'> Metaverse</span> </h2>
                    <p className='font-Poppins md:text-base w-full text-white mb:text-sm mb:w-full tb:text-base'>Multichain metaverse is a blockchain-based virtual reality ecosystem that provides a decentralized, immersive digital environment for users to discover and interact with. <br /> <br /> The multichain metaverse also fosters innovation and diversity. Developers and creators can leverage different blockchain networks to build and deploy unique applications, experiences, and virtual assets.
                    </p>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" id='#multiimg' className='mb:py-0 md:py-0 tb:p-8 md:p-0'><img loading='lazy' className='md:h-[35rem] md:w-full multichainimg bounceanimation mb:h-auto mb:w-full tb:h-auto tb:w-full' src="\Images\Multichain_Images\multichain_img.webp" alt="" /></div>
            </div>
        </>
    )
}

export default Multichain