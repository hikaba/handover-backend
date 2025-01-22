/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

export async function seed(knex) {
  await knex('doctor_patient').del();
  await knex('doctor_patient').insert([
    // Doctor 1
    { 
      doctor_id: 'Fs22g6XeJ1gEWM9g3G4ONytOyFd2', 
      patient_id: 1, 
      notes: 'Patient has a history of heart disease, recommended regular checkups.' 
    },
    { 
      doctor_id: 'Fs22g6XeJ1gEWM9g3G4ONytOyFd2', 
      patient_id: 2, 
      notes: 'Patient in recovery from knee surgery.' 
    },
    { 
      doctor_id: 'Fs22g6XeJ1gEWM9g3G4ONytOyFd2', 
      patient_id: 3, 
      notes: 'Patient undergoing chronic kidney disease treatment.' 
    },
    { 
      doctor_id: 'Fs22g6XeJ1gEWM9g3G4ONytOyFd2', 
      patient_id: 6, 
      notes: 'Patient diagnosed with high cholesterol, prescribed medication.' 
    },

    // Doctor 2
    { 
      doctor_id: '27tR5NCRwmddkWlrT9HayUjEchn2', 
      patient_id: 2, 
      notes: 'Patient recovering well after knee surgery.' 
    },
    { 
      doctor_id: '27tR5NCRwmddkWlrT9HayUjEchn2', 
      patient_id: 4, 
      notes: 'Monitoring patient for asthma management.' 
    },
    { 
      doctor_id: '27tR5NCRwmddkWlrT9HayUjEchn2', 
      patient_id: 7, 
      notes: 'Patient admitted for seasonal allergies.' 
    },
    { 
      doctor_id: '27tR5NCRwmddkWlrT9HayUjEchn2', 
      patient_id: 8, 
      notes: 'Patient in good health, no recent concerns.' 
    },

    // Doctor 3
    { 
      doctor_id: 'qWAizSw8npS4DaIi3PW6DaJMhSA3', 
      patient_id: 3, 
      notes: 'Managing chronic kidney disease treatment.' 
    },
    { 
      doctor_id: 'qWAizSw8npS4DaIi3PW6DaJMhSA3', 
      patient_id: 9,
      notes: 'Patient scheduled for follow-up after hip replacement.' 
    },
    { 
      doctor_id: 'qWAizSw8npS4DaIi3PW6DaJMhSA3', 
      patient_id: 5, 
      notes: 'Monitoring patient for dust allergies.' 
    },
    { 
      doctor_id: 'qWAizSw8npS4DaIi3PW6DaJMhSA3', 
      patient_id: 10, 
      notes: 'Patient managing post-c-section recovery.' 
    },

    // Doctor 4
    { 
      doctor_id: '8ByUEnOTe8eTiCFnjoSLtWThtVC3', 
      patient_id: 4, 
      notes: 'Patient being monitored for asthma.' 
    },
    { 
      doctor_id: '8ByUEnOTe8eTiCFnjoSLtWThtVC3', 
      patient_id: 6, 
      notes: 'Patient has high cholesterol, prescribed dietary changes.' 
    },
    { 
      doctor_id: '8ByUEnOTe8eTiCFnjoSLtWThtVC3', 
      patient_id: 8, 
      notes: 'Regular health check-up conducted, no concerns.' 
    },
    { 
      doctor_id: '8ByUEnOTe8eTiCFnjoSLtWThtVC3', 
      patient_id: 1, 
      notes: 'Patient history of heart disease, requires periodic check-ups.' 
    },

    // Doctor 5
    { 
      doctor_id: 'bHQ2qle7VOQzIy1v7Vhehzlekwd2', 
      patient_id: 5, 
      notes: 'Patient needs follow-up consultation for allergies.' 
    },
    { 
      doctor_id: 'bHQ2qle7VOQzIy1v7Vhehzlekwd2', 
      patient_id: 7, 
      notes: 'Patient admitted for seasonal allergies, recovery in progress.' 
    },
    { 
      doctor_id: 'bHQ2qle7VOQzIy1v7Vhehzlekwd2', 
      patient_id: 9, 
      notes: 'Patient under observation for post-hip replacement.' 
    },
    { 
      doctor_id: 'bHQ2qle7VOQzIy1v7Vhehzlekwd2', 
      patient_id: 10, 
      notes: 'Monitoring patient after post-surgery recovery.' 
    }
  ]);
};
