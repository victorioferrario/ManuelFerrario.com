// 204886592?autoplay=1&loop=1"

import * as React from "react";
import Vimeo from "react-vimeo";


{/* <iframe width="560" height="315" 
src="https://www.youtube.com/embed/7w1ffC_vbcA"  allowfullscreen
frameborder="0" allow="autoplay; encrypted-media" 
allowfullscreen></iframe> */}


export default class VideoControl extends React.Component {
        public render(){
            const videoId= "204886592";
            return (<Vimeo videoId={ videoId }  autoplay={true}/>);
}

   // https://youtu.be/7w1ffC_vbcA 
}
