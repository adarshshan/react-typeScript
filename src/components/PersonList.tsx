import React from 'react'
import { PersonListProps } from './Person.types'

function PersonList(props: PersonListProps) {
    return (
        <div>
            {
                props.names.map(item => {
                    return (
                        <h2>{item.first} {item.last}</h2>
                    )
                })
            }
        </div>
    )
}

export default PersonList
