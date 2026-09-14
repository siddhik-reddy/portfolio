export function validateContact({ name, email, message }) {
  const errors = {};
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name.trim()) errors.name = "Please enter your name.";
  if (!email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!emailRe.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message.trim()) errors.message = "Please enter a message.";

  return errors;
}
