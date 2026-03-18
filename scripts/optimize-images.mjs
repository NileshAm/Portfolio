import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const directoryPath = path.join(__dirname, '..', 'public', 'images');

const getAllFiles = function(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file))
    }
  })

  return arrayOfFiles
}

const optimizeImages = async () => {
  const files = getAllFiles(directoryPath);
  let count = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    // Only process jpg, jpeg, png
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const fileNameWithoutExt = path.basename(file, ext);
      const dirName = path.dirname(file);
      const newFilePath = path.join(dirName, `${fileNameWithoutExt}.webp`);

      // Skip if modern WebP already exists
      if (fs.existsSync(newFilePath)) {
          console.log(`Skipping ${file}, WebP already exists.`);
          continue;
      }

      console.log(`Optimizing: ${file} -> ${newFilePath}`);
      
      try {
        await sharp(file)
          .webp({ quality: 80 }) // 80 is a good balance between size and quality
          .toFile(newFilePath);
        
        console.log(`Successfully converted to WebP: ${newFilePath}`);
        
        // Delete original to save space
        fs.unlinkSync(file);
        console.log(`Deleted original: ${file}`);
        count++;

      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }
  }
  
  console.log(`Finished optimization. Converted ${count} images.`);
};

optimizeImages();
