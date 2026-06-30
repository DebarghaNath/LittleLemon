import { render, screen } from "@testing-library/react";
import BookingForm from "../pages/BookingForm";
import { initializeTimes, updateTimes } from "../pages/Booking";

test('Renders the BookingForm heading',()=>{
    render(<BookingForm state={[
        "17:00",
        "18:00",
        "19:00",
        "20:00",
    ]}/>);
    const headingElement = screen.getByText("Make A Booking")
    expect(headingElement).toBeInTheDocument();
})

test('InitializeTimes returns the available time from fetchAPI() ',()=>{
    const state = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ];
    window.fetchAPI = jest.fn(()=>
        state);
    const result = initializeTimes();
    expect(result).toEqual(state);
    expect(window.fetchAPI).toHaveBeenCalled();
})


test('updateTimes returns the same value that is provided in the state',()=>{
    const selectedDate = "2026/06/21"
    const state = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ];
    window.fetchAPI = jest.fn(()=>
        state);
    expect(updateTimes(state,{date:selectedDate})).toEqual(state);
})