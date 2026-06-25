import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  img: {
    width: 'auto',
    height: 32,
  },
});

export const LogoFull = () => {
  const classes = useStyles();

  return <img className={classes.img} src="/bimcollab-logo.svg" alt="BIMcollab" />;
};
