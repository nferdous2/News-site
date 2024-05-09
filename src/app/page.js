import LatestNews from '@/components/ui/LatestNews/LatestNews';
import SideBar from '@/components/ui/SideBar/SideBar';
import { Grid } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid xs={12} lg={8}>
          <LatestNews />
        </Grid>
        <Grid xs={12} lg={4}>
          <SideBar />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage