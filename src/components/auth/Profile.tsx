import React from 'react'
export type ProfileProps = {
    name: string;
}

function Profile(props: ProfileProps) {
    return (
        <div>
            Private Profile components Name is {props.name}
        </div>
    )
}

export default Profile
