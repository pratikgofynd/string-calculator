function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  let delimiter = /[\n,]/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].substring(2));
    numbers = parts[1];
  }
  const nums = numbers.split(delimiter);
  return nums.reduce((sum, num) => {
    return sum + parseInt(num);
  }, 0);
}

export default add;
