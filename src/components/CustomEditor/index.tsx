import React, { useRef, useState } from 'react';
import {
  convertFromRaw,
  convertToRaw,
  DraftHandleValue,
  Editor,
  EditorState,
  getDefaultKeyBinding,
  RichUtils,
} from 'draft-js';
import { StyledDiv } from '../styledComponents';
import Toolbar from './CustomToolbar';
import 'draft-js/dist/Draft.css';

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

const zoom = '100%';

const CustomEditor = () => {
  const textEditor = useRef<any>(null);
  const focusEditor = () => {
    textEditor.current.focus();
  };
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onBoldClick = (e: any) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const onItalicClick = (e: any) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  const handleKeyCommand = (
    command: string,
    editorState: EditorState,
    eventTimeStamp: number
  ): DraftHandleValue => {
    console.log('COMMAND', command);
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  function myKeyBindingFn(e: any): string | null {
    if (e.key === 'Tab') {
      e.preventDefault();
      const newState = RichUtils.toggleBlockType(editorState, 'PARAGRAPH');

      if (newState) {
        setEditorState(newState);
        return 'handled';
      }

      return 'not-handled';
    }
    return getDefaultKeyBinding(e);
  }

  // console.log('EDITOR STATE', convertToRaw(contentState));

  return (
    <React.Fragment>
      <Toolbar onBoldClick={onBoldClick} onItalicClick={onItalicClick} />
      <StyledDiv
        height={height}
        width={width}
        zoom={zoom}
        onClick={focusEditor}
      >
        <Editor
          ref={textEditor}
          handleKeyCommand={handleKeyCommand}
          editorState={editorState}
          onChange={setEditorState}
          keyBindingFn={myKeyBindingFn}
        />
      </StyledDiv>
    </React.Fragment>
  );
};

export default CustomEditor;
