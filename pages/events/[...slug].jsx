import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/EventList";
import { getFilteredEvents } from "../../dummy-data";

const FilterEventPage = () => {
    const router = useRouter();
    const filterData = router.query.slug;
    if (!filterData) {
        return <div>Loading...</div>;
    }
    const filterYear = filterData[0];
    const filterMonth = filterData[0];

    const numYear = +filterYear;
    const numMonth = +filterMonth;

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return <p>Invalid filter</p>;
    }

    const filterEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });
    if (!filterEvents || filterEvents.length == 0) {
        return <p>No event not founded</p>;
    }
    return (
        <>
            <EventList items={filterEvents} />
        </>
    );
};

export default FilterEventPage;
