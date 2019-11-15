import React from 'react'

// Mui imports
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { flexbox } from '@material-ui/system';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            display: 'flex',
            marginTop: 10,
            marginBottom: 10
        },
        content: {
            padding: 25,
        },
        h5: {
            color: theme.palette.primary.main
        }
    })
);

function ProductPreview({product}:any) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" className={classes.h5}>{product.title}</Typography>
                
                <Typography variant="body2">Date added: {product.createdAt}</Typography>
            </CardContent>
        </Card>
    )
}

export default ProductPreview
