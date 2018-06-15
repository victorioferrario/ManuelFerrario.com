import * as React from "react";

import Fade from "@material-ui/core/Fade";
// import Slide from '@material-ui/core/Slide';
import { ITitleProps, TitleComponent } from "../components/shared/PageTitle";

export default class ContactPage extends React.Component<{}, {}> {
    public titleProps: ITitleProps = {
        label: "Contact"
    };
    public render() {
        return (
            <Fade in={true}>
                <React.Fragment>
                    <section className="app-page-header">
                        <TitleComponent label={this.titleProps.label} />
                    </section>
                    <section className="app-page-content">                       
                        <article >
                            <h2 style={{color:'#388E3C'}}>GET IN TOUCH</h2>
                            <p style={{fontSize:'1.4rem'}}>
                                I am available for consulting, and special projects. < br />
                                Ready to make a splash? Let's start a conversation today.</p>
                            <p>
                                <b>The Office</b><br />
                        350 Lincoln Rd Suite 5000 <br />
                                Miami Beach, Fl 33141
                     <br />
                                Phone: 305-776-7366
                     <br />
                                Email: victorio.ferrario@gmail.com
                            </p>
                        </article>
                    </section>
                </React.Fragment>
            </Fade>
        );
    }
}
