import { RouteComponentProps } from '@reach/router';
import React from 'react';
import Document from '../../components/Document';
import Navbar from '../../components/Navbar';

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

// TODO: manage selected height/width (document 'type') in left drawer
const height = getHeightInPixels(11);
const width = getWidthInPixels(8.5);

const NewDocument = (props: RouteComponentProps) => {
  console.log('RENDERING NEW DOC');
  return (
    <div>
      <Document type={'default'} height={height} width={width} />
    </div>
  );
};

export default NewDocument;
