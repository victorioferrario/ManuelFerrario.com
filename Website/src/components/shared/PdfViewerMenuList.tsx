
import * as React from "react";
import {MediaItem} from "../../models/MediaItem";

import Divider from '@material-ui/core/Divider';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Icon from '@material-ui/core/Icon';

import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
export interface IPropsPdfViewerMenuListControl{
    name:string;
    onHandleClick: (side: any, open: any) => void;
}
export interface IStatePdfViewerMenuListControl{
    content:string;
}
export const PdfList:MediaItem[]= [
    new MediaItem("1800MD", "Admin Dashboard", "1800MD.Wireframes.Administrator.pdf"),
    new MediaItem("1800MD", "Member Services", "1800MD.Wireframes.MemberServices.pdf"),        
    new MediaItem("1800MD", "Physician Dashboard", "1800MD.Wireframes.Physician.pdf"),
    new MediaItem("Shea Homes", "My Trilogy Dashboard", "Shea.Wireframes.pdf"),
    new MediaItem("Consult A Doctor", "My Practice Setup", "CADR.MyPractice.SetUp-Full.pdf"),
    new MediaItem("Consult A Doctor", "Members Labs", "CADR.Members.Labs.pdf")];
    
export const PdfList2:MediaItem[]= [
    new MediaItem("CADR", "MyPractice Setup", "CADR.MyPractice.Architecture.pdf"),
    new MediaItem("1800MD", "Shared Modules", "1800MD.Modules.pdf"),        
    new MediaItem("1800MD", "Security Recovery Workflow", "1800MD.Security.Password.Recovery.pdf"),
    new MediaItem("1800MD", "System Authentication", "1800MD.SystemAuthentication.V2.pdf")   ,
    new MediaItem("Shea Homes", "Corporate", "SheaHomes.Corporate.pdf") ,
    new MediaItem("Shea Homes", "Community Front-end", "SheaHomes.Community_FrontEnd.pdf") ,
    new MediaItem("Shea Homes", "Community Back-end", "SheaHomes.Community_BackEnd.pdf") ,
    new MediaItem("Shea Homes", "Community Calendar", "SheaHomes.Community_Calendar.pdf") 
];

export class PdfViewerMenuListControl extends React.Component<IPropsPdfViewerMenuListControl, IStatePdfViewerMenuListControl>{

 constructor(props:IPropsPdfViewerMenuListControl, state:IStatePdfViewerMenuListControl){
        super(props);
    }

   public render(){
        return(
            <React.Fragment>
            <MenuList style={{ marginTop: 2, paddingTop: 0, paddingBottom: 0}}>
                <MenuItem className="menuItem"
                    onClick={this.props.onHandleClick.bind(this,PdfList[0].DocumentUrl)}>   
                    <ListItemIcon >
                        <Icon>play_arrow</Icon>
                    </ListItemIcon>
                    <ListItemText inset={true} primary={PdfList[0].ClientName + " " + PdfList[0].DocumentTitle} className="ListItem-XM"/>                            
                </MenuItem>
                <MenuItem className="menuItem"
                    onClick={this.props.onHandleClick.bind(this,PdfList[1].DocumentUrl)}>   
                    <ListItemIcon >
                        <Icon>play_arrow</Icon>
                    </ListItemIcon>
                    <ListItemText inset={true} primary={PdfList[1].ClientName + " " + PdfList[1].DocumentTitle} className="ListItem-XM"/>                            
                </MenuItem>
                <MenuItem className="menuItem"
                    onClick={this.props.onHandleClick.bind(this,PdfList[2].DocumentUrl)}>   
                    <ListItemIcon >
                        <Icon>play_arrow</Icon>
                    </ListItemIcon>
                    <ListItemText inset={true} primary={PdfList[2].ClientName + " " + PdfList[2].DocumentTitle} className="ListItem-XM"/>                            
                </MenuItem>
                <MenuItem className="menuItem"
                    onClick={this.props.onHandleClick.bind(this,PdfList[3].DocumentUrl)}>   
                    <ListItemIcon >
                        <Icon>play_arrow</Icon>
                    </ListItemIcon>
                    <ListItemText inset={true} primary={PdfList[3].ClientName + " " + PdfList[3].DocumentTitle} className="ListItem-XM"/>                            
                </MenuItem>
                <MenuItem className="menuItem"
                    onClick={this.props.onHandleClick.bind(this,PdfList[4].DocumentUrl)}>   
                    <ListItemIcon >
                        <Icon>play_arrow</Icon>
                    </ListItemIcon>
                    <ListItemText inset={true} primary={PdfList[4].ClientName + " " + PdfList[4].DocumentTitle} className="ListItem-XM"/>                            
                </MenuItem>
                <MenuItem className="menuItem"
                    onClick={this.props.onHandleClick.bind(this,PdfList[5].DocumentUrl)}>   
                    <ListItemIcon >
                        <Icon>play_arrow</Icon>
                    </ListItemIcon>
                    <ListItemText inset={true} primary={PdfList[5].ClientName + " " + PdfList[5].DocumentTitle} className="ListItem-XM"/>                            
                </MenuItem>
            </MenuList>
            <Divider />
            <h4 style={{ paddingLeft: 25, paddingTop: 35, marginTop:'-10px'}}>Architecture Diagrams</h4>
            <Divider />
            <MenuList style={{ marginTop: 2, paddingTop: 0, paddingBottom: 0}}>
                <MenuItem className="menuItem"
                    onClick={this.props.onHandleClick.bind(this,PdfList2[0].DocumentUrl)}>   
                    <ListItemIcon >
                        <Icon>play_arrow</Icon>
                    </ListItemIcon>
                    <ListItemText inset={true} primary={PdfList2[0].ClientName + " " + PdfList2[0].DocumentTitle} className="ListItem-XM"/>                            
                </MenuItem>
                <MenuItem className="menuItem"
                    onClick={this.props.onHandleClick.bind(this,PdfList2[1].DocumentUrl)}>   
                    <ListItemIcon >
                        <Icon>play_arrow</Icon>
                    </ListItemIcon>
                    <ListItemText inset={true} primary={PdfList2[1].ClientName + " " + PdfList2[1].DocumentTitle} className="ListItem-XM"/>                            
                </MenuItem>
                <MenuItem className="menuItem"
                    onClick={this.props.onHandleClick.bind(this,PdfList2[2].DocumentUrl)}>   
                    <ListItemIcon >
                        <Icon>play_arrow</Icon>
                    </ListItemIcon>
                    <ListItemText inset={true} primary={PdfList2[2].ClientName + " " + PdfList2[2].DocumentTitle} className="ListItem-XM"/>                            
                </MenuItem>
                <MenuItem className="menuItem"
                    onClick={this.props.onHandleClick.bind(this,PdfList2[3].DocumentUrl)}>   
                    <ListItemIcon >
                        <Icon>play_arrow</Icon>
                    </ListItemIcon>
                    <ListItemText inset={true} primary={PdfList2[3].ClientName + " " + PdfList2[3].DocumentTitle} className="ListItem-XM"/>                            
                </MenuItem>
                <MenuItem className="menuItem"
                    onClick={this.props.onHandleClick.bind(this,PdfList2[4].DocumentUrl)}>   
                    <ListItemIcon >
                        <Icon>play_arrow</Icon>
                    </ListItemIcon>
                    <ListItemText inset={true} primary={PdfList2[4].ClientName + " " + PdfList2[4].DocumentTitle} className="ListItem-XM"/>                            
                </MenuItem>
                <MenuItem className="menuItem"
                    onClick={this.props.onHandleClick.bind(this,PdfList2[5].DocumentUrl)}>   
                    <ListItemIcon >
                        <Icon>play_arrow</Icon>
                    </ListItemIcon>
                    <ListItemText inset={true} primary={PdfList2[5].ClientName + " " + PdfList2[5].DocumentTitle} className="ListItem-XM"/>                            
                </MenuItem>
                <MenuItem className="menuItem"
                    onClick={this.props.onHandleClick.bind(this,PdfList2[6].DocumentUrl)}>   
                    <ListItemIcon >
                        <Icon>play_arrow</Icon>
                    </ListItemIcon>
                    <ListItemText inset={true} primary={PdfList2[6].ClientName + " " + PdfList2[6].DocumentTitle} className="ListItem-XM"/>                            
                </MenuItem>
                <MenuItem className="menuItem"
                    onClick={this.props.onHandleClick.bind(this,PdfList2[7].DocumentUrl)}>   
                    <ListItemIcon >
                        <Icon>play_arrow</Icon>
                    </ListItemIcon>
                    <ListItemText inset={true} primary={PdfList2[7].ClientName + " " + PdfList2[7].DocumentTitle} className="ListItem-XM"/>                            
                </MenuItem>
            </MenuList>
        </React.Fragment>)
    }

 }
