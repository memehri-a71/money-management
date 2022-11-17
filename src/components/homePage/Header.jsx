import React from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import { CustomConfigs } from '../../configs/CustomConfigs';
const Header = () => {
    return (
        <div className='flex flex-col'>
            <div className='relative flex justify-between p-4' style={{ ...CustomConfigs.themeColors.primary }}>
                <MenuIcon style={{ color: 'white' }} />
                <div className='rounded-xl px-4 text-white' style={{ ...CustomConfigs.themeColors.light }}>تقویم</div>
                <PieChartOutlineOutlinedIcon style={{ color: 'white' }} />
            </div>
            <div className='h-28 rounded-b-[2rem]' style={{ ...CustomConfigs.themeColors.primary }}></div>
        </div>
    )
}

export default Header