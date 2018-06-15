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
function SimpleMediaCard3(props:any) {
    const { classes } = props;
    return (
        <React.Fragment>
            <Card className={classes.card}>
                <CardHeader                   
                    title="Makai-Fashion"
                    subheader="Corporate Site" 
                />
                <CardMedia
                    className={classes.media}
                    image="/static/media/Makai-2.3ed500fb.png"
                    title="Corporate Site"
                />
                <CardContent>                    
                    <Typography component="p"  style={{minHeight:45, maxHeight:100}}>
                    Refill Your Soul!<br/>Makai is the Hawaiian for 'On the Way to the Ocean'</Typography>
                </CardContent>
                <CardActions style={{ paddingRight:25,}}>                  
                <Button size="small" color="primary" variant="contained" style={{ marginBottom:15,  marginLeft: 'auto'}}  
                    href="http://www.manuelferrario.com/work/makai-fashion.com" target="blank">
                        Learn More</Button>          <br />
                </CardActions>
            </Card>
        </React.Fragment>
    );
}

export default withStyles(styles)(SimpleMediaCard3);