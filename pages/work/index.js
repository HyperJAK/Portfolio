//components
import DetailedWorkSlider from '../../components/DetailedWorkSlider'

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'
import ProjectsBtn from '../../components/ProjectsBtn'
import {Roboto_Slab, Rubik} from 'next/font/google'
import {useState} from 'react'
import BasicWorkSlider from '../../components/BasicWorkSlider'

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

const Work = () => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className={'flex flex-col items-center py-8 lg:py-36'}>
      <div className={'container mx-auto'}>
        {/* Text and Button Section */}
        <div
          className={
            'mb-4 flex flex-col text-center lg:flex-row lg:gap-x-8 lg:text-left'
          }>
          <div
            className={
              'mt-[25%] flex flex-col gap-y-5 sm:mt-[0%]  lg:w-[30vw] xl:mb-0 xl:w-[30vw]'
            }>
            {!showDetails && (
              <>
                <motion.h2
                  variants={fadeIn('up', 0.2)}
                  initial={'hidden'}
                  animate={'show'}
                  exit={'hidden'}
                  className={`h2 lg:mt-[50%] ${rubikBlack.variable} font-rubik`}>
                  My work <span className={'text-accent'}>.</span>
                </motion.h2>
                <motion.p
                  variants={fadeIn('up', 0.2)}
                  initial={'hidden'}
                  animate={'show'}
                  exit={'hidden'}
                  className={`${roboto_slab.variable} mx-auto mb-6 max-w-max font-robotoSlab lg:mx-0`}>
                  All the work that i have done so far, ranging from 2021 till
                  present day.
                </motion.p>
              </>
            )}

            {!showDetails && (
              <>
                <motion.div
                  variants={fadeIn('down', 0.4)}
                  initial={'hidden'}
                  animate={'show'}
                  exit={'hidden'}
                  className={'relative flex justify-center sm:hidden'}
                  onTap={() => {
                    console.log('Tapped')
                    setShowDetails(!showDetails)
                  }}>
                  <ProjectsBtn imageLink={'Buttons/ShowMore.png'} />
                </motion.div>
                <motion.div
                  variants={fadeIn('down', 0.4)}
                  initial={'hidden'}
                  animate={'show'}
                  exit={'hidden'}
                  className={'hidden sm:flex'}
                  onClick={() => {
                    console.log('CLicked')
                    setShowDetails(!showDetails)
                  }}>
                  <ProjectsBtn imageLink={'Buttons/ShowMore.png'} />
                </motion.div>
              </>
            )}

            {showDetails && (
              <>
                {/**/}
                <motion.div
                  variants={fadeIn('down', 0.4)}
                  initial={'hidden'}
                  animate={'show'}
                  exit={'hidden'}
                  className={'relative flex justify-center sm:hidden'}
                  onTap={() => {
                    console.log('Tapped')
                    setShowDetails(!showDetails)
                  }}>
                  <ProjectsBtn imageLink={'Buttons/ShowLess.png'} />
                </motion.div>
                <motion.div
                  variants={fadeIn('down', 0.4)}
                  initial={'hidden'}
                  animate={'show'}
                  exit={'hidden'}
                  className={'hidden sm:flex'}
                  onClick={() => {
                    console.log('CLicked')
                    setShowDetails(!showDetails)
                  }}>
                  <ProjectsBtn imageLink={'Buttons/ShowLess.png'} />
                </motion.div>
              </>
            )}
          </div>

          {/* Slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className={'w-full lg:mt-0 lg:max-w-[70%]'}>
            {showDetails && <DetailedWorkSlider />}
            {!showDetails && <BasicWorkSlider />}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Work
