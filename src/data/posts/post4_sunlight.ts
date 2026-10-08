import { Post } from '../../types';
import { defaultAuthor } from './author';

export const post4Sunlight: Post = {
  id: 'reading-your-balconys-sunlight',
  slug: 'reading-your-balconys-sunlight',
  title: "Reading Your Balcony's Sunlight: Which Plants Belong Where",
  subtitle: 'Compass orientation, overhang shadows, and heat bounce: how to map your balcony microclimate for thriving plants.',
  category: 'Basics',
  excerpt: 'A north-facing balcony and a south-facing rooftop are two entirely different worlds. Learn how to map hours of direct sunlight, manage concrete heat reflection, and match the ideal vegetables, herbs, and flowers to your orientation.',
  author: defaultAuthor,
  date: 'April 18, 2026',
  publishedTimestamp: '2026-04-18',
  readTimeMinutes: 8,
  featured: false,
  imageUrl: '/images/balcony_sunlight.jpg',
  imageAlt: 'Bright morning sunlight beaming across a plant-filled urban balcony',
  coverStyle: {
    gradient: 'from-[#8C5E18] via-[#B87B22] to-[#D99A36]',
    darkGradient: 'from-[#3A2406] via-[#59390B] to-[#7D5213]',
    accentColor: '#FBBF24',
    badgeBg: 'bg-amber-900/60 text-amber-200 border-amber-700/50',
    illustrationType: 'sunlight-compass'
  },
  tags: ['Sunlight', 'Balcony Orientation', 'Urban Microclimate', 'Planning', 'Shade Gardening'],
  quickTip: {
    title: 'The Concrete Thermal Battery Effect',
    text: 'Balcony walls and tile floors absorb solar radiation throughout the day and radiate intense heat well into the night. On a south- or west-facing balcony, this ambient reflection can raise temperatures by 10°F to 15°F above ambient street temperatures. Use plant stands, wooden deck tiles, or saucers with pot feet to elevate roots off scorching surfaces.'
  },
  keyTakeaways: [
    'Direct sunlight means unfiltered sun hitting the leaf surface; bright ambient sky light is considered shade in horticultural terms.',
    'South-facing balconies demand drought-tolerant sun-lovers (peppers, tomatoes, lavender); North-facing balconies excel with lush foliage (mint, spinach, ferns).',
    'East-facing spaces offer gentle morning sun with cool afternoons—ideal for salad greens and fragile herbs that bolt in excessive heat.',
    'Shadows change drastically across the seasons: summer sun is high and overhead, while spring/fall sun enters under deep overhangs at lower angles.'
  ],
  sections: [
    {
      heading: 'The Solar Anatomy of an Urban Balcony',
      paragraphs: [
        "In traditional gardening books, instructions are straightforward: 'plant in full sun' or 'provide partial shade.' But an urban apartment balcony operates under an entirely unique set of optical rules. A high-rise balcony is rarely an open flat lawn under an unobstructed dome of sky. Instead, it is a three-dimensional canyon shaped by upper floor overhangs, solid concrete balustrades, neighboring brick high-rises, and reflective glass windows.",
        "Understanding exactly when, where, and how sunlight travels across your space is the single most critical diagnostic skill you can develop. Place a sun-worshipping chili pepper in a shady north corner, and it will remain a stunted, yellowing stick without fruit. Place delicate butterhead lettuce on a blazing south-west rooftop, and it will turn bitter and bolt to seed in forty-eight hours. Let us demystify your balcony's solar blueprint."
      ]
    },
    {
      heading: 'The Four Compass Orientations',
      subheading: 'What your balcony direction actually means for plant life',
      paragraphs: [
        "Take out your smartphone compass and determine the primary orientation of your balcony railing. Here is how each direction behaves:",
        "1. South-Facing (The Sun Kingdom): In the Northern Hemisphere, south-facing spaces receive 6 to 10+ hours of intense, all-day sun. These balconies are culinary powerhouses for heat-loving fruiting crops: tomatoes, hot peppers, eggplants, figs, rosemary, and Mediterranean blossoms. The downside? Pots dry out astonishingly fast, and extreme heat can fry sensitive root hairs unless you mulch deeply.",
        "2. East-Facing (The Gentle Morning Glow): East balconies catch direct morning sun from dawn until midday, followed by cooling afternoon shade. This is the sweet spot for cool-season crops: salad greens, radishes, scallions, parsley, cilantro, and sweet peas. You escape the scorching afternoon thermal spike, which prevents greens from bolting prematurely.",
        "3. West-Facing (The Afternoon Furnace): West exposure receives minimal morning sun, but endures fierce, relentless afternoon rays when outdoor temperatures peak. This heat can be brutal on containers. Prioritize heat-hardy cultivars like oregano, sage, succulents, zinnias, dwarf citrus, and marigolds. Use self-watering planters to insulate against rapid desiccation.",
        "4. North-Facing (The Cool Sanctuary): North balconies receive minimal or zero direct sunlight, relying instead on indirect, reflected sky light. While fruiting tomatoes cannot thrive here, it is far from useless! North spaces are brilliant for leafy greens (tatsoi, kale, arugula), woodland herbs (chervil, wild garlic, mint), alpine strawberries, and stunning ornamental foliage like hostas, caladiums, and emerald ferns."
      ]
    },
    {
      heading: 'How to Conduct a Three-Point Solar Shadow Audit',
      paragraphs: [
        "Balconies frequently suffer from 'overhang blindness'—the ceiling above blocks midday overhead sun even on a southern exposure, while side parapet walls create moving shadows that slice across your planters hour by hour. To map your true light zones, conduct a simple shadow audit:",
        "Pick a clear, sunny weekend day. Set a repeating alarm on your phone for 9:00 AM, 1:00 PM, and 5:00 PM. At each interval, step outside and snap a photograph from the interior doorway looking out onto your balcony floor and railings. When you review the photos together, you will immediately see your high-value sun zones versus permanent dead shade zones."
      ],
      steps: [
        {
          title: 'Zone A: The Railing Line',
          detail: 'Usually receives the highest direct light hours. Reserve railing planters for blooming annuals, trailing herbs, or compact bush tomatoes.'
        },
        {
          title: 'Zone B: The Mid-Floor',
          detail: 'Receives partial sun. Great for root vegetables, chives, bush beans, and brassicas.'
        },
        {
          title: 'Zone C: The Back Building Wall',
          detail: 'Deep shade. Best used for storage benches, worm composters, or shade-tolerant woodland herbs like mint.'
        }
      ]
    },
    {
      heading: 'Overcoming Light Limitations in Urban Canyons',
      subheading: 'Hacking small-space physics to boost photosynthesis',
      paragraphs: [
        "If you find yourself with less direct sunlight than your dream garden requires, do not despair. Urban growers have developed ingenious tactics to maximize available photons without remodeling the building:",
        "Vertical Stacking: Plants at floor level often sit in the shadow of solid concrete railings. Elevate planters using tiered cedar ladder shelves, hanging brackets, or sturdy railing hooks to lift foliage above the shadow line into unobstructed light.",
        "Reflective Light Catchers: Paint the interior building wall behind your planters a bright off-white, or install a light-colored bamboo screen. Reflective surfaces bounce stray light rays into the undersides of leaves, providing a measurable boost in daily photosynthetic active radiation (PAR).",
        "Window Sill Boost: If your balcony is deeply shaded, start slow-maturing seedlings inside beneath a compact energy-efficient clip-on LED grow lamp for four weeks before placing them outdoors to take advantage of peak summer light."
      ],
      bulletPoints: [
        'Full Sun means 6 or more hours of direct sun per day.',
        'Partial Sun / Partial Shade means 3 to 6 hours of direct sun (morning sun is gentler than afternoon sun).',
        'Dappled Shade / Bright Indirect means light filtered through glass railings or foliage; suitable for leafy greens and herbs.'
      ]
    }
  ],
  conclusion: "Sunlight is not a single binary of 'good' or 'bad'—it is simply a condition to be understood. When you stop fighting your balcony's orientation and start working with its natural light rhythms, your small space will reward you with steady, effortless vigor."
};
