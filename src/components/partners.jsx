import ReactPlayer from 'react-player';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const Partners = (props) => {
  const classes = useStyles();

  return (
    <div id='partners'>
      <div className='container'>
        <div className='row'>
          <Grid
            container
            justifyContent="center"
          >
          <Grid item xs={8} sm={8} md={7}>  
           

                  <Card className={classes.root} variant="outlined" style={{ background:"#fff",borderRadius:"12px" }}>
                        <CardContent>
                            <h2 style={{ textAlign:"center",color:"#000",margin:"0" }}>Our Partners</h2>
                            <h2 className="line" style={{ margin:"2 auto" }}></h2>
                            <span></span>  
                                <div>
                                      <Grid
                                          container
                                          direction="row"
                                          justifyContent="space-evenly"
                                          alignItems="center"
                                      >
                                            <div>
                                              <img src="./office/OutSystems-logo.png" style={{ height:"64px",width:"auto" }} />  
                                            </div>

                                            <div>
                                              <img src="./office/cigniti.png" style={{ height:"64px",width:"auto" }} />  
                                            </div>
                                      </Grid>   
                                </div>
                        </CardContent>
                  </Card>
          </Grid>
          
          
          </Grid>
        </div>
      </div>
    </div>
  )
}
