import React from 'react';
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

export default function Notification(props) {

const  {notify, setNotify} = props;
    return (
        <Snackbar
          autoHideDuration = {3000}
          anchorOrigin={{ vertical:'top', horizontal:'center' }}
          open = {notify.isOpen}
          onClose={() => setNotify({open: false})}
        >
            <Alert severity = { notify.type }>
                {notify.message}
            </Alert>
        </Snackbar>
    )
}
