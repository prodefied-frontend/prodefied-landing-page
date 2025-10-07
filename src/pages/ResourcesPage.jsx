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
  youtube: (
    <FaYoutube className="text-red-500 text-lg sm:text-xl md:text-2xl" />
  ),
  pdf: <FaFilePdf className="text-red-600 text-lg sm:text-xl md:text-2xl" />,
  image: (
    <FaFileImage className="text-purple-500 text-lg sm:text-xl md:text-2xl" />
  ),
  video: (
    <FaFileVideo className="text-blue-500 text-lg sm:text-xl md:text-2xl" />
  ),
  audio: (
    <FaFileAudio className="text-indigo-500 text-lg sm:text-xl md:text-2xl" />
  ),
  word: <FaFileWord className="text-blue-700 text-lg sm:text-xl md:text-2xl" />,
  link: <FaLink className="text-gray-600 text-lg sm:text-xl md:text-2xl" />,
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
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-gray-800">
        Resources
      </h1>

      {/* Loading state */}
      {loading ? (
        <p className="text-gray-600">Loading resources...</p>
      ) : resources.length === 0 ? (
        <p className="text-gray-500">No resources found.</p>
      ) : (
        <ul className="space-y-3 sm:space-y-4">
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
                className="
                  flex flex-col sm:flex-row sm:items-center 
                  gap-3 sm:gap-4 
                  bg-white rounded-xl shadow-sm 
                  p-3 sm:p-4 hover:shadow-md transition-all
                "
              >
                {/* Icon */}
                <div className="flex-shrink-0">{iconMap[type]}</div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-sm sm:text-base font-medium text-gray-800 break-words">
                    {item.title}
                  </h2>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-blue-600 break-all block hover:underline"
                  >
                    {item.link}
                  </a>
                  {item.description && (
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 break-words">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Timestamp */}
                <div className="sm:text-right mt-2 sm:mt-0 text-gray-500">
                  <p className="text-[11px] sm:text-xs">{formattedDate}</p>
                  <p className="text-[11px] sm:text-xs">{formattedTime}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}