import React, {useEffect, useState} from 'react';
import EpicSpecifier from './EpicSpecifier'
import PhotoSlideshow from "./PhotoSlideShow";
import {getImagesDataForDate, getEpicImageURL, DateDescription} from './AccessEpic'

export const EpicSpecifierContext = React.createContext({
    date: new Date(),
    updateDate: (date: Date) => {},
    urls: Array<string>(),
    updateURLs: (urls: string[]) => {}
})

export default function EpicPage() {

    const [date, setDate] = useState(new Date());
    const [urls, setURLs] = useState(Array<string>())

    return (
        <EpicSpecifierContext.Provider value={{
            date: date,
            updateDate: async (date) => {
                date = date || new Date()
                setDate(date)
                const dateDescription: DateDescription = {
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    day: date.getDate()
                }
                console.log(dateDescription)
                const imagesData = await getImagesDataForDate(dateDescription)
                const imageURLs = imagesData.map(data => {
                    const imageName = data.image
                    console.log(imageName)
                    return getEpicImageURL(dateDescription, imageName)
                })

                setURLs(imageURLs)
                console.log(imageURLs[0])
            },
            urls: urls,
            updateURLs: (urls) => {
                setURLs(urls)
            }
        }}>
            <EpicSpecifier/>
            <PhotoSlideshow/>
        </EpicSpecifierContext.Provider>
    )
}
