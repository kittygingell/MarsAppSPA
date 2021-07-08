export enum RoverName {
    curiosity = 'curiosity',
    opportunity = 'opportunity',
    spirit = 'spirit'
}

export enum RoverCameraType {
    FHAZ = 'Front Hazard Avoidance Camera',
    RHAZ = 'Rear Hazard Avoidance Camera',
    MAST = 'Mast Camera',
    CHEMCAM = 'Chemistry and Camera Complex',
    MAHLI = 'Mars Hand Lens Imager',
    MARDI = 'Mars Descent Imager',
    NAVCAM = 'Navigation Camera',
    PANCAM = 'Panoramic Camera',
    MINITES = 'Miniature Thermal Emission Spectrometer (Mini-TES)'
}

export function getEnumKeyByEnumValue(myEnum: any, enumValue: number | string): string {
    let keys = Object.keys(myEnum).filter((x) => myEnum[x] == enumValue);
    return keys.length > 0 ? keys[0] : '';
}

export interface RoverCameraData {
    id: number,
    name: string,
    rover_id: number,
    full_name: string
}

export interface RoverData {
    id: number,
    name: string,
    landing_date: string,
    launch_date: string,
    status: string
}

export interface RoverPhotoData {
    id: number,
    sol: number,
    camera: RoverCameraData,
    img_src: string,
    earth_data: string,
    rover: RoverData
}