const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given null", () => {
    const trivialKey = deterministicPartitionKey(null);
    expect(trivialKey).toBe("0");
  });

  it("Returns the partition key 'abc' when give the partition key 'abc' ", () => {
    const event = { partitionKey: 'abc' };
    expect(deterministicPartitionKey(event)).toBe('abc');
  });
  
  it("Returns the hash of the data 'example' ", () => {
    const event = { data: 'example' };
    expect(deterministicPartitionKey(event)).toBe('1eeac9a5fc3f4c6ec1e089cf4bf4f95144a972940be799c1e4f3c911b10ce4eef2fc5d8314b5289a83828483da07304eaf5d3d49dec7ec4f8aa21c5f5c2d637d');
  });
  
  it("Returns the partition key '123' when give the partition key '123' ", () => {
    const event = { partitionKey: 123 };
    expect(deterministicPartitionKey(event)).toBe('123');
  });
  
  it("Returns the hash of the key when its length is greater than MAX partition key ", () => {
    const event = { partitionKey: 'a'.repeat(300) };
    expect(deterministicPartitionKey(event)).toBe('7350d99d1a20435c283070f3613302edb7027fced163086b048bd3ded530c5cb7a8ced83d1c6fda78f8832c61fb02698d14252c6b4ecf6989b81b04ca99a6302');
  });
});


