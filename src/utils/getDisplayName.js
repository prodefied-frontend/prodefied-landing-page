// utils/getDisplayName.js
import capitalize from "./capitalize";

export default function getDisplayName(user) {
  if (!user) return "User";

  // Prefer first_name if available
  if (user.first_name) {
    return capitalize(user.first_name);
  }

  // Fallback to fullName
  if (user.fullName) {
    return capitalize(user.fullName);
  }

  // Fallback to email prefix
  if (user.email) {
    const prefix = user.email.split("@")[0];
    return capitalize(prefix);
  }

  // Last resort
  return "User";
}
