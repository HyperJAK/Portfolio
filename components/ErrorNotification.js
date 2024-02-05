import {BsArrowRight} from 'react-icons/bs'
import {Roboto_Slab} from 'next/font/google'
import {useEffect, useState} from 'react'

const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  weight: ['400'],
})

const ErrorNotification = ({message}) => {
  return (
    <div
      className={`duration-2000 absolute left-[48%] top-20 mx-auto flex w-auto items-center justify-center rounded-2xl bg-red-600 p-5 transition-all`}>
      <div className={`text-white ${roboto_slab.variable} font-robotoSlab`}>
        {message ? message : 'Error'}
      </div>
    </div>
  )
}

export default ErrorNotification
