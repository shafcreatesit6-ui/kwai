// SOS Blink On - Arduino Morse code SOS pattern (... --- ...)
// Knippert de ingebouwde LED herhaald in het SOS morse-patroon.
// Wacht 2 seconden tussen de afzonderlijke SOS-berichten.

const int LED_PIN = LED_BUILTIN;

const int DOT_DURATION = 200;               // korte flits (punt)
const int DASH_DURATION = DOT_DURATION * 3;  // lange flits (streep)
const int SYMBOL_GAP = DOT_DURATION;         // pauze tussen symbolen in een letter
const int LETTER_GAP = DOT_DURATION * 3;     // pauze tussen letters
const int MESSAGE_GAP = 2000;                // pauze tussen SOS-berichten

void setup() {
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  sos();
  delay(MESSAGE_GAP);
}

void sos() {
  // S: drie korte flitsen
  dot(); dot(); dot();
  delay(LETTER_GAP);

  // O: drie lange flitsen
  dash(); dash(); dash();
  delay(LETTER_GAP);

  // S: drie korte flitsen
  dot(); dot(); dot();
}

void dot() {
  digitalWrite(LED_PIN, HIGH);
  delay(DOT_DURATION);
  digitalWrite(LED_PIN, LOW);
  delay(SYMBOL_GAP);
}

void dash() {
  digitalWrite(LED_PIN, HIGH);
  delay(DASH_DURATION);
  digitalWrite(LED_PIN, LOW);
  delay(SYMBOL_GAP);
}
