import React from 'react'
import { CustomConfigs } from '../../../configs/CustomConfigs';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';

const SubmitInfoMenu = () => {
    const submitInfoMenuList = [
        {
            title: 'یادداشت‌ها',
            icon: NoteAltIcon,
            iconColor: 'yellow'
        },
        {
            title: 'پیامک بانکی',
            icon: TextsmsIcon,
            iconColor: 'blue'
        },
        {
            title: 'ثبت هزینه',
            icon: ArrowCircleDownTwoToneIcon,
            iconColor: 'red'
        },
        {
            title: 'ثبت درآمد',
            icon: ArrowCircleUpTwoToneIcon,
            iconColor: 'green'
        }
    ]
    return (
        <div className='absolute bottom-14 right-4 rounded-2xl text-white cursor-pointer p-2 z-50' style={{ ...CustomConfigs.themeColors.secondary }}>
            {submitInfoMenuList.map((item, index) => <div key={index} className='flex gap-2 items-center p-3'>
                <item.icon style={{ fontSize: '20px', color: item.iconColor }} />
                <p className='text-sm'>{item.title}</p>
            </div>)}
        </div>
    )
}

export default SubmitInfoMenu