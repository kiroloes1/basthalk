const teachers = [

  {
    name: "أ. أحمد سمير",
    subject: "الأحياء",
    grade: "الصف الأول الثانوي",
    section: "علمي",
    image: "./image/biology/اولي ثانوي.jpg"
  },
  {
    name: "أ. أحمد سمير",
    subject: "الأحياء",
    grade: "الصف الثالث الثانوي",
    section: "علمي",
    image: "./image/biology/تالته ثانوي.jpg"
  },
  {
    name: "أ. أحمد سمير",
    subject: "الأحياء",
    grade: "الصف الثالث الثانوي",
    section: "علمي",
    image: "./image/biology/تالته ثانوي.jpg"
  },
  {
    name: "أ. ياسر الجمل",
    subject: "الكيمياء",
    grade: "الصف الثاني الثانوي",
    section: "علمي",
    image: "./image/chemistry/2sec.jpg"
  },
  {
    name: "أ. عبد الرحمن فهمي",
    subject: "الكيمياء",
    grade: "الصف الثالث الثانوي",
    section: "علمي",
    image: "./image/chemistry/3sec.jpg"
  },
  {
    name: "Miss Hagar",
    subject: "اللغة الإنجليزية",
    grade: "الصف الأول الثانوي",
    section: "مشترك",
    image: "./image/english/year1.8d3bf81754b5df7172fe.jpeg"
  },
  {
    name: "Miss Hagar",
    subject: "اللغة الإنجليزية",
    grade: "الصف الثاني الثانوي",
    section: "مشترك",
    image: "./image/english/year2.81b4ef9ed5c16d4ba08e.jpeg"
  },
  {
    name: "Miss Hagar",
    subject: "اللغة الإنجليزية",
    grade: "الصف الثالث الثانوي",
    section: "مشترك",
    image: "./image/english/year3.8bcea0ccbf1c7f55a220.jpeg"
  },
  {
    name: "أ. شريف شتا",
    subject: "الجيولوجيا",
    grade: "الصف الأول الثانوي",
    section: "علمي",
    image: "./image/gio/جيو1.jpg"
  },
  {
    name: "أ. شريف شتا",
    subject: "الجيولوجيا",
    grade: "الصف الثاني الثانوي",
    section: "علمي",
    image: "./image/gio/جيو2.jpg"
  },
  {
    name: "أ. شريف شتا",
    subject: "الجيولوجيا",
    grade: "الصف الثالث الثانوي",
    section: "علمي",
    image: "./image/gio/جيو3.jpg"
  },
  {
    name: "أ. خالد القاضي",
    subject: "التاريخ",
    grade: "الصف الأول الثانوي",
    section: "أدبي",
    image: "./image/history/تاريخ.jpeg"
  },
  {
    name: "أ. خالد القاضي",
    subject: "التاريخ",
    grade: "الصف الثاني الثانوي",
    section: "أدبي",
    image: "./image/history/تاريخ2.jpeg"
  },
  {
    name: "أ. خالد القاضي",
    subject: "التاريخ",
    grade: "الصف الثالث الثانوي",
    section: "أدبي",
    image: "./image/history/تاريخ 3.jpeg"
  },
  {
    name: "أ. محمود عيسى",
    subject: "الرياضيات",
    grade: "الصف الأول الثانوي",
    section: "علمي",
    image: "./image/math/رياضه1.png"
  },
  {
    name: "أ. محمود عيسى",
    subject: "الرياضيات",
    grade: "الصف الثاني الثانوي",
    section: "علمي",
    image: "./image/math/رياضه2.png"
  },
  {
    name: "أ. محمود عيسى",
    subject: "الرياضيات",
    grade: "الصف الثالث الثانوي",
    section: "علمي",
    image: "./image/math/3.jpeg"
  },
  {
    name: "أ. أحمد منصور",
    subject: "الفيزياء",
    grade: "الصف الثاني الثانوي",
    section: "علمي",
    image: "./image/physics/فيزيا2.png"
  },
  {
    name: "أ. أحمد منصور",
    subject: "الفيزياء",
    grade: "الصف الثالث الثانوي",
    section: "علمي",
    image: "./image/physics/فيزياء3.png"
  }
];

let moreBtn=document.querySelector(".more-btn")
const appearTeacher=document.querySelector(".con-appearTeacher")

function toggle() {
  if (appearTeacher.classList.contains("expand")) {
    appearTeacher.classList.remove("expand");
    moreBtn.innerHTML = "عرض المزيد من الكورسات";
  } else {
    appearTeacher.classList.add("expand");
    moreBtn.innerHTML = "عرض مدرسين أقل";
  }
}


let selectedGrade = "";
let selectedSection = "";

// عند تغيير الصف
function selectTeacher(grade) {
  selectedGrade = grade;
  console.log("الصف المختار:", selectedGrade);
  // هنا ممكن تعرض المدرسين بناءً على الصف والقسم لو عايز
  filterTeachers();
}

// عند تغيير القسم
function department(section) {
  selectedSection = section;
  console.log("القسم المختار:", selectedSection);
  filterTeachers();
}

let result;
// فلترة المدرسين بناءً على الصف والقسم
function filterTeachers() {

  
 result = teachers.filter(t => 
    t.grade === selectedGrade &&
    (selectedSection === "علمي" ? t.section === "علمي" || t.section === "مشترك"  : 
     selectedSection === "ادبي" ? t.section === "أدبي" || t.section === "مشترك" : true)
  );
  console.log("النتيجة:", result);

  let container = "";
result.forEach(e => {
  container += `
    <div class="card">
      <img src="${e.image}" alt="${e.subject}">
      <div class="text-card"> 
        <h3>${e.name}</h3>
        <p>${e.grade}</p>
      </div>
    </div>
  `;
});
appearTeacher.innerHTML = container;

}


filterTeachers();

