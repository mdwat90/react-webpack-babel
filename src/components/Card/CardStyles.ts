import { Theme, makeStyles } from '@material-ui/core/styles';

const CardStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: 275,
    minHeight: 200,
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
    fontSize: '65px',
  },
});

export default CardStyles;
