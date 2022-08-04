export function reverseInPlace() {
  let str2: string | string[] = 'something';
  let leftIndex = 0;
  let rightIndex = str2.length - 1;
  str2 = str2.split('');
  console.log(str2);
  while (leftIndex < rightIndex) {
    let tempEl = str2[leftIndex];
    str2[leftIndex] = str2[rightIndex];
    str2[rightIndex] = tempEl;

    leftIndex++;
    rightIndex--;
  }
  return str2.join('');
}
