// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2'

// nav data
export const navData = [
  {name: 'home', path: '/', icon: <HiHome />},
  {name: 'about', path: '/about', icon: <HiUser />},
  {name: 'work', path: '/work', icon: <HiViewColumns />},
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
]

//Next.js linker
import Link from 'next/link'

//Next.js Router
import {useRouter} from 'next/router'

const Nav = () => {
  const router = useRouter()
  const pathName = router.pathname

  return (
    <nav
      className={
        'fixed bottom-0 top-0 z-50 mt-auto flex h-max w-full flex-col items-center gap-y-4 xl:right-[2%] xl:h-screen xl:w-16 xl:max-w-md xl:justify-center'
      }>
      {/*innner elements*/}
      <div
        className={
          'flex h-[30px] w-full items-center justify-between gap-y-10 bg-white/10 px-4 py-8 text-3xl backdrop-blur-sm md:px-40 xl:h-max xl:flex-col xl:justify-center xl:rounded-full xl:px-0 xl:text-xl'
        }>
        {navData.map((link, index) => {
          return (
            <Link
              className={`${link.path === pathName && 'text-accent'} group relative flex items-center transition-all duration-300 hover:text-accent`}
              href={link.path}
              key={index}>
              {/*tooltip*/}
              <div
                className={'absolute right-0 hidden pr-14 xl:group-hover:flex'}>
                <div
                  className={
                    'relative flex w-[100px] items-center justify-center rounded-[15px] bg-black/50 p-[6px] text-white backdrop-blur-md'
                  }>
                  <div className={'text-[12px] capitalize'}>{link.name}</div>
                  {/*Triangle*/}
                  <div
                    className={
                      'absolute -right-2 border-y-[6px] border-l-8 border-r-0 border-solid border-y-transparent border-l-black/50'
                    }></div>
                </div>
              </div>

              {/*Icons*/}
              <div>{link.icon}</div>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Nav
