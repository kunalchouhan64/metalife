import React from 'react'

const Avatar = () => {
    return (
        <>
            <div className='h-auto w-full md:pt-40 md:pb-16 bg-[#0b011e] mb:py-9 mb:h-auto mb:w-full overflow-hidden'>
                <div className="avatar_bg md:h-[53vh] w-full  flex justify-center md:items-end mb:h-auto mb:w-full mb:flex-col mb:items-center mb:justify-center md:flex-row tb:px-8">
                    <div data-aos="fade-right" data-aos-duration="2000" className='overflow-auto mb:flex mb:justify-center mb:items-center'>
                        <img loading='lazy' className='md:h-[35rem] overflow-auto animate-pulse transitionclass mb:h-auto mb:w-full tb:h-auto tb:w-full tb:p-14 md:p-0' src="\Images\Avatar_Img\avatar_img.webp" alt="" />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className='md:w-[50%] pt-4 flex flex-col gap-5 md:pb-10 mb:w-full mb:pb-2 mb:px-6 mb:justify-start mb:items-start '>
                        <h2 className='font-Montserrat md:text-3xl text-white mb:text-[1.5rem] font-[500]'>Customize Your <span className='text-[#ff1ce5] font-[550]'>Avatar</span> </h2>
                        <p className='font-Poppins w-full text-white mb:text-sm mb:font-Montserrat md:text-base tb:text-base'>Personalize your digital identity with our innovative avatar customization options. From selecting unique facial features to customizing hairstyles, clothing, and accessories, you have the power to design an avatar that truly represents you. <br /> <br /> Avatars are not limited to visual elements alone; they can also include audio modifications, allowing users to alter their voices or add unique sounds.
                        </p>
                        <button className='md:py-2 md:px-5 border-2 border-[#ff1ce5] font-Montserrat w-32 text-white btnhover mb:text-sm mb:py-2 mb:px-7 mb:w-auto md:text-lg tb:text-base'>Customize</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Avatar