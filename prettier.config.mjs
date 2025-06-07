/** @type {import("prettier").Config} */
const config = {
    printWidth: 100,              // ширина строки
    singleQuote: true,            // использовать одинарные кавычки
    trailingComma: 'all',         // запятые после последнего элемента
    semi: true,                   // точка с запятой в конце строки
    tabWidth: 2,                  // 2 пробела вместо табов
    useTabs: false,               // использовать пробелы, а не табы
    endOfLine: 'lf',              // символ конца строки: LF
    arrowParens: 'avoid',         // скобки у стрелочных функций — только при необходимости
    bracketSameLine: false,       // переносить `>` в JSX на новую строку
    plugins: ['prettier-plugin-organize-imports'],
  };

  export default config;