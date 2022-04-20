import React, { useRef } from "react";
import Button from "./ui/button";
import classes from "./EventSearch.module.css";

const EventSearch = (props) => {
    const yearInputRef = useRef();
    const monthInputRef = useRef();

    const submitHandler = (event) => {
        console.log("1");
        event.preventDefault();

        const selectYear = yearInputRef.current.value;
        const selectMonth = monthInputRef.current.value;

        props.onSearch(selectYear, selectMonth);
    };
    return (
        <form className={classes.form}>
            <div className={classes.control}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select name="" id="year" ref={yearInputRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2021</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select name="" id="month" ref={monthInputRef}>
                        <option value="1">Januaray</option>
                        <option value="1">February</option>
                        <option value="1">March</option>
                        <option value="1">April</option>
                        <option value="1">May</option>
                        <option value="1">June</option>
                        <option value="1">July</option>
                        <option value="1">August</option>
                        <option value="1">September</option>
                        <option value="1">Octorber</option>
                        <option value="1">November</option>
                        <option value="1">December</option>
                    </select>
                </div>
            </div>
            <Button onClick={submitHandler}>Find Events</Button>
        </form>
    );
};

export default EventSearch;
