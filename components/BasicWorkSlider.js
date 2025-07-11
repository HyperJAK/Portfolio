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

//import framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  weight: ['400'],
})

const BasicWorkSlider = ({workSliderData}) => {
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
        modules={[Pagination]}
        className={' sm:h-[100%] lg:mt-10'}>
        {workSliderData.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className={'grid cursor-pointer grid-cols-2 grid-rows-2 gap-6'}>
                {slide.images.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        'group relative flex max-h-[250px] items-center justify-center overflow-hidden rounded-lg'
                      }>
                      <div
                        className={
                          'relative flex items-center justify-center overflow-hidden border-8 border-transparent transition-all duration-300 hover:border-8 hover:border-accent'
                        }>
                        <Link
                          href={image.link}
                          target={'_blank'}>
                          <Image
                            src={image.path}
                            width={500}
                            height={300}
                            alt={''}
                          />
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </motion.div>
  )
}

export default BasicWorkSlider
