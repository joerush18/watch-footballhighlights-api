const cheerio = require("cheerio");
const axios = require("axios");

class scraperService {
  async dataScraper(link) {
    let LINK;
    let dataItems = [];
    link !== "" ? (LINK = link) : (LINK = "https://hoofoot.com/");

    try {
      const { data } = await axios.get(LINK);
      const $ = cheerio.load(data);

      const Disclaimer = $(".contentff").find("p").text();

      $("#gallery > .box > #port").each((index, element) => {
        //   get id
        const rutid = $(element).find("a").attr("id");
        const id = rutid.slice(3, rutid.length);

        //   get href link to next page
        const hrefLink = $(element).find("a").attr("href");
        const link =
          "https://hoofoot.com/" + hrefLink.slice(2, hrefLink.length);

        // thumbnail
        const thumbnail = $(element).find(`a > img`).attr("src");
        // score line
        const scoreline = $(element).find(`#d${id}`).text();

        //   competition
        const competitionName = $(element).find(`#per${id} > img `).attr("alt");
        const competitionImg = $(element).find(`#per${id} > img `).attr("src");

        //  match time
        const matchTime = $(element).find(`#per${id}`).text();

        // create objects for each #ports
        let details = {
          id,
          link,
          thumbnail,
          scoreline,
          competitionName,
          competitionImage: competitionImg,
          matchTime,
        };
        dataItems.push(details);
      });
      return {
        Disclaimer,
        dataItems,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async watchLinkScraper(link) {
    try {
      const { data } = await axios.get(link);
      const $ = cheerio.load(data);
      const watchLink = $("#player").find("a").attr("href");
      return watchLink;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new scraperService();
