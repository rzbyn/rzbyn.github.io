import { JSX } from "react";

function Footer(): JSX.Element {
  return (
    <footer className="flex justify-between">
      <div>
        &#169; 2025 Reza Bayuni.
      </div>
      <div className="flex space-x-2">
        <a href="mailto:hi@rzbyn.com" target="_blank" rel="noopener noreferrer">Email</a>
        <a href="https://www.github.com/rzbyn" target="_blank" rel="noopener norefferer">Github</a>
        <a href="https://www.linkedin.com/in/rezabayuni" target="_blank" rel="noopener norefferer">LinkedIn</a>
      </div>
    </footer>
  )
}

export default Footer;

