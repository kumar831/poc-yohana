import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

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

    useEffect(() => {
        if (actionsData.length) {
            actionsData.map((actions) => {
                if (actions.id == routineActions.id) {
                    setActions(actions);
                }
            })
        }
    })
   
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
                        </div>
                    )
                })
            }

        </div>

    )
}