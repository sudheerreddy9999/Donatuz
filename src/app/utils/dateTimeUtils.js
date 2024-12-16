/**
 * Determines the time category (Morning, Afternoon, Evening, Night) based on a time slot string.
 * @param {string} timeSlot - The time slot string in the format "HH:MM AM/PM - HH:MM AM/PM".
 * @returns {string} - The time category ("Mornings", "Afternoons", "Evenings", "Nights").
 */
export const getTimeCategory = (timeSlot) => {
    if (!timeSlot) return "Unknown"; 
  
    const [startTime] = timeSlot.split(" - ");
    const [hour] = startTime
      .replace("AM", "")
      .replace("PM", "")
      .trim()
      .split(":")
      .map(Number);
    const isPM = startTime.includes("PM");
  
    const normalizedHour =
      isPM && hour !== 12 ? hour + 12 : hour === 12 && !isPM ? 0 : hour;
  
    if (normalizedHour >= 6 && normalizedHour < 12) return "Mornings";
    if (normalizedHour >= 12 && normalizedHour < 18) return "Afternoons";
    if (normalizedHour >= 18 && normalizedHour < 21) return "Evenings";
    return "Nights";
  };
  export const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid Date"; 
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  export const calculateMinutes = (duration) => {
    if (!duration) return 0;
  
    const match = duration.match(/(\d+)\s*(Hr|Hrs|Min|Mins|$)/i);
    if (!match) return 0;
    const value = parseInt(match[1], 10);
    const unit = match[2]?.toLowerCase();
  
    if (unit?.startsWith("hr")) {
      return value * 60;
    }
  
    return value;
  };