import * as React from "react";



import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import "./image.css";

// --------------------------------------------------------
//#region [ OverViewControl                                ]

import * as Loadable from "react-loadable";

import { SimpleLoadingComponent } from "./data/SimpleLoader";

export const AsyncSitemap1800MdControl = Loadable({
  loader: () => import("./data/SiteMap1800MDControl"),
  loading: SimpleLoadingComponent
});

export const AsyncSiteMapCADRControl = Loadable({
  loader: () => import("./data/SiteMapCADRControl"),
  loading: SimpleLoadingComponent
});


//#endregion
// --------------------------------------------------------
//#region [ DoctorsAndMemberServicesControl                ]

//#endregion
// --------------------------------------------------------


export const SitemapsForControl1800MD = () => (
  <React.Fragment>
    <AsyncSitemap1800MdControl />
  </React.Fragment>
);

export const SitemapsForControlCADR = () => (
    <React.Fragment>
      <AsyncSiteMapCADRControl />
    </React.Fragment>
);
export default class SiteMapsControl extends React.Component {
    public render() {
        return (
        <React.Fragment>
            <Card className="cardbigger">
                <CardContent>
                    <SitemapsForControl1800MD />
                    <SitemapsForControlCADR />
                </CardContent>
            </Card>
        </React.Fragment>
        );
  }
}
