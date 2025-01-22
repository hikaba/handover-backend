/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('doctor_patient', (table) => {
        table.increments('id').primary();
        table
        .string('doctor_id')
        .notNullable()
        .references('doctors.id')
        .onDelete('CASCADE');
        table
        .integer('patient_id')
        .unsigned()
        .notNullable()
        .references('patients.id')
        .onDelete('CASCADE');
        table.string('notes');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.unique(['doctor_id', 'patient_id']);
    });
};
 
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTableIfExists('doctor_patient');
  };
