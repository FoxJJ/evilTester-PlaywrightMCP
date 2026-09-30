# TestPages Apps Page Test Plan

## Application Overview

Validate the public Apps directory at https://testpages.eviltester.com/apps/ in a fresh browser context. The page introduces the micro apps and lists 19 app links with short descriptions. Coverage focuses on page identity and content, the complete directory and link destinations, site navigation, and responsive usability. The plan tests the Apps index and verifies that linked apps open; it does not test each app's internal functionality. Start every scenario with a fresh browser context and no prior site state.

## Test Scenarios

### 1. Apps Directory

**Seed:** `seed.spec.ts`

#### 1.1. Apps page loads with expected identity and directory introduction

**File:** `tests/apps/apps-page-load.spec.js`

**Steps:**
  1. In a fresh browser context, navigate directly to https://testpages.eviltester.com/apps/.
    - expect: The page loads successfully and remains at /apps/.
    - expect: The document title is Software Testing Apps for Automation Practice | Test Pages.
  2. Inspect the primary heading, main content, and site header.
    - expect: The main content has the level-one heading Apps.
    - expect: The introduction describes the page as a collection of micro apps and explains that the applications encourage deeper exploration.
    - expect: The shared site header and primary navigation are present.
  3. Inspect the app directory and page footer.
    - expect: The directory contains app entries with names and short descriptions.
    - expect: The footer is present and the page content is not replaced by an error or empty state.

#### 1.2. All expected apps appear once with their expected destination

**File:** `tests/apps/apps-directory-links.spec.js`

**Steps:**
  1. In a fresh browser context, navigate directly to https://testpages.eviltester.com/apps/.
    - expect: The Apps directory is visible.
  2. Inspect each named app entry and its associated link destination.
    - expect: Triangle links to /apps/triangle/.
    - expect: 7 Char Val links to /apps/7-char-val/.
    - expect: Basic Shopping Cart links to /apps/basiccart/.
    - expect: AI Chat Bot links to /apps/ai-chat-bot/.
    - expect: Button Calculator links to /apps/button-calculator/.
    - expect: Canvas Draw links to /apps/canvas-draw/.
    - expect: Canvas Scribble links to /apps/canvas-scribble/.
    - expect: Validated Client Server Form links to /apps/client-server-form-validation/.
    - expect: HTML Table Generator links to /apps/html-table-generator/.
    - expect: Grammar Data Gen links to /apps/grammar-data-gen/.
    - expect: Countdown Timer links to /apps/countdown-timer/.
    - expect: Server Side Calculator links to /apps/server-side-calculator/.
    - expect: Simple Calculator API links to /apps/calculator-api/.
    - expect: Text Transformer links to /apps/text-transformer/.
    - expect: Cookie Controlled Login links to /apps/simulated-login/.
    - expect: Numbers to Text links to /apps/numbers-to-text/.
    - expect: Note Taker links to /apps/note-taker/.
    - expect: E-Primer links to /apps/e-primer/.
    - expect: Simple TODO List links to /apps/simple-todo-list/.
    - expect: There are 19 distinct named app entries, with no missing names, duplicate entries, empty destinations, or links pointing outside the expected app routes.

#### 1.3. App links open their matching pages

**File:** `tests/apps/app-destination-navigation.spec.js`

**Steps:**
  1. In a fresh browser context, navigate to https://testpages.eviltester.com/apps/ and activate each named app link from the directory, returning to the Apps page between selections.
    - expect: Each app link navigates to the matching destination on testpages.eviltester.com.
    - expect: The destination URL matches the route listed for that app in the Apps directory.
    - expect: Each destination renders a non-empty page with a page title and primary content, rather than a browser error or site not-found page.
    - expect: The browser can return to the Apps directory after each destination check.

#### 1.4. Shared navigation returns to and away from the Apps directory

**File:** `tests/apps/apps-header-navigation.spec.js`

**Steps:**
  1. In a fresh browser context, navigate directly to https://testpages.eviltester.com/apps/ and activate the Test Pages logo/home link.
    - expect: The browser navigates to the site homepage.
  2. Use the shared header Apps link to return to the Apps directory.
    - expect: The browser navigates to https://testpages.eviltester.com/apps/.
    - expect: The Apps heading and app directory are visible.
  3. Activate another primary header section link, then use browser back.
    - expect: The selected section link opens its corresponding testpages.eviltester.com section.
    - expect: Browser back returns to the Apps directory with its heading and app links available.

#### 1.5. Apps directory remains usable at a narrow viewport

**File:** `tests/apps/apps-responsive.spec.js`

**Steps:**
  1. In a fresh browser context, set the viewport to 390 by 844 CSS pixels and navigate directly to https://testpages.eviltester.com/apps/.
    - expect: The Apps heading and directory entries remain visible and readable.
    - expect: App names and their links remain usable without overlapping or clipping.
    - expect: The page has no unintended horizontal overflow.
  2. At the narrow viewport, scroll through the directory and activate an app link near the bottom, such as Simple TODO List.
    - expect: The link can be reached and activated at the narrow viewport.
    - expect: The browser opens the expected app destination without requiring horizontal scrolling.
