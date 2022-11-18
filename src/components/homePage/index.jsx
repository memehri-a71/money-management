import React from 'react';
import { useState } from 'react';
import AddButton from '../shared/AddButton';
import CreditCard from './CreditCard';
import Header from './Header';
import SubmitInfoMenu from './menus/SubmitInfoMenu';
import Transactions from './Transactions';

const HomePage = () => {
  const [showSubmitInfoMenu, setShowSubmitInfoMenu] = useState(false);
  return (
    <div className=''>
      <div className='flex flex-col gap-24'>
        <Header />
        <Transactions />
      </div>
      <CreditCard />
      <AddButton text='+ افزودن' setShowMenu={setShowSubmitInfoMenu} showMenu={showSubmitInfoMenu} />
      {showSubmitInfoMenu && <>
        <SubmitInfoMenu showSubmitInfoMenu={showSubmitInfoMenu} setShowSubmitInfoMenu={setShowSubmitInfoMenu} />
        <div className='fixed inset-0 bg-black opacity-30 z-20'></div>
      </>}
    </div>
  )
}

export default HomePage