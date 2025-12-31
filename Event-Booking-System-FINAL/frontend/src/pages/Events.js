import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/events")
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Events</h2>
      {events.length === 0 && <p>No events yet</p>}
    </div>
  );
}