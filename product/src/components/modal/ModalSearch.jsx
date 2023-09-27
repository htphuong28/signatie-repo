import React from 'react'
import { useState } from 'react'

const ModalSearch = (props) => {
  const {modalState, children} = props
  
  if (!modalState) {
    return;
  }

  return (
    <div>
      {children}
    </div>
  )
}

export default ModalSearch