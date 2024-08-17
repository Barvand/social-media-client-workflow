import { logout } from "./logout"; 

describe("logout", () => {
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

  beforeEach(() => {
    global.localStorage = localStorageMock;

    localStorage.setItem("token", "ProfileToken");
  });

  it("clears the token from localStorage", async () => {
    await logout();

    expect(localStorage.getItem("token")).toBe(null);
  });
});
