import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const DashboardStyles = makeStyles((theme: Theme) => ({
  dashContainer: {
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10vh',
    backgroundColor: '#e0e0e0',
    zoom: '100%',
  },
}));

export default DashboardStyles;
