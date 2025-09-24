import React, { useState } from 'react';
import { Container, AppBar, Toolbar, Typography, Box, Paper, TextField, Button, Link } from '@mui/material';

function App() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    enquiry: '',
  });

  // Indian mobile number validation regex (starts with 6-9, 10 digits)
  const mobileRegex = /^[6-9]\d{9}$/;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mobileRegex.test(form.mobile)) {
      alert('Please enter a valid Indian mobile number.');
      return;
    }

    // Email is optional, so no validation required unless you want to check if entered
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Enquiry submitted!');
    setForm({ name: '', mobile: '', email: '', enquiry: '' });
  };

  return (
    <Container maxWidth="md">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Vision RealTech
          </Typography>
          <Link href="#featured" color="inherit" underline="none" sx={{ mx: 2 }}>
            Featured
          </Link>
          <Link href="#contact" color="inherit" underline="none" sx={{ mx: 2 }}>
            Contact
          </Link>
        </Toolbar>
      </AppBar>
      <Box my={4} id="featured">
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Featured Properties
          </Typography>
          <Typography>
            Explore our latest listings and find your dream home.
          </Typography>
        </Paper>
      </Box>
      <Box my={4} id="contact">
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Typography>
            Have questions? Reach out to our team for assistance.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Contact Now
          </Button>
        </Paper>
      </Box>
      <Box my={6}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            Vision RealTech Enquiry
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Mobile No"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              margin="normal"
              required
              type="tel"
            />
            <TextField
              fullWidth
              label="Email ID (optional)"
              name="email"
              value={form.email}
              onChange={handleChange}
              margin="normal"
              type="email"
            />
            <TextField
              fullWidth
              label="Enquiry"
              name="enquiry"
              value={form.enquiry}
              onChange={handleChange}
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Submit Enquiry
            </Button>
          </form>
        </Paper>
      </Box>
      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Vision RealTech. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
}

export default App;