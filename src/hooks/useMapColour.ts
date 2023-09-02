type ScrollPosition = number;

interface Colour {
  r: number;
  g: number;
  b: number;
}

function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (value: number) => value.toString(16).padStart(2, "0");

  const redHex = toHex(r);
  const greenHex = toHex(g);
  const blueHex = toHex(b);

  return `#${redHex}${greenHex}${blueHex}`;
}

export const interpolatedRGB = (
  startColour: Colour,
  endColour: Colour,
  scrollPosition: number
) => ({
  r: Math.round(startColour.r + (endColour.r - startColour.r) * scrollPosition),
  g: Math.round(startColour.g + (endColour.g - startColour.g) * scrollPosition),
  b: Math.round(startColour.b + (endColour.b - startColour.b) * scrollPosition),
});

export const useMapColour = (scrollPosition: ScrollPosition) => {
  const startBgColor = { r: 255, g: 255, b: 255 };
  const endBgColor = { r: 235, g: 235, b: 235 };

  const interpolatedBgRGB = interpolatedRGB(
    startBgColor,
    endBgColor,
    scrollPosition
  );

  const interpolatedBgHex = rgbToHex(
    interpolatedBgRGB.r,
    interpolatedBgRGB.g,
    interpolatedBgRGB.b
  );

  const startHighlightColor = { r: 255, g: 255, b: 255 };
  const endHighlightColor = { r: 223, g: 252, b: 223 };

  const interpolatedHighlightRGB = interpolatedRGB(
    startHighlightColor,
    endHighlightColor,
    scrollPosition
  );

  const interpolatedHighlightHex = rgbToHex(
    interpolatedHighlightRGB.r,
    interpolatedHighlightRGB.g,
    interpolatedHighlightRGB.b
  );

  function mapToCustomPercentage(scrollPosition: ScrollPosition) {
    // Step 1: Map the number to the range [20, 70]
    const mappedNumber = scrollPosition * (30 - 20) + 20;

    // Step 2: Round the resulting number to one decimal place
    const roundedNumber = Math.round(mappedNumber * 10) / 10;

    // Step 3: Append the "%" symbol to the rounded number
    const percentage = roundedNumber + "%";

    return percentage;
  }

  const mappedPercentage = mapToCustomPercentage(scrollPosition);

  return { interpolatedBgHex, interpolatedHighlightHex, mappedPercentage };
};
