import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { useRouteMatch } from 'react-router';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';

const useStyles = makeStyles(theme => ({
    root: {},
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
    }
}));

function DetailPage(props) {
    const classes = useStyles();
    const {
        params: {productId}
    } = useRouteMatch();
    //console.log(productId);
    const {product, loading} = useProductDetail(productId)
    if(loading) {
        return <Box>Loading</Box>
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
                            Product info
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    )
}


export default DetailPage

