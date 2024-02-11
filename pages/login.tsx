import React from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';
import Layout from '@src/modules/shared/components/layout';
import Login from "@src/modules/courses/components/login/login";
import { Height } from '@mui/icons-material';


const Register: React.FC = () => {

  return (
    <Layout headerlinks={false}>
      <Login />
    </Layout>
  )
}

export default Register;
