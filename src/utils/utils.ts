
/**
 * Utility function to format temperature
 * @param temp Temperature value
 * @param unit Unit of measurement (C or F)
 * @returns Formatted temperature string
 */
export const formatTemperature = (temp: number, unit: 'C' | 'F' = 'C'): string => {
  return `${temp.toFixed(1)}°${unit}`;
};

/**
 * Utility function to calculate fever status
 * @param temp Temperature value in Celsius
 * @returns Fever status
 */
export const getFeverStatus = (temp: number): 'normal' | 'elevated' | 'fever' => {
  if (temp < 37.5) return 'normal';
  if (temp >= 37.5 && temp < 38.5) return 'elevated';
  return 'fever';
};
