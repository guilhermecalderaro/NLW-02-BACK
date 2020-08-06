import Knex from 'knex';

const tablename = 'class_schedule';

export async function up(knex: Knex) {
    return knex.schema.createTable(tablename, (table) => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable(tablename);
}