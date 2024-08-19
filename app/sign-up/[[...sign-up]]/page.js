import { SignIn } from "@clerk/nextjs";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Link from 'next/link';

export default function SignUpPage() {

    const backgroundColor = '#1e1e1e'; // Color for both AppBar and Box

    return (
        <Box
            sx={{
                background: 'linear-gradient(to bottom, black, #2c003e)', // Gradient background
                minHeight: '100vh', // Full viewport height
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Container maxWidth="sm">
                <AppBar position="static" sx={{ backgroundColor: backgroundColor  }}>
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            PokéGenius
                        </Typography>
                        <Button color="inherit">
                            <Link href="/signup" passHref>
                                Sign In
                            </Link>
                        </Button>

                    </Toolbar>
                </AppBar>

                <Box 
                    display="flex" 
                    flexDirection="column" 
                    alignItems="center" 
                    justifyContent="center" 
                    mt={4}
                    py={8} // Padding to make the column longer
                    sx={{ // Style for the sign-in container
                        backgroundColor: '#1e1e1e', // Dark background color
                        padding: '20px', // Padding around the SignIn component
                        borderRadius: '8px', // Rounded corners
                        boxShadow: 3 // Box shadow for better visibility
                    }}
                >
                    <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>Sign Up</Typography>
                    <SignIn />
                </Box>
            </Container>
        </Box>
    );
}
