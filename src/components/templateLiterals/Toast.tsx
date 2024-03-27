import React from 'react'

type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';
type ToastType = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center';
}

function Toast({ position }: ToastType) {
    return (
        <div>
            Toast Notification Position - {position}
        </div>
    )
}

export default Toast
