import React, { useState } from 'react';
import FormDialog from "./FormDialog"
import CustomSlider from "./CustomSlider";
import Grid from '@material-ui/core/Grid';
// import Slide from "./Slideshow";
import { motion } from 'framer-motion';

export const Header = (props) => {

  const [lastYPos, setLastYPos] = React.useState(0);
  const [shouldShowActions, setShouldShowActions] = React.useState(true);

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;
      
      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);
  return (
        //------------------------------------------Not used  
        // <header id='header'>
        // {/* <div className='overlay'> */}
        //     {/* <div className='row'> */}
        //------------------------
        <div 
        style={{ paddingBottom:"50px" }}
        >
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                    >
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                              <motion.div className="intro-text" transition={{ opacity: { duration: 2 },translateY:{ duration:2  } }} animate={{ opacity: shouldShowActions ? 1 : 0,translateY:"0px" }} initial={{ opacity:0,translateY:"-150px"  }}>
                                <img className="imageHeader" src={"./img/AspireFinalLOGO/png/AspireLogofinal619.svg"} width="52%" height="auto"/>
                                <h1 style={{ fontSize:"4vw",color:"#1f3b43" }}>
                                  {props.data ? props.data.title : 'Loading'}
                                </h1>
                                <p style={{ fontSize:"1.1vw" }}>(an <a href="https://exeder.com/" target="_blank" rel="noopener noreferrer" ><span  style={{ color:"#44849c",fontWeight:'bold' }}>EXEDER</span></a> company)</p>
                                  <FormDialog /> 
                                  </motion.div>
                          </Grid>

                         <Grid item xs={6} sm={6} md={6} lg={6}>
                            {/* not Used */}
                            {/* <Slide /> */}

                            <CustomSlider />
                         </Grid>

                   </Grid>
          </div>
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



