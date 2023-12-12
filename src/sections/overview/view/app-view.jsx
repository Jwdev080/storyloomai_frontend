import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Process from '../process';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h2" sx={{ mb: 5, fontFamily: "Manrope" }}>
        Process
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={12} md={12}>
          <Process
            title="Weekly Sales"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
