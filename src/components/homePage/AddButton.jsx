import React, { useState } from 'react'
import { CustomConfigs } from '../../configs/CustomConfigs'
import SubmitInfoMenu from './menus/SubmitInfoMenu';

const AddButton = () => {
  const [showSubmitInfoMenu, setShowSubmitInfoMenu] = useState(false);
  return (
    <>
      <button
        className='fixed bottom-4 right-4 rounded-full text-white px-4 py-1 z-30'
        style={{ ...CustomConfigs.themeColors.secondary }}
        onClick={() => setShowSubmitInfoMenu(!showSubmitInfoMenu)}
      >
        + افزودن
      </button>
      {showSubmitInfoMenu && <>
        <SubmitInfoMenu showSubmitInfoMenu={showSubmitInfoMenu} setShowSubmitInfoMenu={setShowSubmitInfoMenu} />
        <div className='fixed inset-0 bg-black opacity-30 z-20'></div>
      </>}
    </>
  )
}

export default AddButton