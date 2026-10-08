import { Post } from '../../types';
import { defaultAuthor } from './author';

export const post5Pots: Post = {
  id: 'choosing-the-right-pots',
  slug: 'choosing-the-right-pots',
  title: 'Choosing the Right Pots: Size, Material, and Drainage Explained',
  subtitle: 'Terracotta, fabric bags, resin, or glazed ceramic? The physics of container materials and how pot volume dictates plant health.',
  category: 'Basics',
  excerpt: 'The container is your plant’s entire universe. Learn which materials insulate roots against balcony weather, why fabric grow bags outshine plastic, and how to size pots properly for herbs, greens, and fruiting crops.',
  author: defaultAuthor,
  date: 'May 2, 2026',
  publishedTimestamp: '2026-05-02',
  readTimeMinutes: 8,
  featured: false,
  imageUrl: '/images/container_pots.jpg',
  imageAlt: 'Assortment of terracotta pots and container planters on a terrace',
  coverStyle: {
    gradient: 'from-[#7E4828] via-[#A86438] to-[#C9804B]',
    darkGradient: 'from-[#2F180A] via-[#482510] to-[#693616]',
    accentColor: '#FB923C',
    badgeBg: 'bg-orange-900/60 text-orange-200 border-orange-700/50',
    illustrationType: 'pot-selection'
  },
  tags: ['Pot Selection', 'Container Materials', 'Drainage', 'Balcony Essentials', 'Root Health'],
  quickTip: {
    title: 'The Potting Volume Fallacy',
    text: 'Pot diameter alone is deceptive. A wide, shallow bowl holds a fraction of the soil of a straight-sided nursery bucket with the same top width. Always consider total cubic soil volume: roots grow downward first, seeking cool moisture cushions beneath the baking surface.'
  },
  keyTakeaways: [
    'Porous terracotta breathes and cools roots, making it supreme for Mediterranean herbs, but dries out too quickly for thirsty vegetables.',
    'Fabric grow bags prevent root circling via air-pruning and weigh next to nothing, making them the gold standard for high-elevation balconies.',
    'Always ensure pots have ample drainage holes; gravel in the bottom of a pot does not improve drainage, it actually raises the perched water table!',
    'Size containers according to root mature volume: 1 gallon for herbs, 2-3 gallons for peppers and greens, 5-10 gallons for tomatoes and squash.'
  ],
  sections: [
    {
      heading: 'The Container as a Closed Biosphere',
      paragraphs: [
        "When gardening in the earth, roots have infinite freedom to explore sideways and downwards, seeking cool moisture pockets during droughts and escaping excess rainwater through natural subterranean gravel strata. When you plant inside a pot, you are trapping that root system inside a closed, finite capsule exposed to outside elements on all four sides and the bottom.",
        "On an apartment balcony or sunny rooftop, the choice of container material directly governs root zone temperatures, oxygen availability, evaporation rates, and overall structural safety. Selecting pots based purely on interior design aesthetics without understanding container physics is one of the quickest routes to stunted plants and root suffocation."
      ]
    },
    {
      heading: 'Container Material Face-Off',
      subheading: 'Pros, cons, and best use cases for common pot materials',
      paragraphs: [
        "Every material possesses distinct thermal and moisture-conducting characteristics. Here is how they stack up in high-density urban environments:",
        "1. Unglazed Terracotta (Earthenware): Made from fired natural clay, terracotta is porous and breathable. Water evaporates through the container walls, cooling the root system on hot days. This makes terracotta exceptional for drought-tolerant, rot-sensitive plants like rosemary, lavender, thyme, and succulents. However, in scorching midsummer heat, terracotta can dry out in hours, and unsealed pots can crack in freezing winter temperatures.",
        "2. Fabric Grow Bags (Breathable Geotextile): Loved by commercial growers and balcony enthusiasts alike. Fabric bags allow oxygen to permeate the soil from all angles. When a root tip hits the fabric edge, it naturally self-prunes in response to air ('air-pruning'), triggering dense, fibrous lateral branching instead of dangerous root spiraling. Furthermore, they fold flat for winter storage and weigh almost zero empty.",
        "3. Glazed Ceramic: Stunning, heavy, and long-lasting. The vitreous glaze prevents moisture evaporation through the walls, retaining water far longer than terracotta. The downside is significant weight: a 14-inch glazed ceramic urn filled with wet soil can easily surpass 60 pounds, which demands caution near outer balcony railings.",
        "4. Food-Grade Resin & Polypropylene: Modern double-walled resin planters provide excellent thermal insulation against both baking heat and freezing snaps. They are lightweight, shatterproof, UV-resistant, and cost-effective, though cheaper plastics can turn brittle after two years under intense sun.",
        "5. Sub-Irrigated / Self-Watering Planters: Feature a built-in water reservoir at the bottom separated from the potting soil by an aerated grate. Soil wicks moisture upward via capillary action. These are lifesavers for busy urbanites who travel for weekend trips or face blistering west-facing winds."
      ]
    },
    {
      heading: 'The Gravel Drainage Myth: Debunked by Soil Science',
      paragraphs: [
        "For generations, well-meaning gardening folklore has advised placing a layer of pebbles, broken pottery shards, or gravel at the bottom of pots to 'improve drainage.' Agronomy soil physics has conclusively proven the exact opposite.",
        "Water does not easily move from a fine-textured medium (like fluffy potting soil) into a coarse-textured medium (like gravel) until the soil layer above is completely saturated to the brink. This phenomenon, known as a 'perched water table,' actually brings soggy, oxygen-free water higher up into the container, right into the delicate crown and main root zone. The only thing you should put at the bottom of a container is high-quality potting mix over a small piece of mesh or paper towel to stop soil from leaking out of the drainage holes."
      ],
      bulletPoints: [
        'Drainage holes must be clear: Ensure at least one 1/2-inch hole for small pots, and 3-5 holes for large planters.',
        'Use pot feet or cedar risers: Lifting pots 1/2 inch off the deck surface allows free drainage and prevents stained balcony flooring.',
        'Always empty saucers after heavy downpours so plant roots do not drown in stagnant standing water.'
      ]
    },
    {
      heading: 'Sizing Your Containers by Crop Family',
      subheading: 'Soil volume requirements for common balcony favorites',
      paragraphs: [
        "Under-potting is a primary cause of low harvests and rapid wilting. Here is a definitive sizing guide for healthy small-space roots:",
        "• Small (0.5 to 1.5 Gallons / 6–8 Inch Diameter): Chives, thyme, cilantro, parsley, radishes, edible pansies, and alpine strawberries.",
        "• Medium (2 to 4 Gallons / 10–12 Inch Diameter): Bush basil, rosemary, kale, Swiss chard, head lettuces, spinach, bush green beans, and dwarf hot peppers.",
        "• Large (5 to 7 Gallons / 14–16 Inch Diameter): Bell peppers, eggplants, determinate bush tomatoes, dwarf citrus, and bush zucchini.",
        "• Extra Large (10+ Gallons / 18+ Inch Diameter): Indeterminate vining cherry tomatoes, compact fig trees, blueberry bushes, and climbing runner beans."
      ],
      steps: [
        {
          title: 'Assess Weight Limits',
          detail: 'Fabric grow bags and resin planters are 80% lighter than glazed stone, preserving your building weight allowance for living soil.'
        },
        {
          title: 'Color Strategy',
          detail: 'Use light-colored pots (terracotta, sandstone, white) in south-facing sun to reflect heat; avoid black plastic pots that bake roots.'
        },
        {
          title: 'Wind Ballast',
          detail: 'On windy upper balconies, place a few heavy stones in the bottom saucer or interlock square planters to prevent tall trellises from toppling.'
        }
      ]
    }
  ],
  conclusion: "A thoughtfully chosen container is an investment in your garden’s resilience. Match the material to your plant’s thirst and your balcony's thermal climate, give roots the cubic space they crave, and watch your balcony flourish with vigorous health."
};
