/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

export async function seed(knex) {
  await knex('patients').del();
  await knex('patients').insert([
    { 
      id: 1,
      first_name: 'Michael', 
      last_name: 'Davis', 
      date_of_birth: '1985-03-12', 
      medical_history: JSON.stringify({ allergies: ['peanuts'], past_surgeries: ['appendectomy'] }) 
    },
    { 
      id: 2,
      first_name: 'Sarah', 
      last_name: 'Miller', 
      date_of_birth: '1990-06-22', 
      medical_history: JSON.stringify({ allergies: ['penicillin'], past_surgeries: ['knee surgery'] }) 
    },
    { 
      id: 3,
      first_name: 'David', 
      last_name: 'Taylor', 
      date_of_birth: '1978-11-05', 
      medical_history: JSON.stringify({ allergies: [], past_surgeries: ['gallbladder removal'] }) 
    },
    { 
      id: 4,
      first_name: 'Emily', 
      last_name: 'Wilson', 
      date_of_birth: '1992-02-28', 
      medical_history: JSON.stringify({ allergies: ['asthma'], past_surgeries: [] }) 
    },
    { 
      id: 5,
      first_name: 'Matthew', 
      last_name: 'Moore', 
      date_of_birth: '1983-09-15', 
      medical_history: JSON.stringify({ allergies: ['dust'], past_surgeries: [] }) 
    },
    { 
      id: 6,
      first_name: 'Olivia', 
      last_name: 'Johnson', 
      date_of_birth: '1988-04-10', 
      medical_history: JSON.stringify({ allergies: ['shellfish'], past_surgeries: ['tonsillectomy'] }) 
    },
    { 
      id: 7,
      first_name: 'James', 
      last_name: 'Brown', 
      date_of_birth: '1975-07-25', 
      medical_history: JSON.stringify({ allergies: ['pollen'], past_surgeries: ['hernia repair'] }) 
    },
    { 
      id: 8,
      first_name: 'Sophia', 
      last_name: 'Garcia', 
      date_of_birth: '1995-10-05', 
      medical_history: JSON.stringify({ allergies: [], past_surgeries: [] }) 
    },
    { 
      id: 9,
      first_name: 'William', 
      last_name: 'Martinez', 
      date_of_birth: '1982-08-19', 
      medical_history: JSON.stringify({ allergies: ['nuts'], past_surgeries: ['hip replacement'] }) 
    },
    { 
      id: 10,
      first_name: 'Isabella', 
      last_name: 'Lee', 
      date_of_birth: '1991-12-03', 
      medical_history: JSON.stringify({ allergies: ['latex'], past_surgeries: ['c-section'] }) 
    }
  ]);
};

