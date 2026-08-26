export interface HeimlerVideo {
  id: string;
  title: string;
}

/**
 * Subject slug -> module number (College Board topic numbering, e.g. "3.11") ->
 * matching Heimler's History YouTube video. Sourced from Heimler's official
 * per-unit YouTube playlists (youtube.com/@heimlershistory).
 *
 * Both AP US History and AP World History reuse the same "N.M" module
 * numbering scheme, so the map has to be scoped per subject — otherwise a
 * "3.2" in one subject would collide with "3.2" in the other.
 *
 * The Contextualizing/Causation/Comparison/Continuity-and-Change synthesis
 * modules (X.1 and the last module of most units) don't have a dedicated
 * Heimler video and are intentionally left out — no video button renders
 * for those headings.
 */
const HEIMLER_VIDEOS: Record<string, Record<string, HeimlerVideo>> = {
  'ap-us-history': {
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
  },

  'ap-world-history': {
    // Unit 1
    '1.1': { id: 'HfIWZhXt7fY', title: 'Developments in East Asia' },
    '1.2': { id: 'O9P1TaBnhg8', title: 'Developments in Dar al-Islam' },
    '1.3': { id: 'AMGPVDvo2VE', title: 'State Building in South Asia & Southeast Asia' },
    '1.4': { id: 'ellUmfocjj8', title: 'State-Building in the Americas' },
    '1.5': { id: 'p76pWQi9Hd8', title: 'State-Building in Africa' },
    '1.6': { id: 'ZaGC4rlc7nk', title: 'Developments in Europe' },

    // Unit 2
    '2.1': { id: 'daiQ6aChKfk', title: 'The Silk Roads' },
    '2.2': { id: 'KHJLZBXUyzo', title: 'The Mongol Empire, Explained' },
    '2.3': { id: 'r-D9F2TiirY', title: 'The Indian Ocean Trade Network, Explained' },
    '2.4': { id: 'fUYUx-0ISW4', title: 'The Trans-Saharan Trade Network, Explained' },
    '2.5': { id: 'buccc2fFw4U', title: 'Cultural Effects of Connectivity' },
    '2.6': { id: 'PKQzXPAAFBA', title: 'Environmental Effects of Connectivity' },

    // Unit 3
    '3.1': { id: 'jqMQMUKEc3c', title: 'Land-Based Empires Expand' },
    '3.2': { id: '_0X43Prm8Sc', title: 'Land-Based Empires: Administration' },
    '3.3': { id: 'pPXreKX0JBM', title: 'Empires: Belief Systems' },

    // Unit 4
    '4.1': { id: 'TPaLulRrKuM', title: 'Technology in Sea-Based Empires' },
    '4.2': { id: 'h3m5yT8DaZ8', title: 'Causes of European Exploration' },
    '4.3': { id: '6zo9XQD86uU', title: 'The Columbian Exchange, Explained' },
    '4.4': { id: 'uyN-jFvI9vo', title: 'Sea-Based Empires Established' },
    '4.5': { id: 'Lqt2JvP6-1Q', title: 'The Economics of Empire Building' },
    '4.6': { id: 'bSL0zwBsjQs', title: 'Challenges to State Power, 1450-1750' },
    '4.7': { id: 'RQIEAt2_UoE', title: 'Changing Social Hierarchies, 1450-1750' },

    // Unit 5
    '5.1': { id: 'teTYdvjpSoM', title: 'The Enlightenment, Explained' },
    '5.2': { id: 'AD5YKzFgqEc', title: 'Nationalism and Revolutions, 1750-1900' },
    '5.3': { id: 'qMQvfN0psQA', title: 'How the Industrial Revolution Began' },
    '5.4': { id: 'r3-y8uGI38k', title: 'The Spread of Industrialization from 1750-1900' },
    '5.5': { id: '1s7b-guOZ_8', title: 'Technology of the Industrial Age' },
    '5.6': { id: 's-Ai6zTkwag', title: 'Government-Sponsored Industrialization' },
    '5.7': { id: 'U42LG2ex3Bc', title: 'The Economics of the Industrial Revolution' },
    '5.8': { id: '9-uuyd2MFF0', title: 'Reactions to the Industrial Revolution' },
    '5.9': { id: 'm2-RxDMZjHQ', title: 'Society and the Industrial Age — Changes!' },

    // Unit 6
    '6.1': { id: 'DrjQ1dir1SI', title: 'Ideas that Justified Imperialism' },
    '6.2': { id: 'r06Dub-CmD8', title: 'How Imperial States Expanded, 1750-1900' },
    '6.3': { id: 'aokdUTbEWnQ', title: 'How Indigenous People Resisted Imperial Expansion' },
    '6.4': { id: 'VdZxy_3JH0c', title: 'Global Economic Changes from 1750-1900' },
    '6.5': { id: 'vQkfpKHOQiw', title: 'Economic Imperialism, Explained' },
    '6.6': { id: 'h8RGCtPvV7g', title: 'Causes of Migration from 1750-1900' },
    '6.7': { id: 'lB1SOKmlIcA', title: 'The Effects of Migration, Explained' },

    // Unit 7
    '7.1': { id: 'wl7KVg8TOs0', title: 'The Shifting of State Power After 1900' },
    '7.2': { id: 'cLR-bgx-Egs', title: 'The Causes of World War I, Explained' },
    '7.3': { id: 'IkdzwNZBa2E', title: 'How World War I Was Fought' },
    '7.4': { id: '7AlF1WByj1Y', title: 'The Global Economy Between the World Wars' },
    '7.5': { id: 'vh-0VnSFb-0', title: 'Unresolved Tensions After World War I' },
    '7.6': { id: '3WrJcvlc5AM', title: 'The Causes of World War II, Explained' },
    '7.7': { id: 'YFs7R6kzVtE', title: 'How World War II Was Fought' },
    '7.8': { id: '-zGOqCqqX-w', title: 'Mass Atrocities in the 20th Century' },

    // Unit 8
    '8.1': { id: '4UjI9r_l6tc', title: 'Context for the Cold War & Decolonization' },
    '8.2': { id: 'YtQVkJ973NU', title: 'The Cold War, Explained' },
    '8.3': { id: 'jKzb9vQeu2Y', title: 'The Effects of the Cold War, Explained' },
    '8.4': { id: '0lXT0v0uv6c', title: 'The Spread of Communism After 1900' },
    '8.5': { id: 'cj5437viW4k', title: 'Decolonization, Explained' },
    '8.6': { id: 'Yu-tvtvXd8w', title: 'State Building After Decolonization' },
    '8.7': { id: 'p_zjyvCB3Ek', title: 'Resistance to Power Structures After 1900' },
    '8.8': { id: 'eg9QOCxiiEY', title: 'The End of the Cold War' },

    // Unit 9
    '9.1': { id: 'EePpwgs6syY', title: 'How Technology Made Globalization Possible' },
    '9.2': { id: 'UNn7LQse5LU', title: 'The Spread of Disease in a Globalized World' },
    '9.3': { id: 'KgTJeu3Tx50', title: 'Economics in a Global Age' },
    '9.4': { id: 'DQ6eIl7bez0', title: 'Globalization & Calls for Reform' },
    '9.5': { id: 'f7T55UixV-o', title: 'The Effect of Globalization on Culture' },
    '9.6': { id: '_Eg-G6T_anI', title: 'Resistance to Globalization After 1900' },
    '9.7': { id: 'm6cQW5WpceY', title: 'Institutions That Developed in a Globalized World' },
  },
};

export default HEIMLER_VIDEOS;
