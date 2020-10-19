import React from 'react'
import PropTypes from "prop-types"
//Material UI
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
function DialogWindow(props) {
  const {dialogOpen, onDialogClose, selectedNumbers, onPlayGame} = props
  return (
    <Dialog open={dialogOpen} onClose={onDialogClose}>
        <DialogContent>
          <DialogTitle>Are you sure, you want to play lotto?</DialogTitle>
          <DialogContentText>
            Numbers you have selected:{" "}
            {selectedNumbers.sort(function(a, b){return a - b}).map((number, index) => (
              <span className="bold" key={index}>
                {number}
                {index !== selectedNumbers.length - 1 ? ", " : "."}
              </span>
            ))}
            <br />
            <br />
            After agreement, 5$ will be withdrawn from the tied bank account.
            <br />
            <br />
            Payouts:
            <br />
            1 hit = 2.5$
            <br />
            2 hits = 10$
            <br />
            3 hits = 50$
            <br />
            4 hits = 100$
            <br />
            5 hits = 1000$
            <br />6 hits = 100000$
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onDialogClose}>No, thanks</Button>
          <Button onClick={() => onPlayGame(selectedNumbers)} variant="contained" color="primary">
            Agree, continue
          </Button>
        </DialogActions>
      </Dialog>
  )
}

DialogWindow.propTypes = {
  selectedNumbers: PropTypes.array.isRequired,
  dialogOpen: PropTypes.bool.isRequired,
  onDialogClose: PropTypes.func.isRequired,
  onPlayGame: PropTypes.func.isRequired
}


export default DialogWindow
