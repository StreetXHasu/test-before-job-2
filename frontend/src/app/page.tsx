'use client';

import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  AppBar, 
  Toolbar,
  Paper 
} from '@mui/material';
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';
import JokeForm from '@/components/JokeForm';

export default function Home() {
  const [currentView, setCurrentView] = useState<'login' | 'register' | 'jokes'>('login');
  const [user, setUser] = useState<any>(null);

  const handleLogin = async (values: { email: string }) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setUser(data.user);
        setCurrentView('jokes');
      } else {
        alert(data.error || 'Login failed');
      }
    } catch (error) {
      alert('An error occurred');
    }
  };

  const handleRegister = async (values: { email: string; password: string }) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setUser(data.user);
        setCurrentView('jokes');
      } else {
        alert(data.error || 'Registration failed');
      }
    } catch (error) {
      alert('An error occurred');
    }
  };

  const handleJokeSubmit = async (values: { category: string }) => {
    try {
      const response = await fetch('/api/jokes/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert('Joke sent successfully!');
      } else {
        alert(data.error || 'Failed to send joke');
      }
    } catch (error) {
      alert('An error occurred');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('login');
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Joke App
          </Typography>
          {user && (
            <>
              <Typography variant="body1" sx={{ mr: 2 }}>
                Welcome, {user.email}!
              </Typography>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        {!user ? (
          <Box>
            <Box sx={{ mb: 4, textAlign: 'center' }}>
              <Button 
                variant={currentView === 'login' ? 'contained' : 'outlined'} 
                onClick={() => setCurrentView('login')}
                sx={{ mr: 2 }}
              >
                Login
              </Button>
              <Button 
                variant={currentView === 'register' ? 'contained' : 'outlined'} 
                onClick={() => setCurrentView('register')}
              >
                Register
              </Button>
            </Box>

            {currentView === 'login' && (
              <LoginForm onSubmit={handleLogin} />
            )}

            {currentView === 'register' && (
              <RegisterForm onSubmit={handleRegister} />
            )}
          </Box>
        ) : (
          <JokeForm onSubmit={handleJokeSubmit} />
        )}
      </Container>
    </Box>
  );
}
