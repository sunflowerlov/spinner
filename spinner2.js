process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\   ', '\r|   ', '\r/   ', '\r-   ', '\r\   '];
let time = 100;
for (const symbol of spinner) {
  setTimeout(() => {
    process.stdout.write(symbol);
  }, time)
  time += 200;
}



setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1700);
