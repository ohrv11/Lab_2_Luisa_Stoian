class DateUtils {
  static isValidISODate(date) {
    if (typeof date !== 'string') {
      throw new TypeError('Date must be a string');
    }

    const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!isoDatePattern.test(date)) {
      return false;
    }

    const [year, month, day] = date.split('-').map(Number);
    const parsedDate = new Date(`${date}T00:00:00Z`);

    return (
      parsedDate.getUTCFullYear() === year &&
      parsedDate.getUTCMonth() + 1 === month &&
      parsedDate.getUTCDate() === day
    );
  }
}

export default DateUtils;
