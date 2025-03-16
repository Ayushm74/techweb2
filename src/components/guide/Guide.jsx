import './Guide.css';

export default function Guide() {
  return (
    <div style={{ marginTop: '120px' }}>
      <div className="step hidden">
        <div className="iconWrapper">
          <img src={new URL('/src/assets/scan.svg', import.meta.url)} alt="Scan Icon" />
        </div>
        <p className="description">
          <span>Registration & Check-In</span> - Scan your QR code or register at the venue to kickstart your TechFest journey. Get access to workshops, hackathons, and exclusive tech talks.
        </p>
      </div>

      <div className="line" style={{ transform: 'rotate(180deg)' }}></div>
      <div className="line"></div>

      <div className="step hidden">
        <div className="iconWrapper">
          <img src={new URL('/src/assets/body.svg', import.meta.url)} alt="Hackathon & Workshops Icon" />
        </div>
        <p className="description">
          <span>Hackathon & Workshops</span> - Dive into 48 hours of coding, AI-powered challenges, and hands-on workshops with industry experts. Collaborate, innovate, and bring your ideas to life.
        </p>
      </div>

      <div className="line" style={{ transform: 'rotate(180deg)' }}></div>
      <div className="line"></div>

      <div className="step hidden">
        <div className="iconWrapper">
          <img src={new URL('/src/assets/checkmark.svg', import.meta.url)} alt="Submission & Evaluation Icon" />
        </div>
        <p className="description">
          <span>Project Submission & Evaluation</span> - Submit your final project for evaluation. Judges will review based on innovation, execution, and impact. Winners will be announced during the closing ceremony.
        </p>
      </div>
    </div>
  );
}
