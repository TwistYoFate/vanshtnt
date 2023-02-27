import React, { useLayoutEffect, useState } from 'react'

function useTypewriter(
    lines,
    typeSpeed
) {
    const [activeChar,setActiveChar] = useState(0);
    const [activeIndex,setActiveIndex] = useState(0);
    const [line,setLine] = useState('');

    // useLayoutEffect(()=>{
    //     const timer = setInterval(()=>{
    //     setLine(lines[activeIndex].substr(0,line.length)+'|')
    //     },typeSpeed)

    //     return ()=>{
    //         clearInterval(timer);
    //     }
    // },[])

    useLayoutEffect(()=>{
        if((line.length) === lines[activeIndex].length){
            setTimeout(()=>{
                setLine('');
                setActiveIndex((activeIndex+1)%lines.length);
            },1000)
        }
        else
        setTimeout(()=>{
            setLine(lines[activeIndex].substr(0,line.length+1))
            },typeSpeed)
    },[line])

    return {line}
}

export default useTypewriter