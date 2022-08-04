export function reverseWords() {
  const message = [
    'c',
    'a',
    'k',
    'e',
    ' ',
    'p',
    'o',
    'u',
    'n',
    'd',
    ' ',
    's',
    't',
    'e',
    'a',
    'l',
  ];
  let currentWordStart = 0;
  reverse(message, 0, message.length - 1);
  console.log('before', message);
  for (let i = 0; i <= message.length; i++) {
    if (i === message.length || message[i] === ' ') {
      reverse(message, currentWordStart, i - 1);
      currentWordStart = i + 1;
    }
  }
  return message.join('');
}

function reverse(message: string[], leftIndex: number, rightIndex: number) {
  while (leftIndex < rightIndex) {
    let tempEl = message[leftIndex];
    message[leftIndex] = message[rightIndex];
    message[rightIndex] = tempEl;

    leftIndex++;
    rightIndex--;
  }
}
