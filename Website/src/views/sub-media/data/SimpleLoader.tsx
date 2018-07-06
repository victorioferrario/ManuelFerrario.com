

import * as React from "react";


import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from "@material-ui/core/Fade";

import yellow from '@material-ui/core/colors/yellow';
import Typography from "@material-ui/core/Typography";


export const SimpleLoadingComponent = ((isLoading:any, error:any) => {    
    if (isLoading) {
      return (
        <Fade in={true}>
          <React.Fragment>        
            <section className="app-page-loader">        
                <div className="loading-component">
                  <CircularProgress  style={{ color: yellow[500] }} thickness={7} />
                  <Typography
                    variant="title"
                    color="textSecondary"
                    style={{color:"#26C9FF!important",}}>
                    <span style={{color:"#445660"}}>loading</span>
                  </Typography>
                </div>        
            </section>        
          </React.Fragment>         
        </Fade>);
    }   
    else if (error) {
      return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
      return null;
    }
  });