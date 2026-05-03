function arr(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

function first(value) {
  return Array.isArray(value) ? value[0] ?? null : value ?? null;
}

function normalizeLabel(label) {
  if (!label) return null;

  return {
    meta: {
      id: label.id ?? null,
      setId: label.set_id ?? null,
      effectiveTime: label.effective_time ?? null
    },
    drug: {
      brandName: first(label.openfda?.brand_name),
      genericName: first(label.openfda?.generic_name),
      substanceNames: arr(label.openfda?.substance_name)
    },
    sections: {
      drugInteractions: arr(label.drug_interactions),
      labInteractions: arr(label.drug_and_or_laboratory_test_interactions),
      contraindications: arr(label.contraindications),
      warnings: arr(label.warnings),
      warningsAndCautions: arr(label.warnings_and_cautions),
      boxedWarning: arr(label.boxed_warning),
      adverseReactions: arr(label.adverse_reactions),
      patientInformation: arr(label.information_for_patients),
      patientCounselingInformation: arr(label.patient_medication_information),
      doNotUse: arr(label.do_not_use),
      askDoctor: arr(label.ask_doctor),
      askDoctorOrPharmacist: arr(label.ask_doctor_or_pharmacist),
      stopUse: arr(label.stop_use),
      whenUsing: arr(label.when_using)
    }
  };
}

module.exports = { normalizeLabel };
