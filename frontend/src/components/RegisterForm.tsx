'use client';

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { 
  TextField, 
  Button, 
  Box, 
  Typography, 
  Alert,
  Paper 
} from '@mui/material';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

interface RegisterFormProps {
  onSubmit: (values: { email: string; password: string }) => void;
  error?: string;
}

export default function RegisterForm({ onSubmit, error }: RegisterFormProps) {
  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Register
      </Typography>
      
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const { confirmPassword, ...submitValues } = values;
          onSubmit(submitValues);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box sx={{ mb: 2 }}>
              <Field
                as={TextField}
                fullWidth
                name="email"
                label="Email"
                variant="outlined"
                margin="normal"
              />
              <ErrorMessage name="email" component="div">
                {(msg) => (
                  <Typography color="error" variant="caption">
                    {msg}
                  </Typography>
                )}
              </ErrorMessage>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Field
                as={TextField}
                fullWidth
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
              />
              <ErrorMessage name="password" component="div">
                {(msg) => (
                  <Typography color="error" variant="caption">
                    {msg}
                  </Typography>
                )}
              </ErrorMessage>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Field
                as={TextField}
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                variant="outlined"
                margin="normal"
              />
              <ErrorMessage name="confirmPassword" component="div">
                {(msg) => (
                  <Typography color="error" variant="caption">
                    {msg}
                  </Typography>
                )}
              </ErrorMessage>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={isSubmitting}
              sx={{ mt: 2 }}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
} 