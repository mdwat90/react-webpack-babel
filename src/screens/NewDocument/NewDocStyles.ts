import { Theme, makeStyles } from '@material-ui/core/styles';

const NewDocStyles = makeStyles((theme: Theme) => ({
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
    height: '100%',
    backgroundColor: '#e0e0e0',
    // backgroundColor: 'red',
    zoom: '100%',
  },
}));

export default NewDocStyles;
