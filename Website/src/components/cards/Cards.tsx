import * as React from 'react';

import { withStyles } from '@material-ui/core/styles';

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
function SimpleMediaCard(props:any) {
    const { classes } = props;
    return (
        <React.Fragment>
           
            <Card className={classes.card}>
            <CardHeader                   
                    title="Lincoln-Group.com"
                    subheader="Corporate Site" 
                />
                <CardMedia
                    className={classes.media}
                    image="/static/media/LincolnGroup-1.f7f6b1dc.png"
                    title="Hpme Page"
                />
                <CardContent>                    
                    <Typography component="p" style={{minHeight:45, maxHeight:100}}>
                        We produce innovative designs & services that meet every customer’s evolving needs.
                </Typography>
                </CardContent>
                <CardActions style={{ paddingRight:25,}}>                   
                    <Button size="small" color="primary" variant="contained" style={{ marginBottom:15, marginLeft: 'auto',}}  
                    href="http://www.manuelferrario.com/work/lincoln-group.com" target="blank">
                        Learn More</Button>          <br />
                </CardActions>
            </Card>
        </React.Fragment>
    );
}

export default withStyles(styles)(SimpleMediaCard);