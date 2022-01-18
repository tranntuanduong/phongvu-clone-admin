import { Container, Grid, Paper } from "@mui/material";
import ProductCard from "components/ProductCard";

const ProductList = () => {
  return (
    <Container>
      <Paper sx={{ p: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProductList;
