import React from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';
import Layout from '@src/modules/shared/components/layout';
import LoginForm from '@src/modules/course/components/Register/Login';
import { Height } from '@mui/icons-material';
import Link from 'next/link';
import Box from '@mui/material/Box';


const Register: React.FC = () => {

  return (
    <Layout headerlinks={false}>
      <LoginForm/>
      <Box
        sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 2}}
      >
        <Link href="/registrarse" color="primary">
          Registrarse
        </Link>
      </Box>
    </Layout>
  )
}

export default Register;
