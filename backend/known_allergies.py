KNOWN_ALLERGIES = [
    # Food allergies
    {
        "id": "milk",
        "display": "Milk",
        "category": "food",
        "fhir_text": "Milk allergy"
    },
    {
        "id": "egg",
        "display": "Egg",
        "category": "food",
        "fhir_text": "Egg allergy"
    },
    {
        "id": "fish",
        "display": "Fish",
        "category": "food",
        "fhir_text": "Fish allergy"
    },
    {
        "id": "shellfish",
        "display": "Crustacean shellfish",
        "category": "food",
        "fhir_text": "Crustacean shellfish allergy"
    },
    {
        "id": "tree_nuts",
        "display": "Tree nuts",
        "category": "food",
        "fhir_text": "Tree nut allergy"
    },
    {
        "id": "peanuts",
        "display": "Peanuts",
        "category": "food",
        "fhir_text": "Peanut allergy"
    },
    {
        "id": "wheat",
        "display": "Wheat",
        "category": "food",
        "fhir_text": "Wheat allergy"
    },
    {
        "id": "soy",
        "display": "Soybeans",
        "category": "food",
        "fhir_text": "Soy allergy"
    },
    {
        "id": "sesame",
        "display": "Sesame",
        "category": "food",
        "fhir_text": "Sesame allergy"
    },

    # Drug allergies
    {
        "id": "penicillin",
        "display": "Penicillin",
        "category": "drug",
        "fhir_text": "Penicillin allergy"
    },
    {
        "id": "amoxicillin",
        "display": "Amoxicillin",
        "category": "drug",
        "fhir_text": "Amoxicillin allergy"
    },
    {
        "id": "cephalosporins",
        "display": "Cephalosporins",
        "category": "drug",
        "fhir_text": "Cephalosporin allergy"
    },
    {
        "id": "sulfonamides",
        "display": "Sulfonamide antibiotics",
        "category": "drug",
        "fhir_text": "Sulfonamide antibiotic allergy"
    },
    {
        "id": "aspirin",
        "display": "Aspirin",
        "category": "drug",
        "fhir_text": "Aspirin allergy"
    },
    {
        "id": "ibuprofen",
        "display": "Ibuprofen",
        "category": "drug",
        "fhir_text": "Ibuprofen allergy"
    },
    {
        "id": "naproxen",
        "display": "Naproxen",
        "category": "drug",
        "fhir_text": "Naproxen allergy"
    },
    {
        "id": "acetaminophen",
        "display": "Acetaminophen",
        "category": "drug",
        "fhir_text": "Acetaminophen allergy"
    },
    {
        "id": "morphine",
        "display": "Morphine",
        "category": "drug",
        "fhir_text": "Morphine allergy"
    },
    {
        "id": "codeine",
        "display": "Codeine",
        "category": "drug",
        "fhir_text": "Codeine allergy"
    },
    {
        "id": "oxycodone",
        "display": "Oxycodone",
        "category": "drug",
        "fhir_text": "Oxycodone allergy"
    },
    {
        "id": "tramadol",
        "display": "Tramadol",
        "category": "drug",
        "fhir_text": "Tramadol allergy"
    },
    {
        "id": "lidocaine",
        "display": "Lidocaine",
        "category": "drug",
        "fhir_text": "Lidocaine allergy"
    },
    {
        "id": "insulin",
        "display": "Insulin",
        "category": "drug",
        "fhir_text": "Insulin allergy"
    },
    {
        "id": "metformin",
        "display": "Metformin",
        "category": "drug",
        "fhir_text": "Metformin allergy"
    },
    {
        "id": "lisinopril",
        "display": "Lisinopril",
        "category": "drug",
        "fhir_text": "Lisinopril allergy"
    },
    {
        "id": "losartan",
        "display": "Losartan",
        "category": "drug",
        "fhir_text": "Losartan allergy"
    },
    {
        "id": "omeprazole",
        "display": "Omeprazole",
        "category": "drug",
        "fhir_text": "Omeprazole allergy"
    },
    {
        "id": "albuterol",
        "display": "Albuterol",
        "category": "drug",
        "fhir_text": "Albuterol allergy"
    },
]

MEDICATION_ALIASES = {
    # Pain / fever
    "tylenol": ["acetaminophen"],
    "panadol": ["acetaminophen"],
    "acetaminophen": ["tylenol", "panadol"],

    "advil": ["ibuprofen"],
    "motrin": ["ibuprofen"],
    "ibuprofen": ["advil", "motrin"],

    "aleve": ["naproxen"],
    "naprosyn": ["naproxen"],
    "naproxen": ["aleve", "naprosyn"],

    "bayer": ["aspirin"],
    "ecotrin": ["aspirin"],
    "aspirin": ["bayer", "ecotrin"],

    # Allergy
    "benadryl": ["diphenhydramine"],
    "diphenhydramine": ["benadryl"],

    "zyrtec": ["cetirizine"],
    "cetirizine": ["zyrtec"],

    "claritin": ["loratadine"],
    "loratadine": ["claritin"],

    # Acid reflux
    "pepcid": ["famotidine"],

    # Blood pressure
    "coumadin": ["warfarin"],
    "jantoven": ["warfarin"],
    "warfarin": ["coumadin", "jantoven"],
}