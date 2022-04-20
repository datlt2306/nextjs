import { useRouter } from "next/router";
import React from "react";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
const EventDetailPage = () => {
    const router = useRouter();
    const id = router.query.eventId;
    const event = getEventById(id);
    console.log(event);
    if (!event) {
        return <div>No Event found!</div>;
    }

    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    );
};

export default EventDetailPage;
