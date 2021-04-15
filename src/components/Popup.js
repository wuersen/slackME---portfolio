import { React, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from "@material-ui/icons/Add";
import './Popup.css'

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [newChannelName, setNewChannelName] = useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setNewChannelName(e.target.value)
  }

  const handleCreateChannel = (e) => {
    handleClose();
    props.createChannel(newChannelName)

  }

  return (
    <div>
      <Button id="creat__new__channel" variant="outlined" color="purple" size = "large" onClick={handleClickOpen}>
        <AddIcon/>
        Create New Channel
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Channel</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the topic for your new channel:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="topic"
            name = "topic"
            type="topic"
            onChange = {handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreateChannel} color="primary">
            Create Channel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
