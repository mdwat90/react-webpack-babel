import { Theme, makeStyles } from '@material-ui/core/styles';

const NewDocStyles = makeStyles((theme: Theme) => ({
  dashContainer: {
    height: '100vh',
    width: '100vw',
  },
  contentContainer: {
    display: 'flex',
    // flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5vw 17vw',
    height: '75vh',
    backgroundColor: '#e0e0e0',
    zoom: '100%',
  },
}));

export default NewDocStyles;
