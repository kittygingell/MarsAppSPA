import React, { useState } from 'react';

export default function Button() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const storage = window.localStorage
    const countVariableName = 'count'
    const current = storage.getItem(countVariableName)
    if (current == null) {
        storage.setItem(countVariableName, '0')
    }

    return (
        <div>
            <p>You clicked {count === 0 ? Number(storage.getItem(countVariableName)) || 0 : count} times</p>
            <button onClick={() => {
                const currentCount = Number(storage.getItem(countVariableName))
                const newCount = currentCount + 1
                storage.setItem(countVariableName, String(newCount))
                setCount(newCount)
            }}>
                Click me
            </button>
        </div>
    );
}