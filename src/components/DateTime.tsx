import React from 'react'

interface IDateTimeProps {
    date: string
}

export const DateTime = (props: IDateTimeProps) => {
    return (
        <p className="date">{props.date}</p>
    )
}
