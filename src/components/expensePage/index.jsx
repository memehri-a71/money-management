import React from 'react';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CreateIcon from '@mui/icons-material/Create';
import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import TransactionLayout from '../shared/submitTransactionLayout/TransactionLayout';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { CustomConfigs } from '../../configs/CustomConfigs';

const ExpensePage = () => {
    const incomeList = [
        {
            id: 1,
            type: '',
            title: 'انتخاب دسته‌بندی',
            icon: <KeyboardArrowLeftOutlinedIcon style={{ fontSize: '16px' }} />,
            badgeIcon: DataSaverOnOutlinedIcon,
            text: '',
            colorLevel: 'red'
        },
        {
            id: 2,
            type: 'input',
            title: 'توضیحات مربوط به تراکنش را بنویسید(اختیاری)',
            icon: '',
            badgeIcon: CreateIcon,
            text: '',
            colorLevel: 'yellow'
        },
        {
            id: 3,
            type: '',
            title: 'مبلغ تراکنش را وارد کنید',
            icon: '',
            badgeIcon: MonetizationOnOutlinedIcon,
            text: 'تومان',
            colorLevel: 'red'
        },
        {
            id: 4,
            type: '',
            title: '26 آبان',
            icon: <CalendarMonthOutlinedIcon style={{ fontSize: '16px' }} />,
            badgeIcon: CalendarMonthOutlinedIcon,
            text: 'انتخاب تاریخ',
            colorLevel: 'green'
        },
        {
            id: 5,
            type: '',
            title: 'انتخاب مدل هزینه‌کرد(رفتار مالی)',
            icon: '',
            badgeIcon: CategoryOutlinedIcon,
            text: '',
            colorLevel: 'red'
        }
    ];
    const behaviorInfo = [
        { text1: 'لازم', text2: 'حساب شده', style: 'rounded-tr-xl' },
        { text1: 'غیرلازم', text2: 'حساب شده', style: 'rounded-br-xl' },
        { text1: 'غیرلازم', text2: 'بی‌حساب', style: 'rounded-tl-xl' },
        { text1: 'لازم', text2: 'بی‌حساب', style: 'rounded-bl-xl' },
    ]
    return (
        <>
            <TransactionLayout list={incomeList} headerText='ثبت تراکنش هزینه' />
            <div className='flex flex-col items-center py-6'>
                <div className='grid grid-rows-2 grid-flow-col gap-1 cursor-pointer'>
                    {behaviorInfo.map((item, index) => <div key={index} className={`w-16 h-16 ${item.style}`} style={{ ...CustomConfigs.themeColors.veryLight }}>
                        <div className='flex flex-col text-xs items-center'>
                            <p className='py-2'>{item.text1}</p>
                            <p className='py-2 border-t border-white'>{item.text2}</p>
                        </div>
                    </div>)}
                </div>
            </div>
        </ >
    )
}

export default ExpensePage;
