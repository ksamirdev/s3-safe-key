# Object Keys Sanitizer 💉

This utility provides a function to sanitize S3 keys by removing or replacing unsafe characters. It ensures that the keys only contain safe characters, defined as `A-Za-z0-9!-_.'()`.

## Installation 📦

To use this utility, you need to install this package.

```bash
npm install @samocodes/s3-safe-key
pnpm add @samocodes/s3-safe-key
yarn add @samocodes/s3-safe-key
bun add @samocodes/s3-safe-key
```

## Usage 🧰

### Importing the Function

To use the `sanitize` function, first import it into your project:

```typescript
import { sanitize } from "@samocodes/s3-safe-key";
```

`sanitize(key: string, options: Options): string`

- key (string): The key to be sanitized.
- options (Optional): An object with the following optional properties:
  - replacement (string): The string to replace unsafe characters with. Default is an empty string ("").
  - strict (boolean): If true, includes \* and / as safe characters. Default is false.

Returns:

A sanitized string with only safe characters. If the resulting string is empty, it returns a random hexadecimal string of 10 bytes.

## Example

```typescript
import { sanitize } from "@samocodes/s3-safe-key";

const key = "/example/key/with unsafe*characters?";
const options = { replacement: "_", strict: true };

const sanitizedKey = sanitize(key, options);

console.log(sanitizedKey); // Output: example_key_with_unsafe_characters_
```

## Contributing 🤝

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License 📜

This project is licensed under the MIT License.

This README covers the usage, API documentation and installation guide.
`https://github.com/samocodes/s3-safe-key.git`
