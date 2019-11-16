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
        companyName: {
            color: theme.palette.primary.main
        }
    })
);

function CompanyPreview({company}:any) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h6" className={classes.companyName}>{company.name}</Typography>
                <Typography variant="caption">Joined on: {company.createdAt}</Typography>
            </CardContent>
        </Card>
    )
}

export default CompanyPreview
