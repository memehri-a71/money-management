import React from 'react'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
const SelectBox = ({ title, text, icon, type }) => {
    return (
        <div className='flex items-center justify-between text-sm bg-white rounded-lg border border-gray-100 shadow-sm w-full p-3'>
            {!type && <p className=''>{title}</p>}
            {type && <input type="text" placeholder={title} className='w-full outline-none'/>}
            <div className='flex gap-1 items-center'>
                <p>{text} </p>
                {icon}
            </div>
        </div>
    )
}

export default SelectBox