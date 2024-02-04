import React, {useState} from 'react'

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaJava,
  FaGithub,
} from 'react-icons/fa'

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiMysql,
  SiCsharp,
  SiKotlin,
  SiCplusplus,
  SiGit,
  SiAdobeillustrator,
  SiReact,
} from 'react-icons/si'

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Programming',
        icons: [
          <FaJava key={'java'} />,
          <SiCsharp key={'c#'} />,
          <FaPython key={'python'} />,
          <SiMysql key={'mysql'} />,
          <SiKotlin key={'kotlin'} />,
          <SiCplusplus key={'cpp'} />,
        ],
        links: [
          'https://www.java.com/en/',
          'https://dotnet.microsoft.com/en-us/languages/csharp',
          'https://www.python.org/',
          'https://www.mysql.com/',
          'https://kotlinlang.org/',
          'https://cplusplus.com/',
        ],
        names: ['Java', 'C#', 'Python', 'MySQL', 'Kotlin', 'C++'],
      },
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={'html'} />,
          <FaCss3 key={'css'} />,
          <FaJs key={'js'} />,
          <FaReact key={'reactjs'} />,
          <SiReact key={'reactnative'} />,
          <SiNextdotjs key={'nextjs'} />,
        ],
        links: [
          'https://www.w3schools.com/html/',
          'https://www.w3schools.com/css/',
          'https://www.w3schools.com/js/',
          'https://react.dev/',
          'https://reactnative.dev/',
          'https://nextjs.org/',
        ],
        names: [
          'HTML5',
          'CSS',
          'Javascript',
          'React.js',
          'React Native',
          'Next.js',
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma key={'figma'} />,
          <SiAdobeillustrator key={'illustrator'} />,
          <SiAdobephotoshop key={'photoshop'} />,
        ],
        links: [
          'https://www.figma.com/',
          'https://www.adobe.com/products/illustrator.html',
          'https://www.adobe.com/products/photoshop.html',
        ],
        names: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
      },
      {
        title: 'Tools',
        icons: [<FaGithub key={'github'} />, <SiGit key={'git'} />],
        links: ['https://github.com/', 'https://git-scm.com/'],
        names: ['GitHub', 'Git'],
      },
    ],
  },
  {
    title: 'certificates',
    info: [
      {
        title: 'SQL (Intermediate) Certificate',
        stage: '12 May, 2023',
        link: 'https://www.hackerrank.com/certificates/1f30410f4e7f',
      },
      {
        title: 'Java (Basic) Certificate',
        stage: '12 May, 2023',
        link: 'https://www.hackerrank.com/certificates/8d1915e41bf4',
      },
      {
        title: 'C# (Basic) Certificate',
        stage: '05 June, 2023',
        link: 'https://www.hackerrank.com/certificates/ac134e78afd6',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'Université Antonine',
        stage: '2021 - Present',
        link: 'https://ua.edu.lb/en/home',
      },
    ],
  },
  {
    title: 'languages',
    info: [
      {
        title: 'English',
        stage: 'Professional environment',
      },
      {
        title: 'Arabic',
        stage: 'Native environment',
      },
      {
        title: 'Russian',
        stage: 'Basic',
      },
      {
        title: 'French',
        stage: 'Basic',
      },
    ],
  },
  {
    title: 'Hobbies',
    info: [
      {
        title: 'Reading',
      },
      {
        title: 'Drawing',
      },
      {
        title: 'Biking',
      },
      {
        title: 'Listening to music',
      },
    ],
  },
]

//components
import Avatar from '../../components/Avatar'

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

//counters imports
import CountUp from 'react-countup'
import ProjectsBtn from '../../components/ProjectsBtn'
import {FaPython} from 'react-icons/fa6'
import Link from 'next/link'
import {Roboto_Slab, Rubik} from 'next/font/google'

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

const About = () => {
  const [index, setIndex] = useState(0)
  const linkedInRef = 'https://www.linkedin.com/in/james-abou-khalil-489b32179/'

  return (
    <div className={'h-full bg-primary/30 py-32 text-center xl:text-left'}>
      {/*Avatar image*/}
      {/*<motion.div
        variants={fadeIn('right', 0.2)}
        initial={'hidden'}
        animate={'show'}
        exit={'hidden'}
        className={'absolute -left-[370px] bottom-0 z-10 hidden xl:flex'}>
        <Avatar />
      </motion.div>*/}
      <div
        className={
          'container mx-auto flex h-full flex-col items-center gap-x-6 xl:flex-row'
        }>
        {/*Text and description*/}
        <div className={'flex flex-1 flex-col justify-center'}>
          <h2 className={`h2 ${rubikBlack.variable} font-rubik`}>
            About <span className={'text-accent'}>Me</span>
          </h2>
          <p
            className={`${roboto_slab.variable} mx-auto mb-6 max-w-[500px] px-2 font-robotoSlab xl:mx-0 xl:mb-12 xl:px-0`}>
            Dedicated and passionate CS student who loves coding, and enjoys
            building side projects in his free time for self improvement and
            development.
          </p>
          {/*LinkedIn*/}
          {/*Button for projects*/}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className={'relative flex hidden justify-center xl:hidden'}>
            <ProjectsBtn
              imageLink={'Buttons/LinkedIn.png'}
              redirectLink={linkedInRef}
            />
          </motion.div>
          {/*Projects Button*/}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className={'hidden xl:flex'}>
            <ProjectsBtn
              imageLink={'Buttons/LinkedIn.png'}
              redirectLink={linkedInRef}
            />
          </motion.div>
        </div>
        {/*Detailed info*/}
        <div
          className={
            'flex h-[480px] w-full flex-col overflow-auto xl:max-w-[48%]'
          }>
          <div className={'mx-auto mb-4 flex gap-x-4 xl:mx-0 xl:gap-x-8'}>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} relative cursor-pointer capitalize after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-8 after:bg-white xl:text-lg`}
                  onClick={() => setIndex(itemIndex)}>
                  {item.title}
                </div>
              )
            })}
          </div>
          <div
            className={
              'flex flex-col items-center gap-y-2 py-2 xl:items-start xl:gap-y-4 xl:py-6'
            }>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <>
                  {!item.icons && (
                    <Link
                      href={item.link ? item.link : ''}
                      className={
                        'group flex w-max rounded-2xl border-[1px] border-white p-2 transition-all duration-500 hover:translate-y-[-5px] hover:border-accent hover:bg-primary xl:mb-2'
                      }>
                      <div
                        key={itemIndex}
                        className={
                          'flex max-w-max flex-1 flex-col items-center gap-x-2  text-white/60 md:flex-row'
                        }>
                        {/*Title*/}
                        <div
                          className={
                            'mb:mb-0 font-light group-hover:text-white'
                          }>
                          {item.title}
                        </div>
                        {item.stage && item.link && (
                          <>
                            <div
                              className={
                                'hidden group-hover:text-white md:flex'
                              }>
                              - {item.stage}
                            </div>
                          </>
                        )}

                        <div className={'flex gap-x-4'}></div>
                      </div>
                    </Link>
                  )}

                  {item.icons && (
                    <div
                      key={itemIndex}
                      className={
                        'flex max-w-max flex-1 flex-col items-center gap-x-2  text-white/60 md:flex-row'
                      }>
                      {/*Title*/}
                      <div className={'mb:mb-0 font-light'}>{item.title}</div>

                      <div className={'flex gap-x-4'}>
                        {/*Icons*/}
                        {item.icons?.map((icon, itemIndex) => {
                          return (
                            <Link
                              href={item.links[itemIndex]}
                              key={itemIndex}
                              className={'group transition-all duration-300'}
                              target="_blank">
                              <div
                                className={
                                  'rounded-full border-2 border-accent p-2 text-2xl text-white transition-all duration-300 hover:bg-accent hover:text-primary'
                                }>
                                {icon}
                              </div>
                              <div
                                className={
                                  'group absolute hidden w-[100px] items-center justify-center rounded-[15px] bg-black/50 p-[6px] text-[12px] capitalize text-white backdrop-blur-md transition-all duration-300 group-hover:flex'
                                }>
                                {item.names[itemIndex]}
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
