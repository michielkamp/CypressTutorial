import LoginPage from "../pages/LoginPage";

describe("todo tests", () => {

  it("add new todo", () => {
    new LoginPage()
        .load().login("hatem@example.com", "123456")
        .clickAddTodo()
        .createTodo("Michiel's todo")
        .validateAddedTodo("Michiel's todo")
  })

  it("mark todo as complete", () => {
    cy.get("[data-testid='complete-task'").first().click()
    cy.get("[data-testid='todo-item']").first().should("have.css", "background-color", "rgb(33, 76, 97)")
  })
})