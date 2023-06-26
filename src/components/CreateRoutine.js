import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Divider from '@mui/material/Divider';
import { useDispatch } from 'react-redux';
import { setAllRoutines } from '.././store/reducers/createRoutine';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 600,
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
};

export default function CreateRoutinePost() {
    const dispatch = useDispatch();
    const CHARACTER_LIMIT = 2000;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [days, setDays] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [routineTitle, setRoutineTitle] = React.useState('');
    const [frequency, setFrequency] = React.useState('');
    const [mode, setMode] = React.useState('');
    const [startHourly, setStartHourly] = React.useState('');
    const [startMinutes, setStartMinutes] = React.useState('');
    const [endHourly, setEndHourly] = React.useState('');
    const [endMinutes, setEndMinutes] = React.useState('');
    const [index, setIndex] = React.useState(0);

    const ROUTINE_URL = "https://xmto-nusu-iyz1.n7c.xano.io/api:eeVB7TYf/routine";

    const handleDays = (event) => {
        setDays(event.target.value);
    };
    const handleDescription = (event) => {
        setDescription(event.target.value);
    };
    const handleSave = () => {
        const routineObj = {
            "title": routineTitle,
            "family_id": index,
            "start_time": startHourly + ':' + startMinutes + ':' + mode,
            "end_time": endHourly + ':' + endMinutes + ':' + mode,
            "days": days,
            "start_date": "",
            "end_date": "",
            "frequency": frequency,
            "color": "",
            "actions": []
        }
        axios.post(ROUTINE_URL, routineObj).then(response => {
            if (response.status == '200') {
                getAllRoutines();
            }
        });
        setIndex(index + 1)
        handleClose();
    };
    const handleRoutineTitle = (e) => {
        setRoutineTitle(e.target.value);
    }
    const handleFrequency = (e) => {
        setFrequency(e.target.value)
    }
    const getAllRoutines = () => {
        axios.get(ROUTINE_URL).then(response => {
            if (response.status == '200') {
                dispatch(setAllRoutines(response.data));
            }
        })
    }
    const handleClockMode = (event) => {
        setMode(event)
    }
    const handleStartHours = (e) => {
        setStartHourly(e.target.value)
    }
    const handleStartMinutes = (e) => {
        setStartMinutes(e.target.value)
    }
    const handleEndHours = (e) => {
        setEndHourly(e.target.value)
    }
    const handleEndMinutes = (e) => {
        setEndMinutes(e.target.value)
    }

    return (
        <div>
            <div className='addIconDiv'>
                <Fab color="primary" aria-label="add" className="add-icon" >
                    <AddIcon onClick={handleOpen} />
                </Fab>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography className="title" id="modal-modal-title" variant="h6" component="h2">
                        Create Routine
                    </Typography>
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <TextField id="outlined-basic" label="Routine Name" variant="outlined" className="label-size" onChange={handleRoutineTitle} />
                    </FormControl>

                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel id="demo-simple-select-label" sx={{ fontSize: 14 }}>Days</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={days}
                            label="Type"
                            onChange={handleDays}
                        >
                            <MenuItem value='Weekdays'>Weekdays</MenuItem>
                            <MenuItem value='Weekends'>Weekends</MenuItem>
                            <MenuItem value='Custom'>Custom</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel id="demo-simple-select-label">Frequency</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={frequency}
                            label="Type"
                            onChange={handleFrequency}
                        >
                            <MenuItem value='Onetime'>One time</MenuItem>
                            <MenuItem value='Repeat'>Repeat</MenuItem>
                            <MenuItem value='Custom'>Custom</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <FormLabel sx={{ fontSize: 14 }}>Start Time</FormLabel>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <TextField style={{ width: '200px' }} id="outlined-basic" variant="outlined" onChange={handleStartHours} />
                            <strong style={{ fontSize: '40px' }}>:</strong>
                            <TextField style={{ width: '200px' }} id="outlined-basic" variant="outlined" onChange={handleStartMinutes} />
                            <div>
                                <div className='amcontent' onClick={() => handleClockMode('AM')}>AM</div>
                                <div className='amcontent1' onClick={() => handleClockMode('PM')}>PM</div>
                            </div>
                        </div>
                    </FormControl>

                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <FormLabel sx={{ fontSize: 14 }}>End Time</FormLabel>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <TextField style={{ width: '200px' }} id="outlined-basic" variant="outlined" onChange={handleEndHours} />
                            <strong style={{ fontSize: '40px' }}>:</strong>
                            <TextField style={{ width: '200px' }} id="outlined-basic" variant="outlined" onChange={handleEndMinutes} />
                            <div>
                                <div className='amcontent' onClick={() => handleClockMode('AM')}>AM</div>
                                <div className='amcontent1' onClick={() => handleClockMode('PM')}>PM</div>
                            </div>
                        </div>
                    </FormControl>

                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <TextField
                            className='description-field label-size'
                            label="Description"
                            inputProps={{
                                maxLength: CHARACTER_LIMIT
                            }}
                            value={description}
                            helperText={`${description.length}/${CHARACTER_LIMIT}`}
                            onChange={handleDescription}
                            margin="normal"
                            variant="outlined"
                        />
                    </FormControl>
                    <Divider light style={{ marginTop: '2rem' }} />
                    <FormControl className='form-buttons' sx={{ mt: 2 }}>
                        <Button variant="outlined" className="savebutton" onClick={handleClose}>Cancel</Button>
                        <Button variant="outlined" className="savebutton" sx={{ ml: 2 }} onClick={handleSave}>Save</Button>
                    </FormControl>
                </Box>
            </Modal>
        </div>
    );
}