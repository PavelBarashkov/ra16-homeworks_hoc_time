import moment from 'moment';
import React from 'react';

export function DateTimePretty(Component: React.ElementType, propName: string, initialClock: string) {
    function updateDate() {
        const dateNow = moment().format('YYYY-MM-DD HH:mm:ss');
        const start = moment(initialClock);
        const end = moment(dateNow);
        const duration = moment.duration(end.diff(start));
        
        const days = duration.days();
        const hours = duration.hours();
        const minutes = duration.minutes();
        
        if(days >= 1) {
            return `${days} дней назад`
        }
        if (hours >= 1) {
            return `${hours} часов назад`;
        }
        return `${minutes} минут назад`;
    }

    return class extends React.Component {
        state = {};


       
        componentDidMount() {
            this.setState({ [propName]: updateDate()});
        }

        render() {
            return <Component {...this.props} {...this.state} />;
        }
    };
}
