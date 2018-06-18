import * as React from "react";

import Fade from "@material-ui/core/Fade";

import { ITitleProps, TitleComponent } from "../components/shared/PageTitle";

import ResumeView from "./sub-views/ResumeView";

import ScrollTopControl from "../components/shared/ScrollTopControl";


export interface IResumeState {
  myRef: any;
  isFadeIn: boolean;
}

export default class ResumePage extends React.Component<{}, IResumeState> {
  public titleProps: ITitleProps = {
    label: "Resume"
  };
  public myRef: any;
  constructor(props: any, state: IResumeState) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      isFadeIn: false,
      myRef: this.myRef
      };
    }   
   public render() {
       return (
           <Fade in={true}>
               <React.Fragment>
                   <section className="app-page-header">
                       <TitleComponent label={this.titleProps.label} />
                   </section>
                   <section
                       className="app-page-content" >                   
                       <ResumeView />
                   </section>    
                  <ScrollTopControl 
                    containerId="appContentId" 
                    delayInMs={33.0} 
                    scrollStepInPx={50}
                  />                              
          </React.Fragment>
      </Fade>
    );
  }
}
