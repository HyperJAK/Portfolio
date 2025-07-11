// data
import Image from 'next/image'

//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'

//import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

//import required modules
import {FreeMode, Navigation, Pagination} from 'swiper'
import 'swiper/swiper-bundle.css'

//icons
import {BsArrowRight} from 'react-icons/bs'
import {Roboto_Slab} from 'next/font/google'
import Link from 'next/link'

const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  weight: ['400'],
})

import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const DetailedWorkSlider = ({workSliderData}) => {
  return (
    <motion.div
      variants={fadeIn('down', 0.6)}
      initial={'hidden'}
      animate={'show'}
      exit={'hidden'}
      className={'sm:h-[100%]'}>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation, Pagination]}
        className={'sm:h-[100%]'}>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        {workSliderData.slides.map((slide, index) => {
          return slide.images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className={
                    'group relative flex h-max items-center justify-center overflow-hidden rounded-2xl bg-transparent'
                  }>
                  <div
                    className={
                      'relative flex flex-col items-center justify-center overflow-auto '
                    }>
                    {/*Image*/}
                    <Image
                      src={image.path}
                      width={400}
                      height={100}
                      alt={''}
                      className={
                        'z-20 rounded-xl transition-all duration-500 hover:translate-y-[10px] hover:border-2 hover:border-accent'
                      }
                    />
                    {/*Languages*/}
                    <div
                      className={
                        'flex flex-row flex-nowrap justify-center gap-x-2'
                      }>
                      {image.languages.map((language, index) => {
                        return (
                          <div
                            key={index}
                            className={`mt-3 overflow-auto rounded-2xl border-2 border-pinkish bg-primary bg-opacity-30 p-2 lg:mb-3 ${roboto_slab.variable} font-robotoSlab text-[12px] lg:text-[14px]`}>
                            {language}
                          </div>
                        )
                      })}
                    </div>
                    <div
                      className={`p-6 ${roboto_slab.variable} m-15 text-center font-robotoSlab text-[11px] lg:text-[15px]`}>
                      {image.description}
                    </div>
                    <a
                      href={image.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        'mb-10 rounded-2xl border-2 border-accent bg-opacity-30 p-2 transition-all duration-300 hover:border-8 hover:border-pinkish'
                      }>
                      GitHub
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        })}
      </Swiper>
    </motion.div>
  )
}

export default DetailedWorkSlider
