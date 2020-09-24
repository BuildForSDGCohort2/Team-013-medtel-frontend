import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
            flexGrow: 1,
            maxWidth: '100%'
    },
    heroSection: {
        margin: '10% 0',
    },
    roundedBtn: {
        borderRadius: 25,
        padding: "0.5rem 0.8rem"
    },
    heroImage: {
        [theme.breakpoints.up('md')]: {
            maxWidth: "100%"
          },
        width:'100%'
    },
    sectionTwo: {
        margin: '10% 0',
    },
  }));

export default useStyles;