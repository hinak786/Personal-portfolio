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

Pending: After GitHub Pages publication, check the live website, navigation, profile links, and mobile layout.

## AI assistance

ChatGPT helped format this record from my reported test results.
