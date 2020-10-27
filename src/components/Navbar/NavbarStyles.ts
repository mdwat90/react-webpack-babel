import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const NavbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolBar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    appBar: {
      zIndex: 1400,
    },
  })
);

export default NavbarStyles;
