# AI Assistance Log

## Record details

- Project: Hina Khoja's professional portfolio
- Repository: https://github.com/hinak786/Personal-portfolio
- Project issue: https://github.com/hinak786/Personal-portfolio/issues/1
- Working branch: `feature/portfolio-personalization`
- Date this record was prepared: 2026-09-16
- Planning tool/platform: TO COMPLETE - enter the actual app used, such as U-M GPT or ChatGPT.
- Planning model: TO COMPLETE - enter the model shown in that chat, or "Not shown" if unavailable.
- Prompt verification: TO COMPLETE - compare the prompt below with the exact prompt you submitted and correct any differences.
- Student plan review: PENDING - the proposed review below was drafted with AI assistance and must be reviewed and edited by the student before implementation.

This is a draft record. The attached planning response is preserved in full. No implementation or test outcomes are claimed in this record.

## Earlier AI assistance

Codex/ChatGPT helped explain the assignment, guide repository and branch setup, draft professional content notes and the project issue, and prepare the planning prompt. The student revised the education and skills content before saving `content-notes.md`.

The initial content commit is:
https://github.com/hinak786/Personal-portfolio/commit/a54e6211f8d1754ace97eda356f389f18842ed7e

The current log and the proposed review notes below were also prepared with AI assistance. They are not a substitute for the student's own review.

## Proposed plan review - for the student to confirm or revise

| Review item | Proposed decision and explanation |
|---|---|
| Accepted plan element | Use the approved professional content, distinguish degrees from coursework, include the two documented research experiences, preserve the template design and license, and check mobile layout and accessibility. |
| Revised plan element | Keep the existing About, Resume, and Portfolio navigation structure, with education and skills inside Resume. When removing testimonials, contact controls, or filters, remove or guard their JavaScript handlers in the same commit so the intermediate version remains usable. Use one available modern browser for the required checks and a 375-pixel viewport; add extra browser checks only to investigate a specific problem. |
| Risk the AI identified | Removing template elements can leave JavaScript selectors and event listeners referring to missing elements, which can break navigation and create console errors. The AI also correctly flagged ambiguous education wording. |
| Risk the AI missed | The plan did not explicitly require screenshots or a recording for at least three tests. Completing the checks without that evidence would leave the assignment submission incomplete. Capture evidence of identity/content, narrow-screen layout, and navigation or keyboard operation. |

### Evidence supporting the proposed review

- The starter `index.html` contains About, Resume, Portfolio, Blog, and Contact sections. Keeping the first three supports the requested content while limiting structural changes.
- In `assets/js/script.js`, modal controls have event listeners and navigation depends on matching controls to page sections. Changes to those elements must be coordinated with the script.
- Assignment step 10 explicitly requires screenshots or a short recording for at least three tests. The submitted AI response has extensive test checklists but does not explicitly include this evidence requirement.

### Content questions to resolve or handle conservatively

- Macomb Community College: the notes combine coursework with "Graduated" but do not identify an awarded degree. List coursework without claiming an associate degree unless the student supplies the degree title.
- Computer Systems Institute: the meaning of "2015, 2017" is unclear. Omit these dates until clarified rather than inventing an attendance range.
- Marian University and Aga Khan University: keep these entries explicitly labeled as coursework, not completed bachelor's degrees.
- No approved portrait was supplied. A text or initials treatment can be used without representing a template portrait as the student.

### Student confirmation

After reading and editing these proposed decisions, replace the pending review status above with your actual decision and date. Do not record approval, completed testing, or personal review activity that has not occurred.

## Planning prompt prepared in this conversation

The following reproduces the prompt supplied in this conversation, with the saved content notes appended. The student must check it against the actual submitted chat prompt and correct any differences.

```text
Help me plan the personalization of my static professional portfolio for SWE 380 / CSC 580 Assignment 1.

Project:
- Repository: https://github.com/hinak786/Personal-portfolio
- Issue: https://github.com/hinak786/Personal-portfolio/issues/1
- Working branch: feature/portfolio-personalization
- Default branch: master
- Starter: vCard Personal Portfolio, using HTML, CSS, and JavaScript.
- Audience: recruiters, internship reviewers, and professionals interested in clinical research, neuroscience, and healthcare AI.
- My approved professional content appears after this prompt.

Allowed changes:
- index.html: professional content, navigation, and accessibility.
- assets/css/style.css: small styling and responsive-layout corrections.
- assets/js/script.js: small front-end behavior corrections.
- README.md: project purpose, setup, testing, and attribution.
- assets/images/: appropriate replacement assets if needed.

Acceptance criteria:
1. The landing page displays Hina Khoja and my professional focus.
2. At least two projects or research experiences have a title and description.
3. Navigation opens the intended sections, and LinkedIn and GitHub links lead to my profiles.
4. The website remains readable and usable at a 375-pixel viewport width without horizontal scrolling.
5. No sample names, contact details, testimonials, or placeholder project content remain.

Constraints:
- Preserve the template’s overall layout and required license and attribution.
- Use only the supplied professional information. Flag ambiguities instead of inventing qualifications, dates, achievements, or links.
- Distinguish completed degrees from coursework and ongoing studies.
- Do not add a backend, login system, analytics tracker, or external data collection.
- Maintain readable contrast, keyboard navigation, meaningful links, and appropriate image alternative text.
- Keep implementation incremental, with at least three meaningful implementation commits on the working branch.
- Do not claim to have inspected repository files you cannot access. Ask me for any necessary file contents.

First provide:
1. A file-by-file implementation plan.
2. Assumptions, risks, and questions requiring clarification.
3. A proposed sequence of three implementation commits.
4. A test checklist covering the acceptance criteria, accessibility, private information, browser-console errors, and the published GitHub Pages site.

Provide the plan only. Do not generate replacement code or modify files until I have reviewed the plan.

My content-notes.md text follows:
# Portfolio Content Notes

## Name

Hina Khoja

## Professional Focus

Clinical Research | Neuroscience | Artificial Intelligence in Healthcare

## About Me

I have a background in neuroscience and clinical research coordination, with an interest in applying artificial intelligence to healthcare. My experience includes research documentation, data quality, regulatory coordination, and AI response evaluation.

## Education

### University of Michigan-Flint (Flint, MI - USA, 2026-2027 Expected)

Master of Science in Artificial Intelligence, Cybersecurity Concentration | 2027 Expected Graduation

### Wayne State University, (Detroit, MI - USA, 2021-2025)

Bachelor of Science in Neuroscience, Minor in Biological Sciences | Graduated

### Macomb Community College, (Warren, MI - USA, 2018-2021)

Associate-level coursework in Liberal Arts and Sciences  | Graduated

### Computer Systems Institute, (Skokie, IL - USA, 2015, 2017) 

Diploma in Communication and Literature  | Graduated

### Marian University, (Fond Du Lac, WI - USA, 2013-2015)

BS- Nursing Science and Graphic Arts (Three years of course work)

### Aga Khan University, (Karachi - Pakistan, 2010-2013)

BS- Nursing (Three years of course work)

## Skills

* Clinical research coordination.
* Research documentation and regulatory compliance.
* Data quality review.
* Electronic medical records and electronic data capture systems.
* AI response evaluation.
* Data Annotation

## Projects and Research Experience

### Oncology Laboratory Research

**Karmanos Cancer Institute | Undergraduate Research Assistant | June–December 2021**

Supported oncology research through tissue sectioning, staining, microscopy, and laboratory analysis. Maintained tumor cell lines and contributed to research documentation.

### Clinical Research Data and Regulatory Coordination

**Professional research experience**

Supported clinical trials through data collection, regulatory documentation, participant recruitment, and scheduling. Contributed to data quality, protocol compliance, monitoring readiness, and audit preparation.

## Public Profiles

* [LinkedIn](https://www.linkedin.com/in/hinakramer/)
* [GitHub](https://github.com/hinak786)

```

## Planning response received

Source: the response uploaded as `Pasted markdown(20260916-193418).md` on 2026-09-16. The planning tool and model have not yet been confirmed. The response states that it did not inspect repository files. It is a proposed plan, not evidence that implementation or testing has been completed.

---

# Portfolio Personalization Implementation Plan

This plan is based only on the project details and approved content you provided. I have **not inspected the repository files**, so exact template components, selectors, image inventory, deployment configuration, and remaining placeholder content must be verified before implementation.

## 1. File-by-file implementation plan

### `index.html`

#### Landing and identity

- Replace the starter identity with:
  - **Hina Khoja**
  - **Clinical Research | Neuroscience | Artificial Intelligence in Healthcare**
- Update the browser page title and relevant metadata to identify the site as Hina Khoja’s professional portfolio.
- Retain the template’s overall page structure and visual layout.
- Remove all starter names, occupations, contact details, testimonials, project entries, and other placeholder content.

#### About section

Use the approved text, with only minor formatting or grammar edits that do not alter its meaning:

> I have a background in neuroscience and clinical research coordination, with an interest in applying artificial intelligence to healthcare. My experience includes research documentation, data quality, regulatory coordination, and AI response evaluation.

#### Education section

Present education so completed credentials, expected credentials, and coursework are clearly distinguished:

- **University of Michigan-Flint**
  - Master of Science in Artificial Intelligence
  - Cybersecurity concentration
  - Expected graduation: 2027
  - Flint, Michigan, USA
  - Status: ongoing
- **Wayne State University**
  - Bachelor of Science in Neuroscience
  - Minor in Biological Sciences
  - 2021–2025
  - Detroit, Michigan, USA
  - Status: graduated
- **Macomb Community College**
  - Associate-level coursework in Liberal Arts and Sciences
  - 2018–2021
  - Warren, Michigan, USA
  - Avoid presenting this as an associate degree unless clarified.
- **Computer Systems Institute**
  - Diploma in Communication and Literature
  - Dates supplied: 2015 and 2017
  - Skokie, Illinois, USA
  - Date format requires clarification.
- **Marian University**
  - Three years of coursework in Nursing Science and Graphic Arts
  - 2013–2015
  - Fond du Lac, Wisconsin, USA
  - Do not present this as a completed Bachelor of Science.
- **Aga Khan University**
  - Three years of coursework in Nursing
  - 2010–2013
  - Karachi, Pakistan
  - Do not present this as a completed Bachelor of Science.

The wording will avoid implying that coursework-only entries represent awarded degrees.

#### Skills section

Add the approved skills:

- Clinical research coordination
- Research documentation and regulatory compliance
- Data quality review
- Electronic medical records
- Electronic data capture systems
- Artificial intelligence response evaluation
- Data annotation

Where appropriate, spell out terms rather than introducing unexplained abbreviations.

#### Projects and research section

Include at least the two approved experiences, each with a visible title and description:

1. **Oncology Laboratory Research**
   - Karmanos Cancer Institute
   - Undergraduate Research Assistant
   - June–December 2021
   - Description covering tissue sectioning, staining, microscopy, laboratory analysis, tumor cell-line maintenance, and research documentation.

2. **Clinical Research Data and Regulatory Coordination**
   - Label as professional research experience.
   - Description covering data collection, regulatory documentation, participant recruitment, scheduling, data quality, protocol compliance, monitoring readiness, and audit preparation.
   - Do not add an employer, job title, or dates unless supplied.

If the starter uses project cards that require links, either make each card a non-link article or link it to its corresponding section. Do not create fictional case-study, source-code, or live-demo URLs.

#### Navigation and front-end structure

- Map the existing navigation controls to the intended portfolio sections.
- Use descriptive and consistent section labels, likely:
  - About
  - Education
  - Skills
  - Research/Experience
- Ensure each navigation control works with both keyboard and pointer input.
- Preserve the template’s navigation model if it is accessible and functional.
- Add or correct:
  - Semantic headings
  - Landmark elements where compatible with the template
  - Button types
  - Accessible names
  - `aria-current`, `aria-selected`, `aria-controls`, or related state attributes where appropriate to the existing interface
- Avoid assigning link behavior to non-interactive elements without keyboard support.
- Keep heading levels logical and avoid skipping levels unnecessarily.

#### Public-profile links

Use only the supplied URLs:

- [LinkedIn profile](https://www.linkedin.com/in/hinakramer/)
- [GitHub profile](https://github.com/hinak786)

Use meaningful accessible names such as “Hina Khoja on LinkedIn,” especially if the visual presentation uses icons alone.

If links open in a new tab, ensure the behavior is communicated accessibly and use safe `rel` values. Alternatively, keep normal same-tab behavior.

#### Contact and private information

- Remove all template phone numbers, email addresses, birthdays, physical addresses, and social accounts not explicitly supplied.
- Do not infer a public email address from the GitHub username, U-M identity, or any template field.
- If the template requires a contact area, convert it into a “Profiles” area containing only LinkedIn and GitHub, or remove it without disrupting the layout.
- Do not add a contact form because no backend or data collection is permitted.

#### Images and alternative text

- Replace or remove starter portraits, testimonial photos, employer logos, portfolio thumbnails, and decorative images as needed.
- Do not label a stock or template portrait as Hina Khoja.
- Use:
  - Concise, meaningful alternative text for informative images
  - Empty alternative text (`alt=""`) for purely decorative images
- Avoid repeating nearby visible text in image alternative text.
- Preserve image dimensions or aspect-ratio handling where needed to minimize layout shift.

#### Template cleanup

Search the full rendered page for:

- Starter names
- Starter occupations
- Sample contact details
- Testimonials
- Placeholder portfolio projects
- Dummy dates
- Demo URLs
- Lorem ipsum
- Inaccurate degree claims
- Empty or broken links

Retain all required template license notices, attribution, and copyright material.

---

### `assets/css/style.css`

Make only focused corrections needed to support the personalized content and acceptance criteria:

- Verify the page at a **375-pixel CSS viewport width**.
- Prevent horizontal overflow caused by:
  - Fixed widths
  - Long profile URLs
  - Oversized cards or images
  - Absolute positioning
  - Navigation labels
  - Unbreakable text
- Allow headings, education labels, dates, and professional-focus text to wrap naturally.
- Adjust grid or flex layouts so cards stack appropriately on narrow screens.
- Ensure images scale within their containers.
- Preserve readable spacing and avoid content overlap.
- Maintain visible keyboard focus styles.
- Verify text and interactive-control contrast against their backgrounds.
- Respect the existing design and avoid a broad visual redesign.
- If animation is present, preserve existing behavior unless it causes accessibility or usability problems; make a small `prefers-reduced-motion` adjustment if necessary.
- Avoid hiding meaningful content at small breakpoints.

No new design framework or large stylesheet rewrite is planned.

---

### `assets/js/script.js`

Make only small behavior corrections after reviewing the existing script:

- Ensure every navigation item activates the intended section.
- Ensure section state is synchronized with accessibility attributes.
- Confirm keyboard activation works for navigation implemented as tabs or buttons.
- Prevent errors caused by removing starter-only elements.
- Avoid selectors that assume deleted testimonials, contact fields, or project filters still exist.
- Ensure profile links retain normal link behavior.
- Do not add:
  - Analytics
  - Tracking
  - Network requests
  - Data collection
  - Authentication
  - Backend dependencies

Prefer semantic HTML and native browser behavior over JavaScript where practical.

---

### `README.md`

Update the README to include:

#### Project purpose

- Identify the repository as Hina Khoja’s static professional portfolio.
- State its audience:
  - Recruiters
  - Internship reviewers
  - Professionals interested in clinical research, neuroscience, and healthcare artificial intelligence
- Mention that it was personalized for SWE 380 / CSC 580 Assignment 1 if that course wording is intended to be public.

#### Technology

- HTML
- CSS
- JavaScript
- The vCard Personal Portfolio starter/template

#### Local setup

Document a minimal static-site workflow, subject to repository verification:

- Clone the repository
- Check out `feature/portfolio-personalization` for development or `master` after merge
- Open `index.html` directly or serve the directory with a simple local static server
- State that no backend, database, login, or environment secrets are required

Do not invent build commands or package-manager steps unless the repository actually includes them.

#### Testing

Document manual checks for:

- Navigation
- Public-profile links
- Responsive layout at 375 pixels
- Keyboard operation
- Focus visibility
- Alternative text
- Contrast
- Browser-console errors
- Placeholder and private-information removal
- Published GitHub Pages site

#### Attribution and license

- Preserve the starter template’s existing attribution and license.
- Name the vCard Personal Portfolio starter exactly as its repository documentation or license requires.
- Link to the original template only after the existing attribution identifies the authoritative source.
- Do not replace or weaken any existing license terms.

#### Deployment

- Document the actual GitHub Pages configuration only after it is verified.
- Avoid claiming that Pages deploys from `master`, `/docs`, or a GitHub Actions workflow without checking the repository settings or workflow files.

---

### `assets/images/`

Use replacement assets only when necessary.

- Inventory the image files referenced by `index.html` and CSS.
- Remove obsolete references before considering physical file deletion.
- Replace starter images only with assets you provide or explicitly approve.
- Optimize replacement images for web delivery while retaining adequate quality.
- Use stable, descriptive filenames where reasonable.
- Do not use third-party photographs, logos, or illustrations without a clear right to use them.
- Preserve any attribution that an retained asset requires.

If no approved professional portrait or project imagery is available, prefer a text-focused presentation, decorative template art, or neutral non-identifying visuals rather than inventing personal imagery.

---

## 2. Assumptions, risks, and clarification questions

### Assumptions

- `feature/portfolio-personalization` already exists or will be created from an up-to-date `master`.
- The portfolio is a static site without a required build process.
- The supplied LinkedIn and GitHub URLs are approved for publication.
- The content may be lightly edited for punctuation, capitalization, and consistency, but its substantive claims must remain unchanged.
- “Professional research experience” is intentionally general and should not be connected to an employer or date.
- Course labels “SWE 380 / CSC 580” refer to the same assignment context, but this should be confirmed before making them public in the README.
- GitHub Pages deployment details must be verified rather than inferred from the default branch.

### Risks

1. **Unknown template structure**  
   The starter may implement page sections as JavaScript-controlled tabs, filters, or custom navigation. Removing content without adjusting selectors could break navigation or create console errors.

2. **Degree-status ambiguity**  
   “Associate-level coursework … | Graduated” could be interpreted as a completed associate degree, but no degree title is supplied. It should remain coursework unless clarified.

3. **Computer Systems Institute dates**  
   “2015, 2017” is ambiguous. It could indicate attendance periods, separate programs, or completion in 2017.

4. **University of Michigan-Flint date wording**  
   The supplied range is 2026–2027 expected, with graduation expected in 2027. This is sufficiently clear for an ongoing program but should not be presented as a completed degree.

5. **Nursing coursework wording**  
   “BS-Nursing” could wrongly imply degree completion. The portfolio must explicitly identify both Marian University and Aga Khan University entries as coursework only.

6. **Missing approved portrait and project images**  
   Existing template images may be inaccurate or misleading. Without approved replacements, a text-based or neutral visual treatment is safer.

7. **Private information in uninspected files**  
   Placeholder or personal contact information may appear outside the main content sections, including metadata, comments, image names, scripts, or README examples.

8. **Required attribution**  
   The exact license and attribution requirements are unknown until the repository and starter documentation are inspected.

9. **Responsive overflow**  
   The existing card widths, fixed sidebar, long heading, or navigation implementation may cause horizontal scrolling at 375 pixels.

10. **Published-site configuration**  
    GitHub Pages may deploy from a branch, directory, or workflow different from `master`. The source and custom domain, if any, need verification.

11. **Existing links and external assets**  
    The template may depend on third-party fonts, icons, scripts, or demo links. These should be reviewed for breakage, accessibility, privacy implications, and relevance without expanding the project scope.

### Questions requiring clarification

1. For **Macomb Community College**, was a specific associate degree awarded? If not, I will list it only as “Coursework in Liberal Arts and Sciences” and omit “graduated.”

2. For **Computer Systems Institute**, what do “2015, 2017” mean? For example:
   - Attendance from 2015–2017
   - Diploma awarded in 2017
   - Separate study periods in 2015 and 2017

3. Do you have an approved portrait, résumé, or project/research images to add? If not, the plan will avoid representing any template portrait as you and will not add a résumé link.

4. Should the public README explicitly identify **SWE 380 / CSC 580 Assignment 1**, or should it describe only the portfolio’s professional purpose?

5. Is there an existing GitHub Pages URL or deployment configuration that must be preserved? If not, it should be determined from the repository settings/files before documenting deployment.

These questions do not block the overall structure, but they affect the accuracy of the education, media, README, and deployment details.

---

## 3. Proposed sequence of three implementation commits

Each commit should be made on `feature/portfolio-personalization` and should represent a coherent, reviewable change.

### Commit 1: Personalize portfolio content and remove starter data

**Proposed message:**

```text
feat: replace starter content with professional portfolio details
```

**Scope:**

- Update `index.html` with:
  - Hina Khoja’s name
  - Professional focus
  - About text
  - Education
  - Skills
  - Two research/experience entries
  - LinkedIn and GitHub links
- Clearly distinguish completed education, ongoing study, and coursework.
- Remove sample names, contact information, testimonials, and placeholder projects.
- Remove or neutralize inaccurate starter-image references.
- Preserve template layout, license, and attribution.
- Avoid unresolved education claims until clarification is received.

### Commit 2: Correct navigation, accessibility, and responsive behavior

**Proposed message:**

```text
fix: improve navigation accessibility and mobile layout
```

**Scope:**

- Update `index.html`, `assets/css/style.css`, and, only if needed, `assets/js/script.js`.
- Connect navigation controls to the intended sections.
- Improve semantic structure and accessible control names.
- Synchronize active navigation state with relevant accessibility attributes.
- Preserve visible keyboard focus and keyboard activation.
- Correct 375-pixel layout overflow, wrapping, image sizing, and card stacking.
- Remove JavaScript assumptions tied to deleted template sections.
- Verify no analytics, tracking, or data collection is introduced.

### Commit 3: Document setup, testing, deployment, and attribution

**Proposed message:**

```text
docs: add portfolio setup testing and template attribution
```

**Scope:**

- Update `README.md` with:
  - Project purpose and audience
  - Technology overview
  - Local setup
  - Manual testing procedure
  - GitHub Pages information after verification
  - Template attribution and license requirements
- Perform final placeholder/private-data scan.
- Verify profile links and browser console.
- Record the tested deployment URL if the Pages site is available.
- Make only small final corrections found during testing; avoid bundling unrelated redesign work.

---

## 4. Test checklist

### Acceptance criteria

- [ ] The landing page visibly identifies **Hina Khoja**.
- [ ] The landing page displays the professional focus: **Clinical Research | Neuroscience | Artificial Intelligence in Healthcare**.
- [ ] **Oncology Laboratory Research** appears with a description.
- [ ] **Clinical Research Data and Regulatory Coordination** appears with a description.
- [ ] No employer, title, date, credential, achievement, or project link has been invented.
- [ ] Each navigation item opens or reveals its intended section.
- [ ] LinkedIn points exactly to `https://www.linkedin.com/in/hinakramer/`.
- [ ] GitHub points exactly to `https://github.com/hinak786`.
- [ ] The page is readable and usable at a 375-pixel CSS viewport width.
- [ ] There is no horizontal page scrolling at 375 pixels.
- [ ] No sample names remain.
- [ ] No sample contact details remain.
- [ ] No testimonials remain.
- [ ] No placeholder project content remains.

### Content accuracy

- [ ] University of Michigan-Flint is presented as an ongoing Master of Science program with expected graduation in 2027.
- [ ] Wayne State University is presented as a completed Bachelor of Science in Neuroscience with a minor in Biological Sciences.
- [ ] Macomb Community College is not represented as awarding an associate degree unless confirmed.
- [ ] Computer Systems Institute dates are represented only after clarification.
- [ ] Marian University is represented as three years of coursework, not a completed Bachelor of Science.
- [ ] Aga Khan University is represented as three years of coursework, not a completed Bachelor of Science.
- [ ] Clinical research experience is not assigned an employer or date that was not supplied.
- [ ] Project/research descriptions preserve the meaning of the approved notes.
- [ ] Capitalization and punctuation changes do not alter qualifications or claims.

### Navigation and interaction

- [ ] Every visible navigation control is reachable with the `Tab` key.
- [ ] Navigation controls can be activated with the keyboard using the correct native behavior.
- [ ] Focus does not become trapped.
- [ ] Focus order follows the visual and logical reading order.
- [ ] Active-section state is visually apparent and programmatically conveyed where applicable.
- [ ] Hidden sections are not unintentionally keyboard-focusable.
- [ ] LinkedIn and GitHub links can be activated with keyboard and pointer input.
- [ ] No empty links, `href="#"` placeholders, or dead controls remain.
- [ ] Browser Back behavior is not unnecessarily disrupted.
- [ ] The page remains usable when JavaScript is unavailable to the extent supported by the starter design.

### Accessibility

- [ ] The document has a descriptive page title.
- [ ] The page declares the correct language.
- [ ] There is one clear top-level heading.
- [ ] Heading levels form a logical hierarchy.
- [ ] Major sections use meaningful headings or accessible labels.
- [ ] Links have meaningful names outside their surrounding context.
- [ ] Icon-only links have accessible names.
- [ ] Informative images have concise alternative text.
- [ ] Decorative images use empty alternative text or an equivalent accessible treatment.
- [ ] No stock portrait is described as Hina Khoja.
- [ ] Text and interactive elements have readable contrast.
- [ ] Keyboard focus indicators remain visible.
- [ ] Content is not conveyed through color alone.
- [ ] Text can be enlarged without overlapping or losing essential content.
- [ ] The layout remains usable at narrow widths and browser zoom.
- [ ] Motion does not interfere with use; reduced-motion preferences are respected if relevant.
- [ ] Automated accessibility testing reports are reviewed manually rather than treated as conclusive.

### Responsive layout

Test at minimum:

- [ ] 375 × 667 pixels
- [ ] 375 × 812 pixels
- [ ] A tablet-sized viewport
- [ ] A standard desktop viewport

At 375 pixels, verify:

- [ ] No horizontal scrollbar is present.
- [ ] Professional-focus text wraps without clipping.
- [ ] Navigation remains reachable and understandable.
- [ ] Education and experience cards fit the viewport.
- [ ] Long titles and location strings wrap.
- [ ] Images do not exceed their containers.
- [ ] Text does not overlap icons, controls, or neighboring cards.
- [ ] Tappable controls are not crowded or obscured.
- [ ] No meaningful content is hidden solely to make the layout fit.

### Privacy and unsupported content

- [ ] No phone number appears unless separately approved.
- [ ] No email address appears unless separately approved.
- [ ] No street or home address appears.
- [ ] No birth date or age appears.
- [ ] No U-M uniqname or inferred email is published.
- [ ] No template contact-form endpoint remains.
- [ ] No analytics or tracking script is present.
- [ ] No login, account system, or backend has been added.
- [ ] No external data-collection request occurs.
- [ ] No unsupported employer names, dates, metrics, certifications, or awards appear.
- [ ] No secrets, tokens, credentials, or local file paths appear in source or documentation.

### Placeholder and repository scan

Search relevant tracked files, including HTML, CSS, JavaScript, README, and metadata, for:

- [ ] Original template person’s name
- [ ] Example email addresses
- [ ] Example phone numbers
- [ ] Demo locations and addresses
- [ ] Testimonial text
- [ ] Lorem ipsum
- [ ] “John Doe” and similar sample names
- [ ] Placeholder portfolio titles
- [ ] Demo social-profile URLs
- [ ] Empty or placeholder anchors
- [ ] Comments containing private or outdated content
- [ ] Unused image references associated with starter identities

### Browser and console checks

Test in at least current versions available locally of:

- [ ] Chrome or Chromium
- [ ] Firefox
- [ ] Safari, if available
- [ ] Edge, if available

For each tested browser:

- [ ] No uncaught JavaScript errors appear in the console.
- [ ] No failed local asset requests appear.
- [ ] No missing image, stylesheet, script, font, or icon requests appear.
- [ ] Navigation behaves consistently.
- [ ] Profile links resolve correctly.
- [ ] There are no mixed-content warnings.
- [ ] There are no obvious deprecated-API or accessibility warnings caused by the changes.

### README, attribution, and repository state

- [ ] README accurately describes the static project.
- [ ] Setup instructions match the repository’s actual requirements.
- [ ] No unverified package-manager or build commands are documented.
- [ ] Testing instructions include the 375-pixel viewport.
- [ ] The original template attribution is retained.
- [ ] The original license file and notices are preserved.
- [ ] Any required image or asset attribution remains.
- [ ] Changes exist on `feature/portfolio-personalization`.
- [ ] The branch contains at least three meaningful commits.
- [ ] Commit messages describe their actual changes.
- [ ] Unrelated files and generated artifacts are not included.

### Published GitHub Pages site

After deployment:

- [ ] Confirm the exact GitHub Pages URL from repository settings or deployment output.
- [ ] Confirm the site loads over HTTPS.
- [ ] Confirm Pages publishes the intended commit from the intended branch/directory or workflow.
- [ ] Verify the live landing page shows Hina Khoja and the professional focus.
- [ ] Test every live navigation control.
- [ ] Test the live LinkedIn and GitHub links.
- [ ] Test the live site at 375 pixels without horizontal scrolling.
- [ ] Check the live browser console for errors.
- [ ] Check the network panel for missing assets and unexpected data collection.
- [ ] Confirm case-sensitive asset paths work on GitHub Pages.
- [ ] Confirm no repository-relative path breaks after deployment.
- [ ] Confirm no starter content remains in the deployed version.
- [ ] Confirm the live deployment corresponds to the reviewed commit rather than an older cached build.
