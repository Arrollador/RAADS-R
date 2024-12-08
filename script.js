document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        "Soy una persona empática.",
        "A menudo utilizo palabras y frases de películas, televisión o internet en las conversaciones.",
        "A menudo me sorprende que me digan que he sido grosera(e)(o).",
        "A veces hablo demasiado alto o demasiado bajo y no me doy cuenta.",
        "Generalmente no sé cómo actuar en situaciones sociales.",
        "Puedo 'ponerme en los zapatos de otras personas'.",
        "Me cuesta entender lo que significan algunas frases, como 'eres la niña de mis ojos'.",
        "Sólo me gusta hablar con personas que comparten mis intereses especiales.",
        "Me concentro en los detalles más que en la idea general.",
        "Siempre noto cómo se siente la comida en mi boca. Esto es más importante para mí que su sabor.",
        "Extraño a mis mejores amigos o familiares cuando no los veo por mucho tiempo.",
        "A veces ofendo a los demás al decir lo que pienso, aunque no sea mi intención.",
        "Sólo me gusta pensar y hablar de las cosas que me interesan.",
        "Prefiero salir a comer a un restaurante solo que con alguien que conozco.",
        "No puedo imaginar cómo sería ser otra persona.",
        "Me han dicho que soy torpe o descoordinada(e)(o).",
        "Otros me consideran rara(e)(o) o diferente.",
        "Entiendo cuando un amigo necesita ser consolado.",
        "Soy muy sensible a cómo se siente la ropa cuando la toco. Para mí es más importante cómo se sienten que cómo se ven.",
        "Copio la forma en que las personas hablan/actúan. Me ayuda a parecer normal.",
        "Puede resultarme muy intimidante hablar con más de una persona al mismo tiempo.",
        "Tengo que 'actuar normal' para complacer a otras personas y agradarles.",
        "Normalmente me resulta fácil conocer gente nueva.",
        "Me confundo mucho si me interrumpen cuando estoy hablando de algo que me interesa mucho.",
        "Me resulta difícil entender cómo se siente otra persona cuando estamos hablando.",
        "Me gusta tener una conversación grupal, por ejemplo, en una comida del trabajo.",
        "Tomo las cosas demasiado literalmente, por lo que a menudo me cuesta entender lo que la gente intenta decir.",
        "Me resulta muy difícil entender cuando alguien se siente avergonzada(e)(o) o celosa(e)(o).",
        "Algunas texturas ordinarias, que no molestan a otros, se sienten desagradable cuando tocan mi piel.",
        "Me molesta mucho que repentinamente cambie la forma en que me gusta hacer las cosas.",
        "Nunca quise ni necesité tener lo que otras personas llaman una 'relación íntima'.",
        "Me resulta difícil iniciar y detener una conversación. Necesito continuar hasta terminar.",
        "Hablo con un ritmo normal.",
        "El mismo sonido, color o textura puede repentinamente cambiar y pasar de ser muy estimulante a muy apagado.",
        "Me parece incómoda la frase 'te llevo bajo la piel'.",
        "A veces un sonido de una palabra o un ruido agudo puede resultar doloroso para mis oídos.",
        "Soy un tipo de persona comprensiva.",
        "No conecto con los personajes de las películas y no logro sentir lo que ellos sienten.",
        "No puedo saber cuándo alguien está coqueteando conmigo.",
        "Puedo ver en mi mente con exacto detalle las cosas que me interesan.",
        "Mantengo listas de cosas que me interesan, incluso si no tienen ninguna utilidad práctica.",
        "Cuando me siento abrumada(e)(o) por mis sentidos, tengo que aislarme para apagarlos.",
        "Me gusta hablar de las cosas con mis amigos.",
        "No sé distinguir si alguien está interesado o aburrido con lo que estoy diciendo.",
        "Me resulta muy difícil leer expresiones faciales y los movimientos de manos y cuerpo de una persona cuando habla.",
        "Una misma cosa (como la ropa o la temperatura) puede parecerme muy diferente en distintos momentos.",
        "Me siento muy cómoda(e)(o) teniendo citas o estando en situaciones sociales con otras personas.",
        "Intento ser lo más útil que puedo cuando otras personas me cuentan sus problemas personales.",
        "Me han dicho que tengo una voz inusual (por ejemplo, plana, monótona, infantil o aguda).",
        "A veces un pensamiento o tema se me queda atorado en la mente y tengo que hablar de ello, aunque a nadie le interese.",
        "Hago ciertas cosas con las manos de forma repetida (como aletear, hacer girar palos o cuerdas, agitar cosas junto a los ojos, etc).",
        "Nunca me ha interesado lo que la mayoría de las personas que conozco consideran interesante.",
        "Se me considera un tipo de persona compasiva.",
        "Me llevo bien con otras personas siguiendo una serie de reglas específicas que me ayudan a parecer normal.",
        "Me resulta muy difícil trabajar y desenvolverme en grupos.",
        "Cuando hablo con alguien, es difícil cambiar de tema. Si la otra persona lo hace, puedo molestarme y/o confundirme mucho.",
        "A veces tengo que taparme los oídos para bloquear ruidos dolorosos (como las aspiradoras o la gente que habla demasiado o en voz muy alta).",
        "Puedo charlar y tener pequeñas conversaciones con la gente.",
        "A veces, las cosas que deberían ser dolorosas, no me duelen (por ejemplo, cuando me lastimo o me quemo la mano con la estufa).",
        "Cuando hablo con alguien, me cuesta saber cuándo es mi turno de hablar o de escuchar.",
        "Quienes mejor me conocen me consideran un solitario(a)(e).",
        "Usualmente hablo en un tono normal.",
        "Me gusta que las cosas sean exactamente iguales día tras día y hasta los pequeños cambios en mis rutinas me molestan.",
        "Cómo hacer amigos y socializar es un misterio para mí.",
        "Me calma dar vueltas o mecerme en una silla cuando me siento estresado.",
        "La frase 'con el corazón en la mano' no tiene sentido para mí.",
        "Si estoy en un lugar donde hay muchos olores, texturas que sentir, ruidos o luces brillantes, me siento ansiosa(e)(o) o asustada(e)(o).",
        "Puedo darme cuenta cuando alguien dice una cosa, pero quiere decir otra.",
        "Me gusta estar sola(e)(o) tanto como pueda.",
        "Mantengo mis pensamientos apilados en mi memoria como si estuvieran archivados, y busco lo que necesito entre la pila hasta encontrar el correcto (u otra forma única).",
        "El mismo sonido, a veces, puede parecer muy fuerte o muy suave, aunque sé que no ha cambiado.",
        "Disfruto pasar tiempo comiendo y hablando con mi familia y amigos.",
        "No puedo tolerar cosas que no me gustan (como olores, texturas, sonidos o colores).",
        "No me gusta que me abracen ni me tomen en brazos.",
        "Cuando voy a algún lugar, tengo que seguir una ruta familiar o puedo sentirme muy confundida(e)(o) y molesta(e)(o).",
        "Me cuesta entender qué esperan los demás de mí.",
        "Me gusta tener amigos cercanos.",
        "La gente me dice que doy demasiados detalles.",
        "A menudo me dicen que hago preguntas vergonzosas.",
        "Suelo señalar los errores de otras personas."
    ];

    const options = [
        "Cierto, ahora y desde antes de los 16 años",
        "Cierto, sólo ahora de adulto",
        "Cierto, sólo cuando tenía menos de 16 años",
        "Nunca, ni ahora ni antes"
    ];

    const resultRanges = [
        { min: 0, max: 39, text: "No eres autista. No hay conductas suficientes para sospechar de autismo." },
        { min: 40, max: 64, text: "Algunas conductas comúnmente asociadas a autismo, pero probablemente no eres autista." },
        { min: 65, max: 65, text: "Puntaje mínimo para autismo." },
        { min: 66, max: 99, text: "Indicios fuertes de autismo." },
        { min: 100, max: 159, text: "Fuerte evidencia de autismo. Probablemente eres autista." },
        { min: 160, max: 240, text: "Evidencia muy fuerte de autismo. Muy probablemente eres autista." }
    ];

    const form = document.getElementById("survey-form");
    const questionsContainer = document.getElementById("questions");

    questions.forEach((q, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <label>${index + 1}. ${q}</label>
            <select required>
                <option value="">Seleccione una opción</option>
                ${options.map((option, i) => `<option value="${i}">${option}</option>`).join('')}
            </select>
        `;
        questionsContainer.appendChild(div);
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const totalScore = Array.from(document.querySelectorAll("select")).reduce((sum, select) => {
            const value = parseInt(select.value, 10);
            return sum + (value === 0 ? 3 : value === 1 ? 2 : value === 2 ? 1 : 0);
        }, 0);

        const conclusion = resultRanges.find(range => totalScore >= range.min && totalScore <= range.max).text;

        document.getElementById("score").textContent = `Puntaje total: ${totalScore}`;
        document.getElementById("conclusion").textContent = conclusion;
        document.getElementById("result").classList.remove("hidden");
    });
});
