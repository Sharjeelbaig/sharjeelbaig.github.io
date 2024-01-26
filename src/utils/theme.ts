import { makeStyles } from "@mui/material";


const useStyles = makeStyles((theme : { spacing: (arg0: number) => any; }) => ({
  container: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  section: {
    marginBottom: theme.spacing(3),
  },
  contactCard: {
    padding: theme.spacing(2),
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  aboutMe: {
    textAlign: 'justify',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: theme.spacing(2),
    justifyItems: 'center',
  },
  skillItem: {
    padding: theme.spacing(2),
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  backgroundSection: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  backgroundCard: {
    flex: '0 0 48%',
    padding: theme.spacing(2),
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  projectCard: {
    padding: theme.spacing(2),
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  projectImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '5px 5px 0 0',
  },
  projectButtons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
