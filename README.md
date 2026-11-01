Portfolio Website - Lab 2

A personal portfolio website enhanced with vanilla JavaScript features for Lab 2 Interactive Portfolio Enhancements

## Target Grade

Target Grade:\*\* Grade 4

## Implemented Features

### Grade 3: Feedback Form (`contact.html`)

- **Client-side Form Validation:** Validates required fields (Full name, email, topic of interest, comments) and an optional website field using vanilla JavaScript[cite: 9, 12, 33].
- **Live Character Counter:** Displays real-time character count on the comments field[cite: 12, 13, 33]. Visually turns green once the 15-character minimum requirement is reached[cite: 12, 13, 33].
- **Dynamic Feedback & Clear:** Shows inline error messages on invalid input and a personalized success message on valid submission (`event.preventDefault()`) that clears after 4 seconds[cite: 12, 13, 33, 34]. Reset button restores initial state[cite: 13, 34].

### Grade 4: Data-Driven Skills Showcase (`skills.html`)

- **Array-Driven Rendering:** 8 skill objects across 3 categories (Frontend, Backend, Tools) stored in a JavaScript array and rendered dynamically into the DOM on page load[cite: 35, 44].
- **Category Filtering:** Native button controls to filter skills by category (`data-category`) with active visual state and `aria-pressed` support[cite: 15, 36, 44].
- **Sorting:** Dropdown to sort skills by proficiency (high to low), years of experience (high to low), or name (A–Z)[cite: 15, 36, 44].
- **Combined State & Counter:** Filters and sorting work simultaneously, updating a dynamic counter text (e.g., "Showing X of Y skills")[cite: 15, 36, 44].

---

## Project Structure

```text
├── assets/                  # Images and static assets
├── css/
│   ├── feedback.css         # Styling for feedback form & validation states
│   ├── skills.css           # Styling for skill cards, filters, and controls
│   └── style.css            # Base stylesheet, typography, and navigation
├── js/
│   ├── feedback.js          # Form validation and character counter
│   └── skills.js            # Skill data, dynamic rendering, filter & sort logic
├── portfolio-website/
│   ├── about.html           # About me & experience
│   ├── contact.html         # Contact links & feedback form
│   ├── gallery.html         # Image gallery
│   ├── index.html           # Home page
│   ├── projects.html        # Projects showcase
│   └── skills.html          # Interactive skills showcase
├── .gitignore
└── README.md

```

---

## How to Run

1. Clone the repository to your local machine:

```bash
git clone <repo-url>

```

2. Open `portfolio-website/index.html` (or `skills.html` / `contact.html`) directly in any modern browser (e.g., Chrome, Firefox, Safari, Edge).

3. Alternatively, right-click `index.html` in VS Code and select **Open with Live Server**.
