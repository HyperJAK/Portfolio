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

const workSliderData = {
  slides: [
    {
      images: [
        {
          title: 'Portfolio Website',
          path: '/Projects Showcase/show1.jpeg',
          languages: ['Next.js', 'Tailwind CSS'],
          description:
            'A portfolio website made through Next.js framework with tailwind CSS library implementation for each of styling and animating.',
          link: 'https://github.com/HyperJAK/Portfolio',
        },
        {
          title: 'HR System',
          path: '/Projects Showcase/show11.jpeg',
          languages: ['Angular', 'TypeScript', 'Material UI', 'Figma'],
          description:
            'An internal HR system to streamline workflows, centralize data, and support decision-making across teams.',
          link: 'https://www.figma.com/design/2pCR5IBTP5KEFZh6jxGYdU/Showcase-HR-System?node-id=0-1&t=si86UeDKwLcuXF5G-1',
        },
        {
          title: 'Trip Booking Website',
          path: '/Projects Showcase/show2.jpeg',
          languages: ['React.js', 'Node.js', 'MySQL'],
          description:
            'An end-to-end app that allows users to book flights and hotels through web. Developed a separate Node.js backend application using Node.js connected to MySQL database. Also Implemented a robust user management system to authenticate users.',
          link: 'https://github.com/HyperJAK/MobileDevFinalProj-reactjs.git',
        },
        {
          title: 'Trip Booking app',
          path: '/Projects Showcase/show3.jpeg',
          languages: ['React Native', 'Node.js', 'MySQL'],
          description:
            'An end-to-end app that allows users to book flights and hotels through mobile. Developed a separate Node.js backend application using Node.js connected to MySQL database. Also Implemented a robust user management system to authenticate users.',
          link: 'https://github.com/HyperJAK/MobileDevFinalProj-reactNative.git',
        },
      ],
    },
    {
      images: [
        {
          title: 'Security Testing',
          path: '/Projects Showcase/show5.jpeg',
          languages: ['React.js', 'Node.js', 'MySQL'],
          description:
            'Small website made for the purpose of implementing and testing security measures like: Authentication, Email otp, Database sensitive data encryption using AES 256 algorithm, Not robot verification, Duplicate Image detection by hash etc..',
          link: 'https://github.com/HyperJAK/CompSecFinalProj.git',
        },
        {
          title: 'Music Player',
          path: '/Projects Showcase/show6.jpeg',
          languages: ['C#'],
          description:
            'A music player that plays your local music using public C# library.',
          link: 'https://github.com/HyperJAK/Music-Player-CSharp.git',
        },
        {
          title: 'AI Rock Paper Scissors',
          path: '/Projects Showcase/show7.jpeg',
          languages: ['Python'],
          description:
            'A hand tracking AI app that recognizes the form of your hand, has the ability to detect two hands playing rock paper scissors and score the winner each.',
          link: 'https://github.com/PeekMe01/AIFingerCountingProject',
        },
        {
          title: 'Youtube Downloader',
          path: '/Projects Showcase/show8.jpeg',
          languages: ['Python'],
          description:
            'A Python GUI app that uses a public library to download YouTube music, videos and playlists.',
          link: 'https://github.com/HyperJAK/Youtube-Downloader',
        },
      ],
    },
    {
      images: [
        {
          title: 'UX-UI W4Kitchen cooking',
          path: '/Projects Showcase/show9.jpeg',
          languages: ['Figma'],
          description:
            'A Figma design of a cooking website and mobile application.',
          link: 'https://www.figma.com/file/7Ki5oDpHGewYVtXTnNBfpy/UI%2FUX-Design-Project-Sketches?node-id=0-1&t=ox3GwJIeYkUgUGUw-0',
        },
        {
          title: 'Project and Task management',
          path: '/Projects Showcase/show10.jpeg',
          languages: ['C#', 'Linq', 'Next.js'],
          description:
            'A Project and Task management web API developed in C# along with entity framework constructed SQLite database. And optional swagger or Next.js frontend demo',
          link: 'https://github.com/HyperJAK/TaskManagementAPI',
        },
        {
          title: 'Car Dealership',
          path: '/Projects Showcase/show4.jpeg',
          languages: ['JavaFX', 'MySQL'],
          description:
            'A car dealership UI application, connected to a local MySQL database. ',
          link: 'https://github.com/HyperJAK/CarDealership-Maven-Runnable.git',
        },
      ],
    },
  ],
}

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
            <div className={showDetails ? 'hidden sm:block' : 'block'}>
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
            </div>

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
            {showDetails && <DetailedWorkSlider workSliderData={workSliderData} />}
            {!showDetails && <BasicWorkSlider workSliderData={workSliderData}/>}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Work
