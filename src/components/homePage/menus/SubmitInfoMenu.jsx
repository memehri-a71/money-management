import React, { useRef } from 'react';
import { CustomConfigs } from '../../../configs/CustomConfigs';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import CloseWithOnClickScreen from '../../shared/logic/CloseWithOnClickScreen';
import { useNavigate } from 'react-router';

const SubmitInfoMenu = ({ showSubmitInfoMenu, setShowSubmitInfoMenu }) => {
    const submitInfoMenuRef = useRef();
    const navigate = useNavigate();
    const submitInfoMenuList = [
        {
            title: 'یادداشت‌ها',
            path: '/notes',
            icon: NoteAltIcon,
            iconColor: 'yellow'
        },
        {
            title: 'پیامک بانکی',
            path: '/messages',
            icon: TextsmsIcon,
            iconColor: 'blue'
        },
        {
            title: 'ثبت هزینه',
            path: '/expense',
            icon: ArrowCircleDownTwoToneIcon,
            iconColor: 'red'
        },
        {
            title: 'ثبت درآمد',
            path: '/income',
            icon: ArrowCircleUpTwoToneIcon,
            iconColor: 'green'
        }
    ];
    return (
        <>
            <div
                className='absolute bottom-14 right-4 rounded-2xl text-white cursor-pointer p-2 z-50'
                style={{ ...CustomConfigs.themeColors.secondary }}
                ref={submitInfoMenuRef}>
                {submitInfoMenuList.map((item, index) => <div key={index} className='flex gap-2 items-center p-3' onClick={() => navigate(item.path)}>
                    <item.icon style={{ fontSize: '20px', color: item.iconColor }} />
                    <p className='text-sm'>{item.title}</p>
                </div>)}
            </div>
            <CloseWithOnClickScreen showModal={showSubmitInfoMenu} setShowModal={setShowSubmitInfoMenu} modalRef={submitInfoMenuRef} />
        </>
    )
}

export default SubmitInfoMenu;