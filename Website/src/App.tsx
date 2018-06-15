import * as React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from "./containers/Navigation";
import withStyles, { StyleRulesCallback, WithStyles } from '@material-ui/core/styles/withStyles';

import withRoot from './WithRoot';

const styles: StyleRulesCallback<'root'> = theme => ({
    root: {
        paddingTop: theme.spacing.unit * 20,
        textAlign: 'center',
    },
});

export interface IAppState {
    name: any;
    child: any;
    onSubmit: any;
    parent: any;
    open: boolean
}

class App extends React.Component<WithStyles<'root'>, IAppState> {

    constructor(props: any, state: IAppState) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    public handleClose() {
        this.setState({
            open: false,
        });
    }
    public handleClick() {
        this.setState({
            open: true,
        });
    }
    public componentWillMount() {
        return false;
    }
    public toggleDrawer = (side: any, open: any) => () => {
        this.setState({
        });
    };
    public render() {
        return (
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        );        
    }
}

export default withRoot(withStyles(styles)<{}>(App));