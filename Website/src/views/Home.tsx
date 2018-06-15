import * as React from "react";

import SimpleMediaCard from "../components/cards/Cards";
import SimpleMediaCard2 from "../components/cards/Cards2";
import SimpleMediaCard3 from "../components/cards/Cards3";
import SimpleMediaCard4 from "../components/cards/Cards4";

// import VideoControl from "../components/shared/Video";
// <VideoControl  />

import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";

import { TitleComponent } from "../components/shared/PageTitle";

import Grid from "@material-ui/core/Grid";

import { withStyles } from '@material-ui/core/styles';

import logo from '../images/LincolnGroup-1.png'; 
console.log(logo);

import logo2 from '../images/Kish-1.png'; 
console.log(logo2);

import logo3 from '../images/Makai-2.png'; 
console.log(logo3);

import logo4 from '../images/BoatWash-1.png'; 
console.log(logo4);
// export const styles =(theme:any)=> ({
//   card: {

//     color: theme.palette.text.secondary,
//     maxWidth: 345,
//     padding: theme.spacing.unit * 2,
//     textAlign: 'center',    
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%" // 16:9
//   },
//   root: {
//     flexGrow: 1,
//   },
// });

// export const styles = (theme:any) => ({
//   paper: {
//     color: theme.palette.text.secondary,
//     padding: theme.spacing.unit * 2,
//     textAlign: 'center',    
//   },
//   root: {
//     flexGrow: 1,
//   }, 
// });


const styles = (theme:any) => ({
  
root: {
    flexGrow: 1,
    paddingRight: 15,
    paddingTop :0
  },
});

// const styles = (theme:any) => ({
//   card: {
//     color: theme.palette.text.secondary,
//     maxWidth: 345,
//     padding: theme.spacing.unit * 2,
//     textAlign: 'center',    
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%" // 16:9
//   },
//   root: {
//     flexGrow: 1,
//   },
// });
function HomePage(props:any) {
  const { classes } = props;
  const titleProps = {
    label:"Home"
  };
  return (
    <Fade in={true}>
    <div className={classes.root}>
      <React.Fragment>
        <section className="app-page-header">
          <TitleComponent label={titleProps.label} />
        </section>
        <section className="app-page-content">         
          <Grid container={true} spacing={32}>
            <Grid item={true}  md={6} sm={6} xs={12}>
              <Slide direction="up" in={true}>
                <SimpleMediaCard />
              </Slide>
            </Grid>
            <Grid item={true}   md={6} sm={6} xs={12}>
            <Slide direction="up" in={true}>
                <SimpleMediaCard4 /> 
            </Slide>                          
            </Grid>
            <Grid item={true}  md={6} sm={6} xs={12}>
              <Slide direction="up" in={true}>
                <SimpleMediaCard2 />
              </Slide>              
            </Grid>
            <Grid item={true}  md={6} sm={6} xs={12}>    
            <Slide direction="up" in={true}>
            <SimpleMediaCard3 />
              </Slide>  
            </Grid>
          </Grid>
        </section>
      </React.Fragment>
      </div>
    </Fade>
  );
}

export default withStyles(styles)(HomePage);
