// @ts-ignore
import React, {Component} from 'react'
import Select from 'react-select'
import RoverSelect from "./RoverSelect";
import {renderToString} from "react-dom/server";

const rover = renderToString(RoverSelect())
let cameras:{}[] = []
if (rover.includes('curiosity')) {
    cameras = [
        {value: 'FHAZ', label: 'Front Hazard Avoidance Camera'},
        {value: 'RHAZ', label: 'Rear Hazard Avoidance Camera'},
        {value: 'MAST', label: 'Mast Camera'},
        {value: 'CHEMCAM', label: 'Chemistry and Camera Complex'},
        {value: 'MAHLI', label: 'Mars Hand Lens Imager'},
        {value: 'MARDI', label: 'Mars Descent Imager'},
        {value: 'NAVCAM', label: 'Navigation Camera'}
    ]
}
else {
    console.log(rover)
    cameras = [
        {value: 'FHAZ', label: 'Front Hazard Avoidance Camera'},
        {value: 'RHAZ', label: 'Rear Hazard Avoidance Camera'},
        {value: 'NAVCAM', label: 'Navigation Camera'},
        {value: 'PANCAM', label: 'Panoramic Camera'},
        {value: 'MINITES', label: 'Miniature Thermal Emission Spectrometer (Mini-TES)'}
    ]
}

const CameraSelect = () => (
    <Select options={cameras}/>
)

export default CameraSelect