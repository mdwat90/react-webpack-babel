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
        <FormatBoldIcon onClick={() => console.log('BOLD')} />
        <FormatItalicIcon onClick={() => console.log('ITALICIZE')} />
        <FormatUnderlinedIcon onClick={() => console.log('UNDERLINE')} />
      </div>
      <div>
        <FormatAlignLeftIcon onClick={() => console.log('LEFT ALIGN')} />
        <FormatAlignCenterIcon onClick={() => console.log('CENTER ALIGN')} />
        <FormatAlignRightIcon onClick={() => console.log('RIGHT ALIGN')} />
        <FormatAlignJustifyIcon onClick={() => console.log('JUSTIFY')} />
      </div>
      <div>
        <VerticalAlignBottomIcon
          onClick={() => console.log('VERTICAL ALIGN BOTTOM')}
        />
        <VerticalAlignCenterIcon
          onClick={() => console.log('VERTICAL ALIGN CENTER')}
        />
        <VerticalAlignTopIcon
          onClick={() => console.log('VERTICAL ALIGN TOP')}
        />
      </div>
    </React.Fragment>
  );
};
export default TextEdit;
