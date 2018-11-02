import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { LabelContainer } from "../../ui-containers";

const styles = {
  whiteCard: {
    maxWidth: 250,
    backgroundColor: "#FFFFFF",
    paddingLeft: 8,
    paddingRight: 0,
    paddingTop: 11,
    paddingBottom: 0,
    marginRight: 16,
    marginTop: 16
  },
  subtext: {
    paddingTop: 7
  }
};

const documentTitle = {
  color: "rgba(0, 0, 0, 0.87)",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: 400,
  letterSpacing: "0.67px",
  lineHeight: "19px"
};

function MultiCardDownloadGrid(props) {
  const { classes, data } = props;
  return (
    <Grid container>
      {data.map((item, key) => {
        return (
          <Grid item container xs={6} sm={4} className={classes.whiteCard}>
            <Grid xs={12}>
              <LabelContainer
                labelName={item.title}
                labelKey={item.title}
                style={documentTitle}
              />
            </Grid>
            <Grid container>
              <Grid xs={6} className={classes.subtext}>
                <Typography>{item.name}</Typography>
              </Grid>
              <Grid xs={6} align="right">
                <Button href={item.link} color="primary">
                  {item.linkText}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}

MultiCardDownloadGrid.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.array.isRequired,
  linktext: PropTypes.array.isRequired
};

export default withStyles(styles)(MultiCardDownloadGrid);