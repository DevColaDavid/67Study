export interface HeimlerVideo {
  id: string;
  title: string;
}

/**
 * AP US History module number (College Board topic numbering, e.g. "3.11") ->
 * matching Heimler's History YouTube video. Sourced from Heimler's official
 * per-unit YouTube playlists (youtube.com/@heimlershistory).
 *
 * The Contextualizing/Causation/Comparison/Continuity-and-Change synthesis
 * modules (X.1 and the last module of most periods) don't have a dedicated
 * Heimler video and are intentionally left out — no video button renders
 * for those headings.
 */
const HEIMLER_VIDEOS: Record<string, HeimlerVideo> = {
  // Period 1
  '1.2': { id: 'X_3bH6FJsLA', title: 'Native American Societies Before European Contact' },
  '1.3': { id: 'TRrnYm_SwHc', title: 'European Exploration in the Americas' },
  '1.4': { id: 'eLGxEcr-chw', title: 'The Columbian Exchange, Spanish Exploration, and Conquest' },
  '1.5': { id: 'f1h-9W2Snik', title: 'Labor, Slavery, and Caste in Spanish America' },
  '1.6': { id: 's6hfwcgHvRY', title: 'Cultural Interactions Between Europeans, Native Americans, and Africans' },

  // Period 2
  '2.2': { id: 'ROKlajKmJTA', title: 'How Europeans Colonized the Americas' },
  '2.3': { id: 'PWgjVo_u-CY', title: 'The Regions of the British Colonies, Compared' },
  '2.4': { id: 'v3UaU8Y4f3g', title: 'The Trans-Atlantic Trade, Explained' },
  '2.5': { id: 'w7t4N6Hgfu0', title: 'American Indians vs. Europeans, Explained' },
  '2.6': { id: 'RHxF7tJF4gM', title: 'How Slavery Shaped the British Colonies' },
  '2.7': { id: 'xB6K-p2efzE', title: 'Society & Culture in the 13 Colonies' },

  // Period 3
  '3.2': { id: 'qH7KRuW7E3o', title: "The French and Indian War (Seven Years' War), Explained" },
  '3.3': { id: 'itiauvX59IY', title: 'No Taxation Without Representation!' },
  '3.4': { id: 'UPTx2-CZdVM', title: 'How Revolutionary Ideas Caused the American Revolution' },
  '3.5': { id: 'AoaVsVJ3OmU', title: 'The American Revolution, Explained' },
  '3.6': { id: 'p_aiDkvTj6o', title: 'The Uneven Application of Revolutionary Ideas' },
  '3.7': { id: 'Ri18Igyqa5I', title: 'Why the Articles of Confederation Failed' },
  '3.8': { id: '1QOGIjn4X94', title: 'The U.S. Constitution, Explained' },
  '3.9': { id: '1QOGIjn4X94', title: 'The U.S. Constitution, Explained' },
  '3.10': { id: '_fZqGwUtPa0', title: 'First Steps for the Federal Government' },
  '3.11': { id: 'UrJZy0opMEQ', title: 'Developing an American Identity' },
  '3.12': { id: 'k5YOspIGAa8', title: 'Westward Movement in the Early U.S.' },

  // Period 4
  '4.2': { id: 'ZeG7r4BDtuo', title: 'The Rise of Political Parties, Explained' },
  '4.3': { id: '-_XCx5_jeJw', title: 'National vs. Regional Politics, 1800-1848' },
  '4.4': { id: 'C0TkAllQEts', title: 'America on the World Stage' },
  '4.5': { id: 'XwPFSMxoD68', title: 'The Market Revolution in America, Explained' },
  '4.6': { id: '5eRH0jcjgqc', title: "The Market Revolution's Effects on American Culture" },
  '4.7': { id: 'kccNHOTZV-E', title: 'How Voting Rights Expanded from 1800-1848' },
  '4.8': { id: '5ofOfZIZc5I', title: 'How Andrew Jackson Expanded Federal Power' },
  '4.9': { id: 'IE_qo1vjbhs', title: 'The Era of Good Feelings and American Identity' },
  '4.10': { id: '11pQcGPVCtI', title: 'Causes of the Second Great Awakening' },
  '4.11': { id: '5sdzpNsZoZU', title: 'The Age of Reform in the United States' },
  '4.12': { id: 'YmMdnlaS_uI', title: 'African Americans in the Early Republic' },
  '4.13': { id: 'vT9MiKxgtYg', title: 'King Cotton & White Supremacy in the South' },

  // Period 5
  '5.2': { id: 'JVrwXC0AnIk', title: 'Manifest Destiny, Explained' },
  '5.3': { id: 'CM_AHJpd3lU', title: 'The Mexican-American War & Its Problems' },
  '5.4': { id: '98NNF5kW_4c', title: 'Attempts to Solve the Slavery Debate (Compromise of 1850)' },
  '5.5': { id: 'IxTMuoZdzIA', title: 'Debates About Slavery and Immigration' },
  '5.6': { id: '_UeNnsZveKA', title: 'The Failure of Compromise Over Slavery' },
  '5.7': { id: 'l9uS2GKaqjk', title: "Lincoln's Election & the Secession of the South" },
  '5.8': { id: '4Khl1HHM4e8', title: 'The Civil War: Military Strategies' },
  '5.9': { id: 'knT4QzZNMEM', title: "Lincoln's Policies that Won the Civil War" },
  '5.10': { id: 'TW9J2ayaup4', title: 'Reconstruction After the Civil War, Explained' },
  '5.11': { id: '2DRYH6XYNSg', title: 'Why Reconstruction Failed' },

  // Period 6
  '6.2': { id: 'Tru9Su3NUTs', title: 'Westward Expansion: Economic Development' },
  '6.3': { id: 'OAyajS_REpA', title: 'Westward Expansion: Social & Cultural Development' },
  '6.4': { id: 't9FZzMo8R-U', title: 'The "New" South' },
  '6.5': { id: 'TONlwtPOoio', title: 'Technological Innovation in the Gilded Age' },
  '6.6': { id: 'nv4MQgTtm5o', title: 'The Rise of Industrial Capitalism' },
  '6.7': { id: 'Hby2JCS5vKE', title: 'Labor in the Gilded Age' },
  '6.8': { id: 'gugrTFotQi8', title: 'Immigration and Migration in the Gilded Age' },
  '6.9': { id: 'H3FaGRRhszg', title: 'Responses to Immigration in the Gilded Age' },
  '6.10': { id: 'rN6SHokloTQ', title: 'Development of the Middle Class' },
  '6.11': { id: 'tTbUP8bc0jY', title: 'Reform in the Gilded Age' },
  '6.12': { id: 'Rnql9d-201Y', title: 'Controversies Over the Role of Government in the Gilded Age' },
  '6.13': { id: '5Om8Kiouv2M', title: 'Politics in the Gilded Age' },

  // Period 7
  '7.2': { id: '3Wdk6eEEtUI', title: 'Debates About American Imperialism' },
  '7.3': { id: 's1eiVO14vcg', title: 'The Spanish-American War, Explained' },
  '7.4': { id: 'AtyLciC2QOI', title: 'The Progressive Era, Explained' },
  '7.5': { id: 'l_Uqy3dedVo', title: 'U.S. Entry into World War I' },
  '7.6': { id: 'i2RUtMAIoxQ', title: 'The American Home Front During World War I' },
  '7.7': { id: 'UIDJZMMgGqM', title: 'Why the 1920s Were So Prosperous' },
  '7.8': { id: 'T3HIxKKqFI8', title: 'Cultural & Political Controversies in the 1920s' },
  '7.9': { id: 'kpfESSp9DTI', title: 'The Great Depression, Explained' },
  '7.10': { id: 'tb1BF25YBz4', title: 'The New Deal, Explained' },
  '7.11': { id: 'bTD6iItuUUM', title: "Why the U.S. Couldn't Stay Neutral in World War II" },
  '7.12': { id: 'Uiy9FMQqw90', title: 'World War II: Mobilization' },
  '7.13': { id: '9e0e8okojps', title: 'How the Allies Won World War II' },

  // Period 8
  '8.2': { id: '8jehgjpnOVw', title: 'The Cold War, Explained' },
  '8.3': { id: 'O6G7FO0Rw7A', title: 'The Second Red Scare, Explained' },
  '8.4': { id: 'KZA_004n2To', title: 'Postwar Economic Prosperity, Causes & Effects' },
  '8.5': { id: 'c6cw-89wrWk', title: '1950s: The Age of Conformity' },
  '8.6': { id: '0sUpGqKayWY', title: 'Early Steps in the Civil Rights Movement (1940s-50s)' },
  '8.7': { id: '3ylF9XlU_xM', title: 'How the Cold War Complicated Decolonization' },
  '8.8': { id: 'P9PO4Fr6w1A', title: 'The Vietnam War, Explained' },
  '8.9': { id: 'a5anNVajovg', title: "Understanding LBJ's Great Society" },
  '8.10': { id: 'N2_wkYDGtBE', title: 'The Civil Rights Movement in the 1960s' },
  '8.11': { id: 'ln8-5dvSEJg', title: 'The Civil Rights Movement Expands' },
  '8.12': { id: 'bCV4qlmREog', title: 'Youth and the Counterculture of the 1960s' },
  '8.13': { id: 'dMm0dXApxko', title: 'The Environmental Protection Movement in the U.S.' },
  '8.14': { id: 'SacLxKw28JQ', title: 'The Rise of a New Conservatism' },

  // Period 9
  '9.2': { id: '_NRhRK0WsoU', title: "Ronald Reagan's Conservative Era, Explained" },
  '9.3': { id: 'BQjpziko9hA', title: 'How the Cold War Ended' },
  '9.4': { id: 'aJAP_fhNWFo', title: 'How Globalization Transformed the U.S. Economy' },
  '9.5': { id: 'PgZIjy5Oo_Q', title: 'How Migration & Immigration Changed the United States' },
  '9.6': { id: 'rHFEu4Cd1KU', title: 'Challenges Facing the U.S. in the 21st Century' },
};

export default HEIMLER_VIDEOS;
