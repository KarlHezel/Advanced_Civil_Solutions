import React from "react";
import Container from "../components/Container.jsx";

export default function PrivacyPolicy() {
  const contactEmail = "contact@advancedcivilsolutionsllc.com";

  return (
    <section className="section">
      <Container>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ marginBottom: 24 }}>
            <div className="kicker section-kicker">LEGAL</div>
            <h1 className="h1" style={{ marginTop: 8 }}>
              Privacy Policy
            </h1>
            <p className="small" style={{ marginTop: 10 }}>
              <strong>Effective Date:</strong> January 1, 2026
            </p>
          </div>

          {/* Body Card */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              boxShadow: "var(--shadow)",
              padding: "28px",
            }}
          >
            <p className="p" style={{ marginTop: 0 }}>
              Advanced Civil Solutions LLC (“ACS,” “we,” “our,” or “us”) respects your
              privacy. This Privacy Policy explains how we collect, use, and protect
              personal information when you use our website.
            </p>

            <p className="p">
              By using this website, you agree to the terms of this Privacy Policy.
            </p>

            <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "22px 0" }} />

            <h2 className="h2" style={{ fontSize: "1.4rem", marginTop: 0 }}>
              1. Information We Collect
            </h2>
            <p className="p">
              We collect personal information only when you voluntarily submit it through
              our contact form. This may include:
            </p>
            <ul style={{ marginTop: 10, marginBottom: 16, paddingLeft: 20 }}>
              <li className="p" style={{ margin: "6px 0" }}>Name</li>
              <li className="p" style={{ margin: "6px 0" }}>Email address</li>
              <li className="p" style={{ margin: "6px 0" }}>Company name</li>
              <li className="p" style={{ margin: "6px 0" }}>Phone number</li>
              <li className="p" style={{ margin: "6px 0" }}>
                Any information you include in your message
              </li>
            </ul>
            <p className="p">
              Providing this information is voluntary. However, we may not be able to
              respond to your inquiry without it.
            </p>

            <h2 className="h2" style={{ fontSize: "1.4rem" }}>
              2. Information Collected Automatically
            </h2>
            <p className="p">
              We do not use advertising trackers or sell behavioral data. Our hosting
              provider may collect limited technical information (such as IP address,
              browser type, and timestamps) for security and operational purposes.
            </p>
            <p className="p">
              If we add analytics or tracking tools in the future, we will update this
              policy.
            </p>

            <h2 className="h2" style={{ fontSize: "1.4rem" }}>
              3. How We Use Your Information
            </h2>
            <p className="p">We use submitted information to:</p>
            <ul style={{ marginTop: 10, marginBottom: 16, paddingLeft: 20 }}>
              <li className="p" style={{ margin: "6px 0" }}>Respond to your inquiry</li>
              <li className="p" style={{ margin: "6px 0" }}>Communicate about our services</li>
              <li className="p" style={{ margin: "6px 0" }}>Follow up regarding next steps</li>
              <li className="p" style={{ margin: "6px 0" }}>Maintain internal business records</li>
            </ul>
            <p className="p">
              We do not sell, rent, or share your personal information with third parties
              for marketing purposes.
            </p>

            <h2 className="h2" style={{ fontSize: "1.4rem" }}>
              4. Legal Basis for Processing (EEA/UK)
            </h2>
            <p className="p">
              If you are located in the European Economic Area (EEA) or the United Kingdom,
              we process personal information based on your consent (when you submit the
              form) and our legitimate business interest in responding to inquiries.
            </p>

            <h2 className="h2" style={{ fontSize: "1.4rem" }}>
              5. Data Storage and Retention
            </h2>
            <p className="p">
              Form submissions are transmitted to our internal business email system.
              We retain personal information only as long as needed to respond to your
              inquiry, maintain business records, and meet legal obligations.
            </p>

            <h2 className="h2" style={{ fontSize: "1.4rem" }}>
              6. Sharing and Disclosure
            </h2>
            <p className="p">
              We do not sell personal information. We may disclose information if required
              by law or to protect our rights, safety, or property.
            </p>

            <h2 className="h2" style={{ fontSize: "1.4rem" }}>
              7. International Visitors
            </h2>
            <p className="p">
              Our website is hosted in the United States. If you access the site from outside
              the U.S., your information may be processed in the United States.
            </p>

            <h2 className="h2" style={{ fontSize: "1.4rem" }}>
              8. Your Rights
            </h2>
            <p className="p">
              Depending on your location, you may have the right to request access to, correction
              of, or deletion of your personal information, or to withdraw consent.
            </p>
            <p className="p">
              <strong>California residents:</strong> We do not sell personal information. You may
              request information about what we collect and request deletion by contacting us.
            </p>

            <h2 className="h2" style={{ fontSize: "1.4rem" }}>
              9. Data Security
            </h2>
            <p className="p">
              We use reasonable administrative and technical safeguards to protect personal
              information. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="h2" style={{ fontSize: "1.4rem" }}>
              10. Cookies
            </h2>
            <p className="p">
              We do not currently use advertising cookies. If we implement cookies for performance
              or analytics in the future, we will update this policy.
            </p>

            <h2 className="h2" style={{ fontSize: "1.4rem" }}>
              11. Third-Party Links
            </h2>
            <p className="p">
              Our website may contain links to third-party websites. We are not responsible for
              their privacy practices.
            </p>

            <h2 className="h2" style={{ fontSize: "1.4rem" }}>
              12. Children’s Privacy
            </h2>
            <p className="p">
              This website is not intended for children under 13, and we do not knowingly collect
              personal information from children.
            </p>

            <h2 className="h2" style={{ fontSize: "1.4rem" }}>
              13. Changes to This Policy
            </h2>
            <p className="p">
              We may update this Privacy Policy from time to time. Updates will be posted on this
              page with a revised effective date.
            </p>

            <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "22px 0" }} />

            <h2 className="h2" style={{ fontSize: "1.4rem", marginBottom: 8 }}>
              Contact
            </h2>
            <p className="p" style={{ marginTop: 0 }}>
              If you have questions about this policy or would like to make a privacy request,
              contact us at:
              <br />
              <strong>
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </strong>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
