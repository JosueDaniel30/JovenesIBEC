# TODO: Fix Console Errors in Biblia App

## Issues Identified
1. **TypeError in mostrarTestamento**: `btn.classList.add('active')` fails because `btn` is undefined or not an HTMLElement.
2. **Service Worker Registration Failure**: Incorrect path `/sw.js` instead of `/JovenesIBEC/sw.js`.
3. **JSON Parsing Failure**: Bible JSON files use single quotes, causing `response.json()` to fail.

## Tasks
- [x] Add safety checks in `mostrarTestamento` function in 1960.js to ensure `btn` is a valid HTMLElement before accessing `classList`.
- [ ] Fix Service Worker path in biblia.html to use `/JovenesIBEC/sw.js`.
- [x] Modify `obtenerCapitulo` in 1960.js to parse JSON with single quotes by using `response.text()` and replacing quotes.
- [ ] Test the fixes by running the app and checking console logs.

## Followup Steps
- Verify that mostrarTestamento works without errors.
- Confirm Service Worker registers successfully.
- Ensure Bible chapters load correctly without JSON parsing errors.
