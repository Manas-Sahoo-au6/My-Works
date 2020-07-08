import React from 'react'

export default function Button({onClick}) {
    return (
            <button className='btn-primary mt-5' onClick={onClick} style={{border:"none",height:"40px",width:"80px"}}>Realod</button>
    )
}
