import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CreateAction from './CreateAction';
import { useSelector, useDispatch } from 'react-redux';
import { setShowActionPopup, setFormPopup, setAllRoutines } from '.././store/reducers/createRoutine';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import ActionForm from './ActionForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 600,
    bgcolor: 'background.paper',
    borderRadius: 35,
    boxShadow: 24,
};

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

export default function DisplayRoutine(props) {
    const routine_details = props.routine;
    const dispatch = useDispatch();
    const [actionForm, showActionForm] = React.useState(false);
    const handleClose = () => {
        dispatch(setShowActionPopup(false));
    }
    const routine = useSelector((state) => state.routine)
    const openRoutinePopup = () => {
        dispatch(setFormPopup(true));
        dispatch(setShowActionPopup(true));
        showActionForm(true);
    }
    const [open, setOpen] = React.useState(false);
    const ROUTINE_URL = 'https://xmto-nusu-iyz1.n7c.xano.io/api:eeVB7TYf/routine';

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleDeletePopup = () => {
        setOpen(false);
    };
    const handleDeleteRoutine = (data) => {
        if (data) {
            axios.delete(ROUTINE_URL + '/' + data.id, data).then(response => {
                setOpen(false);
                dispatch(setShowActionPopup(false));
                if (response.status == '200') {
                    axios.get(ROUTINE_URL).then(response => {
                        dispatch(setAllRoutines(response.data));
                    })
                }
            })
        }
    }

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
                        <div style={{ display: 'flex' }}>
                            <p className='popup-heading'>
                                {routine_details.title}
                            </p>
                            <img src={require('../edit.png')} alt='edit' className='editIcon' />
                            <DeleteIcon onClick={() => handleClickOpen()} style={{ width: '20px', height: '20px', marginTop: '10px' }} />

                            <Dialog
                                open={open}
                                onClose={handleDeletePopup}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Delete Action"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Are you sure you want to delete this action?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions className='dialogactionsection'>
                                    <Button onClick={handleDeletePopup} variant="contained" color="error">No</Button>
                                    <Button onClick={() => handleDeleteRoutine(routine_details)} variant="contained" color="primary" autoFocus>
                                        Yes
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>

                        <p className='popup-subheading'>
                            {routine_details.start_time}
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
                                    <img src={require('../add.png')} alt='add' onClick={openRoutinePopup} style={{ width: '20px', height: '20px' }} />
                                </div>
                            </Box>
                        </div>
                        <ActionForm routineActions={routine_details} />
                    </div>
                </Box>
            </Modal>
            {actionForm && (<CreateAction routine={routine_details} />)}

        </div>
    );
}