import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        overflowX: 'hidden',
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
    },
    [theme.breakpoints.up("md")]: {
        root: {
            overflowX: 'hidden',
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            padding: "3% 0 10% 3%"
        },

    }
}));

export default useStyles;