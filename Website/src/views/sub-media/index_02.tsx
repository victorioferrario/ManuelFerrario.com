import * as React from "react";


import "./image.css";
// import MediaViewer from "../../components/shared/MediaViewer";

import Divider from '@material-ui/core/Divider';

import Card from '@material-ui/core/Card';

//  import CardActions from '@material-ui/core/CardActions';

import CardContent from '@material-ui/core/CardContent';

import sharepointTeam from '../../images/sharepoint.Team.Site.png';

import sharepointFullSite from '../../images/sharepoint.Full.Site.png';

import cadrAppModules from '../../images/ApplicationModulesv1.0.png';

import cadrPortals from "../../images/CADR.Portals.jpg";

export const DividerLineSplitter = () => (<React.Fragment><br /> <br /> <Divider /> <br /></React.Fragment>)

export class View02 extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <React.Fragment>
                <h2>
                    Enterprise Planning & Road Maps</h2>
                <Card className="cardbigger">
                    <CardContent>
                        <section>
                            <h4>Team Sharepoint site<DividerLineSplitter /></h4>                           
                            <img src={sharepointTeam} className="responsive" />                          
                            <h4>Full Sharepoint site<DividerLineSplitter /></h4>
                            <img src={sharepointFullSite} className="responsive" />
                            <h4>Platform Items<DividerLineSplitter /></h4>
                            <img src={cadrAppModules} className="responsive"/>
                            <h4>Plaftform Inventory<DividerLineSplitter /></h4>
                            <img src={cadrPortals} className="responsive" />
                        </section>
                    </CardContent>
                </Card >
            </React.Fragment>
        );
    }
}

export default View02;


