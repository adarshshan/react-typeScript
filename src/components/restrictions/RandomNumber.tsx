import React from 'react'

type RandomNumberTypes = {
    value: number;
}
type PositiveNumber = RandomNumberTypes & {
    isPositive: boolean;
    isNegative?: never;
    isZero?: never;
}
type NegativeNumber = RandomNumberTypes & {
    isNegative: boolean;
    isPositive?: never;
    isZero?: never;
}
type Zero = RandomNumberTypes & {
    isZero: boolean;
    isNegative?: never;
    isPositive?: never;
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

function RandomNumber({ value, isNegative, isPositive, isZero }: RandomNumberProps) {
    return (
        <div>
            {value}{isPositive && 'positive'}{isNegative && 'negative'}
            {isZero && 'zero'}
        </div>
    )
}

export default RandomNumber
