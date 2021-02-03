import React from "react";
import { withStyles, fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import SendOutlined from "@material-ui/icons/SendOutlined";
import SendRounded from "@material-ui/icons/SendRounded";
import SendSharp from "@material-ui/icons/SendSharp";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    // height: "100vh",
    // width: "100vw",
  },
  margin: {
    margin: theme.spacing(1),
  },
  chatList: {
    height: "calc( 100vh - ( 64px + 72px ) )",
    overflow: "auto",
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.65),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 1),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
});

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: 0,
  });
}

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Container
        maxWidth={false}
        // disableGutters={true}
        style={{
          // background: "red",
          height: "-webkit-fill-available",
          margin: 0,
          padding: 0,
          display: "flex",
        }}
      >
        <div
          style={{
            // background: "yellow",
            height: "inherit",
            width: "30vw",
            borderWidth: "1px",
            borderColor: "lightgray",
            borderStyle: "solid",
            zIndex: 1,
          }}
        >
          <ElevationScroll {...this.props}>
            <AppBar style={{ left: 0, width: "inherit", background: "#fff" }}>
              <Toolbar>
                <Typography variant="h6" style={{ color: "#000" }}>
                  Chats
                </Typography>
              </Toolbar>
            </AppBar>
          </ElevationScroll>
          <div style={{ paddingTop: 64 }}></div>
          <div style={{ padding: 10, background: "#f5f5f5" }}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
          {/* <div> */}
          <List className={classes.chatList}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
          {/* </div> */}
        </div>
        <div
          style={{
            // background: "yellow",
            height: "inherit",
            width: "70vw",
          }}
        >
          <ElevationScroll {...this.props}>
            <AppBar
              style={{
                width: "inherit",
                background: "#fff",
                zIndex: 0,
                borderWidth: "1px",
                borderColor: "lightgray",
                borderStyle: "hidden hidden solid hidden",
              }}
            >
              <Toolbar>
                <Avatar
                  alt="Sandra Adams"
                  src="/static/images/avatar/3.jpg"
                  style={{ marginRight: 15 }}
                />
                <div>
                  <Typography variant="h6" style={{ color: "#000" }}>
                    Sandra Adams
                  </Typography>
                  <Typography
                    variant="span"
                    style={{ color: "gray", fontSize: "15px" }}
                  >
                    online
                  </Typography>
                </div>
              </Toolbar>
            </AppBar>
          </ElevationScroll>
          <div
            style={{
              // background: "red",
              height: "calc( 100vh - ( 64px + 50px))",
              paddingTop: "64px",
              overflowY: "auto",
            }}
          >
            <Message
              text="Hello..."
              dateTime={new Date().toLocaleTimeString()}
            />
            <Message
              left={true}
              text="Hi...."
              dateTime={new Date().toLocaleTimeString()}
            />
            <Message
              text="Hello..."
              dateTime={new Date().toLocaleTimeString()}
            />
            <Message
              left={true}
              text="Hi...."
              dateTime={new Date().toLocaleTimeString()}
            />
            <Message
              text="Hello..."
              dateTime={new Date().toLocaleTimeString()}
            />
            <Message
              left={true}
              text="Hi...."
              dateTime={new Date().toLocaleTimeString()}
            />
            <Message
              text="Hello..."
              dateTime={new Date().toLocaleTimeString()}
            />
            <Message
              left={true}
              text="Hi...."
              dateTime={new Date().toLocaleTimeString()}
            />
            <Message
              text="Hello..."
              dateTime={new Date().toLocaleTimeString()}
            />
            <Message
              left={true}
              text="Hi...."
              dateTime={new Date().toLocaleTimeString()}
            />
            <Message
              text="Hello..."
              dateTime={new Date().toLocaleTimeString()}
            />
            <Message
              left={true}
              text="Hi...."
              dateTime={new Date().toLocaleTimeString()}
            />
          </div>
          <div
            style={{
              // background: "yellow",
              // marginTop: 1,
              background: "#f5f5f5",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className={classes.search}
              style={{ width: "-webkit-fill-available" }}
            >
              <InputBase
                placeholder="Type a message"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{
                  "aria-label": "type a message",
                  style: { width: "inherit" },
                }}
                style={{ width: "inherit" }}
              />
            </div>
            <IconButton aria-label="delete" className={classes.margin}>
              <SendRounded />
            </IconButton>
          </div>
        </div>
      </Container>
    );
  }
}

const Message = (props) => (
  <div
    style={{
      height: 50,
      alignItems: "center",
      placeContent: props.left ? "flex-start" : "flex-end",
      display: "flex",
    }}
  >
    {!props.left && (
      <Typography
        variant="span"
        style={{
          fontSize: 13,
          color: "gray",
          marginBottom: "-20px",
          marginRight: "10px",
        }}
      >
        {props.dateTime}
      </Typography>
    )}
    <div
      style={{
        background: "#f5f5f5",
        maxWidth: "40vw",
        float: "left",
        padding: "10px",
        borderRadius: "10%",
        ...(props.left ? { marginLeft: "10px" } : { marginRight: "10px" }),
      }}
    >
      <Typography variant="body1">{props.text}</Typography>
    </div>
    {props.left && (
      <Typography
        variant="span"
        style={{
          fontSize: 13,
          color: "gray",
          marginBottom: "-20px",
          marginLeft: "10px",
        }}
      >
        {props.dateTime}
      </Typography>
    )}
  </div>
);

export default withStyles(styles)(App);
