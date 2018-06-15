
import * as React from "react";


export enum VideoItemEnum {
    AdminPortal = "bipnLRd3kVA",
    MemberActivation = "xr5rM_vVdyw",
    MemberEConsult = "7w1ffC_vbcA",
    MemberOrderingEconsult = "KoK5a2ifLgw",
    MemberHealthRecords = "E6BCSyLtw7w",
    DoctorEConsult = "Kb-xGWi9wS0"
}




export const AdminPortal = () => (    
    <iframe width="560" height="315" src="https://www.youtube.com/embed/bipnLRd3kVA"
        style={{ width: '100%', height: '100%', minHeight: '85vh', marginTop: '65px' }} allow={"autoplay=true; encrypted-media"} allowFullScreen={true}/>   
);

export const MemberActivation = () => (
    <iframe width="560" height="315" src="https://www.youtube.com/embed/xr5rM_vVdyw"
        style={{ width: '100%', height: '100%', minHeight: '85vh', marginTop: '65px' }} allow={"autoplay=true; encrypted-media"} allowFullScreen={true} />
);

export const MemberOrderingEConsults = () => (
    <iframe width="560" height="315" src="https://www.youtube.com/embed/KoK5a2ifLgw"
        style={{ width: '100%', height: '100%', minHeight: '85vh', marginTop: '65px' }} allow={"autoplay=true; encrypted-media"} allowFullScreen={true} />
);

export const MemberEConsults = () => (
    <iframe width="560" height="315" src="https://www.youtube.com/embed/7w1ffC_vbcA"
        style={{ width: '100%', height: '100%', minHeight: '85vh', marginTop: '65px' }} allow={"autoplay=true; encrypted-media"} allowFullScreen={true} />   
);

export const MemberHealthRecords = () => (
    <iframe width="560" height="315" src="https://www.youtube.com/embed/E6BCSyLtw7w"
        style={{ width: '100%', height: '100%', minHeight: '85vh', marginTop: '65px' }} allow={"autoplay=true; encrypted-media"} allowFullScreen={true} /> 
);

export const DoctorsEConsult = () => (
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Kb-xGWi9wS0"
        style={{ width: '100%', height: '100%', minHeight: '85vh', marginTop: '65px' }} allow={"autoplay=true; encrypted-media"} allowFullScreen={true} /> 
)

// Doctor Dashboard: E - Consult Servicing
   // < iframe width = "560" height = "315" src = "https://www.youtube.com/embed/Kb-xGWi9wS0" frameborder = "0" allow = "autoplay; encrypted-media" allowfullscreen></iframe >

export interface IPropsYouTube {
    videoItemEnum: VideoItemEnum
}

export class YouTubeController extends React.Component<IPropsYouTube, {}> {
    constructor(props: IPropsYouTube) {
        super(props);
    }
    public renderVideo() {
        if (this.props.videoItemEnum === VideoItemEnum.AdminPortal) {
            return <AdminPortal />
        } else if (this.props.videoItemEnum === VideoItemEnum.DoctorEConsult) {
            return <DoctorsEConsult />
        } else if (this.props.videoItemEnum === VideoItemEnum.MemberEConsult) {
            return <MemberEConsults />
        } else if (this.props.videoItemEnum === VideoItemEnum.MemberActivation) {
            return <MemberActivation />
        } else if (this.props.videoItemEnum === VideoItemEnum.MemberHealthRecords) {
            return <MemberHealthRecords />
        } else {
            return <AdminPortal />
        }
    }

    public render() {
        return (<React.Fragment>
            <div className="container">
                {this.renderVideo()}
            </div>
        </React.Fragment>)
    }
}

export default YouTubeController;


