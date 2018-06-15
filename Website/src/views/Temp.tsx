


import * as React from "react";

import { withStyles } from '@material-ui/core/styles';


import CircularProgress from '@material-ui/core/CircularProgress';

import purple from '@material-ui/core/colors/purple';

import Fade from "@material-ui/core/Fade";

import Typography from "@material-ui/core/Typography";

const styles = (theme:any) => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

export interface ILoadingComponent{
  classes:any
}
 class TempPage extends React.Component<ILoadingComponent, {}> {  
    public render() {
      const { classes } = this.props;
      return (
        <Fade in={true}>
          <React.Fragment>        
            <section className="app-page-loader">        
                <div className="loading-component">
                <CircularProgress className={classes.progress} style={{ color: purple[500] }} thickness={7} />
               <Typography
                  variant="title"
                  color="textSecondary"
                  className={classes.flex}
                >
                  <span style={{color:"#445660"}}>loading</span>
                </Typography>
                </div>        
            </section>        
          </React.Fragment>
        </Fade>         
      );
    }
  }

  export default withStyles(styles)(TempPage);
