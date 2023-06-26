import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const boxstyle = {
    width: '65%',
    bgcolor: '#FFFFFF',
    borderRadius: '6px',
    height: '45px',
    padding: '4px',
    display: 'flex',
    justifyContent: 'space-between',
}

export default function ActionForm(props) {
    const routineActions = props.routineActions;
    const actionsData = useSelector((state) => state.routine.allActions)
    const [actions, setActions] = useState('');
    const [showDelPopup, setShowDelPopup] = useState(false);

    useEffect(() => {
        if (actionsData.length) {
            actionsData.map((actions) => {
                if (actions.id == routineActions.id) {
                    setActions(actions);
                }
            })
        }
    })

    const handleClickOpen = () => {
        setShowDelPopup(true)
    }

    const handleDeletePopup = () => {

    }

    const handleDeleteRoutine = () => {

    }

    return (
        <div>
            {
                actions.actions && actions.actions.length > 0 && actions.actions.map((action) => {
                    return (
                        <div className='boxcontainer'>
                            <Box sx={boxstyle}>
                                <div className='boxsubcontent'>
                                    <img src={require('../Ellipse.png')} alt='ellipse' className='ellipseIcon' />
                                    <img src={require('../Directions.png')} alt='direction' className='directionIcon' />
                                    <Typography id="modal-modal-description" className='action-title'>
                                        {action.title}
                                    </Typography>
                                </div>
                                <div className='boxsubcontent'>
                                    <Typography className="action-time" id="modal-modal-description" sx={{ marginRight: '10px' }}>
                                        {action.start_time}
                                    </Typography>
                                    <img src={require('../Expand.png')} alt='expand' style={{ width: '20px', height: '20px' }} />
                                </div>
                            </Box>
                            {/* <DeleteIcon onClick={() => handleClickOpen()} style={{ width: '20px', height: '20px', marginTop: '10px' }} />

                            <Dialog
                                open={showDelPopup}
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
                                    <Button onClick={() => handleDeleteRoutine(index)} variant="contained" color="primary" autoFocus>
                                        Yes
                                    </Button>
                                </DialogActions>
                            </Dialog> */}
                        </div>
                    )
                })
            }
        </div>
    )
}