/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

export async function seed(knex) {
  await knex('doctor_patient').del();
  await knex('doctor_patient').insert([
    { 
      doctor_id: 1, 
      patient_id: 1, 
      notes: 'Patient has a history of heart disease, recommended regular checkups.' 
    },
    { 
      doctor_id: 2, 
      patient_id: 2, 
      notes: 'Patient is in ICU for post-operative recovery after knee surgery.' 
    },
    { 
      doctor_id: 3, 
      patient_id: 3, 
      notes: 'Patient is receiving treatment for chronic kidney disease.' 
    },
    { 
      doctor_id: 4, 
      patient_id: 4, 
      notes: 'Patient is being monitored for ongoing respiratory issues.' 
    },
    { 
      doctor_id: 5, 
      patient_id: 5, 
      notes: 'Patient needs follow-up consultation for asthma treatment.' 
    }
  ]);

};