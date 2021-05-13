import { Box, Container, Grid, LinearProgress, makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import AddToCartForm from '../components/AddToCartForm';
import ProductAdditional from '../components/ProductAdditional';
import ProductDescription from '../components/ProductDescription';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductReviews from '../components/ProductReviews';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';

const useStyles = makeStyles(theme => ({
    root: {
        paddingBottom: theme.spacing(3),
    },
    left: {
        width: '400px',
        padding: theme.spacing(1.5),
        borderRight: `1px solid ${theme.palette.grey[300]}`
    },
    right: {
        flex: '1 1 0',
        padding: theme.spacing(1.5),
    },
    pagination: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        marginTop: '20px',
        paddingBottom: '20px'
    },
    loading: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%'
    }
}));

function DetailPage(props) {
    const classes = useStyles();
    const {
        params: {productId}, 
        url
    } = useRouteMatch();
    //console.log(productId);
    const {product, loading} = useProductDetail(productId);
    //console.log(product);
    if(loading) {
        return <Box>
              <LinearProgress color="secondary" className={classes.loading}/>
        </Box>
    }

    const handleAddToCartSubmit = (formValues) => {
        console.log('Form submit: ', formValues);
    }

    return (
        <Box>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className={classes.left}>
                            <ProductThumbnail product={product}/>
                        </Grid>
                        <Grid item className={classes.right}>
                            <ProductInfo product={product}/>
                            <AddToCartForm onSubmit={handleAddToCartSubmit}/>
                        </Grid>
                    </Grid>
                </Paper>
                <ProductMenu />
                <Switch>
                    <Route path={url} exact>
                        <ProductDescription product={product}/>
                    </Route>
                    <Route path={`${url}/additional`} exact>
                        <ProductAdditional product={product}/>
                    </Route>
                    <Route path={`${url}/additional`} exact>
                        <ProductReviews product={product}/>
                    </Route>
                </Switch>
            </Container>
        </Box>
    )
}


export default DetailPage

