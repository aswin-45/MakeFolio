import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import SchoolIcon from '@mui/icons-material/School';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { color } from '@mui/system';
import MainNav from './mainNav';
import { ForkLeft } from '@mui/icons-material';
import Navbar from './navbar';
import { useSelector } from 'react-redux';
import { selectUser } from './Redux/userslice';


const ProfilePage = () => {
    const user = useSelector(selectUser)
    console.log(user);
  return (
    <div className='xyz'>
    <MainNav/>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar sx={{ width: 100, height: 100, mb: 2 }} />
      <br />
      <div alignItems ='right'>
      <Typography variant="h4" component="div" gutterBottom>
        {user? user.username: ''}
      </Typography>
      <br/>
      <Typography variant="subtitle1"  gutterBottom color='#fafafa'>
        <EmailIcon>Email</EmailIcon>
      </Typography>
      <br/>
      <Typography variant="subtitle1" gutterBottom>
        <CakeIcon>Date of Birth</CakeIcon>
      </Typography>
      <br/>
      <Typography variant="h5" component="div" mt={4} mb={2}>
        <SchoolIcon>Educational Qualification</SchoolIcon>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Skills
      </Typography>
      <br/>
      </div>
      <Box sx={{/* display: 'flex',*/ mt: 47 }}>
        <LinkedInIcon sx={{ mr: 2 }} />
        <InstagramIcon sx={{ mr: 2 }} />
        <TwitterIcon sx={{ mr: 2 }} />
        <FacebookIcon />
      </Box>
    </Box>
    </div>
  );
};

export default ProfilePage;