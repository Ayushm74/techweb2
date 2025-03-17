import './About.css';

export default function About() {
  return (
    <div className="about hidden">
      <div style={{ zIndex: '2' }}>
        <h2>
          Are You  <span> Ready </span>?
        </h2>
        <p>
        <b>FutureBytes</b> – Eastern India's premier techno-management fest, returns from March 18-21, 2025! Join top innovators as they tackle society’s biggest challenges through science and technology. 
        </p>
      </div>
      <div className="lock" style={{background: `url('${new URL('/src/assets/gradient.svg', import.meta.url)}')`}}>
        <img src={new URL('/src/assets/lock.svg', import.meta.url)} alt="" />
      </div>
    </div>
  );
}
