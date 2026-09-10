/* =========================================================================
   Propuesta Académica — Colegio Santo Tomás
   CONTENIDO DE LA PROPUESTA

   Este es el único archivo que hay que tocar para cambiar los textos.
   Editalo desde GitHub: abrilo, tocá el lápiz, cambiá lo que quieras
   y guardá con "Commit changes". En dos minutos se ve en la web.

   Reglas para que no se rompa:
   - El texto va siempre entre comillas dobles: "así".
   - Cada línea termina en coma, menos la última de cada bloque.
   - Si el texto lleva comillas dobles adentro, escribilas como \"
   - Las listas van entre corchetes [ ] y los bloques entre llaves { }.

   Si algo sale mal, la página aparece en blanco: deshacé el último cambio
   desde el historial del archivo en GitHub y vuelve a andar.
   ========================================================================= */

const BASE = {
  "escuela": "Colegio Santo Tomás",
  "barrio": "Barrio Lambertuchi · Belén de Escobar",
  "titulo": "Propuesta Académica",
  "anio": "2027",
  "fotoPortada": "assets/fotos/portada.jpg",
  "verso": "Partimos de una visión de la innovación educativa que se construye sobre lo que ya hacemos y tenemos, valorando aquello que es importante conservar y buscando que cada una de nuestras clases se transforme en un espacio propicio para la aventura del pensamiento.",
  "versoObra": "Las Preguntas Educativas entran a las aulas",
  "versoAutor": "Melina Furman y María Emilia Larsen",
  "mision": {
    "titulo": "Nuestra misión: educación de calidad",
    "parrafos": [
      "Los profesionales de la educación que formamos parte del Colegio Santo Tomás tenemos como misión brindar una Educación de Calidad donde el bienestar en comunidad, las distintas formas de enseñar y aprender, los recursos didácticos y las tecnologías educativas son condición necesaria para lograr más y mejores aprendizajes."
    ]
  },
  "calidades": {
    "titulo": "Las tres calidades",
    "items": [
      {
        "foto": "assets/fotos/calidad-humana.jpg",
        "titulo": "La calidad humana",
        "texto": "El desarrollo del estudiante no es solo académico: también es emocional, social, ético y ciudadano. Cuidamos el clima de convivencia, prevenimos el acoso escolar y sostenemos el bienestar de estudiantes y docentes."
      },
      {
        "foto": "assets/fotos/calidad-aprendizajes.jpg",
        "titulo": "La calidad de los aprendizajes",
        "texto": "Miramos los resultados, pero también los procesos: la eficacia de los métodos de enseñanza, la evaluación formativa, y el desarrollo del pensamiento crítico, la resolución de problemas, la creatividad y la colaboración."
      },
      {
        "foto": "assets/fotos/calidad-recursos.jpg",
        "titulo": "La calidad de los recursos",
        "texto": "La selección, la formación y el bienestar del equipo docente, la infraestructura y las herramientas digitales son las que sostienen todo lo anterior."
      }
    ]
  },
  "compromiso": {
    "titulo": "Nuestro compromiso",
    "parrafos": [
      "Los docentes y profesionales que formamos parte del Colegio Santo Tomás nos comprometemos a desplegar procesos educativos que favorezcan la inclusión de niños y niñas en su diversidad, considerando todas sus diferencias, por medio de acciones educativas enmarcadas en los valores fundamentales de igualdad y libertad.",
      "A su vez, buscamos generar prácticas institucionales que promuevan la solidaridad y el respeto mutuo, que posibiliten la aproximación de los niños y niñas a la heterogeneidad, para asegurar el éxito en los aprendizajes de todos nuestros y nuestras estudiantes."
    ]
  },
  "pedagogia": {
    "titulo": "Cómo enseñamos",
    "intro": "Nuestra propuesta pedagógica se apoya en cuatro decisiones.",
    "items": [
      {
        "titulo": "El bienestar escolar es la base",
        "texto": "Nadie aprende bien donde no se siente cuidado. El clima de convivencia no es un tema aparte del aprendizaje: es su condición. La educación emocional es, además, un área que se enseña, con objetivos propios en cada año."
      },
      {
        "titulo": "Una tarea para cada estudiante",
        "texto": "Personalizamos y adecuamos las propuestas según lo que cada uno necesita."
      },
      {
        "titulo": "Tecnología con sentido",
        "texto": "Las herramientas digitales cambian las formas de enseñar y de aprender. La programación, la robótica, la impresión 3D y el aula virtual forman parte del trabajo cotidiano, no de una clase suelta."
      },
      {
        "titulo": "Aprender haciendo",
        "texto": "La experimentación y la vivencia son la manera de comprobar que lo aprendido sirve. Las salidas educativas, los eventos y actos escolares y las muestras artísticas son parte fundamental del año escolar."
      }
    ]
  },
  "recursos": {
    "titulo": "Recursos para aprender",
    "intro": "Con qué cuentan los estudiantes dentro del aula y fuera de ella.",
    "items": [
      {
        "titulo": "En cada aula",
        "texto": "Televisor de 50 pulgadas, pizarra blanca, manuales escolares e infografías de los temas que se están trabajando."
      },
      {
        "titulo": "Equipamiento digital",
        "texto": "Notebooks para el trabajo en clase y Google Classroom como aula virtual, donde quedan las consignas y las entregas."
      },
      {
        "titulo": "Robótica e impresión 3D",
        "texto": "Kits de robótica del programa Smart Team e impresora 3D: los estudiantes programan, diseñan e imprimen sus propios objetos."
      },
      {
        "titulo": "Para experimentar",
        "texto": "Microscopio digital, huerta escolar y elementos de educación física."
      }
    ],
    "plataformas": [
      {
        "nombre": "Google Workspace",
        "logo": "assets/logos/google-workspace.png"
      },
      {
        "nombre": "Smart Team",
        "logo": "assets/logos/smart-team.png"
      },
      {
        "nombre": "PATH Examinations",
        "logo": "assets/logos/path-examinations.png"
      },
      {
        "nombre": "Kapelusz",
        "logo": "assets/logos/kapelusz.png"
      },
      {
        "nombre": "Aprendo Leyendo",
        "logo": "assets/logos/aprendo-leyendo.png"
      }
    ]
  },
  "equipo": {
    "foto": "assets/fotos/equipo.jpg",
    "titulo": "Nuestro equipo de trabajo",
    "intro": "El equipo que forma parte del Colegio Santo Tomás se caracteriza por:",
    "items": [
      {
        "titulo": "El trato cordial entre docentes y estudiantes",
        "texto": "Consideramos que para cualquier proceso de enseñanza y aprendizaje es necesario un vínculo sostenido entre el contenido, el estudiante, sus docentes y la familia a la cuál pertenece."
      },
      {
        "titulo": "Ser contemplativos ante las sugerencias de las familias",
        "texto": "Es fundamental para el desarrollo del niño/a el acuerdo entre la familia y la escuela."
      },
      {
        "titulo": "El profesionalismo a la hora de la enseñanza",
        "texto": "Somos docentes que buscamos la formación profesional continua para lograr prácticas educativas modernas, personalizadas y efectivas."
      },
      {
        "titulo": "La comunicación asertiva",
        "texto": "Creemos que comunicar las situaciones a la persona correcta en el momento indicado colaboran a reducir las controversias y a generar un mejor clima entre los miembros de la comunidad escolar."
      }
    ]
  },
  "niveles": {
    "primaria": {
      "nombre": "Nivel Primario",
      "diegep": "DIEGEP 8869",
      "arancel": {
        "rotulo": "Cuota mensual",
        "monto": "$441.000",
        "leyenda": "Jornada completa de 8 a 15hs: turno mañana y turno tarde.",
        "vigencia": "Valor vigente a septiembre de 2026."
      },
      "horario": {
        "foto": "assets/fotos/jornada.jpg",
        "titulo": "Horario",
        "destacado": "La jornada escolar dura 7 horas, de 8 a 15hs.",
        "aclaracion": "Dentro de la jornada están la educación curricular obligatoria, el espacio de transición del comedor escolar y las asignaturas extracurriculares.",
        "parrafos": [
          "El objetivo de una Jornada Completa no es solamente asistir más tiempo a la escuela, sino realizar en el mismo espacio actividades deportivas, recreativas y artísticas junto a otros niños y niñas.",
          "Durante el turno mañana, los estudiantes asisten a las materias curriculares obligatorias del Nivel Primario"
        ]
      },
      "curriculares": {
        "titulo": "Materias curriculares",
        "intro": "Las áreas obligatorias del Nivel Primario, que se cursan durante el turno mañana.",
        "lista": [
          "Prácticas del Lenguaje",
          "Matemática",
          "Ciencias Naturales",
          "Ciencias Sociales",
          "Educación Física",
          "Educación Artística",
          "Inglés",
          "Tecnología",
          "Educación Emocional"
        ]
      },
      "extracurriculares": {
        "titulo": "Materias extracurriculares",
        "intro": "El turno tarde permite que los niños y niñas realicen actividades orientadas al arte, las nuevas tecnologías, la lengua extranjera, el medio ambiente y el deporte.",
        "items": [
          {
            "foto": "assets/fotos/ingles.jpg",
            "titulo": "Academia de Inglés",
            "texto": "La enseñanza del idioma es esencial en este mundo globalizado. Aprendemos inglés desde lo cotidiano, con un rol muy importante para la comunicación oral. Además, los niños rinden exámenes internacionales de la mano de PATH Examinations."
          },
          {
            "foto": "assets/fotos/deportes.jpg",
            "titulo": "Deportes",
            "texto": "Los niños y niñas realizan básquet y fútbol como disciplinas deportivas, teniendo como marco el juego reglado, la competencia sana y el entrenamiento necesario para generar habilidades en cada deporte."
          },
          {
            "foto": "assets/fotos/artes.jpg",
            "titulo": "Artes",
            "texto": "Las expresiones artísticas son tan diversas como las personas; por eso, durante el turno tarde se brindan los talleres de Creatividad y Folklore."
          },
          {
            "foto": "assets/fotos/robotica.jpg",
            "titulo": "Informática y Robótica",
            "texto": "Resolver problemas en situaciones cotidianas mediante el uso de la tecnología es el principal objetivo de este taller, que pone en juego la programación, la robótica y la impresión 3D."
          }
        ]
      },
      "uniforme": {
        "titulo": "Uniforme escolar",
        "texto": "El uniforme forma parte de nuestra identidad como escuela, además de ser de excelente calidad, con un diseño moderno y cómodo para que los niños y niñas realicen actividades escolares.",
        "fotos": [
          "assets/fotos/uniforme-primaria-3.jpg"
        ],
        "prendas": [
          "Chomba",
          "Pantalón",
          "Campera",
          "Buzo",
          "Remera",
          "Bermuda"
        ]
      },
      "comunicacion": {
        "titulo": "Comunicación",
        "intro": "Nos comunicamos con las familias a través de Handing, la plataforma institucional donde se envían comunicados, autorizaciones y la información sobre la trayectoria de cada estudiante.",
        "plataforma": {
          "nombre": "Handing",
          "logo": "assets/logos/handing.png"
        },
        "items": [
          "Cada área define hasta tres objetivos por año, que se comunican al comienzo del ciclo.",
          "Los objetivos no se ponderan entre sí: ninguna materia vale más que otra.",
          "Al cierre del año se emite el RITE, el registro provincial de trayectoria educativa."
        ]
      }
    },
    "secundaria": {
      "nombre": "Nivel Secundario",
      "diegep": "DIEGEP 9285",
      "arancel": {
        "rotulo": "Cuota mensual",
        "monto": "$459.000",
        "leyenda": "A completar: qué incluye la cuota del Nivel Secundario.",
        "vigencia": "Valor vigente a septiembre de 2026."
      },
      "horario": {
        "foto": "assets/fotos/jornada-secundaria.jpg",
        "titulo": "Horario",
        "destacado": "A completar: duración de la jornada del Nivel Secundario.",
        "aclaracion": "A completar: qué incluye la jornada.",
        "parrafos": [
          "A completar: cómo se organiza el día en el Nivel Secundario."
        ]
      },
      "curriculares": {
        "titulo": "Materias curriculares",
        "intro": "Las áreas obligatorias del Nivel Secundario.",
        "lista": [
          "Prácticas del Lenguaje",
          "Matemática",
          "Ciencias Naturales",
          "Ciencias Sociales",
          "Educación Física",
          "Educación Artística",
          "Inglés",
          "Tecnología",
          "Educación Emocional"
        ]
      },
      "extracurriculares": {
        "titulo": "Materias extracurriculares",
        "intro": "A completar: propuesta extracurricular del Nivel Secundario.",
        "items": []
      },
      "uniforme": {
        "titulo": "Uniforme escolar",
        "texto": "El uniforme forma parte de nuestra identidad como escuela, además de ser de excelente calidad, con un diseño moderno y cómodo para que los niños y niñas realicen actividades escolares.",
        "fotos": [
          "assets/fotos/uniforme-secundaria-1.jpg"
        ],
        "prendas": [
          "Chomba",
          "Pantalón",
          "Campera",
          "Buzo",
          "Remera",
          "Bermuda"
        ]
      },
      "comunicacion": {
        "titulo": "Comunicación",
        "intro": "Nos comunicamos con las familias a través de Handing, la plataforma institucional donde se envían comunicados, autorizaciones y la información sobre la trayectoria de cada estudiante.",
        "plataforma": {
          "nombre": "Handing",
          "logo": "assets/logos/handing.png"
        },
        "items": [
          "A completar."
        ]
      }
    }
  },
  "comedor": {
    "titulo": "Comedor escolar",
    "intro": "El comedor transcurre de 12 a 13hs, entre la jornada curricular del turno mañana y las materias extracurriculares del turno tarde. Los niños y niñas pueden:",
    "items": [
      "Traer su vianda al ingresar a la escuela, que será servida caliente al momento del almuerzo.",
      "Adquirir el servicio de vianda escolar que ofrece el kiosco de la escuela."
    ]
  },
  "materiales": {
    "titulo": "Materiales escolares",
    "parrafos": [
      "Los materiales escolares forman parte de la actividad cotidiana de aprendizaje.",
      "Durante el año lectivo los docentes solicitan la compra de libros de literatura, manuales escolares, cuadernillos impresos, componentes de robótica, materiales deportivos y/o elementos de librería."
    ],
    "aviso": "La compra de dichos materiales es una responsabilidad de las familias y su adquisición es obligatoria."
  },
  "valores": {
    "titulo": "Valores",
    "intro": [
      "El precio mensual del servicio es único por nivel e incluye la jornada del turno mañana y del turno tarde.",
      "Todos los valores expresados son mensuales, con vencimiento el día 10 de cada mes. Si el estudiante asiste solamente a la jornada obligatoria, de 8 a 12hs, abona el mismo arancel."
    ],
    "puntos": [
      "Se abona una cuota de inscripción similar al valor de la cuota actual.",
      "No se abona cuota doble, cuota de mantenimiento ni cuota aguinaldo.",
      "Se abonan 11 cuotas consecutivas, de febrero a diciembre.",
      "Las familias que ingresan por primera vez abonan por adelantado la inscripción en concepto de reserva de vacante."
    ],
    "aviso": "Dentro del valor mensual no están incluidos el comedor escolar, el material didáctico (libros, impresiones, útiles escolares) ni el uniforme escolar. Consultá por descuentos por pagos adelantados.",
    "beneficioTitulo": "Beneficio por pago en término",
    "beneficioTexto": "Las familias que abonan la cuota mensual dentro del vencimiento, del 1 al 10 de cada mes, tienen bonificado un porcentaje de la inscripción para el año siguiente."
  },
  "pagos": {
    "titulo": "Medios de pago",
    "items": [
      "Transferencia o depósito en cuenta bancaria, enviando el comprobante de la operación.",
      "Efectivo en la escuela."
    ]
  },
  "docs": {
    "titulo": "Documentación a presentar",
    "items": [
      "DNI del niño/a actualizado",
      "Partida de nacimiento del niño/a",
      "DNI de madre/padre",
      "Servicio a nombre de madre/padre",
      "Copia del recibo de sueldo de madre/padre",
      "DNI de adultos autorizados para retirar al niño/a",
      "Libreta de vacunas obligatorias y carnet de obra social",
      "Ficha de salud",
      "Constancia de alumno regular de Nivel Inicial o Nivel Primario, según corresponda",
      "Boletín o RITE de calificaciones de Nivel Primario, o último informe del Nivel Inicial",
      "Libre deuda, si proviene de una escuela privada",
      "Legajo completo del estudiante, una vez emitido el pase escolar",
      "Autorización de uso de imagen",
      "Formulario de preinscripción",
      "Contrato de servicio educativo"
    ]
  },
  "inscripcion": {
    "titulo": "¿Cómo inscribir?",
    "intro": "Las familias interesadas en inscribir a su hijo o hija siguen estos pasos:",
    "pasos": [
      "Comunicarse por cualquiera de nuestros canales de contacto y solicitar una entrevista virtual.",
      "Una vez realizada la entrevista, visitar la escuela de forma presencial y completar el formulario de inscripción.",
      "Presentar la documentación correspondiente del niño/a y abonar la reserva de vacante.",
      "Con la documentación y el formulario completos, se procede a la inscripción definitiva del estudiante."
    ]
  },
  "contacto": {
    "titulo": "Contacto",
    "direccion": "Las Magnolias 2546, esquina Orquídeas",
    "email": "inscripciones@santotomas.ar",
    "telefono": "0348 4422797",
    "whatsapp": "+54 3484 311457",
    "web": "www.santotomas.ar",
    "instagram": "escuelasantotomas.escobar",
    "facebook": "santotomas.escobar"
  },
  "verano": {
    "titulo": "Talleres de verano",
    "mes": "Febrero 2027",
    "actividades": [
      "Ludoteca",
      "Manualidades",
      "Deportes",
      "Actividades recreativas"
    ],
    "horario": "9 a 12hs",
    "nota": "Para todas las edades"
  },
  "galeria": {
    "titulo": "La escuela por dentro",
    "intro": "Momentos de la vida cotidiana en el Santo Tomás.",
    "fotos": [
      "assets/fotos/galeria-1.jpg",
      "assets/fotos/galeria-2.jpg",
      "assets/fotos/galeria-3.jpg",
      "assets/fotos/galeria-4.jpg"
    ]
  },
  "cierre": {
    "frase": "Lo esencial es invisible a los ojos",
    "autor": "Antoine de Saint-Exupéry"
  }
};
