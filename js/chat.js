const BOT_ICON = `
<svg width="800px" height="800px" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M268.515 54.6046C267.911 54.3126 267.23 54.246 266.57 54.1153C266.127 54.0288 265.662 54 265.19 54C264.39 54 263.573 54.0847 262.815 54.1225C260.034 54.2541 257.259 54.4424 254.478 54.601C250.563 54.7136 246.646 54.6325 242.73 54.7172C238.177 54.8154 233.642 55.0686 229.099 55.3506C226.532 55.4263 223.965 55.4172 221.394 55.4497C218.417 55.4911 215.44 55.6605 212.463 55.8236C210.183 55.9047 207.914 55.9173 205.632 55.865C203.467 55.8155 201.301 55.7065 199.136 55.6749C194.431 55.6073 189.73 55.583 185.024 55.5055C180.186 55.4281 175.359 55.4776 170.517 55.5974C165.945 55.7137 161.368 55.8326 156.792 55.8119C154.675 55.8011 152.557 55.6569 150.44 55.5866C149.269 55.5479 148.102 55.5623 146.935 55.5794C146.113 55.5902 145.292 55.601 144.475 55.5902C143.341 55.5758 142.325 55.8011 141.431 56.5119C140.558 57.2021 140.002 58.2229 139.913 59.3032" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M271.889 148.131C272.223 147.423 272.471 146.728 272.49 145.994C272.511 145.398 272.417 144.707 272.29 144.098C272.129 143.286 270.242 66.3936 270.075 64.0228C269.962 62.4876 269.888 60.9556 269.586 59.4288C269.312 58.0506 268.911 56.6914 268.516 55.3258" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M142.565 56.6516C141.734 56.8254 140.983 57.3752 140.496 58.1649C139.967 59.0245 139.842 59.9795 139.947 61.0015C140.076 62.2295 140.153 63.4556 140.213 64.6884C140.327 71.0399 141.203 131.121 141.358 133.881C141.437 136.033 141.496 138.187 141.59 140.342C141.702 142.954 141.795 145.567 142.286 148.131" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M142.562 150.783C144.124 151.036 145.638 151.171 147.21 151.154C148.775 151.137 261.266 153.632 264.01 153.422C265.101 153.339 266.188 153.226 267.275 153.112C267.753 153.06 268.231 153.016 268.705 152.938C269.442 152.816 270.602 152.197 271.164 151.607" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M196.653 98.0262C196.297 94.527 196.842 90.3005 196.99 87.1448" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M220.116 98.0262C220.15 94.6313 220.18 91.2581 220.285 87.8701" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M191.62 121.827C204.464 131.012 218.049 130.621 228.742 118.814" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M346.735 174.823C346.906 172.743 295.705 189.823 294.533 189.215C294.15 189.016 263.894 175.227 245.33 175.787C220.957 176.523 187.468 177.66 162.074 178.531C141.435 179.239 114.101 189.215 113.396 189.215" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M109.413 188.988C110.068 191.587 54.7896 172.403 55.0625 174.866C55.1664 175.817 109.286 188.614 109.413 188.988Z" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M171.734 267.452C171.621 269.854 171.436 278.005 171.295 280.401C171.154 282.786 171.09 285.176 170.995 287.565C170.796 292.518 170.171 328.674 169.97 331.335C169.782 333.782 169.583 336.233 169.508 338.684C169.46 340.12 169.478 341.566 169.652 342.995C169.712 343.501 157.898 345.326 157.15 345.674" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M241.998 346.847C241.715 346.821 235.23 346.799 232.779 347C232.273 347.04 235.062 305.826 234.994 296.185C234.926 286.569 234.885 278.395 235.032 268.778" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M362.021 164.677C361.757 163.638 361.094 162.729 360.185 162.168C359.186 161.548 358.164 161.503 357.041 161.688C355.817 161.89 354.593 162.088 353.37 162.298C352.885 162.379 352.401 162.475 351.917 162.57C349.916 162.97 348.058 164.256 347.511 166.337C347.058 168.065 347.157 169.849 347.108 171.621C347.072 172.803 347.035 173.984 347.002 175.164C346.963 176.481 346.999 177.807 347.091 179.129C347.171 180.273 347.294 181.413 347.447 182.542C347.513 183.033 347.583 183.521 347.657 184.008C347.82 185.036 347.916 186.208 348.459 187.112C349.227 188.39 350.174 189.33 351.518 189.973C352.854 190.613 354.232 191.012 355.672 191.325C356.779 191.564 357.815 191.528 358.826 190.961C359.785 190.427 360.501 189.516 360.801 188.452" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.6414 182.134C36.6271 183.206 37.0322 184.256 37.7647 185.032C38.5695 185.89 39.5442 186.198 40.6772 186.309C41.9117 186.431 43.1455 186.555 44.3814 186.669C44.8706 186.717 45.3629 186.749 45.855 186.782C47.8911 186.914 50.0192 186.152 51.0868 184.284C51.9718 182.731 52.3383 180.982 52.8444 179.283C53.1855 178.152 53.5267 177.02 53.8641 175.889C54.2431 174.626 54.5521 173.337 54.8052 172.036C55.024 170.91 55.2014 169.777 55.346 168.647C55.4088 168.156 55.4675 167.666 55.5223 167.176C55.6316 166.141 55.8426 164.985 55.5514 163.971C55.1411 162.538 54.4698 161.385 53.3382 160.416C52.2131 159.453 50.9859 158.71 49.6759 158.037C48.6687 157.519 47.6579 157.286 46.5348 157.572C45.4707 157.839 44.5432 158.534 43.9772 159.484" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M167.19 183.088C166.54 184.012 166.477 184.93 166.544 186.014C166.558 186.227 166.571 186.44 166.583 186.652C166.982 195.868 166.528 205.092 166.86 214.307C167.035 219.247 167.21 224.183 167.291 229.122C167.365 233.668 167.431 238.236 167.056 242.771C166.825 245.57 166.593 248.366 166.494 251.173C166.396 253.904 166.382 256.71 166.607 259.439C166.698 260.562 166.978 261.799 167.729 262.667C168.754 263.85 170.052 264.389 171.599 264.449C172.628 264.491 173.69 264.29 174.711 264.148C175.893 263.985 177.065 263.765 178.227 263.482C179.503 263.169 207.234 262.274 209.139 262.337C211.311 262.408 213.454 262.55 215.615 262.724C219.225 263.014 222.814 263.588 226.421 263.904C228.386 264.073 230.35 264.229 232.319 264.346C233.864 264.436 235.449 264.412 236.97 264.715L237.265 264.779C238.22 264.867 238.715 264.679 239.595 264.385C240.675 264.028 241.577 262.883 241.956 261.827C242.383 260.642 242.186 259.338 242.082 258.094C241.933 253.698 242.016 249.324 242.278 244.933C242.347 243.788 243.999 230.918 244.84 216.072C245.717 200.601 245.783 183.138 245.813 182.34C245.837 181.581 245.869 180.823 245.901 180.068C245.953 178.694 246.157 177.252 245.532 175.973" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M201.994 238.437C192.449 230.705 176.125 210.992 188.117 199.493C190.679 197.036 193.997 195.462 197.708 195.971C201.454 196.484 204.074 200.765 204.851 203.995C204.965 204.467 205.801 211.04 206.076 211.04C206.483 211.04 206.076 210.257 206.076 209.865C206.076 208.493 206.327 207.302 206.483 205.951C206.886 202.479 209.401 199.097 212.606 197.341C220.532 192.998 226.613 198.852 227.504 206.538C229.414 223.023 209.866 231.222 208.116 239.611" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M291.748 183.081C291.6 183.413 291.472 183.757 291.367 184.113C290.411 187.331 289.429 190.542 288.258 193.693L288.174 193.898C287.954 194.454 287.738 195.012 287.515 195.572" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M109.42 194.534C109.015 194.534 107.1 180.642 107.015 180.18C106.958 179.872 106.876 179.874 106.769 180.185" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M177.037 303.283C175.283 303.277 173.526 303.249 171.771 303.249C171.201 303.249 170.631 303.253 170.061 303.26C167.453 303.303 165.008 303.866 162.453 304.575" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M243.323 303.283C241.569 303.277 239.812 303.249 238.057 303.249C237.487 303.249 236.917 303.253 236.347 303.26C233.739 303.303 231.294 303.866 228.739 304.575" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M271.165 96.4253L284.714 97.7511L293.703 96.4253" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M133.286 95.7625H114.725" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M294.036 87.4895V103.782" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M113.905 87.4895V103.782" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const CLOSE_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
  <path d="M6 6L18 18M18 6L6 18" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round"/>
</svg>
`;

const SYSTEM_PROMPT = `Eres el asistente virtual de Esaú Carvajal, un profesional colombiano que reside en Medellín, Colombia.
Tu rol es responder preguntas sobre él de forma amigable, profesional y concisa.

Información sobre Esaú:
- Es una persona nacida en la zona de Urabá del departamento de Antioquia del país Colombia. Tiene 22 años, es ingeniero civil y tiene un posgrado de especialización en Visual Analytics y Big Data.
- Actualmente vive en Medellín con sus padres, hermano y abuela.
- Sus actividades favoritas de ocio en la actualidad se relacionan con el running, leer y jugar videojuegos.
- Su videojuego favorito es Dofus, su raza favorita es el sram 
- Sueña con crecer laboralmente para poder ayudar a su entorno cercano
- Es pelirrojo 
- Es una persona analítica que le gusta aprender y se adapta rápido a nuevas tecnologías, le gusta implementar soluciones creativas, tal como este chatbot :)
- Ha trabajado en roles de Analista de Datos y se perfila como un Data Scientist, área por la cual presenta un interés cada vez más creciente.
- Habilidades técnicas: Python, HTML/CSS/JavaScript, WordPress, Power BI, y AWS
- Certificaciones: APTIS Inglés C1 (British Council), AWS Academy Cloud Foundations, Data Analysis with Python (IBM) y Programa especializado: HTML, CSS, and Javascript for Web Developers
- Busca oportunidades en el área de Data Science
- Disponible para trabajo presencial, híbrido o remoto, reside en la ciudad de Medellín
- LinkedIn: https://www.linkedin.com/in/esauca/
- Github: https://github.com/EsauCarvajal 

Reglas importantes:
- Responde siempre en español cuando la programación de la página así lo dicte, de lo contrario, si la programación de la página requiere que respondas en inglés, debes hacerlo. No utilices ningún otro idioma, puede enviar un mensaje aclarando esto si te escriben en otro idioma.
- Sé conciso, máximo 3-4 oraciones por respuesta. Si el contexto requiere más palabras/oraciones, puedes proceder.
- Si te preguntan algo que no sabes de Esaú, sugiere contactarlo por LinkedIn o presionando el botón de contacto que se ubica en la parte superior de la página.
- No inventes información que no esté en este contexto
- Me puedes tratar solo como Esaú
- Cuando respondes alguna pregunta no es necesario que te vuelvas a presentar
- Sé amigable, cercano y profesional
- Si te preguntan quién eres, di que eres Topi, un asistente virtual creado por Esaú
- Verifica muy bien la ortografía en el idioma ESPAÑOL
- No respondas preguntas de cultura general o relacionadas, cíñete al contexto de que el chat es para temas de reclutamiento en IT, pero ten en cuenta que información personal o de contexto sobre Esaú sí se puede dar
- No lo consideres nunca como "experto"
- Al hablar de los proyectos, tienes que mencionar los especificados en la parte de "Explicación de proyectos" (creados por Esaú).
- NO realices preguntas al final de los mensajes que envíes, ya que no tienes memoria contextual

Explicación de proyectos:
- Kurobri (Monitoreo Satelital de Cultivos): es una plataforma web diseñada para que agricultores de Urabá monitoreen la salud de sus cultivos de banano mediante el índice de vegetación NDVI en mapas satelitales interactivos. Su arquitectura está desplegada en la nube de AWS e integra una red VPC segura, una instancia EC2 para la aplicación, almacenamiento S3 para archivos raster (.tif) y una base de datos RDS MySQL en configuración Multi-AZ; el sistema utiliza JavaScript con OpenLayers para la visualización y PHP para la gestión de usuarios
- Clasificador de Admisión a Guarderías: Este sistema automatiza la predicción de recomendaciones para la admisión de niños en guarderías (multiclase) analizando 8 características socioeconómicas y familiares. Su arquitectura compara un modelo de Random Forest optimizado con una Red Neuronal Artificial (RNA) de dos capas ocultas (16 y 12 neuronas) desarrollada en TensorFlow, la cual utiliza funciones de activación ReLU y Softmax para alcanzar una precisión del 96.21% en la clasificación de prioridades
- Evaluador de Aceptabilidad de Vehículos: El proyecto clasifica automóviles en cuatro niveles de aceptabilidad basándose en especificaciones técnicas y de costo como seguridad, mantenimiento y precio. Implementa una arquitectura basada en ensambles de aprendizaje, comparando un Árbol de Decisión simple con un Random Forest de 200 árboles que utiliza codificación ordinal para respetar la jerarquía de los atributos, logrando un rendimiento superior con un AUC de 0.98 y una alta capacidad de discriminación entre categorías
- Topi: Topi funciona como un chatbot incrustado en la interfaz del portafolio mediante un widget flotante desarrollado con JavaScript y estilizado con CSS. El usuario puede interactuar escribiendo preguntas directamente o utilizando preguntas predefinidas orientadas a reclutamiento. Cada consulta es enviada a un modelo de lenguaje de Groq, específicamente llama-3.1-8b-instant
- Lujofragancias: una página web de perfumería para posicionamiento SEO, creado con el objetivo de probar la atracción de audiencia hacia un tema nicho

Respuesta a las preguntas predeterminadas:
"¿Cuál es el perfil profesional de Esaú?": Ingeniero con especialización en Visual Analytics y Big Data. Destaca por aprender tecnologías de manera ágil, descomponer problemas complejos para encontrar soluciones creativas y aplicar pensamiento crítico en la toma de decisiones basadas en datos.
"¿Qué habilidades blandas lo diferencian?": Comunicación asertiva, curiosidad intelectual, pensamiento crítico, resiliencia, trabajo en equipo y orientación a resultados.
"¿Cuál es su nivel de inglés?": Su nivel de inglés es C1, obtenido en el examen de certificación APTIS 4 habilidades (British Council)
"¿Qué tecnologías y herramientas maneja?": Python, específicamente en liberías como Pandas, Matplotlib y Scikit-learn. Además, utiliza Git para control de versiones, Power BI para dashboards y HTML/CSS/JavaScript para el desarrollo web
"¿Está disponible para trabajar?": Sí, Esaú busca oportunidades en el área de ciencia de datos. Está disponible para trabajo presencial, híbrido o remoto y reside en la ciudad de Medellín.
`;

const QUICK_QUESTIONS = [
  "¿Cuál es el perfil profesional de Esaú?",
  "¿Qué habilidades blandas lo diferencian?",
  "¿Cuál es su nivel de inglés?",
  "¿Qué tecnologías y herramientas maneja?",
  "¿Qué certificaciones tiene?",
  "¿Está disponible para trabajar?",
];

let isOpen = false;
let isLoading = false;
let hasGreeted = false;
let usedQuestions = new Set(); // ← registra las preguntas ya usadas

async function askGroq(userMessage) {
  const response = await fetch("https://esau-chat.esaucarvajalangarita.workers.dev/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: userMessage,
      systemPrompt: SYSTEM_PROMPT
    })
  });

  if (!response.ok) throw new Error("Error en la API");

  const data = await response.json();
  return data.choices[0].message.content;
}


function addMessage(text, type) {
  const messages = document.getElementById("chat-messages");
  const msg = document.createElement("div");
  msg.classList.add("msg", type);

  if (type === "loading") {
    msg.innerHTML = `<span class="dots">Escribiendo</span>`;
  } else if (type === "bot") {
    const linkedText = text.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    msg.innerHTML = linkedText;
  } else {
    msg.textContent = text;
  }

  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
  return msg;
}


function addQuickQuestions() {
  const messages = document.getElementById("chat-messages");

  // Eliminar sugerencias anteriores para no acumularlas
  document.querySelectorAll(".quick-suggestions").forEach(el => el.remove());

  const container = document.createElement("div");
  container.classList.add("quick-suggestions");

  // Solo mostrar preguntas que no se han usado aún
  const remaining = QUICK_QUESTIONS.filter(q => !usedQuestions.has(q));

  // Si ya se usaron todas, no mostrar el contenedor
  if (remaining.length === 0) return;

  remaining.forEach(q => {
    const btn = document.createElement("button");
    btn.classList.add("suggestion-btn");
    btn.textContent = q;
    btn.addEventListener("click", () => {
      usedQuestions.add(q); // ← marcar como usada
      document.querySelectorAll(".quick-suggestions").forEach(el => el.remove());
      sendMessage(q);
    });
    container.appendChild(btn);
  });

  messages.appendChild(container);
  messages.scrollTop = messages.scrollHeight;
}

async function sendMessage(text) {
  if (!text.trim() || isLoading) return;

  isLoading = true;

  const input = document.getElementById("chat-input");
  const sendBtn = document.getElementById("chat-send");
  input.value = "";
  input.disabled = true;
  sendBtn.disabled = true;

  addMessage(text, "user");
  const loadingMsg = addMessage("", "loading");

  try {
    const reply = await askGroq(text);
    loadingMsg.remove();
    addMessage(reply, "bot");
    addQuickQuestions();
  } catch (error) {
    loadingMsg.remove();
    addMessage("Lo siento, hubo un problema. Intenta de nuevo en unos segundos.", "bot");
  } finally {
    isLoading = false;
    input.disabled = false;
    sendBtn.disabled = false;
    input.focus();
  }
}

function buildChatWidget() {
  const toggle = document.createElement("button");
  toggle.id = "chat-toggle";
  toggle.setAttribute("aria-label", "Abrir asistente virtual");
  toggle.innerHTML = BOT_ICON;
  document.body.appendChild(toggle);

  const chatWindow = document.createElement("div");
  chatWindow.id = "chat-window";
  chatWindow.innerHTML = `
    <div id="chat-header">
      <div class="avatar">${BOT_ICON}</div>
      <div class="info">
        <span class="name">Topi</span>
        <span class="subtitle">Pregúntame lo que quieras</span>
      </div>
    </div>
    <div id="chat-messages"></div>
    <div id="chat-input-area">
      <input id="chat-input" type="text" placeholder="Escribe una pregunta..." autocomplete="off" />
      <button id="chat-send" aria-label="Enviar">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
      </button>
    </div>
  `;
  document.body.appendChild(chatWindow);

  toggle.addEventListener("click", () => {
    isOpen = !isOpen;
    chatWindow.classList.toggle("visible", isOpen);
    toggle.classList.toggle("open", isOpen);

    toggle.innerHTML = isOpen ? CLOSE_ICON : BOT_ICON;

    if (isOpen && !hasGreeted) {
      hasGreeted = true;
      setTimeout(() => {
        addMessage("¡Hola! 👋 Soy Topi, el asistente virtual de Esaú. Puedes elegir una pregunta o escribir la tuya.", "bot");
        addQuickQuestions();
      }, 300);
    }
  });

  document.getElementById("chat-input").addEventListener("keypress", e => {
    if (e.key === "Enter") sendMessage(e.target.value);
  });

  document.getElementById("chat-send").addEventListener("click", () => {
    sendMessage(document.getElementById("chat-input").value);
  });
}

document.addEventListener("DOMContentLoaded", buildChatWidget);
