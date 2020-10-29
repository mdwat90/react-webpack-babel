import React from 'react';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import VerticalAlignCenterIcon from '@material-ui/icons/VerticalAlignCenter';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';

const TextEdit = () => {
  return (
    <React.Fragment>
      <div>
        <FormatBoldIcon />
        <FormatItalicIcon />
        <FormatUnderlinedIcon />
      </div>
      <div>
        <FormatAlignLeftIcon />
        <FormatAlignCenterIcon />
        <FormatAlignRightIcon />
        <FormatAlignJustifyIcon />
      </div>
      <div>
        <VerticalAlignBottomIcon />
        <VerticalAlignCenterIcon />
        <VerticalAlignTopIcon />
      </div>
    </React.Fragment>
  );
};
export default TextEdit;
