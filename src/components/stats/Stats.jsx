import './Stats.css';
import Stat from './Stat';
import { useEffect } from 'react';

export default function Stats() {
  useEffect(() => {
    const observer = new IntersectionObserver((stats) => {
      const bars = document.querySelectorAll('.bar');
      if (stats[0].isIntersecting) {
        bars.forEach((e) => {
          e.classList.add('long');
        });
      } else {
        bars.forEach((e) => {
          e.classList.remove('long');
        });
      }
    });
    const bars = document.getElementById('stats');
    if (bars) observer.observe(bars);
  }, []);

  return (
    <div id="stats">
      <Stat text="10+ Industry Experts & Mentors" />      
      <Stat text="500+ Innovators Participating" />
      <Stat text="48 Hours of Non-Stop Coding" />

    </div>
  );
}
