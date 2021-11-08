const puppeteer = require('puppeteer');

(async () => {
    // Our code
    console.log("We throw the browser!!!");
    // const browser = await puppeteer.la unch();
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();
    await page.goto('https://github.com/Serbeld/PlatziNodeJs');

    var titulo1 = await page.evaluate(() => {
        const h1 = document.querySelector(".markdown-body h1");
        console.log(h1.textContent);
        
        return h1.textContent;
    });

    console.log(titulo1);

    console.log("Closing the browser");
    // browser.close();
    console.log("The browser was closed successfully");
})();
