/**
 * PRONOUNS AND REFERENCING - Quiz Application Logic
 * Trường Cao đẳng Công nghệ Thủ Đức (TDC)
 * 
 * Features:
 * - 20 Comprehensive Questions on Pronouns & Referencing
 * - Single docked frame on Mobile & iPad
 * - Strictly NO hints during test; Detailed explanations & Vietnamese translations post-submission
 * - Live Visitor Counter & Student Sign-in Tracking for GitHub deployment
 * - Teacher Admin Panel with CSV export
 */

// 20-Question Data Array
const QUIZ_DATA = [
  {
    id: 1,
    question: "1. The hurricane took several days to blow ________ out.",
    options: [
      { key: "A", text: "it" },
      { key: "B", text: "its" },
      { key: "C", text: "itself" },
      { key: "D", text: "it’s" }
    ],
    answer: "C",
    translation: "Cơn bão đã mất vài ngày để suy yếu dần rồi tự tan biến.",
    explanation: "Cụm phrasal verb/thành ngữ 'blow itself out' dùng cho bão hoặc gió lớn, có nghĩa là cơn bão dần yếu đi rồi tự tan biến hoàn toàn. Chủ ngữ 'The hurricane' là danh từ số ít chỉ vật, do đó ta dùng đại từ phản thân tương ứng là 'itself'."
  },
  {
    id: 2,
    question: "2. Jim is looking forward ________ blue shirt everywhere. Have you seen it?",
    options: [
      { key: "A", text: "he" },
      { key: "B", text: "his" },
      { key: "C", text: "him" },
      { key: "D", text: "himself" }
    ],
    answer: "B",
    translation: "Jim đang tìm kiếm chiếc áo sơ mi màu xanh của anh ấy khắp nơi. Bạn có thấy nó không?",
    explanation: "Trước cụm danh từ 'blue shirt' (chiếc áo sơ mi xanh), ta cần một tính từ sở hữu (possessive adjective) là 'his' để bổ nghĩa ('his blue shirt' = chiếc áo sơ mi của anh ấy). 'he' là đại từ chủ ngữ, 'him' là tân ngữ, 'himself' là đại từ phản thân. (Ghi chú ngữ cảnh: Đề bài dùng 'look for' mang nghĩa tìm kiếm, bổ nghĩa bằng tính từ sở hữu 'his')."
  },
  {
    id: 3,
    question: "3. Have you seen ________ stapler?",
    options: [
      { key: "A", text: "I’m" },
      { key: "B", text: "my" },
      { key: "C", text: "mine" },
      { key: "D", text: "me" }
    ],
    answer: "B",
    translation: "Bạn có thấy cái dập ghim của tôi ở đâu không?",
    explanation: "Trước danh từ 'stapler' (cái dập ghim / bấm kim) cần dùng tính từ sở hữu (possessive adjective) 'my' (của tôi). 'mine' là đại từ sở hữu đứng độc lập (không đi kèm danh từ theo sau), 'me' là đại từ tân ngữ, 'I’m' là viết tắt của 'I am'."
  },
  {
    id: 4,
    question: "4. I can do my homework by ________.",
    options: [
      { key: "A", text: "mine" },
      { key: "B", text: "me" },
      { key: "C", text: "myself" },
      { key: "D", text: "my" }
    ],
    answer: "C",
    translation: "Tôi có thể tự mình làm bài tập về nhà.",
    explanation: "Cấu trúc cố định 'by + đại từ phản thân' (by myself = on my own) mang nghĩa tự mình làm điều gì đó mà không cần ai giúp đỡ. Với chủ ngữ 'I', đại từ phản thân tương ứng là 'myself'."
  },
  {
    id: 5,
    question: "5. There are two balls in the box. One is white and ________ is blue and red.",
    options: [
      { key: "A", text: "other" },
      { key: "B", text: "others" },
      { key: "C", text: "the other" },
      { key: "D", text: "the others" }
    ],
    answer: "C",
    translation: "Có hai quả bóng trong hộp. Một quả màu trắng và quả còn lại thì có màu xanh và đỏ.",
    explanation: "Khi nói về một nhóm xác định chỉ có đúng 2 đối tượng ('two balls'), sau khi đã nhắc đến đối tượng thứ nhất là 'One', thì đối tượng duy nhất còn lại đã xác định bắt buộc dùng 'the other'. 'others' dùng cho các đối tượng số nhiều chưa xác định, 'the others' dùng cho nhóm số nhiều còn lại."
  },
  {
    id: 6,
    question: "6. Those are ________ books.",
    options: [
      { key: "A", text: "her" },
      { key: "B", text: "hers" },
      { key: "C", text: "she’s" },
      { key: "D", text: "she" }
    ],
    answer: "A",
    translation: "Đó là những cuốn sách của cô ấy.",
    explanation: "Trước danh từ số nhiều 'books' cần dùng tính từ sở hữu (possessive adjective) 'her'. 'hers' là đại từ sở hữu (không đứng trước danh từ), 'she' là đại từ chủ ngữ, 'she’s' là viết tắt của 'she is' hoặc 'she has'."
  },
  {
    id: 7,
    question: "7. ________ going to the soccer game.",
    options: [
      { key: "A", text: "Their" },
      { key: "B", text: "There" },
      { key: "C", text: "They’re" },
      { key: "D", text: "There’re" }
    ],
    answer: "C",
    translation: "Họ đang đi đến xem trận đấu bóng đá.",
    explanation: "'They’re' là viết tắt của 'They are' (Đại từ chủ ngữ 'They' + trợ động từ to be 'are'). Kết hợp với 'going' tạo thành thì hiện tại tiếp diễn ('They are going to...'). 'Their' là tính từ sở hữu, 'There' là từ chỉ nơi chốn."
  },
  {
    id: 8,
    question: "8. He has two dogs: one is from England and ________ is from Germany.",
    options: [
      { key: "A", text: "another" },
      { key: "B", text: "an other" },
      { key: "C", text: "other" },
      { key: "D", text: "the other" }
    ],
    answer: "D",
    translation: "Anh ấy có hai con chó: một con đến từ nước Anh và con còn lại đến từ nước Đức.",
    explanation: "Trong tổng số 2 đối tượng xác định ('two dogs'), sau 'one' thì đối tượng còn lại duy nhất phải dùng 'the other'. 'another' chỉ dùng khi nói về một đối tượng khác không xác định trong nhóm có từ 3 đối tượng trở lên."
  },
  {
    id: 9,
    question: "9. Sandy wrote a letter to her parents and sent it to ________ yesterday.",
    options: [
      { key: "A", text: "herself" },
      { key: "B", text: "the parents" },
      { key: "C", text: "it" },
      { key: "D", text: "them" }
    ],
    answer: "D",
    translation: "Sandy đã viết một lá thư cho bố mẹ mình và gửi nó cho họ vào ngày hôm qua.",
    explanation: "'her parents' là danh từ số nhiều chỉ người. Sau giới từ 'to', ta cần một đại từ tân ngữ (object pronoun) ở ngôi thứ 3 số nhiều là 'them' để thay thế cho 'her parents' nhằm tránh lặp lại danh từ."
  },
  {
    id: 10,
    question: "10. Many of the audience members at the concert forgot to bring ________ umbrellas.",
    options: [
      { key: "A", text: "their" },
      { key: "B", text: "his" },
      { key: "C", text: "our" },
      { key: "D", text: "theirs" }
    ],
    answer: "A",
    translation: "Nhiều khán giả tại buổi hòa nhạc đã quên mang theo ô của họ.",
    explanation: "Chủ ngữ 'Many of the audience members' là danh từ số nhiều (nhiều khán giả). Do đó, tính từ sở hữu bổ nghĩa cho danh từ 'umbrellas' phải tương ứng ở ngôi thứ 3 số nhiều là 'their' (của họ). 'theirs' là đại từ sở hữu, không đứng trước danh từ."
  },
  {
    id: 11,
    question: "11. The couple painted their house ________.",
    options: [
      { key: "A", text: "herself" },
      { key: "B", text: "themselves" },
      { key: "C", text: "his or herself" },
      { key: "D", text: "himself" }
    ],
    answer: "B",
    translation: "Hai vợ chồng đã tự mình sơn ngôi nhà của họ.",
    explanation: "'The couple' (cặp đôi, hai vợ chồng) là chủ ngữ số nhiều gồm 2 người. Đại từ phản thân (reflexive pronoun) số nhiều 'themselves' được dùng ở cuối mệnh đề để nhấn mạnh chính hai người họ tự làm việc đó mà không nhờ hay thuê người khác."
  },
  {
    id: 12,
    question: "12. Sorry, this is taking so long. Can you wait for ________ ten minutes?",
    options: [
      { key: "A", text: "other" },
      { key: "B", text: "an other" },
      { key: "C", text: "another" },
      { key: "D", text: "few" }
    ],
    answer: "C",
    translation: "Xin lỗi vì việc này mất nhiều thời gian quá. Bạn có thể đợi thêm mười phút nữa được không?",
    explanation: "Quy tắc ngữ pháp đặc biệt: 'another' có thể kết hợp với cụm từ chỉ thời gian / khoảng cách / số lượng có số đếm ('another + number + plural noun') mang ý nghĩa là 'thêm... nữa'. Ví dụ: 'another ten minutes' = thêm 10 phút nữa. 'other' không đi với số đếm theo cấu trúc này."
  },
  {
    id: 13,
    question: "13. Brian and Diana phone ________ almost every day.",
    options: [
      { key: "A", text: "themselves" },
      { key: "B", text: "them self" },
      { key: "C", text: "each other" },
      { key: "D", text: "the other" }
    ],
    answer: "C",
    translation: "Brian và Diana gọi điện thoại cho nhau hầu như mỗi ngày.",
    explanation: "'Each other' là đại từ tương hỗ (reciprocal pronoun) dùng khi 2 đối tượng thực hiện hành động qua lại lẫn nhau (Brian gọi Diana và Diana gọi Brian). Dùng 'themselves' sẽ mang nghĩa phi lý là mỗi người tự gọi điện thoại cho chính mình."
  },
  {
    id: 14,
    question: "14. He seems to have cut ________ shaving this morning.",
    options: [
      { key: "A", text: "him" },
      { key: "B", text: "himself" },
      { key: "C", text: "his" },
      { key: "D", text: "he" }
    ],
    answer: "B",
    translation: "Anh ấy dường như đã tự làm đứt da mình khi cạo râu sáng nay.",
    explanation: "Khi chủ ngữ thực hiện hành động tác động lên chính bản thân mình (chủ ngữ và tân ngữ cùng là một người), ta phải dùng đại từ phản thân (reflexive pronoun). Với chủ ngữ 'He', đại từ phản thân tương ứng là 'himself' (cut himself = tự làm trầy xước/cắt vào da mình)."
  },
  {
    id: 15,
    question: "15. When I saw her last night, she was talking to ________ loudly.",
    options: [
      { key: "A", text: "themselves" },
      { key: "B", text: "hers" },
      { key: "C", text: "herself" },
      { key: "D", text: "she" }
    ],
    answer: "C",
    translation: "Khi tôi nhìn thấy cô ấy tối qua, cô ấy đang tự nói chuyện một mình rất to.",
    explanation: "Chủ ngữ là 'she' (ngôi thứ 3 số ít). Hành động tự nói chuyện với chính mình ('talk to oneself') cần dùng đại từ phản thân tương ứng là 'herself' (talking to herself = tự nói một mình)."
  },
  {
    id: 16,
    question: "16. Good-bye, Eduardo and Maria. Please take good care of ________.",
    options: [
      { key: "A", text: "yourself" },
      { key: "B", text: "themselves" },
      { key: "C", text: "yourselves" },
      { key: "D", text: "theirs" }
    ],
    answer: "C",
    translation: "Tạm biệt Eduardo và Maria. Hai bạn nhớ tự chăm sóc bản thân thật tốt nhé.",
    explanation: "Người nói đang trực tiếp nói chuyện với hai người ('Eduardo and Maria' - ngôi thứ 2 số nhiều 'you'). Cụm từ 'take care of + đại từ phản thân', dạng số nhiều của ngôi thứ 2 là 'yourselves' (các bạn hãy tự chăm sóc mình). 'yourself' chỉ dùng cho một người số ít."
  },
  {
    id: 17,
    question: "17. This bag is very old. I need a new ________.",
    options: [
      { key: "A", text: "bag" },
      { key: "B", text: "bags" },
      { key: "C", text: "one" },
      { key: "D", text: "ones" }
    ],
    answer: "C",
    translation: "Chiếc túi này cũ lắm rồi. Tôi cần một chiếc mới.",
    explanation: "'One' là đại từ thay thế (pronoun of reference / substitution) dùng để thay thế cho một danh từ đếm được số ít ('bag') đã nhắc ở câu trước nhằm tránh lặp lại từ. Đi sau mạo từ 'a' và tính từ 'new' ('a new one') bắt buộc dùng 'one' số ít."
  },
  {
    id: 18,
    question: "18. The new smartphones are much faster than the old________.",
    options: [
      { key: "A", text: "one" },
      { key: "B", text: "ones" },
      { key: "C", text: "other" },
      { key: "D", text: "another" }
    ],
    answer: "B",
    translation: "Những chiếc điện thoại thông minh mới nhanh hơn nhiều so với những chiếc cũ.",
    explanation: "'Ones' là đại từ thay thế cho danh từ số nhiều ('smartphones') đã xuất hiện ở phía trước để tránh việc lặp từ ('the old ones' = the old smartphones)."
  },
  {
    id: 19,
    question: "19. I need some new glasses. ________ I have at the moment are broken.",
    options: [
      { key: "A", text: "The one" },
      { key: "B", text: "The ones" },
      { key: "C", text: "The glass" },
      { key: "D", text: "Glasses" }
    ],
    answer: "B",
    translation: "Tôi cần mua kính mới. Những chiếc tôi đang có lúc này đều đã bị vỡ rồi.",
    explanation: "'Glasses' (mắt kính) là danh từ luôn ở dạng số nhiều. Để thay thế cho danh từ số nhiều xác định này khi đi kèm với một mệnh đề quan hệ xác định ('that I have at the moment'), ta dùng đại từ thay thế xác định số nhiều 'The ones'."
  },
  {
    id: 20,
    question: "20. Jane has already done her work, but I’m saving ________until later.",
    options: [
      { key: "A", text: "hers" },
      { key: "B", text: "her" },
      { key: "C", text: "mine" },
      { key: "D", text: "my" }
    ],
    answer: "C",
    translation: "Jane đã hoàn thành xong công việc của cô ấy rồi, nhưng tôi thì để dành việc của mình đến lát nữa mới làm.",
    explanation: "Ta cần một đại từ sở hữu (possessive pronoun) làm tân ngữ cho động từ 'saving', mang ý nghĩa là 'công việc của tôi' ('my work') để tương phản với 'her work'. Dùng 'mine' để tránh lặp lại từ 'work'. 'my' là tính từ sở hữu, bắt buộc phải có danh từ theo sau."
  }
];

// App State
const state = {
  currentIndex: 0,
  userAnswers: new Array(QUIZ_DATA.length).fill(null),
  isSubmitted: false,
  timerSeconds: 0,
  timerInterval: null,
  student: {
    name: "Sinh viên TDC",
    id: "",
    className: ""
  },
  viewMode: "desktop",
  theme: "light",
  visitCount: 1
};

// DOM References
const elements = {
  appRoot: document.getElementById("app-root"),
  questionPillGrid: document.getElementById("question-pill-grid"),
  progressBarFill: document.getElementById("progress-bar-fill"),
  answeredCount: document.getElementById("answered-count"),
  currentQBadge: document.getElementById("current-q-badge"),
  statusTag: document.getElementById("status-tag"),
  questionText: document.getElementById("question-text"),
  optionsGroup: document.getElementById("options-group"),
  explanationBox: document.getElementById("explanation-box"),
  expBadge: document.getElementById("exp-badge"),
  expTranslation: document.getElementById("exp-translation"),
  expExplanation: document.getElementById("exp-explanation"),
  btnPrev: document.getElementById("btn-prev"),
  btnNext: document.getElementById("btn-next"),
  btnSubmit: document.getElementById("btn-submit"),
  btnQuickSubmit: document.getElementById("btn-quick-submit"),
  timerDisplay: document.getElementById("timer-display"),
  themeToggle: document.getElementById("btn-theme-toggle"),
  themeIcon: document.getElementById("theme-icon"),
  visitorCountText: document.getElementById("visitor-count-text"),
  studentNameTag: document.getElementById("student-name-tag"),
  avatarCircle: document.getElementById("avatar-circle"),
  btnEditStudent: document.getElementById("btn-edit-student"),

  // Modals
  resultModal: document.getElementById("result-modal"),
  confirmModal: document.getElementById("confirm-modal"),
  studentModal: document.getElementById("student-modal"),
  adminModal: document.getElementById("admin-modal"),
  fullReviewModal: document.getElementById("full-review-modal"),

  // Result Elements
  resultScore: document.getElementById("result-score"),
  resultRating: document.getElementById("result-rating"),
  statCorrect: document.getElementById("stat-correct"),
  statWrong: document.getElementById("stat-wrong"),
  statTime: document.getElementById("stat-time"),
  breakdownGrid: document.getElementById("breakdown-grid"),

  // Student Form
  inputStudentName: document.getElementById("input-student-name"),
  inputStudentId: document.getElementById("input-student-id"),
  inputStudentClass: document.getElementById("input-student-class"),
  formStudent: document.getElementById("form-student")
};

// ==========================================================================
// VISITOR TRACKING & STORAGE
// ==========================================================================
function initVisitorTracking() {
  const STORAGE_KEY_VISITS = "tdc_quiz_visits_count";
  const STORAGE_KEY_SESSION = "tdc_quiz_has_visited";
  const STORAGE_KEY_SUBMISSIONS = "tdc_quiz_submissions";

  let visits = parseInt(localStorage.getItem(STORAGE_KEY_VISITS) || "120", 10);

  // If new session, increment count
  if (!sessionStorage.getItem(STORAGE_KEY_SESSION)) {
    visits += 1;
    localStorage.setItem(STORAGE_KEY_VISITS, visits.toString());
    sessionStorage.setItem(STORAGE_KEY_SESSION, "true");
  }

  state.visitCount = visits;
  if (elements.visitorCountText) {
    elements.visitorCountText.textContent = visits.toLocaleString();
  }

  // Load saved student if exists
  const savedStudent = localStorage.getItem("tdc_current_student");
  if (savedStudent) {
    try {
      state.student = JSON.parse(savedStudent);
      updateStudentUI();
    } catch (e) {}
  }
}

function recordSubmission(score, total, timeFormatted) {
  const STORAGE_KEY_SUBMISSIONS = "tdc_quiz_submissions";
  const submissions = JSON.parse(localStorage.getItem(STORAGE_KEY_SUBMISSIONS) || "[]");

  const record = {
    id: Date.now(),
    name: state.student.name || "Sinh viên TDC",
    studentId: state.student.id || "N/A",
    className: state.student.className || "N/A",
    score: score,
    total: total,
    percentage: Math.round((score / total) * 100),
    timeSpent: timeFormatted,
    date: new Date().toLocaleString("vi-VN")
  };

  submissions.unshift(record);
  localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(submissions));
}

// ==========================================================================
// QUIZ CORE FUNCTIONS
// ==========================================================================
function initQuiz() {
  buildNavigatorPills();
  renderQuestion(state.currentIndex);
  startTimer();
  initTheme();
  initVisitorTracking();
  attachEvents();
}

// Build question navigator grid (1 to 20)
function buildNavigatorPills() {
  elements.questionPillGrid.innerHTML = "";
  QUIZ_DATA.forEach((q, idx) => {
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = "q-pill";
    pill.id = `q-pill-${idx}`;
    pill.textContent = idx + 1;
    pill.title = `Câu hỏi ${idx + 1}`;
    pill.addEventListener("click", () => {
      goToQuestion(idx);
    });
    elements.questionPillGrid.appendChild(pill);
  });
  updateNavigatorPills();
}

// Update active and answered state of pills
function updateNavigatorPills() {
  QUIZ_DATA.forEach((q, idx) => {
    const pill = document.getElementById(`q-pill-${idx}`);
    if (!pill) return;

    pill.className = "q-pill";
    if (idx === state.currentIndex) {
      pill.classList.add("active");
    }

    if (state.isSubmitted) {
      // Review mode: green if correct, red if wrong
      const userAns = state.userAnswers[idx];
      if (userAns === q.answer) {
        pill.classList.add("correct-pill");
      } else {
        pill.classList.add("wrong-pill");
      }
    } else {
      // Taking quiz mode: green if answered
      if (state.userAnswers[idx] !== null) {
        pill.classList.add("answered");
      }
    }
  });

  // Update progress bar
  const answeredTotal = state.userAnswers.filter(a => a !== null).length;
  elements.answeredCount.textContent = answeredTotal;
  const percent = (answeredTotal / QUIZ_DATA.length) * 100;
  elements.progressBarFill.style.width = `${percent}%`;
}

// Render question and options inside the SINGLE frame
function renderQuestion(index) {
  state.currentIndex = index;
  const qData = QUIZ_DATA[index];

  // Header inside card
  elements.currentQBadge.textContent = `CÂU ${qData.id} / ${QUIZ_DATA.length}`;

  const isAnswered = state.userAnswers[index] !== null;
  if (state.isSubmitted) {
    const isCorrect = state.userAnswers[index] === qData.answer;
    elements.statusTag.className = `status-tag ${isCorrect ? "done" : ""}`;
    elements.statusTag.style.backgroundColor = isCorrect ? "var(--success-light)" : "var(--danger-light)";
    elements.statusTag.style.color = isCorrect ? "var(--success-dark)" : "var(--danger)";
    elements.statusTag.textContent = isCorrect ? "✓ Trả lời Đúng" : "✗ Trả lời Sai";
  } else {
    elements.statusTag.className = `status-tag ${isAnswered ? "done" : ""}`;
    elements.statusTag.style.backgroundColor = "";
    elements.statusTag.style.color = "";
    elements.statusTag.textContent = isAnswered ? "Đã chọn đáp án" : "Chưa làm";
  }

  // Question Text (Strictly NO hints during quiz)
  elements.questionText.textContent = qData.question;

  // Render 4 options inside the SAME frame
  elements.optionsGroup.innerHTML = "";
  qData.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.dataset.key = opt.key;

    const keySpan = document.createElement("span");
    keySpan.className = "option-key";
    keySpan.textContent = opt.key;

    const textSpan = document.createElement("span");
    textSpan.className = "option-text";
    textSpan.textContent = opt.text;

    btn.appendChild(keySpan);
    btn.appendChild(textSpan);

    // If taking quiz: show selected state (Neutral blue, NO right/wrong hint)
    if (!state.isSubmitted) {
      if (state.userAnswers[index] === opt.key) {
        btn.classList.add("selected");
      }

      btn.addEventListener("click", () => {
        selectOption(index, opt.key);
      });
    } else {
      // In review mode: highlight correct answer (green) and wrong choice if user selected it (red)
      btn.disabled = true;
      btn.style.cursor = "default";

      if (opt.key === qData.answer) {
        btn.classList.add("review-correct");
        const correctBadge = document.createElement("span");
        correctBadge.className = "option-review-badge badge-is-correct";
        correctBadge.textContent = "✓ Đáp án đúng";
        btn.appendChild(correctBadge);
      }

      if (state.userAnswers[index] === opt.key && opt.key !== qData.answer) {
        btn.classList.add("review-wrong");
        const wrongBadge = document.createElement("span");
        wrongBadge.className = "option-review-badge badge-is-wrong";
        wrongBadge.textContent = "✗ Lựa chọn của bạn";
        btn.appendChild(wrongBadge);
      }
    }

    elements.optionsGroup.appendChild(btn);
  });

  // Explanation & Translation Box (Displayed ONLY after submission)
  if (state.isSubmitted) {
    elements.explanationBox.style.display = "flex";
    elements.expBadge.textContent = `Đáp án đúng: ${qData.answer}`;
    elements.expTranslation.textContent = qData.translation;
    elements.expExplanation.textContent = qData.explanation;
  } else {
    elements.explanationBox.style.display = "none";
  }

  // Nav buttons state
  elements.btnPrev.disabled = index === 0;
  elements.btnNext.disabled = index === QUIZ_DATA.length - 1;

  if (state.isSubmitted) {
    elements.btnSubmit.textContent = "Xem kết quả";
  } else {
    elements.btnSubmit.textContent = "Nộp bài thi";
  }

  updateNavigatorPills();
}

// Select an option during the quiz
function selectOption(qIndex, key) {
  if (state.isSubmitted) return;

  state.userAnswers[qIndex] = key;
  renderQuestion(qIndex);

  // Auto advance to next question smoothly after 300ms if not on last question
  if (qIndex < QUIZ_DATA.length - 1) {
    setTimeout(() => {
      if (state.currentIndex === qIndex && !state.isSubmitted) {
        goToQuestion(qIndex + 1);
      }
    }, 280);
  }
}

function goToQuestion(index) {
  if (index < 0 || index >= QUIZ_DATA.length) return;
  renderQuestion(index);
}

// Timer
function startTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerSeconds = 0;
  state.timerInterval = setInterval(() => {
    state.timerSeconds++;
    elements.timerDisplay.textContent = formatTime(state.timerSeconds);
  }, 1000);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

// ==========================================================================
// SUBMIT & RESULT EVALUATION
// ==========================================================================
function openSubmitConfirm() {
  if (state.isSubmitted) {
    openResultModal();
    return;
  }

  const answeredCount = state.userAnswers.filter(a => a !== null).length;
  const confirmText = document.getElementById("confirm-text");
  if (confirmText) {
    if (answeredCount < QUIZ_DATA.length) {
      confirmText.innerHTML = `Bạn mới hoàn thành <strong>${answeredCount}/${QUIZ_DATA.length} câu</strong>.<br>Vẫn còn <strong>${QUIZ_DATA.length - answeredCount} câu</strong> chưa trả lời. Bạn có chắc chắn muốn nộp bài?`;
    } else {
      confirmText.innerHTML = `Bạn đã hoàn thành đủ <strong>${answeredCount}/${QUIZ_DATA.length} câu</strong>.<br>Bạn có muốn nộp bài và xem giải thích chi tiết ngay bây giờ?`;
    }
  }
  elements.confirmModal.classList.add("open");
}

function submitQuiz() {
  elements.confirmModal.classList.remove("open");
  stopTimer();
  state.isSubmitted = true;

  // Calculate score
  let correctCount = 0;
  QUIZ_DATA.forEach((q, idx) => {
    if (state.userAnswers[idx] === q.answer) {
      correctCount++;
    }
  });

  const wrongCount = QUIZ_DATA.length - correctCount;
  const timeFormatted = formatTime(state.timerSeconds);

  // Record submission in storage
  recordSubmission(correctCount, QUIZ_DATA.length, timeFormatted);

  // Update UI & Modal
  elements.resultScore.textContent = correctCount;
  elements.statCorrect.textContent = correctCount;
  elements.statWrong.textContent = wrongCount;
  elements.statTime.textContent = timeFormatted;

  let ratingText = "Cần cố gắng thêm!";
  if (correctCount >= 19) ratingText = "Xuất sắc! Tuyệt đối!";
  else if (correctCount >= 16) ratingText = "Rất tốt! Nắm vững ngữ pháp!";
  else if (correctCount >= 12) ratingText = "Khá tốt! Ôn tập thêm các lỗi sai nhé!";
  else if (correctCount >= 10) ratingText = "Đạt yêu cầu. Hãy xem kỹ giải thích!";
  elements.resultRating.textContent = ratingText;

  // Build Result Breakdown Grid
  elements.breakdownGrid.innerHTML = "";
  QUIZ_DATA.forEach((q, idx) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = `breakdown-item ${state.userAnswers[idx] === q.answer ? "correct" : "wrong"}`;
    item.textContent = idx + 1;
    item.title = `Câu ${idx + 1}: ${state.userAnswers[idx] === q.answer ? "Đúng" : "Sai"}`;
    item.addEventListener("click", () => {
      elements.resultModal.classList.remove("open");
      goToQuestion(idx);
    });
    elements.breakdownGrid.appendChild(item);
  });

  renderQuestion(state.currentIndex);
  openResultModal();
}

function openResultModal() {
  elements.resultModal.classList.add("open");
}

function restartQuiz() {
  elements.resultModal.classList.remove("open");
  state.userAnswers = new Array(QUIZ_DATA.length).fill(null);
  state.isSubmitted = false;
  state.currentIndex = 0;
  startTimer();
  renderQuestion(0);
}

// ==========================================================================
// STUDENT PROFILE
// ==========================================================================
function updateStudentUI() {
  if (elements.studentNameTag) {
    elements.studentNameTag.textContent = state.student.name || "Sinh viên TDC";
  }
  if (elements.avatarCircle) {
    const initial = (state.student.name || "T").trim().charAt(0).toUpperCase();
    elements.avatarCircle.textContent = initial;
  }
}

function saveStudentProfile(e) {
  e.preventDefault();
  const name = elements.inputStudentName.value.trim() || "Sinh viên TDC";
  const id = elements.inputStudentId.value.trim();
  const className = elements.inputStudentClass.value.trim();

  state.student = { name, id, className };
  localStorage.setItem("tdc_current_student", JSON.stringify(state.student));
  updateStudentUI();
  elements.studentModal.classList.remove("open");
}

// ==========================================================================
// FULL REVIEW MODAL (ALL 20 QUESTIONS LIST)
// ==========================================================================
function openFullReviewModal() {
  const container = document.getElementById("full-review-content");
  if (!container) return;

  container.innerHTML = "";
  QUIZ_DATA.forEach((q, idx) => {
    const userAns = state.userAnswers[idx];
    const isCorrect = userAns === q.answer;

    const card = document.createElement("div");
    card.className = "full-review-card";

    card.innerHTML = `
      <div class="full-review-header">
        <span class="full-review-title">Câu ${q.id}: ${q.question}</span>
        <span class="status-tag ${isCorrect ? "done" : ""}" style="background-color: ${isCorrect ? "var(--success-light)" : "var(--danger-light)"}; color: ${isCorrect ? "var(--success-dark)" : "var(--danger)"};">
          ${isCorrect ? "✓ Đúng" : "✗ Sai"}
        </span>
      </div>
      <div style="font-size: 0.88rem; display: flex; flex-direction: column; gap: 4px;">
        <div><strong>Đáp án đúng:</strong> <span style="color: var(--success-dark); font-weight: 700;">${q.answer}. ${q.options.find(o => o.key === q.answer)?.text}</span></div>
        <div><strong>Bạn đã chọn:</strong> <span style="color: ${isCorrect ? "var(--success-dark)" : "var(--danger)"}; font-weight: 700;">${userAns ? userAns + ". " + (q.options.find(o => o.key === userAns)?.text || "") : "Chưa chọn"}</span></div>
      </div>
      <div class="translation-item">
        <span class="exp-item-label">🇻🇳 Dịch nghĩa:</span>
        <p class="exp-item-text" style="font-style: italic; font-size: 0.88rem;">${q.translation}</p>
      </div>
      <div class="reason-item">
        <span class="exp-item-label">📚 Giải thích:</span>
        <p class="exp-item-text" style="font-size: 0.88rem;">${q.explanation}</p>
      </div>
    `;

    container.appendChild(card);
  });

  elements.fullReviewModal.classList.add("open");
}

// ==========================================================================
// ADMIN / TEACHER DASHBOARD & CSV EXPORT
// ==========================================================================
function openAdminModal() {
  const submissions = JSON.parse(localStorage.getItem("tdc_quiz_submissions") || "[]");
  const visits = state.visitCount;

  document.getElementById("admin-visit-count").textContent = visits;
  document.getElementById("admin-submission-count").textContent = submissions.length;

  let avgScore = 0;
  if (submissions.length > 0) {
    const totalScore = submissions.reduce((sum, item) => sum + item.score, 0);
    avgScore = (totalScore / submissions.length).toFixed(1);
  }
  document.getElementById("admin-avg-score").textContent = `${avgScore} / 20`;

  const tbody = document.getElementById("admin-table-body");
  tbody.innerHTML = "";

  if (submissions.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 20px;">Chưa có lượt nộp bài nào được lưu.</td></tr>`;
  } else {
    submissions.forEach((item, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td><strong>${item.name}</strong></td>
        <td>${item.studentId || "-"}</td>
        <td>${item.className || "-"}</td>
        <td><strong style="color: var(--primary);">${item.score} / ${item.total}</strong> (${item.percentage}%)</td>
        <td>${item.timeSpent}</td>
        <td><small style="color: var(--text-muted);">${item.date}</small></td>
      `;
      tbody.appendChild(tr);
    });
  }

  elements.adminModal.classList.add("open");
}

function exportSubmissionsCSV() {
  const submissions = JSON.parse(localStorage.getItem("tdc_quiz_submissions") || "[]");
  if (submissions.length === 0) {
    alert("Chưa có dữ liệu sinh viên nộp bài để xuất file.");
    return;
  }

  let csvContent = "\uFEFF"; // UTF-8 BOM for Excel
  csvContent += "STT,Họ và tên,MSSV,Lớp,Điểm số,Tổng câu,Tỉ lệ %,Thời gian làm bài,Thời điểm nộp\n";

  submissions.forEach((item, i) => {
    const row = [
      i + 1,
      `"${item.name.replace(/"/g, '""')}"`,
      `"${(item.studentId || "").replace(/"/g, '""')}"`,
      `"${(item.className || "").replace(/"/g, '""')}"`,
      item.score,
      item.total,
      item.percentage + "%",
      item.timeSpent,
      `"${item.date}"`
    ];
    csvContent += row.join(",") + "\n";
  });

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `TDC_Pronouns_Referencing_Results_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function clearSubmissions() {
  if (confirm("Bạn có chắc chắn muốn xóa tất cả lịch sử nộp bài của sinh viên trên máy này?")) {
    localStorage.removeItem("tdc_quiz_submissions");
    openAdminModal();
  }
}

// ==========================================================================
// THEME & VIEW SWITCHER
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem("tdc_quiz_theme") || "light";
  setTheme(savedTheme);
}

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("tdc_quiz_theme", theme);
  elements.themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
}

function toggleTheme() {
  setTheme(state.theme === "dark" ? "light" : "dark");
}

function setViewMode(mode) {
  state.viewMode = mode;
  elements.appRoot.classList.remove("desktop-mode", "ipad-mode", "mobile-mode");
  elements.appRoot.classList.add(`${mode}-mode`);

  document.querySelectorAll(".dev-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === mode);
  });
}

// ==========================================================================
// EVENT LISTENERS
// ==========================================================================
function attachEvents() {
  // Navigation
  elements.btnPrev.addEventListener("click", () => goToQuestion(state.currentIndex - 1));
  elements.btnNext.addEventListener("click", () => goToQuestion(state.currentIndex + 1));
  elements.btnSubmit.addEventListener("click", openSubmitConfirm);
  if (elements.btnQuickSubmit) elements.btnQuickSubmit.addEventListener("click", openSubmitConfirm);

  // Submit Modal
  document.getElementById("btn-confirm-submit").addEventListener("click", submitQuiz);
  document.getElementById("btn-cancel-submit").addEventListener("click", () => elements.confirmModal.classList.remove("open"));
  document.getElementById("btn-close-confirm").addEventListener("click", () => elements.confirmModal.classList.remove("open"));

  // Result Modal
  document.getElementById("btn-close-result").addEventListener("click", () => elements.resultModal.classList.remove("open"));
  document.getElementById("btn-review").addEventListener("click", () => elements.resultModal.classList.remove("open"));
  document.getElementById("btn-restart").addEventListener("click", restartQuiz);
  document.getElementById("btn-view-all-20").addEventListener("click", () => {
    elements.resultModal.classList.remove("open");
    openFullReviewModal();
  });

  // Full Review Modal
  document.getElementById("btn-close-full-review").addEventListener("click", () => elements.fullReviewModal.classList.remove("open"));

  // Student Profile Modal
  if (elements.btnEditStudent) {
    elements.btnEditStudent.addEventListener("click", () => {
      elements.inputStudentName.value = state.student.name || "";
      elements.inputStudentId.value = state.student.id || "";
      elements.inputStudentClass.value = state.student.className || "";
      elements.studentModal.classList.add("open");
    });
  }
  document.getElementById("btn-close-student").addEventListener("click", () => elements.studentModal.classList.remove("open"));
  elements.formStudent.addEventListener("submit", saveStudentProfile);

  // Admin Modal
  document.getElementById("btn-admin-open").addEventListener("click", openAdminModal);
  document.getElementById("btn-close-admin").addEventListener("click", () => elements.adminModal.classList.remove("open"));
  document.getElementById("btn-export-csv").addEventListener("click", exportSubmissionsCSV);
  document.getElementById("btn-clear-data").addEventListener("click", clearSubmissions);

  // Theme Toggle
  elements.themeToggle.addEventListener("click", toggleTheme);

  // Device Switcher
  document.querySelectorAll(".dev-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setViewMode(btn.dataset.view);
    });
  });

  // Keyboard Shortcuts
  window.addEventListener("keydown", (e) => {
    // If modal is open, ignore
    if (document.querySelector(".modal-backdrop.open")) return;

    if (e.key === "ArrowLeft") {
      goToQuestion(state.currentIndex - 1);
    } else if (e.key === "ArrowRight") {
      goToQuestion(state.currentIndex + 1);
    } else if (["1", "2", "3", "4"].includes(e.key)) {
      const keys = ["A", "B", "C", "D"];
      const key = keys[parseInt(e.key, 10) - 1];
      selectOption(state.currentIndex, key);
    } else if (["a", "b", "c", "d", "A", "B", "C", "D"].includes(e.key)) {
      selectOption(state.currentIndex, e.key.toUpperCase());
    }
  });
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", initQuiz);
