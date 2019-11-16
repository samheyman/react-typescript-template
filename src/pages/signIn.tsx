import React, { useState } from 'react';
import {Link} from 'react-router-dom';

// Mui imports
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

// Custom components
import Logo from '../images/logo.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formContainer: {
            margin: '0 auto',
            maxWidth: '600px',
            padding: '0 100px',
            textAlign: 'center'
        },
        logo: {
            margin: 0,
            height:'40px'
        },
        header: {
            margin: '10px auto',
        },
        form: {
            
        },
        textField: {
            margin: '10px auto',
            background: 'white',
        },
        button: {
            marginTop: 30,
            minWidth: '30%',
            height: '36px'
        },
        loader: {
            color: 'currentColor'
        },
        signUpLink: {
            marginTop: 30,
            color: 'grey'
        },
        link: {
            color: 'inherit',
        }
    })
);

export default function SignIn() {
    const classes = useStyles();

    // state 
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        const userData = {
            email: email,
            password: password
        }
        setTimeout(() => {
            console.log("Logged in");
            setLoading(false);
        }
        , 2000)     
    }

    return(
        <Container className="container" maxWidth="lg">
            <div className={classes.formContainer}>
                <img src={Logo} alt="logo" className={classes.logo}/>
                <Typography variant="h1" className={classes.header}>
                    Sign in
                </Typography>

                <form noValidate onSubmit={handleSubmit} className={classes.form}>
                    <TextField
                        id="standard-required"
                        name="email"
                        type="email"
                        label="Email"
                        className={classes.textField}
                        helperText={'email' in errors}
                        value={email}
                        onChange={event => setEmail(event.currentTarget.value)}
                        fullWidth
                    />
                    <TextField
                        id="password"
                        name="password"
                        type="password"
                        label="Password"
                        className={classes.textField}
                        helperText={'password' in errors}
                        value={password}
                        onChange={event => setPassword(event.currentTarget.value)}
                        fullWidth
                    />
                    <Button 
                        className={classes.button} 
                        color="secondary" 
                        variant="contained" 
                        type="submit"
                        disabled={loading}
                    >
                        { loading ? (
                            <CircularProgress size={20} className={classes.loader} />
                            ) : (
                            'Sign in' 
                            )
                        }
                    </Button>
                    <div className={classes.signUpLink}>
                        <small>
                            Don't have an account?&nbsp;
                            <Link className={classes.link} to="/signup">Sign up here</Link>.
                        </small>
                    </div>
                    

                </form>
            </div>
        </Container>
    );
}