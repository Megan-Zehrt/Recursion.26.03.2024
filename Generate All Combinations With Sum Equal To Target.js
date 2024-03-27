var arr = [1, 2, 3]
var target = 3

function generate_all_combinations(arr, target) {
    // Write your code here.
    const result = [];
  arr.sort();

  function backtracking(cur, pos, target) {
    if (target === 0) {
      return result.push([...cur]);
    }
    if (target <= 0) {
      return;
    }

    let previous = -1;
    for (let i = pos; i < arr.length; i++) {
      if (previous == arr[i]) continue;
      cur.push(arr[i]);
      backtracking(cur, i + 1, target - arr[i]);
      cur.pop();

      previous = arr[i];
    }
  }

  backtracking([], 0, target);
  return result;
}

console.log(generate_all_combinations(arr, target))