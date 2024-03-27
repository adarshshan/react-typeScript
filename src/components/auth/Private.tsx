import React, { FC } from 'react'
import Login from './Login'
import { ProfileProps } from './Profile';

type PrivateProps = {
    isLoggedIn: boolean;
    component: React.ComponentType<ProfileProps>;
}

function Private({ isLoggedIn, component: Component }: PrivateProps): JSX.Element | null {
    if (isLoggedIn) return <Component name='viswas' />
    else return <Login />
}

export default Private
