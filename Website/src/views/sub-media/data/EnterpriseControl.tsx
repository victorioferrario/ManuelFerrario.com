import * as React from "react";

import Divider from '@material-ui/core/Divider';

import sharepointTeam from '../../../images/sharepoint.Team.Site.png';

import sharepointFullSite from '../../../images/sharepoint.Full.Site.png';

import cadrAppModules from '../../../images/ApplicationModulesv1.0.png';

import cadrPortals from "../../../images/CADR.Portals.jpg";


export const DividerLineSplitter = () => (
    <React.Fragment>
      <br /> <br /> <Divider /> <br />
    </React.Fragment>
  );
  
  export default class EnterpriseControl extends React.Component {
    public render() {
      return (
        <section>
                            <h4>Team Sharepoint site<DividerLineSplitter /></h4>                           
                            <img src={sharepointTeam} className="responsive" />                          
                            <h4>Full Sharepoint site<DividerLineSplitter /></h4>
                            <img src={sharepointFullSite} className="responsive" />
                            <h4>Platform Items<DividerLineSplitter /></h4>
                            <img src={cadrAppModules} className="responsive"/>
                            <h4>Platform Inventory<DividerLineSplitter /></h4>
                            <img src={cadrPortals} className="responsive" />
                        </section>
      );
    }
  }



