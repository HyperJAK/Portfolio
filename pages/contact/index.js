//components

//icon imports
import {BsArrowRight} from 'react-icons/bs'

//framer import
import {motion} from 'framer-motion'

//variant imports
import {fadeIn} from '../../variants'
import {Roboto_Slab, Rubik} from 'next/font/google'
import * as emailjs from '@emailjs/browser'
import {useEffect, useRef, useState} from 'react'
import ErrorNotification from '../../components/ErrorNotification'
import SuccessNotification from '../../components/SuccessNotification'

const rubikBlack = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['900'],
})

const Contact = () => {
  const [validForm, setValidForm] = useState(-1)
  const form = useRef()
  const name = useRef()
  const email = useRef()
  const subject = useRef()
  const message = useRef()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValidForm(-1)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [validForm])

  const sendEmail = (e) => {
    e.preventDefault()

    if (
      name.current.value !== '' &&
      email.current.value !== '' &&
      subject.current.value !== '' &&
      message.current.value !== ''
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID
            ? process.env.NEXT_PUBLIC_SERVICE_ID
            : process.env.SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID
            ? process.env.NEXT_PUBLIC_TEMPLATE_ID
            : process.env.TEMPLATE_ID,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY
              ? process.env.NEXT_PUBLIC_PUBLIC_KEY
              : process.env.PUBLIC_KEY,
          }
        )
        .then(
          () => {
            setValidForm(0)
          },
          (error) => {
            setValidForm(1)
          }
        )
    } else {
      setValidForm(1)
    }

    name.current.value = ''
    email.current.value = ''
    subject.current.value = ''
    message.current.value = ''
  }

  return (
    <div className={'h-full items-center bg-primary/30'}>
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
            Let&apos;s <span className={'text-accent'}>connect.</span>
          </motion.h2>
          {/*Form*/}
          <motion.form
            ref={form}
            variants={fadeIn('up', 0.4)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className={`mx-auto flex w-full flex-1 flex-col gap-6 `}
            onSubmit={sendEmail}>
            {/*Inputs*/}
            <div className={'flex w-full gap-x-6'}>
              <input
                type={'text'}
                placeholder={'name'}
                ref={name}
                name={'from_name'}
                className={'input border-white/40'}
              />
              <input
                type={'email'}
                placeholder={'email'}
                ref={email}
                name={'from_email'}
                className={'input border-white/40'}
              />
            </div>
            <input
              type={'text'}
              placeholder={'subject'}
              ref={subject}
              name={'subject'}
              className={'input border-white/40'}
            />
            <textarea
              placeholder={'message'}
              name={'message'}
              ref={message}
              className={'textarea border-white/40'}></textarea>
            <button
              className={
                'btn group flex max-w-[170px] items-center justify-center overflow-hidden rounded-full border border-white/50 px-8 transition-all duration-300 hover:border-accent'
              }
              type={'submit'}>
              <span
                className={
                  'transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0'
                }>
                Let&apos;s Talk
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
      {validForm === 0 && (
        <SuccessNotification message={'Email sent successfully'} />
      )}
      {validForm === 1 && (
        <ErrorNotification message={'Failed to send email'} />
      )}
    </div>
  )
}

export default Contact
