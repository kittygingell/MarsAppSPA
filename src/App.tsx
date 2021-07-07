import React from 'react';
import './App.css';
import ParagraphsWithImage from "./ParagraphsWithImage";
import Button from "./Button";

function App() {
    const psWithImageProps = {
        heading: 'NASA stuff',
        paragraph1: 'Paragraph for NASA stuff',
        paragraph2: 'Another paragraph',
        image: "https://media0.giphy.com/media/3h4EVXAvarDaaRaeYX/source.gif"
    }

    return (
        <div className="App">
            <header className="App-header">
                {ParagraphsWithImage(psWithImageProps)}
                <Button />
            </header>
        </div>
  );
}

export default App;
