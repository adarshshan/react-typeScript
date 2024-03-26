import React from 'react'

type StatusProps = {
    status: 'loading' | 'success' | 'error';
}

function Status(props: StatusProps) {
    let message;
    if (props.status === 'loading') message = 'loading....';
    else if (props.status === 'success') message = 'Data Fetched successfully....!';
    else if (props.status === 'error') message = 'Error Fetching '
    return (
        <>
            <h2>{message}</h2>
        </>
    )
}

export default Status
