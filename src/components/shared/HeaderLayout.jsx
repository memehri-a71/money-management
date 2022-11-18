
import React from 'react';
import { useNavigate } from 'react-router';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { CustomConfigs } from '../../configs/CustomConfigs';

const HeaderLayout = ({ title, path = '' }) => {
    const navigate = useNavigate();
    return (
        <div className='flex p-2' style={{ ...CustomConfigs.themeColors.primary }}>
            <EastOutlinedIcon style={{ color: 'white', cursor: 'pointer' }} onClick={() => navigate('/' + path)} />
            <p className='mx-auto text-white'>{title}</p>
        </div>
    )
}

export default HeaderLayout