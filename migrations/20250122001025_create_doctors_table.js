/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('doctors', (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid()'));
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').notNullable.unique();
        table.string('phone').notNullable();
        table.string('specialization').notNullable();
        table.string('current_block');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};
 
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable('doctors');
  };
  
