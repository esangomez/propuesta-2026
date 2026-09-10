/* ==========================================================================
   COLEGIO SANTO TOMÁS — PROPUESTA 2027
   Archivo: contenido.js
   
   GUÍA PARA EDITAR DIRECTAMENTE EN GITHUB:
   - Todo texto va entre comillas dobles: "texto".
   - Cada línea dentro de un bloque termina con coma (,), excepto la última.
   - Si necesitás poner comillas dentro de un texto, usá barra invertida: \"ejemplo\".
   - Los cambios que hagas acá se reflejan en la página web automáticamente.
   ========================================================================== */

const BASE = {
  // ------------------------------------------------------------------------
  // DATOS GENERALES Y PORTADA
  // ------------------------------------------------------------------------
  institucion: "Colegio Santo Tomás",
  subtitulo: "Propuesta Académica y Formativa",
  cicloLectivo: "Ciclo Lectivo 2027",
  lema: "Cultura · Territorio · Ciudadanía",
  
  citaDestacada: {
    texto: "La educación es el camino para que cada estudiante sea protagonista consciente de su propio proyecto de vida, con espíritu crítico, alegría y compromiso con su comunidad.",
    autor: "Equipo Directivo y Pedagógico"
  },

  mision: {
    titulo: "Nuestra Misión",
    descripcion: "Brindamos educación de calidad para que cada día más estudiantes puedan potenciar sus capacidades emocionales, cognitivas y físicas. Diseñamos nuestra propuesta pedagógica buscando que cada estudiante sea protagonista de su proyecto de vida y formamos jóvenes:",
    pilares: [
      "Con conocimientos sólidos, creatividad, curiosidad y capacidad constante de aprender.",
      "Con espíritu crítico, reflexivo y vocación de superación personal.",
      "Seguros de sí mismos y comprometidos con el cuidado propio y el de su entorno.",
      "Con fuertes vínculos de compañerismo, empatía y compromiso con el bien común."
    ]
  },

  identidadInstitucional: [
    {
      titulo: "Comunidad de Aprendizaje",
      detalle: "Acompañamiento cercano a cada familia y trayectoria escolar personalizada."
    },
    {
      titulo: "Cultura Digital e Innovación",
      detalle: "Alfabetización digital integral, robótica, programación y pensamiento computacional."
    },
    {
      titulo: "La Comunicación Asertiva",
      detalle: "Espacios de diálogo, resolución reflexiva de conflictos y construcción de acuerdos comunitarios."
    },
    {
      titulo: "Valores y Ciudadanía",
      detalle: "Prácticas cotidianas guiadas por la solidaridad, el respeto y la inclusión."
    }
  ],

  // ------------------------------------------------------------------------
  // NIVELES EDUCATIVOS
  // ------------------------------------------------------------------------
  niveles: {
    primaria: {
      identificador: "primaria",
      nombre: "Nivel Primario",
      dependencia: "DIEGEP N° 8869",
      turnos: "Turno Mañana (07:50 a 12:00 hs) · Turno Tarde (12:50 a 17:00 hs) · Jornada Extendida optativa",
      presentacion: "En Nivel Primario priorizamos la alfabetización plena, el desarrollo del pensamiento lógico y científico, y la exploración artística y corporal.",
      ejesPedagogicos: [
        "Prácticas del Lenguaje, Matemática y Ciencias con enfoque constructivo y reflexivo.",
        "Laboratorio de Ciencias, Informática y Robótica Educativa semanal.",
        "Inglés como lengua extranjera orientado a la comunicación activa.",
        "Educación Física, deportes y desarrollo de hábitos de vida saludable.",
        "Arte, música y expresión corporal integrados a proyectos áulicos."
      ],
      talleresOptativos: [
        "Taller de Robótica y Electrónica con Arduino / Bloques",
        "Taller de Ajedrez Escolar y Estrategia",
        "Taller de Arte y Creación Visual",
        "Espacio de Apoyo y Fortalecimiento Pedagógico"
      ]
    },

    secundaria: {
      identificador: "secundaria",
      nombre: "Nivel Secundario",
      dependencia: "DIEGEP N° 9285",
      turnos: "Turno Mañana (07:30 a 13:00 / contraturno deportivo y talleres)",
      presentacion: "Nuestra propuesta de Secundaria prepara a las y los estudiantes para la continuidad en estudios superiores y el mundo del trabajo, consolidando autonomía académica y pensamiento crítico.",
      ejesPedagogicos: [
        "Plan de estudios oficial de Educación Secundaria Orientada.",
        "Metodologías ágiles, proyectos integrados por capacidades y resolución de problemas reales.",
        "Programación, desarrollo web y cultura digital aplicada a la producción.",
        "Formación en ciudadanía crítica, derechos, ecología y compromiso territorial.",
        "Orientación vocacional temprana y articulación con institutos superiores y universidades."
      ],
      talleresOptativos: [
        "Laboratorio de Fabricación Digital y Prototipado 3D",
        "Club de Debate, Ciencias Sociales y Modelo ONU",
        "Desarrollo de Software y Emprendimiento Tecnológico",
        "Entrenamiento Deportivo Intercolegial"
      ]
    }
  },

  // ------------------------------------------------------------------------
  // ARANCELES Y VALORES DE REFERENCIA (SEPARADOS POR NIVEL)
  // ------------------------------------------------------------------------
  aranceles: {
    aclaracionImportante: "Los valores aquí informados corresponden al importe de referencia base ($450.000) y se actualizan mensualmente conforme a las pautas y resoluciones arancelarias de la DIEGEP.",
    
    primaria: {
      titulo: "Aranceles — Nivel Primario (DIEGEP 8869)",
      reservaVacante: "$450.000",
      cuotaReferencia: "$450.000",
      detalleCuota: "Valor cuota mensual de referencia para Ciclo Lectivo 2027. Monto sujeto a adecuaciones mensuales normadas.",
      conceptosIncluidos: [
        "Jornada pedagógica curricular oficial obligatoria",
        "Proyectos escolares transversales y uso de plataformas educativas",
        "Seguro de responsabilidad civil y emergencias médicas en el establecimiento"
      ]
    },

    secundaria: {
      titulo: "Aranceles — Nivel Secundario (DIEGEP 9285)",
      reservaVacante: "$450.000",
      cuotaReferencia: "$450.000",
      detalleCuota: "Valor cuota mensual de referencia para Ciclo Lectivo 2027. Monto sujeto a adecuaciones mensuales normadas.",
      conceptosIncluidos: [
        "Plan curricular de Educación Secundaria Orientada",
        "Talleres de laboratorio tecnológico, campus virtual institucional y contraturnos",
        "Seguro escolar y cobertura de emergencias médicas en actividades institucionales"
      ]
    },

    pautasCobranza: [
      "Período de pago habitual: del 1 al 10 de cada mes calendario.",
      "Canales habilitados: Débito automático, transferencia bancaria, Mercado Pago y botón de pago electrónico.",
      "Bonificaciones arancelarias especiales a partir del segundo hermano matriculado."
    ]
  },

  // ------------------------------------------------------------------------
  // UNIFORMES REGLAMENTARIOS (SEPARADOS POR NIVEL)
  // ------------------------------------------------------------------------
  uniformes: {
    primaria: {
      titulo: "Uniforme Oficial — Nivel Primario",
      diario: [
        "Chomba blanca o azul con cuello institucional y escudo bordado/estampado del Colegio.",
        "Pantalón de vestir azul marino escolar / pollera pantalón reglamentaria.",
        "Buzo azul marino escote redondo o campera institucional de abrigo.",
        "Zapatillas escolares negras o blancas discretas con medias azules o blancas."
      ],
      educacionFisica: [
        "Remera deportiva blanca o azul institucional de Primaria.",
        "Pantalón jogger o short azul marino con identificación del Colegio.",
        "Zapatillas deportivas adecuadas para la práctica gimnástica y recreativa."
      ],
      recomendacion: "Todas las prendas deben estar debidamente marcadas con nombre, apellido y curso del alumno."
    },

    secundaria: {
      titulo: "Uniforme Oficial — Nivel Secundario",
      diario: [
        "Chomba institucional distintiva de Nivel Secundario con logo oficial.",
        "Pantalón azul marino o negro reglamentario de corte recto (sin roturas).",
        "Buzo cerrado o campera institucional con escudo propio de Secundaria.",
        "Calzado cerrado cómodo o zapatillas de color uniforme."
      ],
      educacionFisica: [
        "Remera técnica deportiva institucional de Secundaria.",
        "Pantalón de entrenamiento deportivo / jogger azul marino o negro institucional.",
        "Calzado deportivo adecuado para actividad física y disciplinas deportivas de contraturno."
      ],
      recomendacion: "Prendas rotuladas. Para actividades especiales de laboratorio o taller técnico se informará el equipo de protección necesario."
    }
  },

  // ------------------------------------------------------------------------
  // ADMISIONES, DOCUMENTACIÓN Y CONTACTO
  // ------------------------------------------------------------------------
  inscripcion: {
    titulo: "Pasos para la Inscripción",
    requisitosDocumentacion: [
      "Fotocopia de DNI del estudiante y de ambos progenitores/tutores.",
      "Fotocopia de Partida de Nacimiento legalizada.",
      "Certificado de vacunación oficial al día y ficha médica de aptitud física.",
      "Constancia de libre deuda y certificado de alumno regular del establecimiento de origen (en pases).",
      "Informe pedagógico o boletín de calificaciones del ciclo lectivo anterior."
    ],
    etapas: [
      "1. Solicitud de entrevista pedagógica institucional completando el formulario de contacto.",
      "2. Encuentro con el equipo de orientación y directivo para conocer el Proyecto Educativo.",
      "3. Entrega de legajo con la documentación obligatoria completa.",
      "4. Formalización y abono de la Reserva de Vacante para asegurar el cupo del ciclo 2027."
    ]
  },

  contacto: {
    direccion: "Las Magnolias 2546 (1625DKH), Barrio Lambertuchi, Belén de Escobar",
    telefonoWhatsApp: "+54 9 348 442-2797",
    telefonoFijo: "(0348) 422-6216",
    emailInscripciones: "inscripciones@santotomas.ar",
    emailDireccion: "direccionprimaria@santotomas.ar",
    sitioWeb: "https://www.santotomas.ar",
    instagram: "@escuelasantotomas.escobar",
    horarioAtencion: "Lunes a viernes de 08:00 a 16:00 hs"
  },

  preguntasFrecuentes: [
    {
      pregunta: "¿Cómo se actualizan los aranceles durante el año?",
      respuesta: "Las cuotas mensuales toman como base el valor de referencia informado y se ajustan mes a mes de acuerdo a las autorizaciones y normativas vigentes emitidas por la DIEGEP para la Provincia de Buenos Aires."
    },
    {
      pregunta: "¿Qué incluye la Jornada Extendida en Primaria?",
      respuesta: "Incluye comedor o supervisión de vianda, acompañamiento en tareas escolares y talleres formativos rotativos de arte, ciencia, deporte y tecnología."
    },
    {
      pregunta: "¿Hay cupos limitados por aula?",
      respuesta: "Sí, mantenemos cupos reducidos para asegurar un seguimiento pedagógico cercano y personalizado de cada estudiante."
    }
  ]
};
