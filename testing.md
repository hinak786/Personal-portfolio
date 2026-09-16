# Portfolio Testing Record

Tester: Hina Khoja
Date: September 16, 2026
Branch: feature/portfolio-personalization
Environment: Downloaded website opened locally through index.html.

## Manual test results

These results reflect the browser checks I reported as passed.

| Test                 | Expected result                                                                                               | Reported result |
| -------------------- | ------------------------------------------------------------------------------------------------------------- | --------------- |
| Section navigation   | About, Resume, and Portfolio buttons open the correct sections.                                               | Pass            |
| Research content     | Portfolio displays both research experiences with titles and descriptions.                                    | Pass            |
| Public profile links | LinkedIn and GitHub links open my profiles.                                                                   | Pass            |
| Mobile layout        | At 375 pixels wide, text remains readable without sideways scrolling; the bottom menu has a solid background. | Pass            |
| Keyboard navigation  | Tab shows a visible focus outline, and Enter opens the selected section.                                      | Pass            |
| Browser console      | Reloading and switching sections produces no red console errors.                                              | Pass            |

## Problems addressed during development

* Removed duplicated template HTML.
* Added a solid mobile navigation background.
* Resolved missing local styling by extracting the complete website and keeping index.html alongside its assets folder.

## Screenshot evidence

- [Portfolio content test](./test-portfolio.png.png)
- [Mobile layout test: 375-pixel viewport](./test-mobile.png.png)
- [Keyboard navigation test](./test-keyboard.png)

## Published website verification

Website: https://hinak786.github.io/Personal-portfolio/
Date: September 16, 2026

Manual results reported by the student:

- Website loads with its styling and content: Pass.
- About, Resume, and Portfolio navigation: Pass.
- GitHub profile link: Pass.
- LinkedIn profile link: Pass after correction.
- Mobile layout at 375 pixels, with no sideways scrolling: Pass.
- Browser console after reloading and navigating: No red errors reported.

Issue found: The original LinkedIn link returned a 404 page.

Fix: Updated the LinkedIn address in index.html to:
https://www.linkedin.com/in/hina-k-2ab37590/

Retest: Confirmed that the corrected link opens my profile.

## AI assistance

ChatGPT helped format this record from my reported test results.
