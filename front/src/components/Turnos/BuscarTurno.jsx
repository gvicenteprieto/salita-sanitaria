import { CssBaseline, makeStyles } from "@material-ui/core";
import RoomCard from "./RoomCard";
import Banner from "./Banner";
import DatePicker from "./DatePicker";

const BuscarTurno = () => {
  const classes = useStyle();
  return (
    <>
      <CssBaseline/>
        <div className={classes.bcg}>


          <div>
            <h5 className={classes.root}>BuscarTurno 🛰️</h5>
          </div>


          <div  className={classes.dates}>
            <h3>estamos acá</h3>
            <DatePicker />
          </div>


          <div>
            <Banner />
          </div>


          <div  className={classes.section}>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
          </div>

          
        </div>
   
    </>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    backgroundColor: "#555",
    zIndex: 99,
    width: "100vw",
  },
  bcg: {
    backgroundColor: "#40608a",
  },
}));

export default BuscarTurno;
