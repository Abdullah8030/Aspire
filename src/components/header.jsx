import FormDialog from "./FormDialog"
import CustomSlider from "./CustomSlider";
import Grid from '@material-ui/core/Grid';
// import Slide from "./Slideshow";

export const Header = (props) => {
  return (
        //------------------------------------------Not used  
        // <header id='header'>
        // {/* <div className='overlay'> */}
        //     {/* <div className='row'> */}
        //------------------------
                    <Grid
                      container
                    >
                        <Grid item xs={5}>
                              <div className="intro-text">
                                <h1 style={{ fontSize:"58px",color:"#000000" }}>
                                  {props.data ? props.data.title : 'Loading'}
                                  <h2></h2>
                                  <span></span>
                                </h1>
                                <p>(an <span style={{ color:"#44849c",fontWeight:'bold' }}>EXEDER</span> company)</p>
        
                                  <FormDialog /> 
                                  </div>
                          </Grid>

                         <Grid item xs={7}>
                            {/* not Used */}
                            {/* <Slide /> */}

                            <CustomSlider />
                         </Grid>

                   </Grid>
    //---------------------------------------------------------------------------------------------------not Used   
    //         {/* <img className="image" src="/img/portfolio/01-large.jpg" alt="presentation 1" /> */}
    //             {/* <h1>
    //               {props.data ? props.data.title : 'Loading'}
    //               <span></span>
    //             </h1>
    //             <p>{props.data ? props.data.paragraph : 'Loading'}</p>
    //               <FormDialog /> */}
    //               {/* <Slide /> */}
    //     {/* </div>
    //   </div> */}
    // // </header>
    //------------------------------------------------------
  )
}



