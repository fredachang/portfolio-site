type ScrollPosition = number;

function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (value: number) => value.toString(16).padStart(2, "0");

  const redHex = toHex(r);
  const greenHex = toHex(g);
  const blueHex = toHex(b);

  return `#${redHex}${greenHex}${blueHex}`;
}

export const useMapColour = (scrollPosition: ScrollPosition) => {
  const startColor = { r: 255, g: 255, b: 255 };
  const endColor = { r: 225, g: 225, b: 225 };

  const interpolatedRGB = {
    r: Math.round(startColor.r + (endColor.r - startColor.r) * scrollPosition),
    g: Math.round(startColor.g + (endColor.g - startColor.g) * scrollPosition),
    b: Math.round(startColor.b + (endColor.b - startColor.b) * scrollPosition),
  };

  const interpolatedHex = rgbToHex(
    interpolatedRGB.r,
    interpolatedRGB.g,
    interpolatedRGB.b
  );

  function mapToCustomPercentage(scrollPosition: ScrollPosition) {
    // Step 1: Map the number to the range [20, 70]
    const mappedNumber = scrollPosition * (40 - 20) + 20;

    // Step 2: Round the resulting number to one decimal place
    const roundedNumber = Math.round(mappedNumber * 10) / 10;

    // Step 3: Append the "%" symbol to the rounded number
    const percentage = roundedNumber + "%";

    return percentage;
  }

  const mappedPercentage = mapToCustomPercentage(scrollPosition);

  return { interpolatedHex, mappedPercentage };
};
