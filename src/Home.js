import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import NavbarV2 from './NavbarV2';
import digitalsea from './digitalsea.png';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  border: '1px solid #ddd',
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 8px rgba(0, 0, 255, 0.2)',
  overflow: 'hidden',
  width: '200px', // Fixed width for consistency
  height: '250px', // Fixed height for consistency
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  position: 'relative',
}));

const ImageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'calc(100% - 48px)', // Adjust height to exclude title height
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

const TitleBox = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  textAlign: 'left',
  height: '48px', // Fixed height for title box
}));

const HeroBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '400px',
  backgroundImage: `url(${digitalsea})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2),
  marginTop: '0px', // Ensure there is no margin at the top
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    padding: theme.spacing(1),
  },
}));

const SectionBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  boxShadow: theme.shadows[3],
  marginBottom: theme.spacing(4),
}));

export default function Home() {
  const [pictures, setPictures] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({});
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    fetchPictures();
  }, []);

  const fetchPictures = async () => {
    const response = await axios.get('http://ec2-3-136-27-242.us-east-2.compute.amazonaws.com/pictures');
    setPictures(response.data);
  };

  const handlePictureUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('picture', selectedFile);
    formData.append('title', title);

    await axios.post('http://ec2-3-136-27-242.us-east-2.compute.amazonaws.com/upload', formData);
    fetchPictures();
    setSelectedFile(null);
    setTitle('');
    setFormOpen(false);
  };

  const handleClickOpen = (picture) => {
    setCurrentImage(picture);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <CssBaseline />
   
      <Box
        sx={{
          marginTop: '0px', // Ensure there is no margin at the top
          flexGrow: 1,
          backgroundColor: '#f0f8ff', // Light blue color
        }}
      >
        <HeroBox>
          <Typography variant="h2" component="div" gutterBottom>
            Mersivity
          </Typography>
          <Typography variant="h4" component="div" gutterBottom>
            Sustainability + Technology + Society = a Sustainable Technology Society.
          </Typography>
          <Button variant="contained" onClick={handleFormOpen} sx={{ mt: 2 }}>
            Upload pictures here
          </Button>
        </HeroBox>
        <Container sx={{ backgroundColor: '#ffffff', flexGrow: 1, mt: 4 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <SectionBox>
                <Typography variant="h5" sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                  Announcements
                </Typography>
                <Divider />
                <List>
                  <ListItem>
                    <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>JUST RANDOM.</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>JUST RANDOM</Typography>
                  </ListItem>
                </List>
              </SectionBox>
            </Grid>

            <Grid item xs={12}>
              <SectionBox>
                <Typography variant="h5" sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                  Current Projects
                </Typography>
                <Divider />
                <Grid container item xs={12} spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                  {pictures.map((picture, index) => (
                    <Grid item key={index}>
                      <StyledBox onClick={() => handleClickOpen(picture)}>
                        <TitleBox>
                          <Typography variant="subtitle1">
                            {picture.title}
                          </Typography>
                        </TitleBox>
                        <ImageBox>
                          <img
                            src={`http://ec2-3-136-27-242.us-east-2.compute.amazonaws.com/${picture.path}`}
                            alt={`uploaded-pic-${index}`}
                          />
                        </ImageBox>
                      </StyledBox>
                    </Grid>
                  ))}
                </Grid>
              </SectionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Bottom Navbar */}
      <Box sx={{ backgroundColor: '#2196f3', color: '#fff', p: 2, textAlign: 'center' }}>
      <Typography sx={{ fontSize: '0.5rem' }}>Mete TEST V1 Mannlab Site</Typography>

      </Box>

      {/* Image Dialog */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {currentImage.title}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <img
            src={`http://ec2-3-136-27-242.us-east-2.compute.amazonaws.com/${currentImage.path}`}
            alt={currentImage.title}
            style={{ width: '100%' }}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>

      {/* Form Dialog */}
      <BootstrapDialog
        onClose={handleFormClose}
        aria-labelledby="form-dialog-title"
        open={formOpen}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="form-dialog-title">
          Upload Picture
          <IconButton
            aria-label="close"
            onClick={handleFormClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handlePictureUpload}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Button variant="contained" component="label">
                  Choose File
                  <input
                    accept="image/*"
                    type="file"
                    hidden
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                  />
                </Button>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormClose}>Cancel</Button>
          <Button type="submit" variant="contained" onClick={handlePictureUpload}>Submit</Button>
        </DialogActions>
      </BootstrapDialog>
    </Box>
  );
}
