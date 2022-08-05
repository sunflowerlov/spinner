const input = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   \n']
let time = 100;
for (const each of input) {
  setTimeout(() => {
    process.stdout.write(each)
  }, time)
  time += 400
}