# Dynamic Buttons 01 Synchronization Challenge Test Plan

## Application Overview

Validate the Dynamic Buttons 01 synchronization challenge at https://testpages.eviltester.com/challenges/synchronization/dynamic-buttons-01/. The official instructions at https://testpages.eviltester.com/challenges/synchronization/dynamic-buttons-01/simple-dynamic-buttons-instructions/ say that Start reveals One, One reveals Two, Two reveals Three, and clicking Three displays "All Buttons Clicked". Each later button appears after an increasing delay. Start every scenario in a fresh browser context. The page currently allows Start to be activated again, which creates duplicate One buttons; retain the duplicate-activation case as a regression check and record its current failure.

## Test Scenarios

### 1. Dynamic Buttons 01 Synchronization

**Seed:** `seed.spec.ts`

#### 1.1. Initial state exposes only Start

**File:** `tests/challenges/dynamic-buttons-01-load.spec.js`

**Steps:**
  1. In a fresh browser context, navigate directly to https://testpages.eviltester.com/challenges/synchronization/dynamic-buttons-01/.
    - expect: The page remains at the Dynamic Buttons 01 challenge URL.
    - expect: The document title is Dynamic Buttons 01 Synchronization Challenge | Test Pages.
    - expect: The main content identifies Dynamic Buttons 01 and explains that buttons are added dynamically with a delay.
  2. Inspect the challenge controls and completion area before interacting.
    - expect: The enabled Start button is visible.
    - expect: One, Two, and Three are not present.
    - expect: The completion message does not say All Buttons Clicked.

#### 1.2. Complete the sequence using synchronization

**File:** `tests/challenges/dynamic-buttons-01-sequence.spec.js`

**Steps:**
  1. In a fresh browser context, open the Dynamic Buttons 01 challenge and click Start once.
    - expect: The One button becomes available.
    - expect: Start and One are both visible.
  2. Click One and inspect the page while the next button is pending; wait for Two to become available.
    - expect: Wait... is displayed during the delay.
    - expect: Two is not available before it is revealed.
    - expect: Wait... clears when Two appears.
    - expect: Start, One, and Two remain visible.
  3. Click Two and inspect the page while the next button is pending; wait for Three to become available.
    - expect: Wait... is displayed during the longer delay before Three appears.
    - expect: Three is not available before it is revealed.
    - expect: Wait... clears when Three appears.
    - expect: Start, One, Two, and Three remain visible.
  4. Click Three and inspect the completion area.
    - expect: The page displays All Buttons Clicked.
    - expect: The wait indicator is clear.
    - expect: All four buttons remain visible.

#### 1.3. Repeated Start activation does not create duplicates

**File:** `tests/challenges/dynamic-buttons-01-duplicate-start.spec.js`

**Steps:**
  1. In a fresh browser context, open the Dynamic Buttons 01 challenge and activate Start once.
    - expect: Exactly one One button is present.
  2. Activate the still-visible Start button a second time, then inspect the dynamic buttons and their IDs.
    - expect: The challenge does not add a duplicate One button.
    - expect: There is at most one element with ID button01.
    - expect: The page remains usable and does not display a misleading completion message.
