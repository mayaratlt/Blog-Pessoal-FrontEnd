import React from 'react';

import InstagramIcon  from "@material-ui/icons/Instagram";
import FacebookIcon  from "@material-ui/icons/Facebook";
import LinkedInIcon  from "@material-ui/icons/LinkedIn";
import {Grid, Box, Typography } from "@material-ui/core";

function Footer(){
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#0096C7", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center" >
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" >
                            <a href="http://facebook.com.br/" target="blank" >
                                <FacebookIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="http://instagram.com.br/%22%3E/">
                                <InstagramIcon style={{ fontSize: 60, color: "white" }} target="blank" />
                            </a>
                            <a href="http://linkedin.com.br/%22%3E/">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} target="blank" />
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
    
}

export default Footer;