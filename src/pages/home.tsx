import React, { useState } from 'react';

// Mui imports
import Grid from '@material-ui/core/Grid';
import { ReactComponent } from '*.svg';
import { jsxElement } from '@babel/types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Custom components
import ProductPreview from '../components/ProductPreview';

export default function Home() {

    const [products, setProducts] = useState([
        {   
            "id": 13241351,
            "title": "First product",
            "createdAt": "2019-10-01"
        },
        {
            "id": 2353423,
            "title": "Second product",
            "createdAt": "2019-11-01"
        },
        {
            "id": 23432424,
            "title": "Third product",
            "createdAt": "2019-11-11"
        },
    ]);

    const resultsMarkUp = products && products.length > 0 ? (
        products.map(product => <ProductPreview key={product.id} product={product}/>)
    ) : (
        <p>...loading...</p>
    );

    return(
        <Container className="container" maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                    {/* Results section */}
                    <Typography variant="h2">Products</Typography>
                    {resultsMarkUp}
                </Grid>
                <Grid item xs={12} sm={4}>
                    {/* Profile section */}
                    <Typography variant="h2">Profile</Typography>

                </Grid>
            </Grid>
        </Container>
    );
}