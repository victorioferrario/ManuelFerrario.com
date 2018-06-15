import * as React from "react";


import "./image.css";
// import MediaViewer from "../../components/shared/MediaViewer";



import Card from '@material-ui/core/Card';

//  import CardActions from '@material-ui/core/CardActions';

import CardContent from '@material-ui/core/CardContent';

import sharepointTeam from '../../images/sharepoint.Team.Site.png';

import sharepointFullSite from '../../images/sharepoint.Full.Site.png';

import cadrPortals from "../../images/CADR.Portals.jpg";


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
                            <h4>Team Sharepoint site</h4>
                            <img src={sharepointTeam} className="responsive" />
                            <h4>Full Sharepoint site</h4>
                            <img src={sharepointFullSite} className="responsive" />
                            <h2>Plaftform Inventory</h2>
                            <img src={cadrPortals} className="responsive" />
                        </section>
                    </CardContent>
                </Card >
            </React.Fragment>
        );
    }
}

export default View02;


