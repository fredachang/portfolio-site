export const loaderStyles = {
  container: {
    backgroundColor: "#fafaf9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    backgroundColor: "transparent",
    borderRadius: "10%",
  },
  bar: {
    backgroundColor: "black",
    height: "5px",
  },
  data: {
    color: "black",
    fontSize: "20px",
    fontFamily: "Sohne-Regular",
  },
};

export const generateBobbyPinCoordinates = (
  xLower: number,
  xUpper: number,
  yLower: number,
  yUpper: number,
  zLower: number,
  zUpper: number
) => {
  const bobbyPinCoordinates = [];

  for (let i = 0; i < 20; i++) {
    const randomX = xLower + Math.random() * (xUpper - xLower); // Random X within specified bounds
    const randomY = yLower + Math.random() * (yUpper - yLower); // Random Y within specified bounds
    const randomZ = zLower + Math.random() * (zUpper - zLower); // Random Z within specified bounds

    const randomXRotation =
      Math.PI / 16 + Math.random() * (Math.PI - Math.PI / 16);
    const randomYRotation = [0, Math.PI, Math.PI / 6][
      Math.floor(Math.random() * 3)
    ];
    const randomZRotation =
      Math.PI / 16 + Math.random() * (Math.PI / -Math.PI / 16);

    bobbyPinCoordinates.push({
      position: [randomX, randomY, randomZ],
      rotation: [randomXRotation, randomYRotation, randomZRotation],
    });
  }

  return bobbyPinCoordinates;
};
