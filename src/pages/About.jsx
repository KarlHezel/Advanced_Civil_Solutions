// src/pages/About.jsx
import React from "react";
import Container from "../components/Container.jsx";
import FadeIn from "../components/FadeIn.jsx";
import Card from "../components/Card.jsx";
import HeadshotPlaceholder from "../components/HeadshotPlaceholder.jsx";

export default function About() {
  return (
    <section className="section about">
      <Container>
        <div className="page-frame-left">
          <FadeIn>
            {/* HERO / SUMMARY */}
            <div className="section-block">
              <div className="readable stack">
                <div className="kicker">ABOUT ADVANCED CIVIL SOLUTIONS</div>

                <h1 className="h2">Government contracting readiness — built for teams at any stage.</h1>

                <p className="p">
                  Advanced Civil Solutions helps organizations prepare for and operate within government contracting environments by establishing <strong>disciplined delivery systems</strong>, <strong>repeatable processes</strong>, and <strong>audit-aware execution</strong>. We support <strong>contract-aligned parts procurement</strong> to help teams source components with traceability, flow-down compliance, and documentation that holds up under review, and for organizations entering government contracting for the first time, we help clarify what’s required before mistakes become costly.
                </p>
              </div>

              {/* Who this is for + (OPTIONAL) HOW WE HELP */}
              <div className="about-split">
                <div className="about-col">
                  <div className="card-title">Who this is for</div>
                  <ul className="bullets">
                    <li><strong>Small businesses</strong> preparing for their first government contract</li>
                    <li><strong>Companies</strong> transitioning to public-sector work</li>
                    <li><strong>Prime contractors</strong> supporting subs and delivery partners</li>
                    <li><strong>Program teams</strong> needing compliant, traceable procurement to support delivery under oversight</li>
                  </ul>
                </div>

                <div className="about-col optional">
                  <div className="card-title">How we help</div>
                  <ul className="bullets">
                    <li>Translate contract and regulatory requirements into practical delivery workflows</li>
                    <li>Build documentation, controls, and review-ready artifacts that support oversight</li>
                    <li>Strengthen execution discipline while preserving team velocity</li>
                    <li>Support parts procurement with supplier vetting, traceability, and substitution control aligned to contract requirements</li>
                  </ul>
                </div>
              </div>

              {/* SUMMARY TABLE */}
              <div className="summaryTable" style={{ marginTop: 18 }}>
                <div className="summaryRow">
                  <div className="summaryKey">Focus</div>
                  <div className="summaryVal">Operational reliability + audit-ready delivery</div>
                </div>
                <div className="summaryRow">
                  <div className="summaryKey">Method</div>
                  <div className="summaryVal">Disciplined execution, controlled change</div>
                </div>
                <div className="summaryRow">
                  <div className="summaryKey">Outcome</div>
                  <div className="summaryVal">Predictable delivery under review</div>
                </div>
              </div>

              <hr className="hr-gold" />
            </div>

            {/* WHAT WE DO */}
            <div className="section-block">
              <div className="readable stack">
                <div className="kicker">WHAT WE DO</div>

                <h2 className="h3 about-h3">Clarity before award. Discipline during delivery.</h2>

                <p className="p">
                  We help teams understand what government contracts really require — before award,
                  during delivery, and under review.
                </p>
              </div>
            </div>

            {/*Contract-compliant procurement support */}
            <div className="surface card" style={{ marginTop: 16 }}>
              <div className="card-title">Contract-compliant procurement support</div>
              <p className="card-body">
                Procurement is often where government programs introduce risk. We help teams source parts in a way that preserves documentation, traceability, and controlled change — so delivery stays audit-ready.
              </p>
            </div>

            {/* HOW WE OPERATE */}
            <div className="section-block">
              <div className="readable stack">
                <div className="kicker">HOW WE OPERATE</div>
              </div>

              <div className="grid grid-2" style={{ marginTop: 16 }}>
                <div className="surface card">
                  <div className="card-title">Discipline</div>
                  <p className="card-body">Clear plans, structured delivery, minimal surprises.</p>
                </div>

                <div className="surface card">
                  <div className="card-title">Accountability</div>
                  <p className="card-body">Ownership, traceability, measurable progress.</p>
                </div>

                <div className="surface card">
                  <div className="card-title">Execution under pressure</div>
                  <p className="card-body">
                    Calm delivery when timelines tighten and oversight increases.
                  </p>
                </div>

                <div className="surface card">
                  <div className="card-title">Security by design</div>
                  <p className="card-body">Least-privilege access and audit-ready workflows.</p>
                </div>
              </div>

              {/* OPTIONAL BAND */}
              <div className="aboutBand">
                <div className="grid grid-2">
                  <div>
                    <div className="card-title">What “audit-ready” means</div>
                    <p className="card-body">
                      Controls, evidence, and documentation that hold up under oversight—without
                      slowing execution.
                    </p>
                  </div>
                  <div>
                    <div className="card-title">How we measure progress</div>
                    <p className="card-body">
                      Clear owners, tracked actions, and visible delivery milestones aligned to
                      contract requirements.
                    </p>
                  </div>
                </div>
              </div>

              <hr className="hr-gold" />
            </div>

            {/* VISION */}
            <div className="section-block">
              <div className="readable stack">
                <div className="kicker">WHERE WE’RE GOING</div>

                <p className="p">
                  Become a trusted partner for organizations entering government contracting — setting
                  a standard for clarity, professionalism, and execution discipline.
                </p>
              </div>
            </div>

            {/* TEAM */}
            <div className="section-block">
              <div className="readable stack">
                <div className="kicker">OUR TEAM</div>
                <h2 className="h2">People you can trust with mission-critical work.</h2>
                <p className="p" style={{ maxWidth: 760 }}>
                  A small team built around disciplined delivery, documentation-first workflows, and calm execution under oversight.
                </p>
              </div>

              {/** Team data (edit this list) */}
              {(() => {
                const TEAM = [
                  {
                    name: "Jordan Hayes",
                    title: "Founder • Systems Engineering & Delivery",
                    summary:
                      "Builds audit-ready operational systems and delivery discipline for government contracting environments.",
                    focus: ["Bid-to-delivery readiness", "Documentation-first workflows", "Governance-aligned execution"],
                    approach: "Documentation-first, systems-driven",
                    operatingStyle: "Calm execution under oversight",
                    // status: "Veteran-led" // optional: add per-person tags if you want
                  },
                  {
                    name: "Team Member Two",
                    title: "Program Delivery • Compliance",
                    summary:
                      "Supports controlled change, traceability, and review-ready documentation across contract delivery.",
                    focus: ["Evidence & documentation", "Change control", "Delivery governance"],
                    approach: "Controls-based, risk-aware",
                    operatingStyle: "Structured execution, clear ownership",
                  },
                  {
                    name: "Team Member Three",
                    title: "Procurement • Supplier Readiness",
                    summary:
                      "Helps teams source parts with traceability, flow-down compliance, and supplier vetting aligned to contract needs.",
                    focus: ["Supplier vetting", "Traceability & flow-downs", "Substitution control"],
                    approach: "Contract-aligned sourcing",
                    operatingStyle: "Thorough, fast turnarounds",
                  },
                ];

                return (
                  <div className="teamGrid" style={{ marginTop: 18 }}>
                    {TEAM.map((person) => (
                      <div key={person.name} className="surface card teamCard">
                        <div className="teamHeader">
                          <div className="teamAvatar" aria-hidden="true" />
                          <div>
                            <div className="card-title" style={{ marginBottom: 4 }}>{person.name}</div>
                            <div className="small">{person.title}</div>
                          </div>
                        </div>

                        <p className="card-body" style={{ marginTop: 12 }}>
                          {person.summary}
                        </p>

                        <hr className="hr-gold" />

                        <Card title="Focus areas">
                          <ul className="bullets">
                            {person.focus.map((f) => (
                              <li key={f}>{f}</li>
                            ))}
                          </ul>
                        </Card>

                        <div className="cred-strip" style={{ marginTop: 12 }}>
                          <div className="cred-item">
                            <div className="cred-k">Approach</div>
                            <div className="cred-v">{person.approach}</div>
                          </div>
                          <div className="cred-item">
                            <div className="cred-k">Operating style</div>
                            <div className="cred-v">{person.operatingStyle}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>


            {/* STATUS */}
            <div className="section-block">
              <div className="readable stack">
                <div className="kicker">STATUS</div>
                <p className="p">
                  Veteran-led / Veteran-owned (if applicable). Documentation available upon request.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}