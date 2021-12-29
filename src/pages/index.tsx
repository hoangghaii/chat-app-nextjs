import { Box, Container, Typography } from '@mui/material';
import Link from 'common/components/elements/Link/Link';
import CopyRight from 'common/components/pages/CopyRight';
import ProTip from 'common/components/pages/ProTip';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Container>
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
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <CopyRight />
      </Box>
    </Container>
  );
};

export default Home;
