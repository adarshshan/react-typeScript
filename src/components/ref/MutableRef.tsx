import React, { useEffect, useRef, useState } from 'react'

function MutableRef() {
    const [timer, setTimer] = useState(0);
    const interValRef = useRef<undefined | number>(undefined)

    const StopTimer = () => {
        window.clearInterval(interValRef.current)
    }
    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
        return () => {
            StopTimer()
        }
    }, [])
    return (
        <div>
            HookTimer ={timer}-
            <button onClick={() => StopTimer()}>Stop Timer</button>
        </div>
    )
}

export default MutableRef
