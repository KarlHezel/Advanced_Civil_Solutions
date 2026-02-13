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
      <div className="cert-title">
        Service-Disabled Veteran-Owned Small Business (SDVOSB)
      </div>
      <div className="cert-sub">
        Certified by the U.S. Small Business Administration
      </div>

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
        threshold: 0.15,
        rootMargin: "-15% 0px -15% 0px",
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // ✅ Leadership / Connections
  const TEAM = [
    {
      name: "Marco Rojas",
      title: "Chief Executive Officer (CEO)",
      summary:
        "Leads company strategy, partner relationships, and delivery accountability across federal work.",
      focus: [
        "Prime strategy & contract positioning",
        "Executive oversight on delivery",
        "Partner coordination & escalation",
      ],
      approach: "Direct leadership with clear priorities",
      operatingStyle: "Decisive, calm under pressure",
      roleKey: "ceo",
    },
    {
      name: "Karl Hezel",
      title: "Chief Technology Officer (CTO)",
      summary:
        "Leads technical execution and delivery systems to keep work review-ready and stable under constraints.",
      focus: [
        "Technical delivery planning",
        "Systems & process design",
        "Risk reduction through structure",
      ],
      approach: "Simple systems that scale",
      operatingStyle: "Structured, detail-aware",
      roleKey: "cto",
    },
    {
      name: "Lenny DelDuca",
      title: "Sales",
      summary:
        "Supports opportunity development and customer coordination to keep the pipeline aligned with capabilities.",
      focus: ["Opportunity intake", "Customer coordination", "Bid support"],
      approach: "Clear communication, fast follow-up",
      operatingStyle: "Responsive and consistent",
      roleKey: "sales",
    },
    {
      name: "Gabe Hernandez",
      title: "Sales",
      summary:
        "Builds relationships and helps qualify opportunities so delivery expectations stay realistic and clear.",
      focus: ["Lead qualification", "Partner outreach", "Customer alignment"],
      approach: "Strong relationships, clean handoffs",
      operatingStyle: "High energy, organized",
      roleKey: "sales",
    },
    {
      name: "Adam Civil",
      title: "Sales",
      summary:
        "Drives customer communication and supports proposals to keep opportunities moving without confusion.",
      focus: ["Proposal support", "Follow-through", "Customer updates"],
      approach: "Simple messaging, steady progress",
      operatingStyle: "Reliable, low-friction",
      roleKey: "sales",
    },
    {
      name: "Sancaina Senelus",
      title: "Sales",
      summary:
        "Supports outreach, scheduling, and customer readiness so the team can execute quickly when it matters.",
      focus: ["Outreach", "Scheduling", "Customer readiness"],
      approach: "Fast coordination, clear next steps",
      operatingStyle: "Precise and steady",
      roleKey: "sales",
    },
  ];

  return (
    <section className="section about">
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
                  We help companies win and deliver government contracts.
                </h1>

                <p className="p">
                  Advanced Civil Solutions helps organizations win, manage, and
                  deliver government contracts. We set up the documentation,
                  sourcing, and delivery processes required by federal buyers—so
                  your work stays compliant and your deliveries stay on time. If
                  you’re new to government contracting, we help you get set up
                  correctly before mistakes become expensive.
                </p>
              </div>

              <div className="about-split">
                <div className="about-col">
                  <div className="card-title">Who we support</div>
                  <ul className="bullets">
                    <li>Businesses entering federal contracting</li>
                    <li>Prime contractors managing suppliers</li>
                    <li>Manufacturers and OEMs supporting government orders</li>
                    <li>Distributors and resellers delivering contract items</li>
                  </ul>
                </div>

                <div className="about-col optional">
                  <div className="card-title">How we help</div>
                  <ul className="bullets">
                    <li>
                      Break down contract requirements into clear steps your
                      team can follow
                    </li>
                    <li>
                      Set up documentation that’s ready for government review
                    </li>
                    <li>
                      Support execution during delivery so nothing falls through
                      the cracks
                    </li>
                    <li>
                      Help source parts with traceability and compliant supplier
                      documentation
                    </li>
                  </ul>
                </div>
              </div>

              <div className="summaryTable" style={{ marginTop: 18 }}>
                <div className="summaryRow">
                  <div className="summaryKey">Focus</div>
                  <div className="summaryVal">
                    Winning and delivering government contracts
                  </div>
                </div>
                <div className="summaryRow">
                  <div className="summaryKey">Method</div>
                  <div className="summaryVal">
                    Clear processes, clean documentation, compliant sourcing
                  </div>
                </div>
                <div className="summaryRow">
                  <div className="summaryKey">Outcome</div>
                  <div className="summaryVal">
                    On-time delivery and fewer compliance issues
                  </div>
                </div>
              </div>

              <hr className="hr-gold" />
            </div>

            {/* =========================================================
                WHAT WE DO (3 boxes)
               ========================================================= */}
            <div className="section-block scroll-focus">
              <div className="readable stack">
                <div className="kicker">WHAT WE DO</div>

                <h2 className="h3 about-h3">
                  Built for teams that need proof, not promises.
                </h2>

                <p className="p">
                  Government contracting is strict for a reason. We help you
                  meet requirements, stay organized, and deliver correctly.
                </p>
              </div>

              {/* Keep your grid-2 layout; third card spans full width */}
              <div className="grid grid-2" style={{ marginTop: 16 }}>
                <div className="surface card">
                  <div className="card-title">SDVOSB Prime Contracting</div>
                  <p className="card-body">
                    We bid, win, and deliver federal contracts as a
                    Service-Disabled Veteran-Owned Small Business. We partner
                    with manufacturers and suppliers to deliver compliant,
                    on-time results.
                  </p>
                </div>

                <div className="surface card">
                  <div className="card-title">Consulting & Training</div>
                  <p className="card-body">
                    We help companies enter government contracting and build the
                    processes needed to win and manage contracts successfully.
                  </p>
                </div>

                <div className="surface card" style={{ gridColumn: "1 / -1" }}>
                  <div className="card-title">
                    Contract Administration & Procurement
                  </div>
                  <p className="card-body">
                    We manage sourcing, documentation, compliance, and supplier
                    coordination so deliveries stay organized and ready for
                    government review.
                  </p>
                </div>
              </div>

              <hr className="hr-gold" />
            </div>

            {/* =========================================================
                HOW WE OPERATE (cleaner language)
               ========================================================= */}
            <div className="section-block scroll-focus">
              <div className="readable stack">
                <div className="kicker">HOW WE OPERATE</div>
              </div>

              <div className="grid grid-2" style={{ marginTop: 16 }}>
                <div className="surface card">
                  <div className="card-title">Discipline</div>
                  <p className="card-body">
                    Clear plans. Clean handoffs. Fewer surprises.
                  </p>
                </div>

                <div className="surface card">
                  <div className="card-title">Accountability</div>
                  <p className="card-body">Clear owners and tracked action items.</p>
                </div>

                <div className="surface card">
                  <div className="card-title">Execution under pressure</div>
                  <p className="card-body">
                    Calm delivery when timelines get tight.
                  </p>
                </div>

                <div className="surface card">
                  <div className="card-title">Security by design</div>
                  <p className="card-body">
                    Access control and clean records for government work.
                  </p>
                </div>
              </div>

              <div className="aboutBand">
                <div className="grid grid-2">
                  <div>
                    <div className="card-title">What “review-ready” means</div>
                    <p className="card-body">
                      Documentation and traceability that can stand up to
                      government review—without slowing delivery.
                    </p>
                  </div>
                  <div>
                    <div className="card-title">How we measure progress</div>
                    <p className="card-body">
                      Milestones, owners, and status updates tied to contract
                      requirements.
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
                  We aim to be the partner teams rely on when contract
                  requirements are high and delivery must be right the first
                  time.
                </p>
              </div>

              <hr className="hr-gold" />
            </div>

            {/* =========================================================
                TEAM
               ========================================================= */}
            <div className="section-block">
              <div className="readable stack scroll-focus">
                <div className="kicker">OUR TEAM</div>
                <h2 className="h2">People you can trust with mission-critical work.</h2>
                <p className="p" style={{ maxWidth: 760 }}>
                  A small team focused on clear documentation, compliant
                  sourcing, and organized delivery—so government work gets done
                  right.
                </p>
              </div>

              {/* CEO — top card (gold) */}
              <div
                className="scroll-focus"
                style={{ maxWidth: 820, margin: "40px auto 30px auto" }}
              >
                <div className="surface card teamCard ceoCard scroll-focus">
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

              {/* Row 2 — CTO (left) + Sales (right) */}
              <div className="grid grid-2 scroll-focus" style={{ marginTop: 10 }}>
                {TEAM.slice(1, 3).map((person) => (
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

              {/* Row 3 — 3 Sales cards */}
              <div className="teamGrid scroll-focus" style={{ marginTop: 16 }}>
                {TEAM.slice(3).map((person) => (
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
