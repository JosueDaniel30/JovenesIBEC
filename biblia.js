/* ============================
   📖 BIBLIA RVR1960 - CORE
============================ */

// Libros
const oldTestament = [
    "Genesis","Exodo","Levitico","Numeros","Deuteronomio","Josue","Jueces","Rut",
    "1_Samuel","2_Samuel","1_Reyes","2_Reyes","1_Cronicas","2_Cronicas",
    "Esdras","Nehemias","Ester","Job","Salmos","Proverbios","Eclesiastes",
    "Cantares","Isaias","Jeremias","Lamentaciones","Ezequiel","Daniel",
    "Oseas","Joel","Amos","Abdias","Jonas","Miqueas","Nahum","Habacuc",
    "Sofonias","Hageo","Zacarias","Malaquias"
];

const newTestament = [
    "Mateo","Marcos","Lucas","Juan","Hechos","Romanos","1_Corintios","2_Corintios",
    "Galatas","Efesios","Filipenses","Colosenses","1_Tesalonicenses",
    "2_Tesalonicenses","1_Timoteo","2_Timoteo","Tito","Filemon","Hebreos",
    "Santiago","1_Pedro","2_Pedro","1_Juan","2_Juan","3_Juan","Judas","Apocalipsis"
];

// ============================
// 🧠 QUIZ BÍBLICO
// ============================

// Base de preguntas del quiz
const quizQuestions = [
    {
        question: "¿Quién fue el primer hombre creado por Dios?",
        options: ["Adán", "Abraham", "Moisés", "David"],
        correct: 0,
        category: "Creación",
        testament: "AT"
    },
    {
        question: "¿Cuántos días tomó Dios para crear el mundo?",
        options: ["5 días", "6 días", "7 días", "8 días"],
        correct: 2,
        category: "Creación",
        testament: "AT"
    },
    {
        question: "¿Cuál fue el nombre del jardín donde vivieron Adán y Eva?",
        options: ["Edén", "Paraíso", "Getsemaní", "Gólgota"],
        correct: 0,
        category: "Creación",
        testament: "AT"
    },
    {
        question: "¿Quién construyó el arca para salvarse del diluvio?",
        options: ["Abraham", "Noé", "Moisés", "Josué"],
        correct: 1,
        category: "Diluvio",
        testament: "AT"
    },
    {
        question: "¿Cuántos hijos tuvo Noé?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        category: "Diluvio",
        testament: "AT"
    },
    {
        question: "¿Cuál fue la señal del pacto entre Dios y Noé?",
        options: ["Una estrella", "Un arco iris", "Una paloma", "Una nube"],
        correct: 1,
        category: "Diluvio",
        testament: "AT"
    },
    {
        question: "¿Quién fue llamado por Dios para liberar al pueblo de Israel de Egipto?",
        options: ["Abraham", "Isaac", "Jacob", "Moisés"],
        correct: 3,
        category: "Éxodo",
        testament: "AT"
    },
    {
        question: "¿Cuál fue la plaga que finalmente convenció al faraón de liberar a los israelitas?",
        options: ["Langostas", "Sangre", "Muerte de los primogénitos", "Gronjas"],
        correct: 2,
        category: "Éxodo",
        testament: "AT"
    },
    {
        question: "¿Cuántos mandamientos recibió Moisés en el monte Sinaí?",
        options: ["5", "7", "10", "12"],
        correct: 2,
        category: "Ley",
        testament: "AT"
    },
    {
        question: "¿Cuál es el primer mandamiento?",
        options: ["No matarás", "No robarás", "No tendrás dioses ajenos", "Honrarás a tu padre"],
        correct: 2,
        category: "Ley",
        testament: "AT"
    },
    {
        question: "¿Quién fue el rey que construyó el templo de Jerusalén?",
        options: ["David", "Salomón", "Saúl", "Josías"],
        correct: 1,
        category: "Reino",
        testament: "AT"
    },
    {
        question: "¿Cuál fue el pecado de David que trajo consecuencias a su familia?",
        options: ["Robo", "Adulterio con Betsabé", "Mentira", "Idolatría"],
        correct: 1,
        category: "Reino",
        testament: "AT"
    },
    {
        question: "¿Quién fue el profeta que fue tragado por un gran pez?",
        options: ["Elías", "Isaías", "Jonás", "Jeremías"],
        correct: 2,
        category: "Profetas",
        testament: "AT"
    },
    {
        question: "¿Cuál fue la ciudad donde Jonás fue enviado a predicar?",
        options: ["Jerusalén", "Nínive", "Babilonia", "Tiro"],
        correct: 1,
        category: "Profetas",
        testament: "AT"
    },
    {
        question: "¿Quién fue el profeta que vio el valle de huesos secos?",
        options: ["Isaías", "Jeremías", "Ezequiel", "Daniel"],
        correct: 2,
        category: "Profetas",
        testament: "AT"
    },
    {
        question: "¿Cuál es el libro más corto de la Biblia?",
        options: ["2 Juan", "3 Juan", "Judas", "Filemón"],
        correct: 1,
        category: "Libros",
        testament: "NT"
    },
    {
        question: "¿Quién fue el discípulo que traicionó a Jesús?",
        options: ["Pedro", "Juan", "Judas Iscariote", "Tomás"],
        correct: 2,
        category: "Jesús",
        testament: "NT"
    },
    {
        question: "¿Dónde nació Jesús?",
        options: ["Jerusalén", "Belén", "Nazaret", "Capernaúm"],
        correct: 1,
        category: "Jesús",
        testament: "NT"
    },
    {
        question: "¿Cuál fue el primer milagro de Jesús?",
        options: ["Caminar sobre el agua", "Convertir agua en vino", "Sanar a un ciego", "Resucitar a Lázaro"],
        correct: 1,
        category: "Jesús",
        testament: "NT"
    },
    {
        question: "¿Cuántos discípulos tenía Jesús?",
        options: ["10", "11", "12", "13"],
        correct: 2,
        category: "Jesús",
        testament: "NT"
    },
    {
        question: "¿Cuál fue el sermón más famoso de Jesús?",
        options: ["Sermón del monte", "Sermón en la llanura", "Sermón en la barca", "Sermón en el templo"],
        correct: 0,
        category: "Jesús",
        testament: "NT"
    },
    {
        question: "¿Qué significa 'Cristo'?",
        options: ["Rey", "Ungido", "Salvador", "Profeta"],
        correct: 1,
        category: "Jesús",
        testament: "NT"
    },
    {
        question: "¿Dónde fue crucificado Jesús?",
        options: ["Monte de los Olivos", "Gólgota", "Monte Sinaí", "Monte Tabor"],
        correct: 1,
        category: "Jesús",
        testament: "NT"
    },
    {
        question: "¿Cuántos días después de su muerte resucitó Jesús?",
        options: ["1", "2", "3", "7"],
        correct: 2,
        category: "Jesús",
        testament: "NT"
    },
    {
        question: "¿Quién fue el primer discípulo en ver a Jesús resucitado?",
        options: ["Pedro", "Juan", "María Magdalena", "Tomás"],
        correct: 2,
        category: "Jesús",
        testament: "NT"
    },
    {
        question: "¿Qué día de la semana resucitó Jesús?",
        options: ["Viernes", "Sábado", "Domingo", "Lunes"],
        correct: 2,
        category: "Jesús",
        testament: "NT"
    },
    {
        question: "¿Dónde ascendió Jesús al cielo?",
        options: ["Jerusalén", "Monte de los Olivos", "Galilea", "Judea"],
        correct: 1,
        category: "Jesús",
        testament: "NT"
    },
    {
        question: "¿Quién escribió la mayoría de las epístolas del Nuevo Testamento?",
        options: ["Pedro", "Pablo", "Juan", "Jacobo"],
        correct: 1,
        category: "Apóstoles",
        testament: "NT"
    },
    {
        question: "¿Cuál es la epístola más corta del Nuevo Testamento?",
        options: ["2 Juan", "3 Juan", "Filemón", "Judas"],
        correct: 2,
        category: "Apóstoles",
        testament: "NT"
    },
    {
        question: "¿Qué significa 'evangelio'?",
        options: ["Buenas noticias", "Historia", "Carta", "Profecía"],
        correct: 0,
        category: "Apóstoles",
        testament: "NT"
    },
    {
        question: "¿Cuál fue la conversión más dramática en el Nuevo Testamento?",
        options: ["Zaqueo", "Pablo", "Mateo", "Nicodemo"],
        correct: 1,
        category: "Apóstoles",
        testament: "NT"
    },
    {
        question: "¿Qué libro termina con una visión apocalíptica?",
        options: ["Hebreos", "Apocalipsis", "Judas", "2 Pedro"],
        correct: 1,
        category: "Apocalipsis",
        testament: "NT"
    },
    {
        question: "¿Quién escribió el libro de Apocalipsis?",
        options: ["Pedro", "Pablo", "Juan", "Jacobo"],
        correct: 2,
        category: "Apocalipsis",
        testament: "NT"
    },
    {
        question: "¿Cuál es el último libro de la Biblia?",
        options: ["Judas", "Apocalipsis", "3 Juan", "Hebreos"],
        correct: 1,
        category: "Apocalipsis",
        testament: "NT"
    }
];

// Estado del quiz
let currentQuiz = {
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    timeLeft: 0,
    timer: null,
    difficulty: 'normal',
    category: 'all'
};

// Configuración del quiz
const quizConfig = {
    easy: { questions: 10, timePerQuestion: 30 },
    normal: { questions: 15, timePerQuestion: 25 },
    hard: { questions: 20, timePerQuestion: 20 }
};

// ============================
// Versículo del día (simple)
// ============================
const dailyVerses = [
    { text: "Jehová es mi pastor; nada me faltará.", ref: "Salmos 23:1" },
    { text: "Todo lo puedo en Cristo que me fortalece.", ref: "Filipenses 4:13" },
    { text: "Porque de tal manera amó Dios al mundo.", ref: "Juan 3:16" }
];

function loadRandomVerse() {
    const v = dailyVerses[Math.floor(Math.random() * dailyVerses.length)];
    document.getElementById("daily-verse-text").textContent = `"${v.text}"`;
    document.getElementById("daily-verse-ref").textContent = v.ref;
}

loadRandomVerse();

// ============================
// Mostrar libros
// ============================
function mostrarTestamento(tipo) {
    // Remove active class from all buttons with safety checks
    document.querySelectorAll(".tab-btn").forEach(b => {
        if (b && b.classList) {
            b.classList.remove("active");
        }
    });

    // Add active class to the clicked button with safety checks
    if (event && event.target && event.target.classList) {
        event.target.classList.add("active");
    }

    let books;
    if (tipo === "AT") {
        books = oldTestament;
    } else if (tipo === "NT") {
        books = newTestament;
    } else if (tipo === "ALL") {
        books = [...oldTestament, ...newTestament];
    } else {
        books = newTestament; // fallback
    }

    const grid = document.getElementById("books-grid");

    if (grid) {
        grid.innerHTML = books.map(book => `
            <div class="book-card" onclick="openBook('${book}')">
                📖 ${book.replaceAll("_", " ")}
            </div>
        `).join("");
    }
}

mostrarTestamento("ALL");

// ============================
// Función para mapear nombres de libros a nombres de carpetas
// ============================
function getFolderName(book) {
    // Remover underscores de libros que empiezan con números
    return book.replace(/_/g, '');
}

// ============================
// Abrir libro (capítulos)
// ============================
async function openBook(book) {
    try {
        const folderName = getFolderName(book);
        const fileName = `${book.toLowerCase()}_1.json`;
        const res = await fetch(`biblia/${folderName}/${fileName}`);
        if (!res.ok) throw "No existe";

        showChapter(book, 1, await res.json());
    } catch {
        showNotification("Error cargando el capítulo", "⚠️");
    }
}

// ============================
// Mostrar capítulo
// ============================
function showChapter(book, chapter, verses, fullBookData = null) {
    const modal = document.createElement("div");
    modal.className = "modal";

    let navButtons = `
        <div class="chapter-nav">
            <button onclick="navigateChapter('${book}', ${chapter - 1})" ${chapter <= 1 ? 'disabled' : ''}>← Anterior</button>
            <button onclick="navigateChapter('${book}', ${chapter + 1})">Siguiente →</button>
        </div>
    `;

    modal.innerHTML = `
        <div class="modal-box">
            <h2>${book.replaceAll("_"," ")} ${chapter}</h2>
            ${navButtons}
            <div class="chapter-text">
                ${verses.map(v => `<p><sup>${v[0]}</sup> ${v[1]}</p>`).join("")}
            </div>
            <button onclick="this.closest('.modal').remove()">Cerrar</button>
        </div>
    `;

    document.body.appendChild(modal);
}

// ============================
// Navegar entre capítulos
// ============================
async function navigateChapter(book, chapter) {
    if (chapter < 1) return; // No permitir capítulos menores a 1

    try {
        const folderName = getFolderName(book);
        const fileName = `${book.toLowerCase()}_${chapter}.json`;
        const res = await fetch(`biblia/${folderName}/${fileName}`);
        if (!res.ok) throw "No existe";

        // Cerrar modal actual
        document.querySelector('.modal').remove();
        // Mostrar nuevo capítulo
        showChapter(book, chapter, await res.json());
    } catch {
        showNotification("Capítulo no encontrado", "⚠️");
    }
}

// ============================
// Favoritos
// ============================
function addToFavorites() {
    const text = document.getElementById("daily-verse-text").textContent;
    const ref = document.getElementById("daily-verse-ref").textContent;

    let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    favs.unshift({ text, ref });
    localStorage.setItem("favorites", JSON.stringify(favs));

    notify("Versículo guardado ❤️", "✅");
}

// ============================
// Compartir
// ============================
function shareVerse() {
    const msg = `${document.getElementById("daily-verse-text").textContent} ${document.getElementById("daily-verse-ref").textContent}`;
    navigator.clipboard.writeText(msg);
    showNotification("Copiado 📋", "✅");
}

// ============================
// Notificaciones
// ============================
function showNotification(message, icon = 'ℹ️') {
    // Remover notificaciones existentes
    const existing = document.querySelectorAll('.notification');
    existing.forEach(notif => notif.remove());
    
    // Crear nueva notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'assertive');
    
    notification.innerHTML = `
        <span class="notification-icon">${icon}</span>
        <span class="notification-text">${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    // Estilos
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: 'rgba(34, 197, 94, 0.9)',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-xl)',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        zIndex: '9999',
        animation: 'slide-in-right 0.3s ease',
        maxWidth: '400px',
        border: '2px solid var(--nav-border)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
    });
    
    // Estilos para el botón de cerrar
    const closeBtn = notification.querySelector('.notification-close');
    Object.assign(closeBtn.style, {
        background: 'none',
        border: 'none',
        color: 'var(--text-secondary)',
        fontSize: '1.5rem',
        cursor: 'pointer',
        padding: '0',
        marginLeft: '0.5rem',
        lineHeight: '1'
    });
    
    document.body.appendChild(notification);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ============================
// FUNCIONES DEL QUIZ
// ============================

// Iniciar quiz
function startQuizGame() {
    // Ocultar otras secciones
    document.getElementById('search-section').style.display = 'none';
    document.getElementById('favorites-section').style.display = 'none';
    document.getElementById('verse-section').style.display = 'none';
    document.getElementById('books-section').style.display = 'none';

    // Mostrar sección del quiz
    document.getElementById('quiz-section').style.display = 'block';

    // Mostrar configuración del quiz
    showQuizSetup();
}

// Mostrar configuración del quiz
function showQuizSetup() {
    const quizContent = document.getElementById('quiz-content');

    quizContent.innerHTML = `
        <div class="quiz-setup">
            <h3>🎯 Configura tu Quiz Bíblico</h3>

            <div class="quiz-option">
                <label>Dificultad:</label>
                <select id="quiz-difficulty" class="quiz-select">
                    <option value="easy">Fácil (10 preguntas, 30s cada una)</option>
                    <option value="normal" selected>Normal (15 preguntas, 25s cada una)</option>
                    <option value="hard">Difícil (20 preguntas, 20s cada una)</option>
                </select>
            </div>

            <div class="quiz-option">
                <label>Categoría:</label>
                <select id="quiz-category" class="quiz-select">
                    <option value="all" selected>Todas las categorías</option>
                    <option value="AT">Antiguo Testamento</option>
                    <option value="NT">Nuevo Testamento</option>
                    <option value="Creación">Creación</option>
                    <option value="Jesús">Jesús</option>
                    <option value="Profetas">Profetas</option>
                </select>
            </div>

            <div class="quiz-actions">
                <button onclick="startQuiz()" class="btn-plus">🚀 Comenzar Quiz</button>
                <button onclick="showQuizStats()" class="btn-secondary">📊 Ver Estadísticas</button>
            </div>
        </div>
    `;
}

// Iniciar el quiz con configuración
function startQuiz() {
    const difficulty = document.getElementById('quiz-difficulty').value;
    const category = document.getElementById('quiz-category').value;

    // Configurar quiz
    currentQuiz.difficulty = difficulty;
    currentQuiz.category = category;
    currentQuiz.questions = getQuizQuestions(difficulty, category);
    currentQuiz.currentQuestionIndex = 0;
    currentQuiz.score = 0;
    currentQuiz.answers = [];
    currentQuiz.timeLeft = quizConfig[difficulty].timePerQuestion;

    // Mezclar preguntas
    shuffleArray(currentQuiz.questions);

    // Mostrar primera pregunta
    showQuestion();
}

// Obtener preguntas según configuración
function getQuizQuestions(difficulty, category) {
    let questions = [...quizQuestions];

    // Filtrar por categoría
    if (category !== 'all') {
        if (category === 'AT' || category === 'NT') {
            questions = questions.filter(q => q.testament === category);
        } else {
            questions = questions.filter(q => q.category === category);
        }
    }

    // Limitar cantidad según dificultad
    const maxQuestions = quizConfig[difficulty].questions;
    if (questions.length > maxQuestions) {
        shuffleArray(questions);
        questions = questions.slice(0, maxQuestions);
    }

    return questions;
}

// Mostrar pregunta actual
function showQuestion() {
    const question = currentQuiz.questions[currentQuiz.currentQuestionIndex];
    const quizContent = document.getElementById('quiz-content');

    // Reiniciar timer
    clearInterval(currentQuiz.timer);
    currentQuiz.timeLeft = quizConfig[currentQuiz.difficulty].timePerQuestion;

    quizContent.innerHTML = `
        <div class="quiz-question">
            <div class="quiz-header">
                <div class="quiz-progress">
                    Pregunta ${currentQuiz.currentQuestionIndex + 1} de ${currentQuiz.questions.length}
                </div>
                <div class="quiz-score">
                    Puntuación: ${currentQuiz.score}/${currentQuiz.questions.length}
                </div>
            </div>

            <div class="quiz-timer">
                <div class="timer-bar" id="timer-bar"></div>
                <div class="timer-text">⏱️ ${currentQuiz.timeLeft}s</div>
            </div>

            <div class="question-card">
                <h3>${question.question}</h3>
                <div class="options-grid">
                    ${question.options.map((option, index) => `
                        <button class="option-btn" onclick="selectAnswer(${index})">
                            ${String.fromCharCode(65 + index)}. ${option}
                        </button>
                    `).join('')}
                </div>
            </div>

            <div class="quiz-category">
                Categoría: ${question.category} (${question.testament})
            </div>
        </div>
    `;

    // Iniciar timer
    startTimer();
}

// Iniciar timer
function startTimer() {
    const timerBar = document.getElementById('timer-bar');
    const timerText = document.querySelector('.timer-text');
    const totalTime = quizConfig[currentQuiz.difficulty].timePerQuestion;

    currentQuiz.timer = setInterval(() => {
        currentQuiz.timeLeft--;
        const percentage = (currentQuiz.timeLeft / totalTime) * 100;

        if (timerBar) {
            timerBar.style.width = `${percentage}%`;
            timerBar.style.backgroundColor = currentQuiz.timeLeft <= 5 ? '#ef4444' : '#22c55e';
        }

        if (timerText) {
            timerText.textContent = `⏱️ ${currentQuiz.timeLeft}s`;
        }

        if (currentQuiz.timeLeft <= 0) {
            clearInterval(currentQuiz.timer);
            selectAnswer(-1); // Tiempo agotado
        }
    }, 1000);
}

// Seleccionar respuesta
function selectAnswer(selectedIndex) {
    clearInterval(currentQuiz.timer);

    const question = currentQuiz.questions[currentQuiz.currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    const isTimeout = selectedIndex === -1;

    // Guardar respuesta
    currentQuiz.answers.push({
        question: question.question,
        selected: selectedIndex,
        correct: question.correct,
        isCorrect: isCorrect,
        isTimeout: isTimeout
    });

    // Actualizar puntuación
    if (isCorrect) {
        currentQuiz.score++;
    }

    // Mostrar resultado
    showAnswerResult(isCorrect, isTimeout, question);

    // Pasar a siguiente pregunta después de 2 segundos
    setTimeout(() => {
        currentQuiz.currentQuestionIndex++;

        if (currentQuiz.currentQuestionIndex < currentQuiz.questions.length) {
            showQuestion();
        } else {
            showQuizResults();
        }
    }, 2000);
}

// Mostrar resultado de la respuesta
function showAnswerResult(isCorrect, isTimeout, question) {
    const quizContent = document.getElementById('quiz-content');

    let resultHTML = `
        <div class="quiz-result ${isCorrect ? 'correct' : 'incorrect'}">
            <div class="result-icon">
                ${isCorrect ? '✅' : isTimeout ? '⏰' : '❌'}
            </div>
            <h3>${isCorrect ? '¡Correcto!' : isTimeout ? 'Tiempo agotado' : 'Incorrecto'}</h3>
            <p>La respuesta correcta es:</p>
            <div class="correct-answer">
                ${String.fromCharCode(65 + question.correct)}. ${question.options[question.correct]}
            </div>
    `;

    if (!isCorrect && !isTimeout) {
        resultHTML += `
            <p>Tu respuesta fue:</p>
            <div class="wrong-answer">
                ${String.fromCharCode(65 + currentQuiz.answers[currentQuiz.answers.length - 1].selected)}.
                ${question.options[currentQuiz.answers[currentQuiz.answers.length - 1].selected]}
            </div>
        `;
    }

    resultHTML += `</div>`;
    quizContent.innerHTML = resultHTML;
}

// Mostrar resultados finales
function showQuizResults() {
    const quizContent = document.getElementById('quiz-content');
    const percentage = Math.round((currentQuiz.score / currentQuiz.questions.length) * 100);

    // Guardar estadísticas
    saveQuizStats(currentQuiz.score, currentQuiz.questions.length, percentage, currentQuiz.difficulty);

    let grade = '';
    let gradeColor = '';
    let message = '';

    if (percentage >= 90) {
        grade = 'A+';
        gradeColor = '#22c55e';
        message = '¡Excelente! Eres un experto en la Biblia.';
    } else if (percentage >= 80) {
        grade = 'A';
        gradeColor = '#22c55e';
        message = '¡Muy bien! Conoces muy bien la Palabra de Dios.';
    } else if (percentage >= 70) {
        grade = 'B';
        gradeColor = '#f59e0b';
        message = 'Buen trabajo. Sigue estudiando la Biblia.';
    } else if (percentage >= 60) {
        grade = 'C';
        gradeColor = '#f59e0b';
        message = 'Regular. Dedica más tiempo al estudio bíblico.';
    } else {
        grade = 'D';
        gradeColor = '#ef4444';
        message = 'Necesitas estudiar más la Biblia.';
    }

    quizContent.innerHTML = `
        <div class="quiz-results">
            <div class="results-header">
                <h2>🎉 ¡Quiz Completado!</h2>
                <div class="final-score" style="color: ${gradeColor}">
                    <div class="score-circle">${percentage}%</div>
                    <div class="grade">Calificación: ${grade}</div>
                </div>
            </div>

            <div class="results-stats">
                <div class="stat-item">
                    <span class="stat-number">${currentQuiz.score}</span>
                    <span class="stat-label">Correctas</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${currentQuiz.questions.length - currentQuiz.score}</span>
                    <span class="stat-label">Incorrectas</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${currentQuiz.questions.length}</span>
                    <span class="stat-label">Total</span>
                </div>
            </div>

            <div class="results-message">
                <p>${message}</p>
            </div>

            <div class="results-actions">
                <button onclick="startQuizGame()" class="btn-plus">🔄 Jugar de Nuevo</button>
                <button onclick="showQuizStats()" class="btn-secondary">📊 Ver Estadísticas</button>
                <button onclick="showQuizReview()" class="btn-secondary">📝 Revisar Respuestas</button>
            </div>
        </div>
    `;
}

// Mostrar revisión de respuestas
function showQuizReview() {
    const quizContent = document.getElementById('quiz-content');

    let reviewHTML = `
        <div class="quiz-review">
            <h3>📝 Revisión de Respuestas</h3>
            <div class="review-list">
    `;

    currentQuiz.questions.forEach((question, index) => {
        const answer = currentQuiz.answers[index];
        const isCorrect = answer.isCorrect;

        reviewHTML += `
            <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="review-question">
                    <strong>Pregunta ${index + 1}:</strong> ${question.question}
                </div>
                <div class="review-answer">
                    <div class="your-answer">
                        Tu respuesta: ${answer.isTimeout ? '⏰ Tiempo agotado' :
                        `${String.fromCharCode(65 + answer.selected)}. ${question.options[answer.selected]}`}
                    </div>
                    <div class="correct-answer">
                        Correcta: ${String.fromCharCode(65 + question.correct)}. ${question.options[question.correct]}
                    </div>
                </div>
            </div>
        `;
    });

    reviewHTML += `
            </div>
            <div class="review-actions">
                <button onclick="showQuizResults()" class="btn-secondary">← Volver a Resultados</button>
            </div>
        </div>
    `;

    quizContent.innerHTML = reviewHTML;
}

// Mostrar estadísticas del quiz
function showQuizStats() {
    const stats = getQuizStats();
    const quizContent = document.getElementById('quiz-content');

    quizContent.innerHTML = `
        <div class="quiz-stats">
            <h3>📊 Tus Estadísticas del Quiz</h3>

            <div class="stats-overview">
                <div class="stat-card">
                    <div class="stat-number">${stats.totalQuizzes}</div>
                    <div class="stat-label">Quizzes jugados</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${stats.averageScore}%</div>
                    <div class="stat-label">Puntuación promedio</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${stats.bestScore}%</div>
                    <div class="stat-label">Mejor puntuación</div>
                </div>
            </div>

            <div class="stats-details">
                <h4>Por dificultad:</h4>
                <div class="difficulty-stats">
                    <div class="difficulty-item">
                        <span>Fácil:</span>
                        <span>${stats.byDifficulty.easy || 0} jugados</span>
                    </div>
                    <div class="difficulty-item">
                        <span>Normal:</span>
                        <span>${stats.byDifficulty.normal || 0} jugados</span>
                    </div>
                    <div class="difficulty-item">
                        <span>Difícil:</span>
                        <span>${stats.byDifficulty.hard || 0} jugados</span>
                    </div>
                </div>
            </div>

            <div class="stats-actions">
                <button onclick="startQuizGame()" class="btn-plus">🎯 Jugar Quiz</button>
                <button onclick="clearQuizStats()" class="btn-secondary">🗑️ Limpiar Estadísticas</button>
            </div>
        </div>
    `;
}

// Guardar estadísticas del quiz
function saveQuizStats(score, total, percentage, difficulty) {
    const stats = getQuizStats();

    stats.totalQuizzes++;
    stats.totalScore += percentage;
    stats.averageScore = Math.round(stats.totalScore / stats.totalQuizzes);
    stats.bestScore = Math.max(stats.bestScore, percentage);
    stats.byDifficulty[difficulty] = (stats.byDifficulty[difficulty] || 0) + 1;

    localStorage.setItem('quizStats', JSON.stringify(stats));
}

// Obtener estadísticas del quiz
function getQuizStats() {
    return JSON.parse(localStorage.getItem('quizStats') || JSON.stringify({
        totalQuizzes: 0,
        totalScore: 0,
        averageScore: 0,
        bestScore: 0,
        byDifficulty: {}
    }));
}

// Limpiar estadísticas
function clearQuizStats() {
    if (confirm('¿Estás seguro de que quieres limpiar todas las estadísticas del quiz?')) {
        localStorage.removeItem('quizStats');
        showQuizStats();
        showNotification('Estadísticas limpiadas', '🗑️');
    }
}

// Función utilitaria para mezclar array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ============================
// Mostrar Favoritos
// ============================
function showFavorites() {
    // Ocultar otras secciones
    document.getElementById('search-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('verse-section').style.display = 'none';
    document.getElementById('books-section').style.display = 'none';

    // Mostrar sección de favoritos
    document.getElementById('favorites-section').style.display = 'block';

    // Cargar favoritos
    loadFavorites();
}

// Cargar y mostrar favoritos
function loadFavorites() {
    const favoritesList = document.getElementById('favorites-list');
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (favs.length === 0) {
        favoritesList.innerHTML = '<p class="empty-state">No tienes versículos favoritos aún. ¡Agrega algunos!</p>';
        return;
    }

    favoritesList.innerHTML = favs.map((fav, index) => `
        <div class="verse-card">
            <div class="verse-content">
                <blockquote>"${fav.text}"</blockquote>
                <cite>${fav.ref}</cite>
            </div>
            <div class="verse-actions">
                <button onclick="shareFavorite('${fav.text}', '${fav.ref}')" class="btn-icon">📤</button>
                <button onclick="removeFavorite(${index})" class="btn-icon">🗑️</button>
            </div>
        </div>
    `).join('');
}

// Compartir favorito
function shareFavorite(text, ref) {
    const message = `${text} ${ref}`;
    navigator.clipboard.writeText(message);
    showNotification("Copiado 📋", "✅");
}

// Remover favorito
function removeFavorite(index) {
    let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    favs.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favs));
    loadFavorites();
    notify("Versículo removido de favoritos", "🗑️");
}

// ============================
// Mostrar Búsqueda
// ============================
function showSearch() {
    // Ocultar otras secciones
    document.getElementById('favorites-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('verse-section').style.display = 'none';
    document.getElementById('books-section').style.display = 'none';

    // Mostrar sección de búsqueda
    document.getElementById('search-section').style.display = 'block';
}
