function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  const nums = numbers.split(",");
  return nums.reduce((sum, num) => {
    return sum + parseInt(num);
  }, 0);
}

export default add;
