function tribonacciSequence(startSequence, length) {
  if (length === 0) {
    return [];
  } else if (length <= 3) {
    return startSequence.slice(0, length);
  } else {
    for (let i = 0; startSequence.length < length; i++) {
      let sum = startSequence[i] + startSequence[i + 1] + startSequence[i + 2];
      startSequence.push(sum);
    }
  }
  return startSequence;
}
