import React from 'react'
import { CustomConfigs } from '../../configs/CustomConfigs'

const AddButton = () => {
  return (
    <button className='fixed bottom-4 right-4 rounded-full text-white px-4 py-1' style={{ ...CustomConfigs.themeColors.secondary }}>
      + افزودن
    </button>
  )
}

export default AddButton