/// <reference types="cypress" />

import * as todoPage from '../page-objects/todo-page'

describe('visual validation', () => {
    before(() => todoPage.navigate())

    beforeEach(() => cy.eyesOpen({appName: 'Caoimhe todoMVC', batchName: 'Caoimhe todoMVCBAtch',
browser: [
    {name: 'chrome', width: 1024, height: 768},
    {name: 'chrome', width: 1024, height: 768},
    {deviceName: 'iPhone X'}
    ]
}))
   
    afterEach(() => cy.eyesClose())


    it('should look good', () =>{
        cy.eyesCheckWindow('empty todo list')

        todoPage.addTodo('clean room')
        todoPage.addTodo('learn javascript')
        todoPage.addTodo('run cypress')

        cy.eyesCheckWindow('three todos')

        todoPage.toggleTodo(0)

        cy.eyesCheckWindow('mark as completed')
    })
})