/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('doctor_patient', (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid()'));
        table.uuid('doctor_id').notNullable();
        table.uuid('patient_id').notNullable();
        table.string('notes');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table
            .foreign('doctor_id')
            .references('id')
            .inTable('doctors')
            .onDelete('CASCADE');
        table
            .foreign('patient_id')
            .references('id')
            .inTable('patients')
            .onDelete('CASCADE');
        table.unique(['doctor_id', 'patient_id']);
    });
};
 
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable('doctor_patient');
  };
