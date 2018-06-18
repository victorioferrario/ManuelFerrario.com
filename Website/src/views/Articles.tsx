import * as React from "react";

import CADRWebPlatform from "./sub-views/Telamedicine";

import Fade from "@material-ui/core/Fade";
// import Slide from '@material-ui/core/Slide';
import { ITitleProps, TitleComponent } from "../components/shared/PageTitle";

import ScrollTopControl from "../components/shared/ScrollTopControl";

export default class ArticlesPage extends React.Component<{}, {}> {
  public titleProps: ITitleProps = {
    label: "Articles"
  };
  
  public render() {
    return (
        <Fade in={true}>    
            <React.Fragment>
                <section className="app-page-header">
                    <TitleComponent label={this.titleProps.label} />
                </section>
                <section className="app-page-content">
                    <CADRWebPlatform />
                    <ScrollTopControl
                        containerId="appContentId"
                        delayInMs={33.0}
                        scrollStepInPx={50}
                    />
                </section>
            </React.Fragment>            
      </Fade>
    );
  }
}
