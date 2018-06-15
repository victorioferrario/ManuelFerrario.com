import * as React from 'react';

import { withStyles } from '@material-ui/core/styles';

// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

// import Icon from '@material-ui/core/Icon';
// avatar={
//     <Avatar aria-label="Recipe" className={classes.avatar}>
//         <Icon>link</Icon>
//     </Avatar>
// }

import Typography from '@material-ui/core/Typography';

export const styles = {
    avatar: {
        backgroundColor: "#2E7D32",
      },
    card: {
        maxWidth: 875,
        minWidth: 200
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
};
function SimpleMediaCard4(props:any) {
    const { classes } = props;
    return (        
        <React.Fragment>
            <Card className={classes.card}>
            <CardHeader                   
                    title="BikiniBoatWash.com"                     
                    subheader="Corporate Site" 
                />
                <CardMedia
                    className={classes.media}
                    image="/static/media/BoatWash-1.8c697b37.png"
                    title="Home Page"
                />
                <CardContent>                   
                    <Typography component="p" style={{minHeight:45, maxHeight:100}}>
                    Exterior & interior cleaning, party services and much much more!
                    We Put the "Tail in Detail!"</Typography>
                </CardContent>
                <CardActions style={{ paddingRight:25,}}>                   
                    <Button size="small" color="primary" variant="contained" style={{ marginBottom:15,  marginLeft: 'auto'}}  
                    href="http://www.manuelferrario.com/work/bikiniboatwash.com" target="blank">
                        Learn More</Button><br />
                </CardActions>
            </Card>
        </React.Fragment>
    );
}

export default withStyles(styles)(SimpleMediaCard4);