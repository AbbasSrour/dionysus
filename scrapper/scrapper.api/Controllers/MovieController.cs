using System.Security.Cryptography;
using System.Text;
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

    public string Encrypt(string data, string key, string iv) {
        var keyBinary = Encoding.Default.GetBytes(key);
        var ivBinary = Encoding.Default.GetBytes(iv);
        var dataBinary = Encoding.Default.GetBytes(data);

        using (var aes = Aes.Create()) {
            aes.Mode = CipherMode.CBC;
            aes.Key = keyBinary;
            aes.BlockSize = 256;
            aes.IV = ivBinary;
            using (var ms = new MemoryStream()) {
                using (var transform = aes.CreateEncryptor())
                using (var cs = new CryptoStream(ms, transform, CryptoStreamMode.Write)) {
                    cs.Write(dataBinary, 0, dataBinary.Length);
                }

                return BitConverter.ToString(ms.ToArray()).Replace("-", string.Empty);
            }
        }
    }

    public string Decrypt(string encrypted, string key, string iv) {
        var keyBinary = Encoding.Default.GetBytes(key);
        var ivBinary = Encoding.Default.GetBytes(iv);
        var dataBinary = Encoding.Default.GetBytes(encrypted);

        using (var aes = Aes.Create()) {
            aes.Mode = CipherMode.CBC;
            aes.BlockSize = 256;
            aes.IV = ivBinary;
            using (var ms = new MemoryStream()) {
                using (var transform = aes.CreateDecryptor())
                using (var cs = new CryptoStream(ms, transform, CryptoStreamMode.Write)) {
                    cs.Write(dataBinary, 0, dataBinary.Length);
                }

                return BitConverter.ToString(ms.ToArray()).Replace("-", string.Empty);
            }
        }
    }
}