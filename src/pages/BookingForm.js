import { useState, useEffect } from "react";

function BookinghtmlForm(props){
const [formData, setFormData] = useState({
       firstName:"",
       lastName:"",
       email:"",
       date:"",
       time:"",
       guests:1,
       occasion:"",
       seating:"",
       comment:"",
    })

    function handleChange(e){
        const {name,value} = e.target;

        setFormData((prev)=>({
            ...prev,
            [name]:value,
        }));
    }
    function handleDateChange(e){
        const {name,value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value,
        }));
        props.dispatch({date:value});
    }
    useEffect(()=>{
        console.log(formData)
    },[formData]);

    function submitForm(e){
        e.preventDefault();
        props.submitForm(formData);
    }
return (
    <>
        <main>
            <section className="reservation-section">
                <form className="reservation-container" onSubmit={submitForm}>
                <h1>Make A Booking</h1>
                <div className="customer-header">
                    Customer Details
                </div>
                <div className="input-grid">
                    <div className="input-box">
                        <label className="input-text">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            className="input-field"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-box">
                        <label className="input-text">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            className="input-field"
                            value={formData.lastName}
                            onChange={handleChange}

                        />
                    </div>
                </div>
                <div className="input-box">
                <label className="input-text">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        className="input-field"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="customer-header">
                    Reservation Details
                </div>
                <div className="input-box">
                    <label htmlFor="guests" className="input-text">Guest Count</label>
                        <input type ="number" id="guests"className="input-field" min="1" max="10"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}>
                        </input>
                </div>
                <div className="input-grid">
                    <div className="input-box">
                        <label htmlFor="res-date" className="input-text">Choose date</label>
                        <input type="date" id="res-date" className="input-field"
                            name="date"
                            value={formData.date}
                            onChange={handleDateChange}
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="res-time" className="input-text">Choose time</label>
                        <select id="res-time" className="input-field"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}>
                            {props.state.map((time)=>{
                                return(
                                <option key={time}>
                                    {time}
                                </option>
                                )
                            })} 
                        </select>
                    </div>
                </div>
                <div className="input-grid">
                    <div className="input-box">
                        <label htmlFor="occasion" className="input-text">Occasion</label>
                        <select id="occasion-id" className="input-field"
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}>
                            <option></option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Engagement</option>
                            <option>Family Meet</option>
                        </select>
                    </div>
                    <div className="input-box">
                        <label htmlFor="seating" className="input-text">Seating arrangement</label>
                        <select id="seating-id"className="input-field"
                        name="seating"
                        value={formData.seating}
                        onChange={handleChange}>
                            <option></option>
                            <option>ground floor</option>
                            <option>1st floor</option>
                            <option>outside</option>
                            <option>roof top</option>
                        </select>
                    </div>
                </div>
                <div className="input-box">
                    <label htmlFor="comment" className="input-text">Special requirements..</label>
                    <textarea id="comment" name="comment" rows="4" cols="50" placeholder="Type here..." className="input-field"
                    value={formData.comment}
                    onChange={handleChange}>
                    </textarea>
                </div>
                <button type="submit" className="reservation-button">
                    Confirm Booking
                </button>
                </form>
            </section>
        </main>
    </>);
}
export default BookinghtmlForm