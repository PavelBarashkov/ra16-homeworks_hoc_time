import React from 'react'
import { DateTime } from './DateTime'
import { DateTimePretty } from './DateTimePretty'

export interface IVideoProps {
    url: string,
    date: string
}

export const Video = (props: IVideoProps) => {
    const Pretty = DateTimePretty(DateTime, 'date', props.date) 
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            {<Pretty/>}
        </div>
    )
}
