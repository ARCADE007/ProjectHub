import * as React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import footerImage from "../image/mark.png"



function Footer() {
  return (
    <Grid container >
  <Grid item xs={6}>
    <div style={{width:"100px",height:"100px",marginLeft:"auto",marginRight:"auto"}}><h1>Let's Connect</h1></div>
  </Grid>
  <Grid item xs={6}>
      <Avatar sx={{width:"100px",height:"100px",marginLeft:"auto",marginRight:"auto"}}
  alt="Remy Sharp" src={footerImage} />
  
  </Grid>
</Grid>
  )
}

export default Footer