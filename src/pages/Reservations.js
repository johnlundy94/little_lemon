import React, { useState, useReducer, useEffect } from "react";
import Header from "../components/Header";
import ReservationForm from "../components/ReservationForm";
import db from "../config/firebase";
import { collection, where, getDocs, query } from "firebase/firestore";

const defaultTimes = [
  {
    time: "10:00 am",
  },
  {
    time: "11:00 am",
  },
  {
    time: "12:00 pm",
  },
  {
    time: "1:00 pm",
  },
  {
    time: "2:00 pm",
  },
  {
    time: "3:00 pm",
  },  {
    time: "4:00 pm",
  },  {
    time: "5:00 pm",
  },  {
    time: "6:00 pm",
  },  {
    time: "7:00 pm",
  },
];

function updateTimes(date, dispatch) {
  const newTimes = [...defaultTimes];

  const q = query(collection(db, "reservations"), where("date", "==", date));

  return getDocs(q).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const reservation = doc.data();
      const index = newTimes.findIndex((time) => time.time === reservation.selectedTime);
      if (index > -1) {
        newTimes[index] = {...newTimes[index], disabled: true};
      }
    });

    dispatch({ type: "UPDATE_TIMES", payload: newTimes });
  });
}


function timesReducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload;
    default:
      return state;
  }
}
function Reservations() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [times, dispatch] = useReducer(timesReducer, defaultTimes);

  useEffect(() => {
    if (selectedDate) {
      updateTimes(selectedDate, dispatch);
    }
  }, [selectedDate]);

  return (
    <>
      <Header />
        <ReservationForm
          times={times}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          dispatch={dispatch}
        />
    </>
  );
}

export default Reservations;
