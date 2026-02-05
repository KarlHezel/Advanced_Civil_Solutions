export default function Contact() {
  return (
    <div className="container">
      <div className="sectionHead">
        <h2>Contact</h2>
        <p className="muted">Tell us what you need — we’ll reply quickly.</p>
      </div>

      <div className="twoCol">
        <div className="card">
          <div className="cardTitle">Send a message</div>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted (demo). Wire this to email/CRM later.");
            }}
          >
            <label>
              Name
              <input required placeholder="Your name" />
            </label>

            <label>
              Email
              <input required type="email" placeholder="you@email.com" />
            </label>

            <label>
              Message
              <textarea required rows={5} placeholder="What are you looking to get done?" />
            </label>

            <button className="btnPrimary" type="submit">Submit</button>
          </form>
        </div>

        <div className="card">
          <div className="cardTitle">Direct</div>
          <p className="muted">Email: info@yourdomain.com</p>
          <p className="muted">Phone: (xxx) xxx-xxxx</p>
          <p className="muted">Hours: Mon–Fri</p>
          <div className="note">
            Want this form to email the owner? We can wire it to Microsoft 365 / Exchange later.
          </div>
        </div>
      </div>
    </div>
  );
}