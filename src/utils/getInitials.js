export default function getInitials(user) {
  if (!user) return "U";
  const first = (user.first_name || "").trim()[0] || "";
  const last = (user.last_name || "").trim()[0] || "";
  const initials = (first + last).toUpperCase();
  if (initials) return initials;
  return (user.email || "U").trim()[0].toUpperCase();
}