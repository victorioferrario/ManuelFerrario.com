import * as React from "react";

import { Link, Route, Switch } from "react-router-dom";

import Fade from "@material-ui/core/Fade";
import Icon from "@material-ui/core/Icon";
import Slide from "@material-ui/core/Slide";

import {
  IPropsTabControl,
  IStateTabControl,
  TabsControl
} from "../components/tabs/MediaTabs";
import { ITitleProps, TitleComponent } from "../components/shared/PageTitle";

import ScrollTopControl from "../components/shared/ScrollTopControl";

import EnterpriseView from "./sub-media/enterprise";

import SiteMapsControl from "./sub-media/sitemaps";

import WorkControl from "./sub-media/work";

import { MediaViewer } from "../components/shared/MediaViewer";
import { PdfViewer } from "../components/shared/PdfViewer";


//#region [ WebPage            ]

export const WebPage = (props: IPropsTabControl, state: IStateTabControl) => (
  <Fade in={true}>
    <section>
      <h2>Website & Website Applications</h2>
      <WorkControl />
    </section>
  </Fade>
);

//#endregion

export const DiagramsPage = () => (
  <Fade in={true}>
    <section>
      <EnterpriseView />
    </section>
  </Fade>
);

export const WireframesPage = () => (
  <Fade in={true}>
    <section>
      <h2>Site Maps</h2>
      <SiteMapsControl />
    </section>
  </Fade>
);
export const UIs = () => (
  <Fade in={true}>
    <section>
      <h2>Video Showcase</h2>
      <div>
        <MediaViewer />
      </div>
    </section>
  </Fade>
);
export const WireframeViewer = () => (
  <Fade in={true}>
    <section>
      <h2>Wireframes</h2>
      <div>
        <PdfViewer />
      </div>
    </section>
  </Fade>
);
export const DefaultPage = () => (
  <Fade in={true}>
    <section>
      <article>
        <Icon style={{ fontSize: 48 }}>transform</Icon>
        <Icon style={{ fontSize: 48 }}>ballot</Icon>
        <Icon style={{ fontSize: 48 }}>important_devices</Icon>
      </article>
    </section>
  </Fade>
);
export const ChildLink01 = (props: any) => (
  <Link to="/media/1" {...props}>
    HI-FI Wireframes
  </Link>
);

export const ChildLink02 = (props: any) => (
  <Link
    color="inherit"
    to="/media/2"
    {...props}
    style={{ fontSize: "0.8125rem" }}
  >
    Enterprise Docs
  </Link>
);

export const ChildLink03 = (props: any) => (
  <Link to="/media/3" {...props}>
    HI-FI Wireframes
  </Link>
);

export const MyLinkToButton = (props: any) => <Link to="/media/4" {...props} />;

export const ChildLink04 = (props: any) => (
  <Link to="/media/1">Enterprise Docs</Link>
);

export default class MediaPage extends React.Component<{}, {}> {
  public titleProps: ITitleProps = {
    label: "Media"
  };
  public handleScroll(arg: number) {
    return null;
  }
  public render() {
    const temp: IPropsTabControl = {
      classes: "",
      message: "hello"
    };
    return (
      <section>
        <Fade in={true}>
          <React.Fragment>
            <section className="app-page-header">
              <TitleComponent
                label={this.titleProps.label}
                children={
                  <TabsControl
                    classes={temp}
                    childUX={ChildLink04}
                    childDocs={ChildLink02}
                    childWireFrames={ChildLink03}
                  />
                }
              />
            </section>
          </React.Fragment>
        </Fade>
        <Slide
          in={true}
          direction="up"
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <section className="app-page-content">
            <Switch>
              <Route exact={true} path="/media" component={DefaultPage} />
              <Route exact={true} path="/media/1" component={WebPage} />
              <Route exact={true} path="/media/2" component={DiagramsPage} />
              <Route exact={true} path="/media/3" component={WireframesPage} />
              <Route exact={true} path="/media/4" component={UIs} />
              <Route exact={true} path="/media/5" component={WireframeViewer} />
            </Switch>
          </section>
        </Slide>
        <ScrollTopControl
          containerId="appContentId"
          delayInMs={33.0}
          scrollStepInPx={50}
        />
      </section>
    );
  }
}
