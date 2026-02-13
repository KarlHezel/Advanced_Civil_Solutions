// src/pages/BookConsultation.jsx
import React from "react";
import Container from "../components/Container.jsx";
import FadeIn from "../components/FadeIn.jsx";
import DemoBookingForm from "../components/DemoBookingForm.jsx";

export default function BookConsultation() {
  return (
    <section className="section">
      <Container>
        <div className="page-frame-left">
          <FadeIn>
            <div className="kicker">Contact</div>

            <h1 className="h2" style={{ marginTop: 10 }}>
              Start a structured conversation.
            </h1>

            <p className="p">
              Share your objective, timeline, and constraints. We’ll review your notes and
              follow up with next steps.
            </p>

            <div style={{ marginTop: 16 }} className="surface card">
              <DemoBookingForm mode="consultation" />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
