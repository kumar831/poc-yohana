import React from 'react'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '../event-utils'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import { useSelector, useDispatch } from 'react-redux';
import "../App.css";



export default function CalendarTime() {
    const allRoutines = useSelector((state) => state.routine)
    console.log('routines', allRoutines);
    const [weekendsVisible, setWeekendsVisible] = React.useState(false);
    const [currentEvents, setCurrentEvents] = React.useState([]);

    const handleWeekendsToggle = () => {
        setWeekendsVisible(true)
    }
    const data = [{
        id: 1,
        title: 'new Routine',
    }]
    const events =[
        { title: 'Meeting', start: new Date() }
      ]
                        
    const handleDateSelect = (selectInfo) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar

        calendarApi.unselect() // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            })
        }
    }

    const handleEventClick = (clickInfo) => {
        if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove()
        }
    }

    const handleEvents = (events) => {
       setCurrentEvents(events)
    }
    const renderEventContent = (eventInfo) => {
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </>
        )
    }
    return (
        <div className='demo-app'>
            <div className='demo-app-main'>
                <FullCalendar
                    plugins={[resourceTimelinePlugin, interactionPlugin]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
                    }}
                    initialView='resourceTimelineMonth'
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={weekendsVisible}
                    initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                    select={handleDateSelect}
                    eventContent={renderEventContent} // custom render function
                    eventClick={handleEventClick}
                    eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                    /* you can update a remote database when these fire:
                    eventAdd={function(){}}
                    eventChange={function(){}}
                    eventRemove={function(){}}
                    */
                    resources=
                      {data}
                    events=
                   {events}
                />
            </div>
        </div>
    )

}


