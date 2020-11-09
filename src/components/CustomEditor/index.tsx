import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';

const CustomEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div style={{ height: '100%', width: '100%', backgroundColor: 'beige' }}>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
};

export default CustomEditor;
