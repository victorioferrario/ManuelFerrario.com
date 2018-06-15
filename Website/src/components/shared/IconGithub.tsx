
import * as React from "react";

import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';

const styles = (theme: any) => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});




import logoGithub from '../../images/Ei-sc-github.svg';

export const IconGithub = () => (
    <section>
        <IconButton color="inherit" href="https://github.com/victorioferrario" target="blank" >
            <img src={logoGithub} className="github-icon" />
        </IconButton>
    </section>);

export default withStyles(styles)(IconGithub);
