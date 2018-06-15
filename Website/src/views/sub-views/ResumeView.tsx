import * as React from "react";

import Fade from "@material-ui/core/Fade";

// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

export const ExperienceItem01 = () => (
    <article className="experience-item-sub">

        <p>
                <span className="position-title">
                    Senior Software Architect & Developer{" "}
                </span>
                <span className="position-header">Nuro Retention ‐ Miami Beach, FL</span>
                <span className="position-date">February 2016 to Present </span>
                </p>
            {/* </ExpansionPanelSummary>
            <ExpansionPanelDetails> */}
                <p>
                    <span className="bullet-header">» Software Development Life Cycle </span>
                    Developed .NET Core applications and web based solutions through all stages of the Software Development Life Cycle (SDLC) including solution
                    design, development, implementation, and production support. </p>
                <p>
                    <span className="bullet-header">» Microsoft SQL Server as a Service</span>
                    Co-Architected a Dynamic Database schema distributed over three different
                    Amazon RDS databases. Each database represents a stage in the cleansing &
                    transforming of third party data. The data is transformed and merged into
                    Temporal Tables for historical reference. Created several T4 template
                    packages to help generate C# code that created all of the necessary
                    transforming logic in stored procedures that then injects into SQL server
                    during runtime.</p>
                <p>
                    <span className="bullet-header"> » Going Serverless</span>
                    Authored & implemented a .net core application that imports data from
                    multiple 3rd party Rest APIs. A multi‐tenant, multi provider import
                    service. The application runs in AWS Lambda. A second deployment of the
                    same application runs as a scheduled job as part of a Windows Service on
                    Windows Server 2016.
    </p>
                <p>
                    <span className="bullet-header"> » Amazon API Gateway</span>
                    Created and deployed several different Rest API endpoints running behind
                    Amazon API Gateway that are secured behind our VPC. The Rest API endpoints
                    are written in C# on .NET Core platform.
    </p>
                <p>
                    <span className="bullet-header"> » Amazon Data Glue</span>
                    Successfully configured and implemented several different Data Glue
                    configurations to extract and transform data from our Microsoft SQL Server
                    clusters to our legacy Postgres database instances.
    </p>
                <p>
                    <span className="bullet-header">» Web RTC + Video Chat application</span>
                    Developed and Integrated a Video Chat application with the ability to
                    screen share, and broadcast to multiple viewers. The application is
                    written in Typescript, integrating with OpenTok Platform from Tokbox.
    </p>
                <p>
                    <span className="bullet-header"> » Angular 5 & Graph Database</span>
                    Created an intranet portal written in Typescript and Angular 5. The data
                    layer runs on a Rails backend powered by a Neo4j Graph Database. The
                    portal allows the uploading and managing of client csv files, as well as
                    integrating into 3rd party Rest APIs.
    </p>
                <p>
                    <span className="bullet-header"> » Metabase Reports</span>
                    Deployed a multi‐tenant reporting portal distributed across multiple EC2
                    instances integrating with AWS RDS Postgres Databases.
    </p>
            {/* </ExpansionPanelDetails>
        </ExpansionPanel> */}




    </article>
);
export const ExperienceItem02 = () => (
    <article className="experience-item-sub">
        <p>
            <span className="position-title">
                Senior Software Architect & Developer{" "}
            </span>
            <span className="position-header">
                The Lincoln Group, LLC ‐ Miami Beach, FL{" "}
            </span>
            <span className="position-date">August 2013 to January 2016</span>
        </p>
        <p>
            <span className="bullet-header">
                » .NET Web API, and Windows Communication Foundation Secure
        Communication Layer{" "}
            </span>
            Designed, prototyped, and implemented a secure three‐tier application
            logic for managing sensitive medical data, transactional workflows, and
            business logic exploiting .NET's asynchronous programmability.
    </p>
        <p>
            <span className="bullet-header">
                » Real‐time Peer‐to‐Peer Secure Communication Backed by SignalR.Net &
                Web RTC
      </span>
            Co-Architected a Dynamic Database schema distributed over threeEffectively
            implemented a peer‐to‐peer device agnostic video conferencing system to
            allow real‐time communication between a Physician and a Patient. Features
            bundled with the conferencing system include screen sharing, file sharing,
            and real‐time chat. Leveraged SignalR.Net presence abilities to notify
            users when the corresponding party would arrive to the chat room.
    </p>
        <p>
            <span className="bullet-header"> » Twilio & .NET </span>
            Create application logic in C# to interact with the Twilio API.
            Functionality included initiating IVR calls & sending text messages.
            Recipients where then able to respond to the text messages to confirm with
            the system if they accept the scheduled call or not. Developed endpoints
            in C# to handle calls from the Twilio API, to then process through our
            system.
    </p>
        <p>
            <span className="bullet-header"> » Azure Table Storage</span>
            Planned, Developed and implemented application architecture to allow users
            of the system to upload large data files containing thousands of users.
            The system would store the unparsed files in Azure Table Storage for fast
            access and historical versioning
    </p>
        <p>
            <span className="bullet-header"> » Identity Server 3</span>
            Co-Implemented, Configured and Deployed Identity Server 3 for the entire
            ecosystem. There were four different roles to manage and provision, and
            three different portals.
    </p>
    </article>
);
export const ExperienceItem03 = () => (
    <article className="experience-item-sub">
        <p>
            <span className="position-title">
                Lead Software Architect & Developer
      </span>
            <span className="position-header">
                Consult A Doctor, Inc. ‐ Miami Beach, FL{" "}
            </span>
            <span className="position-date">April 2007 to August 2013</span>
        </p>
        <p>
            <span className="bullet-header">
                » Designing the next generation Enterprise Application Architecture{" "}
            </span>
            Co‐developed three tier application database architecture providing a
            solid, scalable and easily expandable application architecture that
            communicates across multiple platforms and content serving mechanisms. The
            system architecture was deployed over a cutting edge platform
            incorporating Windows Server 2008, SQL Server 2005 & 2008 written in
            C#.NET leveraging the .NET Framework.
    </p>
        <p>
            <span className="bullet-header">
                » Communication & Orchestration Layer
      </span>
            Architect & Planned a multi-layer Communication & Orchestration Layer in
            Visio. Developed the specifications and documentation, which translated
            into several different Workflows in ASP.NET. This framework help drive
            automation and long running process throughout the ecosystem of the SaaS
            platform.
    </p>
        <p>
            <span className="bullet-header">
                {" "}
                » Successfully implementing and executing Enterprise Application{" "}
            </span>
            Implemented high performing secure Ajax application for a multi‐step Check
            Out process and Member portals. Developed clean intuitive administration
            applications. Created custom C#.NET Class libraries that extend the
            Ajax.NET, Microsoft Enterprise library to promote code and form reuse
            across all database driven forms and dynamic application interfaces.
    </p>
        <p>
            <span className="bullet-header">
                {" "}
                » Driving new technologies to enable elevated user experience{" "}
            </span>
            Configured and developed process flows of Interactive voice response (IVR)
            sites. Created service based applications that provide listening services
            for IVR sites, to store and return data and grant or restrict access to
            services.
    </p>
        <p>
            <span className="bullet-header">
                {" "}
                » Implemented SQL Server Integration Services
      </span>
            Successfully implemented several different SSIS packages that extracted
            and transformed data from a 3rd party content provider, and stored the
            data in a version SQL Database, for consumption via the main applications.
    </p>
        <p>
            <span className="bullet-header"> » Developed custom XML Parser</span>
            Authored & implemented a C# class library to parser a 3rd party health
            reference library in XML. Used regular expression to strip out and replace
            specific HTML content to make it mobile friendly. Wrote custom XSLT
            templates to white label the content in company’s brand.
    </p>
        <p>
            <span className="bullet-header"> » Custom Http Modules</span>
            Created & implemented a custom HttpModule on the root web application that
            would intercept every server request to the base URL and detect the
            subdomain in that request. The module would then compare the subdomain to
            a list of cached Client Group Entities and determine which active client
            the user was a part of. The request was then transferred to the Member
            Portal co-branded in that Clients Logo and settings.
    </p>
        <p>
            <span className="bullet-header">
                {" "}
                » Conception and Execution of a Corporate Brand
      </span>
            Re-branded Consult A Doctor and developed corporate brand identity
            including logos and all marketing collateral delivered across multiple
            campaigns, print and digital experiences. Designed, created and developed
            client facing web sites, internal management applications, and custom
            partner alliance entry points. Institutionalized design templates for
            brand conformity across all web initiatives.
    </p>
    </article>
);
export const ExperienceItem04 = () => (
    <article className="experience-item-sub">
        <p>
            <span className="position-title">Lead Product Architect & Developer</span>
            <span className="position-header">
                AV Motion Studios, LLC ‐ Miami, FL{" "}
            </span>
            <span className="position-date">August 2002 to March 2007 </span>
        </p>
        <p>
            <span className="bullet-header">» Driving creative results </span>
            Led architecture meetings, brainstorming sessions, design reviews and
            production process to ensure that creative deliverables exceeded client
            expectations. Developed creative briefs, information architectures,
            application development standards and libraries, Web site prototypes,
            design concepts, marketing initiatives and production guidelines to ensure
            optimal finished product.
    </p>
        <p>
            <span className="bullet-header">» Driving business results </span>
            As one of three partners in the firm, managed all aspects of the business.
            Set financial goals and developed budgets for both the creative and
            development teams. Created scalable reporting, organizational and process
            mechanisms to ensure the success of both projects and employees in a fast
            paced environment. Business results included sales increase by 300% from
            2002 to 2006, profit margins increasing 75%, and growth of the overall
            business and clientele by 80%.
    </p>
        <p>
            <span className="bullet-header">» Managing a team </span>
            Recruited, trained and managed a team of seven creative and technical
            professionals in Miami and overseas. Created and managed timelines and
            project schedules. In addition, managed implementations by working with
            cross‐functional teams to drive bug resolution and issues through the
            final release. Able to coordinate and direct all phases of project‐based
            efforts while managing, motivating and leading project teams.
    </p>
        <p>
            <span className="bullet-header">» Keeping clients happy </span>
            Exceeded expectations for numerous clients, including Shea Homes, Trump
            International, and The Related Group of South Florida. Successful projects
            and client referrals drove new business from old and new clients by merely
            75%. As both an executive contact and lead project manager, delivered
            secure web, database and business intelligence solutions with all the
            latest technology.
    </p>
    </article>
);
export const ExperienceItem05 = () => (
    <article className="experience-item-sub">
        <p>
            <span className="position-title">Founder / Product Director </span>
            <span className="position-header">
                VMF Design, LLC – Wilmington, NC & Miami, FL{" "}
            </span>
            <span className="position-date">February 1999 to March 2005 </span>
        </p>
        <p>
            <span className="bullet-header">» Business development </span>
            Responsible for spearheading and developing new business and sales
            opportunities for company’s pipeline. Played an instrumental role in
            defining, prototyping, and implementing a broad spectrum of innovative and
            effective technology services that became the backbone of the company’s
            primary business. Pursued new markets and created strong alliances between
            multiple Advertising Agencies in the Miami area. Lead the strategic
            relocation effort of the company to ensure better customer service of
            existing clients.
    </p>
        <p>
            <span className="bullet-header">» Driving business results </span>
            Grew the clientele base from zero clients to over 25 in four years.
            Clients included NetFlix.com, Marc USA Advertising, Ameriquest Mortgage
            Company. Increased company capacity and overall production through
            standardizing the development processes and design standards.
    </p>
        <p>
            <span className="bullet-header">» Managing a team </span>
            Recruited and managed a team of creative and technical professionals, as
            well as interns provided by the University of North Carolina. Developed
            project timelines and schedules, enabling the collaboration of remote
            developers throughout the country.
    </p>
    </article>
);
export const ExperiencesControl = () => (
    <React.Fragment>
        <p>
        <span className="section-header">Work Experience </span></p>
        <ExperienceItem01 />
        <ExperienceItem02 />
        <ExperienceItem03 />
        <ExperienceItem04 />
        <ExperienceItem05 />
    </React.Fragment>
);
export const EducationControl = () => (
    <React.Fragment>
        <article className="experience-item">
            <p>
                <span className="section-header">Education </span>
            </p>
        </article>
        <article className="experience-item-sub">
            {" "}
            <p>
                <span className="position-title">B.A. in Business Management </span>
                <span className="position-header">
                    University of North Carolina at Wilmington ‐ Wilmington, NC{" "}
                </span>
                <span className="position-date">1996 to 2000 </span>
            </p>
        </article>
    </React.Fragment>
);
export const OverviewControl = () => (
    <section>
        <article className="experience-item">
            <p>
                <span className="section-header">Overview </span>
            </p>
        </article>
        <article className="experience-item-sub">
            {" "}
            <p>
                Accomplished technical professional with over 19 years of experience
                implementing full life‐cycle enterprise applications. Proven experience
                with solution focused design, cutting‐edge programming implementations,
                and cloud computing deployments.
      </p>
        </article>
    </section>
);

export default class ResumeView extends React.Component<{}, {}> {
    constructor(props: any, state: any) {
        super(props);
    }
    public render() {
        return (
            <Fade in={true}>
                <React.Fragment>

                    <OverviewControl />

                    <ExperiencesControl />

                    <EducationControl />


                </React.Fragment>
            </Fade>
        );
    }
}
