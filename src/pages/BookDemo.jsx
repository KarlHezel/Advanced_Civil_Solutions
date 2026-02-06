import React from "react";
import Container from "../components/Container.jsx";
import FadeIn from "../components/FadeIn.jsx";
import DemoBookingForm from "../components/DemoBookingForm.jsx";

export default function BookDemo() {
  return (
    <section className="section">
      <Container>
        <FadeIn>
          <div className="kicker">Book Demo</div>
          <h1 className="h2" style={{ marginTop: 10 }}>
            Schedule a 30-minute walkthrough.
          </h1>
          <p className="p">
            Confirm the basics, choose a time, and receive an integration-ready calendar invite.
            Email and calendar sync are scaffolded for production deployment.
          </p>

          <div className="surface" style={{ padding: 18, borderRadius: 16, marginTop: 18 }}>
            <div className="card-title">Steps</div>
            <ol style={{ margin: 0, paddingLeft: 18, color: "#4b5563", lineHeight: 1.8 }}>
              <li>Enter contact details</li>
              <li>Select date + time</li>
              <li>Confirm and download the calendar invite</li>
            </ol>
          </div>

          <div style={{ marginTop: 16 }}>
            <DemoBookingForm mode="book-demo" />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
