import React from 'react';
import { RouteComponentProps, Redirect } from '@reach/router';
import Navbar from '../../components/Navbar';
import DashboardStyles from './DashboardStyles';

import 'firebase/auth';
import Textarea from '../../components/Textarea';
import Document from '../../components/Document';

function getDocumentPPI() {
  var elem = document.createElement('div');
  elem.style.width = '1in';
  document.body.appendChild(elem);
  var ppi = elem.offsetWidth;
  document.body.removeChild(elem);
  return ppi;
}

console.log('PPI:::', getDocumentPPI());

const ppi = getDocumentPPI();

const getWidthInPixels = (paperWidth: number) => {
  const pixelWidth = paperWidth * ppi;
  return pixelWidth;
};
const getHeightInPixels = (paperHeight: number) => {
  const pixelHeight = paperHeight * ppi;
  return pixelHeight;
};

const height = getHeightInPixels(11);
const width = getWidthInPixels(8.5);

const Dashboard = (props: RouteComponentProps) => {
  const classes = DashboardStyles();

  const localStorageUID = localStorage.getItem('bulletinUID');

  if (!localStorageUID) {
    return <Redirect noThrow to="/" />;
  }

  return (
    <div className={classes.dashContainer}>
      <div>
        <Navbar {...props} />
      </div>
      <div className={classes.contentContainer}>
        <Document type={'default'} height={height} width={width} />
      </div>
    </div>
  );
};

export default Dashboard;
