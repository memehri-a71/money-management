import React, { useRef, useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import SidebarMenu from './menus/SidebarMenu';
import { CustomConfigs } from '../../configs/CustomConfigs';

const Header = () => {
    const [showSidebarMenu, setShowSidebarMenu] = useState(false);
    return (
        <>
            <div className='flex flex-col'>
                <div className='relative flex justify-between p-4' style={{ ...CustomConfigs.themeColors.primary }}>
                    <MenuIcon style={{ color: 'white', cursor: 'pointer' }} onClick={() => setShowSidebarMenu(true)} />
                    <div className='rounded-xl px-4 text-white' style={{ ...CustomConfigs.themeColors.light }}>تقویم</div>
                    <PieChartOutlineOutlinedIcon style={{ color: 'white' }} />
                </div>
                <div className='h-28 rounded-b-[2rem]' style={{ ...CustomConfigs.themeColors.primary }}></div>
            </div>
            {showSidebarMenu && <>
                <SidebarMenu showSidebarMenu={showSidebarMenu} setShowSidebarMenu={setShowSidebarMenu} />
                <div className='fixed inset-0 bg-black opacity-30 z-20'></div>
            </>}
        </>
    )
}

export default Header;