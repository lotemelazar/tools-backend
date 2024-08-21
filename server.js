require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const sharp = require("sharp");
const rateLimit = require("express-rate-limit");
const archiver = require("archiver");
const auth = require("./middleware/auth");
const authRoutes = require("./routes/auth");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  // Filter is removed here to allow all files to pass and handle filtering later
});

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend API is running");
});

app.post("/upload", auth, upload.array("images", 100), async (req, res) => {
  try {
    const archive = archiver("zip", {
      zlib: { level: 9 },
    });

    res.attachment("optimized-images.zip");
    archive.pipe(res);

    const imageFiles = req.files.filter((file) =>
      file.mimetype.startsWith("image/")
    );

    if (imageFiles.length === 0) {
      throw new Error("No images found in the uploaded folder.");
    }

    await Promise.all(
      imageFiles.map(async (file) => {
        const optimizedImageBuffer = await sharp(file.buffer)
          .resize(1024, 578)
          .toFormat("jpeg", { quality: 90, mozjpeg: true })
          .toBuffer();

        const originalNameWithoutExt = file.originalname.replace(
          /\.[^/.]+$/,
          ""
        );
        const optimizedFileName = `${originalNameWithoutExt}.jpg`;

        if (optimizedImageBuffer.length > 5 * 1024 * 1024) {
          throw new Error(
            `File ${file.originalname} exceeds 5MB after processing`
          );
        }

        archive.append(optimizedImageBuffer, { name: optimizedFileName });
      })
    );

    archive.finalize();
  } catch (error) {
    console.error("Error processing images:", error);
    res.status(500).json({ error: "Error processing images" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
