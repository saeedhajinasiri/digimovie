import fs from 'fs'

const destPath = '../../tailwind.config.js';
const srcPath = './dist/tailwind.config.js'

if (fs.existsSync(destPath)) {
  console.log('file exists');
} else {
  fs.copyFile(srcPath, destPath, (err: any) => {
    if (err) throw err;
    console.log('tailwind.config.js was created!');
  });
}
