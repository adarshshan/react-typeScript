import React from 'react'

type OscarProps = {
    children: React.ReactNode;
}

function Oscar(props: OscarProps) {
    return (
        <div>
            <h3>{props.children}</h3>
        </div>
    )
}

export default Oscar
