using System.Security.Cryptography;
using System.Text;

namespace scrapper.api.Utils;

public class Crypto {
    private readonly string iv;
    private readonly string key;

    // public Crypto() { }

    public Crypto(string data, string key, string iv) {
        this.key = key;
        this.iv = iv;
    }

    public string Encrypt(string data) {
        var keyBinary = Encoding.UTF8.GetBytes(key);
        var ivBinary = Encoding.UTF8.GetBytes(iv);
        var dataBinary = Encoding.UTF8.GetBytes(data);

        using (var aes = Aes.Create()) {
            aes.Mode = CipherMode.CBC;
            aes.Padding = PaddingMode.PKCS7;
            aes.Key = keyBinary;
            aes.IV = ivBinary;
            using (var ms = new MemoryStream()) {
                using (var transform = aes.CreateEncryptor())
                using (var cs = new CryptoStream(ms, transform, CryptoStreamMode.Write)) {
                    cs.Write(dataBinary, 0, dataBinary.Length);
                }

                var cipher = ms.ToArray();
                return Convert.ToBase64String(cipher);
            }
        }
    }

    public string Decrypt(string data) {
        var keyBinary = Encoding.UTF8.GetBytes(key);
        var ivBinary = Encoding.UTF8.GetBytes(iv);
        var dataBinary = Convert.FromBase64String(data);

        using (var aes = Aes.Create()) {
            aes.Mode = CipherMode.CBC;
            aes.Padding = PaddingMode.PKCS7;
            aes.Key = keyBinary;
            aes.IV = ivBinary;

            using (var ms = new MemoryStream(dataBinary)) {
                using (var transform = aes.CreateDecryptor(aes.Key, aes.IV))
                using (var cs = new CryptoStream(ms, transform, CryptoStreamMode.Read)) {
                    using (var decrypt = new StreamReader(cs)) {
                        var cipherText = decrypt.ReadToEnd();
                        return cipherText;
                    }
                }
            }
        }
    }
}