const ScrapeService = require("./services/scraper-service");

async function run() {
  const allData = await ScrapeService.dataScraper(
    "https://hoofoot.com/?idp=17"
  );

  const wLink = await ScrapeService.watchLinkScraper(
    "https://hoofoot.com/?match=AC_Milan_1_-_2_Liverpool_2021_12_07"
  );
  console.log(allData);
}

run();
