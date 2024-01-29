const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    // เปิด browser ด้วย Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // เข้าหน้าเว็บที่ต้องการ
    await page.goto('https://example.com');

    // กดปุ่มหรือดึงข้อมูลที่ต้องการจากหน้าเว็บ
    const title = await page.title();

    // ปิด browser
    await browser.close();

    // ส่งข้อมูลกลับไปที่เว็บแอป
    res.send(`
      <html>
        <head>
          <title>Scraped Title</title>
        </head>
        <body>
          <h1>${title}</h1>
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
