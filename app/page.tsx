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

const biotext = `<div style="text-align: center;">${data.name}</div><span style="font-weight: normal; margin-top: 1px; font-size: 15px;">${data.bio}</span>`;

export default async function HomePage() {
  return (
    <div className="main">
      <div className="background"></div>
      {/* <Image alt="gradient background" src="https://i.imgur.com/Lv4al5n.gif" width="1280" height="1080"/> */}
      <div className="content">
        <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
          <Image
            priority
            className="profile rounded-full"
            alt={data.name}
            src={data.avatar}
            width={100}
            height={100}
          />
          <h1
            className="font-bold mt-4 mb-7 text-xl text-white"
            dangerouslySetInnerHTML={{ __html: biotext }}
          ></h1>
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
