import React, { useState } from 'react'
import { CustomConfigs } from '../../configs/CustomConfigs';

const AddButton = ({ text, icon, setShowMenu, showMenu }) => {
  return (
    <>
      <button
        className='fixed bottom-4 right-4 flex items-center gap-2 rounded-2xl text-white px-4 py-2 z-30'
        style={{ ...CustomConfigs.themeColors.secondary }}
        onClick={() => setShowMenu(!showMenu)}
      >
        {icon}
        {text}
      </button>

    </>
  )
}

export default AddButton