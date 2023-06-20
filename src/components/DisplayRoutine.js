import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FormRoutine from './FormRoutine';
import { useSelector, useDispatch } from 'react-redux';
import { setShowActionPopup, setFormPopup } from '.././store/reducers/createRoutine';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import RestaurantIcon from '@mui/icons-material/Restaurant';


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
};
const boxstyle = {
    width: '65%',
    bgcolor: '#FFFFFF',
    borderRadius: '6px',
    height: '40px',
    padding: '4px',
    display: 'flex',
    justifyContent: 'space-between',
}
const boxstyle1 = {
    width: '65%',
    bgcolor: '#FFFFFF',
    borderRadius: '6px',
    height: '40px',
    padding: '4px',
    display: 'flex',
    justifyContent: 'end',
    cursor: 'pointer'
}

export default function BasicModal() {
    const dispatch = useDispatch();
    const [actionForm, showActionForm] = React.useState(false);
    const handleClose = () => {
        dispatch(setShowActionPopup(false));
    }
    const openRoutinePopup = () => {
        dispatch(setFormPopup(true));
        dispatch(setShowActionPopup(true));
        showActionForm(true);
    }

    const routine = useSelector((state) => state.routine)

    return (
        <div>
            <Modal
                open={routine.showActionPopup}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='topcontainer'>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 12,
                                top: 12,
                                color: '#FFFFFF',
                                background: '#898989',
                                width: '25px',
                                height: '25px',
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <p className='popup-heading'>
                            Morning Routine
                        </p>
                        <p className='popup-subheading'>
                            07:15am (45m)
                        </p>
                        <div className='circle-div'>
                            <div className='white-circle'>S</div>
                            <div className='white-circle'>M</div>
                            <div className='white-circle'>T</div>
                            <div className='white-circle'>W</div>
                            <div className='white-circle'>T</div>
                            <div className='white-circle'>F</div>
                            <div className='white-circle'>S</div>
                        </div>
                    </div>
                    <div className='bottomcontainer'>
                        <div className='boxcontainer1'>
                            <Box sx={boxstyle1}>
                                <div className="boxsubcontent">
                                    <AddIcon onClick={openRoutinePopup} />
                                </div>
                            </Box>
                        </div>
                        <div className='boxcontainer'>
                            <Box sx={boxstyle}>
                                <div className='boxsubcontent'>
                                    <RestaurantIcon sx={{ marginRight: '10px' }} />
                                    <Typography id="modal-modal-description">
                                        Wake up
                                    </Typography>
                                </div>
                                <div className='boxsubcontent'>
                                    <Typography id="modal-modal-description" sx={{ marginRight: '10px' }}>
                                        7:15
                                    </Typography>
                                    <NavigateNextIcon />
                                </div>
                            </Box>
                        </div>
                    </div>


                </Box>
            </Modal>
            {actionForm && (<FormRoutine />)}

        </div>
    );
}