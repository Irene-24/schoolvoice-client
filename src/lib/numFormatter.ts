export interface Config {
  /** The value to format */
  number: number | string;

  /** The number of decimal places */
  decimalAmount?: number;

  /** The decimal indicator.*/
  decimalMark?: string;

  /**The seperator . */
  delimiter?: string;

  prefix?: string;
  suffix?: string;
}

/**
 *
 * Format a number ina human readable way
 * @property {number} config.number - The number to format.
 * @property {number} [config.decimalAmount = 2] - The number of decimal places.
 * @property {string} [config.delimiter = ","] - The seperator .
 * @property {string} [config.decimalMark = "."] - The decimal indicator.
 *
 * @returns {string} the formatted string
 *
 * @example
 * formatNumber({number:123456}) gives 123,456.
 * formatNumber({number:123456, decimalAmount:0}) gives 123,456
 * formatNumber({number:123456, delimiter:" "}) gives 123 456.00
 */
export const formatNumber = ({
  number = 0,
  decimalAmount = 2,
  decimalMark = '.',
  delimiter = ',',
  prefix = '',
  suffix = '',
}: Config): string => {
  if (decimalAmount >= Number.MAX_SAFE_INTEGER) {
    decimalAmount = 0;
    const numberParts = number.toString().split('.');
    if (numberParts[1]) {
      decimalAmount = numberParts[1].length;
    }
  }

  const numToFormat = Number(number);

  if (Number.isNaN(numToFormat) || Math.abs(Number(number)) >= Number.MAX_SAFE_INTEGER) {
    throw new Error('Number is not valid.');
  }

  let minusSign = '';
  if (numToFormat < 0) {
    minusSign = '- ';
  }

  const absoluteAmountString = Math.abs(numToFormat).toFixed(decimalAmount);

  const integerString = Number.parseInt(absoluteAmountString, 10).toString();

  //Get part before decimal point, seperated by delimiter
  const integerPart = integerString.replaceAll(/(.)(?=(\d{3})+$)/g, `$1${delimiter}`);

  let fractionalPart = '';
  if (decimalAmount) {
    const decimalNumbers = Number(absoluteAmountString) - Number.parseInt(absoluteAmountString, 10);

    fractionalPart = `${decimalMark}${decimalNumbers.toFixed(decimalAmount).slice(2)}`;
  }

  return `${minusSign}${prefix}${integerPart}${fractionalPart}${suffix}`;
};
