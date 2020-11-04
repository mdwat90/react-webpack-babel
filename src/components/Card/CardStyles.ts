import { Theme, makeStyles } from '@material-ui/core/styles';

const CardStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: 250,
    minHeight: 150,
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
    fontSize: '60px',
  },
}));

export default CardStyles;
