import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Hidden } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import MailIcon from '@material-ui/icons/Mail';
import wallpaper from '../../assets/images/wallpaper2.jpg';
import PulseButton from '../buttons/PulseButton';
import resume from '../../assets/documents/Zhao_Resume.pdf';


const useStyles = makeStyles((theme) =>
  createStyles({
    background: {
      // change if needed
      paddingTop: '56px',
      display: 'grid',
      backgroundImage: `url(${wallpaper})`,
      // opacity: '0.0',
      backgroundSize: 'cover',
      position: 'relative',
      width: '100vw',
      maxWidth: '100%',
      height: '100vh',
    },

    content: {
      position: 'absolute',
      textAlign: 'center',
      top: '50%',
      left: '50%',
      width: '100%',
      transform: 'translate(-50%, -50%)',
      '& .MuiTypography-root': {
        color: "white",
      },
    },

    '@media only screen and (max-width:760px)': {
      content: {
        '& .MuiTypography-h1': {
          fontSize: '5em',
        },
        '& .MuiTypography-h2': {
          fontSize: '2.75em',
        },
      },
    },

    '@media only screen and (max-width:600px)': {
      content: {
        top: '45%',
        '& .MuiTypography-h1': {
          fontSize: '2.5em',
        },
        '& .MuiTypography-h2': {
          marginTop: '15px',
          fontSize: '1.5em',
          marginBottom: '15px',
        },
      },
    },

  }),
);

const Landing = () => {
  const classes = useStyles();
  const resumetext = "Resume";
  const contacttext = "Contact";

  return (
    <div className={classes.background} id="home" aria-label="Kimi no na wa wallpaper">
      <div className={classes.content}>
        <Typography variant="h1">
          Koa Zhao Yuan
          </Typography>
        <Typography variant="h2">
          Aspiring ML Engineer :)
          </Typography>

        <PulseButton
          buttonText={contacttext}
          icon={<MailIcon />}
          link="mailto:k.zhaoyuan98@u.yale-nus.edu.sg"
        />
        <Hidden mdUp>
          <br />
        </Hidden>
        <PulseButton
          buttonText={resumetext}
          icon={<DescriptionIcon />}
          link={resume}
        />
      </div>
    </div>
  )
}

export default Landing;