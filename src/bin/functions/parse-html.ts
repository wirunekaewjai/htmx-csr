enum State {
  TAG_OPENED = 1,
  TAG_CLOSED,

  SINGLE_QUOTE,
  DOUBLE_QUOTE,
}

export function parseHtml(input: string) {
  let state = State.TAG_CLOSED;
  let output = "";

  for (const ch of input) {
    if (state === State.TAG_CLOSED) {
      if (ch === "<") {
        output = output.trimEnd();
        output += ch;

        state = State.TAG_OPENED;
      }

      else if (ch.trim() !== "") {
        output += ch;
      }

      else if (output[output.length - 1] !== ">") {
        output += " ";
      }
    }

    else if (state === State.TAG_OPENED) {
      if (ch.trim() === "") {
        output = output.trimEnd();
        output += " ";
      }

      else {
        output += ch;
      }

      if (ch === ">") {
        state = State.TAG_CLOSED;
      }

      else if (ch === "'") {
        state = State.SINGLE_QUOTE;
      }

      else if (ch === '"') {
        state = State.DOUBLE_QUOTE;
      }
    }

    else if (state === State.SINGLE_QUOTE) {
      output += ch;

      if (ch === "'") {
        state = State.TAG_OPENED;
      }
    }

    else if (state === State.DOUBLE_QUOTE) {
      output += ch;

      if (ch === '"') {
        state = State.TAG_OPENED;
      }
    }
  }

  return output;
}
