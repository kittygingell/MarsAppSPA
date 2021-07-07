import React from 'react';
import {CounterContext} from './App'

export default function CounterUsingButton() {
    return (
        <CounterContext.Consumer>
            {value => {
                return (
                    <button onClick={() => value.addCounts(1)}>
                        Click me
                    </button>
                )
            }}
        </CounterContext.Consumer>
    );
}