# Simon Memory Game

## Project Overview

A browser-based re-creation of the classic electronic memory game originally released in 1978 by Ralph H. Baer and Howard J. Morrison. Inspired by the arcade game Touch Me and named after Simon Says, this version challenges players to repeat an increasingly complex sequence of visual signals using four colored buttons.

---

## Game Description

### Starting the Game
- Click the START button.
- Game status indicator turns from RED to GREEN.
- A 3-second delay occurs before the first signal is shown.

### Simon Flashes a Colour
- One button flashes.
- The player must click the same color to continue.

### Sequence Builds
- Simon repeats the previous sequence and adds one more flash.
- The player must repeat the entire sequence correctly.

### Difficulty Increases
- Each round adds a new signal to the sequence.
- The player must keep up to avoid mistakes.

### Speed Progression
- Speed increases automatically after:
  - 5th signal
  - 9th signal
  - 13th signal

### Game Over Conditions
- Incorrect button click or no input within 5 seconds.
- All four buttons flash five times.
- Status indicator resets to RED.
- Press START to try again.

### Score Display
- Current Score: Shown to the right of the START button.
- High Score: Shown to the left, persists across game attempts.

---

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)

---

## How to Play

1. Open `index.html` in a browser.
2. Click START to begin.
3. Follow the flashing buttons by clicking them in the correct order.
4. Try to beat your high score.

---

## Notes

- Fully interactive, real-time input validation.
- No external libraries required.
