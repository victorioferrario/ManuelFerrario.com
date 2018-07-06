import * as React from "react";

import {IMediaModel, SimpleCard } from "../components/cards/Card";

// import SimpleMediaCard from "../components/cards/Cards";
// import SimpleMediaCard2 from "../components/cards/Cards2";
// import SimpleMediaCard3 from "../components/cards/Cards3";
// import SimpleMediaCard4 from "../components/cards/Cards4";

// import VideoControl from "../components/shared/Video";
// <VideoControl  />

import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";

import ScrollTopControl from "../components/shared/ScrollTopControl";

import { TitleComponent } from "../components/shared/PageTitle";

import Grid from "@material-ui/core/Grid";

import logo from '../images/LincolnGroup-1.png'; 
// console.log(logo);

import logo2 from '../images/Kish-1.png'; 
// // console.log(logo2.toString());

import logo3 from '../images/Makai-2.png'; 
// console.log(logo3);

import logo4 from '../images/BoatWash-1.png'; 
// console.log(logo4);

export interface IPropsHome {
  classes?:any;
}
export interface IStateHome {
  value?:any;
}
export class HomePage extends React.Component<IPropsHome,IStateHome> {
  public propsArray:IMediaModel[];
  public titleProps = {
    label:"Home"
  };
  constructor(props:IPropsHome, state:IStateHome){
    super(props);
    this.initData();
  }  
  public render(){    
    return (
    <Fade in={true}>
      <div style={{ 
        flexGrow: 1,
        paddingRight: 15,
        paddingTop :0}}>
        <React.Fragment>
          <section className="app-page-header">
            <TitleComponent label={this.titleProps.label} />
          </section>
          <section className="app-page-content">         
            <Grid container={true} spacing={32}>
              <Grid item={true} md={6} sm={6} xs={12}>
                <Slide direction="up" in={true}>                  
                  <SimpleCard dataItem={this.propsArray[0]}  />
                </Slide>
              </Grid>
              <Grid item={true} md={6} sm={6} xs={12}>
                <Slide direction="up" in={true}>
                    <SimpleCard dataItem={this.propsArray[1]}  />
                </Slide>                          
              </Grid>
              <Grid item={true} md={6} sm={6} xs={12}>
                <Slide direction="up" in={true}>
                  <SimpleCard dataItem={this.propsArray[2]}  />
                </Slide>              
              </Grid>
              <Grid item={true} md={6} sm={6} xs={12}>    
                <Slide direction="up" in={true}>
                  <SimpleCard dataItem={this.propsArray[3]}  />
                </Slide>  
              </Grid>
            </Grid>
          </section>
        </React.Fragment>
        <ScrollTopControl 
                    containerId="appContentId" 
                    delayInMs={33.0} 
                    scrollStepInPx={50}
                />
        </div>
      </Fade>);
  }
  private initData(){
    this.propsArray = [
      {
        image:logo.toString(),// "/static/media/LincolnGroup-1.f7f6b1dc.png",        
        link:"http://www.manuelferrario.com/work/lincoln-group.com",
        subheader:"Corporate Site",
        text:"We produce innovative designs & services that meet every customer’s evolving needs.",
        title: "Lincoln-Group.com"
      },
      {
        image:logo3.toString(),// "/static/media/BoatWash-1.8c697b37.png",        
        link:"http://www.manuelferrario.com/work/bikiniboatwash.com",
        subheader:"Corporate Site",
        text:"Exterior & interior cleaning, party services and much much more! We Put the 'Tail in Detail!'",
        title: "BikiniBoatWash.com"
      },
      {
        image:logo2.toString(),// "/static/media/Kish-1.8d3c776f.png",        
        link:"http://www.manuelferrario.com/work/kish-law.com",
        subheader:"Corporate Site",
        text:"Serving Palm Beach, Miami-Dade, and Broward counties in South Florida and beyond.",
        title: "Kish-Law.com"
      },
      {
        image:logo4.toString(),// "/static/media/Makai-2.3ed500fb.png",        
        link:"http://www.manuelferrario.com/work/makai-fashion.com/",
        subheader:"Corporate Site",
        text:"Refill Your Soul! Makai is the Hawaiian for 'On the Way to the Ocean'",
        title: "Makai-Fashion"
      }
    ];    
  }
}
export default HomePage;
