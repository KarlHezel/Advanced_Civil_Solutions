import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import FadeIn from "../components/FadeIn.jsx";

export default function Home() {
  const capabilities = [
    {
      title: "Operational-grade systems",
      body: "Design and deployment of dependable platforms with predictable behavior, clear change control, and resilient failure modes.",
    },
    {
      title: "Infrastructure intelligence",
      body: "Telemetry pipelines, analytics, and dashboards that turn field signals into actionable decisions—without unnecessary complexity.",
    },
    {
      title: "Secure-by-design delivery",
      body: "Integration-ready architecture patterns aligned to enterprise expectations: auditing, least-privilege workflows, and controlled access.",
    },
    {
      title: "Field-ready solutions",
      body: "Hardware + software coordination for constrained environments—built for uptime, serviceability, and repeatable rollout.",
    },
    {
      title: "Compliance-friendly posture",
      body: "Documentation-minded implementation that supports reviews, approvals, and governance without slowing execution.",
    },
    {
      title: "Rapid pilot → production",
      body: "Start with a credible demo, validate stakeholders, then scale confidently with disciplined engineering practices.",
    },
  ];

  const trust = [
    {
      title: "Reliability",
      body: "Designed for stable operations with measured risk, clear rollback paths, and resilient defaults.",
    },
    {
      title: "Security",
      body: "Pragmatic controls that reduce exposure: least privilege, audit trails, and integration-ready identity patterns.",
    },
    {
      title: "Enterprise alignment",
      body: "Interfaces, documentation, and delivery methods that fit procurement, compliance, and mission timelines.",
    },
  ];

  return (
    <>
      <section className="hero">
        <Container>
          <div className="hero-inner">
            <FadeIn>
              <div className="hero-panel surface">
                <div className="badge">Premium • Government/Enterprise-ready • Mission-critical</div>
                <div className="kicker" style={{ marginTop: 16 }}>
                  Advanced Civil Solutions
                </div>
                <h1 className="h1">Engineering clarity for high-trust civil and security outcomes.</h1>
                <p className="p">
                  We build stable, audit-friendly solutions for organizations that cannot afford uncertainty—
                  from infrastructure intelligence to secure operational systems.
                </p>

                <div className="hero-actions">
                  <Button as={Link} to="/book-demo" variant="primary">
                    Book a Demo
                  </Button>
                  <Button as={Link} to="/contact" variant="ghost">
                    Contact
                  </Button>
                </div>

                <hr className="hr-gold" />

                <div className="small">
                  “Golden dome” principle: clean architecture, premium execution, dependable results.
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="surface card" style={{ padding: 18 }}>
                <div className="card-title">What’s possible</div>
                <p className="card-body">
                  Launch a credible pilot in weeks, with a path to enterprise production—without rebuilding from scratch.
                </p>
                <div style={{ marginTop: 14 }} className="summary">
                  <div className="kv"><b>Focus</b><span>High-trust systems & delivery</span></div>
                  <div className="kv"><b>Outcome</b><span>Operational stability + stakeholder confidence</span></div>
                  <div className="kv"><b>Method</b><span>Disciplined engineering, minimal risk</span></div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <FadeIn>
            <div className="kicker">Capabilities</div>
            <h2 className="h2">Structured solutions built for durability.</h2>
            <p className="p">
              Clear interfaces. Strong defaults. Gold-standard execution. Everything designed to be understood,
              operated, and trusted.
            </p>

            <div className="grid grid-3" style={{ marginTop: 18 }}>
              {capabilities.map((c) => (
                <Card key={c.title} title={c.title}>
                  {c.body}
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="section">
        <Container>
          <FadeIn>
            <div className="kicker">Trust & posture</div>
            <h2 className="h2">Credible by design—security, reliability, and compliance-friendly.</h2>
            <p className="p">
              We communicate clearly, document responsibly, and build systems that fit enterprise expectations.
            </p>

            <div className="grid grid-3" style={{ marginTop: 18 }}>
              {trust.map((t) => (
                <Card key={t.title} title={t.title}>
                  {t.body}
                </Card>
              ))}
            </div>

            <div className="surface" style={{ padding: 18, borderRadius: 16, marginTop: 18 }}>
              <div className="card-title">Ready for stakeholder review</div>
              <p className="card-body">
                This demo build shows the interaction patterns you’d expect in production:
                validated forms, persistent demo storage, calendar invites, and integration-ready API stubs.
              </p>
              <div className="hero-actions" style={{ marginTop: 14 }}>
                <Button as={Link} to="/book-demo" variant="primary">Book a Demo</Button>
                <Button as={Link} to="/about" variant="ghost">About Us</Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
