import CategoryList from '@/components/ui/CategoryList/CategoryList';
import { Box, Container, Grid } from '@mui/material';
import React from 'react';

const CategoriesLayout = ({ children }) => {
    return (
        <Box>
            <Container>
                <Grid container spacing={2} sx={{ mt: 5 }}>
                    <Grid xs={12} lg={4} sx={{ p: 3 }}>
                        <CategoryList />
                    </Grid>
                    <Grid xs={12} lg={8} sx={{ p: 4 }}>
                        {children}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CategoriesLayout;