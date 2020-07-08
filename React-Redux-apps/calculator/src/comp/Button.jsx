import React from 'react'

export default function Button({ className, data}) {
    return <button className={className} id={data} onClick={handleClick}>{data}</button>
}
function handleClick(e) {
    let val = document.querySelector(".cal_input")
    if(e.target.id ==='AC'){
        return val.value = ''
    }else if (e.target.id === '+/-'){
        alert("this function is not working")
    }else{
        return val.value = val.value+e.target.id
    }
}