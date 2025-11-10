// Password validation for Register / Login
export const validatePassword = (password) => {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const minLength = password.length >= 6;
  return hasUppercase && hasLowercase && minLength;
};

// Email validation
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Event validation for CreateEvent / UpdateEvent
export const validateEvent = ({
  title,
  description,
  eventType,
  thumbnail,
  location,
  eventDate,
}) => {
  if (
    !title ||
    !description ||
    !eventType ||
    !thumbnail ||
    !location ||
    !eventDate
  ) {
    return { valid: false, message: "All fields are required." };
  }

  const now = new Date();
  if (new Date(eventDate) <= now) {
    return { valid: false, message: "Event date must be in the future." };
  }

  return { valid: true, message: "" };
};
