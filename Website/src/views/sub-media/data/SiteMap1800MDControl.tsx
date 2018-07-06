import * as React from "react";

import Divider from "@material-ui/core/Divider";

import sitemap1800Md from "../../../images/1800store/sitemaps/1800MD-2.png";
import sitemap1800MdAdimOps from "../../../images/1800store/sitemaps/Admin-Ops-2.png";
import sitemap1800MdClientProducer from "../../../images/1800store/sitemaps/ClientProducerDashboard.png";
import sitemap1800MdMemberHealthPortal from "../../../images/1800store/sitemaps/MemberHealthPortal.png";
import sitemap1800MdMemberServicesPortal from "../../../images/1800store/sitemaps/MemberServices.png";
import sitemap1800MdPhysicianDashboard from "../../../images/1800store/sitemaps/PhysicianDashboard.png";

export const DividerLineSplitter = () => (
  <React.Fragment>
    <br /> <br /> <Divider /> <br />
  </React.Fragment>
);

export default class SiteMap1800MDControl extends React.Component {
  public render() {
    return (
      <main>
        <br/>
        <img src={sitemap1800Md} className="responsive" />
        <DividerLineSplitter />
        <img src={sitemap1800MdAdimOps} className="responsive" />
        <DividerLineSplitter />
        <img src={sitemap1800MdClientProducer} className="responsive" />
        <DividerLineSplitter />
        <img src={sitemap1800MdMemberHealthPortal} className="responsive" />
        <DividerLineSplitter />
        <img src={sitemap1800MdMemberServicesPortal} className="responsive" />
        <DividerLineSplitter />
        <img src={sitemap1800MdPhysicianDashboard} className="responsive" />
      </main>
    );
  }
}
