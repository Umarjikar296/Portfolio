export const caseStudiesData = {
  physiocraft: {
    en: {
      title: "Intelligent Appointment Scheduling for Physiotherapy Clinic",
      subtitle: "Designing a dual-track scheduling system for Therapy sessions and Consultations",
      summary: {
        product: "Physio Craft (existing medical/clinic management product)",
        feature: "Appointment Booking Feature.",
        role: "Product Owner.",
        timeline: "8 weeks (design to launch)",
        platform: "Web / Mobile",
        description: "Physio Craft is a clinic management solution for physiotherapy practices to manage patients, physicians and everyday operations. Designed and distributed the appointment booking system that allows patients to book Consultation and Therapy sessions online. Two extremely distinct visit kinds in terms of time, clinical needs, and scheduling rationale. Suggested a set of supplemental features, home exercise monitoring, digital intake, pre-appointment coaching, and self-serve rescheduling to augment the broader patient experience around that core booking flow."
      },
      sections: [
        {
          title: "The Problem",
          type: "text-list",
          intro: "Before this addition, the clinic’s scheduling procedure had never been designed to discriminate between two fundamentally distinct sorts of visits:\n\n1. Consultations are brief diagnostic appointments.\n2. Therapy sessions are extensive, hands-on therapy sessions.\n\nBecause slots were not classified by session type or duration, the clinic had reoccurring operational issues:",
          items: [
            {
              title: "Scheduling confusion",
              description: "front-desk personnel and physicians had no idea what was going to happen next or how long it would take."
            },
            {
              title: "Long, unpredictable wait times",
              description: "patients arriving for a fast consultation may become detained behind a treatment session that has overrun, with little visibility into delays."
            },
            {
              title: "No structural restriction on therapy load",
              description: "Therapy sessions are physically hard for the doctor. With no cap, a day may be filled with back-to-back therapy sessions, which would tire out doctors and, consequently, decrease quality of care."
            },
            {
              title: "No doctor-side availability control",
              description: "Doctors were unable to block out their own time (breaks, emergencies, personal restraints) without manually coordinating with the front desk."
            }
          ],
          outro: "In short: The clinic was trying to squeeze two different sorts of appointments into one generic booking flow, and it was breaking down."
        },
        {
          title: "Objectives",
          type: "list",
          intro: "Set out the solution with three goals:",
          items: [
            "Make the two visit kinds explicit in the booking flow so that slot durations and availability match reality.",
            "Protect the doctor’s day by limiting the number of treatment sessions that can be arranged each day, but provide room for more (shorter) consultations.",
            "Allow doctors to manage their own availability without having involvement from clinic workers."
          ]
        },
        {
          title: "The Solution",
          type: "numbered-list",
          items: [
            {
              title: "Different booking flow for Consultation vs Therapy",
              description: "Instead of a single generic \"book an appointment\" flow, patients now select the visit type up front. Each type has a built-in slot duration baked into the scheduling logic, so the system automatically reserves the correct amount of time on the calendar. A short block for consultations, a longer block for therapy, rather than treating every booking as the same length.\n\nThis alone was enough to eliminate the root cause of the original problem: slots were no longer estimated or guessed at the front desk, they were structurally correct from the moment of booking."
            },
            {
              title: "Daily therapy session maximum",
              description: "To guard against doctor fatigue, I added a configurable daily cap on therapy sessions. When a cap is hit for a given day, the system stops surfacing therapy slots for that doctor, whereas consultation slots, being shorter and less physically demanding, are more freely available.\n\nThis transformed a soft, informal concern (\"try not to overload the doctor\") into a hard constraint that the system enforces automatically, without requiring staff to manually track it."
            },
            {
              title: "Doctor-controlled freezing slots",
              description: "Doctors can freeze specific slots, effectively removing them from what patients see as available online. This gave doctors a self-service way to block time for personal availability constraints without having to call the front desk or ask someone else to update the schedule therefore eliminating an entire manual coordination step."
            }
          ]
        },
        {
          title: "Why This Way?",
          type: "paragraph",
          content: "The main idea was that therapy sessions and consultations aren't just \"different lengths\", they're also different types of clinical work, and the booking system needed to reflect that difference both in how it worked and how it looked. Instead of adding fixes on top of a single generic slot system. I built the scheduling logic around two parallel tracks that share a calendar but follow their own rules for things like duration, daily caps, and doctor overrides."
        },
        {
          title: "Beyond Booking: Recommendations to Enhance the Patient Experience",
          type: "text-list",
          intro: "I found adjacent gaps in the patient journey while designing the booking system. These were moments before and after the appointment that were still manual, unclear, or missing altogether. To complete the experience and further reduce the operational load on the clinic, I proposed the following features:",
          items: [
            {
              title: "Videos on Home Exercise Dashboard",
              description: "Patients' ability to complete exercises in between sessions is crucial to the success of physiotherapy, and the app was unable to support this. A dashboard where doctors can assign home exercise videos to patients after a session would give patients an on-demand reference instead of memory or handwritten notes. This also provides a natural touchpoint for patients to stay engaged with the clinic between visits."
            },
            {
              title: "Electronic Intake Forms",
              description: "Traditional patient history collection on arrival, on paper, took up appointment time and caused front desk delays. I suggested digital intake forms patients fill out before their visit so doctors know their history. This cuts patient in-clinic time and reduces ripple-effect delays from the scheduling issue."
            },
            {
              title: "Pre-Appointment Information and FAQ",
              description: "Patient questions (what to bring, how to prepare, what to expect for a first therapy session vs. a consultation) were previously answered by phone calls to the clinic, wasting staff time. I suggested a basic FAQ and pre-appointment instructions section shown when booking so patients show up ready and the clinic gets fewer repetitive calls."
            },
            {
              title: "Cancellation and reschedule options",
              description: "No self-service rescheduling meant calling the clinic to change a booking, which was frustrating for patients and laborious for staff, and often left slots empty when patients didn't show up. I suggested letting patients reschedule or cancel in the app to free up slots earlier for other patients and reduce friction-related no-shows."
            }
          ],
          outro: "Why These Matter as a Group: These follow the same philosophy as the core booking feature: eliminate manual coordination when the system can do it and give patients and doctors clear information up front rather than resolving confusion later. Instead of just focusing on the booking problem, these recommendations covered the entire appointment lifecycle, before, during and after the visit, in addition to the redesign of booking."
        },
        {
          title: "Impact",
          type: "list",
          items: [
            "Reduced patient wait time confusion by providing accurate, type-specific slot durations to front desk and patients.",
            "Self-serve freeze feature eliminates manual doctor availability changes.",
            "Daily cap to prevent overbooking of therapy on high demand days.",
            "Reduced front-desk phone volume by integrating rescheduling, FAQs, and pre-visit prep into the app.",
            "History collected digitally pre-visit to reduce in-clinic time per patient.",
            "Improved patient compliance to prescribed exercises through an always-available video dashboard."
          ]
        },
        {
          title: "Lessons Learned",
          type: "list",
          items: [
            "Most scheduling problems are not about the calendar UI, they are about the categories below it.",
            "The real fix here wasn’t a prettier booking screen, it was modeling two different appointment types with different constraints properly.",
            "Direct control by the primary stakeholder (the doctor) eliminated coordination overhead that staff admin tools could not address.",
            "Guardrails, such as the daily therapy cap, are most effective when they are invisible until needed. This way, patients and staff do not perceive a \"limit,\" but rather the availability that already exists."
          ]
        }
      ]
    },
    de: {
      title: "Intelligente Terminplanung für eine Physiotherapie-Klinik",
      subtitle: "Entwurf eines zweigleisigen Planungssystems für Therapiesitzungen und Konsultationen",
      summary: {
        product: "Physio Craft (bestehendes Produkt für das Praxismanagement)",
        feature: "Terminbuchungsfunktion",
        role: "Product Owner",
        timeline: "8 Wochen (vom Entwurf bis zur Einführung)",
        platform: "Web / Mobil",
        description: "Physio Craft ist eine Praxisverwaltungslösung für Physiotherapie-Praxen zur Verwaltung von Patienten, Therapeuten und dem täglichen Betrieb. Es wurde ein Terminbuchungssystem entwickelt und implementiert, mit dem Patienten Konsultationen und Therapiesitzungen online buchen können. Hierbei handelt es sich um zwei grundlegend unterschiedliche Besuchsarten hinsichtlich Zeitaufwand, klinischem Bedarf und Planungslogik. Vorgeschlagen wurde eine Reihe ergänzender Funktionen wie Heimübungskontrolle, digitale Anamnese, Coaching vor dem Termin und selbstständige Terminverschiebung, um die gesamte Patientenerfahrung rund um diesen Kernbuchungsablauf zu verbessern."
      },
      sections: [
        {
          title: "Das Problem",
          type: "text-list",
          intro: "Vor dieser Erweiterung war das Terminplanungssystem der Klinik nie darauf ausgelegt, zwischen zwei grundlegend verschiedenen Besuchsarten zu unterscheiden:\n\n1. Konsultationen sind kurze diagnostische Termine.\n2. Therapiesitzungen sind umfangreiche, praktische Behandlungssitzungen.\n\nDa die Terminfenster nicht nach Sitzungstyp oder Dauer klassifiziert waren, traten in der Klinik wiederholt betriebliche Probleme auf:",
          items: [
            {
              title: "Planungschaos",
              description: "Das Empfangspersonal und die Ärzte wussten nicht, was als Nächstes ansteht oder wie lange es dauern würde."
            },
            {
              title: "Lange, unvorhersehbare Wartezeiten",
              description: "Patienten, die zu einer kurzen Konsultation kamen, mussten oft hinter einer überzogenen Behandlungssitzung warten, ohne Einblick in die Verzögerungen zu haben."
            },
            {
              title: "Keine strukturelle Begrenzung der Therapiebelastung",
              description: "Therapiesitzungen sind für den Arzt körperlich anstrengend. Ohne Obergrenze konnte ein Tag mit aufeinanderfolgenden Therapiesitzungen gefüllt sein, was die Ärzte ermüdete und folglich die Behandlungsqualität minderte."
            },
            {
              title: "Keine Kontrolle der Verfügbarkeit durch die Ärzte",
              description: "Ärzte konnten ihre eigenen Zeiten (Pausen, Notfälle, private Termine) nicht sperren, ohne sich manuell mit dem Empfang abzustimmen."
            }
          ],
          outro: "Kurz gesagt: Die Klinik versuchte, zwei verschiedene Arten von Terminen in einen einzigen generischen Buchungsablauf zu pressen, was zum Scheitern verurteilte."
        },
        {
          title: "Ziele",
          type: "list",
          intro: "Die Lösung verfolgte drei Hauptziele:",
          items: [
            "Die beiden Besuchsarten im Buchungsablauf explizit machen, damit die Zeitfenster und die Verfügbarkeit der Realität entsprechen.",
            "Den Arbeitstag des Arztes schützen, indem die Anzahl der täglichen Behandlungssitzungen begrenzt wird, während Raum für mehr (kürzere) Konsultationen gelassen wird.",
            "Ärzten ermöglichen, ihre eigene Verfügbarkeit selbstständig und ohne Einbindung des Praxispersonals zu verwalten."
          ]
        },
        {
          title: "Die Lösung",
          type: "numbered-list",
          items: [
            {
              title: "Unterschiedlicher Buchungsablauf für Konsultation vs. Therapie",
              description: "Statt eines einzigen generischen „Termin buchen“-Ablaufs wählen Patienten nun vorab den Besuchstyp aus. Jeder Typ hat eine feste Dauer, die in die Planungslogik integriert ist, sodass das System automatisch die korrekte Zeit im Kalender reserviert: ein kurzes Fenster für Konsultationen, ein längeres für Therapien, anstatt jede Buchung gleich lang zu behandeln.\n\nDies allein reichte aus, um die Ursache des ursprünglichen Problems zu beseitigen: Zeitfenster wurden am Empfang nicht mehr geschätzt oder erraten, sondern waren ab dem Moment der Buchung strukturell korrekt."
            },
            {
              title: "Tägliches Maximum an Therapiesitzungen",
              description: "Um einer Ermüdung der Ärzte vorzubeugen, habe ich eine konfigurierbare tägliche Obergrenze für Therapiesitzungen eingeführt. Sobald das Limit für einen Tag erreicht ist, bietet das System keine weiteren Therapiesitzungen für diesen Arzt an. Die kürzeren und körperlich weniger anstrengenden Konsultationsfenster bleiben jedoch weiterhin verfügbar.\n\nDies wandelte eine vage, informelle Vorgabe („versucht, den Arzt nicht zu überlasten“) in eine feste Regel um, die das System automatisch durchsetzt, ohne dass das Personal dies manuell überwachen muss."
            },
            {
              title: "Arztgesteuerte Sperrung von Zeitfenstern",
              description: "Ärzte können bestimmte Zeitfenster sperren und sie somit aus der Online-Ansicht für Patienten entfernen. Dies bot Ärzten eine einfache Möglichkeit, Zeiten für persönliche Einschränkungen zu blockieren, ohne den Empfang anzurufen oder jemanden um die Aktualisierung des Kalenders bitten zu müssen, wodurch ein ganzer manueller Abstimmungsschritt entfiel."
            }
          ]
        },
        {
          title: "Warum dieser Ansatz?",
          type: "paragraph",
          content: "Der Grundgedanke war, dass Therapiesitzungen und Konsultationen nicht nur „unterschiedlich lang“ sind, sondern auch verschiedene Arten klinischer Arbeit darstellen. Das Buchungssystem musste diesen Unterschied sowohl funktional als auch visuell widerspiegeln. Statt Flicken auf ein generisches System zu setzen, habe ich die Planungslogik um zwei parallele Pfade herum aufgebaut, die sich zwar einen Kalender teilen, aber eigenen Regeln für Dauer, tägliche Limits und ärztliche Sperrungen folgen."
        },
        {
          title: "Über die Buchung hinaus: Weitere Empfehlungen zur Verbesserung der Patientenerfahrung",
          type: "text-list",
          intro: "Während des Entwurfs des Buchungssystems habe ich angrenzende Lücken in der Patient Journey festgestellt – Momente vor und nach dem Termin, die noch manuell, unklar oder gar nicht vorhanden waren. Um die Erfahrung abzurunden und den Verwaltungsaufwand der Klinik weiter zu senken, habe ich folgende Funktionen vorgeschlagen:",
          items: [
            {
              title: "Heimübungsvideos im Dashboard",
              description: "Die Fähigkeit der Patienten, Übungen zwischen den Sitzungen durchzuführen, ist entscheidend für den Erfolg der Physiotherapie, was die App bisher jedoch nicht unterstützte. Ein Dashboard, in dem Ärzte den Patienten nach einer Sitzung Heimübungsvideos zuweisen können, dient den Patienten als direkte Referenz (statt sich auf das Gedächswert oder handschriftliche Notizen verlassen zu müssen). Dies schafft zudem einen natürlichen Kontaktpunkt für Patienten, um zwischen den Besuchen mit der Klinik in Verbindung zu bleiben."
            },
            {
              title: "Digitale Anamnesebögen",
              description: "Die traditionelle Erfassung der Patientenhistorie auf Papier bei der Ankunft nahm wertvolle Behandlungszeit in Anspruch und führte zu Verzögerungen am Empfang. Ich schlug digitale Anamnesebögen vor, die Patienten vor ihrem Besuch ausfüllen, damit die Ärzte ihre Historie bereits kennen. Dies verkürzt die Aufenthaltszeit in der Klinik und reduziert Folgeverzögerungen."
            },
            {
              title: "Informationen vor dem Termin & FAQ",
              description: "Fragen der Patienten (was mitzubringen ist, wie man sich vorbereitet usw.) wurden bisher telefonisch beantwortet, was viel Personalzeit kostete. Ich habe einen grundlegenden FAQ-Bereich und Anweisungen vor dem Termin vorgeschlagen, die bei der Buchung angezeigt werden, damit Patienten vorbereitet erscheinen und weniger Routineanrufe eingehen."
            },
            {
              title: "Stornierungs- und Verschiebeoptionen",
              description: "Ohne die Möglichkeit zur selbstständigen Umbuchung mussten Patienten anrufen, was frustrierend für sie und mühsam fürs Personal war, und oft zu leeren Zeitfenstern bei Nichterscheinen führte. Ich schlug vor, Patienten Termine in der App verschieben oder stornieren zu lassen, um Plätze frühzeitig freizugeben und no-show-Raten zu senken."
            }
          ],
          outro: "Warum diese Maßnahmen als Gruppe wichtig sind: Diese Empfehlungen folgen derselben Philosophie wie die Kern-Buchungsfunktion: Manuelle Abstimmung eliminieren, sobald das System dies übernehmen kann, und Patienten sowie Ärzten vorab klare Informationen bieten, statt Unklarheiten im Nachhinein zu klären. Statt sich nur auf das Buchungsproblem zu konzentrieren, decken diese Empfehlungen den gesamten Behandlungszyklus vor, während und nach dem Besuch ab."
        },
        {
          title: "Erfolg & Auswirkungen",
          type: "list",
          items: [
            "Reduzierung von Wartezeiten und Unklarheiten durch präzise, typspezifische Termindauern für Empfang und Patienten.",
            "Das selbstgesteuerte Sperren von Terminfenstern macht manuelle Änderungen der Verfügbarkeit durch das Personal überflüssig.",
            "Tägliche Obergrenze zur Vermeidung von Überlastung an Tagen mit hoher Nachfrage.",
            "Geringeres Telefonaufkommen am Empfang durch die Integration von Terminverschiebungen, FAQs und Vorbereitungshinweisen in der App.",
            "Digitale Erfassung der Patientenhistorie vor dem Besuch verkürzt die Aufnahmezeit in der Praxis.",
            "Verbesserte Therapietreue der Patienten durch ein jederzeit verfügbares Übungsvideo-Dashboard."
          ]
        },
        {
          title: "Erkenntnisse (Lessons Learned)",
          type: "list",
          items: [
            "Die meisten Planungsprobleme liegen nicht an der Benutzeroberfläche des Kalenders, sondern an den darunter liegenden Datenstrukturen und Kategorien.",
            "Die eigentliche Lösung war kein hübscherer Buchungsbildschirm, sondern die korrekte Modellierung zweier verschiedener Termintypen mit ihren jeweiligen spezifischen Bedingungen.",
            "Die direkte Kontrolle durch den Hauptakteur (den Arzt) eliminierte Koordinationsaufwand, den administrative Tools für das Personal nicht lösen konnten.",
            "Schutzbarrieren wie die tägliche Obergrenze sind am effektivsten, wenn sie unsichtbar sind, bis sie benötigt werden. Auf diese Weise nehmen Patienten und Personal keine Einschränkung wahr, sondern lediglich die tatsächlich vorhandene Verfügbarkeit."
          ]
        }
      ]
    }
  },
  thelootera: {
    en: {
      title: "Thelootera.com",
      subtitle: "Turning a founder's idea into a profitable e-commerce product in 16 weeks",
      summary: {
        product: "Thelootera.com (custom accessories e-commerce brand)",
        feature: "Customizer & Ordering Flow.",
        role: "Product Lead.",
        timeline: "16 weeks (idea to launch)",
        platform: "Web App",
        description: "Thelootera.com is a web app for ordering custom-printed phone cases, keychains, passport covers, and other accessories. As the product lead, I was responsible for the end-to-end planning and execution of the product, working as a developer and coordinating the design, development, backend, database, and content. Worked closely with the founder to transform a business concept—a brand of personalized accessories—into a functional, live product."
      },
      sections: [
        {
          title: "The Point of Departure",
          type: "paragraph",
          content: "The founder had a clear business idea – sell customized, personalized accessories online – but no product yet. There was no app to build, no feature set to define, no team structure to execute. My job was to take that idea and turn it into something customers could actually use to design, order, and receive a personalized product, all while keeping the build scoped tightly enough to launch fast.\n\nUnlike a typical redesign project, there was no legacy system to fix here; instead, this was a start-to-finish project with a tight deadline to get to market."
        },
        {
          title: "My Role & Approach",
          type: "list",
          items: [
            "Because this was an early-stage, founder-led build, the \"product\" role covered more ground than it might on a bigger team.",
            "Led customer discovery and planning with the founder to define the product scope—what customers needed to do and what could wait.",
            "Made sure design, development, backend, database, and content were all working toward the same product definition and that decisions in one area (e.g., how customization was captured on the backend) matched design and content's customer-facing experience.",
            "Working hands-on as a developer on the build meant product decisions were based on what was feasible in 16 weeks, not just what was desirable.",
            "Owned the product end-to-end, from the earliest planning conversations through to the live release."
          ]
        },
        {
          title: "Speed Scoping: Less is more",
          type: "paragraph",
          content: "A clear product decision on this project was to keep the initial product catalog intentionally small. Instead of trying to launch with every accessory type the founder eventually wanted to sell, I focused on a set of customizable products — enough to prove the core experience (browse, personalize, order) worked end-to-end, without the scope creep that comes from building for every product variation up front.\n\nIt was this scoping decision that made the 16 week timeline realistic. Instead of spreading effort thinly across a large catalog on day one, it let the team focus on the customization workflow."
        },
        {
          title: "The Product",
          type: "paragraph",
          content: "Customers could browse, customize, and order personalized, custom-printed phone cases, keychains, and passport covers on Thelootera.com without having to talk to a founder or sales rep.\n\nA founder-led brand needed this beyond convenience because it meant the business could scale beyond one person's manual handling and every sale wasn't dependent on the founder."
        },
        {
          title: "Result",
          type: "paragraph",
          content: "The product went live on time at 16 weeks. Sales performance post-launch was strong, and customers moved through the ordering/customization workflow smoothly, validating that the core experience - browse, personalize, order - worked as intended for a founder-led brand entering the market for the first time."
        },
        {
          title: "What This Says About My Work Style as a PM",
          type: "list",
          items: [
            "Embrace ambiguity. There was no product or team structure to inherit; the founder had to create the scope, priorities, and plan.",
            "Cross-functional by necessity, not just name. Design, development, backend, database, and content on one small team required close attention to the entire build, not just the roadmap.",
            "Outcomes focused, not completeness. I explicitly chose to launch with a smaller catalog to protect the timeline and core experience.",
            "Technical fluency led to better product decisions. Working as a developer on the ground meant the plan was always tied to what could actually be built in the time we had."
          ]
        }
      ]
    },
    de: {
      title: "Thelootera.com",
      subtitle: "Die Idee eines Gründers in 16 Wochen in ein profitables E-Commerce-Produkt verwandeln",
      summary: {
        product: "Thelootera.com (E-Commerce-Marke für personalisierte Accessoires)",
        feature: "Customizer- & Bestellablauf",
        role: "Product Lead",
        timeline: "16 Wochen (von Idee bis Launch)",
        platform: "Web-App",
        description: "Thelootera.com ist eine Web-App zur Bestellung von individuell bedruckten Handyhüllen, Schlüsselanhängern, Reisepasshüllen und anderen Accessoires. Als Product Lead war ich für die End-to-End-Planung und Ausführung des Produkts verantwortlich, arbeitete als Entwickler und koordinierte Design, Entwicklung, Backend, Datenbank und Inhalte. Ich arbeitete eng mit dem Gründer zusammen, um ein Geschäftskonzept in ein funktionstüchtiges, aktives Produkt zu verwandeln."
      },
      sections: [
        {
          title: "Ausgangspunkt",
          type: "paragraph",
          content: "Der Gründer hatte eine klare Geschäftsidee – den Online-Verkauf von personalisierten Accessoires –, aber noch kein Produkt. Es gab keine App zu bauen, keine Funktionsliste zu definieren und keine Teamstruktur zur Umsetzung. Meine Aufgabe war es, diese Idee aufzugreifen und in etwas zu verwandeln, das Kunden tatsächlich nutzen können, um ein personalisiertes Produkt zu entwerfen, zu bestellen und zu erhalten, und dabei das Projekt eng genug einzugrenzen, um schnell zu starten.\n\nIm Gegensatz zu einem typischen Redesign-Projekt gab es hier kein Altsystem zu reparieren. Es war ein Start-to-Finish-Projekt mit einer knappen Frist zur Markteinführung."
        },
        {
          title: "Meine Rolle & Ansatz",
          type: "list",
          items: [
            "Da es sich um eine frühe Phase eines inhabergeführten Projekts handelte, deckte die Rolle des „Product Managers“ mehr Bereiche ab als in einem größeren Team.",
            "Leitung der Kundenbefragung und Planung mit dem Gründer, um den Produktumfang zu definieren – was Kunden zwingend brauchten und was warten konnte.",
            "Sicherstellen, dass Design, Entwicklung, Backend, Datenbank und Inhalte auf dasselbe Produktziel ausgerichtet waren und Entscheidungen in einem Bereich (z.B. wie Anpassungen im Backend erfasst werden) mit dem Kundenerlebnis übereinstimmten.",
            "Durch die praktische Mitarbeit als Entwickler basierten Produktentscheidungen auf dem, was in 16 Wochen machbar war, nicht nur auf dem, was wünschenswert war.",
            "Verantwortung für das Produkt von den ersten Planungsgesprächen bis hin zur Live-Veröffentlichung."
          ]
        },
        {
          title: "Schnelles Scoping: Weniger ist mehr",
          type: "paragraph",
          content: "Eine klare Produktentscheidung bei diesem Projekt war es, den anfänglichen Produktkatalog bewusst klein zu halten. Anstatt zu versuchen, mit jeder Accessoire-Variante zu starten, die der Gründer verkaufen wollte, habe ich mich auf eine kleine Auswahl anpassbarer Produkte konzentriert – genug, um zu beweisen, dass die Kernerfahrung (Stöbern, Personalisieren, Bestellen) durchgängig funktioniert, ohne den Zeitrahmen durch die Entwicklung aller Varianten vorab zu sprengen.\n\nDiese Scoping-Entscheidung machte den Zeitrahmen von 16 Wochen erst realistisch. Statt die Kräfte am ersten Tag auf einen riesigen Katalog zu verteilen, konnte sich das Team auf den Anpassungsworkflow konzentrieren."
        },
        {
          title: "Das Produkt",
          type: "paragraph",
          content: "Kunden konnten auf Thelootera.com selbstständig personalisierte, individuell bedruckte Handyhüllen, Schlüsselanhänger und Reisepasshüllen durchsuchen, anpassen und bestellen, ohne mit dem Gründer oder einem Vertriebsmitarbeiter sprechen zu müssen.\n\nFür eine gründergeführte Marke war dies über die reine Bequemlichkeit hinaus essenziell: Es bedeutete, dass das Geschäft unabhängig von der manuellen Bearbeitung durch eine einzelne Person wachsen konnte und nicht jeder Verkauf vom Gründer abhing."
        },
        {
          title: "Ergebnis",
          type: "paragraph",
          content: "Das Produkt ging pünktlich nach 16 Wochen live. Die Verkaufszahlen nach dem Launch waren stark und die Kunden nutzten den Bestell- und Anpassungsworkflow reibungslos. Dies bestätigte, dass die Kernerfahrung – Stöbern, Personalisieren, Bestellen – für eine neue Marke am Markt wie gewünscht funktioniert."
        },
        {
          title: "Was dies über meinen Arbeitsstil als PM aussagt",
          type: "list",
          items: [
            "Umgang mit Ambiguität: Es gab kein bestehendes Produkt oder Team; der Gründer und ich mussten Umfang, Prioritäten und Plan von Grund auf neu erstellen.",
            "Funktionsübergreifend aus Notwendigkeit: Design, Entwicklung, Backend, Datenbank und Inhalte in einem kleinen Team erforderten eine enge Begleitung des gesamten Builds, nicht nur der Roadmap.",
            "Fokus auf Ergebnisse, nicht auf Vollständigkeit: Ich habe mich bewusst für den Launch mit einem kleineren Katalog entschieden, um den Zeitrahmen und das Kernerlebnis zu sichern.",
            "Technische Kompetenz führte zu besseren Entscheidungen: Die praktische Arbeit als Entwickler stellte sicher, dass der Plan immer mit dem machbaren Zeitrahmen abgestimmt war."
          ]
        }
      ]
    }
  },
  rossari: {
    en: {
      title: "Rossari Biotech Financial Results & Investor Communications Section",
      subtitle: "Establishing a SEBI compliant home for financial reporting of a listed company",
      summary: {
        product: "Rossari Biotech Web Portal",
        feature: "SEBI Compliant Document Repository.",
        role: "Client POC & Lead Developer.",
        timeline: "Quarterly release cycles",
        platform: "Enterprise Web App",
        description: "Rossari, being a SEBI listed chemical manufacturing company, has to make certain financial and disclosure documents public such as earnings reports, major announcements and related filings. I was the main point of contact between client and agency, gathered Rossari requirements, defined section structure and function, and built it hands-on as a developer."
      },
      sections: [
        {
          title: "My Work",
          type: "list",
          intro: "This is not a run-of-the-mill \"assigned a ticket\" feature but something that came out of a client conversation, rather than a spec. I was the main point of contact between Rossari and the agency which meant:",
          items: [
            "Turning a compliance requirement into a real feature. Rossari wanted to publish SEBI documents, so I helped make that requirement into a designed, structured section layout.",
            "It's an owned structure. I designed the hierarchy of year -> quarter to keep everything organized at a single place, rather than scattered or handled ad-hoc.",
            "Building it as a developer. I built the feature myself so the structure was highly performant, modular, and easy to maintain.",
            "This dual role of client-facing requirement owner and builder of it meant there was no gap between what was promised and what shipped."
          ]
        },
        {
          title: "The Issue",
          type: "paragraph",
          content: "Rossari is a listed company and, therefore, has an ongoing obligation to publish financial and disclosure documents for the general public – but their web app did not have a dedicated, structured space for this. With no obvious place to put these documents, the company risked precisely the sort of trouble SEBI disclosure norms are meant to prevent: documents that are published somewhere in theory, but not really easy for investors, analysts or regulators to locate."
        },
        {
          title: "The Answer",
          type: "list",
          intro: "I created and constructed a special part on the real process of financial reporting of a publicly traded company:",
          items: [
            "It is organized by year and then each year is broken down by quarter, which mirrors the natural structure of financial reporting (quarterly earnings, annual filings).",
            "A dropdown for each year, revealing the quarterly breakdown below — so users drill down from broad (year) to specific (quarter) without having to scan a long, flat list of files.",
            "All related document types are grouped together – financial earnings reports, major announcements, and related filings – so a user looking for \"what happened in Q3\" finds all relevant information for that period in one place, instead of having to scour different parts of the site.",
            "A simple upload path on the client side, so Rossari’s team could add new documents every quarter without having to involve agencies every time."
          ]
        },
        {
          title: "Why This Structure",
          type: "paragraph",
          content: "The critical decision was to organize the section based on how financial reporting is actually organized in the real world – fiscal year, then quarter – not a generic document library or flat file list. This is the same basic idea that has driven all my other scheduling and organization work: when you structure information the way the domain actually works, the interface no longer needs to explain itself. If an investor is asking for \"Q2 earnings,\" they don't have to learn the system, the system already maps to the way they think about the question."
        },
        {
          title: "Who This Serves",
          type: "paragraph",
          content: "Ultimately, this section is for the audience for whom a listed company’s disclosures are meant like investors, analysts and SEBI itself as the regulator confirming compliance. Making it super easy to find isn’t just a UX luxury here, it’s close to the actual point of the regulatory requirement, because a disclosure that’s technically online but hard to find doesn’t really do the job."
        },
        {
          title: "What This Tells Us About My Work",
          type: "list",
          items: [
            "Comfortable translating ambiguous, non-technical requirements into a real feature. Rossari’s starting point was a compliance obligation, not a spec. I had to translate that into something buildable.",
            "Structured information around the domain, not around convenience. That year -> quarter hierarchy matches real financial reporting, not some arbitrary file structure.",
            "Complete ownership from conversation to code. I was the point of contact for the client as well as the developer so there was no gap between what was scoped and what was delivered."
          ]
        }
      ]
    },
    de: {
      title: "Rossari Biotech – Finanzergebnisse & Investor Relations",
      subtitle: "Schaffung eines SEBI-konformen Bereichs für die Finanzberichterstattung eines börsennotierten Unternehmens",
      summary: {
        product: "Rossari Biotech Webportal",
        feature: "SEBI-konformes Dokumenten-Repository",
        role: "Kunden-POC & Entwicklungsleitung",
        timeline: "Vierteljährliche Release-Zyklen",
        platform: "Enterprise Web-App",
        description: "Als börsennotiertes Chemieunternehmen muss Rossari bestimmte Finanz- und Offenlegungsdokumente wie Ergebnisberichte und wichtige Ankündigungen öffentlich zugänglich machen. Ich war der Hauptansprechpartner zwischen dem Kunden und der Agentur, erfasste die Anforderungen von Rossari, definierte Struktur und Funktion des Bereichs und setzte ihn als Entwickler um."
      },
      sections: [
        {
          title: "Meine Arbeit",
          type: "list",
          intro: "Dies war keine gewöhnliche Ticket-Aufgabe, sondern das Ergebnis eines direkten Kundengesprächs statt einer starren Vorgabe. Ich war der Hauptansprechpartner für Rossari, was Folgendes umfasste:",
          items: [
            "Eine Compliance-Vorgabe in eine echte Funktion verwandeln: Ich half ihnen dabei, aus dieser Pflicht ein konkretes Konzept für einen strukturierten Bereich zu entwickeln.",
            "Eine maßgeschneiderte Struktur entwerfen: Ich schlug vor, die Informationen nach Jahr und Quartal zu gliedern, damit alle Berichte an einem zentralen Ort gebündelt sind.",
            "Umsetzung als Entwickler: Ich habe die Funktion selbst programmiert, sodass sie modular, performant und leicht zu warten ist.",
            "Diese Doppelrolle als Ansprechpartner für Anforderungen und Entwickler verhinderte Lücken zwischen Konzept und fertigem Produkt."
          ]
        },
        {
          title: "Das Problem",
          type: "paragraph",
          content: "Rossari hat als börsennotiertes Unternehmen die Pflicht, Finanzberichte öffentlich zugänglich zu machen – jedoch fehlte auf ihrer Website ein strukturierter Bereich dafür. Ohne klaren Platz lief das Unternehmen Gefahr, gegen SEBI-Offenlegungsnormen zu verstoßen, da Dokumente zwar theoretisch veröffentlicht, aber für Investoren, Analysten und Regulierungsbehörden schwer auffindbar gewesen wären."
        },
        {
          title: "Die Lösung",
          type: "list",
          intro: "Ich habe einen speziellen Bereich entworfen und implementiert, der den realen Ablauf der Finanzberichterstattung abbildet:",
          items: [
            "Strukturierung nach Jahren und Quartalen, was dem natürlichen Rhythmus der Finanzberichterstattung entspricht.",
            "Dropdown-Menüs für jedes Jahr, die die Quartalsdetails freigeben – so können Nutzer gezielt filtern, statt eine lange Liste scannen zu müssen.",
            "Zusammenfassung aller zusammenhängenden Dokumente an einem Ort. Wer Infos zu „Q3“ sucht, findet alles Relevante gebündelt vor.",
            "Ein einfacher Upload-Pfad für das Rossari-Team, damit dieses Berichte vierteljährlich ohne Hilfe einer Agentur hochladen kann."
          ]
        },
        {
          title: "Warum diese Struktur?",
          type: "paragraph",
          content: "Die entscheidende Entscheidung war, den Bereich nach der realen Struktur der Finanzberichterstattung zu gliedern – nach Geschäftsjahr und Quartal – statt eine flache Ordnerstruktur zu nutzen. Das folgt demselben Prinzip meiner anderen Planungsarbeiten: Wenn Informationen so strukturiert sind, wie die Domäne in der Realität funktioniert, muss die Benutzeroberfläche sich nicht selbst erklären. Wenn ein Investor nach „Q2-Ergebnissen“ sucht, muss er das System nicht erst verstehen – das System spiegelt bereits seine Denkweise wider."
        },
        {
          title: "Wen dies anspricht",
          type: "paragraph",
          content: "Letztlich dient dieser Bereich der Zielgruppe börsennotierter Veröffentlichungen: Investoren, Analysten und der SEBI als Regulierungsbehörde. Das Auffinden so einfach wie möglich zu machen, ist hier kein bloßer Luxus, sondern Kern der Compliance-Pflicht – denn eine Veröffentlichung, die zwar online, aber kaum auffindbar ist, erfüllt ihren Zweck nicht."
        },
        {
          title: "Was dies über meine Arbeit aussagt",
          type: "list",
          items: [
            "Erfahrung im Übersetzen vager, nicht-technischer Anforderungen in konkrete Funktionen: Rossaris Ausgangspunkt war eine regulatorische Pflicht, keine fertige Spezifikation. Ich musste dies in ein umsetzbares Konzept übersetzen.",
            "Strukturierung von Informationen um die Domäne herum, nicht nach Bequemlichkeit: Die Hierarchie von Jahr → Quartal entspricht dem echten Ablauf der Finanzberichterstattung.",
            "Umfassende Verantwortung von der Absprache bis zum Code: Da ich Ansprechpartner und Entwickler in Personalunion war, gab es keine Missverständnisse zwischen Absprache und Umsetzung."
          ]
        }
      ]
    }
  }
};
