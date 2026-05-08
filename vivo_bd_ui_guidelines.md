# vivo Bangladesh UI Guidance

## 1. Context and Goals

**Design Intent:** Deliver a clean, functional, and highly optimized e-commerce storefront for vivo Bangladesh that prioritizes consistency and seamless user experiences.

**Mission:** Create implementation-ready, token-driven UI guidance optimized for consistency, accessibility (WCAG 2.2 AA), and fast delivery across the vivo Bangladesh e-commerce storefront.

- **Brand:** vivo Bangladesh (https://www.vivo.com/bd)
- **Audience:** Online shoppers and consumers
- **Product Surface:** E-commerce storefront
- **Visual Style:** Clean, functional, implementation-oriented

---

## 2. Design Tokens and Foundations

Teams **must** use the following semantic tokens instead of raw CSS values (e.g., hex codes, hardcoded pixel values).

### Typography
- **Primary Font:** `font.family.primary=vivoSansSC`
- **Font Stack:** `font.family.stack=vivoSansSC, languageFont, AvenirNext, Microsoft YaHei, 微软雅黑, MicrosoftJhengHei, 华文细黑, STHeiti, MingLiu, sans-serif, WebRupee`
- **Base Settings:** `font.size.base=12px`, `font.weight.base=400`, `font.lineHeight.base=normal`
- **Scale Tokens:**
  - `font.size.xs` = 0px
  - `font.size.sm` = 12px
  - `font.size.md` = 13.33px
  - `font.size.lg` = 14px
  - `font.size.xl` = 14.78px
  - `font.size.2xl` = 16px
  - `font.size.3xl` = 22.16px
  - `font.size.4xl` = 23.04px

### Color Palette
- **Text:** 
  - `color.text.primary` = #ffffff
  - `color.text.secondary` = #242933
  - `color.text.tertiary` = #c2c5cc
  - `color.text.inverse` = #9e9eff
- **Surface/Background:**
  - `color.surface.base` = #000000
  - `color.surface.raised` = #f7f8fa
  - `color.surface.strong` = #f5f7fa

### Spacing Scale
- `space.1` = 5px
- `space.2` = 8px
- `space.3` = 9.25px
- `space.4` = 10px
- `space.5` = 11.52px
- `space.6` = 12px
- `space.7` = 14px
- `space.8` = 15px

### Radius, Shadow, & Motion
- **Border Radius:**
  - `radius.xs` = 16px
  - `radius.sm` = 17px
  - `radius.md` = 22px
  - `radius.lg` = 24px
- **Shadows:**
  - `shadow.1` = rgba(0, 0, 0, 0.05) 0px 5px 8px 0px
  - `shadow.2` = rgba(0, 0, 0, 0.2) 0px 0px 3px 0px
- **Motion Durations:**
  - `motion.duration.instant` = 100ms
  - `motion.duration.fast` = 200ms
  - `motion.duration.normal` = 300ms
  - `motion.duration.slow` = 400ms
  - `motion.duration.slower` = 500ms
  - `motion.duration.step6` = 700ms

---

## 3. Component-Level Rules

The e-commerce platform relies on specific component densities: Links (103), Buttons (41), Lists (16), Inputs (2), Cards (2), Navigation (1).

### General Component Rules
- Components **must** use design tokens for all styling properties.
- Long-content **must** truncate with an ellipsis (`text-overflow: ellipsis`) or wrap logically based on the container width.
- Empty states **must** display a clear, concise message using `color.text.tertiary` and `font.size.lg`.

### Interactive Components (Buttons & Links)
- **Anatomy:** Container, Label, optional Leading/Trailing Icon.
- **Typography:** Labels **must** use `font.family.primary`. Buttons use `font.size.lg`; Links use `font.size.md`.
- **States:**
  - **Default:** Background `color.text.inverse` (for primary buttons), Text `color.surface.base`.
  - **Hover:** **Must** transition opacity or apply `shadow.2` over `motion.duration.fast`.
  - **Focus-Visible:** **Must** render a 2px solid outline outside the component bounding box.
  - **Active/Pressed:** **Must** scale down to 0.98 over `motion.duration.instant`.
  - **Disabled:** **Must** drop opacity to 50% and apply `cursor: not-allowed`.
  - **Loading:** **Must** replace the label/icon with a spinner and disable interactions.
- **Interactions:** 
  - **Pointer:** Standard `cursor: pointer` on hover.
  - **Touch:** **Must** maintain a minimum touch target size of 44x44px.
  - **Keyboard:** **Must** activate on `Enter` and `Space` key presses.

### Layout Components (Cards & Lists)
- **Cards:** **Must** use `color.surface.raised` or `color.surface.strong` background with `radius.md`. Apply `shadow.1` by default and `shadow.2` on hover.
- **Spacing:** Elements within cards **must** use `space.4` to `space.6` for padding.
- **Overflow:** Horizontal scroll lists **must** hide the scrollbar and support touch-swipe interactions.

---

## 4. Accessibility Requirements

All implementations **must** target WCAG 2.2 AA compliance. 

### Acceptance Criteria
- **Keyboard Navigation:** 
  - [ ] All interactive elements **must** be reachable via the `Tab` key in a logical DOM order.
  - [ ] Hidden or off-screen elements **must not** receive keyboard focus.
- **Focus Indicators:**
  - [ ] Every interactive element **must** have a highly visible focus state (`:focus-visible`).
  - [ ] Focus rings **must** have a contrast ratio of at least 3:1 against the surrounding background.
- **Contrast Ratios:**
  - [ ] Normal text **must** have a contrast ratio of at least 4.5:1 against its background.
  - [ ] Large text and UI components **must** have a contrast ratio of at least 3:1.
- **Screen Readers:**
  - [ ] Inputs **must** have associated `<label>` elements or `aria-label` attributes.
  - [ ] Buttons containing only icons **must** include an `aria-label`.

---

## 5. Content and Tone Standards

**Tone:** Concise, confident, implementation-focused.

- **Do:** "Add to Cart"
- **Don't:** "Click here to place this item in your shopping bag"
- **Do:** "Out of Stock"
- **Don't:** "Oops, it looks like we don't have any left right now!"
- **Do:** "Enter your email address"
- **Don't:** "Please provide your email address below so we can contact you"

*Rule:* Action labels **must** begin with a strong, descriptive verb. Error messages **should** clearly state the issue and the required resolution.

---

## 6. Anti-Patterns & Prohibited Implementations

To maintain system consistency, the following practices are strictly prohibited:
- **No Hardcoded Values:** Do not use raw hex colors or px sizes (e.g., `#FF0000`, `margin: 13px`). Use the provided token system.
- **No Hidden Focus Indicators:** Do not set `outline: none` without providing a custom, high-contrast `:focus-visible` style.
- **No Low-Contrast Text:** Do not use light grey text on white backgrounds or dark grey on black backgrounds that fail the 4.5:1 ratio.
- **No Local Exceptions:** Teams **must** prefer system consistency over local visual exceptions. Do not introduce one-off spacing, font sizes, or typography exceptions.
- **No Ambiguous Labels:** Do not use "Click Here" or "Read More". Actions **must** describe the outcome.
- **No Undocumented States:** Do not ship component guidance or implementations without explicit rules for hover, focus, active, disabled, loading, and error states.

---

## 7. QA Checklist

Before shipping any UI component or page layout, ensure the following checks pass:
- [ ] Are all colors, fonts, and spacing derived exclusively from the defined tokens?
- [ ] Do all interactive elements have defined styles for default, hover, focus-visible, active, disabled, loading, and error states?
- [ ] Is the minimum touch target size 44x44px for all actionable items?
- [ ] Can the entire interface be navigated and operated using only a keyboard?
- [ ] Does text truncate or wrap correctly without breaking the layout?
- [ ] Are WCAG 2.2 AA contrast requirements met for all text and structural components?
- [ ] Are screen reader attributes (e.g., `aria-label`, `alt` tags) properly assigned to non-text content?
- [ ] Does the implementation prefer system consistency over localized one-off styles?
