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
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:600,
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [type, setType] = React.useState('');
  const [duration, setDuration] = React.useState('');

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  return (
    <div>
      {/* <Button >Open modal</Button> */}
      <Fab color="primary" aria-label="add">
        <AddIcon onClick={handleOpen}/>
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Action
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please describe the actions you would like the family to Sync.
          </Typography>
          <FormControl fullWidth sx={{ mt: 2 }}>
          <TextField id="outlined-basic" label="Title" variant="outlined" />
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
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

          <FormControl fullWidth sx={{ mt: 2 }}>
          <FormControlLabel control={<Checkbox />} label="No Target Time" />
          </FormControl>
          
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['MobileTimePicker', 'MobileTimePicker', 'MobileTimePicker']}
      >
        <DemoItem label={'"hours", "minutes" and "seconds"'}>
          <TimePicker views={['hours', 'minutes', 'seconds']} />
        </DemoItem>
        <DemoItem label={'"hours"'}>
          <TimePicker views={['hours']} />
        </DemoItem>
        <DemoItem label={'"minutes" and "seconds"'}>
          <TimePicker views={['minutes', 'seconds']} format="mm:ss" />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider> */}


          <FormControl className='form-buttons' sx={{ mt: 2 }}>
          <Button variant="outlined" className="savebutton">Save Draft</Button>
          <Button variant="outlined" className="savebutton" sx={{ ml: 2 }}>Next</Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}