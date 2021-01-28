const request = require('request');
const path = require('path');
const fs = require('fs');
const cp = require('child_process');
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

const files = [
  'https://raw.githubusercontent.com/zeit/next.js/canary/examples/with-styletron/styletron.js',
  'https://raw.githubusercontent.com/zeit/next.js/canary/examples/with-styletron/pages/_app.js',
  'https://raw.githubusercontent.com/zeit/next.js/canary/examples/with-styletron/pages/_document.js',
  'https://raw.githubusercontent.com/zeit/next.js/canary/examples/with-styletron/pages/index.js'
];

const styles = [
  'https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css'
];

mkdir('./pages')
  .then(() => mkdir('./static'))
  .then(() => mkdir('./static/styles'))
  .then(
    files.map((file, i) => {
      process.stdout;
      request(file, function(err, res, body) {
        const filename = file.split('with-styletron/').pop();
        process.stdout.write(`fetching ${filename}...\n`);
        if (err) {
          console.log(`Error requesting ${filename}:`, err.message);
        } else {
          writeFile(filename, body).catch(err =>
            console.log(`Error writing to ${filename}:`, err)
          );
        }
      });
    }),
    styles.map((file, i) => {
      process.stdout;
      request(file, function(err, res, body) {
        const filename = file.split('/').pop();
        process.stdout.write(`fetching ${filename}...\n`);
        if (err) {
          console.log(`Error requesting ${filename}:`, err.message);
        } else {
          writeFile('./static/styles/' + filename, body).catch(err =>
            console.log(`Error writing to ${filename}:`, err)
          );
        }
      });
    })
  )
  .then(
    () => {
      const filename = 'package.json'
      const scripts = {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "test": "echo \"Error: no test specified\" && exit 1",
      }

      process.stdout.write(`Adding Nextjs scripts to ${filename}...`);

      const data = require(fileName);
      data.scripts = { ...scripts }
      fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
        if (err) {
          return console.warn(err);
        }
        process.stdout.write(`${filename} updated`);
      });
    }
)
  .catch(err => console.log('error creating `pages` folder:', err.message));
