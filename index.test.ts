import {sanitize} from '.'

test('sanitize key', () => {
  const key = "/example/key/with unsafe*characters?";
  const sanitizedKey = sanitize(key);
  expect(sanitizedKey).toBe("examplekeywithunsafecharacters");
});

test('sanitize key with replacement', () => {
  const key = "/example/key/with unsafe*characters?";
  const sanitizedKey = sanitize(key, { replacement: "_" });
  expect(sanitizedKey).toBe("example_key_with_unsafe_characters_");
});

test('sanitize key with strict mode', () => {
  const key = "/example/key/with unsafe*characters?";
  const sanitizedKey = sanitize(key, { replacement: "_", strict: true });
  expect(sanitizedKey).toBe("example/key/with_unsafe*characters_");
});
