import { Link } from "react-router-dom";

import BlueLogo from "../assets/icons/footer/blue-logo.svg";
import XIcon from "../assets/icons/footer/x.svg";
import InstagramIcon from "../assets/icons/footer/instagram.svg";
import FacebookIcon from "../assets/icons/footer/facebook.svg";
import YoutubeIcon from "../assets/icons/footer/youtube.svg";
import TiktokIcon from "../assets/icons/footer/tiktok.svg";
import BackgroundImage from "../assets/icons/footer/footerbackground-logo.svg";

const linkSections = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", to: "/" },
      { label: "About Us", to: "/about-us" },
      { label: "Registration", to: "/registration" },
      { label: "Partner With Us", to: "/partnership" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Our Talents", to: "/hire-our-talents", external: false },
      { label: "Our Program", to: "/program-details", external: false },
      {
        label: "Scrum Certification",
        to: "https://simpli-web.app.link/e/7x9f12dtrVb",
        external: true,
      },
      {
        label: "Join Our Community",
        to: "https://chat.whatsapp.com/Jstx0VkYxxbHdtkhypDFxz?mode=ac_t",
        external: true,
      },
    ],
  },
  {
    title: "Others",
    links: [
      { label: "Terms Of Service", to: "/terms", external: false },
      { label: "Privacy Policy", to: "/terms", external: false },
      { label: "Payment Policy", to: "/terms", external: false },
    ],
  },
];

const socialLinks = [
  { icon: XIcon, alt: "X Icon", href: "https://x.com/prodefied/" },
  {
    icon: InstagramIcon,
    alt: "Instagram Icon",
    href: "https://www.instagram.com/prodefied?igsh=dXZhYW5rdjRhc2dj",
  },
  {
    icon: FacebookIcon,
    alt: "Facebook Icon",
    href: "https://www.facebook.com/share/1C5mHGsVEq/",
  },
  {
    icon: YoutubeIcon,
    alt: "YouTube Icon",
    href: "https://youtube.com/@prodefied?si=gs3dWc17bCoxBvDA",
  },
  {
    icon: TiktokIcon,
    alt: "TikTok Icon",
    href: "https://www.tiktok.com/@prodefied?_t=ZM-8xAVuQj6Uem&_r=1",
  },
];

export default function FT() {
  return (
    <footer className="bg-[#F0F1FF] relative overflow-hidden">
      {/* Background Logo */}
      <img
        src={BackgroundImage}
        alt="Footer Image Background"
        className="absolute bottom-0 right-0 w-[400px] md:w-[500px] z-0 opacity-100 pointer-events-none hidden sm:block max-w-full"
      />

      <div className="relative z-10 text-[#333333] px-6 py-10 max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 items-center md:items-start text-center md:text-left">
          {/* Logo and Links */}
          <div className="flex flex-col sm:flex-row gap-10 flex-wrap justify-center md:justify-start">
            <Link to="/" className="flex-shrink-0 mx-auto sm:mx-0">
              <img
                src={BlueLogo}
                alt="Prodefied Logo"
                className="h-12 w-auto"
              />
            </Link>

            {linkSections.map((section) => (
              <div key={section.title} className="text-center sm:text-left">
                <h3 className="font-semibold mb-2">{section.title}</h3>
                <ul className="space-y-1">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link to={link.to} className="hover:underline">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="text-center sm:text-left">
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <div className="flex justify-center sm:justify-start gap-3">
                {socialLinks.map(({ icon, alt, href }) => (
                  <a
                    key={alt}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={icon} alt={alt} className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col justify-center items-center text-center max-w-sm mx-auto md:mx-0">
            <p className="text-[#1A1A1A] mb-4 text-lg font-medium">
              Ready to kickstart your Product Management journey?
            </p>
            <Link
              to="/registration"
              className="bg-[#000F84] text-white px-6 py-2 rounded-md hover:bg-[#001299] transition"
            >
              Register Today
            </Link>
          </div>
        </div>

        <p className="text-center md:text-left text-sm md:text-lg text-[#333333]">
          All rights reserved. © 2025 Prodefied
        </p>
      </div>
    </footer>
  );
}
