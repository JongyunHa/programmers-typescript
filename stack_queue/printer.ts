function solution(priorities: number[], position: number): number {
  let targetIndex: number = position;
  let answer: number = 1;
  let first: number = -1;

  while (priorities.length > 0) {
    first = priorities.shift();
    if (priorities.some((value) => value > first)) priorities.push(first);
    else {
      if (targetIndex === 0) break;
      else answer++;
    }
    if (targetIndex === 0) targetIndex = priorities.length - 1;
    else targetIndex--;
  }

  return answer;
}

const priorities: number[] = [1, 1, 9, 1, 1, 1];
const position: number = 0;

console.log(solution(priorities, position));
