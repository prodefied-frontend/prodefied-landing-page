import GmailIcon from "../assets/icons/contact-us/gmail.svg";
import WhatsappIcon from "../assets/icons/contact-us/whatsapp.svg";
import InstagramIcon from "../assets/icons/contact-us/instagram.svg";
import XIcon from "../assets/icons/contact-us/x.svg";
import LinkedInIcon from "../assets/icons/contact-us/linkedin.svg";

const linkDatas = [
  { id: 1, name: "Gmail", icon: GmailIcon, link: "mailto:hello@prodefied.com" },
  {
    id: 2,
    name: "Whatsapp",
    icon: WhatsappIcon,
    link: "https://wa.link/st5dzz",
  },
  {
    id: 3,
    name: "Instagram",
    icon: InstagramIcon,
    link: "https://www.instagram.com/prodefied?igsh=dXZhYW5rdjRhc2dj",
  },
  {
    id: 4,
    name: "X/Twitter",
    icon: XIcon,
    link: "https://x.com/prodefied?t=C-TTqyE5t-_Dmzd7QAOG7w&s=09",
  },
  {
    id: 5,
    name: "LinkedIn",
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/company/prodefied.com/",
  },
];

export default function ContactUsPopUp({ onClose }) {
  return (
    <div
      className="w-[280px] md:w-[320px] bg-white border border-gray-200 rounded-md shadow-lg p-4"
      role="dialog"
      aria-modal="false"
    >
      <div className="flex items-start justify-between mb-3">
        <p className="text-sm text-gray-700">Reach out to us on our socials</p>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-red-500"
          aria-label="Close contact menu"
        >
          ✕
        </button>
      </div>

      <div className="flex items-center justify-around gap-4">
        {linkDatas.map((d) => (
          <a
            key={d.id}
            href={d.link || "#"}
            onClick={() => onClose?.()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded hover:bg-gray-100 transition"
            aria-label={d.name}
          >
            <img src={d.icon} alt={d.name} className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  );
}

// import GmailIcon from "../assets/icons/contact-us/gmail.svg";
// import WhatsappIcon from "../assets/icons/contact-us/whatsapp.svg";
// import InstagramIcon from "../assets/icons/contact-us/instagram.svg";
// import XIcon from "../assets/icons/contact-us/x.svg";
// import LinkedInIcon from "../assets/icons/contact-us/linkedin.svg";

// const linkDatas = [
//   { id: 1, name: "Gmail", icon: GmailIcon, link: "" },
//   { id: 2, name: "Whatsapp", icon: WhatsappIcon, link: "" },
//   { id: 3, name: "Instagram", icon: InstagramIcon, link: "" },
//   { id: 4, name: "X/Twitter", icon: XIcon, link: "" },
//   { id: 5, name: "LinkedIn", icon: LinkedInIcon, link: "" },
// ];

// export default function ContactUsPopUp({ onClose }) {
//   return (
//     <div className="bg-white border border-gray-200 rounded-md shadow-lg px-10 py-4 relative">
//       {/* Close button */}
//       <button
//         onClick={onClose}
//         className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//         aria-label="Close contact menu"
//       >
//         ✕
//       </button>

//       <p className="text-[#4D4D4D] mb-4">Reach out to us on our socials</p>

//       <div className="flex items-center justify-center gap-4">
//         {linkDatas.map((d) => (
//           <a
//             key={d.id}
//             href={d.link}
//             onClick={onClose}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img src={d.icon} alt={d.name} className="w-6 h-6" />
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }

// import GmailIcon from "../assets/icons/contact-us/gmail.svg";
// import WhatsappIcon from "../assets/icons/contact-us/whatsapp.svg";
// import InstagramIcon from "../assets/icons/contact-us/instagram.svg";
// import XIcon from "../assets/icons/contact-us/x.svg";
// import LinkedInIcon from "../assets/icons/contact-us/linkedin.svg";

// const linkDatas = [
//   {
//     id: 1,
//     name: "Gmail",
//     icon: GmailIcon,
//     link: "",
//   },
//   {
//     id: 1,
//     name: "Gmail",
//     icon: GmailIcon,
//     link: "",
//   },
//   {
//     id: 2,
//     name: "Whatsapp",
//     icon: WhatsappIcon,
//     link: "",
//   },
//   {
//     id: 3,
//     name: "Instagram",
//     icon: InstagramIcon,
//     link: "",
//   },
//   {
//     id: 4,
//     name: "X/Twitter",
//     icon: XIcon,
//     link: "",
//   },
//   {
//     id: 5,
//     name: "LinkedIn",
//     icon: LinkedInIcon,
//     link: "",
//   },
// ];

// export default function ContactUsPopUp() {
//   return (
//     <main>
//       <div className="bg-white px-10 py-4">
//         <p className="text-[#4D4D4D]">Reach out to us on our socials</p>

//         <div className="flex items-center justify-center gap-4">
//           {linkDatas.map((d) => (
//             <a key={d.id} href={d.link}>
//               <img src={d.icon} alt={d.name} />
//             </a>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }
