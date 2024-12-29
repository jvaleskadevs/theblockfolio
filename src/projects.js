const projects = [
  {
    id: 0,
    title: "The Blockfolio",
    description: "This website",
    tags: ["webapp"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 1,
    title: "Onchain Blocks",
    description: "These blocks, like almost all blocks, are part of a bigger building... Onchain Block is a 100% onchain generative art collection in the degen chain",
    tags: ["art", "farcaster frame", "degen"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 2,
    title: "Onchain Blocks Game",
    description: "The Onchain Blocks Game is a 1 vs 1 board game playable in a farcaster frame. The board is a 7x3 grid like the Onchain Blocks nft.",
    tags: ["game", "farcaster frame", "degen"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 3,
    title: "The Chosen Block",
    description: "The Chosen Block is a farcaster frame game. Every 12 hours a block is chosen, those who selected the same block got some rewards.",
    tags: ["game", "farcaster frame", "degen"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 4,
    title: "Onchain Summer Blocks",
    description: "Onchain Summer Blocks, OCSB, is a collection of art only mintable for the onchain summer.",
    tags: ["art", "webapp", "base", "onchain summer"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 5,
    title: "Onchain Blocks Gallery",
    descritpion: "The Onchain Blocks gallery is a gallery and marketplace for the Onchain Blocks collection. The gallery earned a grant by the Syndicate team 💜️",
    tags: ["art", "webapp", "degen", "syndicate grant"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 6,
    title: "Degentle Fox Based Club (DFBC)",
    description: "DegentleFox Based Club is a group of farcaster degens having fun with frames and a warping machine. Only for the real degens.",
    tags: ["art", "farcaster frame", "base"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 7,
    title: "The Warping Time Machine",
    description: "The warping time machine is a incentive protocol for members of the DFBC.",
    tags: ["gamefi", "dfbc", "farcaster frame", "base"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 8,
    title: "The Magic Machine",
    description: "A machine for random distribution of previously curated artworks imitating the behaviour of a vending machine.",
    tags: ["art", "webapp", "base", "zora", "onchain summer", "buildathon winner", "degen", "tn100x", "enjoy", "imagine"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 9,
    title: "J Frame",
    description: "A private template for building farcaster frames. Fork of a-frame-in-100-lines by Zizzamia.",
    tags: ["dev", "farcaster frame"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 10,
    title: "Los Juegos Shelby",
    description: "Frames for the Juegos Shelby games in the Farcaster social network. Games by @thommyshelby.",
    tags: ["game", "farcaster frame", "degen"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 11,
    title: "OBA",
    description: "The Onchain Blocks Agency is badge recognizing the contributions and the effort of the most memorable members of the community.",
    tags: ["social", "art", "farcaster", "base"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 12,
    title: "Gemcaster",
    description: "A webapp for minting casts as nfts and reward the creators and curators.",
    tags: ["social", "webapp", "farcaster", "base"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 13,
    title: "Fawkes Frames",
    description: "Fawkes Frames is the ultimate no code tool for creating farcaster minting frames.",
    tags: ["art", "farcaster frame", "base", "zora"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 14,
    title: "Fox meets Fox",
    description: "A farcaster frame with links to the farcaster profiles of every DFBC member.",
    tags: ["social", "dfbc", "farcaster frame", "base"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 15,
    title: "Words Game",
    description: "The words game is a farcaster frame implementing a word seeker game.",
    tags: ["game", "social", "farcaster frame"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 16,
    title: "Color Blocks",
    description: "These blocks, like almost all blocks, are part of a bigger building...",
    tags: ["art", "farcaster", "degen"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 17,
    title: "OBG",
    description: "The OBG protocol is a complex ecosystem to reward gamers in the degen chain.",
    tags: ["gamefi", "farcaster frame", "degen"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 18,
    title: "Farcaster Agent",
    description: "An autonomous agent able to cast, reply, tip degen, launch tokens and monitor and moderate the feed.",
    tags: ["AI", "farcaster"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 19,
    title: "Farcave",
    description: "A collab with @vlady. This is a small set of histories around the farcave. Every chapter of the book comes with a collectible artwork.",
    tags: ["book", "art", "farcaster frame", "base"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 20,
    title: "Onchain Hugs",
    description: "A collab with @chriscocreated. Onchain Hugs is a protocol that allows friends to capture and store a memento of their friendship forever onchain.",
    tags: ["art", "cocreation", "farcaster frame", "base"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 21,
    title: "The Aftermatch",
    description: "The aftermatch is a farcaster frame displaying the results of the most important football leagues",
    tags: ["football", "farcaster frame"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 22,
    title: "Melon Games",
    description: "Melon games is a very basic frame hosting several Melon Games in farcaster. Games by @melonweb3.",
    tags: ["game", "social", "farcaster frame"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 23,
    title: "Anky Newen",
    description: "Contribution to the anky and newen projects created by @jpfraneto. Anky is an ecosystem focused on helping you to know more about you. Newen is a token powering the cocreation of a book between humans and AI.",
    tags: ["book", "healthcare", "meditation", "base", "degen"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 24,
    title: "Slash",
    tags: ["social", "farcaster frame", "base"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 25,
    title: "Polymarket Agent",
    description: "An autonous agent able to operate the Polymarkets, especialized on fooball.",
    tags: ["AI", "football", "polymarket", "farcaster frame"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 26,
    title: "Wowow or Meh",
    description: "Wowow or Meh is a farcaster frame where people can upvote/downvote images. DFBC members leveraged this frame to curate the artworks being part of the collection.",
    tags: ["dfbc", "farcaster frame", "base"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 27,
    title: "Anon Cast(er)",
    description: "Anon Cast is the ultimate open source anticensorship and privacy-focused lightweight farcaster client. (not open sourced, not published, personal usage currently)",
    tags: ["social", "webapp", "farcaster"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 28,
    title: "Flamingho",
    description: "Flamingho is a hackathon project built for the LFGHO2024. It is a defi protocol for lending and borrowing over stable coins with some interesting features.",
    tags: ["defi", "protocol", "hackathon", "gho"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 29,
    title: "Wowow NFT",
    description: "The Wowow NFT collection is a 100% onchain generative art collection living in the base chain. It was the very first one collection mintable with the wowow token.",
    tags: ["art", "webapp", "farcaster", "base"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 30,
    title: "Sumart",
    description: "Sumart is a powerful tool that allows communities and creators to create collaborative artworks, enabling positive sum of art for communities.",
    tags: ["art", "positive sum","webapp", "base", "zora"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 31,
    title: "Frang",
    description: "Frang stands for Frame Random Numbers Generator, it is a Farcaster frame API for generating verifiable random numbers powered by the League of the Entropy and DRAND.",
    tags: ["drand", "farcaster frame"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 32,
    title: "Loka",
    description: "Loka is a farcaster frame to convert dates between timezones.",
    tags: ["time", "farcaster frame"],
    link: "https://theblockfolio.vercel.app"
  },
  {
    id: 33,
    title: "Zora Creator Frame",
    description: "A frame to create zora nfts just replying with an image and a name.",
    tags: ["art", "farcaster frame", "base", "zora"],
    link: "https://theblockfolio.vercel.app"
  }
];

export default projects;
