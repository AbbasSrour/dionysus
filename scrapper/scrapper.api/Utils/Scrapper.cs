using HtmlAgilityPack;
using Microsoft.Net.Http.Headers;

namespace scrapper.api.Utils;

public class Scrapper {
    public async Task<string> CallImdb(string fullUrl) {
        var httpRequestMessage =
            new HttpRequestMessage(HttpMethod.Get, fullUrl) {
                Headers = {
                    { HeaderNames.UserAgent, "Mozilla/5.0 (X11; Linux x86_64; rv:100.0) Gecko/20100101 Firefox/100.0" }
                }
            };
        var handler = new HttpClientHandler { AllowAutoRedirect = true };
        var client = new HttpClient(handler);
        var response = await client.SendAsync(httpRequestMessage);
        var content = await response.Content.ReadAsStringAsync();
        return content;
    }

    public async Task<HtmlNode> mapShows(string html) {
        var htmlDoc = new HtmlDocument();
        htmlDoc.LoadHtml(html);
        var list = htmlDoc.DocumentNode.SelectSingleNode("//div[@class='model__closed']");
        Console.Write("hello");
        Console.Write(list);
        return list;
        // var list = htmlDoc.DocumentNode.SelectNodes("//td[@class='result_test odd']");
        // var evenList = htmlDoc.DocumentNode.SelectNodes("//td[@class='result_test even']");


        // var titles = new List<string>();
        // foreach (var item in HeaderNames) titles.Add(new Row { Title = item.InnerText });
        // var showList = new List<string>();

        // foreach (var link in list)
        //     if (link.FirstChild.Attributes.Count > 0)
        //         showList.Add(link.FirstChild.Attributes[0].Value);
        //
        // return showList;
    }
}