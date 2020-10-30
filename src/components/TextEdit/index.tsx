import React from 'react';
import TextEditStyles from './TextEditStyles';
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
  const classes = TextEditStyles();
  return (
    <React.Fragment>
      {/* TODO: make this a ToggleButtonGroup / ToggleButtons from material UI */}
      <div>
        <FormatBoldIcon
          className={classes.icon}
          onClick={() => console.log('BOLD')}
        />
        <FormatItalicIcon
          className={classes.icon}
          onClick={() => console.log('ITALICIZE')}
        />
        <FormatUnderlinedIcon
          className={classes.icon}
          onClick={() => console.log('UNDERLINE')}
        />
      </div>
      <div>
        <FormatAlignLeftIcon
          className={classes.icon}
          onClick={() => console.log('LEFT ALIGN')}
        />
        <FormatAlignCenterIcon
          className={classes.icon}
          onClick={() => console.log('CENTER ALIGN')}
        />
        <FormatAlignRightIcon
          className={classes.icon}
          onClick={() => console.log('RIGHT ALIGN')}
        />
        <FormatAlignJustifyIcon
          className={classes.icon}
          onClick={() => console.log('JUSTIFY')}
        />
      </div>
      <div>
        <VerticalAlignBottomIcon
          className={classes.icon}
          onClick={() => console.log('VERTICAL ALIGN BOTTOM')}
        />
        <VerticalAlignCenterIcon
          className={classes.icon}
          onClick={() => console.log('VERTICAL ALIGN CENTER')}
        />
        <VerticalAlignTopIcon
          className={classes.icon}
          onClick={() => console.log('VERTICAL ALIGN TOP')}
        />
      </div>
    </React.Fragment>
  );
};
export default TextEdit;
