// const copy = {
//   name: "",
//   purpose: "",
//   substitutes: [{ yield: [], ingredient1: [], ingredient2: [], vegan: false }],
// };

const BAKING_POWDER = {
  name: "baking powder",
  purpose: "leavening",
  yield: [1, "tsp"],
  substitutes: [
    {
      id: 1,
      ingredient1: ["baking soda", 0.25, "tsp"],
      ingredient2: ["cream of tartar", 0.25, "tsp"],
      ingredient3: ["cornstarch", 0.25, "tsp"],
      vegan: true,
    },
    {
      id: 2,
      ingredient1: ["buttermilk", 0.5, "cup"],
      ingredient2: ["baking soda", 0.25, "tsp"],
      vegan: false,
    },
    {
      id: 3,
      ingredient1: ["molasses", 0.25, "cup"],
      ingredient2: ["baking soda", 0.25, "tsp"],
      vegan: true,
    },
    {
      id: 4,
      ingredient1: ["sour milk", 0.5, "cup"],
      ingredient2: ["baking soda", 0.25, "tsp"],
      vegan: false,
    },
  ],
};

const BAKING_SODA = {
  name: "baking soda",
  purpose: "leavening",
  yield: [1, "tsp"],
  substitutes: [
    { id: 1, ingredient1: ["baking powder", 4, "tsp"], vegan: true },
    {
      id: 2,
      ingredient1: ["potassium bicarbonate", 1, "tsp"],
      ingredient2: ["salt", 0.333, "tsp"],
      vegan: true,
    },
  ],
};

const EGG = {
  name: "egg",
  purpose: "leavening agent, binder, texture",
  yield: [1, "egg"],
  substitutes: [
    { id: 1, ingredient1: ["applesauce", 0.25, "cup"], vegan: true },
    {
      id: 2,
      ingredient1: ["ground flaxseed", 1, "tbs"],
      ingredient2: ["water", 3, "tbs"],
      vegan: true,
    },
    { id: 3, ingredient1: ["pureed silken tofu", 0.25, "cup"], vegan: true },
    { id: 4, ingredient1: ["mayo", 3, "tbs"], vegan: false },
  ],
};

const BUTTERMILK = {
  name: "buttermilk",
  purpose: "leavening, tenderness, flavor, texture",
  yield: [1, "cup"],
  substitutes: [
    { id: 1, ingredient1: ["plain yogurt", 1, "cup"], vegan: false },
    {
      id: 2,
      ingredient1: ["milk", 1, "cup"],
      ingredient2: ["vinegar (white or cider)", 1, "tbs"],
      vegan: false,
    },
    {
      id: 3,
      ingredient1: ["milk", 1, "cup"],
      ingredient2: ["lemon juice", 1, "tbs"],
      vegan: false,
    },
    { id: 4, ingredient1: ["sour cream", 1, "cup"], vegan: false },
    {
      id: 5,
      ingredient1: ["milk", 1, "cup"],
      ingredient2: ["cream of tartar", 1.5, "tsp"],
      vegan: false,
    },
  ],
};

const WHOLE_MILK = {
  name: "whole milk",
  purpose: "leavening, tenderness, flavor, texture",
  yield: [1, "cup"],
  substitutes: [
    { id: 1, ingredient1: ["evaporated whole milk", 0.5, "cup"], vegan: false },
    {
      id: 2,
      ingredient1: ["condensed milk", 0.5, "cup"],
      ingredient2: ["water", 0.5, "cup"],
      vegan: false,
    },
    {
      id: 3,
      ingredient1: ["skim milk", 1, "cup"],
      ingredient2: ["melted butter", 2, "tbs"],
      vegan: false,
    },
    {
      id: 4,
      ingredient1: ["skim milk", 1, "cup"],
      ingredient2: ["melted margarine", 2, "tbs"],
      vegan: false,
    },
  ],
};

const MILK = {
  name: "milk",
  purpose: "leavening, tenderness, flavor, texture",
  yield: [1, "cup"],
  substitutes: [
    { id: 1, ingredient1: ["unsweetened soymilk", 1, "cup"], vegan: true },
    { id: 2, ingredient1: ["unsweeteed oat milk", 1, "cup"], vegan: true },
    { id: 3, ingredient1: ["unsweetened rice milk", 1, "cup"], vegan: true },
    { id: 4, ingredient1: ["coconut milk", 1, "cup"], vegan: true },
    { id: 5, ingredient1: ["plain yogurt", 1, "cup"], vegan: false },
  ],
};

const BUTTER = {
  name: "butter",
  purpose: "fat, flavor, moisture retention",
  yield: [1, "cup"],
  substitutes: [
    { id: 1, ingredient1: ["vegetable oil", 1, "cup"], vegan: true },
    { id: 2, ingredient1: ["coconut oil", 1, "cup"], vegan: true },
    { id: 3, ingredient1: ["margarine", 1, "cup"], vegan: true },
    { id: 4, ingredient1: ["lard", 1, "cup"], vegan: false },
    { id: 5, ingredient1: ["avocado", 1, "cup"], vegan: true },
  ],
};

const YEAST = {
  name: "yeast",
  purpose: "leavening",
  yield: [1, "tsp"],
  substitutes: [
    {
      id: 1,
      ingredient1: ["baking soda", 0.5, "tsp"],
      ingredient2: ["lemon juice", 0.5, "tsp"],
      vegan: true,
    },
    {
      id: 2,
      ingredient1: ["baking soda", 0.5, "tsp"],
      ingredient2: ["buttermilk", 0.5, "tsp"],
      vegan: false,
    },
    {
      id: 3,
      ingredient1: ["baking soda", 0.5, "tsp"],
      ingredient2: ["cream of tartar", 0.5, "tsp"],
      vegan: true,
    },
    {
      id: 4,
      ingredient1: ["baking soda", 0.5, "tsp"],
      ingredient2: ["milk", 0.25, "tsp"],
      ingredient3: ["vinegar", 0.25, "tsp"],
      vegan: false,
    },
    { id: 5, ingredient1: ["baking powder", 1, "tsp"], vegan: true },
    { id: 6, ingredient1: ["sourdough starter", 0.5, "cup"], vegan: true },
  ],
};

const HEAVY_CREAM = {
  name: "heavy cream",
  purpose: "leavening, tenderness, flavor, texture",
  yield: [1, "cup"],
  substitutes: [
    {
      id: 1,
      ingredient1: ["melted butter", 0.25, "cup"],
      ingredient2: ["milk", 0.75, "cup"],
      vegan: false,
    },
    {
      id: 2,
      ingredient1: ["olive oil", 0.33, "cup"],
      ingredient2: ["soymilk", 0.67, "cup"],
      vegan: true,
    },
    {
      id: 3,
      ingredient1: ["milk", 1, "cup"],
      ingredient2: ["cornstarch", 2, "tbs"],
      vegan: false,
    },
    {
      id: 4,
      ingredient1: ["blended silk tofu", 0.5, "cup"],
      ingredient2: ["milk", 0.5, "cup"],
      vegan: true,
    },
    { id: 5, ingredient1: ["evaporated milk", 1, "cup"], vegan: false },
    { id: 6, ingredient1: ["coconut cream", 1, "cup"], vegan: true },
  ],
};

const SELF_RISING_FLOUR = {
  name: "self-rising flour",
  purpose: "foundation",
  yield: [1, "cup"],
  substitutes: [
    {
      id: 1,
      ingredient1: ["all-purpose flour", 1, "cup"],
      ingredient2: ["baking powder", 1.5, "tsp"],
      ingredient3: ["salt", 0.25, "tsp"],
      vegan: true,
    },
  ],
};

const CAKE_FLOUR = {
  name: "cake flour",
  purpose: "foundation",
  yield: [1, "cup"],
  substitutes: [
    {
      id: 1,
      ingredient1: ["sifted all-purpose flour", 0.75, "cup"],
      ingredient2: ["cornstarch", 2, "tbs"],
      vegan: true,
    },
  ],
};
const SUBSTITUTES = {
  BAKING_POWDER,
  BAKING_SODA,
  EGG,
  BUTTERMILK,
  BUTTER,
  WHOLE_MILK,
  MILK,
  YEAST,
  HEAVY_CREAM,
  SELF_RISING_FLOUR,
  CAKE_FLOUR,
};

export default SUBSTITUTES;
