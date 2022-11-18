import React from 'react'
import TransactionLayout from '../shared/submitTransactionLayout/TransactionLayout'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CreateIcon from '@mui/icons-material/Create';
import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const IncomePage = () => {
    const incomeList = [
        {
            type: '',
            title: 'انتخاب دسته‌بندی',
            icon: <KeyboardArrowLeftOutlinedIcon style={{ fontSize: '16px' }} />,
            badgeIcon: DataSaverOnOutlinedIcon,
            text: '',
            colorLevel: 'red'
        },
        {
            type: 'input',
            title: 'توضیحات مربوط به تراکنش را بنویسید(اختیاری)',
            icon: '',
            badgeIcon: CreateIcon,
            text: '',
            colorLevel: 'yellow'
        },
        {
            type: '',
            title: 'مبلغ تراکنش را وارد کنید',
            icon: '',
            badgeIcon: MonetizationOnOutlinedIcon,
            text: 'تومان',
            colorLevel: 'red'
        },
        {
            type: '',
            title: '26 آبان',
            icon: <CalendarMonthOutlinedIcon style={{ fontSize: '16px' }} />,
            badgeIcon: CalendarMonthOutlinedIcon,
            text: 'انتخاب تاریخ',
            colorLevel: 'green'
        }
    ]
    return (
        <TransactionLayout list={incomeList} headerText='ثبت تراکنش درآمد' />
    )
}

export default IncomePage;