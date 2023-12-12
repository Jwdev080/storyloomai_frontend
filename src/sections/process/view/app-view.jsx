import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
//import { LinkContainer } from 'react-router-dom'

import Process from '../process'
import Logo1 from '../logo/Story Loom AITM.png'
import Logo2 from '../logo/More than you can imagine_.png'
// ----------------------------------------------------------------------

export default function AppView () {
  return (
    <Grid container>
      <a href={"/"}>
        <Grid item>
          <img src={Logo1} style={{ filter: 'invert(100%)' }} />
          <br />
          <img src={Logo2} style={{ filter: 'invert(100%)' }} />
        </Grid>
      </a>
      <Typography variant='h4' sx={{ mb: 5 }}>
        {/* Making Story */}
      </Typography>
      <Grid container spacing={3}>
        <Grid xs={12} sm={12} md={12}>
          <Process />
        </Grid>
      </Grid>
    </Grid>
  )
}
