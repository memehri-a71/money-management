import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CustomConfigs } from '../../configs/CustomConfigs';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddButton from '../shared/AddButton';
import CreateIcon from '@mui/icons-material/Create';
import BackgroundLayout from '../shared/BackgroundLayout';

const NotePage = () => {
    return (
        <BackgroundLayout title='یادداشت‌ها' >
            <div className='flex gap-2 bg-white rounded-xl shadow-sm p-4 my-2 mx-4'>
                <SearchOutlinedIcon style={{ ...CustomConfigs.themeColors.veryLight, borderRadius: '5px' }} />
                <input type="text" className='w-full outline-none text-sm' placeholder='جستجو در یادداشت‌ها ...' />
            </div>
            <div className='flex justify-center items-center text-sm text-gray-500'>
                <p>هیچ یادداشتی ثبت نشده است!</p>
            </div>
            <Link to='/notes/new-note'>
                <AddButton text='یادداشت جدید' icon={<CreateIcon />} />
            </Link>
        </BackgroundLayout>
    )
}

export default NotePage