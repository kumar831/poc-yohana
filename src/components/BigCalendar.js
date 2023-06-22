
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux';
import * as React from 'react';
import DisplayRoutine from './DisplayRoutine';
import { setRoutineDetails, setShowActionPopup, setActions } from '.././store/reducers/createRoutine';
import axios from 'axios';

const localizer = momentLocalizer(moment);

const now = new Date();

export default function BigCalendar() {
    const allRoutines = useSelector((state) => state.routine)
    const [getAllRoutines, setGetAllRoutines] = React.useState([])
    const [actionPopup, setActionPopup] = React.useState(false)
    const [displayRoutine, setDisplayRoutine] = React.useState('')

    const GET_ROUTINES = 'https://x8ki-letl-twmt.n7.xano.io/api:kbXGTIcC/routine';
    const dispatch = useDispatch();

    React.useEffect(() => {
        getRoutines();
    })

    const getRoutines = () => {
        let arrayRoutines = [];
        if (allRoutines.routine.length) {
            allRoutines.routine.map((item, index) => {
                const obj = {
                    id: index,
                    title: item.routine_name,
                    start: moment({ hours: item.start }).toDate(),
                    end: moment({ hours: item.end }).toDate(),
                }
                arrayRoutines.push(obj)
            })
            setGetAllRoutines(arrayRoutines);
        }
    }

    const openActionPopup = (event) => {
        dispatch(setShowActionPopup(true))
        setActionPopup(true);
        allRoutines.routine.map((item, index) => {
            if (event.id == index) {
                setDisplayRoutine(item);
            }
        })
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
