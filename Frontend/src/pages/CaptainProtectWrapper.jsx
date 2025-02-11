import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    if (!token) {
        navigate('/captain-login')
    }


    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectWrapper