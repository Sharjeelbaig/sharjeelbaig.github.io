import { Grid, Paper, Typography, Avatar, Box, Button, Divider, TextField, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import { DocumentScanner, Email, KeyboardArrowDown, KeyboardArrowUp, Place, X } from '@mui/icons-material';
import Header from '../components/header/Header';
import { useTheme } from '@mui/material';
import emailjs from '@emailjs/browser';

import { useEffect, useState } from 'react';

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
        designation: string;
        period: string;
        logo: string;
    };
}

interface Skill {
    logo: string;
    name: string;
}

interface WeakSkill {
    logo: string;
    name: string;
}

interface AdditionalSkill {
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
    weakSkills: WeakSkill[];
    additionalSkills: AdditionalSkill[];
}

interface Documents {
    resume: string;
}

interface JSONData {
    basic: BasicInfo;
    contact: ContactInfo;
    description: DescriptionInfo;
    background: Background;
    projects: Project[];
    documents: Documents;
}

const Home = ({ data }: { data: JSONData }) => {
    const theme = useTheme();
    const { basic, contact, description, background, projects } = data;
    const [showMoreSkills, setShowMoreSkills] = useState(false)
    const styles = {
        heading: {
            color: theme.palette.primary.main,
            fontWeight: 'bold',
        },
        normal: {
            fontWeight: 'bold',
            color: 'black',
        },

    };

    useEffect(() => {
        console.clear();
        console.log(` 
         ______
        / ____ \\
       / /    \\ \\
 _____/ /______\\ \\_____
/______________________\\
|                      |
|                      |
|         </>          |
|                      |
|______________________|
        Hire Me
|______________________|        


------------------------
Use contact form or email me at ${contact.gmail}

`)

        console.log = function () { };
        console.warn = function () { };
        console.error = function () { };
        console.debug = function () { };
        console.info = function () { };
        console.assert = function () { };
        console.clear = function () { };
        console.count = function () { };
        console.dir = function () { };
        console.dirxml = function () { };
        console.group = function () { };
        console.groupCollapsed = function () { };
        console.groupEnd = function () { };
        console.table = function () { };
        console.time = function () { };
        console.timeEnd = function () { };
        console.timeStamp = function () { };
        console.trace = function () { };
    }, [])

    const handleMessageSubmit = (e: any) => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.EMAILJS_SERVICE_ID, import.meta.env.EMAILJS_TEMPLATE_ID, '#contact-form', import.meta.env.EMAILJS_PUBLIC_KEY)
            .then(() => {
                alert('Email sent successfully');
            }, () => {
                alert('Error sending email');
            });
        e.target.reset();
    };
    return (
        <div>
            <Header />
            <Box textAlign="center" >
                {/* Header Section */}
                <Box p={2} id="home" mt={8} >

                    <Avatar alt={basic.name} src={basic.profileimage} sx={{
                        width: "15rem", height: "15rem", margin: 'auto', objectFit: 'cover',
                    }}
                    />
                    <Box sx={{ mt: 5 }}>
                        <Typography variant="h4" gutterBottom sx={styles.heading}>{basic.name}</Typography>
                        <Typography variant="subtitle1" sx={styles.normal}>{basic.designation} </Typography>
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
                                    <Typography variant="subtitle1" gutterBottom sx={styles.normal}>{key.charAt(0).toUpperCase() + key.slice(1)}</Typography>

                                    <Typography variant="body1">{value}</Typography>


                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Divider id="about" sx={{ mt: 5 }} />

                {/* About Me */}
                <Box sx={{
                    margin: 'auto',
                    "& > *": {
                        margin: '1rem auto',
                        width: '60%',

                    },
                    py: 6
                }}>
                    <Typography variant="h5" gutterBottom sx={styles.heading}>About Me</Typography>

                    <Typography variant="body1">{description.about}</Typography>
                </Box>

                <Divider id="skills" sx={{ mt: 5 }} />

                {/* Skills */}
                <Box sx={{
                    "& > *": {
                        mt: '0.1rem',
                    },
                    pt: 6,
                }} >
                    <Typography variant="h5" gutterBottom sx={styles.heading}>Skills</Typography>
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
                    <Accordion expanded={showMoreSkills} onChange={() => setShowMoreSkills(!showMoreSkills)} sx={{ position: 'unset', boxShadow: 'none', my: 5, width: '100%' }}>
                        <AccordionSummary
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >

                            <Typography sx={{ textAlign: 'center', margin: 'auto', display: 'flex', alignItems: 'center' }}>{!showMoreSkills ? <>show more <KeyboardArrowDown /></>  : <>show less <KeyboardArrowUp /></> }</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Divider />
                            <Box sx={{
                                "& > *": {
                                    mt: '0.1rem',
                                },
                                pt: 6,
                            }} >
                                <Typography variant="h5" gutterBottom sx={styles.heading}>Additional Skills</Typography>
                                <Grid container spacing={2} justifyContent="center" alignItems="center">
                                    {description.additionalSkills.map((skill, index) => (
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
                            <Box sx={{
                                "& > *": {
                                    mt: '0.1rem',
                                },
                                pt: 6,
                            }} >
                                <Typography variant="h5" gutterBottom sx={styles.heading}>Weak skills / Areas for growth</Typography>
                                <Grid container spacing={2} justifyContent="center" alignItems="center">
                                    {description.weakSkills.map((skill, index) => (
                                        <Grid key={index} item xs={6} sm={4} md={4} lg={3}>
                                            <Paper elevation={3} variant="outlined" sx={{ p: 2, textAlign: 'center', borderRadius: '20px' }}>
                                                <img src={skill.logo} alt={skill.name} style={{ width: '50px', height: '50px' }} />
                                                <Typography variant="body2">{skill.name}</Typography>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                </Box>

                <Divider sx={{ mt: 5 }} />

                {/* Education & Experience */}
                <Box id="background" sx={{
                    "& > *": {
                        mt: '1rem',
                    },
                    py: 6
                }}>
                    <Typography variant="h5" gutterBottom sx={styles.heading}>Background</Typography>
                    <Grid container spacing={3} justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <Paper elevation={3} variant="outlined" sx={{
                                p: 2, height: '12rem', display: 'flex',
                                justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column'
                            }}>
                                <img src={background.education.logo} alt="Education" style={{ width: '100px', height: '100px', }} />
                                <Typography variant="subtitle1" sx={styles.heading}>{background.education.title}</Typography>
                                <Typography variant="body2" sx={styles.normal}>{background.education.institution}</Typography>
                                <Typography variant="body2">{background.education.period}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper elevation={3} variant="outlined" sx={{
                                p: 2, height: '12rem', display: 'flex',
                                justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column'
                            }}>
                                <img src={background.experience.logo} alt="Experience" style={{ width: '100px', height: '100px', }} />
                                <Typography variant="subtitle1" sx={styles.heading}>{background.experience.designation}</Typography>
                                <Typography variant="subtitle1" sx={styles.normal}>{background.experience.company}</Typography>
                                <Typography variant="body2">{background.experience.period}</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

                <Divider id="projects" sx={{ mt: 5 }} />

                {/* Projects */}
                <Box sx={{
                    "& > *": {
                        mt: '1rem',
                    },
                    py: 6
                }}  >
                    <Typography variant="h5" gutterBottom sx={styles.heading} >Projects</Typography>
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

                <Divider id="resume" sx={{ mt: 5 }} />
                <Box p={2} sx={{
                    "& > *": {
                        margin: '1rem',
                    },
                }} >
                    <Typography variant="h5" gutterBottom sx={styles.heading}>Resume</Typography>
                    <Typography variant="body1" gutterBottom>For complete details download my resume { }</Typography>
                    <DocumentScanner sx={{ width: '100px', height: '100px', }} />
                    <br />
                    <Button variant="contained" color="primary" href={data.documents.resume} target="_blank" rel="noopener">
                        Download
                    </Button>
                </Box>
                <Divider id="contact" sx={{ mt: 5, }} />
                <Box p={2} sx={{
                    "& > *": {
                        mt: '2rem',
                        color: 'white',
                    },
                    backdropFilter: 'blur(8px)',
                    background: "#4a403f",
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px',
                    position: "absolute",
                    left: 0,
                    right: 0
                }} >
                    <Typography variant="h5" sx={[styles.heading, { color: 'black', fontSize: 30 }]}>GET IN <span style={{ color: 'red' }}>TOUCH</span></Typography>

                    <Email sx={{ width: 100, height: 100 }} />
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Typography variant="body1" gutterBottom sx={{
                            textAlign: 'left',
                            color: 'white',
                        }}>
                            <em>Need a developer? Want to contribute to projects? Want to hire me for any role?</em>
                            <br />
                            Feel free to contact me using the form below or by sending an email to <span style={{ fontWeight: 'bolder', fontStyle: 'italic' }}>{contact.gmail}</span>.
                        </Typography>
                    </Box>
                    <form id='contact-form' onSubmit={handleMessageSubmit}>
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={4} md={4} lg={6}>
                                <TextField name='firstname' id="outlined-basic" label="First Name" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={6}>
                                <TextField id="outlined-basic" name='lastname' label="Last Name" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={12}>
                                <TextField name='email' id="outlined-basic" label="Email" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField name='message' multiline rows={4} id="outlined-basic" label="Message" variant="outlined" fullWidth />
                            </Grid>
                        </Grid>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                            <Button type='submit' fullWidth variant="contained" color="primary" href={""} target="_blank" rel="noopener">
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </div>
    );
};

export default Home;
