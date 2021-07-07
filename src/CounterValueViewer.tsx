import React from 'react';
import {CounterContext} from './App';

export default function CounterValueViewer() {
    return (
        <>
            {CounterValue()}
            {Message()}
        </>
    )
}

function CounterValue() {
    return (
        <CounterContext.Consumer>
            {value => {
                return (
                    <p>Counter: {value.count}</p>
                )
            }}
        </CounterContext.Consumer>

    )
}

function Message() {
    return (
        <p>Yeahhhhh click awayyyy</p>
    )
}