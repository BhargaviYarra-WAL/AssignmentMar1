import { useEffect,useState } from "react";
const LearnUseEffect=()=>{
    //this will run when there is component in html
    let [no,setNo]=useState(0);
    useEffect(()=>{
        alert("component loaded");
        //this will run when component is not there/hided
        let componentRemoved=()=>{
            alert("the component is removed")
        };
        return componentRemoved
    },[]);
    useEffect(()=>{
        console.log(`The valuse of no is changed and new value is  ${no}`);
    },[no])
    return <div>UseEffect Hook Example
        No value=<strong>{no}</strong>
        <input type="number" value={no} 
        onInput={(event)=>{setNo(event.target.value)}}/>
    </div>
}
export default LearnUseEffect;