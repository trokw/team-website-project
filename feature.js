// feature.js

// "Медицина" бетіне көшу батырмасы
document.getElementById("infoBtn").addEventListener("click", function () {
  // Басты бет пен "Біз туралы" бөлімін жасырамыз
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";

  // "Медицина" бөлімін көрсетеміз
  document.getElementById("medicine").style.display = "block";

  // Экранды жоғарыға жүгіртіп шығарамыз
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Байланыс формасын өңдеу (жіберу кезінде хабарлама шығару)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Форманың шынайы жіберілуін тоқтату
  const name = document.getElementById("name").value;
  alert(`Рақмет, ${name}! Хабарламаңыз сәтті жіберілді ✅`);
  this.reset(); // Форманы тазалау
});
