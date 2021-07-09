import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import {RoverCameraType, RoverName} from "./RoverModel";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import RoverPhotoPage from "./roverPhotos/RoverPhotoPage";
import EpicPage from "./epic/EpicPage";

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
    return (
        <div className="App">
            <Router>
                <div>
                    <Link to="/">Home </Link>
                    <Link to="/epic">Epic</Link>
                </div>
                <Switch>
                    <Route path={'/'} component={RoverPhotoPage} exact/>
                    <Route path={'/epic'} component={EpicPage} exact/>
                </Switch>
            </Router>
        </div>
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
