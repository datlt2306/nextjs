import Head from "next/head";
import EventList from "../components/EventList";
import { getFeaturedEvents } from "../dummy-data";
import styles from "../styles/Home.module.css";

export default function Home() {
    const featureEvents = getFeaturedEvents();
    return (
        <div className={styles.container}>
            <EventList items={featureEvents} />
        </div>
    );
}
