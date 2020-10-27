import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const drawerWidth = '225px';
const DrawerStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
  })
);

export default DrawerStyles;
