(function initPracticePage() {
  const questionElement = document.getElementById("mcq-question");
  const topicMetaElement = document.getElementById("mcq-topic-meta");
  const stimulusElement = document.getElementById("mcq-stimulus");
  const optionsElement = document.getElementById("mcq-options");
  const resultElement = document.getElementById("mcq-result");
  const explanationElement = document.getElementById("mcq-explanation");
  const unitFilterElement = document.getElementById("unit-filter");
  const topicFilterElement = document.getElementById("topic-filter");
  const nextButton = document.getElementById("next-question");

  if (
    !questionElement ||
    !topicMetaElement ||
    !stimulusElement ||
    !optionsElement ||
    !resultElement ||
    !explanationElement ||
    !unitFilterElement ||
    !topicFilterElement ||
    !nextButton
  ) {
    return;
  }

  let currentQuestion = null;
  let hasAnswered = false;
  let allQuestions = [];

  function setNextButtonVisible(isVisible) {
    nextButton.classList.toggle("is-hidden", !isVisible);
  }

  function parseCsv(csvText) {
    const rows = [];
    let currentValue = "";
    let currentRow = [];
    let isInsideQuotes = false;

    for (let index = 0; index < csvText.length; index += 1) {
      const currentChar = csvText[index];
      const nextChar = csvText[index + 1];

      if (currentChar === "\"") {
        if (isInsideQuotes && nextChar === "\"") {
          currentValue += "\"";
          index += 1;
        } else {
          isInsideQuotes = !isInsideQuotes;
        }
        continue;
      }

      if (currentChar === "," && !isInsideQuotes) {
        currentRow.push(currentValue);
        currentValue = "";
        continue;
      }

      if ((currentChar === "\n" || currentChar === "\r") && !isInsideQuotes) {
        if (currentChar === "\r" && nextChar === "\n") {
          index += 1;
        }
        currentRow.push(currentValue);
        if (currentRow.some((value) => value !== "")) {
          rows.push(currentRow);
        }
        currentRow = [];
        currentValue = "";
        continue;
      }

      currentValue += currentChar;
    }

    if (currentValue.length > 0 || currentRow.length > 0) {
      currentRow.push(currentValue);
      rows.push(currentRow);
    }

    return rows;
  }

  function mapCsvRowsToQuestions(csvRows) {
    if (csvRows.length <= 1) {
      return [];
    }

    const header = csvRows[0];
    const fieldIndexMap = new Map();
    header.forEach((fieldName, index) => {
      fieldIndexMap.set(fieldName.trim(), index);
    });

    const requiredFields = [
      "id",
      "unit",
      "topic",
      "topicTitle",
      "stimulusType",
      "stimulusText",
      "stimulusImageUrl",
      "stimulusImageAlt",
      "stimulusSource",
      "question",
      "choiceA",
      "choiceB",
      "choiceC",
      "choiceD",
      "answer",
      "explanation"
    ];

    const missingFields = requiredFields.filter((field) => !fieldIndexMap.has(field));
    if (missingFields.length > 0) {
      throw new Error(`Missing CSV columns: ${missingFields.join(", ")}`);
    }

    return csvRows.slice(1).map((row) => ({
      id: row[fieldIndexMap.get("id")] || "",
      unit: Number(row[fieldIndexMap.get("unit")]),
      topic: row[fieldIndexMap.get("topic")] || "",
      topicTitle: row[fieldIndexMap.get("topicTitle")] || "",
      stimulusType: (row[fieldIndexMap.get("stimulusType")] || "none").toLowerCase(),
      stimulusText: row[fieldIndexMap.get("stimulusText")] || "",
      stimulusImageUrl: row[fieldIndexMap.get("stimulusImageUrl")] || "",
      stimulusImageAlt: row[fieldIndexMap.get("stimulusImageAlt")] || "Historical evidence image",
      stimulusSource: row[fieldIndexMap.get("stimulusSource")] || "",
      question: row[fieldIndexMap.get("question")] || "",
      choices: [
        row[fieldIndexMap.get("choiceA")] || "",
        row[fieldIndexMap.get("choiceB")] || "",
        row[fieldIndexMap.get("choiceC")] || "",
        row[fieldIndexMap.get("choiceD")] || ""
      ],
      answer: Number(row[fieldIndexMap.get("answer")]),
      explanation: row[fieldIndexMap.get("explanation")] || ""
    })).filter((question) => (
      Number.isFinite(question.unit) &&
      question.topic &&
      question.question &&
      question.choices.length === 4 &&
      Number.isFinite(question.answer) &&
      question.answer >= 0 &&
      question.answer <= 3
    ));
  }

  async function loadQuestionsFromCsv() {
    const response = await fetch("questions.csv", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Could not load questions.csv (${response.status})`);
    }

    const csvText = await response.text();
    const csvRows = parseCsv(csvText);
    return mapCsvRowsToQuestions(csvRows);
  }

  function getUnitFilteredQuestions() {
    const unitValue = unitFilterElement.value;
    if (unitValue === "all") {
      return allQuestions;
    }
    const unitNumber = Number(unitValue);
    return allQuestions.filter((question) => question.unit === unitNumber);
  }

  function populateTopicFilter() {
    const unitQuestions = getUnitFilteredQuestions();
    const uniqueTopics = new Map();
    unitQuestions.forEach((question) => {
      if (!uniqueTopics.has(question.topic)) {
        uniqueTopics.set(question.topic, question.topicTitle);
      }
    });

    const previousValue = topicFilterElement.value;
    topicFilterElement.innerHTML = "";

    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "All Topics";
    topicFilterElement.appendChild(allOption);

    uniqueTopics.forEach((topicTitle, topicId) => {
      const option = document.createElement("option");
      option.value = topicId;
      option.textContent = `${topicId} ${topicTitle}`;
      topicFilterElement.appendChild(option);
    });

    if (previousValue && uniqueTopics.has(previousValue)) {
      topicFilterElement.value = previousValue;
    } else {
      topicFilterElement.value = "all";
    }
  }

  function getFilteredQuestions() {
    const unitFiltered = getUnitFilteredQuestions();
    const topicValue = topicFilterElement.value;
    if (topicValue === "all") {
      return unitFiltered;
    }
    return unitFiltered.filter((question) => question.topic === topicValue);
  }

  function pickQuestion() {
    const pool = getFilteredQuestions();
    if (pool.length === 0) {
      currentQuestion = null;
      hasAnswered = false;
      questionElement.textContent = "No questions available for this filter yet.";
      topicMetaElement.textContent = "";
      stimulusElement.classList.add("is-hidden");
      stimulusElement.innerHTML = "";
      optionsElement.innerHTML = "";
      resultElement.textContent = "";
      explanationElement.textContent = "";
      setNextButtonVisible(false);
      return;
    }

    const randomIndex = Math.floor(Math.random() * pool.length);
    currentQuestion = pool[randomIndex];

    questionElement.textContent = currentQuestion.question;
    topicMetaElement.textContent = `Topic ${currentQuestion.topic}: ${currentQuestion.topicTitle}`;
    renderStimulus(currentQuestion);
    optionsElement.innerHTML = "";
    resultElement.textContent = "";
    explanationElement.textContent = "";
    resultElement.className = "mcq-result";
    hasAnswered = false;
    setNextButtonVisible(false);

    currentQuestion.choices.forEach((choiceText, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "mcq-option";
      button.textContent = choiceText;
      button.addEventListener("click", () => {
        if (hasAnswered) {
          return;
        }
        hasAnswered = true;
        const isCorrect = index === currentQuestion.answer;
        resultElement.textContent = isCorrect ? "Correct." : "Not quite. Try the explanation and logic below.";
        resultElement.className = isCorrect ? "mcq-result correct" : "mcq-result incorrect";
        explanationElement.textContent = currentQuestion.explanation;
        setNextButtonVisible(true);

        const optionButtons = optionsElement.querySelectorAll("button");
        optionButtons.forEach((optionButton, optionIndex) => {
          optionButton.disabled = true;
          if (optionIndex === currentQuestion.answer) {
            optionButton.classList.add("correct");
          } else if (optionIndex === index && !isCorrect) {
            optionButton.classList.add("incorrect");
          }
        });
      });
      optionsElement.appendChild(button);
    });
  }

  function renderStimulus(question) {
    const type = question.stimulusType || "none";
    if (type === "text" && question.stimulusText) {
      stimulusElement.classList.remove("is-hidden");
      stimulusElement.innerHTML = `
        <div class="mcq-stimulus-header">Text Evidence</div>
        <p class="mcq-stimulus-text">${escapeHtml(question.stimulusText)}</p>
      `;
      return;
    }

    if (type === "image" && question.stimulusImageUrl) {
      const sourceHtml = question.stimulusSource
        ? `<p class="mcq-stimulus-source"><strong>Source:</strong> <a href="${escapeHtml(question.stimulusSource)}" target="_blank" rel="noopener noreferrer">${escapeHtml(question.stimulusSource)}</a></p>`
        : "";
      stimulusElement.classList.remove("is-hidden");
      stimulusElement.innerHTML = `
        <div class="mcq-stimulus-header">Image Evidence</div>
        <img class="mcq-stimulus-image" src="${escapeHtml(question.stimulusImageUrl)}" alt="${escapeHtml(question.stimulusImageAlt)}" />
        ${sourceHtml}
      `;
      return;
    }

    stimulusElement.classList.add("is-hidden");
    stimulusElement.innerHTML = "";
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll("\"", "&quot;")
      .replaceAll("'", "&#039;");
  }

  async function initializePractice() {
    try {
      allQuestions = await loadQuestionsFromCsv();
      if (allQuestions.length === 0) {
        throw new Error("No questions loaded from CSV.");
      }
      unitFilterElement.addEventListener("change", () => {
        populateTopicFilter();
        pickQuestion();
      });
      topicFilterElement.addEventListener("change", pickQuestion);
      nextButton.addEventListener("click", pickQuestion);
      populateTopicFilter();
      pickQuestion();
    } catch (error) {
      questionElement.textContent = "Could not load question bank.";
      topicMetaElement.textContent = "";
      optionsElement.innerHTML = "";
      resultElement.className = "mcq-result incorrect";
      resultElement.textContent = "Check questions.csv format and refresh.";
      explanationElement.textContent = String(error.message || error);
      setNextButtonVisible(false);
    }
  }

  initializePractice();
})();