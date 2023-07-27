import Image from "next/image";
import {
  GitHubIcon,
  FacebookIcon,
  TwitterIcon,
  DiscordIcon,
  InstagramIcon,
  NglIcon,
} from "./components/icon";
import { LinkCard } from "./components/card";
import data from "../data.json";

export const dynamic = "force-dynamic",
  runtime = "edge";

interface Link {
  href: string;
  title: string;
  image?: string;
}

interface Social {
  href: string;
  title: string;
}

const biotext = `<div>${data.name}<span style="font-weight: normal; margin-top: 1px; font-size: 15px; color: black;">${data.bio}</span></div>`;

export default async function HomePage() {
  return (
    <div className="main">
      <div className="background"></div>
      <div className="content">
        <div className="card">
          <Image
            priority
            className="profile rounded-full"
            alt={data.name}
            src={data.avatar}
            width={125}
            height={125}
          />
          <h1 className="mt-4 mb-7 text-xl color-slate-500">
            <div className="font-bold mb-2 text-center">{data.name}</div>
            <div>{data.bio}</div>
          </h1>
          <div className="flex items-center gap-4 mb-3.5 text-white">
            {data.links.map((link) => (
              <a
                aria-label={`${link.title} link`}
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.href.includes("github") ? (
                  <GitHubIcon />
                ) : link.href.includes("twitter") ? (
                  <TwitterIcon />
                ) : link.href.includes("facebook") ? (
                  <FacebookIcon />
                ) : link.href.includes("discord") ? (
                  <DiscordIcon />
                ) : link.href.includes("instagram") ? (
                  <InstagramIcon />
                ) : link.href.includes("ngl") ? (
                  <NglIcon />
                ) : null}
              </a>
            ))}
          </div>
          {data.links.map((link) => (
            <LinkCard key={link.href} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
}
