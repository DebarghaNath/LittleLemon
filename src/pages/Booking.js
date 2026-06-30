import { useReducer } from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BookingForm from "./BookingForm";
import "./Booking.css"

export function initializeTimes(){return [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ];
}
export function updateTimes(state, action){
    return state;
}

function Booking() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    return (
        <>
            <Navbar/>
            <BookingForm state={availableTimes} dispatch={dispatch}/>
            <Footer/>
        </>
    );
}

export default Booking;
