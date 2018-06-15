import * as React from "react";


//  Redirect

import { Redirect } from 'react-router-dom'


import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import './MediaTabs.css';

// import TabIndicatorProps from '@material-ui/core/TabIndicatorProps'




export const TabContainer = ((props: any) => {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
});


export interface IPropsTabControl {
    classes: any;
    message?: string;
    ref?: any
    children?: any
    childUX?: any;
    childDocs?: any;
    childWireFrames?: any
}

export interface IStateTabControl {
    value: number;
    prevalue?: number;
}

export const styles = (theme: any) => ({
    root: {
        backgroundColor: '#FFFFFF',
        flexGrow: 1,
        marginTop: -45,
    },
    tabsIndicator: {
        backgroundColor: '#1890ff',
        height: 4
    },
});








export class TabsControl extends React.Component<IPropsTabControl, IStateTabControl>  {
    public state: IStateTabControl = {
        value: 0
    }
    constructor(props: IPropsTabControl) {
        super(props);
        this.handleNavigation = this.handleNavigation.bind(this);
    }
    public handleChange = (event: any, value: any) => {           
        this.setState({ value });
    };
    public handleNavigation(arg: any) {       
        console.log("test");        
    }
    public render() {
        const { classes } = this.props;
        const { value } = this.state;       
        if (this.state !== null) {

           // <Redirect to="/media/2" />
        }


        return (<div className={classes.root}>
            <AppBar position="static" style={{ marginTop: -25, right: 0, position: 'absolute', textAlign: 'right', paddingLeft:0 }}>
                <Tabs value={value} onChange={this.handleChange}
                    indicatorColor="secondary" 
                    classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                    scrollable={true}
                    scrollButtons="on"
                >
                    <Tab label="Work" />
                    <Tab label="Enterprise Planning" />
                    <Tab label="Wireframes & Site Maps"  />
                    <Tab label="Videos" />
                </Tabs>
            </AppBar>
            {value === 0 && <Redirect to="/media/1" /> 
               }
            {value === 1 && <Redirect to="/media/2" />
            }
            {value === 2 && <Redirect to="/media/3" />
            }
            {value === 3 && <Redirect to="/media/4" />
            }
        </div>);    }
}

export default withStyles(styles)(TabsControl);


