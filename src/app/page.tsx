'use client';

import Index from '@/components/pages/Index/Index';
import { useUser } from '@/context/UserContext';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Box, Button } from '@mui/material';
import { Amplify } from 'aws-amplify';
import config from '../amplifyconfiguration.json';

config.aws_appsync_apiKey = process.env.NEXT_PUBLIC_aws_appsync_apiKey!;
Amplify.configure(config);

function Home() {
  const { user_c, setUser_cl } = useUser();

  const handleSignOut = (signOut: any) => {
    localStorage.removeItem('user');
    signOut();
  };
  return (
    <Authenticator>
      {({ signOut, user }) => {
        const _user = JSON.parse(localStorage.getItem('user') || '{}')
        if (_user?.userId != user?.userId) {
          console.log('settignuser')
          localStorage.setItem('user', JSON.stringify(user));
          const _user = {
            userId: user?.userId,
            username: user?.username
          };
          setUser_cl(_user);
        } else {
          console.log('skipping settign user')
        }
        return (
          <Box
            component={'section'}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: '36px'
            }}>
            <Button onClick={() => handleSignOut(signOut)}>Signout</Button>
            {/* <Button>Signout</Button> */}
            <Index />
          </Box>
        );
      }}
    </Authenticator>
  );
}

export default withAuthenticator(Home);
// export default Home;
