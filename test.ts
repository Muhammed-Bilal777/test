// timeOut.ts

export async function timeOut(): Promise<void> {
  const timeout = global.DEFFUKT_TIME_OUT;

  if (typeof timeout !== "number") {
    throw new Error("DEFFUKT_TIME_OUT must be defined and a number");
  }

  return new Promise<void>((_, reject) => {
    setTimeout(() => {
      reject(new Error(`service time out after ${timeout}`));
    }, timeout);
  });
}

// timeOut.test.ts

import { timeOut } from "./timeOut";

describe("timeOut", () => {
  let originalTimeout: any;

  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
    originalTimeout = global.DEFFUKT_TIME_OUT;
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
    global.DEFFUKT_TIME_OUT = originalTimeout;
  });

  it("calls setTimeout with correct delay when DEFFUKT_TIME_OUT is set", () => {
    global.DEFFUKT_TIME_OUT = 3000;
    timeOut();
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 3000);
  });

  it("throws immediately if DEFFUKT_TIME_OUT is undefined", async () => {
    global.DEFFUKT_TIME_OUT = undefined;

    await expect(timeOut()).rejects.toThrow(
      "DEFFUKT_TIME_OUT must be defined and a number"
    );
  });

  it("throws immediately if DEFFUKT_TIME_OUT is not a number", async () => {
    global.DEFFUKT_TIME_OUT = "not-a-number" as any;

    await expect(timeOut()).rejects.toThrow(
      "DEFFUKT_TIME_OUT must be defined and a number"
    );
  });
});
