import React from 'react'
import { IVideoProps, Video } from './Video';

interface IVideoListProps {
    list: {
        url: string,
        date: string
    }[]
    }



export const VideoList = (props: IVideoListProps) => {
    const { list } = props;
    return list.map((item: IVideoProps) => <Video url={item.url} date={item.date} />);
}
