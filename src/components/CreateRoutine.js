import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useSelector, useDispatch } from 'react-redux';
import { setRoutineName, setRoutineType, setFrequency, setDays, setRoutineDetails} from '.././store/reducers/createRoutine'


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

export default function CreateRoutine() {
    const stateRoutine = useSelector((state) => state.routine)
    const dispatch = useDispatch();  
    const CHARACTER_LIMIT = 2000;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [icon, setIcon] = React.useState(false)

    const [days, setDays] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [routine, setRoutine] = React.useState('');
    const [frequency, setFrequency] = React.useState('');

    const handleDays = (event) => {
        //dispatch(setDays(event.target.value))
        setDays(event.target.value);
    };
    const handleDescription = (event) => {
        setDescription(event.target.value);
    };
    const handleSave = () => {
        const routineDetails = {
            routine_name: routine,
            days: days,
            frequency: frequency,
        }
        dispatch(setRoutineDetails(routineDetails))
        handleClose();
        setIcon(true)
    };
    const handleRoutine = (e) => {
        //dispatch(setRoutineName(e.target.value));
        setRoutine(e.target.value);
    }
    const handleFrequency = (e) => {
        //dispatch(setFrequency(e.target.value))
        setFrequency(e.target.value)
    }

    return (
        <div>
            {/* <Button >Open modal</Button> */}
            {icon && <Fab color="primary" aria-label="add" className="add-timer" >
                <AddIcon/>
            </Fab>}
            
            <Fab color="primary" aria-label="add" className="add-icon" >
                <AddIcon onClick={handleOpen} />
            </Fab>
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
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Enter the family time you want to make better
                    </Typography>
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <TextField id="outlined-basic" label="Routine" variant="outlined" onChange={handleRoutine} />
                    </FormControl>

                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel id="demo-simple-select-label">Days</InputLabel>
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


                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                            components={['MobileTimePicker', 'MobileTimePicker', 'MobileTimePicker']}
                        >
                            <div className='timepickercontainer'>

                                <DemoItem>
                                    <TimePicker views={['hours']} />
                                </DemoItem>
                                <DemoItem >
                                    <TimePicker views={['minutes', 'seconds']} format="mm:ss" />
                                </DemoItem>
                            </div>

                        </DemoContainer>
                    </LocalizationProvider>

                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <TextField
                            className='description-field'
                            label="Description"
                            inputProps={{
                                maxlength: CHARACTER_LIMIT
                            }}
                            value={description}
                            helperText={`${description.length}/${CHARACTER_LIMIT}`}
                            onChange={handleDescription}
                            margin="normal"
                            variant="outlined"
                        />
                    </FormControl>

                    <FormControl className='form-buttons' sx={{ mt: 2 }}>
                        <Button variant="outlined" className="savebutton">Cancel</Button>
                        <Button variant="outlined" className="savebutton" sx={{ ml: 2 }} onClick={handleSave}>Save</Button>
                    </FormControl>
                </Box>
            </Modal>
        </div>
    );
}