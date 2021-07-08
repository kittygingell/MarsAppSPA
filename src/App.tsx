import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import ParagraphsWithImage from "./ParagraphsWithImage";
import {RoverPhotoData} from "./RoverModel";
import RoverPhotos from "./RoverPhotos";
import GenericButton from "./GenericButton";
import Selections from "./Selections";

export const CounterContext = React.createContext({
    count: 0,
    addCounts: (num: number) => {}
});

function App() {
    const [imgSrcs, setImgSrcs] = useState(Array<string>())

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
            <Selections/>
            <div className="App">
                <ParagraphsWithImage heading={'NASA stuff'} paragraph1={'Paragraph for NASA stuff'} paragraph2={'Another paragraph'} image={"https://media0.giphy.com/media/3h4EVXAvarDaaRaeYX/source.gif"}/>
                <GenericButton title={'Submit'} onClick={async () => {
                    const response = await getRoverPhotoData('curiosity', 'MAST')
                    let photos: RoverPhotoData[] = response.data.photos
                    photos = photos.slice(0, 5)
                    const imgSources = photos.map(photoData => {
                        return photoData.img_src
                    })
                    setImgSrcs(prevState => imgSources)
                }}/>
                <div>
                    <RoverPhotos img_srcs={imgSrcs}/>
                </div>
            </div>
        </CounterContext.Provider>
  );
}

async function getRoverPhotoData(roverName: string, cameraType: string) {
    const APIPort = 8000
    const sol = 1000
    const url = `http://localhost:${APIPort}/rovers/${roverName}/photos/${cameraType}?sol=${sol}`
    const response = await axios.get(url)
    return response
}

export default App;
