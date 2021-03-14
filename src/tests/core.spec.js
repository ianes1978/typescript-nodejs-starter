const coreUsers = require("../core/users");

describe("Core users functions validators", () => {
  it("Check email function", () => {
    expect(coreUsers.checkEmail("name.surname@email.it")).toBe(true);
    expect(coreUsers.checkEmail("name.surname@email")).toBe(false);
    expect(coreUsers.checkEmail("name.surnameemail.it")).toBe(false);
  });
});
