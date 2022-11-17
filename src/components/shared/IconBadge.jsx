import React from 'react'
import { CustomConfigs } from '../../configs/CustomConfigs'

const IconBadge = ({ children }) => {
    return (
        <span className='rounded-full p-2' style={{ ...CustomConfigs.themeColors.veryLight }}>
            {children}
        </span>
    )
}

export default IconBadge