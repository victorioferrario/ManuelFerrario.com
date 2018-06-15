
import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import "./image.css";

import siteMapDoctor from '../../images/sitemap.Doctors.png';
import siteMapMembers from '../../images/sitemap.Members.png';
import siteMapMemberServices from '../../images/sitemap.MemberServices.png';



import sitemap1800Md                        from "../../images/1800store/sitemaps/1800MD-2.png";
import sitemap1800MdAdimOps                 from "../../images/1800store/sitemaps/Admin-Ops-2.png";
import sitemap1800MdClientProducer          from "../../images/1800store/sitemaps/ClientProducerDashboard.png";
import sitemap1800MdMemberHealthPortal      from "../../images/1800store/sitemaps/MemberHealthPortal.png";
import sitemap1800MdMemberServicesPortal    from "../../images/1800store/sitemaps/MemberServices.png";
import sitemap1800MdPhysicianDashboard      from "../../images/1800store/sitemaps/PhysicianDashboard.png";
// --------------------------------------------------------
//#region [ OverViewControl                                ]

export const OverviewControl = () => (   
    <section className="sitmaps">        
        <header>
            <article style={{ borderTop: 'solid 0 #039be5' }}>
                <div className="title-2">CADR Web Platform Site Maps</div>
                <h4>Health information and access to Doctors</h4>
            </article>
        </header>     
    </section>
);

//#endregion    
// --------------------------------------------------------
//#region [ DoctorsAndMemberServicesControl                ]

    export const DoctorsAndMemberServicesControl = () => (
        <section className="telemed">     
            <main>
                <h2>CADR Web Platform Site Maps </h2>
                <img src={siteMapMembers} className="responsive" />
            </main>
            <main>
                <img src={siteMapDoctor} className="responsive" />
            </main>
            <main>
                <img src={siteMapMemberServices} className="responsive" />
            </main>
        </section>
    );

//#endregion
// --------------------------------------------------------

// sitemap1800Md
// sitemap1800MdAdimOps
// sitemap1800MdClientProducer
// sitemap1800MdMemberHealthPortal
// sitemap1800MdMemberServicesPortal
// sitemap1800MdPhysicianDashboard   

export const SitemapsForControl1800MD = () => (
    <React.Fragment>
        <main>
            {/*     <h1>1800MD.com Sitemaps </h1>
            <h2>1800MD.com </h2>*/}
            <img src={sitemap1800Md} className="responsive" />
            {/*  <h2>1800MD.com - Admin Ops. </h2>*/}
            <img src={sitemap1800MdAdimOps} className="responsive" />   
            {/*   <h2>1800MD.com - Client / Producer </h2>*/}
            <img src={sitemap1800MdClientProducer} className="responsive" />   
            {/* <h2>1800MD.com - Members Health Portal </h2>*/}
            <img src={sitemap1800MdMemberHealthPortal} className="responsive" />   
            {/*  <h2>1800MD.com - Members Services Dashboard </h2>*/}
            <img src={sitemap1800MdMemberServicesPortal} className="responsive" />   
            {/*  <h2>1800MD.com - Doctors Dashboard </h2> */}
            <img src={sitemap1800MdPhysicianDashboard} className="responsive" />   
            </main>
    </React.Fragment>);


export default class SiteMapsControl extends React.Component {
        public render() {
            return (
                <React.Fragment>
                    <Card className="cardbigger">
                        <CardContent>
                            <SitemapsForControl1800MD />
                            <DoctorsAndMemberServicesControl />
                        </CardContent>
                    </Card>
            </React.Fragment>);
    }
}










