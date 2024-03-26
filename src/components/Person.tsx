import React from 'react'

type User = {
    name: {
        first: string;
        last: string;
    }
}

function Person(props: User) {
    return (
        <div>
            {props.name.first}
            {props.name.last}
        </div>
    )
}

export default Person
