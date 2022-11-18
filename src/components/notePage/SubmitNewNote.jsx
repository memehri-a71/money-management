import React from 'react'
import HeaderLayout from '../shared/HeaderLayout';
import CreateIcon from '@mui/icons-material/Create';
import { CustomConfigs } from '../../configs/CustomConfigs';
import BackgroundLayout from '../shared/BackgroundLayout';

const SubmitNewNote = () => {
    return (
        <BackgroundLayout title='ثبت یادداشت' path='notes'>
            <div className='flex gap-3 bg-white items-center rounded-xl shadow-sm p-4 my-2 mx-4'>
                <CreateIcon style={{ color: 'gray' }} />
                <input type="text" className='w-full outline-none text-sm' placeholder='عنوان یادداشت را وارد کنید(اختیاری)' />
                <p className='text-xs text-gray-400'>0/35</p>
            </div>
            <textarea className='fixed left-4 right-4 outline-none text-sm rounded-xl h-40 p-4' placeholder='متن یادداشت را بنویسید ...' />
            <button className='fixed bottom-4 right-4 left-4 py-2 bg-gray-300 rounded-lg'>تایید</button>
        </BackgroundLayout >
    )
}

export default SubmitNewNote