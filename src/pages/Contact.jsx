import React from "react";
import Container from "../components/Container.jsx";
import FadeIn from "../components/FadeIn.jsx";
import DemoBookingForm from "../components/DemoBookingForm.jsx";

export default function Contact() {
  return (
    <section className="section">
      <Container>
        <FadeIn>
          <div className="kicker">Contact</div>
          <h1 className="h2" style={{ marginTop: 10 }}>
            Reach the team.
          </h1>
          <p className="p">
            Share your objective and constraints. For this demo build, submissions are stored locally
            (production-ready to connect to your API/CRM).
          </p>

          <div style={{ marginTop: 16 }} className="surface card">
            <DemoBookingForm mode="contact" />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
