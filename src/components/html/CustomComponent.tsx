import React from 'react'
import Greets from '../Greets'

function CustomComponent(props: React.ComponentProps<typeof Greets>) {
    return (
        <div>
            {props.isLoggedIn && props.name}
            The message count is {props.messageCount}
        </div>
    )
}

export default CustomComponent
