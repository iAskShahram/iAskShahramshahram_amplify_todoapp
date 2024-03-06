'use client';

import { Box, Button } from '@mui/material';
import Index from '@/components/pages/Index/Index';
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';
import { useUser } from '@/context/UserContext';

config.aws_appsync_apiKey = process.env.NEXT_PUBLIC_aws_appsync_apiKey!;
Amplify.configure(config);

function Home() {
  const { user_c, setUser_cl } = useUser();
  return (
    <Authenticator>
      {({ signOut, user }) => {
        console.log('Settign user: ', { user }, { user_c });
        if (!user_c?.userId?.length) {
          console.log('in')
          const _user = {
            userId: user?.userId,
            username: user?.username
          };
          setUser_cl(_user);
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
            <Button onClick={signOut}>Signout</Button>
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
