import * as React from "react";

import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Icon from "@material-ui/core/Icon";

import PageCheckerControl from "./PageChecker";

// import { animateScroll } from "react-scroll";

export interface IScrollTopControlProps {
  containerId: string;
  delayInMs: number;
  scrollStepInPx: number;
}
export interface IScrollTopControlState {
  element?: HTMLElement | null;
  elementIsAvailable?: boolean;
  elementIsFadedIn?: boolean;
  intervalId: number;
  incrementer: number;
  startValue: number;
}
export default class ScrollTopControl extends React.Component<
  IScrollTopControlProps,
  IScrollTopControlState
> {
  public SCROLL_TIME = 468;
  public w: Window;
  public scrollTop: any;

  constructor(props: IScrollTopControlProps, state: IScrollTopControlState) {
    super(props);
    const temp =
      document.getElementById(this.props.containerId) != null
        ? document.getElementById(this.props.containerId)
        : null;
    this.state = {
      element: temp,
      elementIsAvailable: temp !== null,
      elementIsFadedIn: false,
      incrementer: 0.5544,
      intervalId: 0,
      startValue: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    // this.animate = this.animate.bind(this);
    this.easeOutCubic = this.easeOutCubic.bind(this);
  }
  public now() {
    return Date.now;
  }
  public componentDidMount() {
    const temp =
      document.getElementById(this.props.containerId) != null
        ? document.getElementById(this.props.containerId)
        : null;
    this.setState({
      element: temp,
      elementIsAvailable: temp !== null
    });
    if (this.state.elementIsAvailable && this.state.element) {
      this.state.element.addEventListener("scroll", this.handleScroll);
    }
  }
  public componentWillUnmount() {
    if (this.state.elementIsAvailable && this.state.element) {
      this.state.element.removeEventListener("scroll", this.handleScroll);
      window.addEventListener("scroll", this.handleScroll);
    }
  }
  public handleScroll() {
    if (this.state.elementIsAvailable && this.state.element) {    
      if (this.state.element.scrollTop > 100) {
        this.setState({ elementIsFadedIn: true });
      }
      if (this.state.element.scrollTop < 99) {
        this.setState({ elementIsFadedIn: false });
      }    
    }
  }
  public handleClick() {
    if (this.state.elementIsAvailable && this.state.element) {
        
      const id: number = setInterval(
        this.scrollStep.bind(this),
        this.props.delayInMs
      );
      this.setState({
        intervalId: id,
        startValue: this.state.element.scrollTop
      });
    }
  }
  public render() {
    return (
      <aside className="floating-button">
        <Fade in={this.state.elementIsFadedIn}>
          <Button
            variant="fab"
            color="primary"
            aria-label="^"
            onClick={this.handleClick}
          >
            <Icon style={{ fontSize: 22 }}>expand_less</Icon>
          </Button>
        </Fade>
        <PageCheckerControl containerId="appContentId" />
      </aside>
    );
  }

  public easeOutCubic(
    currentIteration: number,
    startValue: number,
    changeInValue: number,
    totalIterations: number
  ) {
    return (
      changeInValue *
        (Math.pow(currentIteration / totalIterations - 1, 3) + 1) +
      startValue
    );
  }

  private scrollStep() {
    if (this.state.elementIsAvailable && this.state.element) {
      if (this.state.element.scrollTop === 0) {
        clearInterval(this.state.intervalId);
        this.setState({
          incrementer: 0.0035
        });
      }
      this.setState({
        incrementer: (this.state.incrementer + 0.0035) * 3
      });        
      this.state.element.scrollTo(
        0,
        this.state.element.scrollTop - Math.floor(this.state.incrementer/.5)
      );
    }
  }
}

//
// animateScroll.animateTopScroll(scrollOffset, props, to, target);
// <section className="floating-button">
//     <Fade in={this.state.isFadeIn}>
//         <Button
//             variant="fab"
//             color="primary"
//             aria-label="^"
//             onClick={this.handleClick}>
//             <Icon style={{ fontSize: 22 }}>expand_less</Icon>
//         </Button>
//     </Fade>
// </section>
// constructor(props: any, state: ICADRWebPlatformState) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.handleScroll = this.handleScroll.bind(this);
// }
