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
          rootMargin: "-60px 0px 0px 0px",
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
      {/* HERO */}
      <FadeIn>
        <div className="hero-full segment segment-hero scroll-focus">
          <Container>
            <div className="hero-full-inner">
              <div className="page-frame-left">
                <div className="readable stack">
                  <h1 className="h1 h1-hero">
                    <span className="hero-line hero-line-2">
                      We help companies win and deliver government contracts.
                    </span>
                    <span className="hero-line hero-line-3">
                      Built for teams that need proof, not promises.
                    </span>
                  </h1>

                  <p className="p" style={{ maxWidth: 820 }}>
                    We help you bid as a prime, stay compliant, and deliver on time — with
                    clear documentation and fewer last-minute issues.
                  </p>
                </div>
              </div>

              {/* PROOF + CERT */}
              <div>
                <div className="section-divider" aria-hidden="true"></div>

                <div className="proofStrip" aria-label="Credibility highlights">
                  <div className="proofRow">
                    <div className="proofItem">
                      <div className="statNum">1,000+</div>
                      <div className="proofV">FEDERAL CONTRACTS SUPPORTED</div>
                    </div>

                    <div className="proofItem">
                      <div className="statNum">100+</div>
                      <div className="proofV">COMPANIES SUPPORTED</div>
                    </div>

                    <div className="proofItem">
                      <div className="statNum">30+</div>
                      <div className="proofV">YEARS OF INDUSTRY EXPERIENCE</div>
                    </div>
                  </div>
                </div>

                <div className="cert-block" aria-label="Federal certification">
                  <div className="cert-kicker">Federal Certification</div>

                  <h3 className="cert-title">
                    Service-Disabled Veteran-Owned Small Business (SDVOSB)
                  </h3>

                  <p className="cert-sub">
                    Certified by the U.S. Small Business Administration
                  </p>

                  <div id="sba-sentinel" aria-hidden="true" />

                  <div className="cert-badge">
                    <img
                      src="/SBA.webp"
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

      {/* WHAT WE DO */}
      <div className="hero-full segment segment-what scroll-focus">
        <Container>
          <div className="page-frame-left">
            <div className="kicker section-kicker">WHAT WE DO</div>
            <h2 className="h2">Government contracting. Simplified. Delivered right.</h2>

            <p className="p" style={{ maxWidth: 820 }}>
              We handle bidding, compliance, sourcing, and delivery so your team can win
              work and deliver without the chaos.
            </p>

            <div className="grid grid-3" style={{ maxWidth: 1200 }}>
              <Card>
                <div className="stack">
                  <div className="card-title">SDVOSB Prime Contracting</div>
                  <p className="card-body">
                    We bid, win, and execute federal contracts as an SDVOSB. We partner
                    with manufacturers and suppliers to deliver compliant, on-time results.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="stack">
                  <div className="card-title">Consulting &amp; Training</div>
                  <p className="card-body">
                    We teach teams how to enter federal contracting, navigate SAM/JCP/DIBBS,
                    and build the processes needed to win and manage contracts.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="stack">
                  <div className="card-title">Contract Administration &amp; Procurement</div>
                  <p className="card-body">
                    We manage sourcing, paperwork, compliance, and supplier coordination so
                    deliveries stay organized and contract-compliant.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>

      {/* WHAT YOU GET */}
      <div className="hero-full segment segment-how scroll-focus">
        <Container>
          <div className="page-frame-left">
            <div className="kicker section-kicker">WHAT YOU GET</div>
            <h2 className="h2">Clear delivery. Fewer compliance mistakes.</h2>

            <div className="grid grid-3" style={{ maxWidth: 1200 }}>
              <Card>
                <div className="stack">
                  <div className="card-title">Faster Contract Readiness</div>
                  <p className="card-body">
                    Clear owners, clear requirements, and a simple plan to follow.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="stack">
                  <div className="card-title">Clean Documentation</div>
                  <p className="card-body">
                    Records that are easy to find when the government asks for them.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="stack">
                  <div className="card-title">On-Time Delivery</div>
                  <p className="card-body">
                    Verified parts and suppliers, fewer delays, and delivery that meets
                    contract requirements.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>

      {/* HOW IT WORKS */}
      <div className="hero-full segment segment-how scroll-focus">
        <Container>
          <div className="page-frame-left">
            <div className="kicker section-kicker">HOW IT WORKS</div>
            <h2 className="h2">A simple, structured engagement.</h2>

            <div className="grid grid-4" style={{ maxWidth: 1200 }}>
              <Card>
                <div className="stack">
                  <div className="card-title">1) Assess</div>
                  <p className="card-body">We evaluate where you are and what’s missing.</p>
                </div>
              </Card>

              <Card>
                <div className="stack">
                  <div className="card-title">2) Implement</div>
                  <p className="card-body">
                    We put the workflows and documentation in place.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="stack">
                  <div className="card-title">3) Operate</div>
                  <p className="card-body">
                    We support sourcing and delivery while you execute the contract.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="stack">
                  <div className="card-title">4) Improve</div>
                  <p className="card-body">
                    We tighten the process as you take on more work.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>

      {/* WHO WE SUPPORT */}
      <div className="hero-full segment segment-who scroll-focus">
        <Container>
          <div className="page-frame-left">
            <div className="kicker section-kicker">WHO WE SUPPORT</div>
            <h2 className="h2">Who we work with.</h2>

            <div className="grid grid-2" style={{ maxWidth: 980 }}>
              <Card>
                <div className="stack">
                  <div className="card-title">Businesses entering federal contracting</div>
                  <p className="card-body">
                    Avoid common early mistakes and start bidding the right way.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="stack">
                  <div className="card-title">Prime contractors managing suppliers</div>
                  <p className="card-body">
                    Keep vendors coordinated and avoid last-minute issues.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="stack">
                  <div className="card-title">Manufacturers and OEMs</div>
                  <p className="card-body">
                    Compliant sourcing, clean paperwork, and reliable fulfillment.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="stack">
                  <div className="card-title">Distributors and resellers</div>
                  <p className="card-body">
                    Clear documentation and delivery that meets contract requirements.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>

      {/* FLOATING SBA BADGE */}
      <div className="cert-float" id="sba-float" aria-label="Federal certification (floating)">
        <div className="cert-kicker">Federal Certification</div>

        <h3 className="cert-title">
          Service-Disabled Veteran-Owned Small Business (SDVOSB)
        </h3>

        <p className="cert-sub">Certified by the U.S. Small Business Administration</p>

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
