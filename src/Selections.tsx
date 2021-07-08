import React from 'react'

const Selections = () => {

    const [selected, setSelected] = React.useState("");
    const changeSelectOptionHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelected(event.target.value);
    };

    const curiosityCams = [
        "Choose a Camera",
        "Front Hazard Avoidance Camera",
        "Rear Hazard Avoidance Camera",
        "Mast Camera",
        "Chemistry and Camera Complex",
        "Mars Hand Lens Imager",
        "Mars Descent Imager",
        "Navigation Camera"
    ];
    const opportunityAndSpiritCams = [
        "Choose a Camera",
        "Front Hazard Avoidance Camera",
        "Rear Hazard Avoidance Camera",
        "Navigation Camera",
        "Panoramic Camera",
        "Miniature Thermal Emission Spectrometer"
    ];

    let type = null;
    let options = null;
    if (selected === "Curiosity") {
        type = curiosityCams;
    } else if (selected === "Opportunity") {
        type = opportunityAndSpiritCams;
    } else if (selected === "Spirit") {
        type = opportunityAndSpiritCams;
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
                    <select>
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