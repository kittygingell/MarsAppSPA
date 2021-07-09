import React from 'react'
import {getEnumByEnumValue, RoverCameraType, RoverName} from "../RoverModel";
import {PhotoTypeContext} from "./RoverPhotoPage";

interface AvailableCameraTypes {
    roverName: RoverName,
    cameraTypes: RoverCameraType[]
}

const availableCameraTypes: AvailableCameraTypes[] = [
    {
        roverName: RoverName.curiosity,
        cameraTypes: [
            RoverCameraType.FHAZ,
            RoverCameraType.RHAZ,
            RoverCameraType.CHEMCAM,
            RoverCameraType.MAHLI,
            RoverCameraType.MAST,
            RoverCameraType.MARDI,
            RoverCameraType.NAVCAM
        ]
    },
    {
        roverName: RoverName.opportunity,
        cameraTypes: [
            RoverCameraType.FHAZ,
            RoverCameraType.RHAZ,
            RoverCameraType.NAVCAM,
            RoverCameraType.PANCAM,
            RoverCameraType.MINITES
        ]
    },
    {
        roverName: RoverName.spirit,
        cameraTypes: [
            RoverCameraType.FHAZ,
            RoverCameraType.RHAZ,
            RoverCameraType.NAVCAM,
            RoverCameraType.PANCAM,
            RoverCameraType.MINITES
        ]
    },
]

function roverName2CameraTypes(roverName:RoverName) {
    const cameraTypes = availableCameraTypes.filter(elem => {
        return elem.roverName === roverName
    })
    return cameraTypes[0].cameraTypes
}

const Selections = () => {
    return (
        <PhotoTypeContext.Consumer>
            {value => {

                const currentRoverName = value.roverName
                const availableCameraTypes = roverName2CameraTypes(currentRoverName)
                const options = availableCameraTypes.map((cameraType) =>{
                    return (<option key={cameraType}>{cameraType}</option>)
                })

                return (
                    <div style={{padding: "16px", margin: "16px",}}>
                        <form>
                            <div>
                                Rover type:&nbsp;
                                <select onChange={ (event) => {
                                    const roverDict: any = {
                                        'Curiosity': RoverName.curiosity,
                                        'Spirit': RoverName.spirit,
                                        'Opportunity': RoverName.opportunity
                                    }

                                    const roverName: RoverName = roverDict[event.target.value]
                                    value.updateRoverName(roverName)
                                }}>
                                    <option>Curiosity</option>
                                    <option>Spirit</option>
                                    <option>Opportunity</option>
                                </select>
                            </div>
                            <div>
                                Camera type:&nbsp;
                                <select onChange={ (event) => {
                                    const cameraType: RoverCameraType = getEnumByEnumValue(RoverCameraType, event.target.value)
                                    value.updateCameraType(cameraType)
                                }}>
                                    {options}
                                </select>
                            </div>
                        </form>
                    </div>
                )
            }}
        </PhotoTypeContext.Consumer>
    );
};

export default Selections;