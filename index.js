import CryptoJS from 'crypto-js';

class ArcaneEncryptionUtils {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  // Encrypts the message with a spell (AES encryption)
  castEncryptionSpell(message) {
    return CryptoJS.AES.encrypt(message, this.secretKey).toString();
  }

  // Decrypts the message with a counter-spell
  castDecryptionSpell(ciphertext) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}

export default ArcaneEncryptionUtils;
