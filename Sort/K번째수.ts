function solution(array: number[], commands: Array<number[]>): number[] {
  const answer: number[] = [];
  for (let i = 0; i < commands.length; i++) {
    const [from, to, rank]: number[] = commands[i];
    const sliced: number[] = array.slice(from - 1, to);
    const sorted: number[] = sliced.sort((a, b) => a - b);
    answer.push(sorted[rank - 1]);
  }
  return answer;
}
const array: number[] = [1, 5, 2, 6, 3, 7, 4];
const commnads: Array<number[]> = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(array, commnads));
