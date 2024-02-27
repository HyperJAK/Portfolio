//font imports
import {Roboto_Slab, Rubik} from 'next/font/google'

//components
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

//framer motion
import {motion} from 'framer-motion'

//variants
import {fadeIn} from '../variants'

const rubikBold = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['700'],
})

const rubikBlack = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['900'],
})

const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  weight: ['700'],
})

const Home = () => {
  return (
    <div className={'/*bg-primary/60*/ h-full'}>
      {/*Text*/}
      <div
        className={
          'bg-gradiant-to-r h-full w-full from-primary/10 via-black/30 to-black/10'
        }>
        {/*Title*/}
        <div
          className={
            'container mx-auto flex h-full flex-col justify-center text-center xl:pt-20 xl:text-left'
          }>
          <h1 className={`h1 z-20 ${rubikBold.variable} font-rubik`}>
            <span className={`text-accent ${rubikBlack.variable} font-rubik`}>
              Present{' '}
            </span>
            effort <br />
            <span className={`text-accent ${rubikBlack.variable} font-rubik`}>
              ripens{' '}
            </span>
            the future{' '}
          </h1>
          {/*Description*/}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className={`z-20 mx-auto mb-10 max-w-sm text-white xl:mx-0 xl:mb-16 xl:max-w-xl ${roboto_slab.variable} relative font-robotoSlab`}>
            Dedicated and passionate CS student who loves coding, and enjoys
            building side projects in his free time for self improvement and
            development.
          </motion.p>
          {/*Button for projects*/}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className={'relative flex justify-center lg:hidden'}>
            <ProjectsBtn imageLink={'Buttons/Projects.png'} />
          </motion.div>
          {/*Projects Button*/}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className={'hidden lg:flex'}>
            <ProjectsBtn imageLink={'Buttons/Projects.png'} />
          </motion.div>
        </div>
      </div>
      {/*Image*/}
      <div className={'absolute bottom-0 right-0 h-full w-screen'}>
        {/*bg image*/}
        <div
          className={
            'translate-z-0 /*mix-blend-color-dodge*/ absolute h-screen w-screen xl:bg-space  xl:bg-cover xl:bg-center xl:bg-no-repeat'
          }></div>

        {/*Particles*/}
        <ParticlesContainer />
        {/*Avatar image*/}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial={'hidden'}
          animate={'show'}
          exit={'hidden'}
          transition={{duration: 1, ease: 'easeInOut'}}
          className={
            'absolute -bottom-32 h-full max-h-[678px] w-full max-w-[737px] lg:bottom-0 lg:right-[8%]'
          }>
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
}

export default Home
