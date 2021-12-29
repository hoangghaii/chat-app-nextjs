import { Container, Box, Typography, Button } from '@mui/material';
import Link from 'common/components/elements/Link/Link';
import CopyRight from 'common/components/pages/CopyRight';
import ProTip from 'common/components/pages/ProTip';
import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Box maxWidth="sm">
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the home page
          </Button>
        </Box>
        <ProTip />
        <CopyRight />
      </Box>
    </Container>
  );
};

export default About;
