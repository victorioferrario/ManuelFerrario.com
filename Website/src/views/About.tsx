import * as React from "react";

import Fade from "@material-ui/core/Fade";

import Divider from "@material-ui/core/Divider";

// import Slide from '@material-ui/core/Slide';
import { ITitleProps, TitleComponent } from "../components/shared/PageTitle";

import imgVSCode from "../images/vs.png";

import imgMaterial from "../images/material-ui-logo.svg";

import { Link } from "react-router-dom";

import ScrollTopControl from "../components/shared/ScrollTopControl";

export const MyLink = (props: any) => (
    <Link to="/about" {...props}>
        Details
  </Link>
);
export const JqueryButton = (props: any) => (
    <a id={"jqueryMeDude"} href="javascript:void(0)"
        className="floating-button" {...props}>[ ^ ] </a>
)
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
                        <h4>Create React apps (with Typescript) with no build configuration.</h4>
                        <div>
                            This site uses the Create React apps (with Typescript) with no build configuration.
                            <br />
                            <a href="https://github.com/wmonk/create-react-app-typescript" target="blank">https://github.com/wmonk/create-react-app-typescript</a>

                            <br />
                            <br />
                            <img src={imgMaterial} style={{ maxWidth: 180 }} /><br />
                            <a href="https://material-ui.com/" target="blank">https://material-ui.com/</a>
                            <br /> <br /> <br />
                            <Divider />
                            <br />
                            <br />
                            <img src={imgVSCode} style={{ width: '100%', maxWidth: 980 }} />
                        </div>
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
