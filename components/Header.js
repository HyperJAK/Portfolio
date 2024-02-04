//font import
import {Rubik} from 'next/font/google'

//next link
import Link from 'next/link'

//components
import Socials from '../components/Socials'

const rubikBold = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['700'],
})

const rubikRegular = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['400'],
})

const Header = () => {
  return (
    <header className={'absolute my-3 w-full'}>
      <div
        className={
          'flex w-full flex-col items-center gap-y-6 px-16 py-8 lg:flex-row xl:h-[90px] xl:px-0'
        }>
        <Link
          href={'/'}
          className={`${rubikBold.variable} z-30 w-[50%] whitespace-nowrap text-center font-rubik xl:text-5xl`}>
          James{' '}
          <span
            className={`${rubikRegular.variable} whitespace-nowrap font-rubik`}>
            Abou Khalil
          </span>
          <span className={'whitespace-nowrap text-accent xl:text-5xl'}>.</span>
        </Link>

        {/*Socials*/}
        <Socials />
      </div>
    </header>
  )
}

export default Header
