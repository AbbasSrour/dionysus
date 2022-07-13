using Microsoft.AspNetCore.Mvc;
using scrapper.api.Context;

namespace scrapper.api.Controllers;

[ApiController]
[Route("api/v1/[controller]/[action]")]
public class MovieController : Controller {
    private readonly DionysusDbContext db;

    public MovieController(DionysusDbContext db) {
        this.db = db;
    }
}