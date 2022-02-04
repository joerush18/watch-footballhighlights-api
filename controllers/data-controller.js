const ScrapeService = require("../services/scraper-service");

class DataController {
  async getData(req, res) {
    const { id } = req.body;
    let allData;
    if (!id) {
      allData = await ScrapeService.dataScraper(`https://hoofoot.com/`);
      res.json({ data: allData });
    }
    allData = await ScrapeService.dataScraper(`https://hoofoot.com/?idp=${id}`);
    res.json({
      allData,
    });
  }

  async getwlink(req, res) {
    const { link } = req.body;
    if (!link) {
      res.status(500).json({
        message: "Please provide a href link.",
      });
    }
    const wLink = await ScrapeService.watchLinkScraper(link);
    res.json({
      wLink,
    });
  }
}

module.exports = new DataController();
