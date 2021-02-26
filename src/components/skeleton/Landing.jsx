import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import MailIcon from '@material-ui/icons/Mail';
import wallpaper from '../../assets/images/wallpaper2.jpg';
import PulseButton from '../buttons/PulseButton';
import resume from '../../assets/documents/Zhao_Resume.pdf';


const useStyles = makeStyles((theme) =>
  createStyles({
    background: {
      display: 'grid',
      backgroundImage: `url(${wallpaper})`,
      // opacity: '0.0',
      backgroundSize: 'cover',
      position: 'relative',
      width: '100vw',
      maxWidth: '100%',
      // zIndex: -1,
      height: '100vh',
    },
    content: {
      position: 'absolute',
      textAlign: 'center',
      top: '50%',
      left: '50%',
      // zIndex: 1,
      transform: 'translate(-50%, -50%)',
      '& .MuiTypography-root': {
        color: "white",
      },
    },
  }),
);

const Landing = () => {
  const classes = useStyles();

  const resumetext = "Resume";
  const contacttext = "Contact Me";

  return (
    <div className={classes.background} id="home">
      <div className={classes.content}>
        <Typography variant="h1">
          Koa Zhao Yuan
          </Typography>
        <Typography variant="h2">
          Aspiring Software Engineer
          </Typography>
        <PulseButton
          buttonText={contacttext}
          icon={<MailIcon />}
          link="mailto:k.zhaoyuan98@u.yale-nus.edu.sg"
        />
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