import { useReducer } from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BookingForm from "./BookingForm";
import "./Booking.css"
import { useNavigate } from "react-router-dom";


export function initializeTimes(){
    const data = window.fetchAPI(new Date());
    return data;
}
export function updateTimes(state, action){
    const selectedDate = action.date
    //console.log("SELECTED DAT",selectedDate);
    const data = window.fetchAPI(new Date(selectedDate));
    //console.log(data);
    return data;
}


function Booking() {
    const navigate = useNavigate();
    function submitForm(formData){
    const result = window.submitAPI(formData);
    if(result){
        navigate("/success");
    }
    }
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    return (
        <>
            <Navbar/>
            <BookingForm state={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
            <Footer/>
        </>
    );
}

export default Booking;
