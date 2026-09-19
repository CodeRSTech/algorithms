# Algorithms E-Book Roadmap

## 1. UI & Layout Enhancements
- [ ] **Interactive Language Tabs:** Convert sequential code blocks (Python, Java, C++, JS) in `algo.html` into Bootstrap Nav Tabs for seamless, in-place syntax comparison.
- [ ] **Sequential E-Book Pagination:** Implement "Next" and "Previous" buttons at the bottom of `algo.html` using Jekyll's Liquid templating to dynamically link adjacent algorithms within the same category.

## 2. Search Integration
- [ ] **Client-Side Search Engine:** Integrate `Simple-Jekyll-Search`.
- [ ] Generate a `search.json` file to index algorithm titles, categories, and URLs.
- [ ] Add a real-time search input field above the accordion in the left sidebar.

## 3. CI/CD & Maintenance
- [x] **Clean up legacy files:** Delete the obsolete `.travis.yml` file, as builds are successfully handled by GitHub Actions.
- [ ] **Translation Progress Tracker:** Write a Python script for GitHub Actions to count the remaining `# TODO: Implement in Python` stubs and automatically update a progress badge on `README.md`.