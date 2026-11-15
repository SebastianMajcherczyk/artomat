const PHONE = "+48 691 316 700";

const PhoneLink = () => (
  <div className="phone-link">
    <p>
      <a href={`tel:${PHONE}`}>{PHONE}</a>
    </p>
  </div>
);

export default PhoneLink;
