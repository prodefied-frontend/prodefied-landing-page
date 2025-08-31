export default function capitalize(user) {
    if (!user?.first_name) return '';
    
    const firstChar = user?.first_name[0].toUpperCase();
    const restChars = user?.first_name.slice(1);
    const capitalized = firstChar + restChars;

    return capitalized;
}