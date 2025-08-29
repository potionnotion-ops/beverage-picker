// src/database.js

// --- Core pairing database (expandable) ---
export const pairings = {
  // Red meat
  steak: {
    wine: ["Cabernet Sauvignon", "Malbec", "Syrah/Shiraz", "Zinfandel", "Bordeaux Blend", "Tempranillo"],
    beer: ["Stout", "Porter", "Brown Ale", "Red Ale", "Doppelbock", "Amber Ale"],
    cocktail: ["Old Fashioned", "Manhattan", "Negroni", "Boulevardier", "Whiskey Sour", "Sazerac"],
  },
  lamb: {
    wine: ["Syrah", "Grenache", "Bordeaux Blend", "Rioja Reserva", "Malbec", "Tempranillo"],
    beer: ["Amber Ale", "Brown Ale", "Dubbel", "Porter", "Scotch Ale", "Red Ale"],
    cocktail: ["Manhattan", "Boulevardier", "Old Fashioned", "Rob Roy", "Vieux Carré", "Negroni"],
  },

  // Poultry
  chicken: {
    wine: ["Chardonnay", "Sauvignon Blanc", "Pinot Noir", "Pinot Grigio", "Viognier", "Chenin Blanc"],
    beer: ["Pilsner", "Wheat Beer", "Blonde Ale", "Kölsch", "Helles", "Saison"],
    cocktail: ["Margarita", "Mojito", "Gin & Tonic", "Aperol Spritz", "Tom Collins", "Paloma"],
  },
  duck: {
    wine: ["Pinot Noir", "Merlot", "Grenache", "Zinfandel", "Gamay", "Barbera"],
    beer: ["Dubbel", "Amber Ale", "Saison", "Bock", "Vienna Lager", "Belgian Pale"],
    cocktail: ["Negroni", "Sidecar", "Rob Roy", "Boulevardier", "Manhattan", "Old Fashioned"],
  },
  turkey: {
    wine: ["Pinot Noir", "Chardonnay", "Grenache", "Beaujolais", "Riesling (off-dry)", "Gewürztraminer"],
    beer: ["Amber Lager", "Brown Ale", "Wheat Beer", "Pilsner", "Pumpkin Ale", "Vienna Lager"],
    cocktail: ["Whiskey Sour", "Mimosa", "French 75", "Cranberry Mule", "Aperol Spritz", "Tom Collins"],
  },

  // Fish & shellfish
  salmon: {
    wine: ["Pinot Noir", "Chardonnay", "Rosé", "Champagne", "Chablis", "Sauvignon Blanc"],
    beer: ["IPA", "Amber Ale", "Pale Ale", "Wheat Beer", "Pilsner", "Kölsch"],
    cocktail: ["Gin & Tonic", "French 75", "Whiskey Sour", "Martini", "Paloma", "Tom Collins"],
  },
  fish: {
    wine: ["Sauvignon Blanc", "Albariño", "Vermentino", "Chablis", "Muscadet", "Champagne"],
    beer: ["Pilsner", "Kölsch", "Helles", "Wheat Beer", "Pale Ale", "Saison"],
    cocktail: ["Margarita", "Paloma", "Daiquiri", "Martini", "Gimlet", "French 75"],
  },
  shellfish: {
    wine: ["Chablis", "Champagne", "Sauvignon Blanc", "Muscadet", "Albariño", "Assyrtiko"],
    beer: ["Pilsner", "Wheat Beer", "Saison", "Gose", "Helles", "Blonde Ale"],
    cocktail: ["Martini", "Margarita", "Bellini", "Aperol Spritz", "French 75", "Gimlet"],
  },
  scallops: {
    wine: ["Chablis", "Champagne", "Sauvignon Blanc", "Pinot Blanc", "Verdejo", "Pinot Grigio"],
    beer: ["Kölsch", "Wheat Beer", "Pilsner", "Blonde Ale", "Gose", "Saison"],
    cocktail: ["Martini", "Margarita", "Bellini", "French 75", "Gimlet", "Lemon Drop"],
  },

  // Pork & ham
  ham: {
    wine: ["Riesling (off-dry)", "Zinfandel", "Beaujolais", "Chenin Blanc", "Rosé", "Pinot Gris"],
    beer: ["Amber Ale", "Bock", "Lager", "Vienna Lager", "Brown Ale", "Pilsner"],
    cocktail: ["Whiskey Sour", "Mai Tai", "Paloma", "Aperol Spritz", "Moscow Mule", "Tom Collins"],
  },
  pork: {
    wine: ["Pinot Noir", "Zinfandel", "Grenache", "Chardonnay", "Riesling (off-dry)", "Rosé"],
    beer: ["Amber Lager", "Pilsner", "Saison", "Wheat Beer", "Vienna Lager", "Bock"],
    cocktail: ["Daiquiri", "Margarita", "Whiskey Sour", "Aperol Spritz", "Paloma", "Moscow Mule"],
  },

  // Italian / pasta / pizza
  italian: {
    wine: ["Chianti", "Barolo", "Pinot Grigio", "Montepulciano d’Abruzzo", "Dolcetto", "Verdicchio"],
    beer: ["Pale Lager", "Amber Ale", "Pilsner", "Italian Pils", "Kellerbier", "Wheat Beer"],
    cocktail: ["Negroni", "Aperol Spritz", "Bellini", "Americano", "Hugo Spritz", "Negroni Sbagliato"],
  },
  pasta: {
    wine: ["Chianti", "Barbera", "Pinot Grigio", "Sangiovese", "Verdicchio", "Soave"],
    beer: ["Amber Ale", "Brown Ale", "Wheat Beer", "Pilsner", "Vienna Lager", "Saison"],
    cocktail: ["Aperol Spritz", "Negroni", "Bellini", "Americano", "Hugo Spritz", "Negroni Sbagliato"],
  },
  pizza: {
    wine: ["Chianti", "Barbera", "Zinfandel", "Sangiovese", "Montepulciano", "Lambrusco (dry)"],
    beer: ["Pale Ale", "IPA", "Pilsner", "Amber Ale", "Helles", "Italian Pils"],
    cocktail: ["Negroni", "Aperol Spritz", "Americano", "Margarita", "Paloma", "Gin & Tonic"],
  },

  // Spicy / Asian
  thai: {
    wine: ["Riesling (off-dry)", "Gewürztraminer", "Rosé", "Grüner Veltliner", "Pinot Gris", "Chenin Blanc"],
    beer: ["IPA", "Wheat Beer", "Pale Ale", "Saison", "Pilsner", "Hazy IPA"],
    cocktail: ["Mojito", "Mai Tai", "Caipirinha", "Margarita", "Gin Rickey", "Paloma"],
  },
  indian: {
    wine: ["Gewürztraminer", "Riesling (off-dry)", "Syrah", "Pinot Gris", "Rosé", "Chenin Blanc"],
    beer: ["IPA", "Wheat Beer", "Pale Lager", "Saison", "Amber Lager", "Gose"],
    cocktail: ["Mango Lassi (spiked)", "Gin & Tonic", "Dark 'n' Stormy", "Margarita", "Paloma", "Mojito"],
  },
  korean: {
    wine: ["Zinfandel", "Syrah", "Riesling (off-dry)", "Rosé", "Pinot Noir", "Chenin Blanc"],
    beer: ["Pale Lager", "Pilsner", "Hazy IPA", "Amber Lager", "Saison", "Wheat Beer"],
    cocktail: ["Soju Highball", "Whiskey Highball", "Margarita", "Moscow Mule", "Paloma", "Gin & Tonic"],
  },
  bbq: {
    wine: ["Zinfandel", "Malbec", "Shiraz", "Cabernet Sauvignon", "Petit Sirah", "Grenache"],
    beer: ["Amber Ale", "Porter", "IPA", "Brown Ale", "Smoked Beer (Rauchbier)", "Red Ale"],
    cocktail: ["Old Fashioned", "Whiskey Sour", "Margarita", "Paloma", "Mint Julep", "Dark 'n' Stormy"],
  },

  // Vegetarian / salad
  vegetarian: {
    wine: ["Sauvignon Blanc", "Rosé", "Pinot Grigio", "Grüner Veltliner", "Chenin Blanc", "Gamay"],
    beer: ["Wheat Beer", "Pilsner", "Kölsch", "Saison", "Helles", "Bière de Garde"],
    cocktail: ["Mojito", "Gin & Tonic", "Margarita", "Aperol Spritz", "Tom Collins", "Paloma"],
  },
  salad: {
    wine: ["Sauvignon Blanc", "Rosé", "Pinot Grigio", "Vermentino", "Vinho Verde", "Albariño"],
    beer: ["Wheat Beer", "Pilsner", "Kölsch", "Helles", "Gose", "Saison"],
    cocktail: ["Mojito", "Gin & Tonic", "Margarita", "Aperol Spritz", "Hugo Spritz", "Gimlet"],
  },

  // Dessert
  dessert: {
    wine: ["Port", "Tawny Port", "Ruby Port", "Moscato d’Asti", "Sauternes", "Late Harvest Zinfandel"],
    beer: ["Chocolate Stout", "Imperial Stout", "Barleywine", "Milk Stout", "Fruit Lambic", "Porter"],
    cocktail: ["Espresso Martini", "Baileys & Coffee", "White Russian", "Brandy Alexander", "Irish Coffee", "Mudslide"],
  },

  // Game / special
  venison: {
    wine: ["Syrah", "Cabernet Sauvignon", "Zinfandel", "Bordeaux Blend", "Malbec", "Tempranillo"],
    beer: ["Porter", "Brown Ale", "Doppelbock", "Scotch Ale", "Red Ale", "Dubbel"],
    cocktail: ["Manhattan", "Old Fashioned", "Boulevardier", "Vieux Carré", "Sazerac", "Rob Roy"],
  },
  veal: {
    wine: ["Chardonnay", "Pinot Noir", "Chianti", "Barbera", "Grenache", "Sangiovese"],
    beer: ["Pilsner", "Wheat Beer", "Amber Ale", "Vienna Lager", "Saison", "Kölsch"],
    cocktail: ["Martini", "Negroni", "Margarita", "French 75", "Aperol Spritz", "Tom Collins"],
  },
};

// --- Synonyms for whole phrases (no spaces) ---
const synonyms = {
  beef: "steak",
  ribeye: "steak",
  ribs: "bbq",
  brisket: "bbq",
  burger: "steak",

  porkchops: "pork",
  bacon: "pork",
  prosciutto: "ham",
  jamon: "ham",

  tuna: "fish",
  cod: "fish",
  tilapia: "fish",
  grouper: "fish",
  seabass: "fish",
  flounder: "fish",
  halibut: "fish",

  shrimp: "shellfish",
  crab: "shellfish",
  lobster: "shellfish",
  mussels: "shellfish",
  oysters: "shellfish",

  pesto: "italian",
  alfredo: "pasta",

  ramen: "soup",
  pho: "soup",
  soup: "salad",

  veggie: "vegetarian",
  vegetarian: "vegetarian",

  koreanbbq: "bbq",
  korean: "korean",

  chocolatecake: "dessert",
  brownie: "dessert",
  applepie: "dessert",
  cheesecake: "dessert",
  icecream: "dessert",

  deer: "venison",
};

// --- Token-to-category hints ---
const tokenCategory = {
  steak: "steak",
  beef: "steak",
  lamb: "lamb",
  pork: "pork",
  ham: "ham",
  burger: "steak",

  chicken: "chicken",
  turkey: "turkey",
  duck: "duck",

  fish: "fish",
  salmon: "salmon",
  tuna: "fish",
  cod: "fish",
  tilapia: "fish",
  grouper: "fish",
  bass: "fish",
  flounder: "fish",
  halibut: "fish",

  shellfish: "shellfish",
  shrimp: "shellfish",
  prawn: "shellfish",
  crab: "shellfish",
  lobster: "shellfish",
  mussels: "shellfish",
  oysters: "shellfish",
  scallops: "scallops",

  thai: "thai",
  curry: "indian",
  indian: "indian",
  korean: "korean",
  bbq: "bbq",
  barbecue: "bbq",
  smoked: "bbq",

  italian: "italian",
  pizza: "pizza",
  pasta: "pasta",
  spaghetti: "pasta",
  lasagna: "pasta",
  risotto: "pasta",
  gnocchi: "pasta",

  salad: "salad",
  vegetarian: "vegetarian",
  veggie: "vegetarian",
  tofu: "vegetarian",
  eggplant: "vegetarian",
  falafel: "vegetarian",
  hummus: "vegetarian",

  dessert: "dessert",
  cake: "dessert",
  brownie: "dessert",
  pie: "dessert",
  cheesecake: "dessert",
  ice: "dessert",
  cream: "dessert",

  venison: "venison",
  veal: "veal",
};

// --- Helper: normalize user input ---
const normalize = (s) => s.toLowerCase().trim();

// --- Public: resolve a user query to a key in `pairings` ---
export function resolveKey(query) {
  if (!query) return null;

  const q = normalize(query);
  const collapsed = q.replace(/\s+/g, "");

  // 1) direct hits
  if (pairings[q]) return q;
  if (pairings[collapsed]) return collapsed;

  // 2) whole-phrase synonyms
  if (synonyms[collapsed]) return synonyms[collapsed];

  // 3) token voting
  const tokens = q.split(/[^a-z]+/).filter(Boolean);
  if (tokens.length) {
    const votes = {};
    for (const t of tokens) {
      // direct token
      if (pairings[t]) return t;
      // synonym token
      if (synonyms[t]) return synonyms[t];
      // hint token
      if (tokenCategory[t]) {
        const key = tokenCategory[t];
        votes[key] = (votes[key] || 0) + 1;
      }
    }
    // pick most-voted hint if any
    let bestKey = null;
    let bestScore = 0;
    for (const [k, score] of Object.entries(votes)) {
      if (score > bestScore) {
        bestKey = k;
        bestScore = score;
      }
    }
    if (bestKey) return bestKey;
  }

  // no match
  return null;
}
