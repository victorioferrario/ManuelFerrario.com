import * as React from 'react';

import Fade from '@material-ui/core/Fade';

import Slide from '@material-ui/core/Slide';

 import swimmer01 from "../../images/baseline-pool-24px.svg"

export interface ITitleProps {
    label: string;
    children?: any;
    ref?: any;
}
export const TitleComponent = (props: ITitleProps) => (
    <React.Fragment>
        <Fade in={true}>
            <article className="app-page-title">
                <Slide direction="left" in={true}>
                    <React.Fragment>                    
                        <h3 style={{ paddingTop: 10 }} >{props.label}</h3>
                    </React.Fragment>                    
                </Slide>
                <img src={swimmer01} style={{ width:48, height:48, opacity:.4, position:'absolute', top:53,right:60}}/>
                {props.children}
            </article>
        </Fade>       
    </React.Fragment>
);


