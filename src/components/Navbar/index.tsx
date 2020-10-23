import React, { useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import { signOut, checkLocalStorageExpiration } from '../../helpers';
import { UserContext } from '../../utils/userContext';

const Navbar = (props: RouteComponentProps) => {
  const { user } = useContext(UserContext);
  const hasPhoto = !!user.photoURL;

  if (document.hidden) {
    console.log('DOCUMENT HIDDEN');
    checkLocalStorageExpiration(props);
  }

  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0.5em 1.5em',
      }}
    >
      <span>
        <button onClick={() => signOut(props)}>SIGN OUT</button>
      </span>
      <span>Welcome {user.displayName}!</span>
      {hasPhoto && (
        <img
          src={user.photoURL}
          alt={`photo of ${user.displayName}`}
          style={{
            height: '50px',
            width: '50px',
            borderRadius: '20px',
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
