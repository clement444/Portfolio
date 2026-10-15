const LINE_BREAK_PATTERN = /[\r\n]+/g;
const CONTROL_CHARACTER_PATTERN = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g;

export function sanitizeHeaderValue(value: string): string {
  const withoutLineBreaks = value.replace(LINE_BREAK_PATTERN, ' ');
  const withoutControlCharacters = withoutLineBreaks.replace(
    CONTROL_CHARACTER_PATTERN,
    '',
  );

  return withoutControlCharacters.trim();
}

export function sanitizeTextBlock(value: string): string {
  const normalized = value.replace(/\r\n/g, '\n');
  const withoutControlCharacters = normalized.replace(
    CONTROL_CHARACTER_PATTERN,
    '',
  );

  return withoutControlCharacters.trim();
}
