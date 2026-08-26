export interface ModuleVideo {
  /** Single YouTube video ID. Use this OR listId, not both. */
  id?: string;
  /** YouTube playlist ID — embeds as a full playlist instead of one video. */
  listId?: string;
  title: string;
  /** Attribution name shown under the embed. Defaults to "Heimler's History". */
  source?: string;
}

/**
 * Subject slug -> module number (College Board topic numbering, e.g. "3.11") ->
 * matching supplementary YouTube video for that module. Each subject may pull
 * from a different creator (see each entry's `source`) — AP US History and
 * AP World History use Heimler's History, AP Physics C uses Flipping Physics.
 *
 * Multiple subjects reuse the same "N.M" module numbering scheme, so the map
 * has to be scoped per subject — otherwise a "3.2" in one subject would
 * collide with "3.2" in another.
 *
 * Modules with no dedicated video available are intentionally left out — no
 * video button renders for those headings.
 */
const MODULE_VIDEOS: Record<string, Record<string, ModuleVideo>> = {
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

  // AP Physics C — sourced from Flipping Physics (flippingphysics.com), a calculus-based,
  // AP-Physics-C-specific channel. Every entry below is a single topic-specific video whose
  // ID was extracted directly from that topic's own lecture page on flippingphysics.com
  // (not guessed from a title) — one dedicated video per submodule, no unit-wide reuse.
  'ap-physics-c': {
    // Unit 1 — Kinematics
    '1.1': { id: 'ZYl9-iz7nR8', title: 'Introduction to Tip-to-Tail Vector Addition, Vectors and Scalars', source: 'Flipping Physics' },
    '1.2': { id: 'Kd_DjLpT-GU', title: 'Introduction to Displacement, Velocity and the Derivative', source: 'Flipping Physics' },
    '1.3': { id: 'fhOqbAF1Uis', title: 'Walking Position, Velocity and Acceleration as a Function of Time Graphs', source: 'Flipping Physics' },
    '1.4': { id: '2V_jitoWXX8', title: 'Introduction to Relative Motion and Inertial versus Non-Inertial Reference Frames', source: 'Flipping Physics' },
    '1.5': { id: '1AdVOdOeX0Q', title: 'Introduction to the R Position Vector by way of an Example Problem', source: 'Flipping Physics' },

    // Unit 2 — Force and Translational Dynamics
    '2.1': { id: '07AJFVuJCb8', title: 'Introduction to Center of Mass of a System of Particles', source: 'Flipping Physics' },
    '2.2': { id: '29YPIvj1zjc', title: 'Introduction to Free Body Diagrams or Force Diagrams', source: 'Flipping Physics' },
    '2.3': { id: 'ryBLKmFtSk4', title: "Newton's 3rd Law - AP Physics Version", source: 'Flipping Physics' },
    '2.4': { id: '7kPRD0ow-hM', title: "Introduction to Newton's First Law of Motion", source: 'Flipping Physics' },
    '2.5': { id: 'j1TUpbGzPBQ', title: "Introduction to Newton's Second Law of Motion with Example Problem", source: 'Flipping Physics' },
    '2.6': { id: 'XI51kiWaC9M', title: "Introduction to Newton's Universal Law of Gravitation and a Derivation of Freefall Acceleration", source: 'Flipping Physics' },
    '2.7': { id: 'SVisnEf0M0A', title: 'Introduction to Static and Kinetic Friction and the Coefficient of Friction', source: 'Flipping Physics' },
    '2.8': { id: 'EbVeoJBjHTw', title: "Hooke's Law Introduction - Force of a Spring", source: 'Flipping Physics' },
    '2.9': { id: '7cQ7t0ooX3g', title: 'Introduction to Resistive Forces or the Force of Drag', source: 'Flipping Physics' },
    '2.10': { id: '-BYeuTbFk80', title: 'Introduction to Uniform Circular Motion', source: 'Flipping Physics' },

    // Unit 3 — Work, Energy, and Power
    '3.1': { id: 'TcIMFGLqt44', title: 'Introduction to Kinetic Energy with Example Problem', source: 'Flipping Physics' },
    '3.2': { id: 'svtv13DeyYs', title: 'Defining Work with the Dot Product — Constant Force', source: 'Flipping Physics' },
    '3.3': { id: 'IWJrZgJAwlI', title: 'Introduction to Gravitational and Elastic Potential Energies', source: 'Flipping Physics' },
    '3.4': { id: 'B1lwtBsi5As', title: 'Derivation of Conservation of Mechanical Energy', source: 'Flipping Physics' },
    '3.5': { id: 'lZkKORVCEy8', title: 'Introduction to Mechanical Power with Example Problem', source: 'Flipping Physics' },

    // Unit 4 — Linear Momentum
    '4.1': { id: 'x6Rd3N1w_T8', title: 'Introduction to Momentum and Derivation of Conservation of Momentum', source: 'Flipping Physics' },
    '4.2': { id: 'EV8-eJR70Mg', title: 'Derivation of Impulse Using an Integral and Impulse Approximation', source: 'Flipping Physics' },
    '4.3': { id: 'QAAf8PDModI', title: 'Introduction to Elastic, Inelastic and Perfectly Inelastic Collisions', source: 'Flipping Physics' },

    // Unit 5 — Torque and Rotational Dynamics
    '5.1': { id: 'N0TngZunzXY', title: 'Uniformly Angularly Accelerated Motion Introduction', source: 'Flipping Physics' },
    '5.2': { id: 'MugdS-BkGZg', title: 'Comparing Linear and Rotational Variables', source: 'Flipping Physics' },
    '5.3': { id: 'Tu6e9_SrzBA', title: 'Torque Introduction', source: 'Flipping Physics' },
    '5.4': { id: 'C2qGOfCOUko', title: 'Moment of Inertia Introduction and Rotational Kinetic Energy Derivation', source: 'Flipping Physics' },
    '5.5': { id: 'zwZ6OLv4ksA', title: 'Rotational Equilibrium Introduction (and Static Equilibrium Too)', source: 'Flipping Physics' },
    '5.6': { id: 'Mt5p4S3g5S4', title: "Rotational Form of Newton's Second Law - Introduction", source: 'Flipping Physics' },

    // Unit 6 — Energy and Momentum of Rotating Systems
    '6.1': { id: 'LBxOMQjqQ8g', title: 'Equations for Kinetic Energy and Angular Momentum of a Point Particle Moving in a Circle', source: 'Flipping Physics' },
    // 6.2 (Torque and Work) has no dedicated Flipping Physics video — intentionally left out.
    '6.3': { id: 'MFkqOBq94Gk', title: 'Angular Momentum of Particles Introduction', source: 'Flipping Physics' },
    '6.4': { id: 'oGzQflqf1VA', title: 'Conservation of Angular Momentum Introduction and Demonstrations', source: 'Flipping Physics' },
    '6.5': { id: 'r_yqJ2HXoC0', title: 'Rolling Without Slipping Introduction and Demonstrations', source: 'Flipping Physics' },
    '6.6': { id: 'ovcREs63FiA', title: "Kepler's First Law of Planetary Motion", source: 'Flipping Physics' },

    // Unit 7 — Oscillations
    '7.1': { id: 'QVkfRELZpK0', title: 'Simple Harmonic Motion Introduction via a Horizontal Mass-Spring System', source: 'Flipping Physics' },
    '7.2': { id: 'YYroaY0Gd9Q', title: 'Frequency vs. Period in Simple Harmonic Motion', source: 'Flipping Physics' },
    '7.3': { id: '6TQXZygxsTc', title: 'Simple Harmonic Motion - Graphs of Position, Velocity, and Acceleration', source: 'Flipping Physics' },
    '7.4': { id: 'vhq4euTgu8E', title: 'Total Mechanical Energy in Simple Harmonic Motion', source: 'Flipping Physics' },
    '7.5': { id: 'K3HC1S84jP8', title: 'Simple Pendulum - Simple Harmonic Motion Derivation using Calculus', source: 'Flipping Physics' },

    // Unit 8 — Electric Charges, Fields, and Gauss's Law
    '8.1': { id: '4ubqby1Id4g', title: "Introduction to Coulomb's Law or the Electric Force", source: 'Flipping Physics' },
    '8.2': { id: 'QPQCsU6U5WI', title: 'Conservation of Charge Example Problems', source: 'Flipping Physics' },
    '8.3': { id: 'nQXFueA1sMY', title: 'Electric Fields', source: 'Flipping Physics' },
    '8.4': { id: 'Zpns_8W5fXc', title: 'Continuous Charge Distributions', source: 'Flipping Physics' },
    '8.5': { id: 'qGZ4bntlbTI', title: 'Electric Flux', source: 'Flipping Physics' },
    '8.6': { id: 'kHxUkEG71bc', title: "Gauss's Law - Point Charge Electric Flux", source: 'Flipping Physics' },

    // Unit 9 — Electric Potential
    '9.1': { id: 'yy1jXkzKqkM', title: 'Electric Potential Energy Explained', source: 'Flipping Physics' },
    '9.2': { id: 'hMoMw3NzCr8', title: 'Electric Potential', source: 'Flipping Physics' },
    '9.3': { id: 'VM487F-CmYk', title: 'Change in Electric Potential Energy in a Uniform Electric Field', source: 'Flipping Physics' },

    // Unit 10 — Conductors and Capacitors
    '10.1': { id: 'SI9GBz4Il-8', title: 'Three Properties of Conductors in Electrostatic Equilibrium', source: 'Flipping Physics' },
    '10.2': { id: '1QnUss8qsAM', title: 'Capacitance', source: 'Flipping Physics' },
    '10.3': { id: '89S9FYWwJgE', title: 'Capacitance of a Parallel Plate Capacitor with a Dielectric', source: 'Flipping Physics' },

    // Unit 11 — Electric Circuits
    '11.1': { id: 'HKPMK4nuCLA', title: "Resistance and Ohm's Law", source: 'Flipping Physics' },
    '11.2': { id: 'coDW6I2L20Y', title: 'Electric Circuit Basics', source: 'Flipping Physics' },
    '11.3': { id: 'uo4HYgRaMHA', title: 'RC Circuit Basics', source: 'Flipping Physics' },

    // Unit 12 — Magnetic Fields and Electromagnetism
    '12.1': { id: 'URPKNQ69XdA', title: 'Magnetic Fields and Magnetic Forces on Moving Charges', source: 'Flipping Physics' },
    // 12.2 (Magnetic Fields and Dipoles) has no dedicated Flipping Physics video — intentionally left out.
    '12.3': { id: 'zmZhA8YU1So', title: 'Biot-Savart Law and Magnetic Field around a Current Carrying Wire', source: 'Flipping Physics' },
    '12.4': { id: 'gVr_CFlIY2A', title: "Ampère's Law", source: 'Flipping Physics' },

    // Unit 13 — Electromagnetic Induction
    '13.1': { id: 'uMo83qlDv2Y', title: 'Magnetic Flux', source: 'Flipping Physics' },
    '13.2': { id: 'QV0o8Kyixy0', title: 'Electromagnetic Induction', source: 'Flipping Physics' },
    '13.3': { id: 'CMQUttrejdI', title: 'Inductance', source: 'Flipping Physics' },
  },
};

export default MODULE_VIDEOS;
