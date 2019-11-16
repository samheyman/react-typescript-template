import React, { useState } from 'react';

// Mui imports
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// Custom components
import ProjectPreview from '../components/ProjectPreview';
import CompanyPreview from '../components/CompanyPreview';
import ProfilePreview from '../components/ProfilePreview';

// Data
import projectsList from '../data/projects';
import companiesList from '../data/companies';
import usersList from '../data/users';
import companyEmployee from '../data/companyEmployee';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        h2: {
            marginTop: 0,
            marginBottom: 0
        },
        h3: {
            marginTop: 0
        },
        projects: {
            marginTop: 20,
            marginBottom: 20
        },
        separator: {
            marginTop: 20,
            marginBottom: 20
        },
        label: {
            fontWeight: 'bold',
            lineHeight: 2,
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            flexWrap: 'wrap',
            marginTop: 20,
            marginBottom: 0,
        },
        form: {
            marginTop: 30,
            marginBottom: 30
        },
        textField: {
            marginTop: 5,
            marginLeft: 0,
            marginRight: 0,
            padding: 0
        },
        button: {
            marginTop: 5
        }
    })
);

export default function Home() {
    const classes = useStyles();

    const [projects, setProjects] = useState(projectsList);
    const [companies, setCompanies] = useState(companiesList);
    const [user, setUser] = useState(null);

    const showProjects = projects && projects.length > 0 ? (
        <div className={classes.projects}>
            {projects.map(project => <ProjectPreview key={project.id} project={project}/>)}
        </div>
    ) : (
        <div className={classes.projects}>
            <p>...loading...</p>
        </div>
    );

    const showCompanies = companies && companies.length > 0 ? (
        companies.map(company => <CompanyPreview key={company.id} company={company}/>)
    ) : (
        <p>...loading...</p>
    );

    const newProjectForm = (
        <div className={classes.form}>
            <Typography className={classes.h3} variant="h3">New project form</Typography>
            <form className={classes.container} noValidate autoComplete="off">
                <label className={classes.label}>Name:</label>
                <TextField
                    id="outlined-search"
                    type="text"
                    placeholder="Project title"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
            </form>
            <Button className={classes.button} color="secondary" variant="contained" type="submit">Create</Button>
        </div>
    );

    const showProfile = (
        <ProfilePreview user={user}/>
    );

    return(
        <Container className="container" maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item sm={12} md={8}>
                    {/* Results section */}
                    <Typography className={classes.h2} variant="h2">Projects</Typography>
                    {showProjects}

                    {newProjectForm}
                    <hr className={classes.separator} />

                    <Typography className={classes.h2} variant="h2">Companies</Typography>
                    {showCompanies}
                </Grid>
                <Grid item sm={12} md={4}>
                    {/* Profile section */}
                    {showProfile}
                </Grid>
            </Grid>
        </Container>
    );
}