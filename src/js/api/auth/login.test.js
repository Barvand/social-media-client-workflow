import { login } from "./login"; 

describe("able to login and store the token", () => {
  const localStorageMock = (function () {
    let store = {};

    return {
      getItem: (key) => store[key] || null,
      setItem: (key, value) => {
        store[key] = value.toString();
      },
      removeItem: (key) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      },
    };
  })();

  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ accessToken: "accountToken" }),
    }),
  );

  beforeEach(() => {
    global.localStorage = localStorageMock;
    localStorage.setItem("token", "accountToken");
  });

  it("simulates a log in attempt by saving the valid credentials as a token", async () => {
    const email = "100@100.com";
    const password = "JeWeetHetToch";
    await login(email, password);

    expect(localStorage.getItem("token")).toEqual(
      JSON.stringify("accountToken"),
    );
  });
});
