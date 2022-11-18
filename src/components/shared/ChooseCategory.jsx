import React, { useRef } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import { CustomConfigs } from '../../configs/CustomConfigs';
import CloseWithOnClickScreen from '../shared/logic/CloseWithOnClickScreen';

const ChooseCategory = ({ list, showMenu, setShowMenu }) => {
    const MenuRef = useRef();
    return (
        <>
            <div className='fixed bottom-0 bg-white rounded-t-xl w-full shadow-lg z-50' ref={MenuRef}>
                <div className='flex flex-col items-center py-4'>
                    <span className='rounded-full px-2 py-1' style={{ ...CustomConfigs.themeColors.veryLight }}>انتخاب دسته‌بندی</span>
                    <div className='grid grid-cols-4 grid-flow-row gap-4 py-8'>
                        {list.map((item, index) => <div key={index} className='text-center'>
                            <span className='rounded-full bg-gray-200 p-2' >
                                {item.icon}
                            </span>
                            <p className='text-xs py-3'>{item.title}</p>
                        </div>)}
                    </div>
                    <button type='button' className='flex gap-2 border-2 text-primary-dark border-primary-dark rounded-lg p-2'>
                        <CreateIcon />
                        <p>ویرایش دسته‌بندی‌ها</p>
                    </button>
                </div>
            </div>
            <CloseWithOnClickScreen showModal={showMenu} setShowModal={setShowMenu} modalRef={MenuRef} />
        </>
    )
}

export default ChooseCategory;