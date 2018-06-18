

import * as React from "react";
export interface IPropsPageChecker {
    containerId: string;
}
export interface IStatePageChecker {
    containerId: string;
    element?:HTMLElement|null;        
    elementScrollTop?: number | null;
    elementIsAvailable?:boolean;
}
export class PageCheckerControl extends React.Component<IPropsPageChecker, IStatePageChecker> {
    constructor(props:IPropsPageChecker){
        super(props);
        const temp = document.getElementById(this.props.containerId) != null ? 
            document.getElementById(this.props.containerId): null   
        this.state = {
            containerId: temp!==null? this.props.containerId : 'undefined'
        }        
    }
    public componentDidMount() {
         const temp = document.getElementById(this.props.containerId) != null ? 
                document.getElementById(this.props.containerId): null;
                 if( temp!== null  && temp.scrollTop !== null){
                     temp.scrollTop = 0;                                
                 } 
                this.setState ( {     
                    element:temp!= null ? temp : null,    
                    elementIsAvailable: temp !=null,               
                    elementScrollTop: temp !=null ? temp.scrollTop : 0                                  
                });                  
            if (this.state.elementIsAvailable && this.state.element) {    
                          console.log(this.state.elementScrollTop);    
                if( temp!== null  && temp.scrollTop !== null){
                console.log('temp.offsetTop',temp.offsetTop);
                }         
            }     
         }

     public render(){
         return (<React.Fragment>
         <div style={{display:'none'}}>
         {this.state.elementScrollTop}
         {this.state.elementIsAvailable}</div>
         </React.Fragment>);
     }        
}
export default PageCheckerControl;