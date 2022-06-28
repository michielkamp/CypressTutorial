import TodoPage from "./TodoPage";

export default class LoginPage {

    // Locators
    get emailInput() {
        return cy.get("[data-testid='email']")
    }

    get passwordInput() {
        return cy.get("[data-testid='password']")
    }

    get submit() {
        return cy.get("[data-testid='submit']")
    }

    // Method
    load = () => {
        cy.visit("/")
        return this
    }

    login = (email, password) => {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submit.click()
        return new TodoPage()
    }
}