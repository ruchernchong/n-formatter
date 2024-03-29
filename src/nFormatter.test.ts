import nFormatter from "./nFormatter";

describe("nFormatter", () => {
  it.each([
    { value: 1000, formattedValue: "1k" },
    { value: 1000000, formattedValue: "1M" },
    { value: 1000000000, formattedValue: "1B" },
    { value: 1000000000000, formattedValue: "1T" },
  ])(
    "should return $value as $formattedValue correctly",
    ({ value, formattedValue }) => {
      expect(nFormatter(value)).toEqual(formattedValue);
    }
  );

  it.each([100, 10, 1])(
    "should return %d as its own value since it is lesser than 1e3 (1000)",
    () => {
      expect(nFormatter(100)).toEqual("100");
      expect(nFormatter(10)).toEqual("10");
      expect(nFormatter(1)).toEqual("1");
    }
  );
});
