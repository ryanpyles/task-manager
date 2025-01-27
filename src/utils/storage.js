/**
 * Save data to localStorage.
 * @param {string} key - The key under which the data will be stored.
 * @param {any} value - The value to store (will be stringified).
 */
export const saveToLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      console.log(`Data saved to localStorage under key: ${key}`);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };
  
  /**
   * Retrieve data from localStorage.
   * @param {string} key - The key under which the data is stored.
   * @returns {any|null} - The parsed data, or null if not found.
   */
  export const getFromLocalStorage = (key) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  };
  
  /**
   * Remove a specific key from localStorage.
   * @param {string} key - The key to remove.
   */
  export const removeFromLocalStorage = (key) => {
    try {
      localStorage.removeItem(key);
      console.log(`Removed key from localStorage: ${key}`);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  };
  
  /**
   * Clear all data from localStorage.
   * Use this function with caution!
   */
  export const clearLocalStorage = () => {
    try {
      localStorage.clear();
      console.log('All localStorage data cleared');
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  };
  