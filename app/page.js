import { Container, AppBar, Toolbar, Typography, Button, Box, Grid, Paper } from '@mui/material';
import Head from 'next/head';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>PokéGenius</title>
        <meta name="description" content="Create flashcards from your text" />
        <style>{`body { margin: 0; overflow-x: hidden; }`}</style> {/* Prevent horizontal overflow */}
      </Head>
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}> {/* Blue color */}
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: '#fff' }}>
            PokéGenius
          </Typography>
          <SignedOut>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      <Container maxWidth="100vm" sx={{ 
        backgroundImage: 'linear-gradient(to bottom right, #000, #2e004f)', // Gradient from black to dark purple
        color: '#fff', 
        minHeight: '100vh', 
        px: 0 
      }}>
        <Box sx={{
          textAlign: 'center',
          my: 4,
          mt: 0, // Remove any margin-top
          backgroundColor: '#1a1a1a', // Dark background
          color: '#fff', // White text
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}>
          <Typography variant="h2">Welcome to PokéGenius</Typography>
          <Typography variant="h5">
            The best way to study Pokémon fun facts that nobody asked for
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Get Started
          </Button>
        </Box>

        {/* Features Section */}
        <Box sx={{ my: 6 }}>
          <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', color: '#1976d2' }}> {/* Blue color */}
            Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Paper sx={{ p: 3, textAlign: 'center', height: '100%', backgroundColor: '#333', color: '#fff' }}>
                <Typography variant="h5" sx={{ mb: 2 }}>Customizable Flashcards</Typography>
                <Typography>
                  Easily create and customize flashcards to fit your study needs. Add text, images, and more.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper sx={{ p: 3, textAlign: 'center', height: '100%', backgroundColor: '#333', color: '#fff' }}>
                <Typography variant="h5" sx={{ mb: 2 }}>Spaced Repetition</Typography>
                <Typography>
                  Optimize your learning with spaced repetition algorithms that enhance long-term retention.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper sx={{ p: 3, textAlign: 'center', height: '100%', backgroundColor: '#333', color: '#fff' }}>
                <Typography variant="h5" sx={{ mb: 2 }}>Analytics and Progress Tracking</Typography>
                <Typography>
                  Track your progress and get insights into your study habits to improve efficiency.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Pricing Section */}
        <Box sx={{ my: 6 }}>
          <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', color: '#1976d2' }}> {/* Blue color */}
            Pricing Plans
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {/* Basic Plan */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper sx={{ p: 3, textAlign: 'center', backgroundColor: '#1a1a1a', color: '#fff', borderRadius: 2, boxShadow: 3 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>Basic Plan</Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>$3/month</Typography>
                <Typography sx={{ mb: 2 }}>
                  <strong>Features:</strong>
                        limited flashcards
                        limited storage
                </Typography>
                <Button variant="contained" color="primary">
                  Choose Pro
                </Button>
              </Paper>
            </Grid>

            {/* Premium Plan */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper sx={{ p: 3, textAlign: 'center', backgroundColor: '#1a1a1a', color: '#fff', borderRadius: 2, boxShadow: 3 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>Premium Plan</Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>$7/month</Typography>
                <Typography sx={{ mb: 2 }}>
                  <strong>Features:</strong>
                        Unlimited flashcards
                        Unlimited storage
                </Typography>
                <Button variant="contained" color="primary">
                  Choose Basic
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
