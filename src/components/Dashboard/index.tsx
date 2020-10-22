import React, { useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import { UserContext } from '../../utils/userContext';
import { signOut, checkLocalStorageExpiration } from '../../helpers';
import 'firebase/auth';

const Dashboard = (props: RouteComponentProps) => {
  const { user } = useContext(UserContext);

  const hasPhoto = !!user.photoURL;

  checkLocalStorageExpiration(props);

  return (
    <div>
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
    </div>
  );
};

export default Dashboard;
