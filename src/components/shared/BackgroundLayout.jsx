import React from 'react'
import HeaderLayout from './HeaderLayout'

const BackgroundLayout = ({ children, title, path }) => {
    return (
        <div style={{ backgroundColor: '#ededed', height: '100vh' }}>
            <HeaderLayout title={title} path={path} />
            {children}
        </div>
    )
}

export default BackgroundLayout