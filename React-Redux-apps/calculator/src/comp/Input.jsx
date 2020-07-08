import React from 'react'

export default function Input({value}) {
    return (
        <div className="col-12 m-0 p-0" style={{backgroundColor: 'lightgray',height: '60px'}}>
            <input type='text' name='number' className='col-12 cal_input' style={{height:'100%'}} dir="rtl"/>
        </div>
    )
}
