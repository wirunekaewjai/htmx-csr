
/**
 * 
 * @param {TemplateStringsArray} strings 
 * @param  {...string | number | boolean | null | undefined | (string | number | boolean | null | undefined)[]} values 
 * @returns 
 */
export function html(strings, ...values) {
  let result = "";

  for (let i = 0; i < values.length; i++) {
    result += strings[i].trim();

    const value = values[i];

    if (Array.isArray(value)) {
      for (let j = 0; j < value.length; j++) {
        result += value[j];
      }
    } else {
      result += value;
    }
  }

  result += strings[strings.length - 1].trim();
  return result;
}