import { Theme, makeStyles } from '@material-ui/core/styles';

const CardStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 200,
    // flexGrow: 0.2,
    margin: '10px',
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
  },

  title: {
    textAlign: 'center',
  },
});

export default CardStyles;
