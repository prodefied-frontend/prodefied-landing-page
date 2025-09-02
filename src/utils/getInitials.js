export default function getInitials(user) {
  if (!user) return "U";

  const first = user.first_name?.trim()?.[0] || "";
  const last = user.last_name?.trim()?.[0] || "";

  if (first || last) return (first + last).toUpperCase();

  const emailInitial = user.email?.trim()?.[0] || "U";
  return emailInitial.toUpperCase();
}