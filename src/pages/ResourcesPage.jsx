import React, { useEffect, useState } from "react";
import {
  FaYoutube,
  FaFilePdf,
  FaFileImage,
  FaFileVideo,
  FaFileAudio,
  FaFileWord,
  FaLink,
} from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const iconMap = {
  youtube: <FaYoutube className="text-red-500 text-2xl" />,
  pdf: <FaFilePdf className="text-red-600 text-2xl" />,
  image: <FaFileImage className="text-purple-500 text-2xl" />,
  video: <FaFileVideo className="text-blue-500 text-2xl" />,
  audio: <FaFileAudio className="text-indigo-500 text-2xl" />,
  word: <FaFileWord className="text-blue-700 text-2xl" />,
  link: <FaLink className="text-gray-600 text-2xl" />,
};

// 🧠 Helper: auto-detect file type from link
function detectType(link) {
  if (!link) return "link";
  const lower = link.toLowerCase();
  if (lower.includes("youtube.com") || lower.includes("youtu.be"))
    return "youtube";
  if (lower.endsWith(".pdf")) return "pdf";
  if (lower.match(/\.(jpg|jpeg|png|gif|svg)$/)) return "image";
  if (lower.match(/\.(mp4|mov|avi|webm)$/)) return "video";
  if (lower.match(/\.(mp3|wav|ogg)$/)) return "audio";
  if (lower.match(/\.(doc|docx)$/)) return "word";
  return "link";
}

export default function ResourcesPage() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🛰 Fetch resources from backend
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await axios.get(
          "https://prodefied-backend.onrender.com/api/resources/"
        );
        setResources(res.data);
      } catch (err) {
        console.error("Error fetching resources:", err);
        toast.error("Failed to load resources.");
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  return (
    <main className="px-4 sm:px-6 md:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-xl sm:text-2xl font-semibold mb-6">Resources</h1>

      {/* Loading state */}
      {loading ? (
        <p className="text-gray-600">Loading resources...</p>
      ) : resources.length === 0 ? (
        <p className="text-gray-500">No resources found.</p>
      ) : (
        <ul className="space-y-4">
          {resources.map((item) => {
            const type = detectType(item.link);
            const createdDate = new Date(item.created_at);
            const formattedDate = createdDate.toLocaleDateString("en-GB");
            const formattedTime = createdDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <li
                key={item.id}
                className="flex items-start sm:items-center gap-4 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="flex-shrink-0">{iconMap[type]}</div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-sm sm:text-base font-medium text-gray-800 truncate">
                    {item.title}
                  </h2>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-blue-600 truncate block"
                  >
                    {item.link}
                  </a>
                  {item.description && (
                    <p className="text-xs text-gray-500 mt-1">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Timestamp */}
                <div className="text-right">
                  <p className="text-xs text-gray-500">{formattedDate}</p>
                  <p className="text-xs text-gray-500">{formattedTime}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}

// =================================================================================

// import {
//   FaYoutube,
//   FaFilePdf,
//   FaFileImage,
//   FaFileVideo,
//   FaFileAudio,
//   FaFileWord,
//   FaLink,
// } from "react-icons/fa";

// const linkDetails = [
//   {
//     id: 1,
//     title: "YouTube",
//     link: "https://youtu.be/jDgW5HVqb4I?si=-Gl6bY3A813JGg6C",
//     type: "youtube",
//     date: "Today",
//     time: "4:30pm",
//   },
//   {
//     id: 2,
//     title: "Medium Article",
//     link: "https://stephenanderson.medium.com/what-does-a-product-manager-actually-do-bee1d853f420",
//     type: "link",
//     date: "Today",
//     time: "4:30pm",
//   },
//   {
//     id: 3,
//     title: "Image",
//     link: "#",
//     type: "image",
//     size: "1.2 MB",
//     date: "18/09/2025",
//     time: "4:30pm",
//   },
//   {
//     id: 4,
//     title: "Free Product Guide Book - Peace Agoha",
//     link: "#",
//     type: "pdf",
//     size: "250 KB",
//     date: "18/09/2025",
//     time: "4:30pm",
//   },
//   {
//     id: 5,
//     title: "Video",
//     link: "#",
//     type: "video",
//     size: "250 KB",
//     date: "18/09/2025",
//     time: "4:30pm",
//   },
//   {
//     id: 6,
//     title: "Standard Curriculum",
//     link: "#",
//     type: "word",
//     size: "250 KB",
//     date: "18/09/2025",
//     time: "4:30pm",
//   },
//   {
//     id: 7,
//     title: "Audio",
//     link: "#",
//     type: "audio",
//     size: "4 MB",
//     date: "18/09/2025",
//     time: "4:30pm",
//   },
// ];

// const iconMap = {
//   youtube: <FaYoutube className="text-red-500 text-2xl" />,
//   pdf: <FaFilePdf className="text-red-600 text-2xl" />,
//   image: <FaFileImage className="text-purple-500 text-2xl" />,
//   video: <FaFileVideo className="text-blue-500 text-2xl" />,
//   audio: <FaFileAudio className="text-indigo-500 text-2xl" />,
//   word: <FaFileWord className="text-blue-700 text-2xl" />,
//   link: <FaLink className="text-gray-600 text-2xl" />,
// };

// export default function ResourcesPage() {
//   return (
//     <main className="px-4 sm:px-6 md:p-10 bg-gray-50 min-h-screen">
//       <h1 className="text-xl sm:text-2xl font-semibold mb-6">Resources</h1>

//       <ul className="space-y-4">
//         {linkDetails.map((data) => (
//           <li
//             key={data.id}
//             className="flex items-start sm:items-center gap-4 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition"
//           >
//             {/* Icon */}
//             <div className="flex-shrink-0">{iconMap[data.type]}</div>

//             {/* Content */}
//             <div className="flex-1 min-w-0">
//               <h2 className="text-sm sm:text-base font-medium text-gray-800 truncate">
//                 {data.title}
//               </h2>
//               <a
//                 href={data.link}
//                 className="text-xs sm:text-sm text-blue-600 truncate block"
//               >
//                 {data.link}
//               </a>
//               {data.size && (
//                 <p className="text-xs text-gray-500 mt-1">{data.size}</p>
//               )}
//             </div>

//             {/* Timestamp */}
//             <div className="text-right">
//               <p className="text-xs text-gray-500">{data.date}</p>
//               <p className="text-xs text-gray-500">{data.time}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }
