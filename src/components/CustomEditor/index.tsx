import React, { useRef, useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import { StyledDiv } from '../styledComponents';

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

const CustomEditor = () => {
  const textEditor = useRef<any>(null);
  const focusEditor = () => {
    textEditor.current.focus();
  };
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <StyledDiv height={height} width={width} onClick={focusEditor}>
      <Editor
        ref={textEditor}
        editorState={editorState}
        onChange={setEditorState}
      />
    </StyledDiv>
  );
};

export default CustomEditor;
