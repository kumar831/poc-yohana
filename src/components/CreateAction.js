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
import { useSelector, useDispatch } from 'react-redux';
import { setFormPopup, setActions } from '../store/reducers/createRoutine';
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

export default function CreateAction(props) {
  const routineData = props.routine
  const routine = useSelector((state) => state.routine)
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setFormPopup(false));
  };
  const ROUTINE_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:Hku87tmd/routine';
  
  const [type, setType] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [clockMode, setClockMode] = React.useState('');
  const [hourly, setHourly] = React.useState('');
  const [minutes, setMinutes] = React.useState('');

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };
  const handleSave = () => {
    axios.post(ROUTINE_URL, {
      "time": hourly + ':' + minutes + ':' + clockMode,
      "routine": routineData.routine_name,
      "action_type": type,
      "action_title": title,
      "duration_in_sec": duration,
      "routine_days": routineData.days,
      "user_id": 0
    }).then((response) => {
      if (response.status == '200') {
        handleClose();
        axios.get(ROUTINE_URL).then(response => {
          dispatch(setActions(response.data));
        })
      }
    })
  };
  
  const handleTitle = (e) => {
    setTitle(e.target.value);
  }
  const handleClockMode = (event) => {
    setClockMode(event)
  }
  const handleHours = (e) => {
    setHourly(e.target.value)
  }
  const handleMinutes = (e) => {
    setMinutes(e.target.value)
  }
  return (
    <div>
      <Modal
        open={routine.showFormPopup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className="title" id="modal-modal-title" variant="h6" component="h2">
            Create Action
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please describe the actions you would like the family to Sync.
          </Typography>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <TextField id="outlined-basic" label="Title" variant="outlined" onChange={handleTitle} />
          </FormControl>

          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Type"
              onChange={handleTypeChange}
            >
              <MenuItem value='Alarm'>Alarm</MenuItem>
              <MenuItem value='Remainder'>Remainder</MenuItem>
              <MenuItem value='Sound'>Sound</MenuItem>
              <MenuItem value='Movie'>Movie</MenuItem>
              <MenuItem value='Timer'>Timer</MenuItem>
              <MenuItem value='Check-in'>Check-in</MenuItem>
              <MenuItem value='No Action'>No Action</MenuItem>
            </Select>
          </FormControl>



          <FormControl fullWidth sx={{ mt: 2 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <TextField id="outlined-basic" variant="outlined" onChange={handleHours} />
              <strong style={{ fontSize: '40px' }}>:</strong>
              <TextField id="outlined-basic" variant="outlined" onChange={handleMinutes} />
              <div>
                <div className='amcontent' onClick={() => handleClockMode('AM')}>AM</div>
                <div className='amcontent1' onClick={() => handleClockMode('PM')}>PM</div>
              </div>
            </div>
          </FormControl>

          <FormControl fullWidth sx={{ mt: 2 }}>
            <FormControlLabel control={<Checkbox />} label="No Target Time" />
          </FormControl>

          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="demo-simple-select-label">Duration</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={duration}
              label="Duration"
              onChange={handleDurationChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl className='form-buttons' sx={{ mt: 2 }}>
            <Button variant="outlined" className="savebutton" onClick={handleClose}>Discard</Button>
            <Button variant="outlined" className="savebutton" sx={{ ml: 2 }} onClick={handleSave}>Save</Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}