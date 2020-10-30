import { Theme, makeStyles } from '@material-ui/core/styles';

const DashboardStyles = makeStyles((theme: Theme) => ({
  dashContainer: {
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5vw 17vw',
    backgroundColor: '#e0e0e0',
    zoom: '100%',
  },
}));

export default DashboardStyles;
