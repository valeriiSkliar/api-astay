interface ChooseTypeOfTextProps {
  number?: string | number;
  moreThen5: string;
  between2and4: string;
  one: string;
}

/**
 * Determines the appropriate text variant based on a given number.
 * @param {ChooseTypeOfTextProps} props - The properties containing variants of text.
 * @param {string | number} props.number - The number to determine the text variant for.
 * @param {string} props.one - Text variant for when the number is one.
 * @param {string} props.between2and4 - Text variant for when the number is between 2 and 4.
 * @param {string} props.moreThen5 - Text variant for when the number is more than 5.
 * @returns {string} The appropriate text variant based on the number.
 */
export default function chooseTextVariant(props: ChooseTypeOfTextProps) {
  const { number, one, between2and4, moreThen5 } = props;
  if (!number) return '';
  const lastNumber = Number(number.toString().at(-1));

  if (lastNumber === 1) return `${number} ${one}`;
  if (lastNumber >= 2 && lastNumber <= 4) return `${number} ${between2and4}`;

  return `${number} ${moreThen5}`;
}
