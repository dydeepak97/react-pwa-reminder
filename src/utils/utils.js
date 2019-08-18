export const getFormattedTimeFromSeconds = seconds => ({
  hours: Math.floor(seconds / 3600),
  minutes: Math.floor((seconds / 60) % 60),
  seconds: seconds % 60
});
