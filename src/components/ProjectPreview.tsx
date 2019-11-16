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
        title: {

        },
        company: {

        },
        date: {
            color: theme.palette.text.secondary,
        }
    })
);

function ProjectPreview({project}:any) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h6" className={classes.title}>{project.title}</Typography>
                <Typography variant="subtitle2" className={classes.company}>{project.company}</Typography>
                <Typography variant="caption" className={classes.date}>Start date: {project.createdAt}</Typography>
            </CardContent>
        </Card>
    )
}

export default ProjectPreview
