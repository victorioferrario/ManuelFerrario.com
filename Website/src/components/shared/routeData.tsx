
//#region [@ Imports                     ] 

import * as React from 'react';

import Collapse from '@material-ui/core/Collapse';

import Divider from "@material-ui/core/Divider";

import Icon from '@material-ui/core/Icon';

import { NavLink } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

// import MenuList from '@material-ui/core/MenuList';
// import MenuItem from '@material-ui/core/MenuItem';

import { withStyles } from '@material-ui/core/styles';

// import { MouseEvent } from 'react';

//#endregion

//#region [@ Links                     ] 


export const MyLinkHome = (props: any) => <NavLink to="/" {...props} />
export const MyLink = (props: any) => <NavLink to="/about" {...props} />
export const MyLink2 = (props: any) => <NavLink to="/resume" {...props} />
export const MyLink3 = (props: any) => <NavLink to="/contact" {...props} />
export const MyLink4 = (props: any) => <NavLink to="/media" {...props} />
export const MyLink5 = (props: any) => <NavLink to="/temp" {...props} />
export const MyArticles = (props: any) => <NavLink to="/articles" {...props} />

export const MediaWork
    = (props: any) => <NavLink to="/media/1" {...props} />
export const MediaEnterpriseDocs
    = (props: any) => <NavLink to="/media/2" {...props} />
export const MediaSitemaps
    = (props: any) => <NavLink to="/media/3" {...props} />
export const MediaUIUX
    = (props: any) => <NavLink to="/media/4" {...props} />
export const MediaWireframes
    = (props: any) => <NavLink to="/media/5" {...props} />

//#endregion

export interface IPropsMenuListControl {
    classes: any;
    logmessage?: string;
    onHandleClick: (side: any, open: any) => void;
}
export interface IStateMenuListControl {
    open_collapse: boolean;
    logmessage?: string;
}
export const styles = (theme: any) => ({
    nested: {
        paddingLeft: 25,
    },
    root: {
        backgroundColor: theme.palette.background.paper,
        maxWidth: 360,
        width: '100%',
    },
});

//#region [@ MenuTopControl ] 

export const MenuTopControl = (props:IPropsMenuControl) => (
    <React.Fragment>
        <List component="nav" style={{ paddingTop: 0, paddingBottom: 0 }} subheader={<ListSubheader component="div">Menu</ListSubheader>}>
            <ListItem button={true} component={MyLinkHome} onClick={props.onHandleClick}>
                <ListItemIcon>
                    <Icon>inbox</Icon>
                </ListItemIcon>
                <ListItemText primary="Welcome" />
            </ListItem>
            <Divider />
            <ListItem button={true} component={MyLink} onClick={props.onHandleClick} >
                <ListItemIcon>
                    <Icon>star</Icon>
                </ListItemIcon>
                <ListItemText primary="About" />
            </ListItem>
            <ListItem button={true} component={MyArticles} onClick={props.onHandleClick}>
                <ListItemIcon>
                    <Icon>chrome_reader_mode</Icon>
                </ListItemIcon>
                <ListItemText primary="Articles" />
            </ListItem>
        </List>
    </React.Fragment>
);

//#endregion

//#region [@ MenuBotControl ] 
export interface IPropsMenuControl {
    onHandleClick: () => void;
}
export const MenuBottomControl = (props:IPropsMenuControl) => (
    <React.Fragment>
        <Divider />
        <List component="nav" style={{ paddingTop: 0, paddingBottom: 0 }}
            subheader={<ListSubheader component="div">Find out more info</ListSubheader>}>
            <ListItem button={true} component={MyLink2} onClick={props.onHandleClick} >
                <ListItemIcon>
                    <Icon>send</Icon>
                </ListItemIcon>
                <ListItemText primary="Resume" />
            </ListItem>
            <ListItem button={true} component={MyLink3} onClick={props.onHandleClick} >
                <ListItemIcon>
                    <Icon>drafts</Icon>
                </ListItemIcon>
                <ListItemText primary="Contact" />
            </ListItem>
        </List>
    </React.Fragment>
);

//#endregion


export class MenuListControl extends React.Component<IPropsMenuListControl, IStateMenuListControl>{
    public state: IStateMenuListControl = {
        open_collapse: false
    }
    constructor(props: IPropsMenuListControl, state: IStateMenuListControl) {
        super(props);
        this.state = {
            open_collapse: false
        }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    public handleClick = () => {
        this.setState({ open_collapse: !this.state.open_collapse });
    };
    public handleToggleClick() {

        // this.context.
        this.props.onHandleClick("left", false);
    }
    public componentDidMount() {
        this.setState({ logmessage: "componentDidMount" });
    }
    public componentWillMount() {
        this.setState({
            logmessage: "componentWillMount"
        });
    }
    public MenuCollapseControl() {
        return (
            <React.Fragment>
                <ListItem button={true} onClick={this.handleClick} >
                    <ListItemIcon>
                        <Icon>drafts</Icon>
                    </ListItemIcon>
                    <ListItemText inset={true} primary="Media" />
                    {this.state.open_collapse ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>}
                </ListItem>               
                <Collapse in={this.state.open_collapse} timeout="auto" unmountOnExit={false} >
                    <Divider />
                    <List component="div" disablePadding={true} >
                        <ListItem button={true} component={MediaWork}
                            className="nested-list-item" onClick={this.handleToggleClick}>
                            <ListItemIcon>
                                <Icon>local_library</Icon>
                            </ListItemIcon>
                            <ListItemText secondary="Portfolio" />
                        </ListItem >
                        <ListItem button={true} component={MediaEnterpriseDocs} className="nested-list-item" onClick={this.handleToggleClick}>
                            <ListItemIcon>
                                <Icon>shuffle</Icon>
                            </ListItemIcon>
                            <ListItemText inset={true} secondary="Enterprise Planning" />
                        </ListItem>
                        <ListItem button={true}
                            component={MediaSitemaps} className="nested-list-item"
                            onClick={this.handleToggleClick}>
                            <ListItemIcon>
                                <Icon>transform</Icon>
                            </ListItemIcon>
                            <ListItemText inset={true} secondary="Sitemaps" />
                        </ListItem>
                        <ListItem button={true} component={MediaUIUX} className="nested-list-item" onClick={this.handleToggleClick}>
                            <ListItemIcon>
                                <Icon>important_devices</Icon>
                            </ListItemIcon>
                            <ListItemText inset={true} secondary="Video Demos" />
                        </ListItem>
                        <ListItem button={true} component={MediaWireframes} className="nested-list-item" onClick={this.handleToggleClick}>
                            <ListItemIcon>
                                <Icon>device_hub</Icon>
                            </ListItemIcon>
                            <ListItemText inset={true} secondary="Wireframes" />
                        </ListItem>
                    </List>
                </Collapse>
            </React.Fragment>);
    }
    public render() {
        const props ={
            onHandleClick : this.handleToggleClick
        }
        return (
            <React.Fragment>
                <aside style={{ backgroundColor: "#FFF", maxWidth: 360, minWidth: 280, width: '100%' }}>
                    <Divider />                   
                    {MenuTopControl(props)}
                    {this.MenuCollapseControl()}
                    <Divider />
                    {MenuBottomControl(props)}
                    <Divider />
                </aside>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(MenuListControl);
