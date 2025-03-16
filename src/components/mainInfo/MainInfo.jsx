import './MainInfo.css';

export default function MainInfo() {
  return (
    <div className="main-info">
      <h1 className="headline">
        FutureBytes
        <span className="event-date">18-21 March</span>
      </h1>
      <p id="info">  
        Join us for an electrifying journey where **technology meets creativity**.
      </p>
      <div style={{ marginTop: '30px', display: 'flex' }}>
        <a href="/brochure.pdf" target="_blank">Download Brochure</a>
        <a href="/register">Register Now</a>
      </div>
    </div>
  );
}
