import NewTodoPage from "./NewTodoPage";

export default class TodoPage {

    //Locators
    get addNewTodo() {
        return cy.get("[data-testid='add']")
    }

    get firstTodoItem() {
        return cy.get("[data-testid='todo-item']").first()
    }

    get markItemComplete() {
        return cy.get("[data-testid='complete-task'").first()
    }

    get welcomeMessage() {
        return cy.get("[data-testid='welcome']")
    }

    // Methods
    load = () => {
        cy.visit("/todo")
        return this
    }

    validateWelcome = (expectedMessage) => {
        this.welcomeMessage.should("have.text", expectedMessage)
    }

    clickAddTodo = () => {
        this.addNewTodo.click()
        return new NewTodoPage()
    }

    validateAddedTodo = (expected) => {
        this.firstTodoItem.should("have.text", expected)
    }
}