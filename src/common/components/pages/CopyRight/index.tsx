import { Typography } from '@mui/material';
import MuiLink from '@mui/material/Link';
import { NextPage } from 'next';

const CopyRight: NextPage = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://mui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
};

export default CopyRight;
