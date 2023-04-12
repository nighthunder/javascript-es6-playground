function* generator(i) {
    yield i;
    yield i + 10;
  }
  
  const gen2 = generator(10);
  
  console.log(gen2.next().value);
  // Expected output: 10
  
  console.log(gen2.next().value);
  // Expected output: 20
  