//components

//icon imports
import {BsArrowRight} from 'react-icons/bs'

//framer import
import {motion} from 'framer-motion'

//variant imports
import {fadeIn} from '../../variants'
import {Roboto_Slab, Rubik} from 'next/font/google'

const rubikBlack = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['900'],
})

const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  weight: ['400'],
})

const Contact = () => {
  return (
    <div className={'h-full bg-primary/30'}>
      <div
        className={
          'container mx-auto flex h-full items-center justify-center py-32 text-center xl:text-left'
        }>
        {/*Text and inputs*/}
        <div className={'flex w-full max-w-[700px] flex-col'}>
          {/*Text*/}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className={` h2 mb-12 text-center  ${rubikBlack.variable} font-rubik`}>
            Let's <span className={'text-accent'}>connect.</span>
          </motion.h2>
          {/*Form*/}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className={`mx-auto flex w-full flex-1 flex-col gap-6 ${roboto_slab.variable} font-robotoSlab`}>
            {/*Inputs*/}
            <div className={'flex w-full gap-x-6'}>
              <input
                type={'text'}
                placeholder={'name'}
                className={'input border-white/40'}
              />
              <input
                type={'email'}
                placeholder={'email'}
                className={'input border-white/40'}
              />
            </div>
            <input
              type={'text'}
              placeholder={'subject'}
              className={'input border-white/40'}
            />
            <textarea
              placeholder={'message'}
              className={'textarea border-white/40'}></textarea>
            <button
              className={
                'btn group flex max-w-[170px] items-center justify-center overflow-hidden rounded-full border border-white/50 px-8 transition-all duration-300 hover:border-accent'
              }>
              <span
                className={
                  'transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0'
                }>
                Let's talk
              </span>
              <BsArrowRight
                className={
                  'absolute text-[22px] opacity-0 transition-all duration-300 group-hover:flex group-hover:opacity-100'
                }
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact
