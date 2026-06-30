import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");

const presets = {
  hero: { maxWidth: 1920, quality: 82 },
  card: { maxWidth: 1200, quality: 80 },
  portfolio: { maxWidth: 1200, quality: 80 },
  logo: { maxWidth: 800, quality: 90 },
  client: { maxWidth: 600, quality: 85 },
};

async function getSize(filePath) {
  const stats = await fs.stat(filePath);
  return stats.size;
}

async function compressToJpeg(inputPath, outputPath, { maxWidth, quality }) {
  await sharp(inputPath)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toFile(outputPath);
}

async function optimizePng(inputPath, outputPath, { maxWidth }) {
  await sharp(inputPath)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true })
    .toFile(outputPath);
}

async function replaceFile(tempPath, targetPath) {
  await fs.rename(tempPath, targetPath);
}

async function compressJpegInPlace(filePath, preset) {
  const tempPath = `${filePath}.tmp`;
  await compressToJpeg(filePath, tempPath, preset);
  await replaceFile(tempPath, filePath);
}

async function convertToJpeg(inputPath, outputPath, preset) {
  await compressToJpeg(inputPath, outputPath, preset);
  await fs.unlink(inputPath);
}

async function processDirectory(dir, handler) {
  let entries = [];

  try {
    entries = await fs.readdir(dir);
  } catch {
    return [];
  }

  const results = [];

  for (const entry of entries) {
    const filePath = path.join(dir, entry);
    const result = await handler(filePath, entry);
    if (result) {
      results.push(result);
    }
  }

  return results;
}

async function main() {
  const summary = [];

  const publicPictureResults = await processDirectory(
    path.join(ROOT, "public/picture"),
    async (filePath, entry) => {
      const ext = path.extname(entry).toLowerCase();

      if (ext === ".png") {
        const before = await getSize(filePath);
        const outputPath = filePath.replace(/\.png$/i, ".jpg");
        await convertToJpeg(filePath, outputPath, presets.card);
        const after = await getSize(outputPath);
        return { file: path.relative(ROOT, outputPath), before, after };
      }

      if (ext === ".jpg" || ext === ".jpeg") {
        const before = await getSize(filePath);
        await compressJpegInPlace(filePath, presets.hero);
        const after = await getSize(filePath);
        return { file: path.relative(ROOT, filePath), before, after };
      }

      return null;
    },
  );

  summary.push(...publicPictureResults);

  const portfolioResults = await processDirectory(
    path.join(ROOT, "public/portfolio"),
    async (filePath, entry) => {
      const ext = path.extname(entry).toLowerCase();
      if (ext !== ".jpg" && ext !== ".jpeg") {
        return null;
      }

      const before = await getSize(filePath);
      await compressJpegInPlace(filePath, presets.portfolio);
      const after = await getSize(filePath);
      return { file: path.relative(ROOT, filePath), before, after };
    },
  );

  summary.push(...portfolioResults);

  const clientResults = await processDirectory(
    path.join(ROOT, "public/clients"),
    async (filePath, entry) => {
      const ext = path.extname(entry).toLowerCase();
      if (ext !== ".png") {
        return null;
      }

      const before = await getSize(filePath);
      const tempPath = `${filePath}.tmp`;
      await optimizePng(filePath, tempPath, presets.client);
      await replaceFile(tempPath, filePath);
      const after = await getSize(filePath);
      return { file: path.relative(ROOT, filePath), before, after };
    },
  );

  summary.push(...clientResults);

  const sourceConversions = [
    ["picture/spring_tropis.png", "picture/spring_tropis.jpg", presets.hero],
    ["picture/tentang-kami.png", "picture/tentang-kami.jpg", presets.hero],
    ["picture/visimisi_1.png", "picture/visimisi_1.jpg", presets.hero],
    ["picture/logo-daraka-wiguna.jpg", "picture/logo-daraka-wiguna.jpg", presets.logo],
  ];

  for (const [inputRel, outputRel, preset] of sourceConversions) {
    const inputPath = path.join(ROOT, inputRel);
    const outputPath = path.join(ROOT, outputRel);
    const before = await getSize(inputPath);

    if (inputRel === outputRel) {
      await compressJpegInPlace(inputPath, preset);
    } else {
      await compressToJpeg(inputPath, outputPath, preset);
      await fs.unlink(inputPath);
    }

    const after = await getSize(outputPath);
    summary.push({ file: outputRel, before, after });
  }

  const totalBefore = summary.reduce((sum, item) => sum + item.before, 0);
  const totalAfter = summary.reduce((sum, item) => sum + item.after, 0);

  console.log("Compressed files:");
  for (const item of summary.sort((a, b) => b.before - a.before)) {
    const saved = (((item.before - item.after) / item.before) * 100).toFixed(1);
    console.log(
      `${item.file}: ${(item.before / 1024 / 1024).toFixed(2)}MB -> ${(item.after / 1024 / 1024).toFixed(2)}MB (${saved}% saved)`,
    );
  }

  console.log(
    `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
