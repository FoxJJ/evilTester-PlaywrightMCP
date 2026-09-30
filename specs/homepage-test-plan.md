# Test Plan: Test Pages Homepage

## Application Overview

Validate the public homepage at https://testpages.eviltester.com/ in a fresh browser context. The homepage is a content and navigation index for practice pages, apps, games, tools, challenges, and reference material. It includes global navigation, in-page section links, a YouTube video embed, tag and category links, and external support/footer links. Unless a scenario says otherwise, start directly at the homepage with no prior browser state. Third-party destinations and video playback depend on network availability; assertions about those should distinguish site failures from external-service failures.

## Test Scenarios

### 1. Homepage rendering and navigation

**Seed:** `tests/example.spec.js`

#### 1.1. Homepage loads with expected identity and core content

**File:** `tests/homepage/homepage-load.spec.js`

**Steps:**
  1. In a fresh browser context, navigate to https://testpages.eviltester.com/.
    - expect: The page loads successfully and remains at the homepage URL.
  2. Inspect the document title, primary heading, global navigation, and main content.
    - expect: The document title is Software Testing Practice Pages, Apps, and Challenges.
    - expect: The page has a visible level-one heading, Software Testing Practice Pages.
    - expect: The header exposes links for Pages, Apps, Fun and Games, Tools, Challenges, and Reference Information and Tutorials.
    - expect: The main content introduces the practice pages and lists the site's content areas.
  3. Inspect the homepage's major sections and footer.
    - expect: Overview Video, About, Pages, Support These Pages, Sponsoring, and History sections are present.
    - expect: A footer is present with support, contact, and privacy links.

#### 1.2. Primary header navigation opens the expected section

**File:** `tests/homepage/header-navigation.spec.js`

**Steps:**
  1. From a fresh homepage, activate each header navigation link: Pages, Apps, Fun and Games, Tools, Challenges, and Reference Information and Tutorials.
    - expect: Pages navigates to /pages/.
    - expect: Apps navigates to /apps/.
    - expect: Fun and Games navigates to /fun-and-games/.
    - expect: Tools navigates to /tools/.
    - expect: Challenges navigates to /challenges/.
    - expect: Reference Information and Tutorials navigates to /reference/.
    - expect: Each destination loads as a page on testpages.eviltester.com and its URL matches the selected section.
  2. Navigate back to the homepage, then activate the Test Pages logo/home link.
    - expect: The browser returns to the homepage URL and the homepage title and primary heading are visible.

#### 1.3. Homepage section links navigate to matching anchors

**File:** `tests/homepage/section-anchor-navigation.spec.js`

**Steps:**
  1. From a fresh homepage, activate each in-page section link: Overview Video, About, Pages, Support These Pages, Sponsoring, and History.
    - expect: Each link updates the URL fragment to the corresponding section anchor.
    - expect: The matching section heading is brought into view.
    - expect: The page remains on the homepage rather than navigating to another site.
  2. Use browser back after following an in-page section link.
    - expect: The prior fragment or homepage URL is restored without a navigation error.

#### 1.4. Tag and category links open their indexes

**File:** `tests/homepage/sidebar-discovery.spec.js`

**Steps:**
  1. From a fresh homepage, select a visible tag link, such as AI, from the Tag Cloud.
    - expect: The browser navigates to the corresponding tag index, such as /tags/ai/.
    - expect: The destination remains on testpages.eviltester.com and presents a tag-specific page.
  2. Return to the homepage and select the Basics category link.
    - expect: The browser navigates to /categories/basics/.
    - expect: The destination remains on testpages.eviltester.com and presents a category-specific page.

#### 1.5. Homepage update links and content-area links are usable

**File:** `tests/homepage/homepage-content-links.spec.js`

**Steps:**
  1. From a fresh homepage, activate the latest update link for the Fun and Games section.
    - expect: The browser navigates to /fun-and-games/.
  2. Return to the homepage and activate the AI Chat Bot App update link.
    - expect: The browser navigates to /apps/ai-chat-bot/.
  3. Return to the homepage and inspect the links in the homepage's content-area overview.
    - expect: The homepage overview identifies Pages, Apps, Fun and Games, Tools, Challenges, and Reference as content areas.
    - expect: Where these content-area names are links, each link points to its corresponding site section.

#### 1.6. Overview video is available without blocking homepage content

**File:** `tests/homepage/homepage-video.spec.js`

**Steps:**
  1. From a fresh homepage, locate the Overview Video embed and its accessible controls.
    - expect: The Overview Video section and embedded player are present.
    - expect: When YouTube is reachable, the player exposes a Play video control and a link to watch the video on YouTube.
  2. When third-party playback is available, activate Play video.
    - expect: Playback starts or the embedded player shows its normal loading/playback state.
  3. If YouTube is unavailable or blocked, inspect the rest of the homepage without retrying the video.
    - expect: The homepage title, navigation, content sections, and footer remain available.
    - expect: An unavailable embed does not prevent interaction with the rest of the page.

#### 1.7. Support and footer links have expected destinations

**File:** `tests/homepage/support-and-footer-links.spec.js`

**Steps:**
  1. From a fresh homepage, inspect the top support banner and the sidebar support call to action.
    - expect: The support links are visible and point to https://patreon.com/eviltester.
  2. Inspect footer support, training, contact, and privacy links without leaving the homepage.
    - expect: The Patreon Membership site link points to https://patreon.com/eviltester.
    - expect: The e-books and online training courses link points to https://www.testerhq.com/.
    - expect: The Contact Us link points to https://linkedin.com/in/eviltester.
    - expect: The Privacy Policy link points to https://www.eviltester.com/page/privacy/.

#### 1.8. Homepage remains usable at a narrow viewport

**File:** `tests/homepage/homepage-responsive.spec.js`

**Steps:**
  1. Set the viewport to a narrow mobile size (for example, 390 by 844 CSS pixels), then navigate directly to the homepage.
    - expect: The homepage heading, primary navigation access, main content, and footer remain available at the narrow viewport.
    - expect: Text and controls do not overlap or become unusable.
    - expect: The document does not have unintended horizontal overflow.
  2. At the narrow viewport, follow an in-page section link and return to the top of the page.
    - expect: The selected section can be reached and read at the narrow viewport.
    - expect: The page remains on the homepage and navigation remains usable.
