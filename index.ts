export function add(numbers: string): number {
  if (!numbers) return 0;

  const matchCustomDelimiter = numbers.match(/^\/\/(.+)\n/);
  let delimiter = ",";
  if (matchCustomDelimiter) {
    delimiter = matchCustomDelimiter[1];
    numbers = numbers.split("\n").slice(1).join("\n");
  }

  const splitNumbers = numbers.split(new RegExp(`[${delimiter}\n]`));

  const negatives: number[] = [];
  const sum = splitNumbers.reduce((total, num) => {
    const parsed = parseInt(num, 10);
    if (isNaN(parsed)) return total;

    if (parsed < 0) negatives.push(parsed);
    return total + parsed;
  }, 0);

  if (negatives.length) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return sum;
}
