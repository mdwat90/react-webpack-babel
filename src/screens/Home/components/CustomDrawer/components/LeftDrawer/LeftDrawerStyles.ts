import { Theme, makeStyles } from '@material-ui/core/styles';

const LeftDrawerStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  header: {
    minHeight: '64px',
  },
  toggleIconHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: '0px 10px',
    minHeight: '64px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
    padding: '25px 20px',
  },
  textEditContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10vh',
    padding: '25px 20px',
  },
}));

export default LeftDrawerStyles;
