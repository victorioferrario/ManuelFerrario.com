import { TestOutput } from 'tslint/lib/test';
import * as React from 'react';

import Dialog from '@material-ui/core/Dialog';



import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Icon from '@material-ui/core/Icon';

import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import Paper from '@material-ui/core/Paper';

import Divider from '@material-ui/core/Divider';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

import Slide from '@material-ui/core/Slide';

export interface IPropsPdfViewer{
    
    classes?: any;
    transition?: any;
    componet?: any;   

}
export interface IStatePdfViewer{
    open: boolean;
    pdfItem: string;
}

export function Transition(props: any) {
    return <Slide direction="up" {...props} />;
}

export class MediaViewer extends React.Component<IPropsPdfViewer, IStatePdfViewer> { 

    constructor(props:IPropsPdfViewer, state:IStatePdfViewer){
        super(props);


    }

    
    public handleClickOpen = (arg:any) => {
        this.setState({ open: true });
     };
    

    public handleClose = () => {
        this.setState({ open: false });
    };

    public render() {     
        return (
            <div style={{
                backgroundColor: '#455A64'
            }}>
                TestOutput
            </div>);
    }
    public PdfContainer(){
       return(<Dialog
                    fullScreen={true}
                    open={this.state.open}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}  style={{
                        backgroundColor: '#455A64'
                    }}>
                    <AppBar style={{ background: '#388E3C'}}>
                        <Toolbar>                            
                            <Typography variant="title" color="inherit" style={{ flex: 1}}>
                                Media Viewer : 1800 MD</Typography>
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <section style={{
                        backgroundColor:'#455A64'}}>                      
                        <React.Fragment> {
                            this.props.componet
                        }
                        </React.Fragment>
                       
                    </section>
                </Dialog>) ;
    }
    public MenuContainer(){
        return ( <Paper>
            <h4 style={{ paddingLeft: 25, paddingTop: 35 }}> 1800MD.com | Software as a Service <span className="platform">Platform</span></h4>
            <Divider />
            <MenuList style={{ marginTop: 2, paddingTop: 0, paddingBottom: 0}}>
                <MenuItem className="menuItem"
                    onClick={this.handleClickOpen.bind(this,"file")}>   
                    <ListItemIcon >
                        <Icon>play_arrow</Icon>
                    </ListItemIcon>
                    <ListItemText inset={true} primary="Admin Portal - Doctors" className="ListItem-XM"/>                            
                </MenuItem>
                <MenuItem className="menuItem" onClick={this.handleClickOpen.bind(this, "file")}>
                    <ListItemIcon>
                        <Icon>play_arrow</Icon>
                    </ListItemIcon>
                    <ListItemText inset={true} primary="Member Dashboard: Account Activation" className="ListItem-XM"/>
                </MenuItem>
                <MenuItem className="menuItem" onClick={this.handleClickOpen.bind(this,"file")}>
                    <ListItemIcon >
                        <Icon>play_arrow</Icon>
                    </ListItemIcon>
                    <ListItemText inset={true} primary="Member Dashboard: Ordering E-Consult" className="ListItem-XM xx-text-control"/>
                </MenuItem>
                <MenuItem className="menuItem" onClick={this.handleClickOpen.bind(this, "file")}>
                    <ListItemIcon  >
                        <Icon>play_arrow</Icon>
                    </ListItemIcon>
                    <ListItemText inset={true} primary="Member Dashboard: Health Records" className="ListItem-XM xx-text-control"/>
                </MenuItem>
                <MenuItem className="menuItem" onClick={this.handleClickOpen.bind(this,"file")}>
                    <ListItemIcon >
                        <Icon>play_arrow</Icon>
                    </ListItemIcon>
                    <ListItemText inset={true} primary="Doctor Dashboard: E-Consult Servicing" className="ListItem-XM xx-text-control"/>
                </MenuItem>
            </MenuList>
        </Paper>);
    }

}