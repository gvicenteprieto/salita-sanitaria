import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker, registerLocation } from "react-date-range";
import { makeStyles, Typography, InputBase, Button } from "@material-ui/core";
//import { People } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import "moment/locale/es";

import es from "date-fns/locale/es";

const selectionRange = {
  language: "es",
  startDate: new Date(moment.now()),
  endDate: new Date(moment.now()),
  key: "selection",
};

const DatePicker = () => {
  const classes = useStyle();

  const handleSelect = () => {};
  return (
    <div className={classes.root}>
      <DateRangePicker
        language="es"
        ranges={[selectionRange]}
        onChange={handleSelect}
      />

      <div className={classes.inputSection}>
        <Typography variant="h5">ver!!!!</Typography>

        <div className={classes.people}>
          <InputBase
            placeholder="2pax"
            inputProps={{ className: classes.input }}
          />
          {/* <People/> */}

          <button className="btn btn-success m-1">
            <i className="fas fa-eye fa-xs"></i>
          </button>
        </div>

        <div>
          <Link to={"/createTurno"}>
            <button className="btn btn-info m-1">buscar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    position: "relative",
    //top: 100,
    borderRadius: "15px",
    backgroundColor: "green",
    zIndex: 99,
    [theme.breakpoints.down("xs")]: {
      left: -220,
    },
  },
  people: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputSection: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    "& h5": {
      textAlign: "center",
    },
    "& button:hover": {
      backgroundColor: "rgba(255, 103, 103, 0.4)",
    },
  },
  input: {
    width: "7vw",
    border: "2px solid #ccc",
    margin: theme.spacing(0, 2, 0, 0),
    padding: theme.spacing(1, 2),
  },
}));

export default DatePicker;
