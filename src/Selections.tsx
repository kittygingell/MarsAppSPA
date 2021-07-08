import React from 'react'
import {RoverCameraType, RoverName} from "./RoverModel";


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

    const [selectedRover, setSelected] = React.useState("");
    const changeSelectOptionHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelected(event.target.value);
    };
    const [selectedCamera, setSelectedCamera] = React.useState("");
    const changeSelectCamera = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedCamera(event.target.value);
    };

    let type = null;
    let options = null;
    if (selectedRover === "Curiosity") {
        type = roverName2CameraTypes(RoverName.curiosity);
    } else if (selectedRover === "Opportunity") {
        type = roverName2CameraTypes(RoverName.opportunity);
    } else if (selectedRover === "Spirit") {
        type = roverName2CameraTypes(RoverName.spirit);
    }

    if (type) {
        options = type.map((el) => <option key={el}>{el}</option>);
    }
    return (
        <div
            style={{
                padding: "16px",
                margin: "16px",
            }}
        >
            <form>
                <div>
                    {}
                    <select onChange={changeSelectOptionHandler}>
                        <option>Choose a Rover</option>
                        <option>Curiosity</option>
                        <option>Spirit</option>
                        <option>Opportunity</option>
                    </select>
                </div>
                <div>
                    <select onChange={changeSelectCamera}>
                        {
                            options
                        }
                    </select>

                </div>
            </form>
        </div>

    );
};

export default Selections;