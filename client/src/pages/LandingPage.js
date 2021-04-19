import React from "react";
import background from "../images/developer.jpg";
import LandingCard from "../components/LandingCard";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      alignItems: "center",
      display: "flex",
      flexDirection: "row", 
      left: '50%',
      justifyContent: "center",
      opacity: "0.75"
      
    },
  });

function LandingPage() {
    const classes = useStyles();
    return (
        <div className={classes.root} style={{ 
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            height:'800px',
            width: '100%',
          }}>
        <LandingCard />
        </div>
    )
}

export default LandingPage;