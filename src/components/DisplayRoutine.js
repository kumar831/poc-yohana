import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CreateAction from './CreateAction';
import { useSelector, useDispatch } from 'react-redux';
import { setShowActionPopup, setFormPopup } from '.././store/reducers/createRoutine';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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

export default function BasicModal(props) {
    const routineData = props.routine;
    const dispatch = useDispatch();
    const [actionForm, showActionForm] = React.useState(false);
    const handleClose = () => {
        dispatch(setShowActionPopup(false));
    }
    const routine = useSelector((state) => state.routine)
    const actionsData = useSelector((state) => state.routine.allActions)
    const openRoutinePopup = () => {
        dispatch(setFormPopup(true));
        dispatch(setShowActionPopup(true));
        showActionForm(true);
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleDeletePopup = () => {
        setOpen(false);
    };

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
                                {routineData.routine_name}
                            </p>
                            <img src={require('../edit.png')} alt='edit' className='editIcon' />
                        </div>

                        <p className='popup-subheading'>
                            {routineData.start_time}
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
                                    <img src={require('../add.png')} alt='add' onClick={openRoutinePopup} />
                                </div>
                            </Box>
                        </div>
                        {
                            actionsData.length > 0 && actionsData.map((item) => {
                                return (
                                    <div className='boxcontainer'>
                                        <Box sx={boxstyle}>
                                            <div className='boxsubcontent'>
                                                <img src={require('../Ellipse.png')} alt='ellipse' className='ellipseIcon' />
                                                <img src={require('../Directions.png')} alt='direction' className='directionIcon' />
                                                <Typography id="modal-modal-description">
                                                    {item.action_title}
                                                </Typography>
                                            </div>
                                            <div className='boxsubcontent'>
                                                <Typography id="modal-modal-description" sx={{ marginRight: '10px' }}>
                                                    {item.time}
                                                </Typography>
                                                <img src={require('../Expand.png')} alt='expand' />
                                                <DeleteIcon onClick={handleClickOpen} />

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
                                                        <Button onClick={handleDeletePopup} variant="contained" color="primary" autoFocus>
                                                            Yes
                                                        </Button>
                                                    </DialogActions>
                                                </Dialog>
                                            </div>
                                        </Box>
                                    </div>
                                )
                            })
                        }
                    </div>


                </Box>
            </Modal>
            {actionForm && (<CreateAction routine={routineData} />)}

        </div>
    );
}