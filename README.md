# Arcane Encryption Utils

`arcane-encryption-utils` is a magical JavaScript library designed to make encryption and decryption as simple as casting a spell. Built on top of the robust `crypto-js` library, it offers an easy-to-use interface for AES encryption, allowing you to secure your messages with a secret key.

## Installation

To install the library, use the following npm command:

```bash
npm install arcane-encryption-utils
```

## Usage

First, import `ArcaneEncryptionUtils` into your project:

```javascript
import ArcaneEncryptionUtils from 'arcane-encryption-utils';
```

### Encrypting a Message

To encrypt a message, create an instance of `ArcaneEncryptionUtils` with your secret key, and then use the `castEncryptionSpell` method:

```javascript
const secretKey = 'your-secret-key-here';
const arcaneUtils = new ArcaneEncryptionUtils(secretKey);

const encryptedMessage = arcaneUtils.castEncryptionSpell('Hello, World!');
console.log(encryptedMessage);
```

### Decrypting a Message

To decrypt a message, use the `castDecryptionSpell` method with the ciphertext:

```javascript
const decryptedMessage = arcaneUtils.castDecryptionSpell(encryptedMessage);
console.log(decryptedMessage); // Output: Hello, World!
```

## Features

- Simple and intuitive API for encrypting and decrypting messages.
- Uses AES encryption for strong security.
- Built on the reliable `crypto-js` library.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE.md). See the LICENSE file for details.

## Support

If you encounter any issues or have any questions, please file an issue on the GitHub repository.

Happy encrypting!
