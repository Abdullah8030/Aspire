import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    root:{
      padding:"2px 0px 0px 24px",
      "& h2":{
        fontSize:"21px",
        textTransform:"none"
      },
      "& p":{
        fontSize:"21px",
      }
  }
}));




const useStylesAli = makeStyles({
  root: {
    //when no action
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#7D8483"
    },
    //name of filed
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#8ca945"
    },
    //when focesd on textFiled
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#8ca945"
    },
  }
});




export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const [type, setType] = React.useState('');

  function changeType(event) {
    setType(event.target.value);
  }

  const classes2 = useStylesAli();


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ paddingTop:"2%" }}>
      <Button variant="contained" style={{ background:"#8ca945",color:"#fff",fontSize:"18px",fontWeight:500,textTransform:"none" }} onClick={handleClickOpen}>
        Test your prodect now
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" size="large">
        <DialogTitle id="form-dialog-title" className={classes.root}>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ fontSize:"15px",fontWeight:500 }}>
            To <span style={{ fontWeight:"bold",color:"#8ca945" }}>subscribe</span> to this website, please enter your email address here.We will send updates
            occasionally.
            </DialogContentText>

            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="name"
                    variant="outlined"
                    fullWidth
                    className={classes2.root}
                    inputProps={{style: {fontSize: 16}}}
                    InputLabelProps={{style: {fontSize: 16}}}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                          inputProps={{style: {fontSize: 16}}}
                          InputLabelProps={{style: {fontSize: 16}}}
                          className={classes2.root}
                          margin="dense"
                          id="name"
                          label="Phone"
                          type="Phone"
                          variant="outlined"
                          fullWidth
                        /> 
                </Grid>

                <Grid item xs={6}>
                    <TextField
                    style={{ borderColor:"#8ca945" }}
                    inputProps={{style: {fontSize: 16,borderColor:"#8ca945"}}}
                    InputLabelProps={{style: {fontSize: 16}}}
                    className={classes2.root}
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

       
              <Grid item xs={6}>
                      <TextField
                      color="#8ca945"
                      className={classes2.root}
                      inputProps={{style: {fontSize: 16}}}
                      InputLabelProps={{style: {fontSize: 16}}}
                      margin="dense"
                      id="name"
                      label="Company"
                      variant="outlined"
                      type="name "
                      fullWidth
                    />
              </Grid>


              <Grid item xs={12}>
                      <FormControl variant="outlined" className={classes2.root} style={{ margin:"0 auto", marginTop:10, width:"100%" }}>
                                <Select
                                native
                                value={type}
                                defaultValue=""
                                onChange={changeType}
                                label="Service"
                                style={{ fontSize:"14.5px" }}
                                inputProps={{
                                    name: 'service',
                                    id: 'outlined-age-native-simple',
                                }}
                                >
                                <option value="default">-Select the service-</option>
                                <option value="Test Advisory & Consulting Services">Test Advisory & Consulting Services</option>
                                <option value="Functional Testing">Functional Testing</option>
                                <option value="Non-Functional testing">Non-Functional testing</option>
                                <option value="User Acceptance Testing (UAT)">User Acceptance Testing (UAT)</option>
                                </Select>
                            </FormControl>
              </Grid>

              <Grid item xs={12}>

              <TextField
                      multiline
                      rows={6}
                      rowsMax={8}
                      color="#8ca945"
                      className={classes2.root}
                      inputProps={{style: {fontSize: 16}}}
                      InputLabelProps={{style: {fontSize: 16}}}
                      margin="dense"
                      id="name"
                      label="How Can Aspire Technologies Help?"
                      variant="outlined"
                      type="name "
                      fullWidth
              />

              </Grid>

    </Grid>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ fontWeight:"bold",fontSize:"13px",textTransform:"none" }}>
            Cancel
          </Button>
          <Button onClick={handleClose} style={{ fontWeight:"bold",color:"#8ca945",fontSize:"13px",textTransform:"none" }}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
