import { useRef, useState, useEffect } from "react";

export default function DraggableWhatsAppButton() {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ bottom: 20, right: 20 });
  const [dragging, setDragging] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(true); // Show by default

  // MOBILE TOUCH HANDLERS
  const handleTouchStart = () => setDragging(true);

  const handleTouchMove = (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const newRight = windowWidth - touch.clientX - 30;
    const newBottom = windowHeight - touch.clientY - 30;

    setPosition({
      right: Math.max(10, Math.min(newRight, windowWidth - 60)),
      bottom: Math.max(10, Math.min(newBottom, windowHeight - 60)),
    });
  };

  const handleTouchEnd = () => setDragging(false);

  // DESKTOP DRAG HANDLERS
  const handleDragStart = (e) => {
    setDragging(true);
    e.dataTransfer.setDragImage(new Image(), 0, 0); // invisible ghost image
  };

  const handleDrag = (e) => {
    if (!dragging || (e.clientX === 0 && e.clientY === 0)) return;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const newRight = windowWidth - e.clientX - 30;
    const newBottom = windowHeight - e.clientY - 30;

    setPosition({
      right: Math.max(10, Math.min(newRight, windowWidth - 60)),
      bottom: Math.max(10, Math.min(newBottom, windowHeight - 60)),
    });
  };

  const handleDragEnd = () => setDragging(false);

  useEffect(() => {
    document.body.style.touchAction = dragging ? "none" : "auto";
  }, [dragging]);

  return (
    <div
      ref={buttonRef}
      draggable
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="fixed z-50 cursor-move"
      style={{ bottom: position.bottom, right: position.right }}
    >
      <div className="relative">
        {/* WhatsApp Button */}
        <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-200">
          <a
            href="https://wa.link/st5dzz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/whatsapp-icon.svg"
              alt="WhatsApp Icon"
              className="w-6 h-6"
            />
          </a>
        </div>

        {/* Tooltip with arrow and close button */}
        {tooltipVisible && (
          <div className="absolute right-[68px] bottom-2 w-52 bg-white text-black text-xs rounded px-3 py-2 shadow-lg z-50">
            <button
              onClick={() => setTooltipVisible(false)}
              className="absolute top-1 right-2 text-sm text-gray-400 hover:text-gray-600"
              aria-label="Close tooltip"
            >
              ✕
            </button>
            <div className="font-semibold mb-1">Chat with us on WhatsApp</div>
            <div>Need help? We're just a message away.</div>

            {/* Triangle arrow */}
            <div className="absolute -right-2 bottom-3 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white" />
          </div>
        )}
      </div>
    </div>
  );
}