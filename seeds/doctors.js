/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

export async function seed(knex) {
  await knex('doctors').del();
  await knex('doctors').insert([
        { 
          id: 'Fs22g6XeJ1gEWM9g3G4ONytOyFd2',
          first_name: 'John', 
          last_name: 'Doe', 
          email: 'john.doe@example.com', 
          phone: '123-456-7890', 
          current_block: 'Cardiology' 
        },
        { 
          id: '27tR5NCRwmddkWlrT9HayUjEchn2',
          first_name: 'Jane', 
          last_name: 'Smith', 
          email: 'jane.smith@example.com', 
          phone: '987-654-3210', 
          current_block: 'ICU' 
        },
        { 
          id: 'qWAizSw8npS4DaIi3PW6DaJMhSA3',
          first_name: 'Alice', 
          last_name: 'Johnson', 
          email: 'alice.johnson@example.com', 
          phone: '555-123-4567', 
          current_block: 'Nephrology' 
        },
        { 
          id: '8ByUEnOTe8eTiCFnjoSLtWThtVC3',
          first_name: 'Bob', 
          last_name: 'Williams', 
          email: 'bob.williams@example.com', 
          phone: '555-987-6543', 
          current_block: 'Gastroenterology' 
        },
        { 
          id: 'bHQ2qle7VOQzIy1v7Vhehzlekwd2',
          first_name: 'Carol', 
          last_name: 'Brown', 
          email: 'carol.brown@example.com', 
          phone: '555-555-5555', 
          current_block: 'Respirology' 
        }
      ]);

};

