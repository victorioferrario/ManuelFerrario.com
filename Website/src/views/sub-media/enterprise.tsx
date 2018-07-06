import * as React from "react";

import "./image.css";

// --------------------------------------------------------
//#region [ AsyncControl                                ]

import * as Loadable from "react-loadable";
import { SimpleLoadingComponent } from "./data/SimpleLoader";

export const AsyncEnterpriseControl = Loadable({
  loader: () => import("./data/EnterpriseControl"),
  loading: SimpleLoadingComponent
});

//#endregion

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


export class EnterpriseView extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <React.Fragment>
                <h2>
                    Enterprise Planning</h2>
                <Card className="cardbigger">
                    <CardContent>
                       <AsyncEnterpriseControl /> 
                    </CardContent>
                </Card >
            </React.Fragment>
        );
    }
}

export default EnterpriseView;


