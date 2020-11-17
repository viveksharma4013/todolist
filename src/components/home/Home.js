import React, { useState } from 'react'
import './Home.css'

export default function Home() {
    const [list, setlist] = useState([])
    const [text, settext] = useState()
    const [complete, setcomplete] = useState(false)
    return (
        <div>
            <input onChange={(e)=>{settext(e.target.value)}} value={text} placeholder="enter task"/>
            <button onClick={()=>{
                if(text){
                    let data=list
                    data.push({
                        text:text,
                        completed:false
                    })
                    setlist(data)
                    settext("")
                }
            }}>Add</button>
            <br></br>
            {
                list.map((item,index)=>(
                    <div onClick={()=>{
                        let data=list
                        data[index].completed=!data[index].completed
                        setcomplete(data[index].completed)
                        setlist(data)
                    }
                    } className="listitem" key={list.indexOf(item)}>
                        <p>{item?.text}<span>{item.completed?"(Completed)":""}</span></p>
                    </div>
                ))
            }
            <button onClick={()=>{
                setlist([])
            }}>CLEAR LIST</button>
        </div>
    )
}
