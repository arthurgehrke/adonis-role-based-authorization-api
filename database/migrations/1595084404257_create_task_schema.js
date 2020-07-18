'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTaskSchema extends Schema {
  up() {
    this.create('tasks', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.integer('user_id').unsigned().notNullable()
      table.timestamps()

      table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onUpdate('cascade')
        .onDelete('cascade')
    })
  }

  down() {
    this.drop('tasks')
  }
}

module.exports = CreateTaskSchema
