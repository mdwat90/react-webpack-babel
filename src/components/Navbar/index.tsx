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
    <nav>
      <button onClick={() => signOut(props)}>SIGN OUT</button>
      <span>Welcome {user.displayName}!</span>
      <span>
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
      </span>
    </nav>
  );
};

export default Navbar;
