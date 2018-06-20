

import * as React from "react";

export interface IPropsIframeControl {
    pdfUrl:any;
}
export interface IStateIframeControl {
    pdfUrl:string;
}

export class PdfIframeControl extends React.Component<IPropsIframeControl,IStateIframeControl> {
    public state: IStateIframeControl = {        
        pdfUrl: ""
    }
    constructor(props:IPropsIframeControl, state:IStateIframeControl){
        super(props);
        this.state = {
            pdfUrl: "http://www.manuelferrario.com/Viewer.aspx?id=" + props.pdfUrl
        }
    }
    public render(){
        return  (
        <React.Fragment>
                <iframe src={ this.state.pdfUrl } style={{width:'100vw', height:'90vh', marginTop:'65px'}}/>
        </React.Fragment>)
    }
}

export default PdfIframeControl;