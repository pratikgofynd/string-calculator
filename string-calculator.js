function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = /[\n,]/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiterPart = parts[0].substring(2);
    if (delimiterPart.startsWith("[")) {
      const delimiters = delimiterPart
        .match(/\[([^\]]+)\]/g)
        .map((d) => d.slice(1, -1));
      delimiter = new RegExp(
        delimiters
          .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
          .join("|")
      );
    } else {
      delimiter = new RegExp(
        delimiterPart.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
    }
    numbers = parts[1];
  }

  const nums = numbers.split(delimiter).map((num) => parseInt(num));

  const negatives = nums.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return nums
    .filter((num) => num <= 1000)
    .reduce((sum, num) => {
      return sum + num;
    }, 0);
}

export default add;
