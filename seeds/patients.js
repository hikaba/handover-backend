/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

export async function seed(knex) {
  await knex('patients').del();
  await knex('patients').insert([
    { 
      first_name: 'Michael', 
      last_name: 'Davis', 
      date_of_birth: '1985-03-12', 
      medical_history: JSON.stringify({ allergies: ['peanuts'], past_surgeries: ['appendectomy'] }) 
    },
    { 
      first_name: 'Sarah', 
      last_name: 'Miller', 
      date_of_birth: '1990-06-22', 
      medical_history: JSON.stringify({ allergies: ['penicillin'], past_surgeries: ['knee surgery'] }) 
    },
    { 
      first_name: 'David', 
      last_name: 'Taylor', 
      date_of_birth: '1978-11-05', 
      medical_history: JSON.stringify({ allergies: [], past_surgeries: ['gallbladder removal'] }) 
    },
    { 
      first_name: 'Emily', 
      last_name: 'Wilson', 
      date_of_birth: '1992-02-28', 
      medical_history: JSON.stringify({ allergies: ['asthma'], past_surgeries: [] }) 
    },
    { 
      first_name: 'Matthew', 
      last_name: 'Moore', 
      date_of_birth: '1983-09-15', 
      medical_history: JSON.stringify({ allergies: ['dust'], past_surgeries: [] }) 
    }
  ]);

};
