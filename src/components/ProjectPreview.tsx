import React from 'react'

// Mui imports
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { flexbox } from '@material-ui/system';
import { Typography, Tooltip } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import BlockIcon from '@material-ui/icons/Block';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            display: 'flex',
            marginTop: 10,
            marginBottom: 10,
            padding: '0px 10px'
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
        },
        delete: {
            color: '#999'
        },
        remove: {
            color: '#999'
        }
    })
);

function ProjectPreview({project}:any) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h6" className={classes.title}>{project.title}</Typography>
                    <Typography variant="subtitle2" className={classes.company}>{project.company}</Typography>
                    <Typography variant="caption" className={classes.date}>Start date: {project.createdAt}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="outlined">View</Button>
                <Button>Edit</Button>
                <Tooltip title="Blacklist project" aria-label="blacklist">
                    <BlockIcon className={classes.remove} />
                </Tooltip>
                <Tooltip title="Delete project" aria-label="delete">
                    <DeleteIcon className={classes.delete} />
                </Tooltip>
            </CardActions>
        </Card>
    )
}

export default ProjectPreview
