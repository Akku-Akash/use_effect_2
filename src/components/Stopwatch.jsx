import { useEffect,useState } from "react"

export const Stopwatch=(props)=>{
    const[timer, setTimer] = useState(props.value)
      useEffect(()=>{
      const id =  setInterval(()=>{
             setTimer((prev)=>{
                 if(prev>=props.end){
                     clearInterval(id)
                     return props.end
                 }
                 return prev+1
             })
    
         },1000)
         return()=>{
             clearInterval(id)
             console.log("unmounting timer")
         }
    },[])
    return <h1>timer:{timer}</h1>
}