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
function SimpleMediaCard2(props:any) {
    const { classes } = props;
    return (
        <React.Fragment>
            <Card className={classes.card}>
            <CardHeader                   
                    title="Kish-Law.com"
                    subheader="Corporate Site" 
                />
                <CardMedia
                    className={classes.media}
                    image="/static/media/Kish-1.8d3c776f.png"
                    title="Corporate Site"
                />
                <CardContent>                    
                    <Typography component="p" style={{minHeight:45, maxHeight:100}}>
                    Serving Palm Beach, Miami-Dade, and Broward counties in South Florida and beyond.
          </Typography>
                </CardContent>
                <CardActions style={{ paddingRight:25,}}>
                <Button size="small" color="primary" variant="contained" style={{ marginBottom:15 , marginLeft: 'auto'}}  
                    href="http://www.manuelferrario.com/work/kish-law.com" target="blank">
                        Learn More</Button>          <br />
                </CardActions>
            </Card>
        </React.Fragment>
    );
}

export default withStyles(styles)(SimpleMediaCard2);