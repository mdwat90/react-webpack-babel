import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardStyles from './CardStyles';
import { Link } from '@reach/router';

import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

interface SimpleCardProps {
  title: any;
  path: any;
}

export default function SimpleCard({ title, path }: SimpleCardProps) {
  const classes = CardStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          {title}
        </Typography>
        <Link to={path} className={classes.link}>
          <h1>📃 </h1>
        </Link>
      </CardContent>
    </Card>
  );
}
