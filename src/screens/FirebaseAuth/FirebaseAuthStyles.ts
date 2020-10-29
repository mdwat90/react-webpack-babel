import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const FirebaseAuthStyles = makeStyles((theme: Theme) => ({
  authContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));

export default FirebaseAuthStyles;
