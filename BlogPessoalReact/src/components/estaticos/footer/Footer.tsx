import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';
import "./Footer.css"

function Footer () {
return (
    <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="box1">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/ramon.siqueira80/" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon className="redes" />
                            </a>
                            <a href="https://www.instagram.com/ramon_as80/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon className="redes" />
                            </a>
                            <a href="https://www.linkedin.com/in/ramonsiqueira80/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon className="redes" />
                            </a>
                        </Box>
                    </Box>
                    <Box className="box2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2023 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://github.com/Ramon-Siqueira" rel="noopener noreferrer">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Ramon Siqueira</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
)

}

export default Footer;