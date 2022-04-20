import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/EventList";
import EventSearch from "../../components/EventSearch";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
    const router = useRouter();
    const events = getAllEvents();
    if (!events) {
        return <div>Event not found!</div>;
    }

    const findEventSearch = (year, month) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    };
    return (
        <div>
            <EventSearch onSearch={findEventSearch} />
            <EventList items={events} />
        </div>
    );
};

export default AllEventsPage;
