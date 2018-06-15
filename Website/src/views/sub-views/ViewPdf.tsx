import * as React from "react";
export class MyDocumentViewer extends React.Component {
    public state = {
        numPages: null,
        pageNumber: 1,
      }    
     public  render() {        
        return (
         <span>Go!</span>
        );
      }
}
export default MyDocumentViewer;