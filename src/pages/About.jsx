// src/pages/About.jsx
import React, { useEffect } from "react";
import Container from "../components/Container.jsx";
import FadeIn from "../components/FadeIn.jsx";
import Card from "../components/Card.jsx";

/**
 * ✅ Sticky SBA badge is ALWAYS visible (no scroll listener).
 * Uses your existing CSS:
 *  - .cert-float + .is-visible
 *  - .cert-kicker / .cert-title / .cert-sub / .cert-badge
 */
function SBAFloat() {
  return (
    <div className="cert-float is-visible" aria-label="SBA certification">
      <div className="cert-kicker">Federal Certification</div>
      <div className="cert-title">Service-Disabled Veteran-Owned Small Business (SDVOSB)</div>
      <div className="cert-sub">Certified by the U.S. Small Business Administration</div>

      <div className="cert-badge">
        <img
          src="/SBA.webp"
          alt="U.S. Small Business Administration — Service-Disabled Veteran-Owned Certified"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function About() {
  // ✅ Scroll-focus fade behavior (tuned to feel consistent across section sizes)
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".scroll-focus"));

    // ✅ Force initial state for visible first transition
    els.forEach((el) => el.classList.remove("is-active"));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            requestAnimationFrame(() => e.target.classList.add("is-active"));
          } else {
            e.target.classList.remove("is-active");
          }
        });
      },
      {
        threshold: 0.15, // ✅ lower so large blocks still activate naturally
        rootMargin: "-15% 0px -15% 0px",
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // ✅ 7 people total (added 4)
  const TEAM = [
    {
      name: "Jordan Hayes",
      title: "Founder • Systems Engineering & Delivery",
      summary:
        "Builds audit-ready operational systems and delivery discipline for government contracting environments.",
      focus: [
        "Bid-to-delivery readiness",
        "Documentation-first workflows",
        "Governance-aligned execution",
      ],
      approach: "Documentation-first, systems-driven",
      operatingStyle: "Calm execution under oversight",
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

    // ✅ Added 4 more (edit names/titles as needed)
    {
      name: "Team Member Four",
      title: "Quality Systems • Audit Readiness",
      summary:
        "Builds practical quality systems that generate clean evidence and reduce compliance risk under review.",
      focus: ["QC/QA workflows", "Evidence packages", "Nonconformance handling"],
      approach: "Evidence-driven, pragmatic",
      operatingStyle: "Detail-oriented, low-drama execution",
    },
    {
      name: "Team Member Five",
      title: "Contracts • Flow-down & Compliance",
      summary:
        "Translates contract clauses into operational requirements and ensures subcontractor alignment.",
      focus: ["Clause interpretation", "Flow-down enforcement", "Compliance mapping"],
      approach: "Clause-to-process translation",
      operatingStyle: "Clear guidance, controlled risk",
    },
    {
      name: "Team Member Six",
      title: "Program Controls • Risk & Reporting",
      summary:
        "Tracks milestones, risks, and delivery health so execution remains predictable and review-ready.",
      focus: ["Risk registers", "Milestone tracking", "Status reporting"],
      approach: "Structured tracking with accountability",
      operatingStyle: "Calm, consistent execution",
    },
    {
      name: "Team Member Seven",
      title: "Supplier Quality • Verification & Traceability",
      summary:
        "Ensures procurement decisions preserve traceability and documentation integrity across suppliers.",
      focus: ["Supplier qualification", "Verification checks", "Traceability assurance"],
      approach: "Verification-based assurance",
      operatingStyle: "Thorough, fast turnarounds",
    },
  ];

  return (
    <section className="section about">
      {/* ✅ Sticky SBA floating badge (always visible) */}
      <SBAFloat />

      <Container>
        <div className="page-frame-left">
          <FadeIn>
            {/* =========================================================
                HERO / SUMMARY
               ========================================================= */}
            <div className="section-block scroll-focus">
              <div className="readable stack">
                <div className="kicker">ABOUT ADVANCED CIVIL SOLUTIONS</div>

                <h1 className="h2">
                  Government contracting readiness — built for teams at any stage.
                </h1>

                <p className="p">
                  Advanced Civil Solutions helps organizations prepare for and operate within government contracting
                  environments by establishing <strong>disciplined delivery systems</strong>,{" "}
                  <strong>repeatable processes</strong>, and <strong>audit-aware execution</strong>. We support{" "}
                  <strong>contract-aligned parts procurement</strong> to help teams source components with traceability,
                  flow-down compliance, and documentation that holds up under review. For organizations entering government
                  contracting for the first time, we help clarify what’s required before mistakes become costly.
                </p>
              </div>

              <div className="about-split">
                <div className="about-col">
                  <div className="card-title">Who this is for</div>
                  <ul className="bullets">
                    <li>
                      <strong>Small businesses</strong> preparing for their first government contract
                    </li>
                    <li>
                      <strong>Companies</strong> transitioning to public-sector work
                    </li>
                    <li>
                      <strong>Prime contractors</strong> supporting subs and delivery partners
                    </li>
                    <li>
                      <strong>Program teams</strong> needing compliant, traceable procurement to support delivery under
                      oversight
                    </li>
                  </ul>
                </div>

                <div className="about-col optional">
                  <div className="card-title">How we help</div>
                  <ul className="bullets">
                    <li>Translate contract and regulatory requirements into practical delivery workflows</li>
                    <li>Build documentation, controls, and review-ready artifacts that support oversight</li>
                    <li>Strengthen execution discipline while preserving team velocity</li>
                    <li>
                      Support parts procurement with supplier vetting, traceability, and substitution control aligned to
                      contract requirements
                    </li>
                  </ul>
                </div>
              </div>

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

            {/* =========================================================
                WHAT WE DO
               ========================================================= */}
            <div className="section-block scroll-focus">
              <div className="readable stack">
                <div className="kicker">WHAT WE DO</div>

                <h2 className="h3 about-h3">Clarity before award. Discipline during delivery.</h2>

                <p className="p">
                  We help teams understand what government contracts really require — before award, during delivery, and
                  under review.
                </p>
              </div>

              <div className="grid grid-2" style={{ marginTop: 16 }}>
                <div className="surface card">
                  <div className="card-title">Bid-to-delivery readiness</div>
                  <p className="card-body">
                    Translate requirements into owners, artifacts, timelines, and review-ready delivery systems.
                  </p>
                </div>

                <div className="surface card">
                  <div className="card-title">Governance & change control</div>
                  <p className="card-body">
                    Reduce risk with controlled substitutions, approvals, traceability, and consistent evidence.
                  </p>
                </div>

                <div className="surface card">
                  <div className="card-title">Documentation-first execution</div>
                  <p className="card-body">
                    Build documentation as you deliver — so oversight isn’t a scramble.
                  </p>
                </div>

                <div className="surface card">
                  <div className="card-title">Contract-compliant procurement support</div>
                  <p className="card-body">
                    Supplier vetting, traceability, flow-down compliance, and substitution control aligned to contract
                    needs.
                  </p>
                </div>
              </div>

              <hr className="hr-gold" />
            </div>

            {/* =========================================================
                HOW WE OPERATE
               ========================================================= */}
            <div className="section-block scroll-focus">
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
                  <p className="card-body">Calm delivery when timelines tighten and oversight increases.</p>
                </div>

                <div className="surface card">
                  <div className="card-title">Security by design</div>
                  <p className="card-body">Least-privilege access and audit-ready workflows.</p>
                </div>
              </div>

              <div className="aboutBand">
                <div className="grid grid-2">
                  <div>
                    <div className="card-title">What “audit-ready” means</div>
                    <p className="card-body">
                      Controls, evidence, and documentation that hold up under oversight—without slowing execution.
                    </p>
                  </div>
                  <div>
                    <div className="card-title">How we measure progress</div>
                    <p className="card-body">
                      Clear owners, tracked actions, and visible delivery milestones aligned to contract requirements.
                    </p>
                  </div>
                </div>
              </div>

              <hr className="hr-gold" />
            </div>

            {/* =========================================================
                WHERE WE’RE GOING
               ========================================================= */}
            <div className="section-block scroll-focus">
              <div className="readable stack">
                <div className="kicker">WHERE WE’RE GOING</div>

                <p className="p">
                  Become a trusted partner for organizations entering government contracting — setting a standard for
                  clarity, professionalism, and execution discipline.
                </p>
              </div>

              <hr className="hr-gold" />
            </div>

            {/* =========================================================
                TEAM
            ========================================================= */}
            <div className="section-block">

              {/* Header fades in */}
              <div className="readable stack scroll-focus">
                <div className="kicker">OUR TEAM</div>
                <h2 className="h2">People you can trust with mission-critical work.</h2>
                <p className="p" style={{ maxWidth: 760 }}>
                  A small team built around disciplined delivery, documentation-first workflows, and calm execution under oversight.
                </p>
              </div>

              {/* ================================================
                  FOUNDER — centered, above the grid
              ================================================ */}
              <div
                className="scroll-focus"
                style={{
                  maxWidth: 720,
                  margin: "40px auto 60px auto",
                }}
              >
                <div className="surface card teamCard scroll-focus">
                  <div className="teamHeader" style={{ justifyContent: "center" }}>
                    <div className="teamAvatar" aria-hidden="true" />
                    <div style={{ textAlign: "left" }}>
                      <div className="card-title" style={{ marginBottom: 4 }}>
                        {TEAM[0].name}
                      </div>
                      <div className="small">{TEAM[0].title}</div>
                    </div>
                  </div>

                  <p className="card-body" style={{ marginTop: 14 }}>
                    {TEAM[0].summary}
                  </p>

                  <hr className="hr-gold" />

                  <Card title="Focus areas">
                    <ul className="bullets">
                      {TEAM[0].focus.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </Card>

                  <div className="cred-strip" style={{ marginTop: 12 }}>
                    <div className="cred-item">
                      <div className="cred-k">Approach</div>
                      <div className="cred-v">{TEAM[0].approach}</div>
                    </div>
                    <div className="cred-item">
                      <div className="cred-k">Operating style</div>
                      <div className="cred-v">{TEAM[0].operatingStyle}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ================================================
                  Remaining team members (grid)
              ================================================ */}
              <div className="teamGrid scroll-focus" style={{ marginTop: 10 }}>
                {TEAM.slice(1).map((person) => (
                  <div key={person.name} className="surface card teamCard scroll-focus">
                    <div className="teamHeader">
                      <div className="teamAvatar" aria-hidden="true" />
                      <div>
                        <div className="card-title" style={{ marginBottom: 4 }}>
                          {person.name}
                        </div>
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

              <hr className="hr-gold" />
            </div>

          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
