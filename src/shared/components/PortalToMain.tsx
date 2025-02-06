import React from 'react'
import { createPortal } from 'react-dom'

interface PortalToMainProps {
  children: React.ReactNode
}

const PortalToMain = ({children}:PortalToMainProps) => {
  const mainContainer =
    document.getElementById("root") || document.body;
  return createPortal(children, mainContainer)
}

export default PortalToMain