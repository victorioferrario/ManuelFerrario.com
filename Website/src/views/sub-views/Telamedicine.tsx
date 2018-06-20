import * as React from "react";
import "./Telamedicine.css";

import ScrollTopControl from "../../components/shared/ScrollTopControl";

import logoAdmin from '../../images/hire.svg';
import logo04 from '../../images/e-commerce.svg';
import logo05 from '../../images/storage-databases.svg';
import logomMobile from '../../images/mobile-apps-and-sites.svg';
import logomMembers from '../../images/meeting-experiences.svg';
import pictureMemberDashboard from '../../images/MemberDashboard.jpg';
import logoPartnerships from '../../images/virtual-machines.svg';

//#region [ Platform            

export const PlatformOverviewControl = () => (
    <section className="telemed">
        <header>
            <article>
                <h1 style={{marginTop:2,paddingTop:1}}>CADR Web Platform Outline</h1>
                <h4>Software as a Service Platform, SOA Archiecture</h4>
            </article>
        </header>
        <header className="overview-exception">
            <article className="fix-text">
                <div className="title-2">Overview of document</div>
                <div className="sub-title"> When trying to share the depth of the CADR Framework &amp; Web Platform, I find it useful to first identify to my audience all of the client facing and service fulfillment web applications that are all interconnected, and constantly communicating
            with each other, harmoniously within our ecosystem.</div>
                <br />
                <div className="sub-title"> The following document is an outline containing the majority of the applications mentioned above that I am responsible for architecting, developing, enhancing and managed at CONSULT A DOCTOR. It is important to understand, that I am
            only identifying in this document the touch points of these applications, not the underlying technology below. The User Interface Design, Programming and Development of the UX.</div>
            </article>
        </header>
        <header>
            <article style={{ borderTop: 'solid 2px #039be5' }}>
                <div className="title-2">Corporate Web Applications</div>
                <h4>Public facing corporate presence</h4>
            </article>
            <article>
                <div className="flex-card" style={{ border: 'solid 0 #039be5', marginBottom: 0 }}>
                    <table style={{ borderTop: '0 solid #5584e4' }}>
                        <tbody>
                            <tr>
                                <td style={{ width: 48 }}><img src={logo04} style={{ width: 48 }} /></td>
                                <td className="title">Corporate &amp; Consumer Retail Web Applications</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="desc" >                  
                    <ol className="portal">
                        <li className="site-label"><span>Individual &amp; Family Plan Offerings</span>
                            <ul>
                                <li>
                                    Compare Plans </li>
                                <li>
                                    Registration Wizards</li>
                            </ul>
                        </li>
                        <li className="site-label"><span>Group Membership Programs offerings</span>
                            <ul>
                                <li>
                                    Educating Groups on the value of Telemedicine.</li>
                                <li>
                                    Product offerings targeted towards the following categories
                                    <ol>
                                        <li>Health Insurance Plans</li>
                                        <li>	Healthcare Brokers & Consultants</li>
                                        <li>Small(0-50) & Large(50+) Employer Groups</li>
                                        <li>	Health care Third-party Administrators(TPA)</li>
                                        <li>Accountable Care Organizations(ACO) & Associations</li>
                                    </ol>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>
                <div className="flex-card" style={{ border: 'solid 0 #039be5' }}>
                    <table style={{ borderTop: '0 solid #5584e4' }}>
                        <tbody>
                            <tr>
                                <td style={{ width: 48 }}><img src={logo05} style={{ width: 48 }} alt=" " /></td>
                                <td className="title"> Corporate Web Site Version II</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="desc">
                    <ol className="portal">
                        <li className="site-label"><span>Informational Telemedicine Collateral</span>
                            <ul>
                                <li>Educating consumers about Telemedicine</li>
                                <li>Describing benefits &amp; value of Telemedicine</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </article>
        </header >
    </section >
);
//#endregion
//#region  [ Consumer Web        

export const ConsumerMemberWebApplicationsControl = () => (
    <section className="telemed">
        <header>
            <article style={{ borderTop: 'solid 2px #039be5' }}>
                <div className="title-2">Consumer / Member Web Applications</div>
                <h4>Health information and access to Doctors</h4>
                <div className="flex-card" style={{ border: 'solid 0 #039be5', marginBottom: 0 }}>
                    <table style={{ borderTop: '0 solid #5584e4' }}>
                        <tbody>
                            <tr>
                                <td style={{ width: 48 }}><img src={logomMembers} style={{ width: 48 }} /></td>
                                <td className="title">Member Health Web Applications</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="desc">
                    <ol className="portal">
                        <li className="site-label"><span>Activation Microsite</span>
                            <ol>
                                <li>Welcome & Take A Tour</li>
                                <li>
                                    Activate Account
                                    <ul>
                                        <li>By Name & Date Of Birth Lookup</li>
                                        <li>System Generated Access Code  </li>
                                        <li>Url: Activation.consultadr.com</li>
                                    </ul>
                                </li>
                                <li>Notes
                                      <ul>
                                        <li>Eligibility Lookup uses the Group Import Infrastructure to find an account that one is trying to activate, by querying the records in CADR-IO, the data warehouse that stores the account information that has been parsed from third parties, generally received via Excel Document(s).</li>
                                        <li>This microsite has been outfitted with the capabilities to virtually in seconds, private label it for third parties that choose to do so.</li>
                                        <li>Example:
                                              <ul>
                                                <li>http://MD247.consultadr.com             </li>
                                                <li> http://PatientAccessPlus.consultadr.com</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </li>
                        <li className="site-label"><span>Member Personal Health Manager</span>
                            <ol>
                                <li>Home Page Dashboard</li>
                                <li>My Consult Center<img src={pictureMemberDashboard} style={{ float: 'right', width: '33%' }} />
                                    <ol>
                                        <li>Product Selection & Comparison</li>
                                        <li>Consultation Ordering Processes
                                            <ol>
                                                <li>Informational Consultations
                                                    <ol className="over-ride">
                                                        <li>Secure E-mail Medical Consultation</li>
                                                        <li>On Call Telephone Medical Consult</li>
                                                    </ol>
                                                </li>
                                                <li>Diagnostic Consultation
                                                     <ol className="over-ride">
                                                        <li>Video Consultation</li>
                                                        <li>Priority Telephone Consultation</li>
                                                        <li>By Appointment Telephone Consultation</li>
                                                    </ol>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                                <li>My Health Center
                                              <ol>
                                        <li>Interactive Health Tools
                                                    <ol className="over-ride">
                                                <li>Symptom Checker</li>
                                                <li>Health Risk Assessments</li>
                                                <li>Health & Fitness Tools</li>
                                                <li>Pregnancy Tools</li>
                                            </ol>
                                        </li>
                                        <li>Health Centers / Top Health Topics / Health Topics A-Z</li>
                                    </ol>
                                </li>
                                <li>My Health Center</li>
                                <li>My Message Center
                                            <ol>
                                        <li>My E-Consults</li>
                                        <li>My Messages
                                                    <ol className="over-ride">
                                                <li>Direct Messagiing to Care Coordinator</li>
                                                <li>Administrative Messages</li>
                                                <li>Account Notifications</li>
                                                <li>Repository of e-mail communications sent to personal emails.</li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                                <li>My Account Settings
                                            <ol>
                                        <li>General Information</li>
                                        <li>Contact Information</li>
                                        <li>Billing Information
                                                            <ol className="over-ride">
                                                <li>Payment / Billing Address</li>
                                                <li>Administrative Messages</li>
                                            </ol>
                                        </li>
                                        <li>Family Members</li>
                                        <li>Order History</li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </div>
            </article>
        </header >
    </section >);

//#endregion
//#region [ Consumer Mobile     

import pictureMemberMobile01 from '../../images/idr247.png';
// import pictureMemberMobile02 from '../../images/Healthwise.png';
// import pictureMemberMobile03 from '../../images/Activation.png';

export const ConsumerMemberMobileApplicationsControl = () => (
    <section className="telemed">
        <header>
            <article>
                <div className="flex-card" style={{ border: 'solid 0 #039be5', marginBottom: 0 }}>
                    <table style={{ borderTop: '0 solid #5584e4' }}>
                        <tbody>
                            <tr>
                                <td style={{ width: 48 }}><img src={logomMobile} style={{ width: 48 }} /></td>
                                <td className="title">Member Mobile Applications</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="desc">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <ol className="portal">
                                        <li className="site-label"><span>IDr24/7 IPhone App V.2</span>
                                            <ul>
                                                <li>Dynamic Html5 Login / Registration Feed in by our servers</li>
                                                <li>White labeling ready from day 1</li>
                                                <li>Healthwise content embeded into the application using WebView</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'center' }}>
                                    <img src={pictureMemberMobile01} style={{ width: '55%' }} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </header>
    </section >);
//#endregion
//#region [ Partner direct to consumer     



import logoPartner from '../../images/workload-migration.svg';
import pictureMedic from '../../images/CADR.Medica.jpg';

export const PartnerApplicationsControl = () => (
    <section className="telemed">

        <header>    
            <article>
                <div className="flex-card" style={{ border: 'solid 0 #039be5', marginBottom: 0 }}>
                    <table style={{ borderTop: '0 solid #5584e4' }}>
                        <tbody>
                            <tr>
                                <td style={{ width: 48 }}><img src={logoPartner} style={{ width: 48 }} /></td>
                                <td className="title">Partner Direct to Consumer Web Applications</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="desc">
                    <ol className="portal">
                        <li className="site-label"><span>STD Test Express</span>
                            <ul>
                                <li>Third party responsible for operating Marketing Microsite for STD Panel Ordering.</li>
                                <li>Lab Results & Patient Data is securely submitted to a privately exposed XML Data Service Access Point, locked down by requesting applications IP address.</li>
                                <li>Customers are then routed to our landing page to validate patient data, and are immediately prompted to update their information, and then complete the ordering process for a Diagnostic Consultation with one of our physicians to review their lab test results</li>
                            </ul>
                        </li>
                        <li className="site-label"><span>Medica Microsite</span><br />
                            <ol>
                                <li> I'M A Patient<img src={pictureMedic} style={{ float: 'right' }} />
                                    <ol>
                                        <li>Set Your Healthcare Free  </li>
                                        <li>Welcome to Virtual Care   </li>
                                        <li>My Services               </li>
                                        <li>When to Use               </li>
                                        <li>What Members are Saying   </li></ol>
                                </li>
                                <li>How It Works
                                    <ol>
                                        <li>How It Works  </li>
                                        <li>Introduction to 24/7 Virtual Care   </li>
                                        <li>Ways to Consult                     </li>
                                        <li>Personal Health Manager  </li>
                                    </ol>
                                </li>
                                <li> I'M A Provider </li>
                                <li> FAQ </li>
                                <li>Getting Started
                                    <ol>
                                        <li>About Virtual Care      </li>
                                        <li>Your First Visit   </li>
                                        <li>Consult Payments   </li>
                                        <li>E-Prescribing      </li>
                                    </ol>
                                </li>
                                <li>Activate Account
                                     <ol>
                                        <li>Step 1
                                            <ol>
                                                <li>Name & Phone</li>
                                            </ol>
                                        </li>
                                        <li>Step 1
                                            <ol>
                                                <li>Insurance Number / Group Identifier</li>
                                                <li> Other Demographical Data</li>
                                            </ol>
                                        </li>
                                        <li>NOTES:
                                            <ul>
                                                <li>Registration with third party real-time insurance benefit lookup, that if the  account is found, the available information for that Consumer is then pulled down from the 3rd party service and brought into our system.</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                        <li className="site-label"><span>The Flu Hotline 24/7</span>
                            <ol>
                                <li>Home</li>
                                <li>Flu Facts
                                  <ol>
                                        <li>	How it Works</li>
                                        <li>	Symptoms    </li>
                                        <li>	Prevention  </li>
                                        <li>	Flu FAQ </li>
                                    </ol>
                                </li>
                                <li> Our Physicians </li>
                                <li> FAQ</li>
                                <li>
                                    Treatments
                                    <ol>
                                        <li>	Overview </li>
                                        <li>	Medications</li>
                                    </ol>
                                </li>
                                <li>
                                    Get Started Now
                                    <ol>
                                        <li>	Overview </li>
                                        <li>  Register Now </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>

                    </ol>
                </div>
            </article>
        </header>
    </section >);
//#endregion
//#region [ Multi-Specialty Program Template 1]

export const MultiSpecialityProgramTemplate = () => (
    <section className="telemed">

        <header>
            <article>
                <div className="flex-card" style={{ border: 'solid 0 #039be5', marginBottom: 0 }}>
                    <table style={{ borderTop: '0 solid #5584e4' }}>
                        <tbody>
                            <tr>
                                <td style={{ width: 48 }}><img src={logoPartnerships} style={{ width: 48 }} /></td>
                                <td className="title">Affiliate Direct to Consumer Template Web Applicationss</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ol className="portal">
                    <li className="site-label"><span>Multi-use specialty program: TEMPLATE 1</span>
                        <ol>
                            <li>Landing Page
                                <ol>
                                    <li>Dynamic Special Offering depending on Group</li>
                                </ol>
                            </li>
                            <li>How It  Works
                                <ol>
                                    <li>How it Works</li>
                                    <li>When to Use</li>
                                    <li>Common Conditions</li>
                                    <li>Who Benefits</li>
                                </ol>
                            </li>
                            <li>Features
                                 <ol>
                                    <li>Benefits</li>
                                    <li>More Features</li>
                                </ol>
                            </li>
                            <li>FAQ
                                 <ol>
                                    <li>About Us</li>
                                    <li>Medication</li>
                                    <li>Our Physicians</li>
                                    <li>Member Support</li>
                                </ol>
                            </li>
                            <li>Get Started Now
                                   <ol>
                                    <li>Multi-Step Registration form ( 5 Steps )</li>
                                </ol>
                            </li>
                            <li>Example: ELATIONS.CONSULTADR.COM</li>
                        </ol>
                    </li>
                    <li className="site-label"><span>Multi-use specialty program: TEMPLATE 2</span>
                        <ol>
                            <li>Landing Page</li>
                            <li>Special Offering
                               <ol>
                                    <li>Informational Phone Consultation &ndash; Discounted Price</li>
                                    <li>30 day FREE TRIAL</li>
                                </ol>
                            </li>
                            <li>How It  Works
                                <ol>
                                    <li>How it Works</li>
                                    <li>When to Use</li>
                                    <li>Common Conditions</li>
                                    <li>Who Benefits</li>
                                </ol>
                            </li>
                            <li>Our Physicians</li>
                            <li>FAQ</li>
                            <li>Get Started Now
                                <ol>
                                    <li>3 Easy Steps</li>
                                    <li>Registration Form</li>
                                    <li>Click to Call</li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                </ol>
            </article>
        </header>
    </section >);

//#endregion
//#region  [ Consumer Web        


export const AdministrativeControls = () => (
    <section className="telemed">
        <header>
            <article style={{ borderTop: 'solid 2px #039be5' }}>
                <div className="title-2">Administrative & Service Fulfillment Applications</div>
                <h4>Health  infrastructure and productivity solutions</h4>
                <div className="flex-card" style={{ border: 'solid 0 #039be5', marginBottom: 0 }}>
                    <table style={{ borderTop: '0 solid #5584e4' }}>
                        <tbody>
                            <tr>
                                <td style={{ width: 48 }}><img src={logoAdmin} style={{ width: 48 }} /></td>
                                <td className="title">Physicians & Care Coordinators</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="desc">
                    <ol className="portal">
                        <li className="site-label"><span>Member Services Application </span>
                            <ol>
                                <li>Home Page
                                    <ol>
                                        <li>Quick Links
                                            <ol>
                                                <li>Report Viewer</li>
                                                <li>Survey Viewer</li>
                                                <li>Lab Order Viewer</li>
                                            </ol>
                                        </li>
                                        <li>Doctor License Expiration List</li>
                                        <li>Consultation Queue Management
                                            <ol>
                                                <li>Need To Be Assigned  Grid</li>
                                                <li>Waiting  to be Serviced Grid</li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                                <li>Search
                                    <ol>
                                        <li>Quick Links
                                            <ol>
                                                <li>Add New Member</li>
                                                <li>Special  Landing Page Registration Links</li>
                                            </ol>
                                        </li>
                                        <li>Search Control
                                            <ol>
                                                <li>By Name / MemberID  / OrderID / Phone Number  / Lab OrderID</li>
                                            </ol>
                                        </li>
                                        <li>Search Results
                                            <ol>
                                                <li>View Account</li>
                                                <li>Activate  Account</li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                    </ol>
                    <ol className="portal">
                        <li className="site-label"><span>Physician Application (Doctor Dashboard) </span> </li>
                        <ol>
                            <li>Home Page</li>
                            <ol>
                                <li>Today&rsquo;s Consultations</li>
                                <ol>
                                    <li>Priority Queue</li>
                                    <li>By Appointment Queue</li>
                                    <li>E-Consultations Queue</li>
                                </ol>
                                <li>Required On Call Follow  Notes</li>
                                <li>Reference &amp; Tools</li>
                                <ol>
                                    <li>Test Web Cam Tool</li>
                                    <li>Training  Videos</li>
                                    <li>Training  PDF Documents</li>
                                </ol>
                            </ol>
                            <li>Appointments</li>
                            <ol>
                                <li>Quick Links</li>
                                <li>Previous  Week / Next Week</li>
                                <li>Queues</li>
                                <ol>
                                    <li>Today / This Week</li>
                                </ol>
                            </ol>
                            <li>E-Consults</li>
                            <ol>
                                <li>Current Queue</li>
                                <li>Past Answered  Queue</li>
                            </ol>
                            <li>Consultation Wizard for Diagnostic Consultation</li>
                            <ol>
                                <li>Getting  Started</li>
                                <li>Patient&rsquo;s Medical  History</li>
                                <li>Patient&rsquo;s Consultation  History</li>
                                <li>Phone Consult</li>
                                <ol>
                                    <li>Start New Call / Review Call Recordings</li>
                                </ol>
                                <li>E-Prescribing</li>
                                <li>Disposition &amp; Consultation Sign off</li>
                            </ol>
                            <li>Consult History</li>
                            <ol>
                                <li>Filter By Consultation Type</li>
                            </ol>
                            <li>Health Center</li>
                            <ol>
                                <li>Reference Material For Doctor</li>
                            </ol>
                        </ol>
                    </ol>
                </div>
            </article>
        </header>
    </section>);

 //#endregion   
export interface ICADRWebPlatformState {
    myRef: any;
    isFadeIn: boolean;
}
export default class CADRWebPlatform extends React.Component<{}, ICADRWebPlatformState> {    
    public myRef: any;
    constructor(props: any, state: ICADRWebPlatformState) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            isFadeIn: false,
            myRef: this.myRef
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }
    public handleClick() {
        if (document.getElementById("appContentId") != null) {
            const temp = document.getElementById("appContentId");
            if (temp) {
                temp.scrollTop = 0;
            }
        }
    }
    public componentDidMount() {
        if (document.getElementById("appContentId") != null) {
            const temp = document.getElementById("appContentId");
            if (temp) {
                temp.addEventListener("scroll", this.handleScroll);
            }
        }
    }
    public componentWillUnmount() {
        const temp = document.getElementById("appContentId");
        if (temp) {
            temp.removeEventListener("scroll", this.handleScroll);
        }
    }
    public handleScroll() {
        if (document.getElementById("appContentId") != null) {
            const temp = document.getElementById("appContentId");
            if (temp) {
                if (temp.scrollTop > 100) {
                    this.setState({ isFadeIn: true });
                }
                if (temp.scrollTop < 99) {
                    this.setState({ isFadeIn: false });
                }
            }
        }
    }
    public render() {
        return (<React.Fragment>
                <PlatformOverviewControl />
                <ConsumerMemberWebApplicationsControl />
                <ConsumerMemberMobileApplicationsControl />
                <PartnerApplicationsControl />
                <MultiSpecialityProgramTemplate />
                <AdministrativeControls />               
                <ScrollTopControl 
                    containerId="appContentId" 
                    delayInMs={33.0} 
                    scrollStepInPx={50}/> 
            </React.Fragment>);
    }
}



// <table>
// <tbody>
//     <tr>
//         <td style={{ width: 1 }}>&nbsp;</td>
//         <td className="site-label"><span>Individual &amp; Family Plan Offerings</span></td>
//     </tr>
//     <tr>
//     <td style={{ width: 1 }}>&nbsp;</td>
//         <td>
//         Compare Plans
//         </td>
//     </tr>
//     <tr>
//          <td style={{ width: 1 }}>&nbsp;</td>
//         <td>
//         Registration Wizards
//         </td>
//     </tr>
// </tbody>
// </table>
// <table>
// <tbody>
//     <tr>
//         <td style={{ width: 1 }}>&nbsp;</td>
//         <td className="site-label"><span>Group Membership Programs offerings</span></td>
//     </tr>
//     <tr>
//     <td style={{ width: 1 }}>&nbsp;</td>
//         <td>
//         Educating Groups on the value of Telemedicine.
//         </td>
//     </tr>
//     <tr>
//          <td style={{ width: 1 }}>&nbsp;</td>
//         <td>
//         Product offerings targeted towards the following categories
//         <ol>
//                  <li>Health Insurance Plans</li>
//                  <li>	Healthcare Brokers & Consultants</li>
//                  <li>Small(0-50) & Large(50+) Employer Groups</li>
//                  <li>	Health care Third-party Administrators(TPA)</li>
//                  <li>Accountable Care Organizations(ACO) & Associations</li>
//              </ol>
//         </td>
//     </tr>
// </tbody>
// </table>