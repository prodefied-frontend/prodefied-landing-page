export default function formatDateJoinedWithId(user) {
    const studentId = user?.id;
    const savedDate = localStorage.getItem("dateJoined");

    if (!savedDate || !studentId) return ''; // handle missing data

    const date = new Date(savedDate);  // convert to Date object

    // Extract day and year (in the required format)
    const day = String(date.getDate()).padStart(2, '0'); // Make sure the day has 2 digits
    const year = date.getFullYear();

    // Create the formatted string as `DD-YYYY-id`
    const formattedStudentId = `${day}-${year}-${studentId}`;

    return formattedStudentId;
}