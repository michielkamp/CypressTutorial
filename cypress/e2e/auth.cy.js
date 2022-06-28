import LoginPage from '../pages/LoginPage'

describe("login tests", () => {

  it("login", () => {
    new LoginPage()
        .load().login("hatem@example.com", "123456")
        .validateWelcome("Good Evening Hatem")
  })
})