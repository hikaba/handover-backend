/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

export async function seed(knex) {
  await knex('doctors').del();
  await knex('doctors').insert([
        { 
          first_name: 'John', 
          last_name: 'Doe', 
          email: 'john.doe@example.com', 
          phone: '123-456-7890', 
          current_block: 'Cardiology' 
        },
        { 
          first_name: 'Jane', 
          last_name: 'Smith', 
          email: 'jane.smith@example.com', 
          phone: '987-654-3210', 
          current_block: 'ICU' 
        },
        { 
          first_name: 'Alice', 
          last_name: 'Johnson', 
          email: 'alice.johnson@example.com', 
          phone: '555-123-4567', 
          current_block: 'Nephrology' 
        },
        { 
          first_name: 'Bob', 
          last_name: 'Williams', 
          email: 'bob.williams@example.com', 
          phone: '555-987-6543', 
          current_block: 'Gastroenterology' 
        },
        { 
          first_name: 'Carol', 
          last_name: 'Brown', 
          email: 'carol.brown@example.com', 
          phone: '555-555-5555', 
          current_block: 'Respirology' 
        }
      ]);

};

