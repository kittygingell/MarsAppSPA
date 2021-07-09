import axios from 'axios'

interface DateInfo {
    date: string
}

interface Coordinates {
    lat: number,
    lon: number
}

interface Position {
    x: number,
    y: number,
    z: number
}

interface Quaternions {
    q0: number,
    q1: number,
    q2: number,
    q3: number
}

interface ImageData {
    identifier: string,
    caption: string,
    image: string,
    version: string,
    centroid_coordinates: Coordinates,
    dscovr_j2000_position: Position,
    lunar_j2000_position: Position,
    sun_j2000_position: Position,
    attitude_quaternions: Quaternions,
    date: string,
    coords: {
        centroid_coordinates: Coordinates,
        dscovr_j2000_position: Position,
        lunar_j2000_position: Position,
        sun_j2000_position: Position,
        attitude_quaternions: Quaternions
    }
}

interface DateDescription {
    year: number,
    month: number,
    day: number
}

const apiKey = 'aRWUnNqpH11eSQvCm114SVuAnhMFivU6KLWFgF7k'

async function getAvailableDates(): Promise<DateDescription[]> {
    const url = `https://api.nasa.gov/EPIC/api/natural/all?api_key=${apiKey}`
    const response = await axios.get(url)
    const dateData: DateInfo[] = response.data
    const dateStrings = dateData.map(data => data.date)
    const dates: DateDescription[] = dateStrings.map(dateStr => {
        return dateStringHyphen2Date(dateStr)
    })
    return dates
}

function dateStringHyphen2Date(dateStr: string) {
    const dateComponents = dateStr.split('-')
    const date: DateDescription = {
        year: Number(dateComponents[0]),
        month: Number(dateComponents[1]),
        day: Number(dateComponents[2])
    }
    return date
}

function appropriateStrings(date: DateDescription) {
    let month = String(date.month)
    if (month.length === 1) {
        month = '0' + month
    }
    let day = String(date.day)
    if (day.length === 1) {
        day = '0' + day
    }
    return [`${date.year}`, month, day]
}

function date2DateStringHyphen(date: DateDescription) {
    const [year, month, day] = appropriateStrings(date)
    return `${year}-${month}-${day}`
}

function date2DateStringSlash(date: DateDescription) {
    const [year, month, day] = appropriateStrings(date)
    return `${year}/${month}/${day}`
}

async function getImagesDataForDate(date: DateDescription): Promise<ImageData[]> {
    const imageType = 'natural'
    const dateStr = date2DateStringHyphen(date)
    const url = `https://api.nasa.gov/EPIC/api/${imageType}/date/${dateStr}?api_key=${apiKey}`
    const response = await axios.get(url)
    const imagesData: ImageData[] = response.data
    return imagesData
}

async function getImagesDateForMostRecentDate(): Promise<ImageData[]> {
    const dates = await getAvailableDates()
    const imagesData = await getImagesDataForDate(dates[0])
    return imagesData
}

function getEpicImageURL(date: DateDescription, imageName: string) {
    const dateStr = date2DateStringSlash(date)
    console.log(dateStr)
    return `https://api.nasa.gov/EPIC/archive/natural/${dateStr}/png/${imageName}.png?api_key=${apiKey}`
}

export {getImagesDataForDate, getEpicImageURL}
export type { DateDescription }
