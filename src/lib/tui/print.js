export const printLogo = () => {
  console.log(
      `%cRice cooker`,
      'color: yellow; font-weight: bold',
  );
};

export const printList = (items = []) => {
  if (items.length) {
    const decimal = items
        .map((str, index) => `${index + 1} - ${str.toString()}`)
        .join('\n');
    console.log(decimal);
    printNewline();
  }
};

export const printNewline = (times = 1) => console.log('\n'.repeat(times));

export const printObject = (header, object) => {
  printHeader(header);
  Object.keys(object).forEach((key) => {
    console.log(key, object[key]);
  });
};

export const printHeader = (header) => {
  console.log(header);
  console.log('------------------');
};
