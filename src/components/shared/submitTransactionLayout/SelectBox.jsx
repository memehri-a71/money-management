import React from 'react';

const SelectBox = ({ setShowMenu, setId, list }) => {
    return (
        <div className='flex items-center justify-between text-sm cursor-pointer bg-white rounded-lg border border-gray-100 shadow-sm w-full p-3'
            onClick={() => {
                setShowMenu(true);
                setId(list.id)
            }}>
            {!list.type && <p className=''>{list.title}</p>}
            {list.type && <input type="text" placeholder={list.title} className='w-full outline-none' />}
            <div className='flex gap-1 items-center'>
                <p>{list.text} </p>
                {list.icon}
            </div>
        </div>
    )
}

export default SelectBox