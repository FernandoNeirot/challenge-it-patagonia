/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useSelector } from 'react-redux'
import { Unauthorized } from '../../pages/Unauthorized/presentation'

interface IPrivateRoute {
  children: React.ReactNode
}

const PrivateRoute = ({children}:IPrivateRoute) => {
  const user = useSelector((state:any) => state.user)
  return <>
    {
      user.id ? children : <Unauthorized />
    }
  </>
}

export default PrivateRoute