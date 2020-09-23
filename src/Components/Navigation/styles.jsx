import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    appbarColor: {
        background: '#fff'
    },
    logo: {
        color: theme.palette.primary.main,
        fontSize: "2rem",
        textDecoration: "none",
        fontWeight: "900"
    },
    menulink: {
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1),
        padding: theme.spacing(1.5),
        color: "#000",
        textDecoration: "none",
        display: 'block',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            borderRadius: "7px"
            
        },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));

  export default useStyles;