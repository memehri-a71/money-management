import React from 'react';
import { useNavigate } from 'react-router';
import { CustomConfigs } from '../../../configs/CustomConfigs';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IconBadge from '../IconBadge';
import SelectBox from './SelectBox';

const TransactionLayout = ({ list, headerText }) => {
    const navigate = useNavigate();
    const legend = [
        { title: 'اجباری', color: 'red' },
        { title: 'اختیاری', color: 'yellow' },
        { title: 'کامل شده', color: 'green' }
    ]
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex p-2' style={{ ...CustomConfigs.themeColors.primary }}>
                <EastOutlinedIcon style={{ color: 'white', cursor: 'pointer' }} onClick={() => navigate('/')} />
                <p className='mx-auto text-white'>{headerText}</p>
            </div>
            {list.map((item, index) => <div key={index} className='flex items-center cursor-pointer gap-3 px-4'>
                <IconBadge><item.badgeIcon style={{ color: '#575656' }} /></IconBadge>
                <SquareRoundedIcon className='absolute right-[62px]' style={{ color: item.colorLevel, fontSize: '14px' }} />
                <SelectBox title={item.title} text={item.text} icon={item.icon} type={item.type} />
            </div>)}
            <div className='flex justify-center gap-2'>
                {legend.map((item, index) => <div key={index} className='flex gap-1 items-center'>
                    {item.color === 'green'
                        ? <CheckBoxIcon style={{ color: item.color, fontSize: '14px' }} />
                        : <SquareRoundedIcon style={{ color: item.color, fontSize: '14px' }} />}
                    <p className='text-xs'>{item.title}</p>
                </div>)}
            </div>
            <button className='fixed bottom-4 right-4 left-4 py-2 bg-gray-300 rounded-lg'>تایید</button>
        </div>
    )
}

export default TransactionLayout;