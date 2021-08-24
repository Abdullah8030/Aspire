import ReactPlayer from 'react-player';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';

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

export const About = (props) => {
  const classes = useStyles();

  return (
    <div id='about' style={{ marginBottom:"5px",borderRadius:"5px" }}>
      <div className='container'>
        <div className='row'>
          <Grid
            container
            justifyContent="space-between"
          >
              <Grid item xs={12} sm={12} md={6}>  
              

        <Card className={classes.root} variant="outlined" style={{ background:"#133d47",borderRadius:"8px" }}>
              <CardContent>
                      <div>
                        <ReactPlayer width="100%" style={{ borderRadius:"10px",overflow:"hidden" }} className='img-responsive' className="react-player" controls url='https://youtu.be/_4CtkxqJKy8' />
                      </div>
              </CardContent>
        </Card>
              </Grid>
          
          <Grid item xs={12} sm={12} md={6}>
                  <motion.div whileHover={{ scale:1.2 }} className='col-xs-12 col-md-12'>
                      <div className='about-text'>
                          <Grid>
                             
                                <h2>About Us</h2>
                                <p style={{ color:"#000" }}>{props.data ? props.data.paragraph : 'loading...'}</p>
                                <h3>Why Choose Us?</h3>
                              <div className='list-style'>
                                      <div className='col-lg-12 col-sm-12 col-xs-10'>
                                        <ul className="aboutUs">
                                              {props.data
                                                  ? props.data.Why.map((d, i) => (
                                                      <li style={{ color:"#000" }} key={`${d}-${i}`}>{d}</li>
                                                      )): 'loading'}
                                        </ul>
                                      </div>
                               </div>
                        </Grid>
                    </div> 
                  </motion.div>
            </Grid>    
          </Grid>
        </div>
      </div>
    </div>
  )
}
