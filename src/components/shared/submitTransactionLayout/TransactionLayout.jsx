import React, { createContext } from 'react';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IconBadge from '../IconBadge';
import SelectBox from './SelectBox';
import BackgroundLayout from '../BackgroundLayout';
import { useState } from 'react';
import ChooseCategory from '../ChooseCategory';
import { IncomeIcons } from '../../shared/IncomeIcons'

const TransactionLayout = ({ list, headerText }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [id, setId] = useState()
    const legend = [
        { title: 'اجباری', color: 'red' },
        { title: 'اختیاری', color: 'yellow' },
        { title: 'کامل شده', color: 'green' }
    ]
    return (
        <>
            <BackgroundLayout title={headerText}>
                {list.map((item, index) => <div key={index} className='flex items-center gap-3 px-4 py-2'>
                    <IconBadge><item.badgeIcon style={{ color: '#575656' }} /></IconBadge>
                    <SquareRoundedIcon className='absolute right-[62px]' style={{ color: item.colorLevel, fontSize: '14px' }} />
                    <SelectBox list={item} setShowMenu={setShowMenu} setId={setId} />
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
            </BackgroundLayout>
            {showMenu && id === 1 && <>
                <ChooseCategory list={IncomeIcons} showMenu={showMenu} setShowMenu={setShowMenu} />
                <div className='fixed inset-0 bg-black opacity-30'></div>
            </>}
        </>
    )
}

export default TransactionLayout;