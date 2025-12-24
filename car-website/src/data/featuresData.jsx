const carImages = import.meta.glob("../assets/porscheFeatures/*.svg", {
  eager: true,
});

const featuresImages = Object.values(carImages).map((img) => img.default);

const brand = ["Tesla", "Tesla", "Audi", "Porsche", "Porsche"];
const model = ["Model X", "Model 3", "E-tron", "Boxster 987", "Panamera"];
const prices = [98900, 45900, 175900, 126900, 126900];

export const featuresData = brand.map((currentBrandName, index) => ({
  name: currentBrandName,
  model: model[index],
  prices: prices[index],
  image: featuresImages[index],
}));
