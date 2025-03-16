import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="content">
        <h1>
          FutureBytes<span> 2025</span>
        </h1>
        <div id="socials">
          <img src={new URL('/src/assets/socialMediaIcons/github.svg', import.meta.url)} alt="Github icon" />
          <a href="#">Gituhub</a>
          <img src={new URL('/src/assets/socialMediaIcons/facebook.svg', import.meta.url)} alt="Facebook icon" />
          <a href="#">Facebook</a>
          <img src={new URL('/src/assets/socialMediaIcons/instagram.svg', import.meta.url)} alt="Instagram icon" />
          <a href="#">Instagram</a>
          <img src={new URL('/src/assets/socialMediaIcons/twitterX.svg', import.meta.url)} alt="X icon" />
          <a href="#">Twitter</a>
        </div>
        <div id="links">
          <a href="#">Privacy</a>
          <a href="#">Docs</a>
          <a href="#">Policy</a>
          <a href="#">Contact</a>
          <a href="#">Try now</a>
          <a href="#">Regulation</a>
        </div>
      </div>
    </footer>
  );
}
