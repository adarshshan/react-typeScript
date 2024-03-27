type Name = {//this type is reusable.
    first: string;
    last: string;
}

export type User = {
    name: Name
}


export type PersonListProps = {
    names: Name[]
}