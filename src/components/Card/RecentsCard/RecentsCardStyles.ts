import { Theme, makeStyles } from '@material-ui/core/styles';

const CardStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: 75,
    minHeight: 50,
    // flexGrow: 0.2,
    margin: '10px',
    cursor: 'pointer',
  },

  link: {
    display: 'flex',
    justifyContent: 'center',
  },

  title: {
    textAlign: 'center',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '30px',
  },
}));

export default CardStyles;
