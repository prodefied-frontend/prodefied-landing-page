
import FaithImage from "../../assets/images/about-us/meet-team/faith.jpg";
import ObinnaImage from "../../assets/images/about-us/meet-team/obinna.jpg";
import UchennaImage from "../../assets/images/about-us/meet-team/uchenna.jpg";
import AngelImage from "../../assets/images/about-us/meet-team/angel.jpg";
import IfyImage from "../../assets/images/about-us/meet-team/ify.jpg";
import KehindeImage from "../../assets/images/about-us/meet-team/kehinde.jpg";
import UgommaImage from "../../assets/images/about-us/meet-team/ugomma.jpg";
import BukolaImage from "../../assets/images/about-us/meet-team/bukola.jpg";
import FavourImage from "../../assets/images/about-us/meet-team/favour.jpg";
import EmmanuelImage from "../../assets/images/about-us/meet-team/emmanuel.jpg";
import KelechiImage from "../../assets/images/about-us/meet-team/kelechi.jpg";
import EbukaImage from "../../assets/images/about-us/meet-team/ebuka.jpg";
import OlasunkanmiImage from "../../assets/images/about-us/meet-team/olasunkanmi.jpg";

const teamDetails = [
  {
    id: 1,
    image: ObinnaImage,
    name: "Obinna Chukwuemeka",
    role: "Lead Product Manager",
    portfolio: "https://www.linkedin.com/in/obinna-david-chukwuemeka",
  },
  {
    id: 2,
    image: UchennaImage,
    name: "Uchenna Dike",
    role: "Product Manager",
    portfolio: "http://linkedin.com/in/uchenna-dike-78158532b",
  },

  {
    id: 3,
    image: AngelImage,
    name: "Esther Emmanuel",
    role: "Product Manager",
    portfolio: "https://hihello.me/p/8a435273-1341-48b4-87ee-509aa9bb06f3",
  },
  {
    id: 4,
    image: IfyImage,
    name: "Ifeoma Ndefo",
    role: "Product Manager",
    portfolio:
      "https://www.linkedin.com/in/ifeoma-ndefo-277961361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    id: 5,
    image: FaithImage,
    name: "Ebhoudaghe Faith",
    role: "Project Manager",
    portfolio:
      "https://www.linkedin.com/in/faith-ebhodaghe-264468263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 6,
    image: KehindeImage,
    name: "Akinsokeji Kehinde",
    role: "Lead Product Designer",
    portfolio: "https://www.behance.net/akinsokkehinde",
  },
  {
    id: 7,
    image: UgommaImage,
    name: "Ugomma Onwe",
    role: "Product Designer",
    portfolio:
      "https://www.figma.com/design/bZLH3FZ7kgHudAfcIOzJ9a/PORTFOLIO?node-id=2-2090&t=5pMdLxiNtjLK9A9a-1",
  },
  {
    id: 8,
    image: BukolaImage,
    name: "Oluwabukola Ige",
    role: "Graphics Designer",
    portfolio: "https://www.linkedin.com/in/oluwabukola-ige-3559bb278",
  },
  {
    id: 9,
    image: FavourImage,
    name: "Favour Allison",
    role: "Lead Frontend Developer",
    portfolio: "https://allison-favour-portfolio-darkmode.vercel.app/",
  },
  {
    id: 10,
    image: OlasunkanmiImage,
    name: "Okeowo Olasunkanmi",
    role: "Frontend Developer",
    portfolio: "https://www.linkedin.com/mwlite/in/olasunkanmi-okeowo-387547142",
  },
  {
    id: 11,
    image: EmmanuelImage,
    name: "Emmanuel Odey",
    role: "Backend Developer",
    portfolio: "https://www.linkedin.com/in/emmanuel-odey-23aa2227b/",
  },
  {
    id: 12,
    image: KelechiImage,
    name: "Ikpemose Kelechi",
    role: "Video Editor",
    portfolio: "",
  },
  {
    id: 13,
    image: EbukaImage,
    name: "Ebuka Nzeka",
    role: "Video Editor",
    portfolio: "",
  },
];

export default function MeetTeamSection() {
  return (
    <section className="px-4 py-10">
      <h2 className="text-base text-center mb-6">Meet The Team</h2>

      {/* Enable horizontal scroll on small screens */}
      <div className="overflow-x-auto">
        {/* Row container with fixed-width cards inside */}
        <div className="flex gap-4 w-max mb-6">
          {teamDetails.map((detail) => (
            <div
              key={detail.id}
              className="flex-shrink-0 w-48 h-56 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center gap-2"
            >
              <img
                src={detail.image}
                alt={`An image of ${detail.name}`}
                className="w-24 h-24 rounded-full object-cover mb-2"
              />
              <span className="font-semibold text-sm">{detail.name}</span>
              <span className="text-xs text-[#666666]">{detail.role}</span>
              <span>
                <a
                  href={detail.portfolio}
                  target="_blank"
                  className="text-[#0929FF] text-xs flex items-center gap-2"
                >
                  Portfolio
                  <img src="./link-square-icon.svg" alt="Link Square Icon" />
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
