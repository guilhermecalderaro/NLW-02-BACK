import Knex from 'knex';

const tablename = 'connections';

export async function up(knex: Knex) {
    return knex.schema.createTable(tablename, (table) => {
        table.increments('id').primary();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('created_at')
            .defaultTo('now()')
            .notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable(tablename);
}