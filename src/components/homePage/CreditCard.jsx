import React from 'react'
import { CustomConfigs } from '../../configs/CustomConfigs';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';

const CreditCard = () => {
    return (
        <div className='absolute top-16 right-5 left-5 rounded-2xl text-white p-4' style={{ ...CustomConfigs.themeColors.secondary }}>
            <p>تراز ماه</p>
            <div className='flex gap-2'>
                <p>0</p>
                <p>تومان</p>
            </div>
            <div className='flex justify-between pt-6'>
                <div className='flex gap-2'>
                    <p>هزینه‌ها</p>
                    <span className='rounded-full bg-green-600 px-1.5'>
                        <NorthIcon style={{ fontSize: '14px' }} />
                    </span>
                </div>
                <div className='flex gap-2'>
                    <p>درآمدها</p>
                    <span className='rounded-full bg-red-600 px-1.5'>
                        <SouthIcon style={{ fontSize: '14px' }} />
                    </span>
                </div>
            </div>
            <div className='flex justify-between py-2'>
                <p>1000,000</p>
                <p>1000,000</p>
            </div>
        </div>
    )
}

export default CreditCard