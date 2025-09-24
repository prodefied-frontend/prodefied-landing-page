import {
  FaYoutube,
  FaFilePdf,
  FaFileImage,
  FaFileVideo,
  FaFileAudio,
  FaFileWord,
  FaLink,
} from "react-icons/fa";

const linkDetails = [
  {
    id: 1,
    title: "YouTube",
    link: "https://youtu.be/jDgW5HVqb4I?si=-Gl6bY3A813JGg6C",
    type: "youtube",
    date: "Today",
    time: "4:30pm",
  },
  {
    id: 2,
    title: "Medium Article",
    link: "https://stephenanderson.medium.com/what-does-a-product-manager-actually-do-bee1d853f420",
    type: "link",
    date: "Today",
    time: "4:30pm",
  },
  {
    id: 3,
    title: "Image",
    link: "#",
    type: "image",
    size: "1.2 MB",
    date: "18/09/2025",
    time: "4:30pm",
  },
  {
    id: 4,
    title: "Free Product Guide Book - Peace Agoha",
    link: "#",
    type: "pdf",
    size: "250 KB",
    date: "18/09/2025",
    time: "4:30pm",
  },
  {
    id: 5,
    title: "Video",
    link: "#",
    type: "video",
    size: "250 KB",
    date: "18/09/2025",
    time: "4:30pm",
  },
  {
    id: 6,
    title: "Standard Curriculum",
    link: "#",
    type: "word",
    size: "250 KB",
    date: "18/09/2025",
    time: "4:30pm",
  },
  {
    id: 7,
    title: "Audio",
    link: "#",
    type: "audio",
    size: "4 MB",
    date: "18/09/2025",
    time: "4:30pm",
  },
];

const iconMap = {
  youtube: <FaYoutube className="text-red-500 text-2xl" />,
  pdf: <FaFilePdf className="text-red-600 text-2xl" />,
  image: <FaFileImage className="text-purple-500 text-2xl" />,
  video: <FaFileVideo className="text-blue-500 text-2xl" />,
  audio: <FaFileAudio className="text-indigo-500 text-2xl" />,
  word: <FaFileWord className="text-blue-700 text-2xl" />,
  link: <FaLink className="text-gray-600 text-2xl" />,
};

export default function ResourcesPage() {
  return (
    <main className="p-4 sm:p-6 md:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-xl sm:text-2xl font-semibold mb-6">Resources</h1>

      <ul className="space-y-4">
        {linkDetails.map((data) => (
          <li
            key={data.id}
            className="flex items-start sm:items-center gap-4 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition"
          >
            {/* Icon */}
            <div className="flex-shrink-0">{iconMap[data.type]}</div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h2 className="text-sm sm:text-base font-medium text-gray-800 truncate">
                {data.title}
              </h2>
              <a
                href={data.link}
                className="text-xs sm:text-sm text-blue-600 truncate block"
              >
                {data.link}
              </a>
              {data.size && (
                <p className="text-xs text-gray-500 mt-1">{data.size}</p>
              )}
            </div>

            {/* Timestamp */}
            <div className="text-right">
              <p className="text-xs text-gray-500">{data.date}</p>
              <p className="text-xs text-gray-500">{data.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

// const linkDetails = [
//   {
//     id: 1,
//     title: "YouTube",
//     link: "https://youtu.be/jDgW5HVqb4I?si=-Gl6bY3A813JGg6C",
//   },
//   {
//     id: 2,
//     title: "YouTube",
//     link: "https://stephenanderson.medium.com/what-does-a-product-manager-actually-do-bee1d853f420",
//   },
//   {
//     id: 3,
//     title: "YouTube",
//     link: "https://youtube.com/shorts/VrWAjeURGHo?si=q7asy2TVqkIzElFq",
//   },
//   {
//     id: 4,
//     title: "YouTube",
//     link: "https://www.productplan.com/learn/what-is-product-management/",
//   },
//   {
//     id: 5,
//     title: "YouTube",
//     link: "https://youtube.com/shorts/A5WaS85ihLs?si=2F0VpCS12QtFh9JX",
//   },
//   {
//     id: 6,
//     title: "YouTube",
//     link: "https://youtu.be/yUOC-Y0f5ZQ?si=bktYXmG_k5_18-BO",
//   },
//   {
//     id: 7,
//     title: "YouTube",
//     link: "https://www.google.com/amp/s/roadmunk.com/guides/product-management-articles-product-manager-content/amp/",
//   },
//   {
//     id: 8,
//     title: "YouTube",
//     link: "https://youtu.be/X6v6jY15IoQ?si=V3VfuHQXE_HtldVz",
//   },
// ];

// export default function ResourcesPage() {
//   return (
//     <main >
//       <ul>
//         {linkDetails.map(data => (
//             <li key={data.id}><a href={data.link}>{data.title}</a></li>
//         ))}
//       </ul>
//     </main>
//   );
// }
