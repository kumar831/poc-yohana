
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as React from 'react';
import DisplayRoutine from './DisplayRoutine';
import { setShowActionPopup, setActions } from '.././store/reducers/createRoutine';
import axios from 'axios';

const localizer = momentLocalizer(moment);

const now = new Date();

export default function BigCalendar() {
    const allRoutines = useSelector((state) => state.routine.allRoutines)
    const [getAllRoutines, setGetAllRoutines] = React.useState([])
    const [actionPopup, setActionPopup] = React.useState(false)
    const [displayRoutine, setDisplayRoutine] = React.useState('')
    const [routines, setRoutines] = React.useState('');

    const ROUTINE_URL = "https://xmto-nusu-iyz1.n7c.xano.io/api:eeVB7TYf/routine";
    const dispatch = useDispatch();

    useEffect(() => {
        getRoutines();
    },[])

    useEffect(() => {
        if (allRoutines && allRoutines.length) {
            handleRoutineItems(allRoutines)
            setRoutines(allRoutines);
        }
    }, [allRoutines])

    useEffect(() => {
        if(allRoutines.length == 0) {
            setGetAllRoutines([]);
        }   
    },[allRoutines])

    const getRoutines = () => {
        axios.get(ROUTINE_URL).then(response => {
            if (response.status == '200') {
                handleRoutineItems(response.data);
                setRoutines(response.data);
            }
        })
    }

    const handleRoutineItems = (routineItems) => {
        let routines = [];
        routineItems.map((item) => {
            const startTime = item.start_time.split(':');
            const endTime = item.end_time.split(':');
            const obj = {
                id: item.id,
                title: item.title,
                start: moment({ hours: startTime[0] }).toDate(),
                end: moment({ hours: endTime[0] }).toDate(),
            }
            routines.push(obj)
        })
        setGetAllRoutines(routines);
    }

    const openActionPopup = (event) => {
        dispatch(setShowActionPopup(true))
        setActionPopup(true);
        routines.map((item) => {
            if (event.id == item.id) {
                setDisplayRoutine(item);
            }
        })
        dispatch(setActions(routines));
    }
    return (
        <div>
            <Calendar
                events={getAllRoutines}
                localizer={localizer}
                components={
                    {
                        eventWrapper: ({ event, children }) => (
                            <div
                                onContextMenu={
                                    e => {
                                        openActionPopup(event)
                                        e.preventDefault();
                                    }
                                }
                            >
                                {children}
                            </div>
                        )
                    }
                }
            />
            {
                actionPopup && <DisplayRoutine routine={displayRoutine} />
            }
        </div>

    )
}
