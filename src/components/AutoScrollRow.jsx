export default function AutoScrollRow({
  items = [],
  direction = "left", // "left" | "right"
  speed = "normal", // "normal" | "fast" | "superfast"
  pauseOnHover = true,
  renderItem,
}) {
  const speedDuration =
    speed === "fast" ? "30s" : speed === "superfast" ? "15s" : "60s";

  const directionClass =
    direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div
      className={`auto-scroll-container relative overflow-hidden w-full ${
        pauseOnHover ? "group" : ""
      }`}
    >
      <div
        className={`flex gap-6 md:gap-10 items-center whitespace-nowrap w-max ${directionClass}`}
        style={{
          animationDuration: speedDuration, // ✅ control speed dynamically
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex-shrink-0">
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
}
