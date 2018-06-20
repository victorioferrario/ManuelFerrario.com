
import * as React from 'react';


import Dialog from '@material-ui/core/Dialog';




import Paper from '@material-ui/core/Paper';

import Divider from '@material-ui/core/Divider';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

import Slide from '@material-ui/core/Slide';
// import { DividerLineSplitter } from '../../views/sub-media/sitemaps';

import {PdfViewerMenuListControl} from "./PdfViewerMenuList";

import {PdfIframeControl} from "./PdfIframe";

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
 


export class PdfViewer extends React.Component<IPropsPdfViewer, IStatePdfViewer> { 

    public state: IStatePdfViewer = {
        open: false,
        pdfItem: ""
    }
    constructor(props:IPropsPdfViewer, state:IStatePdfViewer){
        super(props);
        this.state = {
            open:false,
            pdfItem: ""
        }
    }
    
    public handleClickOpen = (arg:any) => {
        console.log(arg);
        this.setState({ open: true, 
            pdfItem: "media/pdf/" + arg });
     };
    

    public handleClose = () => {
        this.setState({ open: false });
    };

    public render() {     
        return (
            <div style={{
                backgroundColor: '#455A64'
            }}>
                {this.PdfContainer()}
            </div>);
    }
    public PdfContainer(){
        
       return(
        <div style={{
            backgroundColor: '#455A64'
        }}>
            <Paper>
                <h4 style={{ paddingLeft: 25, paddingTop: 35, marginTop:'-10px' }}> Dashboards</h4>
                <Divider />
                <PdfViewerMenuListControl name="Shady" onHandleClick={this.handleClickOpen} />            
            </Paper>
        <Dialog
                    fullScreen={true}
                    open={this.state.open}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}  style={{
                        backgroundColor: '#455A64'
                    }}>
                    <AppBar style={{ background: '#388E3C'}}>
                        <Toolbar>                            
                            <Typography variant="title" color="inherit" style={{ flex: 1}}>
                                PDF Viewer</Typography>
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <section style={{
                        backgroundColor:'#455A64'}}>                      
                        <React.Fragment> {
                            <PdfIframeControl pdfUrl={this.state.pdfItem} />                            
                        }
                        </React.Fragment>                       
                    </section>
                </Dialog>  
        </div>) ;
    }
    


}