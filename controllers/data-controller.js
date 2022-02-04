const ScrapeService = require("../services/scraper-service");

class DataController {
  async getData(req, res) {
    let allData;
    allData = await ScrapeService.dataScraper(`https://hoofoot.com/`);
    res.json({
      message:
        "Get random data. Make post request with id to get data about specific competition",
      data: allData,
    });
  }

  async getDataPost(req, res) {
    const { id } = req.body;
    let allData;
    if (!id) {
      res.status(500).json({ message: "Id not found" });
    }
    allData = await ScrapeService.dataScraper(`https://hoofoot.com/?idp=${id}`);
    res.json({
      allData,
    });
  }

  async getwlinkPost(req, res) {
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
