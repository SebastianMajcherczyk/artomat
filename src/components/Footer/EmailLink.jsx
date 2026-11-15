const EMAIL = "kontakt@loftprint.pl";

const EmailLink = () => (
  <div className="email-link">
    <p>
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
    </p>
  </div>
);

export default EmailLink;
