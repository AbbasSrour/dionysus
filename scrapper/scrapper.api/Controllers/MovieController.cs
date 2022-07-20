using HtmlAgilityPack;
using Microsoft.AspNetCore.Mvc;
using scrapper.api.Utils;

namespace scrapper.api.Controllers;

[ApiController]
[Route("api/v1/[controller]/[action]")]
public class MovieController : Controller {
    // private readonly DionysusDbContext db;

    // public MovieController(DionysusDbContext db) {
    //     this.db = db;
    // }

    [HttpGet]
    public async Task<HtmlNode> GetMovie() {
        var scrapper = new Scrapper();
        var content = await scrapper.CallImdb("https://www.imdb.com/find?q=uncharted&ref_=nv_sr_sm");
        var shows = await scrapper.mapShows(content);
        return shows;
    }

    [HttpGet("{searchString}")]
    public string Encrypt(string searchString) {
        if (searchString.Length == 0) return "Fuck You";
        var SECRET = "25742532592138496744665879883281";
        var IV = "9225679083961858";
        var toEncrypt = new Crypto(searchString, SECRET, IV);
        return toEncrypt.Encrypt(searchString);
    }

    [HttpGet("{encrypted}")]
    public string Decrypt(string encrypted) {
        if (encrypted.Length == 0) return "Fuck You";
        var SECRET = "25742532592138496744665879883281";
        var IV = "9225679083961858";
        Console.Write(encrypted);
        var toDecrypt = new Crypto(encrypted, SECRET, IV);
        return toDecrypt.Decrypt(encrypted);
    }
}