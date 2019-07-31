const fs = require('fs');
const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const speedline = require('speedline');

if (process.argv.length != 3) {
    console.log("usage: node puppeteer.js <url>");
    return;
};

const url = process.argv[2];

(async () => {
    const traceFile = "web-trace.json";
    // Various devices can be emulated, this is mainly interesting to determine the size of the viewport
    const iPhone = devices['iPhone X'];

    // Headless is default, --no-sandbox for sudo
    const browser = await puppeteer.launch({args:['--no-sandbox']});
    const page = await browser.newPage();
    await page.emulate(iPhone);

    try {
        // Tracefile with screenshots required to calculate SpeedIndex
        // Screenshots may return blank on occasion, appears to be a puppeteer/chromium bug
        await page.tracing.start({path: traceFile, screenshots: true}); 
        await page.goto(url, {timeout: 0});

        // To get load event timing
        const perf = JSON.parse(
            await page.evaluate(() => JSON.stringify(window.performance.timing))
        );

        await page.tracing.stop();
        const results = await speedline(traceFile);
        const onLoad = perf.loadEventEnd - perf.navigationStart;
        const ttfb = perf.responseStart - perf.navigationStart;
        const dom = perf.domContentLoadedEventEnd - perf.navigationStart;
        const tti = perf.domInteractive - perf.navigationStart;

        // Write output to stdout
        console.log(ttfb + ',' + results.first + ',' + tti + ',' + dom + ',' + onLoad + ',' + results.complete + ',' + results.speedIndex);
    }
    catch (err) {
        console.log(err);
    }

    await browser.close();
})();
