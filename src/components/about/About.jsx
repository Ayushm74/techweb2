import './About.css';

export default function About() {
  return (
    <div className="about hidden">
      <div style={{ zIndex: '2' }}>
        <h2>
          Are You  <span> Ready </span>?
        </h2>
        <p>
        FutureBytes,Annual techno-management fest and one of the largest 
        fests in Eastern India, is a highly anticipated event scheduled from 18th to 21th
        March 2025, which aims to engage science and technology enthusiasts 
        throughout India. Join FutureBytes as we connect with the brightest minds in technology 
        solving critical challenges facing our society, environment, and world today.
        </p>
      </div>
      <div className="lock" style={{background: `url('${new URL('/src/assets/gradient.svg', import.meta.url)}')`}}>
        <img src={new URL('/src/assets/lock.svg', import.meta.url)} alt="" />
      </div>
    </div>
  );
}
