class DateDifferenceUtils {
  static _parseISODate(date) {
    if (typeof date !== 'string') {
      throw new TypeError('Date must be a string');
    }

    const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!isoDatePattern.test(date)) {
      throw new TypeError('Date must be an ISO string in YYYY-MM-DD format');
    }

    const [year, month, day] = date.split('-').map(Number);
    const parsed = new Date(Date.UTC(year, month - 1, day));

    if (
      parsed.getUTCFullYear() !== year ||
      parsed.getUTCMonth() + 1 !== month ||
      parsed.getUTCDate() !== day
    ) {
      throw new TypeError('Date string is not a valid calendar date');
    }

    return parsed;
  }

  static daysBetween(d1, d2) {
    const date1 = this._parseISODate(d1);
    const date2 = this._parseISODate(d2);

    const msPerDay = 24 * 60 * 60 * 1000;
    const diffMs = Math.abs(date2.getTime() - date1.getTime());
    return Math.round(diffMs / msPerDay);
  }
}

export default DateDifferenceUtils;
