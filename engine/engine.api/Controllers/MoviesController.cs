using engine.api.Context;
using engine.api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace engine.api.Controllers;

[ApiController]
[Route("api/v1/[controller]/[action]")]
public class MoviesController : Controller {
    private readonly DionysusDbContext db;

    public MoviesController(DionysusDbContext db) {
        this.db = db;
    }
    
    [HttpGet("{id}")]
    public Task<List<Movie>> GetSimilarMovies(int id) {
        var movie = db.Movies.ToListAsync();
        var movieList = movie;
        for (var i = 0; i < movie.Result.Count; i++) {
             movieList.Result[i].MovieName= movieList.Result[i].MovieName.ToLower().Replace(" ", String.Empty);
        }
        
        return movie;
    }
    
}