// Data array for skills (Grade 4: minst 8 objekt över minst 3 kategorier)
const skillsData = [
  {
    id: 1,
    name: "HTML",
    category: "Frontend",
    proficiency: 5,
    yearsExperience: 3,
    description: "Structuring accessible, semantic, and SEO-friendly web content."
  },
  {
    id: 2,
    name: "CSS3",
    category: "Frontend",
    proficiency: 5,
    yearsExperience: 3,
    description: "Building responsive layouts using Flexbox, CSS Grid, and modern animations."
  },
  {
    id: 3,
    name: "JavaScript",
    category: "Frontend",
    proficiency: 3,
    yearsExperience: 2,
    description: "Implementing interactive UI components, asynchronous logic, and DOM manipulation."
  },
  {
    id: 4,
    name: "Java",
    category: "Backend",
    proficiency: 4,
    yearsExperience: 2,
    description: "Developing robust object-oriented software architectures and REST APIs."
  },
  {
    id: 5,
    name: "Python",
    category: "Backend",
    proficiency: 3,
    yearsExperience: 1.5,
    description: "Writing scripts for automation, data processing, and backend web logic."
  },
  {
    id: 6,
    name: "Git & GitHub",
    category: "Tools",
    proficiency: 4,
    yearsExperience: 2,
    description: "Managing version control, collaborative workflows, branching, and pull requests."
  },
  {
    id: 7,
    name: "VS Code",
    category: "Tools",
    proficiency: 5,
    yearsExperience: 3,
    description: "Configuring development environments, debugging, and extension workflows."
  },
  {
    id: 8,
    name: "Responsive Design",
    category: "Frontend",
    proficiency: 3,
    yearsExperience: 2.5,
    description: "Designing fluid multi-device layouts tailored for mobile, tablet, and desktop viewports."
  }
];

// DOM elements
const skillsContainer = document.getElementById("skills-container");
const filterButtons = document.querySelectorAll(".filter-btn");
const sortSelect = document.getElementById("skill-sort");
const skillsCounter = document.getElementById("skills-counter");

// State
let currentCategory = "all";
let currentSort = "proficiency-desc";

// Rendering function
function renderSkills(skills) {
  skillsContainer.innerHTML = "";

  skills.forEach((skill) => {
    const card = document.createElement("article");
    card.classList.add("skill-card");

    const starIcons = "★".repeat(skill.proficiency) + "☆".repeat(5 - skill.proficiency);

    card.innerHTML = `
      <div class="skill-card-top">
        <h3>${skill.name}</h3>
        <span class="category-badge">${skill.category}</span>
      </div>
      <div class="skill-meta">
        <span class="stars" aria-label="Proficiency: ${skill.proficiency} out of 5">${starIcons}</span>
        <span class="experience">${skill.yearsExperience} ${skill.yearsExperience === 1 ? "year" : "years"} exp</span>
      </div>
      <p>${skill.description}</p>
    `;

    skillsContainer.appendChild(card);
  });

  skillsCounter.textContent = `Showing ${skills.length} of ${skillsData.length} skills`;
}

// Function to update skills view (combined filter and sort)
function updateSkillsView() {
  let filtered = skillsData.filter((skill) => {
    if (currentCategory === "all") return true;
    return skill.category.toLowerCase() === currentCategory.toLowerCase();
  });

  let sorted = [...filtered].sort((a, b) => {
    if (currentSort === "proficiency-desc") {
      return b.proficiency - a.proficiency;
    } else if (currentSort === "experience-desc") {
      return b.yearsExperience - a.yearsExperience;
    } else if (currentSort === "name-asc") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  renderSkills(sorted);
}

// Event listeners for filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    currentCategory = button.dataset.category;
    updateSkillsView();
  });
});

// Event listener for sort dropdown
sortSelect.addEventListener("change", (e) => {
  currentSort = e.target.value;
  updateSkillsView();
});

// Initial render
updateSkillsView();