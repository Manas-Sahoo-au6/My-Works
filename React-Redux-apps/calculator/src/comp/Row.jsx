import React from 'react'
import Button from './Button'

export default function Row({row1=null,row2=null,row3=null,row4=null,className='col-3 bg-secondary button text-light', ans}) {
    return (
        <div className="col-12 row m-0 p-0 bg-light">
            <Button className='col-3 bg-secondary button text-light' data={row1}/>
            <Button className='col-3 bg-secondary button text-light' data={row2}/>
            <Button className='col-3 bg-secondary button text-light' data={row3}/>
            <Button className='col-3 bg-warning button text-light' data={row4}/>
        </div>
    )
}
