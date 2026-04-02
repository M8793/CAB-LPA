const tema1 = {
  titulo: "TEMA 1 — La Constitución Española de 1978",
  preguntas: [
    {
      id: 1,
      pregunta: "Según el artículo 1 de la Constitución, ¿cuál es la forma política del Estado español?",
      opciones: [
        { texto: "Una República federal con autonomía plena de sus territorios", correcta: false },
        { texto: "Una Monarquía parlamentaria", correcta: true, justificacion: "El art. 1.3 CE establece expresamente que 'La forma política del Estado español es la Monarquía parlamentaria'." },
        { texto: "Un Estado confederal con soberanía compartida entre nación y regiones", correcta: false }
      ]
    },
    {
      id: 2,
      pregunta: "El artículo 1.2 de la Constitución establece que la soberanía nacional reside en:",
      opciones: [
        { texto: "Las Cortes Generales como representantes del pueblo", correcta: false },
        { texto: "El conjunto de poderes del Estado de forma compartida", correcta: false },
        { texto: "El pueblo español, del que emanan los poderes del Estado", correcta: true, justificacion: "El art. 1.2 CE señala literalmente: 'La soberanía nacional reside en el pueblo español, del que emanan los poderes del Estado'." }
      ]
    },
    {
      id: 3,
      pregunta: "¿Cuál de los siguientes NO es un valor superior del ordenamiento jurídico español reconocido en el art. 1.1 CE?",
      opciones: [
        { texto: "El pluralismo político", correcta: false },
        { texto: "La solidaridad territorial", correcta: true, justificacion: "Los valores superiores son libertad, justicia, igualdad y pluralismo político (art. 1.1). La solidaridad, aunque mencionada en el art. 2, no figura como valor superior del ordenamiento." },
        { texto: "La igualdad", correcta: false }
      ]
    },
    {
      id: 4,
      pregunta: "Respecto a la bandera de España, el artículo 4 CE establece que:",
      opciones: [
        { texto: "Está formada por tres franjas horizontales roja, amarilla y roja, siendo la amarilla de doble anchura que cada una de las rojas", correcta: true, justificacion: "El art. 4.1 CE describe la bandera con exactamente estas proporciones: franja amarilla del doble de anchura que cada franja roja." },
        { texto: "Está formada por tres franjas iguales en anchura de color rojo, amarillo y rojo", correcta: false },
        { texto: "Está formada por tres franjas horizontales iguales, siendo la central amarilla y las laterales rojas", correcta: false }
      ]
    },
    {
      id: 5,
      pregunta: "Según el art. 3 CE, ¿qué deber tienen los españoles respecto al castellano?",
      opciones: [
        { texto: "Tienen el deber de conocerlo y el derecho a usarlo, pero pueden renunciar a dicho deber mediante declaración formal", correcta: false },
        { texto: "Tienen únicamente el derecho a usarlo, sin que exista obligación constitucional de conocerlo", correcta: false },
        { texto: "Tienen el deber de conocerlo y el derecho a usarlo, sin posibilidad de renuncia", correcta: true, justificacion: "El art. 3.1 CE establece que 'Todos los españoles tienen el deber de conocerla y el derecho a usarla', siendo un deber constitucional irrenunciable." }
      ]
    },
    {
      id: 6,
      pregunta: "Según el artículo 6 CE, ¿qué requisito deben cumplir los partidos políticos en cuanto a su organización interna?",
      opciones: [
        { texto: "Deben ser plurales, representativos y con implantación territorial mínima en varias comunidades autónomas", correcta: false },
        { texto: "Su estructura interna y funcionamiento deberán ser democráticos", correcta: true, justificacion: "El art. 6 CE exige que la estructura interna y el funcionamiento de los partidos políticos sean democráticos, garantizando así la democracia intrapartidaria." },
        { texto: "Deben presentar candidatos en al menos la mitad de las circunscripciones electorales para ser reconocidos", correcta: false }
      ]
    },
    {
      id: 7,
      pregunta: "Las Fuerzas Armadas, según el artículo 8 CE, están constituidas por:",
      opciones: [
        { texto: "El Ejército de Tierra, la Armada, el Ejército del Aire y los Cuerpos de Seguridad del Estado", correcta: false },
        { texto: "El Ejército de Tierra, la Armada y el Ejército del Aire", correcta: true, justificacion: "El art. 8.1 CE enumera taxativamente las tres ramas: Ejército de Tierra, la Armada y el Ejército del Aire, sin incluir cuerpos de seguridad." },
        { texto: "El Ejército de Tierra, la Armada, el Ejército del Aire y la Guardia Civil en su función de policía militar", correcta: false }
      ]
    },
    {
      id: 8,
      pregunta: "¿Cuál de los siguientes principios garantizados en el art. 9.3 CE se refiere a la imposibilidad de aplicar retroactivamente normas sancionadoras desfavorables?",
      opciones: [
        { texto: "La seguridad jurídica", correcta: false },
        { texto: "La jerarquía normativa", correcta: false },
        { texto: "La irretroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales", correcta: true, justificacion: "El art. 9.3 CE garantiza expresamente la irretroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales, principio distinto a la seguridad jurídica, aunque relacionado." }
      ]
    },
    {
      id: 9,
      pregunta: "Según el artículo 10.2 CE, las normas relativas a derechos fundamentales se interpretarán de conformidad con:",
      opciones: [
        { texto: "La jurisprudencia del Tribunal Europeo de Derechos Humanos y los convenios del Consejo de Europa ratificados por España", correcta: false },
        { texto: "La Declaración Universal de Derechos Humanos y los tratados internacionales sobre las mismas materias ratificados por España", correcta: true, justificacion: "El art. 10.2 CE establece que la interpretación se hará 'de conformidad con la Declaración Universal de Derechos Humanos y los tratados y acuerdos internacionales sobre las mismas materias ratificados por España'." },
        { texto: "Los tratados de la Unión Europea y la Carta de Derechos Fundamentales de la UE", correcta: false }
      ]
    },
    {
      id: 10,
      pregunta: "En materia de doble nacionalidad, el artículo 11 CE permite concertar tratados con:",
      opciones: [
        { texto: "Cualquier Estado con el que España mantenga relaciones diplomáticas plenas y recíprocas", correcta: false },
        { texto: "Los países iberoamericanos o aquellos que hayan tenido o tengan una particular vinculación con España", correcta: true, justificacion: "El art. 11.3 CE limita la posibilidad de tratados de doble nacionalidad a 'los países iberoamericanos o con aquellos que hayan tenido o tengan una particular vinculación con España'." },
        { texto: "Exclusivamente los países iberoamericanos de habla hispana y Portugal", correcta: false }
      ]
    },
    {
      id: 11,
      pregunta: "¿A qué edad se alcanza la mayoría de edad según el artículo 12 CE?",
      opciones: [
        { texto: "A los dieciséis años, pudiendo ser modificada por ley orgánica en supuestos especiales", correcta: false },
        { texto: "A los dieciocho años", correcta: true, justificacion: "El art. 12 CE es claro y taxativo: 'Los españoles son mayores de edad a los dieciocho años', sin excepciones constitucionales." },
        { texto: "A los diecisiete años para efectos civiles y a los dieciocho para efectos políticos", correcta: false }
      ]
    },
    {
      id: 12,
      pregunta: "Según el artículo 14 CE, el principio de igualdad ante la ley prohíbe discriminaciones por razón de:",
      opciones: [
        { texto: "Nacimiento, raza, sexo, religión, opinión o cualquier otra condición o circunstancia personal o social", correcta: true, justificacion: "El art. 14 CE enumera expresamente: nacimiento, raza, sexo, religión, opinión o cualquier otra condición o circunstancia personal o social, estableciendo una cláusula abierta al final." },
        { texto: "Nacimiento, etnia, sexo, ideología, religión o filiación política exclusivamente", correcta: false },
        { texto: "Raza, sexo, religión y origen nacional como categorías tasadas y cerradas", correcta: false }
      ]
    },
    {
      id: 13,
      pregunta: "Respecto al derecho a la vida reconocido en el art. 15 CE, ¿qué establece la Constitución sobre la pena de muerte?",
      opciones: [
        { texto: "Queda abolida la pena de muerte en todos los casos sin excepción posible, incluso en tiempo de guerra", correcta: false },
        { texto: "Queda abolida salvo lo que puedan disponer las leyes penales militares para tiempos de guerra", correcta: true, justificacion: "El art. 15 CE establece la abolición de la pena de muerte pero con la salvedad de 'lo que puedan disponer las leyes penales militares para tiempos de guerra', una excepción relevante." },
        { texto: "Solo se admite la pena de muerte por ley orgánica aprobada por mayoría absoluta del Congreso", correcta: false }
      ]
    },
    {
      id: 14,
      pregunta: "Según el artículo 17.2 CE, ¿cuál es el plazo máximo de detención preventiva antes de poner al detenido en libertad o a disposición judicial?",
      opciones: [
        { texto: "Cuarenta y ocho horas improrrogables en todo caso", correcta: false },
        { texto: "Setenta y dos horas", correcta: true, justificacion: "El art. 17.2 CE fija el plazo máximo de detención preventiva en setenta y dos horas, transcurridas las cuales 'el detenido deberá ser puesto en libertad o a disposición de la autoridad judicial'." },
        { texto: "Cuarenta y ocho horas prorrogables hasta setenta y dos mediante resolución judicial motivada", correcta: false }
      ]
    },
    {
      id: 15,
      pregunta: "El procedimiento de 'habeas corpus' mencionado en el art. 17.4 CE tiene por finalidad:",
      opciones: [
        { texto: "Controlar la legalidad de las prisiones preventivas decretadas por juez competente", correcta: false },
        { texto: "Producir la inmediata puesta a disposición judicial de toda persona detenida ilegalmente", correcta: true, justificacion: "El art. 17.4 CE establece que la ley regulará el habeas corpus 'para producir la inmediata puesta a disposición judicial de toda persona detenida ilegalmente', siendo una garantía frente a detenciones arbitrarias." },
        { texto: "Garantizar el derecho del detenido a ser asistido por abogado de oficio desde el inicio de la detención", correcta: false }
      ]
    },
    {
      id: 16,
      pregunta: "Respecto a la inviolabilidad del domicilio (art. 18.2 CE), ¿cuándo se permite la entrada sin consentimiento del titular ni resolución judicial?",
      opciones: [
        { texto: "En casos de urgencia policial debidamente justificada y con posterior ratificación judicial en 24 horas", correcta: false },
        { texto: "En caso de flagrante delito", correcta: true, justificacion: "El art. 18.2 CE admite la entrada al domicilio sin consentimiento del titular ni resolución judicial únicamente 'en caso de flagrante delito', siendo esta la única excepción constitucional expresa." },
        { texto: "Nunca; siempre se requiere o consentimiento del titular o resolución judicial previa sin excepción alguna", correcta: false }
      ]
    },
    {
      id: 17,
      pregunta: "El derecho al honor, a la intimidad personal y familiar y a la propia imagen está reconocido en:",
      opciones: [
        { texto: "El artículo 18.1 CE, dentro de los derechos fundamentales de la Sección Primera del Capítulo II", correcta: true, justificacion: "El art. 18.1 CE reconoce expresamente estos tres derechos: honor, intimidad personal y familiar, y propia imagen, formando parte de los derechos fundamentales con máxima protección constitucional." },
        { texto: "El artículo 20.4 CE como límite a la libertad de expresión e información", correcta: false },
        { texto: "El artículo 10.1 CE como parte de la dignidad de la persona y el libre desarrollo de la personalidad", correcta: false }
      ]
    },
    {
      id: 18,
      pregunta: "Según el artículo 19 CE, el derecho a circular libremente y a elegir residencia corresponde a:",
      opciones: [
        { texto: "Todas las personas que se encuentren legalmente en territorio español, con independencia de su nacionalidad", correcta: false },
        { texto: "Los españoles, siendo un derecho que no puede limitarse por motivos políticos o ideológicos", correcta: true, justificacion: "El art. 19 CE reconoce estos derechos a 'los españoles', incluyendo la previsión expresa de que el derecho a entrar y salir libremente 'no podrá ser limitado por motivos políticos o ideológicos'." },
        { texto: "Los ciudadanos de la Unión Europea en virtud de los Tratados europeos incorporados al ordenamiento español", correcta: false }
      ]
    },
    {
      id: 19,
      pregunta: "El secuestro de publicaciones, grabaciones u otros medios de información, según el art. 20.5 CE:",
      opciones: [
        { texto: "Solo puede acordarse mediante resolución judicial", correcta: true, justificacion: "El art. 20.5 CE establece que 'Solo podrá acordarse el secuestro de publicaciones, grabaciones y otros medios de información en virtud de resolución judicial', prohibiendo el secuestro administrativo." },
        { texto: "Puede ser acordado por el Fiscal General del Estado en supuestos de urgencia con ratificación judicial posterior", correcta: false },
        { texto: "Puede acordarse por resolución judicial o, excepcionalmente, por resolución gubernativa motivada", correcta: false }
      ]
    },
    {
      id: 20,
      pregunta: "En cuanto al derecho de reunión pacífica del art. 21 CE, las reuniones en lugares de tránsito público:",
      opciones: [
        { texto: "Requieren autorización previa de la autoridad competente, que podrá denegarla por razones de orden público", correcta: false },
        { texto: "Solo necesitan comunicación previa a la autoridad, que podrá prohibirlas ante riesgo fundado de alteración del orden público con peligro para personas o bienes", correcta: true, justificacion: "El art. 21.2 CE establece un sistema de comunicación previa (no autorización) y la autoridad solo puede prohibirlas 'cuando existan razones fundadas de alteración del orden público, con peligro para personas o bienes'." },
        { texto: "Son libres sin necesidad de comunicación ni autorización previa en ningún caso", correcta: false }
      ]
    },
    {
      id: 21,
      pregunta: "Según el artículo 22 CE, las asociaciones secretas y las de carácter paramilitar:",
      opciones: [
        { texto: "Están prohibidas expresamente por la Constitución", correcta: true, justificacion: "El art. 22.5 CE prohíbe taxativamente 'las asociaciones secretas y las de carácter paramilitar', siendo una prohibición constitucional directa sin necesidad de ley de desarrollo." },
        { texto: "Pueden ser suspendidas por resolución judicial motivada pero no disueltas directamente", correcta: false },
        { texto: "Están permitidas si sus fines no son constitutivos de delito y se inscriben en el registro correspondiente", correcta: false }
      ]
    },
    {
      id: 22,
      pregunta: "El artículo 23 CE reconoce el derecho a participar en los asuntos públicos. ¿A quién se reconoce el derecho de acceder en igualdad a cargos públicos?",
      opciones: [
        { texto: "A todos los ciudadanos de la Unión Europea residentes en España en condiciones de reciprocidad", correcta: false },
        { texto: "Exclusivamente a los españoles, siendo este un derecho vedado a los extranjeros salvo en elecciones municipales por tratado o ley", correcta: true, justificacion: "El art. 13.2 CE en relación con el 23 establece que solo los españoles son titulares de los derechos del art. 23, salvo el sufragio activo y pasivo en elecciones municipales que puede extenderse por tratado o ley." },
        { texto: "A todos los residentes legales en España con independencia de su nacionalidad y tiempo de residencia", correcta: false }
      ]
    },
    {
      id: 23,
      pregunta: "El derecho a la tutela judicial efectiva del art. 24 CE incluye entre sus garantías el derecho a:",
      opciones: [
        { texto: "Obtener siempre una resolución judicial favorable cuando se acredite lesión de un derecho subjetivo", correcta: false },
        { texto: "No declarar contra sí mismo, no confesarse culpable y la presunción de inocencia", correcta: true, justificacion: "El art. 24.2 CE incluye expresamente entre las garantías procesales el derecho a 'no declarar contra sí mismos, a no confesarse culpables y a la presunción de inocencia', como elementos del proceso equitativo." },
        { texto: "Obtener asistencia jurídica gratuita en todos los procedimientos judiciales sin necesidad de acreditar insuficiencia de recursos", correcta: false }
      ]
    },
    {
      id: 24,
      pregunta: "Según el artículo 25 CE, las penas privativas de libertad deben orientarse hacia:",
      opciones: [
        { texto: "La disuasión general y la retribución proporcional al daño causado a la sociedad", correcta: false },
        { texto: "La reeducación y reinserción social, sin que puedan consistir en trabajos forzados", correcta: true, justificacion: "El art. 25.2 CE establece que 'Las penas privativas de libertad y las medidas de seguridad estarán orientadas hacia la reeducación y reinserción social y no podrán consistir en trabajos forzados'." },
        { texto: "La prevención especial mediante el aislamiento del condenado y la protección de la sociedad", correcta: false }
      ]
    },
    {
      id: 25,
      pregunta: "¿Qué prohíbe el artículo 26 CE en relación con los Tribunales de Honor?",
      opciones: [
        { texto: "Los Tribunales de Honor en todos los ámbitos, incluido el militar y el de las administraciones públicas", correcta: false },
        { texto: "Los Tribunales de Honor en el ámbito de la Administración civil y de las organizaciones profesionales", correcta: true, justificacion: "El art. 26 CE prohíbe específicamente los Tribunales de Honor 'en el ámbito de la Administración civil y de las organizaciones profesionales', no extendiéndose esta prohibición constitucional directa al ámbito castrense." },
        { texto: "Los Tribunales de Honor en el ámbito militar y de las Fuerzas y Cuerpos de Seguridad del Estado", correcta: false }
      ]
    },
    {
      id: 26,
      pregunta: "Según el artículo 27.4 CE, la enseñanza básica es:",
      opciones: [
        { texto: "Obligatoria para los menores de dieciséis años, aunque no necesariamente gratuita en centros privados concertados", correcta: false },
        { texto: "Obligatoria y gratuita", correcta: true, justificacion: "El art. 27.4 CE establece en cuatro palabras rotundas que 'La enseñanza básica es obligatoria y gratuita', siendo una de las prescripciones más concisas y directas de la Constitución." },
        { texto: "Obligatoria, gratuita y laica, debiendo los poderes públicos garantizar su universalidad", correcta: false }
      ]
    },
    {
      id: 27,
      pregunta: "El derecho a la huelga reconocido en el art. 28.2 CE se reconoce a:",
      opciones: [
        { texto: "Todos los ciudadanos para la defensa de sus intereses colectivos, incluidos los trabajadores autónomos", correcta: false },
        { texto: "Los trabajadores para la defensa de sus intereses, debiendo la ley garantizar el mantenimiento de servicios esenciales", correcta: true, justificacion: "El art. 28.2 CE reconoce el derecho de huelga a 'los trabajadores' y establece que la ley 'establecerá las garantías precisas para asegurar el mantenimiento de los servicios esenciales de la comunidad'." },
        { texto: "Los sindicatos como titulares exclusivos del derecho, en representación de sus afiliados", correcta: false }
      ]
    },
    {
      id: 28,
      pregunta: "El artículo 29 CE reconoce el derecho de petición. Respecto a los miembros de las Fuerzas Armadas, este derecho:",
      opciones: [
        { texto: "Puede ejercerse individual y colectivamente, pero siempre a través de la cadena de mando institucional", correcta: false },
        { texto: "Solo puede ejercerse individualmente y con arreglo a lo dispuesto en su legislación específica", correcta: true, justificacion: "El art. 29.2 CE establece una limitación específica para los miembros de las Fuerzas o Institutos armados: solo podrán ejercer el derecho de petición 'individualmente y con arreglo a lo dispuesto en su legislación específica'." },
        { texto: "No pueden ejercerlo en ningún caso por razones de disciplina y jerarquía militar", correcta: false }
      ]
    },
    {
      id: 29,
      pregunta: "El artículo 31.1 CE establece que el sistema tributario deberá estar inspirado en:",
      opciones: [
        { texto: "Los principios de generalidad, legalidad y proporcionalidad, nunca con alcance confiscatorio", correcta: false },
        { texto: "Los principios de igualdad y progresividad, sin que en ningún caso tenga alcance confiscatorio", correcta: true, justificacion: "El art. 31.1 CE señala que el sistema tributario estará 'inspirado en los principios de igualdad y progresividad que, en ningún caso, tendrá alcance confiscatorio', sin mencionar la proporcionalidad como principio expreso." },
        { texto: "Los principios de capacidad económica, progresividad y redistribución de la renta como fin constitucional", correcta: false }
      ]
    },
    {
      id: 30,
      pregunta: "Según el artículo 32 CE, el derecho a contraer matrimonio se reconoce:",
      opciones: [
        { texto: "A toda persona mayor de edad con plena capacidad de obrar, sin distinción de orientación sexual", correcta: false },
        { texto: "Al hombre y la mujer con plena igualdad jurídica, dejando a la ley la regulación de sus aspectos", correcta: true, justificacion: "El art. 32 CE en su literalidad establece que 'El hombre y la mujer tienen derecho a contraer matrimonio con plena igualdad jurídica', remitiendo a la ley la regulación de formas, edad, capacidad, derechos y deberes." },
        { texto: "A todos los ciudadanos mayores de dieciocho años en condiciones de igualdad formal y material", correcta: false }
      ]
    },
    {
      id: 31,
      pregunta: "El derecho a la propiedad privada del art. 33 CE establece que nadie podrá ser privado de sus bienes salvo:",
      opciones: [
        { texto: "Por causa de utilidad pública o interés social, mediante indemnización y conforme a las leyes", correcta: true, justificacion: "El art. 33.3 CE establece que la privación de bienes requiere 'causa justificada de utilidad pública o interés social, mediante la correspondiente indemnización y de conformidad con lo dispuesto por las leyes'." },
        { texto: "Por resolución judicial firme en procedimientos sancionadores que prevean expresamente la confiscación", correcta: false },
        { texto: "Por ley orgánica que delimite la función social de la propiedad en sectores estratégicos para el interés general", correcta: false }
      ]
    },
    {
      id: 32,
      pregunta: "Según el artículo 35 CE, el deber de trabajar y el derecho al trabajo se reconocen a:",
      opciones: [
        { texto: "Todas las personas que se encuentren en territorio español, con independencia de su nacionalidad", correcta: false },
        { texto: "Todos los españoles, con prohibición expresa de discriminación por razón de sexo en la remuneración", correcta: true, justificacion: "El art. 35.1 CE reconoce a 'todos los españoles' el deber de trabajar y el derecho al trabajo, estableciendo explícitamente que 'en ningún caso pueda hacerse discriminación por razón de sexo'." },
        { texto: "Los ciudadanos de la Unión Europea y los españoles en condiciones de igualdad por imperativo comunitario", correcta: false }
      ]
    },
    {
      id: 33,
      pregunta: "El Capítulo Tercero del Título I recoge los principios rectores de la política social y económica. Según el art. 53.3 CE, estos principios:",
      opciones: [
        { texto: "Son directamente invocables ante los tribunales con el mismo rango que los derechos fundamentales", correcta: false },
        { texto: "Solo podrán ser alegados ante la jurisdicción ordinaria según lo que dispongan las leyes que los desarrollen", correcta: true, justificacion: "El art. 53.3 CE establece que los principios del Capítulo III 'solo podrán ser alegados ante la Jurisdicción ordinaria de acuerdo con lo que dispongan las leyes que los desarrollen', careciendo de acción directa constitucional." },
        { texto: "Son vinculantes para los poderes públicos con el mismo rango que los derechos del Capítulo II", correcta: false }
      ]
    },
    {
      id: 34,
      pregunta: "El artículo 39 CE establece la protección de la familia. En cuanto a los hijos, la Constitución señala que son:",
      opciones: [
        { texto: "Iguales ante la ley con independencia de su filiación, sea matrimonial o extramatrimonial", correcta: true, justificacion: "El art. 39.2 CE garantiza 'la protección integral de los hijos, iguales éstos ante la ley con independencia de su filiación', eliminando la distinción entre hijos legítimos e ilegítimos del ordenamiento jurídico." },
        { texto: "Iguales ante la ley siempre que la filiación haya sido debidamente reconocida e inscrita en el Registro Civil", correcta: false },
        { texto: "Titulares de los mismos derechos, pudiendo la ley establecer diferencias en los deberes de los progenitores según la filiación", correcta: false }
      ]
    },
    {
      id: 35,
      pregunta: "El artículo 43 CE reconoce el derecho a la protección de la salud. ¿A quién compete organizar y tutelar la salud pública?",
      opciones: [
        { texto: "Al Ministerio de Sanidad como organismo rector del Sistema Nacional de Salud", correcta: false },
        { texto: "A los poderes públicos, a través de medidas preventivas y de las prestaciones y servicios necesarios", correcta: true, justificacion: "El art. 43.2 CE asigna la competencia de organizar y tutelar la salud pública a 'los poderes públicos a través de medidas preventivas y de las prestaciones y servicios necesarios', sin especificar qué nivel de la Administración." },
        { texto: "Exclusivamente a las Comunidades Autónomas en virtud de sus competencias exclusivas en materia sanitaria", correcta: false }
      ]
    },
    {
      id: 36,
      pregunta: "Según el artículo 47 CE, el derecho a una vivienda digna y adecuada corresponde a:",
      opciones: [
        { texto: "Los ciudadanos españoles como derecho subjetivo directamente exigible ante los tribunales ordinarios", correcta: false },
        { texto: "Todos los españoles, siendo los poderes públicos quienes deben promover las condiciones necesarias para hacerlo efectivo", correcta: true, justificacion: "El art. 47 CE reconoce que 'Todos los españoles tienen derecho a disfrutar de una vivienda digna y adecuada', encargando a los poderes públicos promover las condiciones y normas para hacerlo efectivo." },
        { texto: "Todas las personas que residan en España, siendo un derecho humano reconocido por los tratados internacionales ratificados", correcta: false }
      ]
    },
    {
      id: 37,
      pregunta: "El artículo 53.2 CE establece que los derechos reconocidos en el art. 14 y la Sección Primera del Capítulo II podrán ser tutelados ante:",
      opciones: [
        { texto: "El Tribunal Supremo mediante el recurso de casación constitucional por vulneración de derechos fundamentales", correcta: false },
        { texto: "Los tribunales ordinarios por procedimiento preferente y sumario y, en su caso, ante el Tribunal Constitucional mediante recurso de amparo", correcta: true, justificacion: "El art. 53.2 CE establece un doble nivel de protección: ante los Tribunales ordinarios 'por un procedimiento basado en los principios de preferencia y sumariedad' y mediante 'el recurso de amparo ante el Tribunal Constitucional'." },
        { texto: "Exclusivamente ante el Tribunal Constitucional mediante el recurso de amparo como única vía jurisdiccional posible", correcta: false }
      ]
    },
    {
      id: 38,
      pregunta: "El Defensor del Pueblo, regulado en el artículo 54 CE, es definido como:",
      opciones: [
        { texto: "Un órgano constitucional independiente elegido por las Cortes para la defensa de los derechos del Título I con capacidad de interponer recursos de inconstitucionalidad", correcta: false },
        { texto: "Alto comisionado de las Cortes Generales para la defensa de los derechos del Título I, que puede supervisar la actividad de la Administración", correcta: true, justificacion: "El art. 54 CE define al Defensor del Pueblo como 'alto comisionado de las Cortes Generales, designado por éstas para la defensa de los derechos comprendidos en este Título', pudiendo supervisar la actividad de la Administración y dando cuenta a las Cortes." },
        { texto: "Comisario parlamentario designado por el Gobierno para supervisar la legalidad de la actuación administrativa", correcta: false }
      ]
    },
    {
      id: 39,
      pregunta: "Según el artículo 55 CE, ¿qué derechos pueden suspenderse mediante la declaración del estado de excepción o de sitio?",
      opciones: [
        { texto: "Todos los derechos fundamentales de la Sección Primera del Capítulo II del Título I sin excepción", correcta: false },
        { texto: "Los derechos de los arts. 17, 18 (apts. 2 y 3), 19, 20 (apts. 1a y 1d y 5), 21, 28.2 y 37.2, entre otros", correcta: true, justificacion: "El art. 55.1 CE enumera taxativamente los derechos suspendibles en estado de excepción o sitio: arts. 17, 18.2 y 3, 19, 20.1a y d y 5, 21, 28.2 y 37.2, siendo una lista cerrada." },
        { texto: "Únicamente el derecho a la libertad personal del art. 17, siendo el resto de derechos inviolables en todo estado de emergencia", correcta: false }
      ]
    },
    {
      id: 40,
      pregunta: "El artículo 56.3 CE establece que la persona del Rey es inviolable y no está sujeta a responsabilidad. Sus actos:",
      opciones: [
        { texto: "Solo requieren refrendo en los casos de relevancia constitucional, gozando de autonomía plena en los demás", correcta: false },
        { texto: "Estarán siempre refrendados según el art. 64 CE, careciendo de validez sin dicho refrendo, salvo lo dispuesto en el art. 65.2", correcta: true, justificacion: "El art. 56.3 CE establece que los actos del Rey 'estarán siempre refrendados en la forma establecida en el artículo 64, careciendo de validez sin dicho refrendo, salvo lo dispuesto en el artículo 65, 2', que regula el nombramiento libre de miembros de su Casa." },
        { texto: "Requieren refrendo del Presidente del Gobierno para todos los actos sin excepción, incluyendo los de naturaleza doméstica", correcta: false }
      ]
    },
    {
      id: 41,
      pregunta: "En la sucesión a la Corona, el artículo 57.1 CE establece que en el mismo grado de parentesco:",
      opciones: [
        { texto: "La persona de mayor edad tiene preferencia sobre la de menor edad, sin distinción de sexo", correcta: false },
        { texto: "El varón es preferido a la mujer y, en el mismo sexo, la persona de más edad a la de menos", correcta: true, justificacion: "El art. 57.1 CE establece el orden de sucesión: línea anterior a posteriores, grado más próximo al más remoto y en el mismo grado 'el varón a la mujer, y en el mismo sexo, la persona de más edad a la de menos'." },
        { texto: "Se aplica estrictamente el orden de nacimiento sin distinción de sexo en aplicación del principio de igualdad del art. 14", correcta: false }
      ]
    },
    {
      id: 42,
      pregunta: "Según el artículo 57.4 CE, las personas con derecho a sucesión en el trono que contraigan matrimonio contra la expresa prohibición del Rey y las Cortes Generales:",
      opciones: [
        { texto: "Quedarán excluidas de la sucesión únicamente ellas, pero no sus descendientes ya nacidos en el momento de la prohibición", correcta: false },
        { texto: "Perderán temporalmente sus derechos sucesorios hasta que las Cortes Generales levanten la prohibición por ley orgánica", correcta: false },
        { texto: "Quedarán excluidas en la sucesión a la Corona por sí y sus descendientes", correcta: true, justificacion: "El art. 57.4 CE establece que las personas que contraigan matrimonio contra la prohibición 'quedarán excluidas en la sucesión a la Corona por sí y sus descendientes', siendo una exclusión extensible a toda su línea de descendencia." }
      ]
    },
    {
      id: 43,
      pregunta: "¿Quién ejerce la Regencia cuando el Rey es menor de edad y no existe padre ni madre del Rey?",
      opciones: [
        { texto: "El Presidente del Gobierno en funciones de representación del Estado hasta que el Rey alcance la mayoría de edad", correcta: false },
        { texto: "El pariente mayor de edad más próximo a suceder en la Corona, según el orden constitucional establecido", correcta: true, justificacion: "El art. 59.1 CE establece que cuando el Rey sea menor de edad ejercerá la Regencia 'el padre o la madre del Rey y, en su defecto, el pariente mayor de edad más próximo a suceder en la Corona, según el orden establecido en la Constitución'." },
        { texto: "Las Cortes Generales que nombrarán una Regencia compuesta necesariamente por cinco personas", correcta: false }
      ]
    },
    {
      id: 44,
      pregunta: "Para ejercer la Regencia, el artículo 59.4 CE exige que la persona sea:",
      opciones: [
        { texto: "Española, mayor de edad y sin antecedentes penales por delitos graves contra el Estado", correcta: false },
        { texto: "Española y mayor de edad", correcta: true, justificacion: "El art. 59.4 CE es taxativo: 'Para ejercer la Regencia es preciso ser español y mayor de edad', sin añadir ningún requisito adicional expresamente en el texto constitucional." },
        { texto: "Española de origen, mayor de edad y con plenas capacidades físicas y mentales acreditadas ante las Cortes", correcta: false }
      ]
    },
    {
      id: 45,
      pregunta: "Según el artículo 61 CE, ¿qué juramento debe prestar el Rey al ser proclamado ante las Cortes Generales?",
      opciones: [
        { texto: "Juramento de defender la integridad territorial, respetar los derechos de los ciudadanos y promover el bienestar de los pueblos de España", correcta: false },
        { texto: "Juramento de desempeñar fielmente sus funciones, guardar y hacer guardar la Constitución y las leyes y respetar los derechos de los ciudadanos y de las CCAA", correcta: true, justificacion: "El art. 61.1 CE establece el contenido exacto del juramento del Rey: 'desempeñar fielmente sus funciones, guardar y hacer guardar la Constitución y las leyes y respetar los derechos de los ciudadanos y de las Comunidades Autónomas'." },
        { texto: "Juramento de guardar y hacer guardar la Constitución, defender la unidad de España y respetar la Monarquía parlamentaria", correcta: false }
      ]
    },
    {
      id: 46,
      pregunta: "Entre las funciones del Rey enumeradas en el artículo 62 CE, ¿cuál de las siguientes está expresamente incluida?",
      opciones: [
        { texto: "Presidir el Consejo de Ministros cuando lo estime oportuno, con voz y voto en los asuntos de Estado", correcta: false },
        { texto: "Ser informado de los asuntos de Estado y presidir las sesiones del Consejo de Ministros a petición del Presidente del Gobierno", correcta: true, justificacion: "El art. 62.g CE atribuye al Rey ser 'informado de los asuntos de Estado y presidir, a estos efectos, las sesiones del Consejo de Ministros, cuando lo estime oportuno, a petición del Presidente del Gobierno', sin voto deliberativo." },
        { texto: "Proponer al Congreso el candidato a Presidente del Gobierno con plena discrecionalidad política", correcta: false }
      ]
    },
    {
      id: 47,
      pregunta: "El artículo 62.i CE establece que el Rey ejerce el derecho de gracia conforme a la ley. ¿Qué limitación expresa impone la Constitución?",
      opciones: [
        { texto: "No podrá conceder indultos a personas condenadas por delitos de terrorismo o crímenes contra la humanidad", correcta: false },
        { texto: "La ley que lo regule no podrá autorizar indultos generales", correcta: true, justificacion: "El art. 62.i CE establece que el Rey ejerce el derecho de gracia 'con arreglo a la ley, que no podrá autorizar indultos generales', prohibiendo así la amnistía encubierta mediante gracia real colectiva." },
        { texto: "Solo podrá ejercerse el indulto a propuesta del Tribunal Supremo y con refrendo del Ministro de Justicia", correcta: false }
      ]
    },
    {
      id: 48,
      pregunta: "Según el artículo 63 CE, ¿quién corresponde declarar la guerra y hacer la paz?",
      opciones: [
        { texto: "Al Gobierno con ratificación posterior de las Cortes Generales en el plazo máximo de treinta días", correcta: false },
        { texto: "Al Rey, previa autorización de las Cortes Generales", correcta: true, justificacion: "El art. 63.3 CE atribuye al Rey la facultad de declarar la guerra y hacer la paz, pero 'previa autorización de las Cortes Generales', siendo una competencia regia que requiere autorización parlamentaria previa." },
        { texto: "Al Presidente del Gobierno, siendo informado el Rey con carácter previo en el Consejo de Ministros que preside", correcta: false }
      ]
    },
    {
      id: 49,
      pregunta: "El refrendo de los actos del Rey, según el artículo 64 CE, produce el efecto de que:",
      opciones: [
        { texto: "El Rey comparte la responsabilidad con quien refrenda el acto, siendo responsabilidad solidaria de ambos", correcta: false },
        { texto: "La responsabilidad recae sobre las personas que refrenden los actos, quedando el Rey exento de responsabilidad", correcta: true, justificacion: "El art. 64.2 CE establece que 'De los actos del Rey serán responsables las personas que los refrenden', siendo este el mecanismo que hace compatible la irresponsabilidad del monarca con el Estado de Derecho." },
        { texto: "El acto tiene plena validez sin necesidad de publicación oficial posterior en el Boletín Oficial del Estado", correcta: false }
      ]
    },
    {
      id: 50,
      pregunta: "Según el artículo 65 CE, respecto a la asignación presupuestaria del Rey y el personal de su Casa:",
      opciones: [
        { texto: "El Rey recibe una dotación fijada por ley que debe rendir cuentas ante el Tribunal de Cuentas, y el Gobierno nombra al personal de su Casa a propuesta del Rey", correcta: false },
        { texto: "El Rey recibe una cantidad global de los Presupuestos para sostener su Familia y Casa que distribuye libremente, y nombra y releva libremente a los miembros de su Casa", correcta: true, justificacion: "El art. 65 CE establece que el Rey 'recibe de los Presupuestos del Estado una cantidad global para el sostenimiento de su Familia y Casa, y distribuye libremente la misma', añadiendo que 'El Rey nombra y releva libremente a los miembros civiles y militares de su Casa'." },
        { texto: "El Rey recibe una asignación global que se distribuye según los criterios aprobados por las Cortes Generales en los Presupuestos Generales del Estado", correcta: false }
      ]
    }
  ]
};
