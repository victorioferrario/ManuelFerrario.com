import * as React from "react";

import Divider from "@material-ui/core/Divider";

import siteMapDoctor from '../../../images/sitemap.Doctors.png';
import siteMapMembers from '../../../images/sitemap.Members.png';
import siteMapMemberServices from '../../../images/sitemap.MemberServices.png';

export const DividerLineSplitter = () => (
    <React.Fragment>
      <br /> <br /> <Divider /> <br />
    </React.Fragment>
  );
  
  export default class SiteMapCADRControl extends React.Component {
    public render() {
      return (
        <section className="telemed">   
            <DividerLineSplitter />
            <main>
                <h2>CADR Web Platform Site Maps </h2>     
                <DividerLineSplitter />         
                <img src={siteMapMembers} className="responsive" />
            </main>
            <DividerLineSplitter />
            <main>
                <img src={siteMapDoctor} className="responsive" />
            </main>
            <DividerLineSplitter />
            <main>
                <img src={siteMapMemberServices} className="responsive" />
            </main>
        </section>
      );
    }
  }
