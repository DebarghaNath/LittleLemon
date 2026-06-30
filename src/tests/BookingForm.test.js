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

test('InitializeTimes returns the correct values for time',()=>{
    expect(initializeTimes()).toEqual([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]);
})


test('updateTimes returns the same value that is provided in the state',()=>{
    const state=[
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ];
    expect(updateTimes(state,{})).toEqual(state);
})