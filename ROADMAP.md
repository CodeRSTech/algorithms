# Learn Reference Guide Roadmap

## 1. UI, Layout & Architecture Enhancements
- [x] **Hierarchical Curriculum Data:** Create `_data/curriculum.yml` to structure the multi-disciplinary learning guide (Discipline > Subject > Category) for dynamic navigation.
- [x] **Multi-Source Attributions:** Update article front matter to accept an array of attribution sources and render respective attribution snippets dynamically.
- [ ] **Interactive Language Tabs:** Implement the `jekyll-tabs` plugin to cleanly display multi-language code implementations (Python, Java, C++, JS) in a tabbed interface instead of sequential code blocks.
- [ ] **Sequential Pagination:** Implement "Next" and "Previous" buttons using Liquid templating to dynamically link adjacent topics within the same category.
- [ ] **Dynamic Sidebar Accordion:** Refactor the left sidebar to use a collapsible accordion structure mirroring the `curriculum.yml` hierarchy.
- [ ] **Sticky Sidebar:** Ensure the left sidebar remains visible during scrolling for easy access to the curriculum tree and search functionality.
- [ ] **Responsive Design:** Optimize main page layout across varying screen sizes.
- [ ] **Typewriter Animation :** to apply this to other headings on site, wrap the target text in `<span class="typewriter">` and adjust the `22ch` in the `@keyframes` to match the exact number of characters in that specific string.

## 2. Search Integration
- [ ] **Client-Side Search Engine:** Integrate `Simple-Jekyll-Search`.
- [ ] Generate a `search.json` file to index topic titles, categories, subjects, disciplines, and URLs.
- [ ] Add a real-time search input field above the accordion in the left sidebar.

## 3. CI/CD & Maintenance
- [x] **Clean up legacy files:** Delete the obsolete `.travis.yml` file, as builds are successfully handled by GitHub Actions.
- [ ] **Translation Progress Tracker:** Write a Python script for GitHub Actions to count the remaining `# TODO: Implement in Python` stubs and automatically update a progress badge on `index.md`.