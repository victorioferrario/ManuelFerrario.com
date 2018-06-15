import * as React from "react";

import * as Loadable from 'react-loadable';

import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from "@material-ui/core/Fade";

import yellow from '@material-ui/core/colors/yellow';
import Typography from "@material-ui/core/Typography";


  export const MyLoadingComponent = ((isLoading:any, error:any) => {    
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
  
  export const AsyncAboutPage = Loadable({
    loader: () => import("../views/About"),
    loading: MyLoadingComponent
  });
  export const AsyncArticlesPage = Loadable({
    loader: () => import("../views/Articles"),
    loading: MyLoadingComponent
  });
  export const AsyncContactPage = Loadable({
    loader: () => import("../views/Contact"),
    loading: MyLoadingComponent
  });
  export const AsyncHomePage = Loadable({
    loader: () => import("../views/Home"),
    loading: MyLoadingComponent
  });
  export const AsyncResumePage = Loadable({
        loader: () => import("../views/Resume"),
    loading: MyLoadingComponent
  });
  export const AsyncMediaPage = Loadable({
    loader: () => import("../views/Media"),
    loading: MyLoadingComponent
  });