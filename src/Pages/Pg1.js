import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container'
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import { sizing } from '@mui/system';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";



 //below would be part of the controller

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Pg1() {
   
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
    };
  



//the elements in the return are the views, any functions outside of  the return are the models
  return (


    
    <Box >
      
      <Typography variant="h4">Page 1</Typography>
      <Grid container spacing={1}>


        <Grid item xs={0.5} > 
            <Box sx={{ bgcolor: '#bbdefb', height: '100vh' }} />
        </Grid>

        <Grid item xs={11}>
        <Container >
        <List>
        <ListItem>
      <Button align='right' variant='contained' href='/Home'>Back</Button> 
      </ListItem>
        <Divider light />
      <ListItem >
      <Box sx={{ border: 1, borderColor: 'grey.500', width: 300,height: 300 }}>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>Week 1 Content</Typography>
      <Button style={{ width: 279}}>Click Here to view week 1 content</Button>
      </Box>
      <Box sx={{ border: 1, borderColor: 'grey.500', width: 300,height: 300 }}>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>Week 2 Content</Typography>
      <Button style={{ width: 279}}>Click Here to view week 2 content</Button>
      </Box>
      <Box sx={{ border: 1, borderColor: 'grey.500', width: 300,height: 300 }}>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>Week 3 Content</Typography>
      <Button style={{ width: 279}}>Click Here to view week 3 content</Button>
      </Box>
      <Box sx={{ border: 1, borderColor: 'grey.500', width: 300,height: 300 }}>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>Week 4 Content</Typography>
      <Button component={Link} to= "/Pg2" style={{ width: 279}}>Click Here to view week 4 content</Button>
      </Box>
           
      </ListItem>
        </List>

      

      </Container>
        </Grid>



        


      </Grid>
    </Box>
  );
}