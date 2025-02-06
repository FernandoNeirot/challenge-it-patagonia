import React from 'react'

interface IProps {
  children: React.ReactNode
  title: string
  close: () => void
}

const Modal = ({children, title, close}:IProps) => {
  return (
    <div className=" z-30 fixed inset-0 flex items-center justify-center " style={{zIndex: 100}}>
      <div className='z-40 fixed inset-0 bg-black opacity-70 flex items-center justify-center' onClick={close} style={{zIndex: 110}}/>
      <div className='z-50 max-w-[400px] w-full min-h-[100px] bg-blue-600 rounded-lg shadow-xl p-4' style={{zIndex: 120}}>
        <div className='w-full text-white border-b-2 font-bold border-white'>{title}</div>
        <div className='mt-5'>{children}</div>
      </div>
    </div>
  )
}

export default Modal