import React, { useRef } from 'react';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { CustomConfigs } from '../../../configs/CustomConfigs';
import CloseWithOnClickScreen from '../../shared/logic/CloseWithOnClickScreen';

const SidebarMenu = ({ showSidebarMenu, setShowSidebarMenu }) => {
    const sidebarMenuRef = useRef();
    const sidebarMenuList = [
        {
            title: 'آمار و نمودار',
            icon: PieChartOutlineOutlinedIcon,
            iconColor: '#c90498'
        },
        {
            title: 'دسته‌بندی‌ها',
            icon: WidgetsOutlinedIcon,
            iconColor: '#f22202'
        },
        {
            title: 'یادداشت‌های من',
            icon: BorderColorOutlinedIcon,
            iconColor: '#f29a02'
        },
        {
            title: 'پیامک بانکی',
            icon: MessageOutlinedIcon,
            iconColor: '#009efa'
        },
        {
            title: 'حساب کاربری',
            icon: PersonOutlineOutlinedIcon,
            iconColor: '#9a02f2'
        },
        {
            title: 'امتیازدهی',
            icon: StarOutlineOutlinedIcon,
            iconColor: '#faf200'
        },
        {
            title: 'درباره ما',
            icon: InfoOutlinedIcon,
            iconColor: '#6af202'
        }
    ];
    return (
        <>
            <div className='fixed top-0 right-0 bg-white w-2/3 h-full z-50' ref={sidebarMenuRef} >
                <div className='h-48 mb-4' style={{ ...CustomConfigs.themeColors.light }}>
                </div>
                {sidebarMenuList.map((item, index) => <div key={index} className='flex gap-2 cursor-pointer py-3 px-4'>
                    <item.icon style={{ color: item.iconColor }} />
                    <p>{item.title}</p>
                </div>)}
            </div>
            <CloseWithOnClickScreen showModal={showSidebarMenu} setShowModal={setShowSidebarMenu} modalRef={sidebarMenuRef} />
        </>
    )
}

export default SidebarMenu;