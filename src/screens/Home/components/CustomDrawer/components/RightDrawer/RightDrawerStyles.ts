import { Theme, makeStyles } from '@material-ui/core/styles';

const RightDrawerStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabsOpen: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabsClosed: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  header: {
    minHeight: '64px',
  },
  toggleIconHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '0px 10px',
    minHeight: '64px',
  },
  tabsContainerOpen: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
    padding: '25px 20px',
  },
  tabsContainerClosed: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
    padding: '25px 10px',
  },
  signOutContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '25px 25px',
  },
  tabRoot: {
    minWidth: '30px',
    width: '30px',
  },
}));

export default RightDrawerStyles;
