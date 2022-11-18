import React from 'react';
import HeaderLayout from '../shared/HeaderLayout';
import IconBadge from '../shared/IconBadge';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SelectBox from '../shared/submitTransactionLayout/SelectBox';

const MessagePage = () => {
    return (
        <div style={{backgroundColor:'#ededed', height:'100vh'}}>
            <HeaderLayout title='پیامک‌های بانکی' />
            <div className='flex items-center gap-3 px-4 py-2'>
                <IconBadge><CalendarMonthOutlinedIcon /></IconBadge>
                <SelectBox title='چه روزی ...؟' text='انتخاب تاریخ' icon={<CalendarMonthOutlinedIcon />} />
            </div>
            <div className='flex justify-center items-center text-sm text-gray-500'>
                <p>لطفا تاریخ موردنظر را انتخاب کنید</p>
            </div>
        </div>
    )
}

export default MessagePage