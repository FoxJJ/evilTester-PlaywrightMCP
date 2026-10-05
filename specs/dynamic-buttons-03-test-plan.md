# Dynamic Buttons 03 Test Plan

## Application Overview

Validate the Dynamic Buttons 03 synchronization challenge at https://testpages.eviltester.com/challenges/synchronization/dynamic-buttons-03/. Its [Instructions page](https://testpages.eviltester.com/challenges/synchronization/dynamic-buttons-03/dynamic-button-auto-instructions/) explains that buttons are recreated automatically, clicks are tracked, and automation may need to re-find a button after replacement. Start each scenario in a fresh browser context. Do not rely on a fixed replacement interval or button number.

## Test Scenarios

### 1. Dynamic Button Behavior

**Seed:** `seed.spec.ts`

#### 1.1. Challenge loads with its current dynamic button

**File:** `tests/challenges/dynamic-buttons-03-load.spec.js`

**Steps:**
  1. In a fresh browser context, navigate directly to https://testpages.eviltester.com/challenges/synchronization/dynamic-buttons-03/.
    - expect: The page remains at the Dynamic Buttons 03 challenge URL.
    - expect: The document title is Dynamic Buttons 03 Synchronization Challenge | Test Pages.
  2. Inspect the main challenge content and current button.
    - expect: The main content has the level-one heading Dynamic Buttons 03.
    - expect: The page explains that the button is automatically replaced after a delay.
    - expect: A current enabled button is available to interact with.

#### 1.2. Button is automatically replaced without user interaction

**File:** `tests/challenges/dynamic-buttons-03-replacement.spec.js`

**Steps:**
  1. In a fresh browser context, navigate directly to the Dynamic Buttons 03 challenge and capture the current button element and its accessible name without clicking it.
    - expect: A current dynamic button is visible and enabled.
  2. Wait for the captured button element to be detached by the page's automatic update, then query the current button again.
    - expect: The original button element is detached without any user click.
    - expect: A replacement button is visible and enabled.
    - expect: The replacement has a different button identity or name from the captured button.

#### 1.3. Clicking the current button is recorded

**File:** `tests/challenges/dynamic-buttons-03-click-tracking.spec.js`

**Steps:**
  1. In a fresh browser context, navigate to the Dynamic Buttons 03 challenge and re-find the currently rendered button immediately before interaction.
    - expect: A current enabled button can be located after any automatic replacement.
  2. Capture the current button's name, click that button, and inspect the click history.
    - expect: The page records a click entry for the button name that was activated, such as Clicked Button N.
    - expect: The click history does not attribute the action to an earlier replaced button.
    - expect: A current dynamic button remains available as the page continues updating.