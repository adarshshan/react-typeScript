import React from 'react'
type Greetings = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
}

function Greets(props: Greetings) {
    const { messageCount = 0 } = props;
    return (
        <div>
            {props.isLoggedIn ? (
                <>
                    <h1>{props.name}</h1>
                    <h3>{props.messageCount}</h3>
                </>

            ) : 'welcome guest...'}
        </div>
    )
}

export default Greets
