import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import NavbarV2 from './NavbarV2';
import Button from '@mui/material/Button';
import pic1 from './pic1.png';



export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <CssBaseline />
      <NavbarV2 />
      <Box
        sx={{
          marginTop: '80px',
          flexGrow: 1,
          backgroundColor: '#f0f8ff', // Light blue color
        }}
      >
        <Container sx={{ backgroundColor: '#ffffff', flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <List>
                <ListItem>
                  <Box sx={{ width: '100%' }}>
                    <Typography variant='h4'>Mersivity = Sustainability + Technology + Society = a Sustainable Technology Society.</Typography>
                  </Box>
                </ListItem>
                <ListItem><Typography variant="h5">We are live:<Button>Click Here</Button> </Typography> </ListItem>
              </List>
            </Grid>

            <Grid item xs={12}>
              <List>
                <ListItem>
                  <Box sx={{ border: 1, borderColor: 'grey.500', width: '100%', minHeight: 100, padding: 2 }}>
                    <Typography variant="h5">Mersivity is our symbiosis with technology and our surrounding environment. It embodies the above six connections. It helps us: 1. touch and 2. be touched by Earth, water, air (our environment), helping us to 3. sense and 4. control technology that is itself 5. in-touch with, and 6. touches upon the environment.

Many technologies fail in making one or more of these six fundamental connections. The aim of the Sustainable Technology Society (Mersivity) is to ensure that technology evolves to sustain all six of these important connections.</Typography>
                    
                  </Box>
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12}>
              <List>
                <ListItem>
                  <Box sx={{ border: 1, borderColor: 'grey.500', width: '100%', minHeight: 100, padding: 2 }}>
                    <Typography variant="h5">Announcements</Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>JUST RANDOM.</Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>JUST RANDOM</Typography>
                  </Box>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12}>
              <List>
                <ListItem>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <img src={pic1} className="pic1-logo" alt="pic1" />
              
                  </Box>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Bottom Navbar */}
      <Box sx={{ backgroundColor: '#2196f3', color: '#fff', p: 2, textAlign: 'center' }}>
        <Typography variant="body1">Mete Build V1</Typography>
      </Box>
    </Box>
  );
}

