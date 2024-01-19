const questions = [
    { question: "What is the chemical element for the symbol H", 
    answers: [
        { text: "Hydrogen", correct: true },
        { text: "Helium", correct: false },
        { text: "Oxygen", correct: false },
        { text: "Carbon", correct: false },
    ]},
    { question: "What is the chemical element for the symbol He", 
    answers: [
        { text: "Helium", correct: true },
        { text: "Hydrogen", correct: false },
        { text: "Oxygen", correct: false },
        { text: "Carbon", correct: false },
    ]},
    {
        question: "What is the chemical element for the symbol Li",
        answers: [
          { text: "Lithium", correct: true },
          { text: "Beryllium", correct: false },
          { text: "Sodium", correct: false },
          { text: "Potassium", correct: false },
        ]},
      {
        question: "What is the chemical element for the symbol Be",
        answers: [
          { text: "Beryllium", correct: true },
          { text: "Lithium", correct: false },
          { text: "Magnesium", correct: false },
          { text: "Aluminum", correct: false },
        ]},
      {
        question: "What is the chemical element for the symbol B",
        answers: [
          { text: "Boron", correct: true },
          { text: "Carbon", correct: false },
          { text: "Nitrogen", correct: false },
          { text: "Oxygen", correct: false },
        ]},
      {
        question: "What is the chemical element for the symbol C",
        answers: [
          { text: "Carbon", correct: true },
          { text: "Nitrogen", correct: false },
          { text: "Oxygen", correct: false },
          { text: "Fluorine", correct: false },
        ]},
      {
        question: "What is the chemical element for the symbol N",
        answers: [
          { text: "Nitrogen", correct: true },
          { text: "Carbon", correct: false },
          { text: "Oxygen", correct: false },
          { text: "Fluorine", correct: false },
        ]},
      {
        question: "What is the chemical element for the symbol O",
        answers: [
          { text: "Oxygen", correct: true },
          { text: "Carbon", correct: false },
          { text: "Nitrogen", correct: false },
          { text: "Fluorine", correct: false },
        ]},
      {
        question: "What is the chemical element for the symbol F",
        answers: [
          { text: "Fluorine", correct: true },
          { text: "Oxygen", correct: false },
          { text: "Nitrogen", correct: false },
          { text: "Neon", correct: false },
        ]},
      {
        question: "What is the chemical element for the symbol Ne",
        answers: [
          { text: "Neon", correct: true },
          { text: "Argon", correct: false },
          { text: "Krypton", correct: false },
          { text: "Xenon", correct: false },
        ]},
      {
        question: "What is the chemical element for the symbol Na",
        answers: [
          { text: "Sodium", correct: true },
          { text: "Potassium", correct: false },
          { text: "Lithium", correct: false },
          { text: "Beryllium", correct: false },
        ]},
      {
        question: "What is the chemical element for the symbol Mg",
        answers: [
          { text: "Magnesium", correct: true },
          { text: "Calcium", correct: false },
          { text: "Aluminum", correct: false },
          { text: "Sodium", correct: false },
        ]},
      {
        question: "What is the chemical element for the symbol Al",
        answers: [
          { text: "Aluminum", correct: true },
          { text: "Silicon", correct: false },
          { text: "Magnesium", correct: false },
          { text: "Iron", correct: false },
        ]},
      {
        question: "What is the chemical element for the symbol Si",
        answers: [
          { text: "Silicon", correct: true },
          { text: "Aluminum", correct: false },
          { text: "Carbon", correct: false },
          { text: "Oxygen", correct: false },
        ]},
      {
        question: "What is the chemical element for the symbol P",
        answers: [
          { text: "Phosphorus", correct: true },
          { text: "Sulfur", correct: false },
          { text: "Silicon", correct: false },
          { text: "Chlorine", correct: false },
        ]},
      {
        question: "What is the chemical element for the symbol S",
        answers: [
          { text: "Sulfur", correct: true },
          { text: "Phosphorus", correct: false },
          { text: "Chlorine", correct: false },
          { text: "Silicon", correct: false },
        ]},
    {
            question: "What is the chemical element for the symbol Cl",
            answers: [
              { text: "Chlorine", correct: true },
              { text: "Fluorine", correct: false },
              { text: "Bromine", correct: false },
              { text: "Iodine", correct: false },
            ]},
        {
            question: "What is the chemical element for the symbol K",
            answers: [
              { text: "Potassium", correct: true },
              { text: "Sodium", correct: false },
              { text: "Calcium", correct: false },
              { text: "Magnesium", correct: false },
            ]},
        {
            question: "What is the chemical element for the symbol Ca",
            answers: [
              { text: "Calcium", correct: true },
              { text: "Magnesium", correct: false },
              { text: "Sodium", correct: false },
              { text: "Potassium", correct: false },
            ]},
        {
            question: "What is the chemical element for the symbol Sc",
            answers: [
              { text: "Scandium", correct: true },
              { text: "Titanium", correct: false },
              { text: "Vanadium", correct: false },
              { text: "Chromium", correct: false },
            ]},
        {
            question: "What is the chemical element for the symbol Ti",
            answers: [
              { text: "Titanium", correct: true },
              { text: "Scandium", correct: false },
              { text: "Vanadium", correct: false },
              { text: "Chromium", correct: false },
            ]},
        {
            question: "What is the chemical element for the symbol V",
            answers: [
              { text: "Vanadium", correct: true },
              { text: "Chromium", correct: false },
              { text: "Manganese", correct: false },
              { text: "Iron", correct: false },
            ]},
        {
            question: "What is the chemical element for the symbol Cr",
            answers: [
              { text: "Chromium", correct: true },
              { text: "Vanadium", correct: false },
              { text: "Manganese", correct: false },
              { text: "Iron", correct: false },
            ]},
        {
            question: "What is the chemical element for the symbol Mn",
            answers: [
              { text: "Manganese", correct: true },
              { text: "Iron", correct: false },
              { text: "Chromium", correct: false },
              { text: "Vanadium", correct: false },
            ]},
        {
            question: "What is the chemical element for the symbol Fe",
            answers: [
              { text: "Iron", correct: true },
              { text: "Manganese", correct: false },
              { text: "Chromium", correct: false },
              { text: "Nickel", correct: false },
            ]},
        {
            question: "What is the chemical element for the symbol Ni",
            answers: [
              { text: "Nickel", correct: true },
              { text: "Iron", correct: false },
              { text: "Cobalt", correct: false },
              { text: "Copper", correct: false },
            ]},
        {
            question: "What is the chemical element for the symbol Ar",
            answers: [
                  { text: "Argon", correct: true },
                  { text: "Neon", correct: false },
                  { text: "Krypton", correct: false },
                  { text: "Xenon", correct: false },
            ]},
            {
                question: "What is the chemical element for the symbol Co",
                answers: [
                  { text: "Cobalt", correct: true },
                  { text: "Nickel", correct: false },
                  { text: "Iron", correct: false },
                  { text: "Copper", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Cu",
                answers: [
                  { text: "Copper", correct: true },
                  { text: "Gold", correct: false },
                  { text: "Silver", correct: false },
                  { text: "Zinc", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Zn",
                answers: [
                  { text: "Zinc", correct: true },
                  { text: "Copper", correct: false },
                  { text: "Iron", correct: false },
                  { text: "Nickel", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Ga",
                answers: [
                  { text: "Gallium", correct: true },
                  { text: "Germanium", correct: false },
                  { text: "Aluminum", correct: false },
                  { text: "Indium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Ge",
                answers: [
                  { text: "Germanium", correct: true },
                  { text: "Gallium", correct: false },
                  { text: "Silicon", correct: false },
                  { text: "Tin", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol As",
                answers: [
                  { text: "Arsenic", correct: true },
                  { text: "Antimony", correct: false },
                  { text: "Phosphorus", correct: false },
                  { text: "Sulfur", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Se",
                answers: [
                  { text: "Selenium", correct: true },
                  { text: "Sulfur", correct: false },
                  { text: "Tellurium", correct: false },
                  { text: "Fluorine", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Br",
                answers: [
                  { text: "Bromine", correct: true },
                  { text: "Chlorine", correct: false },
                  { text: "Iodine", correct: false },
                  { text: "Fluorine", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Kr",
                answers: [
                  { text: "Krypton", correct: true },
                  { text: "Xenon", correct: false },
                  { text: "Argon", correct: false },
                  { text: "Neon", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Rb",
                answers: [
                  { text: "Rubidium", correct: true },
                  { text: "Radium", correct: false },
                  { text: "Radon", correct: false },
                  { text: "Rhodium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Sr",
                answers: [
                  { text: "Strontium", correct: true },
                  { text: "Samarium", correct: false },
                  { text: "Silicon", correct: false },
                  { text: "Sulfur", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Y",
                answers: [
                  { text: "Yttrium", correct: true },
                  { text: "Ytterbium", correct: false },
                  { text: "Magnesium", correct: false },
                  { text: "Zirconium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Zr",
                answers: [
                  { text: "Zirconium", correct: true },
                  { text: "Zinc", correct: false },
                  { text: "Zircon", correct: false },
                  { text: "Zebraium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Nb",
                answers: [
                  { text: "Niobium", correct: true },
                  { text: "Nobelium", correct: false },
                  { text: "Natrium", correct: false },
                  { text: "Neptunium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Mo",
                answers: [
                  { text: "Molybdenum", correct: true },
                  { text: "Manganese", correct: false },
                  { text: "Moscovium", correct: false },
                  { text: "Magnesium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Tc",
                answers: [
                  { text: "Technetium", correct: true },
                  { text: "Titanium", correct: false },
                  { text: "Tellurium", correct: false },
                  { text: "Terbium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Ru",
                answers: [
                  { text: "Ruthenium", correct: true },
                  { text: "Rhodium", correct: false },
                  { text: "Rubidium", correct: false },
                  { text: "Radium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Rh",
                answers: [
                  { text: "Rhodium", correct: true },
                  { text: "Ruthenium", correct: false },
                  { text: "Radon", correct: false },
                  { text: "Rubidium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Pd",
                answers: [
                  { text: "Palladium", correct: true },
                  { text: "Platinum", correct: false },
                  { text: "Potassium", correct: false },
                  { text: "Phosphorus", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Ag",
                answers: [
                  { text: "Silver", correct: true },
                  { text: "Gold", correct: false },
                  { text: "Aluminum", correct: false },
                  { text: "Argon", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Cd",
                answers: [
                  { text: "Cadmium", correct: true },
                  { text: "Cesium", correct: false },
                  { text: "Calcium", correct: false },
                  { text: "Carbon", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol In",
                answers: [
                  { text: "Indium", correct: true },
                  { text: "Iodine", correct: false },
                  { text: "Iron", correct: false },
                  { text: "Iridium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Sn",
                answers: [
                  { text: "Tin", correct: true },
                  { text: "Titanium", correct: false },
                  { text: "Tellurium", correct: false },
                  { text: "Thallium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Sb",
                answers: [
                  { text: "Antimony", correct: true },
                  { text: "Arsenic", correct: false },
                  { text: "Aluminum", correct: false },
                  { text: "Actinium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Te",
                answers: [
                  { text: "Tellurium", correct: true },
                  { text: "Tin", correct: false },
                  { text: "Titanium", correct: false },
                  { text: "Thallium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol I",
                answers: [
                  { text: "Iodine", correct: true },
                  { text: "Indium", correct: false },
                  { text: "Iron", correct: false },
                  { text: "Iridium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Xe",
                answers: [
                  { text: "Xenon", correct: true },
                  { text: "X-ray", correct: false },
                  { text: "Xylene", correct: false },
                  { text: "Xerium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Cs",
                answers: [
                  { text: "Cesium", correct: true },
                  { text: "Calcium", correct: false },
                  { text: "Carbon", correct: false },
                  { text: "Chlorine", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Ba",
                answers: [
                  { text: "Barium", correct: true },
                  { text: "Boron", correct: false },
                  { text: "Bismuth", correct: false },
                  { text: "Beryllium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol La",
                answers: [
                  { text: "Lanthanum", correct: true },
                  { text: "Lithium", correct: false },
                  { text: "Lead", correct: false },
                  { text: "Lutetium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Ce",
                answers: [
                  { text: "Cerium", correct: true },
                  { text: "Cesium", correct: false },
                  { text: "Chlorine", correct: false },
                  { text: "Calcium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Pr",
                answers: [
                  { text: "Praseodymium", correct: true },
                  { text: "Promethium", correct: false },
                  { text: "Platinum", correct: false },
                  { text: "Phosphorus", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Nd",
                answers: [
                  { text: "Neodymium", correct: true },
                  { text: "Niobium", correct: false },
                  { text: "Nitrogen", correct: false },
                  { text: "Nobelium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Pm",
                answers: [
                  { text: "Promethium", correct: true },
                  { text: "Platinum", correct: false },
                  { text: "Phosphorus", correct: false },
                  { text: "Polonium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Sm",
                answers: [
                  { text: "Samarium", correct: true },
                  { text: "Strontium", correct: false },
                  { text: "Silicon", correct: false },
                  { text: "Sulfur", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Eu",
                answers: [
                  { text: "Europium", correct: true },
                  { text: "Einsteinium", correct: false },
                  { text: "Erbium", correct: false },
                  { text: "Euthanidium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Gd",
                answers: [
                  { text: "Gadolinium", correct: true },
                  { text: "Germanium", correct: false },
                  { text: "Gold", correct: false },
                  { text: "Gallium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Tb",
                answers: [
                  { text: "Terbium", correct: true },
                  { text: "Thulium", correct: false },
                  { text: "Titanium", correct: false },
                  { text: "Tellurium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Dy",
                answers: [
                  { text: "Dysprosium", correct: true },
                  { text: "Darmstadtium", correct: false },
                  { text: "Dubnium", correct: false },
                  { text: "Dilithium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Ho",
                answers: [
                  { text: "Holmium", correct: true },
                  { text: "Hassium", correct: false },
                  { text: "Hafnium", correct: false },
                  { text: "Hahnium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Er",
                answers: [
                  { text: "Erbium", correct: true },
                  { text: "Europium", correct: false },
                  { text: "Einsteinium", correct: false },
                  { text: "Euthanidium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Tm",
                answers: [
                  { text: "Thulium", correct: true },
                  { text: "Terbium", correct: false },
                  { text: "Titanium", correct: false },
                  { text: "Tellurium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Yb",
                answers: [
                  { text: "Ytterbium", correct: true },
                  { text: "Yttrium", correct: false },
                  { text: "Tellurium", correct: false },
                  { text: "Hahnium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Lu",
                answers: [
                  { text: "Lutetium", correct: true },
                  { text: "Lithium", correct: false },
                  { text: "Lead", correct: false },
                  { text: "Lanthanum", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Hf",
                answers: [
                  { text: "Hafnium", correct: true },
                  { text: "Hassium", correct: false },
                  { text: "Holmium", correct: false },
                  { text: "Hafnium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Ta",
                answers: [
                  { text: "Tantalum", correct: true },
                  { text: "Thallium", correct: false },
                  { text: "Titanium", correct: false },
                  { text: "Tellurium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol W",
                answers: [
                  { text: "Tungsten", correct: true },
                  { text: "Thorium", correct: false },
                  { text: "Titanium", correct: false },
                  { text: "Tellurium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Re",
                answers: [
                  { text: "Rhenium", correct: true },
                  { text: "Rhodium", correct: false },
                  { text: "Radon", correct: false },
                  { text: "Rubidium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Os",
                answers: [
                  { text: "Osmium", correct: true },
                  { text: "Oxygen", correct: false },
                  { text: "Oganesson", correct: false },
                  { text: "Oreganum", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Ir",
                answers: [
                  { text: "Iridium", correct: true },
                  { text: "Iron", correct: false },
                  { text: "Iodine", correct: false },
                  { text: "Isoniazid", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Pt",
                answers: [
                  { text: "Platinum", correct: true },
                  { text: "Palladium", correct: false },
                  { text: "Potassium", correct: false },
                  { text: "Phosphorus", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Au",
                answers: [
                  { text: "Gold", correct: true },
                  { text: "Gallium", correct: false },
                  { text: "Germanium", correct: false },
                  { text: "Gadolinium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Hg",
                answers: [
                  { text: "Mercury", correct: true },
                  { text: "Manganese", correct: false },
                  { text: "Molybdenum", correct: false },
                  { text: "Magnesium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Tl",
                answers: [
                  { text: "Thallium", correct: true },
                  { text: "Tantalum", correct: false },
                  { text: "Titanium", correct: false },
                  { text: "Tellurium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Pb",
                answers: [
                  { text: "Lead", correct: true },
                  { text: "Lithium", correct: false },
                  { text: "Lanthanum", correct: false },
                  { text: "Lutetium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Bi",
                answers: [
                  { text: "Bismuth", correct: true },
                  { text: "Barium", correct: false },
                  { text: "Boron", correct: false },
                  { text: "Beryllium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Po",
                answers: [
                  { text: "Polonium", correct: true },
                  { text: "Plutonium", correct: false },
                  { text: "Phosphorus", correct: false },
                  { text: "Palladium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol At",
                answers: [
                  { text: "Astatine", correct: true },
                  { text: "Actinium", correct: false },
                  { text: "Aluminum", correct: false },
                  { text: "Argon", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Rn",
                answers: [
                  { text: "Radon", correct: true },
                  { text: "Radium", correct: false },
                  { text: "Rhodium", correct: false },
                  { text: "Rubidium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Fr",
                answers: [
                  { text: "Francium", correct: true },
                  { text: "Fermium", correct: false },
                  { text: "Fluorine", correct: false },
                  { text: "Flerovium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Ra",
                answers: [
                  { text: "Radium", correct: true },
                  { text: "Radon", correct: false },
                  { text: "Rhenium", correct: false },
                  { text: "Rhodium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Ac",
                answers: [
                  { text: "Actinium", correct: true },
                  { text: "Aluminum", correct: false },
                  { text: "Antimony", correct: false },
                  { text: "Argon", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Th",
                answers: [
                  { text: "Thorium", correct: true },
                  { text: "Thulium", correct: false },
                  { text: "Tantalum", correct: false },
                  { text: "Tellurium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Pa",
                answers: [
                  { text: "Protactinium", correct: true },
                  { text: "Palladium", correct: false },
                  { text: "Plutonium", correct: false },
                  { text: "Polonium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol U",
                answers: [
                  { text: "Uranium", correct: true },
                  { text: "Ununbium", correct: false },
                  { text: "Ununtrium", correct: false },
                  { text: "Ununoctium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Np",
                answers: [
                  { text: "Neptunium", correct: true },
                  { text: "Nobelium", correct: false },
                  { text: "Nickel", correct: false },
                  { text: "Niobium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Pu",
                answers: [
                  { text: "Plutonium", correct: true },
                  { text: "Palladium", correct: false },
                  { text: "Potassium", correct: false },
                  { text: "Phosphorus", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Am",
                answers: [
                  { text: "Americium", correct: true },
                  { text: "Actinium", correct: false },
                  { text: "Aluminum", correct: false },
                  { text: "Argon", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Cm",
                answers: [
                  { text: "Curium", correct: true },
                  { text: "Cadmium", correct: false },
                  { text: "Calcium", correct: false },
                  { text: "Cobalt", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Bk",
                answers: [
                  { text: "Berkelium", correct: true },
                  { text: "Bohrium", correct: false },
                  { text: "Bromine", correct: false },
                  { text: "Barium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Cf",
                answers: [
                  { text: "Californium", correct: true },
                  { text: "Curium", correct: false },
                  { text: "Chlorine", correct: false },
                  { text: "Cobalt", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Es",
                answers: [
                  { text: "Einsteinium", correct: true },
                  { text: "Erbium", correct: false },
                  { text: "Europium", correct: false },
                  { text: "Euthanidium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Fm",
                answers: [
                  { text: "Fermium", correct: true },
                  { text: "Francium", correct: false },
                  { text: "Fluorine", correct: false },
                  { text: "Flerovium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Md",
                answers: [
                  { text: "Mendelevium", correct: true },
                  { text: "Meitnerium", correct: false },
                  { text: "Manganese", correct: false },
                  { text: "Magnesium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol No",
                answers: [
                  { text: "Nobelium", correct: true },
                  { text: "Neon", correct: false },
                  { text: "Nitrogen", correct: false },
                  { text: "Neptunium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Lr",
                answers: [
                  { text: "Lawrencium", correct: true },
                  { text: "Lanthanum", correct: false },
                  { text: "Lutetium", correct: false },
                  { text: "Lithium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Rf",
                answers: [
                  { text: "Rutherfordium", correct: true },
                  { text: "Radon", correct: false },
                  { text: "Roentgenium", correct: false },
                  { text: "Rhenium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Db",
                answers: [
                  { text: "Dubnium", correct: true },
                  { text: "Dysprosium", correct: false },
                  { text: "Darmstadtium", correct: false },
                  { text: "Dacium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Sg",
                answers: [
                  { text: "Seaborgium", correct: true },
                  { text: "Strontium", correct: false },
                  { text: "Scandium", correct: false },
                  { text: "Sulfur", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Bh",
                answers: [
                  { text: "Bohrium", correct: true },
                  { text: "Berkelium", correct: false },
                  { text: "Bismuth", correct: false },
                  { text: "Barium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Hs",
                answers: [
                  { text: "Hassium", correct: true },
                  { text: "Holmium", correct: false },
                  { text: "Hafnium", correct: false },
                  { text: "Hassium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Mt",
                answers: [
                  { text: "Meitnerium", correct: true },
                  { text: "Mendelevium", correct: false },
                  { text: "Manganese", correct: false },
                  { text: "Molybdenum", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Ds",
                answers: [
                  { text: "Darmstadtium", correct: true },
                  { text: "Dubnium", correct: false },
                  { text: "Dysprosium", correct: false },
                  { text: "Dacium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Rg",
                answers: [
                  { text: "Roentgenium", correct: true },
                  { text: "Rutherfordium", correct: false },
                  { text: "Rhenium", correct: false },
                  { text: "Radon", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Cn",
                answers: [
                  { text: "Copernicium", correct: true },
                  { text: "Curium", correct: false },
                  { text: "Calcium", correct: false },
                  { text: "Cobalt", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Nh",
                answers: [
                  { text: "Nihonium", correct: true },
                  { text: "Neptunium", correct: false },
                  { text: "Nobelium", correct: false },
                  { text: "Niobium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Fl",
                answers: [
                  { text: "Flerovium", correct: true },
                  { text: "Francium", correct: false },
                  { text: "Fluorine", correct: false },
                  { text: "Fermium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Mc",
                answers: [
                  { text: "Moscovium", correct: true },
                  { text: "Manganese", correct: false },
                  { text: "Meitnerium", correct: false },
                  { text: "Molybdenum", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Lv",
                answers: [
                  { text: "Livermorium", correct: true },
                  { text: "Lithium", correct: false },
                  { text: "Lead", correct: false },
                  { text: "Lutetium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Ts",
                answers: [
                  { text: "Tennessine", correct: true },
                  { text: "Titanium", correct: false },
                  { text: "Thulium", correct: false },
                  { text: "Tellurium", correct: false },
                ],
              },
              {
                question: "What is the chemical element for the symbol Og",
                answers: [
                  { text: "Oganesson", correct: true },
                  { text: "Osmium", correct: false },
                  { text: "Oxygen", correct: false },
                  { text: "Oregano", correct: false },
                ],
              },
            ];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo+ ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";        
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}

function handleNextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextbutton();
    }else{
        startQuiz();
    }
});


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(questions);


function shuffleAnswers(question) {
    for (let i = question.answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [question.answers[i], question.answers[j]] = [question.answers[j], question.answers[i]];
    }
}

// Shuffle the answers for each question in the 'questions' array
questions.forEach(shuffleAnswers);

startQuiz();

        // Function to navigate to the homepage
        function goToHomepage() {
          // Replace 'index.html' with the actual URL of your homepage
          window.location.href = '/Hub.html';
      }