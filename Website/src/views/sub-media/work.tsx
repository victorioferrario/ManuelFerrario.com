
import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



import "./image.css";

import project00 from "../../images/projects/project.jpg"

import project01 from "../../images/projects/project-1.jpg";

import project02 from "../../images/projects/project-2.jpg";

import project03 from "../../images/projects/project-3.jpg";

import project0A from "../../images/projects/project-a.jpg";
import project0B from "../../images/projects/project-b.jpg";

import project0C from "../../images/projects/project-c.jpg";
import project0D from "../../images/projects/project-d.jpg";

import project0E from "../../images/projects/project-e.jpg";
import project0F from "../../images/projects/project-f.jpg";


import featuredProject01 from "../../images/1800store/1800.Corporate-1_Page_2.png";
import featuredProject02 from "../../images/1800store/1800.Corporate-1_Page_4.png";



import project0M from "../../images/projects/project-m.jpg";

import projectCD from "../../images/projects/project-cd.jpg";


import ItemGridControl from './ItemGrid';

import Grid from "@material-ui/core/Grid";

export const styles = (theme: any) => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    paper: {
        color: '#fffff',
        paddinG: 5,
        textAlign: 'center',
    },
    root: {
        flexGrow: 1,
    },
});

export default class WorkControl extends React.Component {
    public render() {
        return (<React.Fragment>
            <Grid container={true} spacing={32} style={{}}>
                <Grid item={true} md={12} sm={12} xs={12}>
                    <Card className="card">
                        <CardContent>
                            <img src={featuredProject01} style={{ width: '100%' }} />
                        </CardContent>
                    </Card >
                </Grid>
                <Grid item={true} md={12} sm={12} xs={12}>
                    <Card className="card">
                        <CardContent>
                            <img src={featuredProject02} style={{ width: '100%' }} />
                        </CardContent>
                    </Card >
                </Grid>
            </Grid>
            <Grid container={true} spacing={32} style={{ maxWidth: 1100 }}>
                <Grid item={true} md={6} sm={6} xs={12}>
                    <Card className="card">
                        <CardContent>
                            <img src={project00} style={{ width: '100%' }} />
                        </CardContent>
                    </Card >
                </Grid>
                <Grid item={true} md={6} sm={6} xs={12}>
                    <Card className="card">
                        <CardContent>
                            <img src={project0M} style={{ width: '100%' }} />
                        </CardContent>
                    </Card >
                </Grid>

                <Grid item={true} md={6} sm={6} xs={12}>
                    <Card className="card">
                        <CardContent>
                            <img src={project01} style={{ width: '100%' }} />
                        </CardContent>
                    </Card >
                </Grid>
                <Grid item={true} md={6} sm={6} xs={12}>
                    <Card className="card">
                        <CardContent>
                            <img src={project02} style={{ width: '100%' }} />
                        </CardContent>
                    </Card >
                </Grid>


                <Grid item={true} md={6} sm={6} xs={12}>
                    <Card className="card">
                        <CardContent>
                            <img src={project0A} style={{ width: '100%' }} />
                        </CardContent>
                    </Card >
                </Grid>
                <Grid item={true} md={6} sm={6} xs={12}>
                    <Card className="card">
                        <CardContent>
                            <img src={project0B} style={{ width: '100%' }} />
                        </CardContent>
                    </Card >
                </Grid>

                <Grid item={true} md={6} sm={6} xs={12}>
                    <Card className="card">
                        <CardContent>
                            <img src={project0C} style={{ width: '100%' }} />
                        </CardContent>
                    </Card >
                </Grid>
                <Grid item={true} md={6} sm={6} xs={12}>
                    <Card className="card">
                        <CardContent>
                            <img src={project0D} style={{ width: '100%' }} />
                        </CardContent>
                    </Card >
                </Grid>

                <Grid item={true} md={6} sm={6} xs={12}>
                    <Card className="card">
                        <CardContent>
                            <img src={project0E} style={{ width: '100%' }} />
                        </CardContent>
                    </Card >
                </Grid>
                <Grid item={true} md={6} sm={6} xs={12}>
                    <Card className="card">
                        <CardContent>
                            <img src={project0F} style={{ width: '100%' }} />
                        </CardContent>
                    </Card >
                </Grid>

                <Grid item={true} md={6} sm={6} xs={12}>
                    <Card className="card">
                        <CardContent>
                            <img src={project03} style={{ width: '100%' }} />
                        </CardContent>
                    </Card >
                </Grid>
                <Grid item={true} md={6} sm={6} xs={12}>
                    <Card className="card">
                        <CardContent>
                            <img src={projectCD} style={{ width: '100%' }} />
                        </CardContent>
                    </Card >
                </Grid>

            </Grid>
            <section>
                <ItemGridControl />
            </section>
        </React.Fragment>)
    }



}