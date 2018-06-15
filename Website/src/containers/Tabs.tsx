import * as React from "react";

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import AppBar from '@material-ui/core/AppBar';

import Typography from '@material-ui/core/Typography';

// const styles = (theme:any) => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: 500,
//   },
// });
// export interface IFullTabProps {
//     // classes: any;
//     // theme:any;
//   }

export const TabContainer = (children: any, dir: any) =>
    (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );

export class FullTabPage extends React.Component<{}, {}> {
    public state = {
        value: 0,
    };
    constructor(props: any, state: any) {
        super(props);
    }

    public handleChange(event: any, value: any) {
        // this.setState({ value });
    };

    public handleChangeIndex(index: any) {
        // this.setState({ value: index });
    };
    public render() {
        return (
            <div >
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth={true}
                    >
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </AppBar>
                {/* <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
        </SwipeableViews> */}
            </div>
        );
    }
}
