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
      current_block: 'Cardiology'
    },
    { 
      id: 2,
      first_name: 'Olivia', 
      last_name: 'Johnson', 
      date_of_birth: '1988-04-10', 
      medical_history: JSON.stringify({ allergies: ['shellfish'], past_surgeries: ['tonsillectomy'] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Pericarditis'], 
        tasks: ['Administer anti-inflammatory medication', 'Monitor for signs of cardiac tamponade'] 
      }),
      current_block: 'Cardiology'
    },
    { 
      id: 3,
      first_name: 'Ethan', 
      last_name: 'Williams', 
      date_of_birth: '1979-11-14', 
      medical_history: JSON.stringify({ allergies: ['latex'], past_surgeries: [] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Heart failure'], 
        tasks: ['Monitor fluid balance', 'Adjust diuretics as needed'] 
      }),
      current_block: 'Cardiology'
    },
    { 
      id: 4,
      first_name: 'Sophie', 
      last_name: 'Taylor', 
      date_of_birth: '1993-06-30', 
      medical_history: JSON.stringify({ allergies: ['aspirin'], past_surgeries: [] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Angina'], 
        tasks: ['Administer nitroglycerin as needed', 'Schedule follow-up echocardiogram'] 
      }),
      current_block: 'Cardiology'
    },
    { 
      id: 5,
      first_name: 'Sarah', 
      last_name: 'Miller', 
      date_of_birth: '1990-06-22', 
      medical_history: JSON.stringify({ allergies: ['penicillin'], past_surgeries: ['knee surgery'] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Post-MI care'], 
        tasks: ['Monitor troponin levels', 'Schedule follow-up echocardiogram'] 
      }),
      current_block: 'ICU'
    },
    { 
      id: 6,
      first_name: 'James', 
      last_name: 'Brown', 
      date_of_birth: '1975-07-25', 
      medical_history: JSON.stringify({ allergies: ['pollen'], past_surgeries: ['hernia repair'] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Mitral valve regurgitation'], 
        tasks: ['Monitor for worsening symptoms', 'Schedule a follow-up echocardiogram'] 
      }),
      current_block: 'ICU'
    },
    { 
      id: 7,
      first_name: 'Lily', 
      last_name: 'Clark', 
      date_of_birth: '1982-01-13', 
      medical_history: JSON.stringify({ allergies: ['penicillin'], past_surgeries: [] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Acute respiratory distress syndrome'], 
        tasks: ['Monitor oxygen saturation levels', 'Administer corticosteroids as needed'] 
      }),
      current_block: 'ICU'
    },
    { 
      id: 8,
      first_name: 'Henry', 
      last_name: 'Moore', 
      date_of_birth: '1986-05-23', 
      medical_history: JSON.stringify({ allergies: [], past_surgeries: ['appendectomy'] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Sepsis'], 
        tasks: ['Monitor vital signs closely', 'Administer broad-spectrum antibiotics'] 
      }),
      current_block: 'ICU'
    },
    { 
      id: 9,
      first_name: 'David', 
      last_name: 'Taylor', 
      date_of_birth: '1978-11-05', 
      medical_history: JSON.stringify({ allergies: [], past_surgeries: ['gallbladder removal'] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Atrial fibrillation'], 
        tasks: ['Ensure anticoagulation therapy adherence', 'Monitor heart rate'] 
      }),
      current_block: 'Nephrology'
    },
    { 
      id: 10,
      first_name: 'William', 
      last_name: 'Martinez', 
      date_of_birth: '1982-08-19', 
      medical_history: JSON.stringify({ allergies: ['nuts'], past_surgeries: ['hip replacement'] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Post-stent placement'], 
        tasks: ['Monitor for signs of restenosis', 'Ensure dual antiplatelet therapy adherence'] 
      }),
      current_block: 'Nephrology'
    },
    { 
      id: 11,
      first_name: 'Lucas', 
      last_name: 'Hernandez', 
      date_of_birth: '1976-12-10', 
      medical_history: JSON.stringify({ allergies: ['aspirin'], past_surgeries: [] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Chronic kidney disease'], 
        tasks: ['Monitor renal function', 'Adjust medications accordingly'] 
      }),
      current_block: 'Nephrology'
    },
    { 
      id: 12,
      first_name: 'Ella', 
      last_name: 'Lopez', 
      date_of_birth: '1994-09-17', 
      medical_history: JSON.stringify({ allergies: [], past_surgeries: ['knee surgery'] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Dialysis'], 
        tasks: ['Monitor dialysis access site', 'Ensure proper fluid management'] 
      }),
      current_block: 'Nephrology'
    },
    { 
      id: 13,
      first_name: 'Emily', 
      last_name: 'Wilson', 
      date_of_birth: '1992-02-28', 
      medical_history: JSON.stringify({ allergies: ['asthma'], past_surgeries: [] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Congestive heart failure'], 
        tasks: ['Monitor fluid intake/output', 'Adjust diuretics as needed'] 
      }),
      current_block: 'Respirology'
    },
    { 
      id: 14,
      first_name: 'Isabella', 
      last_name: 'Lee', 
      date_of_birth: '1991-12-03', 
      medical_history: JSON.stringify({ allergies: ['latex'], past_surgeries: ['c-section'] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Bradycardia'], 
        tasks: ['Evaluate for potential pacemaker', 'Monitor for syncope'] 
      }),
      current_block: 'Respirology'
    },
    { 
      id: 15,
      first_name: 'Mason', 
      last_name: 'Taylor', 
      date_of_birth: '1983-07-06', 
      medical_history: JSON.stringify({ allergies: ['dust'], past_surgeries: [] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Sleep apnea'], 
        tasks: ['Monitor oxygen saturation levels during sleep', 'Ensure CPAP machine compliance'] 
      }),
      current_block: 'Respirology'
    },
    { 
      id: 16,
      first_name: 'Sophia', 
      last_name: 'Garcia', 
      date_of_birth: '1995-10-05', 
      medical_history: JSON.stringify({ allergies: [], past_surgeries: [] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Tachycardia'], 
        tasks: ['Assess potential triggers', 'Administer beta-blockers as needed'] 
      }),
      current_block: 'Gastroenterology'
    },
    { 
      id: 17,
      first_name: 'Sophia', 
      last_name: 'Johnson', 
      date_of_birth: '1987-08-15', 
      medical_history: JSON.stringify({ allergies: ['peanuts'], past_surgeries: [] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Gastritis'], 
        tasks: ['Administer proton pump inhibitors', 'Monitor for bleeding'] 
      }),
      current_block: 'Gastroenterology'
    },
    { 
      id: 18,
      first_name: 'Aiden', 
      last_name: 'Davis', 
      date_of_birth: '1989-02-19', 
      medical_history: JSON.stringify({ allergies: ['gluten'], past_surgeries: [] }),
      handover_note: JSON.stringify({ 
        active_issues: ['Peptic ulcer disease'], 
        tasks: ['Monitor for pain', 'Ensure appropriate diet restrictions'] 
      }),
      current_block: 'Gastroenterology'
    }
  ]);
};

