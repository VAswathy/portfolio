# Aswathy V — Developer Portfolio

Personal portfolio website for **Aswathy V**, a Java Backend Developer with 3+ years of experience in Spring Boot, REST APIs, microservices, and fintech systems — currently expanding into frontend development and AI-assisted workflows.

🔗 **Live site:** [vaswathy.github.io/portfolio](https://vaswathy.github.io/portfolio/)

---

## Sections

- **Hero** — intro with a live terminal snippet and a Download Resume button
- **About** — background summary and key metrics
- **Skills** — grouped by Backend, Data, Testing, DevOps, and Learning & Exploration
- **Experience** — timeline of roles at Adobe and Trustt
- **Projects** — Blogging Application, Online Exam Portal, Food Delivery System
- **Contact** — email, resume download, GitHub, and LinkedIn

---

## Projects featured

| Project | Stack | Repo |
|---|---|---|
| Blogging Application | Spring Boot, Hibernate, MySQL | [view →](https://github.com/VAswathy/blogging-application) |
| Online Exam Portal | Spring Boot, Angular, MySQL, JWT | [view →](https://github.com/VAswathy/online-exam-portal) |
| Food Delivery System | Spring Boot, Microservices, Eureka, Angular | [view →](https://github.com/VAswathy/food-delivery-system) — includes a [link to the architecture diagram](https://github.com/VAswathy/food-delivery-system#architecture) |

---

## File structure

```
portfolio/
├── index.html                      — markup and content
├── style.css                       — all styles and responsive layout
├── script.js                       — nav scroll, hamburger menu, scroll reveal
├── assets/
│   └── Aswathy_Java_Developer.pdf  — resume (already included)
└── README.md
```

The Resume download button appears in three places — nav bar, hero section, and contact section — already wired up to `assets/Aswathy_Java_Developer.pdf`.

> **Note on the architecture link:** it currently points to `food-delivery-system#architecture`. GitHub auto-generates this anchor from a heading in your README — if your heading isn't worded exactly "Architecture", update the link in `index.html` to match (search for `#architecture`).

---

## Hosting on GitHub Pages

1. Create a public repository named `vaswathy.github.io` (for the cleanest URL) or anything else.
2. Upload `index.html`, `style.css`, `script.js`, and the `assets/` folder (PDF included) via **Add file → Upload files** or `git push`.
3. Go to **Settings → Pages**, set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
4. After about a minute, the site is live.

---

## Contact

- 📧 aswathyv28@gmail.com
- 💼 [linkedin.com/in/aswathy-v-56230172](https://linkedin.com/in/aswathy-v-56230172)
- 🐙 [github.com/VAswathy](https://github.com/VAswathy)
