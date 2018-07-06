import * as React from 'react';

// import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

export const styles = {
    card: {
        maxWidth: 875,
        minWidth: 200
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
};
export interface IMediaModel{
    image:string;
    link:string;
    subheader:string;
    text:string;
    title:string;    
}

export interface IPropsSimpleCard {   
    classes?: any;
    dataItem:IMediaModel;    
}

export class SimpleCard extends React.Component<IPropsSimpleCard,{}> {
   
    constructor(props:IPropsSimpleCard, state:any){
        super(props);
        this.state = state;
    }
    public render(){        
        return (
        <Card style={{maxWidth: 875, minWidth: 200}}>
                <CardHeader                   
                    title={this.props.dataItem.title}
                    subheader={this.props.dataItem.subheader} 
                />
                <CardMedia
                    style={{ height: 0,paddingTop: '56.25%'}}
                    image={this.props.dataItem.image}
                    title={this.props.dataItem.title}
                />
                <CardContent>                    
                    <Typography component="p" style={{minHeight:45, maxHeight:100}}>
                        {this.props.dataItem.text}
                    </Typography>
                </CardContent>
                <CardActions style={{ paddingRight:20,}}>                   
                    <Button size="large" color="primary" variant="contained" 
                    style={{ marginBottom:15, marginLeft: 'auto',}}  href={this.props.dataItem.link} target="blank">
                        View More</Button><br />
                </CardActions>
        </Card>)
    }
}
export default SimpleCard;