import React from 'react'
import { User } from './Person.types'


function Person(props: User) {
    return (
        <div>
            {props.name.first}
            {props.name.last}
        </div>
    )
}

export default Person
