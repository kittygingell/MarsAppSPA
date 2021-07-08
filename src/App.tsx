import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import ParagraphsWithImage from "./ParagraphsWithImage";
import {RoverCameraType, RoverName, RoverPhotoData, getEnumKeyByEnumValue} from "./RoverModel";
import RoverPhotos from "./RoverPhotos";
import GenericButton from "./GenericButton";
import Selections from "./Selections";

export const CounterContext = React.createContext({
    count: 0,
    addCounts: (num: number) => {}
});

export const PhotoTypeContext = React.createContext({
    roverName: RoverName.curiosity,
    cameraType: RoverCameraType.FHAZ,
    updateRoverName: (name: RoverName) => {},
    updateCameraType: (cameraType: RoverCameraType) => {}
})

function App() {
    const [imgSrcs, setImgSrcs] = useState(Array<string>())
    const [roverName, setRoverName] = useState(RoverName.curiosity)
    const [cameraType, setCameraType] = useState(RoverCameraType.FHAZ)
    const roverNameStorageName = 'roverName'
    const cameraTypeStorageName = 'cameraType'


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
        <PhotoTypeContext.Provider value={{
            roverName: roverName,
            cameraType: cameraType,
            updateRoverName: (name) => {
                storage.setItem(roverNameStorageName, name)
                setRoverName(name)
            },
            updateCameraType: (cameraType) => {
                storage.setItem(cameraTypeStorageName, cameraType)
                setCameraType(cameraType)
            }
        }}>
            <Selections/>
            <div className="App">
                <ParagraphsWithImage heading={'NASA stuff'} paragraph1={'Paragraph for NASA stuff'} paragraph2={'Another paragraph'} image={"https://media0.giphy.com/media/3h4EVXAvarDaaRaeYX/source.gif"}/>
                <PhotoTypeContext.Consumer>
                    {value => {
                        return (
                            <GenericButton title={'Submit'} onClick={async () => {
                                const response = await getRoverPhotoData(value.roverName, getEnumKeyByEnumValue(RoverCameraType, value.cameraType))
                                let photos: RoverPhotoData[] = response.data.photos
                                photos = photos.slice(0, 5)
                                const imgSources = photos.map(photoData => {
                                    return photoData.img_src
                                })
                                setImgSrcs(imgSources)
                            }}/>
                        )
                    }}
                </PhotoTypeContext.Consumer>

                <div>
                    <RoverPhotos img_srcs={imgSrcs}/>
                </div>
            </div>
        </PhotoTypeContext.Provider>
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
