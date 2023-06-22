import * as React from 'react';
import { ScheduleComponent, Week, WorkWeek, TimelineViews, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
// import scheduleData from './datasource';


const scheduleData = [{
    'Id': 1,
    'Subject': 'New Routine',
    "StartTime": '11:00:AM',
    "EndTime": '11:30:AM',
    IsAllDay: false
},
{
    Id: 2,
    Subject: "Paris",
    StartTime: new Date(2023, 1, 15, 10, 0),
    EndTime: new Date(2023, 1, 15, 12, 30)
}]

const CalendarClock = () => {
    // const onDataBinding = (e) => {
    //     scheduleData.push({
    //         Id: 1,
    //         Subject: 'ROutine',
    //         StartTime: new Date(start),
    //         EndTime: new Date(end),
    //         IsAllDay: false
    //     });
    // }
const handleCalendar = (e) => {
    console.log('HHH',e)
}

const eventSettings = { dataSource: scheduleData };
const workingDays = [1, 2, 3, 4, 5, 6, 7];
return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date()} eventSettings={eventSettings} workDays={workingDays}>
    <ViewsDirective>
        <ViewDirective option='Week' />
        <ViewDirective option='WorkWeek' />
        <ViewDirective option='TimelineWorkWeek' />
    </ViewsDirective>
    <Inject services={[Week, WorkWeek, TimelineViews]} onClick={handleCalendar}/>
</ScheduleComponent>);
}

export default CalendarClock