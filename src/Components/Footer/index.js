import React from 'react'
import { Typography, Grid } from "@material-ui/core";
import useStyles from './styles';


const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container justify="space-between">
                <Grid item xs={12} lg={6} alignItems="flex-start" className={classes.firstFooterGrid}>
                    <Typography variant="h5" style={{textAlign:"center"}} fontWeight="fontWeightBold">MedTel</Typography>
                    <Typography style={{textAlign:"center"}} >
                        We provide a telemedecine affrodable platefrom for everyone
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={3} alignItems="flex-end">
                    <Typography variant="h5" fontWeight="fontWeightBold">Help</Typography>
                    <Typography>Help Center</Typography>
                    <Typography>FAQS</Typography>
                    <Typography>Useful Links</Typography>
                </Grid>
                <Grid item xs={12} lg={3} alignItems="flex-end">
                    <Typography variant="h5" fontWeight="fontWeightBold">Help</Typography>
                    <Typography>Help Center</Typography>
                    <Typography>FAQS</Typography>
                    <Typography>Useful Links</Typography>
                </Grid>
            </Grid>
        </div>
    )
}
export default Footer

