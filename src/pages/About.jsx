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
          src="/SBA.svg"
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
      avatar: "/Marco.svg",
    },
    {
      name: "Adam Civil",
      title: "Chief Revenue Officer (CRO)",
      summary:
        "Leads revenue strategy, pipeline development, and customer growth across federal and commercial engagements.",
      focus: [
        "Revenue strategy & forecasting",
        "Pipeline development & qualification",
        "Customer acquisition & retention"
      ],
      approach: "Disciplined growth with measurable targets",
      operatingStyle: "Strategic, accountable, performance-driven",
      roleKey: "cro",
    },
    {
      name: "Lenny DelDuca",
      title: "Government Contracting Specialist • Client Development",
      summary:
        "Supports opportunity development and customer coordination to keep the pipeline aligned with capabilities.",
      focus: ["Opportunity intake", "Customer coordination", "Bid support"],
      approach: "Clear communication, fast follow-up",
      operatingStyle: "Responsive and consistent",
      roleKey: "sales",
    },
    {
      name: "Gabe Hernandez",
      title: "Government Contracting Specialist • Client Development",
      summary:
        "Builds relationships and helps qualify opportunities so delivery expectations stay realistic and clear.",
      focus: ["Lead qualification", "Partner outreach", "Customer alignment"],
      approach: "Strong relationships, clean handoffs",
      operatingStyle: "High energy, organized",
      roleKey: "sales",
    },
    {
      name: "Sancaina Senelus",
      title: "Government Contracting Specialist • Client Development",
      summary:
        "Supports outreach, scheduling, and customer readiness so the team can execute quickly when it matters.",
      focus: ["Outreach", "Scheduling", "Customer readiness"],
      approach: "Fast coordination, clear next steps",
      operatingStyle: "Precise and steady",
      roleKey: "sales",
    },
  ];

  // ✅ Official identifiers (from your partner)
  const REG = {
    legalName: "Advanced Civil Solutions LLC",
    cage: "0Q564",
    uei: "ST7BLLW7XAY6",
    sam: "Active",
    // If you don't want to mention JCP yet, set to "" and it won't render.
    jcp: "Joint Certification Program (JCP) Registered (DD Form 2345)",
  };

  const QUICK_SCAN = [
    {
      title: "Who we help",
      items: [
        "Businesses entering federal contracting",
        "Prime contractors managing suppliers",
        "Manufacturers and OEMs supporting government orders",
        "Distributors and resellers delivering contract items",
      ],
    },
    {
      title: "What we handle",
      items: [
        "Contract requirements and delivery planning",
        "Review-ready documentation",
        "Compliant sourcing and supplier coordination",
        "Execution support during delivery",
      ],
    },
    {
      title: "What clients get",
      items: [
        "Cleaner internal process",
        "Better documentation and traceability",
        "Fewer compliance issues",
        "More confidence during delivery",
      ],
    },
  ];

  const ID_TILES = [
    { label: "Legal Entity", value: REG.legalName },
    { label: "CAGE", value: REG.cage },
    { label: "UEI", value: REG.uei },
    { label: "SAM", value: REG.sam },
  ];

  const primaryExecutive =
    TEAM.find((person) => person.roleKey === "ceo") ?? TEAM[0];
  const leadershipTeam = TEAM.filter((person) => person.roleKey !== "sales");
  const specialistTeam = TEAM.filter((person) => person.roleKey === "sales");

  const renderTeamCard = (
    person,
    { blankAvatar = false, featured = false, eagerAvatar = false } = {}
  ) => (
    <div
      key={person.name}
      className={`surface card teamCard scroll-focus${featured ? " ceoCard" : ""}`}
    >
      <div className="teamHeader">
        <div className="teamAvatar" aria-hidden={blankAvatar || undefined}>
          {person.avatar ? (
            <img
              src={person.avatar}
              alt={`${person.name} headshot`}
              loading={eagerAvatar ? "eager" : "lazy"}
              decoding="async"
            />
          ) : blankAvatar ? null : (
            <div className="avatarPlaceholder" />
          )}
        </div>

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
          {person.focus.map((focusItem) => (
            <li key={focusItem}>{focusItem}</li>
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
  );

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
                  Advanced Civil Solutions helps organizations enter, manage,
                  and deliver government contracts. We build the documentation,
                  sourcing, and delivery systems that keep work compliant,
                  review-ready, and on time.
                </p>
              </div>

              <div className="about-quickGrid">
                {QUICK_SCAN.map((card) => (
                  <div key={card.title} className="surface card about-quickCard">
                    <div className="card-title">{card.title}</div>
                    <ul className="about-quickList">
                      {card.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="about-idGrid" aria-label="Company identifiers">
                {ID_TILES.map((tile) => (
                  <div key={tile.label} className="surface about-idItem">
                    <div className="about-idLabel">{tile.label}</div>
                    <div className="about-idValue">{tile.value}</div>
                  </div>
                ))}
              </div>

              {REG.jcp ? (
                <div className="about-idNote">
                  <div className="about-idLabel">Defense Authorization</div>
                  <div className="about-idValue">{REG.jcp}</div>
                  <div className="small">
                    Provided upon request for controlled technical data access.
                  </div>
                </div>
              ) : null}

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
                HOW WE OPERATE
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

              {leadershipTeam.length ? (
                <div
                  className="teamLeadershipGrid scroll-focus"
                  style={{ marginTop: 28 }}
                >
                  {leadershipTeam.map((person) =>
                    renderTeamCard(person, {
                      featured: person === primaryExecutive,
                      eagerAvatar: person === primaryExecutive,
                    })
                  )}
                </div>
              ) : null}

              {specialistTeam.length ? (
                <div className="teamGrid scroll-focus" style={{ marginTop: 16 }}>
                  {specialistTeam.map((person) =>
                    renderTeamCard(person, { blankAvatar: true })
                  )}
                </div>
              ) : null}

              <hr className="hr-gold" />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
