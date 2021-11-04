import React from "react";
import './Faq.css';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Faq = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="faq">
        <h1> FAQ's </h1> 
      <Button sx={{border: 2}} variant="contained" onClick={handleClickOpen}>
        What is Boit Club ?
        <KeyboardArrowDownIcon/>

      </Button>
      <Dialog className="dialog" open={open} onClose={handleClose}>
        
        <DialogContent>
          <DialogContentText>
            addfasfasf
          </DialogContentText>
        </DialogContent>
      </Dialog>

      <Button variant="contained" onClick={handleClickOpen}>
        What is Boit Token ?
        <KeyboardArrowDownIcon/>

      </Button>
      <Dialog className="dialog" open={open} onClose={handleClose}>
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not. You can
            set my maximum width and whether to adapt or not. You can set my
            maximum width and whether to adapt or not. You can set my maximum
            width and whether to adapt or not. You can set my maximum width and
            whether to adapt or not. You can set my maximum width and whether to
            adapt or not. You can set my maximum width and whether to adapt or
            not.
          </DialogContentText>
        </DialogContent>
      </Dialog>

      <Button variant="contained" onClick={handleClickOpen}>
        Ownership Perks?
        <KeyboardArrowDownIcon/>

      </Button>
      <Dialog className="dialog" open={open} onClose={handleClose}>
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not. You can
            set my maximum width and whether to adapt or not. You can set my
            maximum width and whether to adapt or not. You can set my maximum
            width and whether to adapt or not. You can set my maximum width and
            whether to adapt or not. You can set my maximum width and whether to
            adapt or not. You can set my maximum width and whether to adapt or
            not.
          </DialogContentText>
        </DialogContent>
      </Dialog>

      <Button variant="contained" onClick={handleClickOpen}>
        When did this project come to life?
        <KeyboardArrowDownIcon/>

      </Button>
      <Dialog className="dialog" open={open} onClose={handleClose}>
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not. You can
            set my maximum width and whether to adapt or not. You can set my
            maximum width and whether to adapt or not. You can set my maximum
            width and whether to adapt or not. You can set my maximum width and
            whether to adapt or not. You can set my maximum width and whether to
            adapt or not. You can set my maximum width and whether to adapt or
            not.
          </DialogContentText>
        </DialogContent>
      </Dialog>


      <Button variant="contained" onClick={handleClickOpen}>
        When is the launch?
        <KeyboardArrowDownIcon/>

      </Button>
      <Dialog className="dialog" open={open} onClose={handleClose}>
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not. You can
            set my maximum width and whether to adapt or not. You can set my
            maximum width and whether to adapt or not. You can set my maximum
            width and whether to adapt or not. You can set my maximum width and
            whether to adapt or not. You can set my maximum width and whether to
            adapt or not. You can set my maximum width and whether to adapt or
            not.
          </DialogContentText>
        </DialogContent>
      </Dialog>

      <Button variant="contained" onClick={handleClickOpen}>
        What would be the value of token after listing?
        <KeyboardArrowDownIcon/>

      </Button>
      <Dialog className="dialog" open={open} onClose={handleClose}>
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not. You can
            set my maximum width and whether to adapt or not. You can set my
            maximum width and whether to adapt or not. You can set my maximum
            width and whether to adapt or not. You can set my maximum width and
            whether to adapt or not. You can set my maximum width and whether to
            adapt or not. You can set my maximum width and whether to adapt or
            not.
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Button variant="contained" onClick={handleClickOpen}>
        What is a pre-sale whitelist?
        <KeyboardArrowDownIcon/>

      </Button>
      <Dialog className="dialog" open={open} onClose={handleClose}>
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not. You can
            set my maximum width and whether to adapt or not. You can set my
            maximum width and whether to adapt or not. You can set my maximum
            width and whether to adapt or not. You can set my maximum width and
            whether to adapt or not. You can set my maximum width and whether to
            adapt or not. You can set my maximum width and whether to adapt or
            not.
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Button variant="contained" onClick={handleClickOpen}>
        How to setup a phanton wallet?
        <KeyboardArrowDownIcon/>

      </Button>
      <Dialog className="dialog" open={open} onClose={handleClose}>
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not. You can
            set my maximum width and whether to adapt or not. You can set my
            maximum width and whether to adapt or not. You can set my maximum
            width and whether to adapt or not. You can set my maximum width and
            whether to adapt or not. You can set my maximum width and whether to
            adapt or not. You can set my maximum width and whether to adapt or
            not.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Faq;
