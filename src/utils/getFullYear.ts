export function currentYear() {
  return new Date().getFullYear();
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

export function formatTime(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return date.toLocaleTimeString("en-US", options);
}
