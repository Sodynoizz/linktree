import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faTwitter,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/animation.css";

export function GitHubIcon() {
  return (
    <FontAwesomeIcon
      icon={faGithub}
      width="30"
      height="30"
      className="hover:text-violet-500"
    />
  );
}

export function FacebookIcon() {
  return (
    <FontAwesomeIcon
      icon={faFacebook}
      width="30"
      height="30"
      className="hover:text-blue-500"
    />
  );
}

export function TwitterIcon() {
  return (
    <FontAwesomeIcon
      icon={faTwitter}
      width="30"
      height="30"
      className="hover:text-sky-500"
    />
  );
}

export function DiscordIcon() {
  return (
    <FontAwesomeIcon
      icon={faDiscord}
      width="30"
      height="30"
      className="hover:text-indigo-600"
    />
  );
}

export function InstagramIcon() {
  return (
    <FontAwesomeIcon
      icon={faInstagram}
      width="30"
      height="30"
      className="hover:text-pink-500"
    />
  );
}

export function NglIcon() {
  return (
    <FontAwesomeIcon
      icon={faQuestion}
      width="30"
      height="30"
      className="beat hover:text-orange-500"
    />
  );
}
