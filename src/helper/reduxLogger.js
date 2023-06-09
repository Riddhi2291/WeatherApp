export function logChange(type, payload, prevState, currentState) {
  const changes = [];
  let changed = false;
  Object.keys(currentState).map((reducerKey) => {
    const prevData = prevState[ reducerKey ];
    const currData = currentState[ reducerKey ];
    if (prevData !== currData) {
      changed = true;
      changes.push(() => {
        console.group(reducerKey);
        console.groupEnd();
      });
    }
  });
  if (changed) {
    console.group(type);
    changes.forEach(cb => cb());
    console.groupEnd();
  }
}