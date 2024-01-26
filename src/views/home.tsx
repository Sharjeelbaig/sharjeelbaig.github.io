import { Grid, Paper, Typography, Avatar, Box, Button, Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Place, X } from '@mui/icons-material';
import Header from '../components/header/Header';

import { useEffect } from 'react';

interface Project {
    title: string;
    description: string;
    image: string;
    "demonstration-link"?: string;
    "repo-link"?: string;
    classification: string;
}

interface Background {
    education: {
        title: string;
        period: string;
        institution: string;
        logo: string;
    };
    experience: {
        company: string;
        period: string;
        logo: string;
    };
}

interface Skill {
    logo: string;
    name: string;
}

interface BasicInfo {
    name: string;
    designation: string;
    profileimage: string;
}

interface ContactInfo {
    gmail: string;
    linkedin: string;
    phone: string;
    github: string;
    address: string;
}

interface DescriptionInfo {
    about: string;
    skills: Skill[];
}

interface JSONData {
    basic: BasicInfo;
    contact: ContactInfo;
    description: DescriptionInfo;
    background: Background;
    projects: Project[];
}

const Home = ({ data }: { data: JSONData }) => {
    const { basic, contact, description, background, projects } = data;
    const styles = {
        heading: {
            fontWeight: 'bold',
        },
        subHeading: {
            fontWeight: 'bold',
            color: '#f50057',
        },

    };
    useEffect(() => {
        console.log('service ',import.meta.env.EMAILJS_SERVICE_ID)
    }, [])
    return (
        <div>
            <Header />
            <Box textAlign="center">
                {/* Header Section */}
                <Box p={2} id="home" mt={8}>

                    <Avatar alt={basic.name} src={basic.profileimage} sx={{
                        width: "15rem", height: "15rem", margin: 'auto', objectFit: 'cover',
                    }}
                    />
                    <Box sx={{ mt: 5 }}>
                        <Typography variant="h4" gutterBottom>{basic.name}</Typography>
                        <Typography variant="subtitle1" sx={{color: 'blue'}}>{basic.designation} </Typography>
                    </Box>
                </Box>

                <Divider sx={{ mt: 5 }} />

                {/* Contact Information */}
                <Box p={2}>
                    <Typography variant="h5" sx={styles.heading} gutterBottom>Contact Information</Typography>
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        {Object.entries(contact).map(([key, value]) => (
                            <Grid key={key} item xs={12} sm={6} md={4} lg={4}>
                                <Paper elevation={3} variant="outlined" sx={{ p: 2, textAlign: 'center', height: '6rem' }}>
                                    {key === 'address' && <Place />}
                                    {key === 'gmail' && <EmailIcon />}
                                    {key === 'github' && <GitHubIcon />}
                                    {key === 'linkedin' && <LinkedInIcon />}
                                    {key === 'phone' && <PhoneIcon />}
                                    {key === 'twitter/X' && <X />}
                                    <Typography variant="subtitle1" gutterBottom>{key}</Typography>
                                    {key === 'phone' ? (
                                        <Typography variant="body1">{value}</Typography>
                                    ) : (
                                        <Typography variant="body1">{value}</Typography>
                                    )}

                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Divider sx={{ mt: 5 }} />

                {/* About Me */}
                <Box id="about" p={2} sx={{ width: '60%', margin: 'auto' }}>
                    <Typography variant="h5" gutterBottom>About Me</Typography>
                    <Typography variant="body1">{description.about}</Typography>
                </Box>

                <Divider sx={{ mt: 5 }} />

                {/* Skills */}
                <Box p={2}>
                    <Typography variant="h5" gutterBottom>Skills</Typography>
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        {description.skills.map((skill, index) => (
                            <Grid key={index} item xs={6} sm={4} md={4} lg={3}>
                                <Paper elevation={3} variant="outlined" sx={{ p: 2, textAlign: 'center', borderRadius: '20px' }}>
                                    <img src={skill.logo} alt={skill.name} style={{ width: '50px', height: '50px' }} />
                                    <Typography variant="body2">{skill.name}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Divider sx={{ mt: 5 }} />

                {/* Education & Experience */}
                <Box p={2}>
                    <Typography variant="h5" gutterBottom>Background</Typography>
                    <Grid container spacing={3} justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <Paper elevation={3} variant="outlined" sx={{ p: 2, height: '10rem' }}>
                                <img src={background.education.logo} alt="Education" style={{ width: '100px', height: '100px', }} />
                                <Typography variant="subtitle1">{background.education.title}</Typography>
                                <Typography variant="body2">{background.education.period}</Typography>
                                <Typography variant="body2">{background.education.institution}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper elevation={3} variant="outlined" sx={{ p: 2, height: '10rem' }}>
                                <img src={background.experience.logo} alt="Experience" style={{ width: '100px', height: '100px', }} />
                                <Typography variant="subtitle1">{background.experience.company}</Typography>
                                <Typography variant="body2">{background.experience.period}</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

                <Divider sx={{ mt: 5 }} />

                {/* Projects */}
                <Box p={2} >
                    <Typography variant="h5" gutterBottom>Projects</Typography>
                    <Grid container spacing={2} rowSpacing={5}>
                        {projects.map((project, index) => (
                            <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
                                <Paper elevation={3} variant="outlined" sx={{
                                    p: 4, height: '90%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'
                                }}>
                                    <img src={project.image} alt={project.title} style={{ width: '100%', objectFit: 'cover' }} />
                                    <Typography variant="h6">{project.title}</Typography>
                                    <Typography variant="body2" sx={{ textAlign: 'left' }} paragraph>{project.description}</Typography>
                                    <Box display="flex" justifyContent="space-between">
                                        {project['demonstration-link'] && (
                                            <Button variant="contained" color="primary" href={project['demonstration-link']} target="_blank" rel="noopener">
                                                Demo
                                            </Button>
                                        )}
                                        {project['repo-link'] && (
                                            <Button variant="outlined" color="primary" href={project['repo-link']} target="_blank" rel="noopener">
                                                Repository
                                            </Button>
                                        )}
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Divider sx={{ mt: 5 }} />
                <Box p={2} >
                    <Typography variant="h5" gutterBottom>Resume</Typography>
                    <Typography variant="body1" gutterBottom>for complete details download my resume {}</Typography>
                    <Button variant="contained" color="primary" href={""} target="_blank" rel="noopener">
                        Download
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default Home;
