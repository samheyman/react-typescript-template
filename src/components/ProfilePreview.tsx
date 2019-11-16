import React from 'react'
import { Link } from 'react-router-dom';

// Mui imports
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { flexbox } from '@material-ui/system';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            display: 'flex',
            marginTop: 10,
            marginBottom: 10
        },
        paper: {
            textAlign: 'center',
            padding: 25
        },
        content: {
            padding: 25,
        },
        h5: {
            color: theme.palette.primary.main
        },
        h6: {
            color: theme.palette.secondary.main
        },
        linkContainer: {
            marginTop: 20
        },
        link: {
            marginTop: 20,
            textDecoration: 'none'
        },
        img: {
            height: '100px',
            borderRadius: '50%'
        }
    })
);

function ProfilePreview({user}:any) {
    const classes = useStyles();

    return (user ? (
        <Paper className={classes.paper}>
            <img className={classes.img} src={user.photoUrl} alt="user avatar" />
            <Typography variant="h5">{user.displayName ? user.displayName : 'GUEST'}</Typography>
            <Typography variant="h6">{user? user.type : null}</Typography>
            <Typography variant="body1">{user? user.email : null}</Typography>
            <Typography variant="body2">{user? `Joined: ` + user.createdAt : null}</Typography>
        </Paper>
    ) : (
        <Paper className={classes.paper}>
            <Typography variant="h5">GUEST</Typography>
            <Typography variant="body1">Sign in to get started...</Typography>
            <div className={classes.linkContainer}>
                <Link className={classes.link} to="/signin">
                    <Button variant="contained">Sign in</Button>
                </Link>
            </div>
        </Paper>
    ));
}

export default ProfilePreview
