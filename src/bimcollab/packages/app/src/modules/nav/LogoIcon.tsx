import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 30,
  },
});

export const LogoIcon = () => {
  const classes = useStyles();

  return (
    <svg
      className={classes.svg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 315.35 293.35"
      role="img"
      aria-label="BIMcollab"
    >
      <defs>
        <linearGradient
          id="bimcollab-icon-gold"
          x1="158.13"
          y1="133.66"
          x2="305.46"
          y2="48.6"
          gradientTransform="translate(0 305.09) scale(1 -1)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#f1cf78" />
          <stop offset="1" stopColor="#e8b341" />
        </linearGradient>
        <linearGradient
          id="bimcollab-icon-blue"
          x1="9.87"
          y1="49.53"
          x2="157.12"
          y2="134.55"
          gradientTransform="translate(0 305.09) scale(1 -1)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#1f5470" />
          <stop offset="1" stopColor="#1f85c4" />
        </linearGradient>
        <linearGradient
          id="bimcollab-icon-cyan"
          x1="158.4"
          y1="134.95"
          x2="158.4"
          y2="305.09"
          gradientTransform="translate(0 305.09) scale(1 -1)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#8bd0eb" />
          <stop offset="1" stopColor="#20b0e7" />
        </linearGradient>
      </defs>
      <path
        fill="url(#bimcollab-icon-gold)"
        d="m241.65,145.95h-68.8l14.4,25h54.6c26.8.1,48.5,21.9,48.5,48.7s-21.9,48.7-48.7,48.7-48.7-21.9-48.7-48.7c0-8.6,2.2-16.6,6.1-23.6h-27.2c-2.5,7.4-3.9,15.4-3.9,23.6,0,40.7,33.1,73.7,73.7,73.7s73.7-33.1,73.7-73.7-33-73.7-73.7-73.7Z"
      />
      <path
        fill="url(#bimcollab-icon-blue)"
        d="m137.45,255.65c.5-.8.9-1.6,1.3-2.3l33.1-57.3h-28.9l-27.3,47.3h0c-13.5,23.1-43.2,31-66.4,17.6-23.3-13.4-31.3-43.3-17.8-66.6,13.4-23.3,43.3-31.3,66.6-17.8,7.4,4.3,13.3,10.2,17.4,17.1l13.6-23.6c-5.2-5.9-11.3-11.1-18.5-15.2-35.2-20.3-80.4-8.2-100.7,27-20.3,35.2-8.2,80.4,27,100.7s80.3,8.3,100.6-26.9Z"
      />
      <path
        fill="url(#bimcollab-icon-cyan)"
        d="m94.55,110.55c.5.8.9,1.5,1.3,2.3l33.1,57.3,14.4-25-27.3-47.3h0c-13.3-23.2-5.3-53,17.9-66.4,23.3-13.4,53.1-5.4,66.6,17.8s5.4,53.1-17.8,66.6c-7.4,4.3-15.5,6.4-23.5,6.5l13.6,23.6c7.7-1.5,15.2-4.3,22.4-8.4,35.2-20.3,47.3-65.5,27-100.7S156.75-10.45,121.55,9.85s-47.3,65.5-27,100.7Z"
      />
    </svg>
  );
};
