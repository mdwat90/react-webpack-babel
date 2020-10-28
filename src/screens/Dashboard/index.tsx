import React, { useContext } from 'react';
import { RouteComponentProps, Redirect } from '@reach/router';
import { UserContext } from '../../utils/userContext';
import Navbar from '../../components/Navbar';

import 'firebase/auth';
import Textarea from '../../components/Textarea';
import Paper from '../../components/Paper';

function getDocumentPPI() {
  var elem = document.createElement('div');
  elem.style.width = '1in';
  document.body.appendChild(elem);
  var ppi = elem.offsetWidth;
  document.body.removeChild(elem);
  return ppi;
}

console.log('Your PPI is ' + getDocumentPPI());

const getWidthInPixels = (paperWidth: number) => {
  const width = paperWidth * getDocumentPPI();
  return width;
};
const getHeightInPixels = (paperHeight: number) => {
  const height = paperHeight * getDocumentPPI();
  return height;
};

const height = getHeightInPixels(8.3);
const width = getWidthInPixels(5.8);

const Dashboard = (props: RouteComponentProps) => {
  const { user } = useContext(UserContext);

  const localStorageUID = localStorage.getItem('bulletinUID');

  if (!localStorageUID) {
    return <Redirect noThrow to="/" />;
  }

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <div>
        <Navbar {...props} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          padding: '10vh',
          backgroundColor: '#e0e0e0',
        }}
      >
        <Paper height={height} width={width}>
          <Textarea height={height} width={width}></Textarea>
        </Paper>
      </div>
    </div>
  );
};

export default Dashboard;
