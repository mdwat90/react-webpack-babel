import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { toggleRightDrawer } from '../../actions/main_actions';
import CardStyles from './CardStyles';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';

// import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

interface SimpleCardProps {
  title: any;
  path: any;
  icon: any;
  toggleRightDrawer: (bool: boolean) => any;
}

const SimpleCard = ({
  title,
  path,
  icon,
  toggleRightDrawer,
}: SimpleCardProps) => {
  const classes = CardStyles();

  const navAndClose = () => {
    navigate(path);
    toggleRightDrawer(false);
  };
  return (
    <Card className={classes.root} onClick={() => navAndClose()}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          {title}
        </Typography>
        <h1 className={classes.icon}>{icon}</h1>
      </CardContent>
    </Card>
  );
};

const actionCreators = {
  toggleRightDrawer,
};

export default connect(null, actionCreators)(SimpleCard);
