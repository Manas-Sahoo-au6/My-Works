import React from 'react'
import Loading from './Loading'

export default function Joke({joke}) {
    return (
        <div className='container text-center bg-light text-dark mt-4' style={{minHeight:"200px",height:"auto",paddingTop:"5%",fontSize:"26px"}}>
            {joke==="" ? <Loading/> : <h4>{joke}</h4>}
        </div>
    )
}
