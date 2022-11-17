import React from 'react'
import AddButton from './AddButton'
import CreditCard from './CreditCard'
import Header from './Header'
import Transactions from './Transactions'

const HomePage = () => {
  return (
    <div className=''>
      <div className='flex flex-col gap-24'>
      <Header />
      <Transactions />
      </div>
      <CreditCard />
      <AddButton />
    </div>
  )
}

export default HomePage