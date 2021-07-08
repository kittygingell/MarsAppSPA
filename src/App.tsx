import React, {useState, useEffect} from 'react';
import './App.css';
import ParagraphsWithImage from "./ParagraphsWithImage";
import Button from "./Button";
import ContextUsingButton from './ContextUsingButton'
import CounterValueViewer from "./CounterValueViewer";

export const CounterContext = React.createContext({
    count: 0,
    addCounts: (num: number) => {}
});

function App() {

    const [count, setCount] = useState(0);
    const storage = window.localStorage
    const countVariableName = 'count'
    const current = storage.getItem(countVariableName)
    if (current == null) {
        storage.setItem(countVariableName, '0')
    }

    useEffect(() => {
        setCount(Number(storage.getItem(countVariableName)))
    });

    return (
        <CounterContext.Provider value={{
            count: count,
            addCounts: (num: number) => {
                const currentCount = Number(storage.getItem(countVariableName))
                const newCount = currentCount + num
                storage.setItem(countVariableName, String(newCount))
                setCount(newCount)
            }
        }}>
            <div className="App">
                <ParagraphsWithImage heading={'NASA stuff'} paragraph1={'Paragraph for NASA stuff'} paragraph2={'Another paragraph'} image={"https://media0.giphy.com/media/3h4EVXAvarDaaRaeYX/source.gif"}/>
                <ContextUsingButton/>
                <CounterValueViewer/>
            </div>
        </CounterContext.Provider>
  );
}



export default App;
