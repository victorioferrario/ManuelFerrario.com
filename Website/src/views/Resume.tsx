import * as React from "react";

import Icon from "@material-ui/core/Icon";

import Button from "@material-ui/core/Button";

import Fade from "@material-ui/core/Fade";

import { ITitleProps, TitleComponent } from "../components/shared/PageTitle";

import ResumeView from "./sub-views/ResumeView";

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
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  public handleClick() {
    if (document.getElementById("appContentId") != null) {
      const temp = document.getElementById("appContentId");
      if (temp) {
        temp.scrollTop = 0;
      }
    }
  }  
  public componentDidMount() {
    if (document.getElementById("appContentId") != null) {
      const temp = document.getElementById("appContentId");
      if (temp) {       
        temp.addEventListener("scroll", this.handleScroll);
      }
    }
  }
  public componentWillUnmount() {
    const temp = document.getElementById("appContentId");
    if (temp) {
      temp.removeEventListener("scroll", this.handleScroll);
    }
  }
  public handleScroll() {
    if (document.getElementById("appContentId") != null) {
      const temp = document.getElementById("appContentId");
      if (temp) {
        if (temp.scrollTop > 100) {
          this.setState({ isFadeIn: true });
        }
        if (temp.scrollTop < 99) {
          this.setState({ isFadeIn: false });
        }
      }
    }
  }
   public render() {
    return (
      <Fade in={true}>
        <React.Fragment>
          <section className="app-page-header">
            <TitleComponent label={this.titleProps.label} />
          </section>
          <section
            className="app-page-content">
            <ResumeView />
          </section>
          <section className="floating-button">
            <Fade in={this.state.isFadeIn}>
              <Button
                variant="fab"
                color="primary"
                aria-label="^"
                onClick={this.handleClick}>
                <Icon style={{ fontSize: 22 }}>expand_less</Icon>
              </Button>
            </Fade>
          </section>
        </React.Fragment>
      </Fade>
    );
  }
}
