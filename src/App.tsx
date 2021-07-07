import React from 'react';
import './App.css';
import ParagraphsWithImage from "./ParagraphsWithImage";
import Button from "./Button";

function App() {
    const psWithImageProps = {
        heading: 'NASA stuff',
        paragraph1: 'Paragraph for NASA stuff',
        paragraph2: 'Another paragraph'
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
