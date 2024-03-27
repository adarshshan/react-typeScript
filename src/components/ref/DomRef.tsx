import React, { useEffect, useRef } from 'react'

function DomRef() {
    const inputRef = useRef<HTMLInputElement>(null!);//! is instead of the optional chining at current.focus()

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}

export default DomRef
