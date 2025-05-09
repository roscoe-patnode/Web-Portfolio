import resume from "../assets/Resume_2025_1800.pdf"

interface FooterProps {
  github: string;
  linkedin: string;
  email: string;
  youtube: string;
}

function Footer({ github, linkedin, email, youtube } : FooterProps) {
  return (
    <footer className="bg-gradient-to-br to-header from-hover-btnbg py-45 place-content-center">
      <div className="max-w-5xl lg:place-self-center lg:flex pb-20 pl-5 lg:pl-0">
        <div className="w-sm mx-auto">
          <div className="w-full text-xl font-bold text-subheader pb-2">Say Hi!</div>
          <div className="w-full text-lg text-pagebg-sec pb-1"><a className="hover:underline"href={linkedin} target="_blank">LinkedIn</a></div>
          <div className="w-full text-lg text-pagebg-sec pb-1"><a className="hover:underline"href={"mailto:" + email} target="_blank">{email}</a></div>
        </div>
        <div className="w-sm mx-auto">
          <div className="w-full text-xl font-bold text-subheader pb-2">GitHub Projects</div>
          <div className="w-full text-lg text-pagebg-sec pb-1"><a className="hover:underline"href="" target="_blank">Event Connect</a></div>
          <div className="w-full text-lg text-pagebg-sec pb-1"><a className="hover:underline"href="" target="_blank">Portfolio Website</a></div>
        </div>
        <div className="w-sm mx-auto">
          <div className="w-full text-xl font-bold text-subheader pb-2">Other</div>
          <div className="w-full text-lg text-pagebg-sec pb-1"><a className="hover:underline"href={github} target="_blank">GitHub</a></div>
          <div className="w-full text-lg text-pagebg-sec pb-1"><a className="hover:underline"href={youtube} target="_blank">YouTube</a></div>
          <div className="w-full text-lg text-pagebg-sec pb-1"><a className="hover:underline"href={resume} target="_blank">Résumé</a></div>
        </div>
      </div>
      <hr className="pb-10 max-w-5xl mx-auto text-pagebg-sec"/>
      <div className="max-w-5xl mx-auto text-pagebg-sec pl-5 lg:pl-0">© Roscoe Patnode {new Date().getFullYear()}</div>
    </footer>
  );
}

export default Footer;