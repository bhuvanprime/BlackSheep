import type { Category } from './types';

function buildSimpleCategory(id: string, name: string, words: string[]): Category {
  return {
    id,
    name,
    words: words.map(text => ({ text, hints: [`It's related to ${name}`, `Think about common ${name.toLowerCase()}`] }))
  };
}

const easyWords = [
  'Apple', 'Dog', 'Car', 'House', 'Tree', 'Cat', 'Sun', 'Moon', 'Star', 'Water',
  'Fire', 'Earth', 'Bird', 'Fish', 'Book', 'Pen', 'Chair', 'Table', 'Shoe', 'Hat',
  'Door', 'Window', 'Clock', 'Phone', 'Cup', 'Plate', 'Spoon', 'Fork', 'Knife', 'Bed',
  'Pillow', 'Blanket', 'Shirt', 'Pants', 'Socks', 'Ball', 'Bike', 'Bus', 'Train', 'Plane'
];

const trendWords = [
  'TikTok', 'Selfie', 'Viral', 'Influencer', 'Meme', 'Reels', 'Podcast', 'Vlog', 'Streaming', 'Hashtag',
  'Challenge', 'Unboxing', 'Clickbait', 'Algorithm', 'Trending', 'Cancellation', 'Stan', 'Ship', 'Ghosting', 'Rizz',
  'Cap', 'Flex', 'Glow up', 'Savage', 'Slay', 'Vibe', 'Aesthetic', 'POV', 'ASMR', 'Crypto',
  'NFT', 'Metaverse', 'AI', 'ChatGPT', 'Deepfake', 'Filter', 'Story', 'Swipe', 'Notification', 'Troll'
];

const entertainmentWords = [
  'Movie', 'Actor', 'Music', 'Concert', 'Popcorn', 'Theater', 'Director', 'Camera', 'Action', 'Drama',
  'Comedy', 'Horror', 'Romance', 'Sci-Fi', 'Fantasy', 'Animation', 'Documentary', 'Musician', 'Singer', 'Band',
  'Guitar', 'Piano', 'Drums', 'Microphone', 'Stage', 'Audience', 'Tickets', 'Festival', 'Magic', 'Circus',
  'Dance', 'Ballet', 'Opera', 'Play', 'Script', 'Oscar', 'Grammy', 'Red Carpet', 'Celebrity', 'Fame'
];

const everydayThings = [
  'Toothbrush', 'Keys', 'Wallet', 'Phone', 'Shoes', 'Comb', 'Soap', 'Shampoo', 'Towel', 'Mirror',
  'Toilet', 'Shower', 'Sink', 'Stove', 'Oven', 'Fridge', 'Microwave', 'Toaster', 'Blender', 'Coffee Maker',
  'Mug', 'Glass', 'Bowl', 'Pan', 'Pot', 'Broom', 'Mop', 'Trash Can', 'Vacuum', 'Laundry',
  'Iron', 'Hanger', 'Scissors', 'Tape', 'Glue', 'Paper', 'Notebook', 'Backpack', 'Umbrella', 'Watch'
];

export const standardCategories: Category[] = [
  buildSimpleCategory('cat-1', 'Easy Words', easyWords),
  buildSimpleCategory('cat-2', 'Trends', trendWords),
  buildSimpleCategory('cat-3', 'Entertainment', entertainmentWords),
  buildSimpleCategory('cat-4', 'Everyday Things', everydayThings),
];

export const importedCategories: Category[] = [
  {
    id: 'cat-t-1',
    name: 'Iconic Tamil Movie Characters',
    words: [
      { text: 'Anniyan', hints: ['Vigilante with multiple personalities', 'Uses Garuda Puranam punishments', 'Played by Vikram'] },
      { text: 'Chitti', hints: ['Humanoid robot', 'Created by Dr. Vaseegaran', 'Played by Rajinikanth'] },
      { text: 'Velu Nayakar', hints: ['Mumbai underworld don', 'Nallavana Kettavana?', 'Played by Kamal Haasan'] },
      { text: 'Baasha', hints: ['Auto driver with a dark past', 'Mumbai mafia don', 'Played by Rajinikanth'] },
      { text: 'Muthupandi', hints: ['"Hi Chellam!"', 'Obsessive lover in Ghilli', 'Played by Prakash Raj'] },
      { text: 'Kaipulla', hints: ['Varutha Padadha Valibar Sangam leader', 'Always gets beaten up', 'Played by Vadivelu in Winner'] },
      { text: 'Nesamani', hints: ['Contractor from Friends', 'Hit by a hammer', '#PrayForNesamani'] },
      { text: 'Mark Antony', hints: ['Arch-rival of Baasha', 'Unique laughing style', 'Played by Raghuvaran'] },
      { text: 'Neelambari', hints: ['Arrogant antagonist in Padayappa', 'Waited 18 years for revenge', 'Played by Ramya Krishnan'] },
      { text: 'Assault Sethu', hints: ['Madurai gangster', 'Subject of a comedy film in Jigarthanda', 'Played by Bobby Simha'] },
      { text: 'Rolex', hints: ['Cold-blooded cartel leader', 'Surprise cameo in Vikram', 'Played by Suriya'] },
      { text: 'JD', hints: ['Alcoholic professor', 'Sent to a juvenile home', 'Played by Vijay in Master'] },
      { text: 'Bhavani', hints: ['Uses juveniles for crimes', 'Iron fist punch', 'Played by Vijay Sethupathi in Master'] },
      { text: 'Leo Das', hints: ['Cafe owner in Himachal', 'Animal rescuer with a violent past', 'Played by Vijay in Leo'] },
      { text: 'Dilli', hints: ['Ex-convict', 'Drives a lorry at night to see his daughter', 'Played by Karthi in Kaithi'] },
      { text: 'Agent Vikram', hints: ['Black-ops commander', 'Fakes his own death', 'Played by Kamal Haasan'] },
      { text: 'Siddharth Abhimanyu', hints: ['Billionaire pharmaceutical tycoon', 'Mastermind villain in Thani Oruvan', 'Played by Arvind Swamy'] },
      { text: 'Kokki Kumar', hints: ['Local rowdy who rises to power', 'Iconic Dhanush character', 'From Pudhupettai'] },
      { text: 'Maari', hints: ['Local don who loves pigeons', 'Wears colourful shirts and sunglasses', 'Played by Dhanush'] },
      { text: 'Vedha', hints: ['Intelligent gangster who tells stories', 'Rival to encounter specialist Vikram', 'Played by Vijay Sethupathi'] },
      { text: 'Billa', hints: ['International underworld don', 'Played originally by Rajinikanth, later Ajith', 'Famous for his stylish suits'] },
      { text: 'Mankatha Vinayak', hints: ['Corrupt police officer', 'Masterminds a massive heist', 'Played by Ajith'] },
      { text: 'Sivaji', hints: ['Returns from USA to do good', 'Fights corruption with "Boss" avatar', 'Played by Rajinikanth'] },
      { text: 'Pachaiyappan', hints: ['Traffic police who goes rogue', 'Also from the movie Anniyan', 'Played by Vikram'] },
      { text: 'Kabali', hints: ['Malaysian don', '"Kabali da!"', 'Played by Rajinikanth'] },
      { text: 'Rocky', hints: ['Violent gangster with a hammer', 'From the movie Rocky', 'Played by Vasanth Ravi'] },
      { text: 'Ambi', hints: ['Strict, rule-following lawyer', 'One of Anniyan\'s personalities', 'Played by Vikram'] },
      { text: 'Saroja Devi (Character)', hints: ['Classic actress archetype', 'Often referenced in comedy tracks', 'Symbol of old-school glamour'] },
      { text: 'Vandiyathevan', hints: ['Playful, brave warrior', 'Travels the Chola kingdom', 'Played by Karthi in Ponniyin Selvan'] },
      { text: 'Nandhini', hints: ['Scheming, beautiful antagonist', 'Seeks revenge on the Cholas', 'Played by Aishwarya Rai'] },
      { text: 'Sena', hints: ['Local thug turned powerful', 'From the movie Sena', 'Played by Sathyaraj'] },
      { text: 'Goundamani (Characters)', hints: ['King of sarcastic counters', 'Frequent collaborator with Senthil', 'Legendary comedian'] },
      { text: 'Senthil (Characters)', hints: ['Innocent-looking sidekick', 'Often the recipient of kicks and slaps', 'Legendary comedian'] },
      { text: 'Muni', hints: ['Ghost possessed character', 'From the Muni / Kanchana franchise', 'Played by Raghava Lawrence'] }
    ]
  },
  {
    id: 'cat-t-2',
    name: 'Sarcastic & Popular Tamil YouTubers',
    words: [
      { text: 'Madan Gowri', hints: ['Solo creator, daily videos', 'MG Squad', 'Covers news and mysteries'] },
      { text: 'Village Cooking Channel', hints: ['Massive scale cooking', 'Ends with eating on banana leaves', '"Always Welcomes You!"'] },
      { text: 'Parithabangal', hints: ['Gopi and Sudhakar', 'Satirical sketches', 'Middle-class life comedy'] },
      { text: 'Mic Set', hints: ['Youth and student comedy', 'Run by Sriram', 'Short films'] },
      { text: 'Eruma Saani', hints: ['Coimbatore/Kongu slang', 'Nostalgic village content', 'Comedy sketches'] },
      { text: 'Plip Plip', hints: ['Sarvs and Gurubaai', 'Adult humor', 'Brutal movie roasting'] },
      { text: 'Irfan\'s View', hints: ['Food and lifestyle vlogger', 'Travels worldwide for food', 'Mohamed Irfan'] },
      { text: 'Peppa Foodie', hints: ['Enthusiastic food reviewer', 'Loves spicy street food', 'Dramatic reactions'] },
      { text: 'Black Sheep', hints: ['Large team of creators', 'Comedy, interviews, and web series', 'RJ Vigneshkanth'] },
      { text: 'Jump Cuts', hints: ['Hari Baskar', 'Comedy sketches', 'Relatable daily situations'] },
      { text: 'Nakkalites', hints: ['Coimbatore based', 'Family and school comedy', 'Alumban, Sasi, etc.'] },
      { text: 'Temple Monkeys', hints: ['Dark humor and satire', 'Vijay Varadharaj', 'Unfiltered comedy'] },
      { text: 'Put Chutney', hints: ['Rajmohan', 'Social commentary and comedy', 'High production value sketches'] },
      { text: 'Behindwoods', hints: ['Celebrity interviews', 'Movie reviews', 'Entertainment portal'] },
      { text: 'Galatta', hints: ['Entertainment news', 'Audio launches', 'Movie updates'] },
      { text: 'Smile Settai', hints: ['RJ Vigneshkanth early days', 'Pranks and public interviews', 'Comedy'] },
      { text: 'Nari Koottam', hints: ['Comedy sketches', 'Youth-oriented content', 'Relatable humor'] },
      { text: 'Madras Central', hints: ['Gopi and Sudhakar\'s origin', 'Political satire', 'Comedy sketches'] },
      { text: 'Fully Filmy', hints: ['Movie merchandise origin', 'Pop culture discussions', 'Movie reviews'] },
      { text: 'Aadhan Tamil', hints: ['News and interviews', 'Food reviews', 'Documentaries'] },
      { text: 'Idhaykani', hints: ['Tech reviews', 'Gadget unboxing', 'Tamil tech channel'] },
      { text: 'Tech Boss', hints: ['Tech news', 'Mobile reviews', 'Tamil tech vlogger'] },
      { text: 'Tamil Trekker', hints: ['Travel vlogger', 'Exploring different countries', 'Adventure content'] },
      { text: 'Foodie Prabhu', hints: ['Food reviews', 'Cooking experiments', 'Vlogger'] },
      { text: 'Vj Siddhu Vlogs', hints: ['Pranks and public interactions', 'Vj Siddhu', 'High energy vlogs'] },
      { text: 'Troll Cinema', hints: ['Movie roasts', 'Meme reviews', 'Pop culture'] },
      { text: 'Cinema Payithiyam', hints: ['Hardcore cinema fans', 'Deep dives into movies', 'Reviews'] },
      { text: 'Vishwa Thulasi', hints: ['Couple vloggers', 'Lifestyle and travel', 'Daily vlogs'] },
      { text: 'Aravind SA', hints: ['Stand-up comedian', 'Madrasi da', 'Observational comedy'] },
      { text: 'Alexander Babu', hints: ['Stand-up comedian', 'Alex in Wonderland', 'Musical comedy'] }
    ]
  },
  {
    id: 'cat-t-3',
    name: 'Famous Tamil Actors & Actresses',
    words: [
      { text: 'Rajinikanth', hints: ['Superstar', 'Style icon', 'Enthiran, Baasha'] },
      { text: 'Kamal Haasan', hints: ['Ulaganayagan', 'Method acting', 'Nayakan, Vikram'] },
      { text: 'Vijay', hints: ['Thalapathy', 'Dance skills', 'Ghilli, Master'] },
      { text: 'Ajith Kumar', hints: ['Thala', 'Motor racing', 'Mankatha, Billa'] },
      { text: 'Suriya', hints: ['Singam franchise', 'Soorarai Pottru', 'Nadippin Nayagan'] },
      { text: 'Dhanush', hints: ['Kolaveri Di', 'Asuran', 'Multi-time National Award winner'] },
      { text: 'Vijay Sethupathi', hints: ['Makkal Selvan', 'Master, Vikram', 'Casual acting style'] },
      { text: 'Sivakarthikeyan', hints: ['Prince of Kollywood', 'TV anchor turned hero', 'Remo, Doctor'] },
      { text: 'Nayanthara', hints: ['Lady Superstar', 'Raja Rani, Naanum Rowdy Dhaan', 'Female-led films'] },
      { text: 'Trisha Krishnan', hints: ['Jaanu in 96', 'Kundhavai', '20+ years in cinema'] },
      { text: 'Samantha', hints: ['Oo Antava', 'Kaththi, Theri', 'Leading South actress'] },
      { text: 'Vadivelu', hints: ['Vaigai Puyal', 'Nesamani', 'Legendary comedian'] },
      { text: 'Vikram', hints: ['Chiyaan', 'Anniyan, I', 'Extreme physical transformations'] },
      { text: 'Karthi', hints: ['Paruthiveeran, Kaithi', 'Suriya\'s brother', 'Versatile actor'] },
      { text: 'Jayam Ravi', hints: ['Ponniyin Selvan (Arulmozhi Varman)', 'Thani Oruvan', 'Comali'] },
      { text: 'Silambarasan (STR)', hints: ['Little Superstar', 'Vinnaithaandi Varuvaayaa', 'Maanaadu'] },
      { text: 'Madhavan', hints: ['Maddy', 'Alaipayuthey', 'Irudhi Suttru'] },
      { text: 'Arya', hints: ['Sarpatta Parambarai', 'Raja Rani', 'Fitness enthusiast'] },
      { text: 'Vishal', hints: ['Action hero', 'Sandakozhi', 'Thupparivaalan'] },
      { text: 'Keerthy Suresh', hints: ['Mahanati / Nadigaiyar Thilagam', 'Rajini Murugan', 'National Award winner'] },
      { text: 'Tamannaah', hints: ['Ayan, Baahubali', 'Kavaalaa', 'Paiyaa'] },
      { text: 'Anushka Shetty', hints: ['Devasena in Baahubali', 'Arundhati', 'Singam'] },
      { text: 'Shruti Haasan', hints: ['3, 7aum Arivu', 'Singer and actress', 'Kamal Haasan\'s daughter'] },
      { text: 'Santhanam', hints: ['Comedian turned hero', 'Lollu Sabha', 'Boss Engira Bhaskaran'] },
      { text: 'Yogi Babu', hints: ['Current top comedian', 'Mandela', 'Nelson movies regular'] },
      { text: 'Prakash Raj', hints: ['Versatile villain and character actor', 'Ghilli, Singam', 'Multiple National Awards'] },
      { text: 'Fahadh Faasil', hints: ['Malayalam star popular in Tamil', 'Vikram, Velaikkaran', 'Intense eyes'] },
      { text: 'SJ Suryah', hints: ['Director turned actor', 'Mark Antony, Maanaadu', 'Eccentric performances'] },
      { text: 'Aishwarya Rai', hints: ['Jeans, Enthiran', 'Nandhini in PS', 'Former Miss World'] },
      { text: 'Jyothika', hints: ['Chandramukhi, Kushi', 'Suriya\'s wife', 'Expressive eyes'] }
    ]
  },
  {
    id: 'cat-t-4',
    name: 'Iconic Tamil Memes & Catchphrases',
    words: [
      { text: 'Why blood? Same blood', hints: ['Marudhamalai movie', 'Vadivelu comedy', 'English-Tamil absurdity'] },
      { text: 'Aahaa! Onnu kooditangayya', hints: ['Panic realization', 'When enemies unite', 'Vadivelu meme'] },
      { text: 'Building strong-uh basement weak-uh', hints: ['Looks tough, collapses easily', 'Fragile bravado', 'Vadivelu comedy'] },
      { text: 'Unakku vandha ratham, enakku vandha thakkali chutney-aa?', hints: ['Double standards', 'Pain hypocrisy', 'Manivannan/Vadivelu classic'] },
      { text: 'Aaniye pudunga venaam', hints: ['Stop pulling nails', 'Frustration with useless work', 'Friends movie'] },
      { text: 'Sivaji sethuttaara?', hints: ['Discovering old news', 'Extreme ignorance', 'Goundamani meme'] },
      { text: 'I am a very bad boy', hints: ['Villain catchphrase', 'Prakash Raj in Pokkiri', 'Threatening but meme-able'] },
      { text: 'Vandhuttanya vandhuttanya', hints: ['"He\'s here!"', 'Dread of someone arriving', 'Vadivelu meme'] },
      { text: 'Sottai thalaiaa, kutti suvara pona', hints: ['Insulting curse', 'Comedic anger', 'Goundamani style'] },
      { text: 'Ennama ipdi panreengale ma', hints: ['Solvathellam Unmai show', 'Lakshmy Ramakrishnan', 'Expressing disbelief'] },
      { text: 'Maapu... Vachittanda aapu', hints: ['"Son-in-law, they set a trap"', 'Getting caught in a bad situation', 'Vadivelu meme'] },
      { text: 'Hello Dubai kurukku sandhu', hints: ['Fake international call', 'Trying to sound rich', 'Vadivelu in Winner'] },
      { text: 'Peelings... inner peelings', hints: ['Exaggerated emotions', 'Vadivelu crying meme', 'Fake sadness'] },
      { text: 'Vada poche', hints: ['"The vada is gone"', 'Missing an opportunity', 'Vadivelu and the crow story'] },
      { text: 'Kudutha kasanja irukku?', hints: ['"Is the money crumpled?"', 'Beggar meme', 'Vadivelu comedy'] },
      { text: 'Soodu soranai', hints: ['"Heat and sense"', 'Asking if someone has shame', 'Common reprimand'] },
      { text: 'Ovvondrayum paathu paathu seiyanum', hints: ['"Must do everything carefully"', 'Perfectionist meme', 'Vadivelu as a contractor'] },
      { text: 'Risk edukuradhu ellam rusk sapdura madhiri', hints: ['"Taking risks is like eating rusk"', 'Overconfidence', 'Vadivelu meme'] },
      { text: 'Enna koduma Sir idhu?', hints: ['"What cruelty is this, Sir?"', 'Prabhu in Chandramukhi', 'Reacting to injustice'] },
      { text: 'Chellam', hints: ['Prakash Raj in Ghilli', 'Creepy but affectionate call', 'Muthupandi\'s catchphrase'] },
      { text: 'Therikkavidalama', hints: ['"Shall we blast?"', 'Ajith in Vedalam', 'Pre-fight hype'] },
      { text: 'I am waiting', hints: ['Vijay in Thuppakki / Kaththi', 'Interval block punchline', 'Hero warning the villain'] },
      { text: 'Senjiruven', hints: ['"I will do you (kill you)"', 'Dhanush in Maari', 'Rowdy catchphrase'] },
      { text: 'Idhu epdi irukku?', hints: ['"How is this?"', 'Rajinikanth in 16 Vayathinile', 'Classic style catchphrase'] },
      { text: 'Magizhchi', hints: ['"Happiness / Cheers"', 'Rajinikanth in Kabali', 'Casual positive expression'] },
      { text: 'Chumma adhirudhulla', hints: ['"Isn\'t it shaking?"', 'Rajinikanth in Sivaji', 'Mass buildup line'] },
      { text: 'Naan oru thadava sonna', hints: ['"If I say it once..."', '...it\'s like saying it a hundred times', 'Rajinikanth in Baasha'] },
      { text: 'Kanna panni dhan kootama varum', hints: ['"Only pigs come in herds"', '...the lion walks alone', 'Rajinikanth in Sivaji'] },
      { text: 'Nallavana kettavana?', hints: ['"Am I good or bad?"', 'Kamal Haasan in Nayakan', 'Existential dilemma'] },
      { text: 'Aarambikalama', hints: ['"Shall we begin?"', 'Kamal Haasan in Vikram', 'Starting the action'] }
    ]
  },
  {
    id: 'cat-t-5',
    name: 'Tamil Music Directors and Iconic Songs',
    words: [
      { text: 'A.R. Rahman', hints: ['Mozart of Madras', 'Oscar winner', 'Roja, Bombay, Slumdog Millionaire'] },
      { text: 'Ilaiyaraaja', hints: ['Isaignani', '70s and 80s ruler', 'Over 7000 songs'] },
      { text: 'Anirudh Ravichander', hints: ['Rockstar', 'Kolaveri Di', 'Master, Vikram, Leo'] },
      { text: 'Vaathi Coming', hints: ['Master movie', 'Vijay\'s shoulder drop dance', 'Anirudh viral hit'] },
      { text: 'Rowdy Baby', hints: ['Maari 2', '1 Billion+ views', 'Dhanush and Sai Pallavi dance'] },
      { text: 'Why This Kolaveri Di', hints: ['Tanglish song', 'Global viral hit', 'From the movie 3'] },
      { text: 'Yuvan Shankar Raja', hints: ['U1', 'King of BGM', 'Pudhupettai, Mankatha'] },
      { text: 'Harris Jayaraj', hints: ['Minnale, Vaaranam Aayiram', 'Known for gibberish intros', 'Melody king of 2000s'] },
      { text: 'Santhosh Narayanan', hints: ['SaNa', 'Kabali, Karnan, Jigarthanda', 'Folk and western fusion'] },
      { text: 'G. V. Prakash Kumar', hints: ['A.R. Rahman\'s nephew', 'Aadukalam, Asuran', 'Also an actor'] },
      { text: 'Vidyasagar', hints: ['Melody King', 'Ghilli, Chandramukhi', 'Appadi Podu'] },
      { text: 'Deva', hints: ['Thenisai Thendral', 'Gaana songs pioneer', 'Baasha, Annamalai'] },
      { text: 'D. Imman', hints: ['Kumki, Viswasam', 'Rural melodies', 'National Award winner'] },
      { text: 'Thaman', hints: ['Boys actor turned composer', 'Boys, Varisu', 'Heavy bass beats'] },
      { text: 'Appadi Podu', hints: ['Ghilli', 'Vijay and Trisha dance', 'Vidyasagar viral hit'] },
      { text: 'Aaluma Doluma', hints: ['Vedalam', 'Ajith\'s mass dance', 'Anirudh composition'] },
      { text: 'Mankatha Theme', hints: ['Ajith\'s ultimate intro music', 'Yuvan Shankar Raja BGM', 'Heist thriller theme'] },
      { text: 'Arabic Kuthu', hints: ['Beast', 'Halamithi Habibo', 'Anirudh viral song'] },
      { text: 'Enjoy Enjaami', hints: ['Dhee and Arivu', 'Independent Tamil hit', 'Produced by Santhosh Narayanan'] },
      { text: 'Tum Tum', hints: ['Enemy movie', 'Wedding dance viral trend', 'Thaman composition'] },
      { text: 'Kavaalaa', hints: ['Jailer', 'Tamannaah dance', 'Anirudh hit'] },
      { text: 'Hukum', hints: ['Jailer', 'Rajinikanth mass anthem', 'Tiger Ka Hukum'] },
      { text: 'Pudhu Vellai Mazhai', hints: ['Roja', 'Snow romance song', 'A.R. Rahman classic'] },
      { text: 'Thendral Vandhu', hints: ['Avatharam', 'Ilaiyaraaja masterpiece', 'Soothing melody'] },
      { text: 'Kannaana Kanney', hints: ['Viswasam', 'Father-daughter emotional song', 'D. Imman National Award song'] },
      { text: 'Munbe Vaa', hints: ['Sillunu Oru Kaadhal', 'A.R. Rahman romance classic', 'Shreya Ghoshal vocals'] },
      { text: 'Otha Sollaala', hints: ['Aadukalam', 'Dhanush victory dance', 'G.V. Prakash hit'] },
      { text: 'Neruppu Da', hints: ['Kabali', 'Rajinikanth fire theme', 'Santhosh Narayanan'] },
      { text: 'Verithanam', hints: ['Bigil', 'Sung by Vijay himself', 'A.R. Rahman mass song'] },
      { text: 'Kaattu Payale', hints: ['Soorarai Pottru', 'Suriya and Aparna romance', 'G.V. Prakash composition'] }
    ]
  }
];
