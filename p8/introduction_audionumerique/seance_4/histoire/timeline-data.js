// timeline-data.js — Focus : synthèse additive, FM, AM (et ring-mod)
// Format attendu par la frise :
// { year, category, title, who?, details?, color?, modalHtml?, links?[] }

const C = {
    ADD: "#FF0000",      // Additive
    FM:  "#1565C0",      // FM / PM
    AM:  "#2E7D32",      // AM / Ring-mod
    TOOL:"#37474F",      // Instruments / produits / environnements
    WORK:"#EF6C00",      // Œuvres / démos
    RES: "#455A64"       // Recherche / théorie
  };
  
  window.TIMELINE_EVENTS = [
    // --- Précurseurs (contexte théorique) ---
    {
      year: 1822,
      category: "précurseurs",
      title: "Séries de Fourier (décomposition en sinusoïdes)",
      who: "Joseph Fourier",
      color: C.RES,
      links: [{ label: "Séries de Fourier (Wikipedia)", href: "https://fr.wikipedia.org/wiki/S%C3%A9rie_de_Fourier" }],
      modalHtml: `<iframe src="https://fr.wikipedia.org/wiki/S%C3%A9rie_de_Fourier"></iframe>`
    },
    {
      year: 1863,
      category: "précurseurs",
      title: "Synthèse additive par résonateurs (théorie du timbre)",
      who: "Hermann von Helmholtz",
      details: "Analyse/synthèse du timbre et lien harmoniques ↔ perception ; influence durable sur l’orgue / la synthèse.",
      color: C.RES,
      links: [{ label: "On the Sensations of Tone (Wikipedia)", href: "https://en.wikipedia.org/wiki/On_the_Sensations_of_Tone" }],
      modalHtml: `<iframe src="https://en.wikipedia.org/wiki/On_the_Sensations_of_Tone"></iframe>`
    },
  
    // --- Instruments électromécaniques/électroniques (additive “harmonique”) ---
    {
      year: 1897,
      category: "Instruments",
      title: "Telharmonium (orgue électromécanique)",
      who: "Thaddeus Cahill",
      details: "Génération de composantes harmoniques par roues phoniques ; ancêtre de l’additif ‘par harmoniques’ des orgues.",
      color: C.TOOL,
      links: [{ label: "Telharmonium", href: "https://fr.wikipedia.org/wiki/Telharmonium" }, {label: "Telharmonium & synthèse additive", href: "https://www.youtube.com/watch?v=9zpVBDn6kiE"}, {label: 'Telharmonium documentary', href:'https://www.youtube.com/watch?v=TunkjJvbrHs'}],
      modalHtml: `<iframe src="https://www.youtube-nocookie.com/embed/TunkjJvbrHs" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>`
    },
    {
      year: 1935,
      category: "Instruments",
      title: "Hammond Organ (tonewheels, tirants harmoniques)",
      details: "Contrôle de partiels via drawbars : forme d’additif (harmoniques fixes + mélange). Styles musicaux typiques : Blues, Jazz, Hard Rock, et bien d'autres",
      color: C.TOOL,
      links: [{ label: "Hammond organ", href: "https://en.wikipedia.org/wiki/Hammond_organ" }],
      modalHtml: `<iframe src="https://www.youtube-nocookie.com/embed/UtM0gNYlJ74" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>`
    },
    {
      year: 1962,
      category: "Instruments",
      title: "Vox Continental",
      details: "Contrôle de partiels via drawbars : forme d’additif (harmoniques fixes + mélange). Styles musicaux typiques: Rock, Funk",
      color: C.TOOL,
      links: [{ label: "Hammond organ", href: "https://en.wikipedia.org/wiki/Vox_Continental"}],
      modalHtml: `<iframe src="https://www.youtube-nocookie.com/embed/Wg-U-fiCzls" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>`
    },
    {
      year: 1967,
      category: "Instruments",
      title: "Farfisa FAST",
      details: "",
      color: C.TOOL,
      links: [{ label: "Farfisa Wikipedia", href: "https://en.wikipedia.org/wiki/Farfisa"}],
      modalHtml: `<iframe src="https://www.youtube-nocookie.com/embed/P78ogWplg7A" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>`
    },
  
    // --- AM / ring modulation : jalons musique électronique (souvent analogiques, mais concept clé) ---
    {
      year: 1901,
      category: "AM",
      title: "Premières transmissions radio transatlantiques (télégraphie)",
      who: "Guglielmo Marconi",
      details: "Télégraphie sans fil (CW) : pas encore de radiodiffusion AM voix/musique, mais jalon fondateur des systèmes RF qui mèneront à l’AM.",
      links: [{ label: "Marconi and transatlantic radio", href: "https://en.wikipedia.org/wiki/Guglielmo_Marconi" }]
    },
    {
      year: 1956,
      category: "AM",
      title: "Usage artistique du ring-mod (studios électroniques)",
      details: "Le ring modulation (multiplication de signaux) devient un procédé de timbre en musique électronique (avant le numérique).",
      color: C.AM
    },
    {
      year: 1960,
      category: "AM",
      title: "Ring-mod dans le répertoire électronique",
      who: "Karlheinz Stockhausen (ex. Kontakte, 1959–60)",
      details: "Exemple canonique d’usage du ring-mod comme transformation de timbre et d’énergie spectrale.",
      color: C.WORK,
      links: [{ label: "Kontakte (wiki)", href: "https://en.wikipedia.org/wiki/Kontakte" },
              {label : "Kontake (video)", href: "https://www.youtube.com/watch?v=nbdmzSeFy_Y"},
              {label : "Mixtur (wiki)", href: "https://en.wikipedia.org/wiki/Mixtur"},
              {label : "Mixtur (video)", href: "https://www.youtube.com/watch?v=0sAxyu2jOug"},
              {label : "Mantra (wiki)", href: "https://en.wikipedia.org/wiki/Mantra_(Stockhausen)"},
              {label : "Mantra (video)", href: "https://www.youtube.com/watch?v=_6EXW0WaA-c"}, 
      ],
      modalHtml: `<iframe src="https://www.youtube-nocookie.com/embed/_6EXW0WaA-c" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>
      <iframe src="https://www.youtube-nocookie.com/embed/EelvKqhu1M4" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>`
    },
  
    // --- 1960s : informatique musicale, additive numérique, FM découverte ---
    {
      year: 1952,
      category: "Additive",
      title: "Early additve compositions @WDR",
      who: "Werner Meyer-Eppler, Robert Beyer, Fritz Enkel and Herbert Eimert",
      details: "Premières compositions électro-acoustiques avec synthèse additive",
      color: C.RES,
      links: [{ label: "Studio for Electronic Music (WDR)", href: "https://en.wikipedia.org/wiki/Studio_for_Electronic_Music_(WDR)" }],
      modalHtml: `<iframe src="https://www.youtube-nocookie.com/embed/HTSed3Ybzhg" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>`,
    },
    {
      year: 1957,
      category: "Additive",
      title: "MUSIC I (début des langages de synthèse)",
      who: "Max Mathews (Bell Labs)",
      details: "Fondations de la synthèse numérique. Les approches addititives/oscillateurs y sont centrales.",
      color: C.RES,
      links: [{ label: "MUSIC-N", href: "https://en.wikipedia.org/wiki/MUSIC-N" }]
    },
    {
      year: 1963,
      category: "Additive",
      title: "Premières synthèses addititives contrôlées par ordinateur (oscillateurs + enveloppes)",
      who: "Bell Labs et autres labos",
      details: "Approches 'bank of oscillators’ : somme de sinusoïdes avec contrôle d’amplitude/fréquence dans le temps.",
      modalHtml: `<iframe src="https://www.youtube-nocookie.com/embed/uerNtYhgzSw" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>`,
      color: C.ADD
    },
    {
      year: 1967,
      category: "FM",
      title: "Découverte de la synthèse FM en audio",
      who: "John Chowning (Stanford CCRMA)",
      details: "Observation : une modulation de fréquence à taux audio produit des spectres riches (bandes latérales) contrôlables musicalement.",
      color: C.FM,
      links: [{ label: "FM synthesis", href: "https://en.wikipedia.org/wiki/Frequency_modulation_synthesis" }, 
              { label: "John Chowning explains the behavior of spectra in traditional harmony", href: "https://www.youtube.com/watch?v=67VG5iB9rWg"}
      ],
      
    },
    {
      year: 1967,
      category: "AM",
      title: "AM / ring-mod en numérique : multiplication d’échantillons",
      details: "En numérique, AM et ring-mod se résument à multiplier deux signaux (ou signal × oscillateur). Base de nombreux effets.",
      color: C.AM
    },
    {
      year: 1968,
      category: "Additive",
      title: "Risset — études sur timbre, partiels, et synthèse",
      who: "Jean‑Claude Risset (Bell Labs)",
      details: "Travaux pionniers sur la construction du timbre (incluant des méthodes proches de l’additif et de l’analyse/synthèse).",
      color: C.ADD,
      links: [{ label: "Jean-Claude Risset", href: "https://en.wikipedia.org/wiki/Jean-Claude_Risset" }],
      modalHtml: `<iframe src="https://www.youtube-nocookie.com/embed/u83PZ1NN34s" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>`,
    },
  
    // --- 1970s : FM industrialisée, additive / resynthèse progresse ---
    {
      year: 1973,
      category: "FM",
      title: "Brevet / formalisation FM (Stanford)",
      who: "John Chowning",
      details: "Cadre technique et contrôle (index de modulation, rapports de fréquences) ; base du transfert industriel.",
      color: C.FM
    },
    {
      year: 1974,
      category: "FM",
      title: "Licence Stanford ↔ Yamaha (FM)",
      details: "Début de la trajectoire vers des synthés FM commercialement viables.",
      color: C.FM
    },
    {
      year: 1975,
      category: "AM",
      title: "AM vs ring-mod clarifiés dans la pratique synthèse",
      details: "AM (avec offset) vs ring-mod (porteuse supprimée) : deux comportements spectraux, très utilisés en sound design.",
      color: C.AM,
      links: [{ label: "Ring modulation", href: "https://en.wikipedia.org/wiki/Ring_modulation" }]
    },
    {
      year: 1977,
      category: "FM",
      title: "Chowning — Stria",
      who: "CCRMA",
      details: "Œuvre repère associée à la synthèse FM.",
      color: C.WORK,
      links: [{ label: "Stria (Chowning)", href: "https://en.wikipedia.org/wiki/Stria_(composition)" }],
      modalHtml: `<iframe src="https://www.youtube-nocookie.com/embed/__O39TcJEd8" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>`,
    },
    
  
    // --- 1980s : FM grand public, additive spectrale, AM comme effet numérique ---
    {
      year: 1980,
      category: "FM",
      title: "Yamaha GS1 / GS2 (FM)",
      details: "Premiers synthés FM Yamaha (haut de gamme) avant la démocratisation.",
      color: C.TOOL,
      links: [{ label: "Yamaha GS1", href: "https://en.wikipedia.org/wiki/Yamaha_GS1" }]
    },

    {
      year: 1980,
      category: "Additive",
      title: "Premières oeuvres d'analyse / synthèse spectrale",
      details: "Premières oeuvres d'analyse / synthèse spectrale",
      color: C.WORK,
      links: [{ label: "Jonathan Harvey : Mortuos Plango", href: "https://www.youtube.com/watch?v=tUrzk_sCwso" },
              { label: "Tristan Murail : Desintegrations", href: "https://www.youtube.com/watch?v=4basuUUatf8" },
              { label: "Trevor Wishart : Arrivals", href: "https://www.youtube.com/watch?v=pyBiPUaT8J0" }
      ],
      modalHtml: `<iframe src="https://www.youtube-nocookie.com/embed/4basuUUatf8" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>`
    },

    {
      year: 1983,
      category: "FM",
      title: "Yamaha DX7 (FM)",
      details: "Synthé emblématique : FM devient un son 'mainstream' (pianos électriques, basses, cloches…).",
      color: C.TOOL,
      links: [{ label: "Yamaha DX7", href: "https://en.wikipedia.org/wiki/Yamaha_DX7" }],
      modalHtml: `<iframe src="https://www.youtube-nocookie.com/embed/kGpJT-hhEU8" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>
      <iframe src="https://www.youtube-nocookie.com/embed/dEjXPY9jOx8" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>`,
    },
    {
      year: 1984,
      category: "FM",
      title: "Phase Distortion / ‘PM-like’ grand public",
      who: "Casio CZ (approche voisine de la modulation de phase)",
      details: "Approches proches de la FM/PM dans l’esprit (spectres riches via modulation), très diffusées.",
      color: C.FM,
      links: [{ label: "Phase distortion synthesis", href: "https://en.wikipedia.org/wiki/Phase_distortion_synthesis" }],
      modalHtml: `<iframe src="https://www.youtube-nocookie.com/embed/8VWfbS2T5hA" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>`
    },
    {
      year: 1985,
      category: "Additive",
      title: "Additive + analyse spectrale : banques de sinusoïdes (sinusoidal modeling)",
      details: "Montée des modèles sinusoïdaux : représenter un son par une somme de sinusoïdes à fréquences/amplitudes variables.",
      color: C.ADD
    },
    {
      year: 1986,
      category: "Additive",
      title: "Modèle sinusoïdal McAulay–Quatieri (speech/audio)",
      details: "Travaux influents sur l’analyse/synthèse sinusoïdale (représentation additive paramétrique).",
      color: C.ADD,
      links: [{ label: "Sinusoidal modeling", href: "https://ccrma.stanford.edu/~jos/sasp/Additive_Synthesis_Analysis.html" }]
    },
    {
      year: 1987,
      category: "AM",
      title: "Effets numériques : tremolo (AM) et ring-mod deviennent ‘standards’",
      details: "Avec DSP/effets numériques, AM et ring-mod se généralisent comme modules d’effets (tremolo, textures métalliques).",
      color: C.AM
    },
  
    // --- 1990s : additive “spectral modeling”, FM mature, softsynths ---
    {
      year: 1990,
      category: "Additive",
      title: "Spectral Modeling Synthesis (SMS)",
      who: "Xavier Serra / Julius O. Smith (et communauté)",
      details: "Combine partiels sinusoïdaux (additif) + bruit (résiduel) : très influent pour transformation et resynthèse.",
      color: C.ADD,
      links: [{ label: "Spectral Modeling Synthesis (aperçu)", href: "https://ccrma.stanford.edu/~jos/sasp/Spectral_Modeling_Synthesis.html" }]
    },
    {
      year: 1986,
      category: "Instruments",
      title: "CSound",
      details: "language de programmation sonore CSound",
      color: C.TOOL,
      links: [{ label: "Csound", href: "https://en.wikipedia.org/wiki/Csound" }],
      modalHtml: `<iframe src="https://www.youtube-nocookie.com/embed/NjSrh71B2yo" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>`
    },
    
    {
      year: 1996,
      category: "Additive",
      title: "Kawai K5000 (additive)",
      details: "Synthé matériel emblématique de l’additif (contrôle de nombreux harmoniques/partiels).",
      color: C.TOOL,
      links: [{ label: "Kawai K5000", href: "https://en.wikipedia.org/wiki/Kawai_K5000" }],
      modalHtml: `<iframe src="https://www.youtube-nocookie.com/embed/KztauWVt_t4" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>`
    },
    {
      year: 1996,
      category: "Instruments",
      title: "PureData & Max/MSP", 
      details: "additive, AM, FM, et bien d'autres comme environnement de Patching",
      color: C.TOOL,
      links: [{ label: "Max/MSP", href: "https://cycling74.com/" }, { label: "Max/MSP", href: "https://puredata.info/" }],
      modalHtml: `<iframe src="https://www.youtube-nocookie.com/embed/gdRtQlGlAzA" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>`
    },
  
    // --- 2000s : plugins, FM “revival”, additive avancée ---

    {
      year: 1997,
      category: "Instruments", 
      title: "Antares Auto-Tune",
      who: "Antares Audio Technologies (Andy Hildebrand)",
      details: "Pitch-correction automatique en temps quasi-réel : correction ‘invisible’ ou effet assumé (hard-tune).",
      color: C.TOOL,
      links: [{ label: "Auto-Tune (Wikipedia)", href: "https://en.wikipedia.org/wiki/Auto-Tune" }], 
      modalHtml: `<iframe src="https://www.youtube-nocookie.com/embed/nZXRV4MezEw" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>` 
    },

    {
      year: 2001,
      category: "Instruments",
      title: "Celemony Melodyne",
      details: "Édition de hauteur et timing avec approche ‘graphique’ ; devient une référence pour l’édition vocale précise.",
      color: C.ADD,
      links: [{ label: "Melodyne", href: "https://en.wikipedia.org/wiki/Melodyne" }]
    },
  
    
    {
      year: 2004,
      category: "Additive",
      title: "Additif ‘spectral’ dans des outils grand public (édition d’harmoniques / partials)",
      details: "Des synthés/effets permettent de dessiner/éditer des harmoniques, ou d’utiliser analyse/synthèse sinusoïdale.",
      links: [{ label: "AudioSculpt", href: "http://anasynth.ircam.fr/home/english/software/audiosculpt"}, 
              { label: "Partiels", href: "https://forum.ircam.fr/projects/detail/partiels"},
              { label: "Adobe Audition", href: "https://www.adobe.com/fr/products/audition.html"},
              { label: "iZotope RX", href: "https://www.adobe.com/fr/products/audition.html"}],
      modalHtml: `<iframe src="http://anasynth.ircam.fr/home/english/software/audiosculpt"></iframe>`,
      color: C.ADD
    },

    {
      year: 2007,
      category: "Additive",
      title: "Outils d'edition spectraux pour restauration / traitement audio",
      details: "Outils d'édition avancés pour le traitement spectral de sons",
      links: [{ label: "Adobe Audition", href: "https://www.adobe.com/fr/products/audition.html"},
              { label: "iZotope RX", href: "https://www.adobe.com/fr/products/audition.html"}],
      modalHtml: `<iframe src="http://anasynth.ircam.fr/home/english/software/audiosculpt"></iframe>`,
      color: C.TOOL
    },
  
    // --- 2010s : synthèse “spectrale/additive” moderne et FM flexible ---
    {
      year: 2011,
      category: "Additive",
      title: "Native Instruments Razor (additive / spectral)",
      details: "Synthèse additive à grande échelle + contrôles macro ‘spectraux’ ; popularise une esthétique ‘spectral synth’.",
      color: C.TOOL,
      links: [{ label: "Razor (NI)", href: "https://www.native-instruments.com/en/products/komplete/synths/razor/" }],
      modalHtml: `<iframe src="ttps://www.native-instruments.com/en/products/komplete/synths/razor/""></iframe>`,
    },
    {
      year: 2013,
      category: "FM",
      title: "FM ‘semi-modulaire’ dans les plugins (routing libre, feedback, per-op effects)",
      details: "La FM devient plus ‘patchable’ : matrices, modulations audio-rate, feedbacks, distorsions par opérateur.",
      color: C.FM,
      links: [{ label: "FM8", href: "https://www.native-instruments.com/fr/products/komplete/synths/fm8/"}, 
        { label: "Korg opsix", href: "https://www.korg.com/fr/products/synthesizers/opsix_mk2/"},
        { label: "Phaseplant", href: "https://kilohearts.com/products/phase_plant"},
        { label: "Xfer Serum", href: "https://xferrecords.com/products/serum-2"}, 
        { label: "Pigments", href: "shttps://www.arturia.com/products/software-instruments/pigments/overview"}],
      modalHtml: `<iframe src="https://www.native-instruments.com/fr/products/komplete/synths/fm8/""></iframe>`,
    },

    {
      year: 2018,
      category: "Additive",
      title: "Synthétiseurs spectraux neuraux",
      who: "Axel Chemla--Romeu-Santos & Philippe Esling",
      details: "Approches d'analyse synthèse par réseaux de neurones",
      color: C.TOOL,
      links: [{ label: "vschaos2", href: "https://github.com/acids-ircam/vschaos2"}],
      modalHtml: `<iframe src="https://github.com/acids-ircam/vschaos2"></iframe>`,
    },

    {
      year: 2020,
      category: "Additive",
      title: "Synthèse additive différentiable",
      who: "Jessie Engel",
      details: "Superposition de procédés de synthèse spectrale et d'estimation de paramètres par apprentissage",
      color: C.TOOL,
      links: [{ label: "DDSP", href: "https://arxiv.org/pdf/2001.04643"}, 
              { label: "Differentiable FM8", href: "https://arxiv.org/pdf/2208.06169"},
              { label: "Differentiable WaveTable synthesis", href: "https://arxiv.org/pdf/2111.10003"} 
      ],
      modalHtml: `<iframe src="https://arxiv.org/pdf/2001.04643"></iframe>`,
    },
 
  ];
  
  // Note : l’événement year=9999 sert de “bloc ressources” optionnel.
  // Supprime-le si tu veux une frise strictement chronologique.