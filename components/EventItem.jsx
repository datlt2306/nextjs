import React from "react";
import classes from "./EventItem.module.css";
import Button from "./ui/button";
import DateIcon from "./icons/date-icon";
import ArrowRightIcon from "./icons/arrow-right-icon";

const EventItem = (props) => {
    const { title, image, date, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const formattedAddress = location.replace(", ", "\n");
    const expolrelink = `/events/${id}`;
    return (
        <li className={classes.item}>
            <img src={`/${image}`} alt="" />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <DateIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={expolrelink}>
                        <span>Explore Event</span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default EventItem;
