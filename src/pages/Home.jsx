// src/pages/Home.jsx
import React, { useEffect } from "react";
import Container from "../components/Container.jsx";
import FadeIn from "../components/FadeIn.jsx";
import Card from "../components/Card.jsx";

export default function Home() {
  useEffect(() => {
    // =========================
    // Scroll-focus fade behavior
    // =========================
    const els = Array.from(document.querySelectorAll(".scroll-focus"));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-active");
          else e.target.classList.remove("is-active");
        });
      },
      {
        threshold: 0.55,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    els.forEach((el) => obs.observe(el));

    // =========================
    // SBA floating badge trigger
    // Show sticky when TOP of static SBA leaves viewport
    // =========================
    const sentinel = document.getElementById("sba-sentinel");
    const floating = document.getElementById("sba-float");

    let obsSBA = null;

    if (sentinel && floating) {
      obsSBA = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            floating.classList.remove("is-visible");
          } else {
            floating.classList.add("is-visible");
          }
        },
        {
          threshold: 0,
          rootMargin: "-60px 0px 0px 0px", // appears a bit earlier
        }
      );

      obsSBA.observe(sentinel);
    }

    return () => {
      obs.disconnect();
      if (obsSBA) obsSBA.disconnect();
    };
  }, []);

  return (
    <section className="section home">
      {/* FULL-WIDTH HERO BAND */}
      <FadeIn>
        <div className="hero-full segment segment-hero scroll-focus">
          <Container>
            <div className="hero-full-inner">
              <div className="page-frame-left">
                <div className="readable stack">
                  <h1 className="h1 h1-hero">
                    <span className="hero-line-1">
                      Government Contracting Readiness — SDVOSB{" "}
                    </span>
                    <span className="hero-break">Quality By Design. </span>
                  </h1>

                  <p className="p">
                    We help teams deliver clear, consistent work—with quality built
                    in, not added later—so expectations are met and execution stays
                    focused.
                  </p>
                </div>
              </div>

              {/* DELIVERY SNAPSHOT — divider + stats + certification */}
              <div>
                <div className="section-divider" aria-hidden="true"></div>

                {/* Credibility highlights */}
                <div className="proofStrip" aria-label="Credibility highlights">
                  <div className="proofRow">
                    <div className="proofItem">
                      <div className="statNum">1,000+</div>
                      <div className="proofV">Total Awarded Contracts</div>
                    </div>

                    <div className="proofItem">
                      <div className="statNum">100+</div>
                      <div className="proofV">Manufacturing Partners</div>
                    </div>

                    <div className="proofItem">
                      <div className="statNum">30+</div>
                      <div className="proofV">Years of Industry Experience</div>
                    </div>
                  </div>
                </div>

                {/* SBA CERTIFICATION BLOCK (static / in-flow) */}
                <div className="cert-block" aria-label="Federal certification">
                  <div className="cert-kicker">Federal certification</div>

                  <h3 className="cert-title">
                    Service-Disabled Veteran-Owned Small Business (SDVOSB)
                  </h3>

                  <p className="cert-sub">
                    Certified by the U.S. Small Business Administration
                  </p>

                  {/* 🔥 Sentinel: "top of SBA" trigger */}
                  <div id="sba-sentinel" aria-hidden="true" />

                  <div className="cert-badge">
                  <img
                    src="/SBA.webp"          // convert to webp if possible
                    alt="U.S. Small Business Administration — Service-Disabled Veteran-Owned Certified"
                    loading="eager"
                    fetchpriority="high"
                    decoding="async"
                    width="98"
                    height="98"
                  />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </FadeIn>

      {/* FULL-WIDTH BAND: WHAT WE DO */}
      <div className="hero-full segment segment-what scroll-focus">
        <Container>
          <div className="page-frame-left">
            <div className="kicker section-kicker">WHAT WE DO</div>
            <h2 className="h2">
              Operational support aligned to government expectations.
            </h2>

            <p className="p" style={{ maxWidth: 820 }}>
              We install lightweight systems that make delivery easier to manage—and
              easier to defend during review.
            </p>

            <div className="grid grid-3" style={{ maxWidth: 1200 }}>
              <Card>
                <div className="stack">
                  <div className="card-title">Procurement support</div>
                  <p className="card-body">
                    Supplier vetting, flow-down alignment, and traceable sourcing.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="stack">
                  <div className="card-title">Compliance-friendly delivery</div>
                  <p className="card-body">
                    Documentation, artifacts, and evidence built into execution.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="stack">
                  <div className="card-title">Change control</div>
                  <p className="card-body">
                    Approvals, substitutions, decision logs, and review-ready outcomes.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>

      {/* FULL-WIDTH BAND: HOW IT WORKS */}
      <div className="hero-full segment segment-how scroll-focus">
        <Container>
          <div className="page-frame-left">
            <div className="kicker section-kicker">HOW IT WORKS</div>
            <h2 className="h2">A simple, structured engagement.</h2>

            <div className="grid grid-3" style={{ maxWidth: 1200 }}>
              <Card>
                <div className="stack">
                  <div className="card-title">Assess</div>
                  <p className="card-body">
                    Objectives, constraints, contract requirements, and current gaps.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="stack">
                  <div className="card-title">Implement</div>
                  <p className="card-body">
                    Owners, workflows, templates, and control points.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="stack">
                  <div className="card-title">Operate</div>
                  <p className="card-body">
                    Repeatable execution with traceability and review-ready artifacts.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>

      {/* FULL-WIDTH BAND: WHO WE SUPPORT */}
      <div className="hero-full segment segment-who scroll-focus">
        <Container>
          <div className="page-frame-left">
            <div className="kicker section-kicker">WHO WE SUPPORT</div>
            <h2 className="h2">Built for teams that need proof, not promises.</h2>

            <div className="grid grid-2" style={{ maxWidth: 980 }}>
              <Card>
                <div className="stack">
                  <div className="card-title">
                    Small businesses entering federal work
                  </div>
                  <p className="card-body">
                    Understand expectations early and avoid expensive rework later.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="stack">
                  <div className="card-title">Prime contractors managing suppliers</div>
                  <p className="card-body">
                    Cleaner flow-downs, clearer evidence, fewer surprises in review.
                  </p>
                </div>
              </Card>
            </div>


          </div>
        </Container>
      </div>

      {/* FLOATING CERTIFICATION BLOCK (bottom-right, fades in/out) */}
      <div
        className="cert-float"
        id="sba-float"
        aria-label="Federal certification (floating)"
      >
        <div className="cert-kicker">Federal Certification</div>

        <h3 className="cert-title">
          Service-Disabled Veteran-Owned Small Business (SDVOSB)
        </h3>

        <p className="cert-sub">
          Certified by the U.S. Small Business Administration
        </p>

        <div className="cert-badge">
          <img
            src="/SBA.webp"
            alt="U.S. Small Business Administration — Service-Disabled Veteran-Owned Certified"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
