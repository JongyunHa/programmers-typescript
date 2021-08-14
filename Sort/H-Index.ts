function solution(citations: number[]): number {
  citations = citations.sort((a, b) => b - a);
  let i: number = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;
}

const citations: number[] = [3, 0, 6, 1, 5];
console.log(solution(citations));
