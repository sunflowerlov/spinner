setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 400);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 700);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 1000);

// ... fill in the rest yourself ...
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1600);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1900);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 2200);
