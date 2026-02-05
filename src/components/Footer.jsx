export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div>
          <div className="footerTitle">Advanced Civil Solutions</div>
          <div className="muted">
            Professional civil services. Clean work. Clear communication.
          </div>
        </div>

        <div className="footerMeta">
          <div className="muted">© {new Date().getFullYear()} Advanced Civil Solutions</div>
          <div className="muted">Built with React</div>
        </div>
      </div>
    </footer>
  );
}