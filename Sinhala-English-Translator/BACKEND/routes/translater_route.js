const router = require("express").Router();
const axios = require("axios");
const apiUrlEnglish = "http://localhost:5000/extract_keywords";
const apiUrlSinhala = "http://localhost:5000/extract_keywords-sinhala";

async function callFlaskAPI(apiUrl, text) {
  try {
    const response = await axios.post(apiUrl, { text });
    return response.data;
  } catch (error) {
    throw error;
  }
}

router.get("/test", (req, res) => {
  return res.status(200).json({ message: "hello world" });
});

router.post("/keyword-extractor-english", async (req, res) => {
  const text = req.body.text;
  callFlaskAPI(apiUrlEnglish, text)
    .then((result) => {
      return res.status(200).json({ "Keywords (English):": result.keywords });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
});

router.post("/keyword-extractor", async (req, res) => {
  const text = req.body.text;
  return callFlaskAPI(apiUrlSinhala, text)
    .then((result) => {
      res.status(200).json({ "Keywords (Sinhala):": result.keywords });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
});

module.exports = router;
