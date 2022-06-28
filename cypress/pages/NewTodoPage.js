import TodoPage from "./TodoPage";

export default class NewTodoPage {

    //Locators
    get newTodoItem() {
        return cy.get("[data-testid='new-todo']")
    }

    get saveNewTodo() {
        return cy.get("[data-testid='submit-newTask']")
    }

    // Methods
    load = () => {
        cy.visit("/todo/new")
        return this
    }

    createTodo = (item) => {
        this.newTodoItem.type(item)
        this.saveNewTodo.click()
        return new TodoPage()
    }
}