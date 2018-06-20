import * as React from "react";

//  Redirect

// import { Redirect, Switch }  from 'react-router-dom'
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import "./MediaTabs.css";

// import TabIndicatorProps from '@material-ui/core/TabIndicatorProps'

export const TabContainer = (props: any) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

export interface IPropsTabControl {
  classes: any;
  message?: string;
  ref?: any;
  children?: any;
  childUX?: any;
  childDocs?: any;
  childWireFrames?: any;
}

export interface IStateTabControl {
  classes?: string;
  value?: number;
  prevalue?: number;
}

export const styles = (theme: any) => ({
  root: {
    backgroundColor: "#FFFFFF",
    flexGrow: 1,
    marginTop: -45
  },
  tabsIndicator: {
    backgroundColor: "#1890ff",
    height: 4
  }
});
export const MyLink = (props: any) => <Link to="/media/1" {...props} />;
export const MyLink2 = (props: any) => <Link to="/media/2" {...props} />;
export const MyLink3 = (props: any) => <Link to="/media/3" {...props} />;
export const MyLink4 = (props: any) => <Link to="/media/4" {...props} />;
export const MyLink5 = (props: any) => <Link to="/media/5" {...props} />;
// export const Link1 = () => (<Link  to="/media/1">Work</Link>);
// export const Link2 = () => (<Link  to="/media/2">Enterprise Planning</Link>);
// export const Link3 = () => (<Link  to="/media/3">Sitemaps & Wireframes</Link>);
// export const Link4 = () => (<Link  to="/media/4">Videos</Link>);
export const TextSpan = (props: any) => <span>props.value.toString()</span>;

export class TabsControl extends React.Component<
  IPropsTabControl,
  IStateTabControl
> {
  public debuggerText: string;

  public state: IStateTabControl = {
    value: 0
  };

  constructor(props: IPropsTabControl) {
    super(props);
  }
  public handleChangeIndex = (index: number) => {
    // his.setState({ value: index });
  };
  public handleChange = (event: any, value: any) => {
    const newValue = value;
    this.setState({
      value: newValue
    });
  };
  public componentGetIndexValue() {
    const url: string = document.location.pathname;
    const temp = url.substr(
      document.location.pathname.lastIndexOf("/") + 1,
      url.length - document.location.pathname.lastIndexOf("/")
    );
    const futureVal: number = Number(temp) - 1;
    return futureVal;
  }

  public componentDidUpdate() {
    const currentValue = this.state.value;
    const futureValue = this.componentGetIndexValue();
    if (currentValue !== futureValue) {
      this.setState({
        value: futureValue
      });
    }
  }
  public render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{
            marginTop: -25,
            paddingLeft: 0,
            position: "absolute",
            right: 0,            
            textAlign: "right",           
          }}
        >
          <Tabs
            onChange={this.handleChange}
            value={this.state.value}
            indicatorColor="secondary"
            classes={{
              indicator: classes.tabsIndicator,
              root: classes.tabsRoot,             
            }}
            scrollable={true}
            scrollButtons="on"
          >
            <Tab label="Work" component={MyLink} />
            <Tab label="Enterprise Planning" component={MyLink2} />
            <Tab label="Site Maps" component={MyLink3} />
            <Tab label="Videos" component={MyLink4} />
            <Tab label="Wireframes" component={MyLink5} />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer />}
        {value === 1 && <TabContainer />}
        {value === 2 && <TabContainer />}
        {value === 3 && <TabContainer />}
        {value === 4 && <TabContainer />}
        {value === 5 && <TabContainer />}
        {this.debuggerText}
      </div>
    );
  }
}

export default withStyles(styles)(TabsControl);
