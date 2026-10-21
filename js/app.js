const projectsData = [
        {
            "id": "praxis",
            "title": "PRAXIS GOLD V108",
            "category": "Tkinter",
            "badge": "Desktop / Suite eCRF & Greffe Rénale",
            "hospital": "CHU de Guadeloupe — Pôle Greffe Rénale",
            "description": "Suite clinique bureautique et moteur universel de formulaires pour le suivi longitudinal des transplantés rénaux (eCRF, audit trail, matrice sur 30 ans et passerelle CRISTAL).",
            "tags": ["Python", "Tkinter", "SQLite", "Santé / CHU", "Audit Trail", "eCRF"],
            "type": "desktop",
            "preview_video": "assets/previews/praxis.mp4",
            "video_focus": "⚡ Flashs colorimétriques en direct (vert/rouge) sur les bornes physiologiques, blocage strict d'une date impossible par le 'Douanier' et navigation interactive dans la matrice sur 30 ans.",
            "download_url": "#",
            "features": [
                "Moteur universel d'eCRF dynamique piloté par JSON (Socle J0 et suivis longitudinaux M3 à Y30)",
                "Système expert de validation clinique : contrôle des bornes physiologiques en direct et calcul automatique (clairance, ischémie)",
                "Console de Pilotage Global : Matrice des jalons dynamique (recul 30 ans) et Kanban de production",
                "Audit Trail médico-légal strict horodaté traçant chaque champ modifié [Valeur antérieure ➔ Nouvelle]",
                "Générateur de rapports HTML print-ready autonomes et coffre-fort d'archivage physique ZIP mensuel"
            ],
            "screenshots": [
                { "url": "assets/images/praxis_dashboard.png", "caption": "Matrice des jalons de suivi longitudinal sur 30 ans" },
                { "url": "assets/images/praxis_douanier.png", "caption": "Contrôle des bornes physiologiques et douanier de saisie" }
            ]
        },
        {
            "id": "axios",
            "title": "AXIOS Extracteur Hospitalier",
            "category": "Tkinter",
            "badge": "Desktop / Automatisation & Extraction SIH",
            "hospital": "CHU de Guadeloupe — Pôle Greffe Rénale",
            "description": "Robot d'extraction et SAS de contrôle qualité pour SIH hospitaliers (EASILY, TD WEB, CYBERLAB) et passerelle d'injection vers la suite PRAXIS.",
            "tags": ["Python", "Tkinter", "Selenium", "RPA", "Santé / CHU", "Extraction PDF"],
            "type": "desktop",
            "preview_video": "assets/previews/axios.mp4",
            "video_focus": "🤖 Remplissage automatique des grilles depuis un PDF médical, badges de confiance colorés s'allumant en temps réel et validation assistée anti-aberrations.",
            "download_url": "#",
            "features": [
                "Connecteur multi-sources SIH : extraction automatisée depuis EASILY, TD WEB et CYBERLAB",
                "SAS de validation qualité avec scoring de fiabilité (indices de confiance vert/orange/rouge)",
                "Contrôle des bornes physiologiques interdisant les aberrations lors des corrections manuelles",
                "Passerelle d'exportation technique JSON avec horodatage d'audit pour injection directe eCRF"
            ],
            "screenshots": [
                { "url": "assets/images/axios_sas.png", "caption": "SAS de contrôle qualité et indices de confiance de l'extraction" }
            ],
            "roadmap": [
                { "title": "Pont bidirectionnel PRAXIS-AXIOS", "desc": "Lecture automatique du patient actif dans CLINIQUE.db pour pré-remplir le pivot d'identité.", "status": "in_progress" },
                { "title": "Harmonisation des sql_tags", "desc": "Alignement strict des clés extraites avec les schémas metadata.", "status": "planned" }
            ]
        },
        {
            "id": "iknos",
            "title": "IKNOS v1.1",
            "category": "PySide6",
            "badge": "Desktop / Coordination Pré-Greffe Rénale",
            "hospital": "CHU de Guadeloupe — Pôle Greffe Rénale",
            "description": "Plateforme hospitalière de coordination pré-greffe rénale : pipeline Kanban d'inscription ABM, score psychosocial SMPG, contrôle des péremptions et conformité RGPD avancée.",
            "tags": ["Python", "PySide6", "Qt6", "SQLite", "Santé / CHU", "RGPD"],
            "type": "desktop",
            "preview_video": "assets/previews/iknos.mp4",
            "video_focus": "🗂️ Déplacement fluide (Drag & Drop) des dossiers sur le Kanban 5 stades, alertes visuelles pulsantes sur examens périmés et compilation PDF instantanée.",
            "download_url": "#",
            "features": [
                "Pipeline clinique Kanban en 5 stades (du bilan au statut Inscrit ABM) avec chronomètre de stagnation",
                "Contrôle dynamique des péremptions d'examens médicaux avec alertes colorimétriques de validité",
                "Module d'évaluation psychosociale avec calcul du score SMPG sur 100 points et orientation ETP",
                "Studio de courriers médicaux et convocations avec fusion de balises dynamiques et export PDF",
                "Conformité RGPD stricte : registre des accès, anonymisation et intégrité SQLite"
            ],
            "screenshots": [
                { "url": "assets/images/iknos_kanban.png", "caption": "Pipeline Kanban de coordination pré-greffe" },
                { "url": "assets/images/iknos_smpg.png", "caption": "Calculateur d'évaluation psychosociale SMPG" }
            ]
        },
        {
            "id": "delphi",
            "title": "DELPHI V5.6",
            "category": "Tkinter",
            "badge": "Desktop / Décisionnel & Épidémiologie Greffe",
            "hospital": "CHU de Guadeloupe — Pôle Greffe Rénale",
            "description": "Moteur de réconciliation et plateforme d'analyse épidémiologique pour les données du registre national CRISTAL (Agence de la Biomédecine). Analyse croisée des listes d'attente, des délais d'accès et reporting Excel/PDF automatisé.",
            "tags": ["Python", "Tkinter", "Pandas", "OpenPyXL", "Matplotlib", "Santé / CHU", "CRISTAL"],
            "type": "desktop",
            "preview_video": "assets/previews/delphi.mp4",
            "video_focus": "📊 Rapprochement flou d'identités en temps réel, génération dynamique d'histogrammes et camemberts interactifs, puis ouverture d'un classeur Excel avec graphiques natifs.",
            "download_url": "#",
            "features": [
                "Moteur d'analyse bicéphale : Mode réconciliation 'Liste d'attente' et Mode enrichissement 'Cohorte des greffés'",
                "Algorithme de réconciliation flou : matching NEFG et dédoublonnage phonétique (noms de naissance, marital, d'usage et DDN)",
                "Analyses épidémiologiques avancées : délais d'attente, fardeau de la dialyse avant greffe, néphropathies et survie",
                "Module de reporting bureautique automatique : rapports vectoriels multipages PDF et classeurs Excel avec graphiques natifs (OpenPyXL)",
                "Tableau de bord statistique interactif embarqué (Matplotlib / Tkinter) avec visualisation par centre de dialyse"
            ],
            "screenshots": [
                { "url": "assets/images/delphi_dashboard.png", "caption": "Tableau de bord interactif Tkinter & Matplotlib" },
                { "url": "assets/images/delphi_excel.png", "caption": "Export Excel automatisé avec graphiques natifs OpenPyXL" }
            ]
        },
        {
            "id": "coachmaster",
            "title": "Coachmaster V6.0",
            "category": "HTML",
            "badge": "Web App PWA / Sport & Pédagogie",
            "description": "Application web progressive pour éducateurs de football : générateur de séances 90 min, tableau tactique interactif, rotations de plateaux et suivi d'assiduité hors-ligne.",
            "tags": ["HTML5", "JavaScript", "IndexedDB", "Dexie.js", "PWA", "Sport Tech"],
            "type": "web_standalone",
            "preview_video": "assets/previews/coachmaster.mp4",
            "video_focus": "⚽ Dessin vectoriel tactile en direct (flèches, passes, courses), manipulation fluide des joueurs sur le terrain et chronomètre d'entraînement haptique animé.",
            "download_url": "apps/coachmaster/index.html",
            "features": [
                "Architecture PWA 100% hors-ligne avec base locale IndexedDB (Dexie.js)",
                "Générateur de séances articulé sur les référentiels DTN FFF, FUNino et Coerver Coaching",
                "Double tableau tactique Canvas interactif : mode création statique et tableau blanc animé",
                "Chronomètre d'entraînement avec alerte haptique (vibreur) et sifflet multi-tons haute fréquence"
            ],
            "screenshots": [
                { "url": "assets/images/coachmaster_cover.png", "caption": "Interface d'entraînement et tableau tactique Canvas" }
            ]
        },
        {
            "id": "optitime",
            "title": "OptiTime V13.6",
            "category": "Streamlit",
            "badge": "Web App / Productivité & Santé",
            "description": "Assistant de gestion du temps gamifié intégrant un compagnon virtuel (Optigotchi), un suivi d'activité et des micro-pauses ergonomiques pour la santé au travail.",
            "tags": ["Python", "Streamlit", "Time Tracking", "Gamification", "SQLite"],
            "type": "web_standalone",
            "preview_video": "assets/previews/optitime.mp4",
            "video_focus": "✨ Onde ECG pulsante et auras néomorphiques animées en pur CSS, prise de niveau de l'Optigotchi avec effets visuels et bascule de thème UI en direct.",
            "download_url": "#",
            "features": [
                "Chronomètre de session dynamique avec styles UI animés en CSS/SVG pur",
                "Moteur de gamification (Optigotchi) : gain d'XP, système de trophées et inventaire",
                "Catalogue de pauses actives (cohérence cardiaque, ergonomie) récompensées en énergie virtuelle",
                "Éditeur d'historique intégré (Dataframe) avec graphiques de productivité"
            ],
            "screenshots": [
                { "url": "assets/images/optitime_main.png", "caption": "Chronomètre animé et tableau de bord Optigotchi" }
            ]
        },
        {
            "id": "themis",
            "title": "THEMIS",
            "category": "Streamlit",
            "badge": "Web App / Gestion Commerciale & ERP",
            "description": "Plateforme centralisée de gestion commerciale : création de devis, facturation automatisée, suivi des KPIs et génération de dossiers contractuels complets.",
            "tags": ["Python", "Streamlit", "SQLite", "CRM", "Facturation"],
            "type": "web_standalone",
            "preview_video": "assets/previews/themis.mp4",
            "video_focus": "💼 Recalcul en direct des acomptes et marges lors de l'édition du devis, suivi des KPIs et rendu WYSIWYG immédiat d'un contrat commercial PDF complet.",
            "download_url": "#",
            "features": [
                "Tableau de bord financier (KPIs) interactif pour le suivi des devis actifs et archivés",
                "Éditeur de devis sur-mesure intégrant la rédaction dynamique du cahier des charges fonctionnel",
                "Système de facturation complet : gestion des acomptes, soldes et émission d'avoirs",
                "Moteur de rendu HTML/CSS pour l'édition de documents légaux prêts à l'impression"
            ],
            "screenshots": [
                { "url": "assets/images/themis_dashboard.png", "caption": "Tableau de bord de gestion commerciale et suivi des KPIs" }
            ]
        },
        {
            "id": "ephor",
            "title": "EPHOR Superviseur",
            "category": "CustomTkinter",
            "badge": "Desktop / DevOps & Versioning",
            "description": "Interface graphique de supervision Git et de sauvegarde de code automatisée avec mode 'fantôme' (auto-commit) et gestion visuelle des rollbacks.",
            "tags": ["Python", "CustomTkinter", "Git", "DevOps", "Threading"],
            "type": "desktop",
            "preview_video": "assets/previews/ephor.mp4",
            "video_focus": "🛡️ Visionneuse de Diff bicolore (ajouts verts / suppressions rouges), compte à rebours du Mode Fantôme et exécution spectaculaire d'un Rollback Git destructif.",
            "download_url": "#",
            "features": [
                "Moteur Git intégré avec initialisation automatique de dépôts et .gitignore préconfigurés",
                "Mode 'Fantôme' (Watchdog) : surveillance asynchrone des fichiers et snapshot automatique",
                "Studio d'Audit visuel : visionneuse de Diff avec coloration syntaxique des ajouts/suppressions",
                "Système de Rollback destructif sécurisé pour annuler instantanément des développements instables"
            ],
            "screenshots": [
                { "url": "assets/images/ephor_dark.png", "caption": "Console DevOps sombre avec visualiseur de Diff Git" }
            ]
        }
    ];