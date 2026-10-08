import { Post } from '../../types';
import { defaultAuthor } from './author';

export const post3Tomatoes: Post = {
  id: 'how-to-grow-cherry-tomatoes-in-containers',
  slug: 'how-to-grow-cherry-tomatoes-in-containers',
  title: 'How to Grow Cherry Tomatoes in Containers',
  subtitle: 'Sugary, sun-warmed cherry tomatoes harvested by the bowlful: container selection, trellising, pollination tricks, and pruning mastery.',
  category: 'Vegetables',
  excerpt: 'Growing sweet cherry tomatoes on a balcony is the ultimate summer milestone. Learn the difference between bush and vining types, how to avoid blossom end rot, and how to get hundreds of fruits in limited square footage.',
  author: defaultAuthor,
  date: 'April 4, 2026',
  publishedTimestamp: '2026-04-04',
  readTimeMinutes: 9,
  featured: false,
  imageUrl: '/images/cherry_tomatoes.jpg',
  imageAlt: 'Sweet red cherry tomatoes ripening on a container vine on a balcony',
  coverStyle: {
    gradient: 'from-[#8B2616] via-[#B83E28] to-[#D95D39]',
    darkGradient: 'from-[#3A0F0A] via-[#521910] to-[#752618]',
    accentColor: '#F87171',
    badgeBg: 'bg-red-900/60 text-red-200 border-red-700/50',
    illustrationType: 'cherry-tomatoes'
  },
  tags: ['Vegetables', 'Tomatoes', 'Container Gardening', 'Summer Harvest', 'Fruiting Plants'],
  quickTip: {
    title: 'The Electric Toothbrush Pollination Trick',
    text: 'Balconies on upper floors often lack bees and gentle breezes needed to shake tomato flowers. Tomatoes are self-fertile, meaning pollen inside the flower simply needs vibration to drop into the ovary. Gently touch the back of each yellow floral cluster with an electric toothbrush (or give the main stake a vigorous tap) at midday to skyrocket fruit set!'
  },
  keyTakeaways: [
    'Choose compact determinate (bush) or micro-dwarf varieties for tight balconies; choose vining indeterminate only if you have vertical trellising.',
    'A 5-gallon container is the absolute minimum size for one tomato plant; 7 to 10 gallons guarantees better root resilience and hydration.',
    'Blossom end rot is caused by irregular watering interrupting calcium uptake, not necessarily a lack of calcium in the soil.',
    'Plant seedlings deeply—burying two-thirds of the stem creates an explosion of adventitious roots along the buried trunk.'
  ],
  sections: [
    {
      heading: 'The Holy Grail of the Balcony Garden',
      paragraphs: [
        "There is no grocery store experience that can rival stepping out onto your balcony on a warm July afternoon, plucking a sun-warmed cherry tomato right off the vine, and feeling that delicate skin burst with sweet, aromatic juice. Unlike hefty beefsteak varieties that require massive 20-gallon pots and struggle to ripen before autumn chills arrive, cherry tomatoes are early, prolific, and practically tailor-made for container living.",
        "However, tomatoes are greedy, thirsty, sun-obsessed feeders. In the tight confines of a balcony pot, they will amplify both your triumphs and your oversights. If you understand their fundamental physiology—deep root systems, constant hydration needs, and vertical architecture—you can easily harvest hundreds of sweet cherry tomatoes from just two potted plants."
      ]
    },
    {
      heading: 'Choosing the Right Variety: Bush vs. Vining',
      subheading: 'Why genetics will make or break your balcony setup',
      paragraphs: [
        "The single most consequential decision occurs before you sow a seed or buy a nursery start: understanding the genetic growth habit of your tomato variety. Tomatoes are categorized into two primary types:",
        "1. Determinate (Bush Varieties): These grow to a predetermined compact height (usually 2 to 4 feet), produce a heavy flush of flowers and fruit over a four-to-six-week window, and stop growing. Dwarf varieties like 'Tiny Tim', 'Orange Hat', and 'Patio Choice Yellow' are bred specifically for containers and can thrive in modest 2-to-3-gallon pots on windowsills with zero heavy stakes.",
        "2. Indeterminate (Vining Varieties): These continue growing, flowering, and setting fruit continuously until the autumn frost kills them. Popular favorites like 'Sweet 100', 'Sungold', and 'Black Cherry' belong to this class. Left unchecked, an indeterminate cherry tomato vine can easily reach 8 to 10 feet in length! On a balcony, you must provide a heavy-duty bamboo tripod, a wall trellis, or a spiral wire spiral, and prune aggressively to a single or double main stem."
      ]
    },
    {
      heading: 'Pot Size, Soil Blend, and Deep Planting Technique',
      paragraphs: [
        "Tomatoes resent cramped root zones. For an indeterminate cherry tomato, treat a 5-to-7-gallon container (such as a 12-inch fabric smart pot) as the baseline minimum. Fabric pots are particularly beneficial on hot balconies because breathable fabric prevents root circling and heat buildup through 'air pruning.'",
        "Fill containers with a living, high-organic-matter potting mix: 50% peat moss or coco coir, 25% aerating perlite, and 25% aged compost. Mix in a half-cup of organic balanced tomato fertilizer (such as a 4-6-6 N-P-K blend) plus two tablespoons of bone meal or garden gypsum to provide readily absorbable calcium.",
        "When transplanting your tomato start, utilize the 'deep planting' technique: pinch off the bottom leaves, leaving only the top cluster of foliage, and bury the stem deep into the pot, so only the top two inches stick out. Every tiny hair along the buried stem will transform into an active, moisture-seeking root, giving your plant a massive foundation."
      ],
      steps: [
        {
          title: 'Prep The Container',
          detail: 'Drill 4-6 drainage holes in plastic pots. Layer a light mesh square over the holes to keep soil inside while letting excess water escape.'
        },
        {
          title: 'Install Trellis at Planting Time',
          detail: 'Push tomato cages or bamboo stakes deep into the container before the root system establishes to avoid puncturing tender roots later.'
        },
        {
          title: 'Mulch The Topsoil',
          detail: 'Spread a 1-inch layer of clean straw, pine bark nuggets, or shredded leaves over the soil surface to cut evaporation by 40%.'
        }
      ]
    },
    {
      heading: 'Watering Consistency & Preventing Blossom End Rot',
      subheading: 'Mastering the daily container hydration rhythm',
      paragraphs: [
        "The scourge of container tomato gardeners is blossom end rot: that heartbreaking sunken black leathery patch on the bottom of developing fruits. Many gardeners mistakenly rush out to dump calcium sprays onto the plant. In 90% of container cases, the soil has plenty of calcium—the plant simply cannot transport it.",
        "Calcium is carried exclusively through the plant’s transpiration stream via water. When a pot dries out to the wilting point on a scorching Tuesday and is then drenched with gallons of water on Wednesday, the erratic water flow prevents calcium from reaching the rapidly cell-dividing tips of baby fruits. The remedy is strict consistency: water your container tomatoes deeply until water drains freely from the bottom saucers, check soil moisture every morning, and never let pots swing wildly between desert dryness and swampy mud."
      ],
      bulletPoints: [
        'Water the soil at the base of the plant, never the foliage; wet tomato leaves invite fungal early blight.',
        'During July and August heatwaves, large potted tomatoes may require watering twice a day (once at 7 AM, once at 5 PM).',
        'Prune the lowest 8 inches of foliage off the main stem once the plant reaches three feet high to maximize airflow.'
      ]
    },
    {
      heading: 'Pruning Suckers and Feeding for Maximum Sugar',
      paragraphs: [
        "On indeterminate cherry tomatoes, small leafy shoots called 'suckers' continuously sprout in the 45-degree crotch angle between the main stem and leaf branches. While allowing some suckers produces more branches, letting every single sucker grow will turn your balcony into an impenetrable jungle with small, shaded fruits. Snap out suckers when they are two inches long, training your plant up two dominant vertical leaders.",
        "Once yellow floral clusters open and marble-sized green fruits begin forming, feed your tomatoes every 10 to 14 days with an organic liquid seaweed and fish fertilizer blend or diluted compost tea. Potassium and phosphorus fuel flowering and sugar synthesis, ensuring your homegrown harvest delivers that intense, sun-sweetened flavor you cannot find anywhere else."
      ]
    }
  ],
  conclusion: "With a 7-gallon container, sturdy vertical support, and reliable morning watering, your balcony will quickly become a productive cherry tomato factory. There are few feelings more rewarding than harvesting two dozen sweet, sun-warmed gems right outside your sliding glass door for dinner."
};
