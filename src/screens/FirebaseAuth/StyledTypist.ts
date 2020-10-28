import Typist from 'react-typist';
import styled from 'styled-components';

const StyledTypist = styled(Typist)`
  .Cursor {
    display: inline-block;

    opacity: 1;
    animation: blink 1s linear infinite;
    @keyframes blink {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

export default StyledTypist;
