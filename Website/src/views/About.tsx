import * as React from "react";

import Fade from "@material-ui/core/Fade";

import Divider from "@material-ui/core/Divider";

// import Slide from '@material-ui/core/Slide';
import { ITitleProps, TitleComponent } from "../components/shared/PageTitle";

import imgVSCode from "../images/vs.png";

import { Link } from "react-router-dom";

export const MyLink = (props: any) => (
  <Link to="/about" {...props}>
    Details
  </Link>
);
export const MyLink2 = (props: any) => (
  <Link to="/about/skills" {...props}>
    Skills
  </Link>
);
export const AboutDetailsPage = () => (
  <Fade in={true}>
    <section>Details</section>
  </Fade>
);
export const AboutSkillsPage = () => (
  <Fade in={true}>
    <section>Skills</section>
  </Fade>
);
export interface IAboutState {
  label: string;
}

export default class AboutPage extends React.Component<{}, {}> {
  public titleProps: ITitleProps = {
    label: "About"
  };
  constructor(props: any, state: IAboutState) {
    super(props);
  }
  public render() {
    return (
        <Fade in={true}>
            <React.Fragment>
                <section className="app-page-header">
                    <TitleComponent label={this.titleProps.label} />
                </section>
                <section className="app-page-content">
                    <h2>React + TypeScript - 7 Days</h2>
                    <h4>6/15/2018</h4>
                    <p>                      
                      This has been an interesting <b>7</b> days. Check back soon, I am going to be writing about my expereinces.  Last Friday, the 8th of June 2018, I had never built anything in React. </p>
                  <p>
                   I will be sharing with you how it went, I will also be uploading this project to GitHub.
                    <b>Stay Tunned!</b><br />
                    <br /> <br />
                    <Divider />
                    <br />
                    <br />
                  <img src={imgVSCode}  style={{width:'100%', maxWidth:980}}/>
                </p>
                </section>
            </React.Fragment>        
      </Fade>
    );
  }
}
