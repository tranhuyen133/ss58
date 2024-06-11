import axios from 'axios'
import React, { useEffect } from 'react'

export default function ListInforStudent() {
    // hiện ra all trong console.log
    useEffect(() => {
        axios.get("http://localhost:8080/student")
        .then((data)=>console.log(data.data)
        )
    }, [])
    

    
  return (
    <div>
        
    </div>
  )
}