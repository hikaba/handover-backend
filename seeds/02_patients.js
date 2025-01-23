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
      medical_history: JSON.stringify({ allergies: ['peanuts'], past_surgeries: ['appendectomy'] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Hypertension'], 
        tasks: ['Monitor blood pressure daily', 'Adjust antihypertensive medication if needed'] 
      }),
      current_block: 'Cardiology' // Added current_block
    },
    { 
      id: 2,
      first_name: 'Sarah', 
      last_name: 'Miller', 
      date_of_birth: '1990-06-22', 
      medical_history: JSON.stringify({ allergies: ['penicillin'], past_surgeries: ['knee surgery'] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Post-MI care'], 
        tasks: ['Monitor troponin levels', 'Schedule follow-up echocardiogram'] 
      }),
      current_block: 'ICU' // Added current_block
    },
    { 
      id: 3,
      first_name: 'David', 
      last_name: 'Taylor', 
      date_of_birth: '1978-11-05', 
      medical_history: JSON.stringify({ allergies: [], past_surgeries: ['gallbladder removal'] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Atrial fibrillation'], 
        tasks: ['Ensure anticoagulation therapy adherence', 'Monitor heart rate'] 
      }),
      current_block: 'Nephrology' // Added current_block
    },
    { 
      id: 4,
      first_name: 'Emily', 
      last_name: 'Wilson', 
      date_of_birth: '1992-02-28', 
      medical_history: JSON.stringify({ allergies: ['asthma'], past_surgeries: [] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Congestive heart failure'], 
        tasks: ['Monitor fluid intake/output', 'Adjust diuretics as needed'] 
      }),
      current_block: 'Respirology' // Added current_block
    },
    { 
      id: 5,
      first_name: 'Matthew', 
      last_name: 'Moore', 
      date_of_birth: '1983-09-15', 
      medical_history: JSON.stringify({ allergies: ['dust'], past_surgeries: [] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Stable angina'], 
        tasks: ['Ensure patient takes nitrates for chest pain', 'Schedule a stress test'] 
      }),
      current_block: 'Gastroenterology' // Added current_block
    },
    { 
      id: 6,
      first_name: 'Olivia', 
      last_name: 'Johnson', 
      date_of_birth: '1988-04-10', 
      medical_history: JSON.stringify({ allergies: ['shellfish'], past_surgeries: ['tonsillectomy'] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Pericarditis'], 
        tasks: ['Administer anti-inflammatory medication', 'Monitor for signs of cardiac tamponade'] 
      }),
      current_block: 'Cardiology' // Added current_block
    },
    { 
      id: 7,
      first_name: 'James', 
      last_name: 'Brown', 
      date_of_birth: '1975-07-25', 
      medical_history: JSON.stringify({ allergies: ['pollen'], past_surgeries: ['hernia repair'] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Mitral valve regurgitation'], 
        tasks: ['Monitor for worsening symptoms', 'Schedule a follow-up echocardiogram'] 
      }),
      current_block: 'ICU' // Added current_block
    },
    { 
      id: 8,
      first_name: 'Sophia', 
      last_name: 'Garcia', 
      date_of_birth: '1995-10-05', 
      medical_history: JSON.stringify({ allergies: [], past_surgeries: [] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Tachycardia'], 
        tasks: ['Assess potential triggers', 'Administer beta-blockers as needed'] 
      }),
      current_block: 'Gastroenterology' // Added current_block
    },
    { 
      id: 9,
      first_name: 'William', 
      last_name: 'Martinez', 
      date_of_birth: '1982-08-19', 
      medical_history: JSON.stringify({ allergies: ['nuts'], past_surgeries: ['hip replacement'] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Post-stent placement'], 
        tasks: ['Monitor for signs of restenosis', 'Ensure dual antiplatelet therapy adherence'] 
      }),
      current_block: 'Nephrology' // Added current_block
    },
    { 
      id: 10,
      first_name: 'Isabella', 
      last_name: 'Lee', 
      date_of_birth: '1991-12-03', 
      medical_history: JSON.stringify({ allergies: ['latex'], past_surgeries: ['c-section'] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Bradycardia'], 
        tasks: ['Evaluate for potential pacemaker', 'Monitor for syncope'] 
      }),
      current_block: 'Respirology' // Added current_block
    }
  ]);
};
