const books = [
  {
    id: 1,
    title: "Castle In The Sky",
    author: "Hayao Miyazaki",
    price: 16.99,
    category: "Adventure",
    image: "../assets/home/book-1.png",
    description:
      "Vestibulum consectetur fringilla tellus, et pulvinar massa tempus nec. Fusce nibh nibh, consectetur vitae felis quis, sagittis ullamcorper enim. Nullam maximus vehicula justo, vel vestibulum turpis dictum at. Nam sed laoreet sem.",
    rating: 4.7,
    sold: 160,
    isFeatured: false,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 2,
    title: "Simple Things You Can Do to Save the Earth",
    author: "Stephen King",
    price: 29.99,
    category: "Adventure",
    image: "../assets/home/book-2.png",
    description:
      "A practical guide with actionable steps for environmental conservation and grassroots movements.",
    rating: 4.5,
    sold: 120,
    isFeatured: false,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 3,
    title: "Flovely And Unicom Erna",
    author: "Agatha Christie",
    price: 18.99,
    category: "Novels",
    image: "../assets/home/book-3.png",
    description:
      "A children's activity book categorized under kids’ literature, published in 2014.",
    rating: 4.2,
    sold: 90,
    isFeatured: false,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 4,
    title: "Qple Gpod with Retina Sisplay",
    author: "Dan Brown",
    price: 39.99,
    category: "Novels",
    image: "../assets/home/book-4.png",
    description:
      "Explores Apple's Retina Display technology introduced in 2010 and its visual clarity.",
    rating: 4.1,
    sold: 75,
    isFeatured: false,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 5,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 14.99,
    category: "Philosophy",
    image: "../assets/home/alchemist.jpg",
    description: "A journey of self-discovery through the deserts of Egypt.",
    isFeatured: false,
    rating: 4.7,
    sold: 150,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 6,
    title: "1984",
    author: "George Orwell",
    price: 12.5,
    category: "Dystopia",
    image: "../assets/home/1984.jpg",
    description: "A chilling vision of a totalitarian future.",
    isFeatured: false,
    rating: 4.9,
    sold: 200,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 7,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 11.75,
    category: "Classic",
    image: "../assets/home/book-7.jpeg",
    description: "A deep look into racial injustice and childhood.",
    isFeatured: false,
    rating: 4.8,
    sold: 180,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 8,
    title: "Atomic Habits",
    author: "James Clear",
    price: 16.0,
    category: "Self-Help",
    image: "../assets/home/book-8.jpeg",
    description: "Tiny changes make a big difference.",
    isFeatured: true,
    rating: 4.6,
    sold: 250,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 9,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 13.25,
    category: "Finance",
    image: "../assets/home/book-9.jpeg",
    description: "What the rich teach their kids about money.",
    isFeatured: false,
    rating: 4.4,
    sold: 170,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 10,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 50.0,
    category: "Adventure",
    image: "../assets/home/book-10.jpeg",
    description: "A hobbit’s unexpected adventure.",
    isFeatured: true,
    rating: 4.8,
    sold: 300,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 11,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 10.0,
    category: "Motivation",
    image: "../assets/home/book-11.jpeg",
    description: "Classic strategies for success.",
    isFeatured: false,
    rating: 4.3,
    sold: 110,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 12,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 18.0,
    category: "History",
    image: "../assets/home/book-12.jpeg",
    description: "A brief history of humankind.",
    isFeatured: false,
    rating: 4.9,
    sold: 260,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 13,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    price: 14.0,
    category: "Spiritual",
    image: "../assets/home/book-13.jpeg",
    description: "Living in the present moment.",
    isFeatured: false,
    rating: 4.6,
    sold: 140,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 14,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 13.75,
    category: "Finance",
    image: "../assets/home/book-14.jpeg",
    description: "Timeless lessons on wealth and behavior.",
    isFeatured: true,
    rating: 4.7,
    sold: 210,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 15,
    title: "Deep Work",
    author: "Cal Newport",
    price: 17.25,
    category: "Productivity",
    image: "../assets/home/book-15.jpg",
    description: "Rules for focused success in a distracted world.",
    isFeatured: true,
    rating: 4.8,
    sold: 190,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 16,
    title: "Treasure Island",
    author: "Robert Louis Stevenson",
    price: 14.99,
    category: "Adventure",
    image: "../assets/home/book-16.jpeg",
    description:
      "An epic tale of pirates, buried treasure, and high seas adventure. Join young Jim Hawkins on a dangerous journey full of twists and betrayals.",
    rating: 4.6,
    sold: 245,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 17,
    title: "The Call of the Wild",
    author: "Jack London",
    price: 12.5,
    category: "Adventure",
    image: "../assets/home/book-17.jpg",
    description:
      "Follow Buck, a domestic dog thrust into the harsh life of the Alaskan wilderness, in this gripping story of survival and instinct.",
    rating: 4.5,
    sold: 310,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 18,
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    price: 13.75,
    category: "Adventure",
    image: "../assets/home/book-18.jpeg",
    description:
      "A rebellious boy and a runaway slave travel down the Mississippi River, discovering freedom and confronting societal injustice.",
    rating: 4.8,
    sold: 410,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 19,
    title: "King Solomon's Mines",
    author: "H. Rider Haggard",
    price: 15.0,
    category: "Adventure",
    image: "../assets/home/book-19.jpeg",
    description:
      "Join Allan Quatermain and his companions on a perilous expedition to find the lost treasure of King Solomon in unexplored Africa.",
    rating: 4.4,
    sold: 198,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 20,
    title: "Life of Pi",
    author: "Yann Martel",
    price: 17.25,
    category: "Adventure",
    image: "../assets/home/book-20.jpg",
    description:
      "Stranded on a lifeboat with a tiger, young Pi Patel must use his wits and faith to survive one of the most unusual adventures ever told.",
    rating: 4.7,
    sold: 372,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 21,
    title: "Simple Things You Can Do to Save the Earth",
    author: "Stephen King",
    price: 29.99,
    category: "Adventure",
    image: "../assets/home/book-21.jpg",
    description:
      "A practical guide with actionable steps for environmental conservation and grassroots movements.",
    rating: 4.5,
    sold: 120,
    isFeatured: false,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 22,
    title: "Dune",
    author: "Frank Herbert",
    price: 17.99,
    category: "Science-Fiction",
    image: "../assets/home/book-22.jpg",
    description:
      "In a distant future where spice controls the universe, Paul Atreides must survive political betrayal and fulfill a great destiny.",
    rating: 4.8,
    sold: 540,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 23,
    title: "Neuromancer",
    author: "William Gibson",
    price: 13.5,
    category: "Science-Fiction",
    image: "../assets/home/book-23.jpg",
    description:
      "A washed-up hacker is hired for one last job in a world of AI, cybernetics, and a digital matrix that predicted the internet.",
    rating: 4.4,
    sold: 310,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 24,
    title: "Ender's Game",
    author: "Orson Scott Card",
    price: 14.25,
    category: "Science-Fiction",
    image: "../assets/home/book-24.jpg",
    description:
      "A gifted boy is trained through intense war games to save humanity from an alien threat. Smart, strategic, and emotional.",
    rating: 4.7,
    sold: 390,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 25,
    title: "Foundation",
    author: "Isaac Asimov",
    price: 15.0,
    category: "Science-Fiction",
    image: "../assets/home/book-25.jpg",
    description:
      "A visionary psychohistorian predicts the fall of the galactic empire and secretly sets out to preserve knowledge for the future.",
    rating: 4.6,
    sold: 420,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 26,
    title: "The Martian",
    author: "Andy Weir",
    price: 14.75,
    category: "Science-Fiction",
    image: "../assets/home/book-26.jpg",
    description:
      "Stranded alone on Mars, astronaut Mark Watney must survive using science, wit, and sheer willpower.",
    rating: 4.8,
    sold: 610,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 27,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 16.99,
    category: "Science-Fiction",
    image: "../assets/home/book-27.jpg",
    description:
      "A man wakes up alone in space with no memory—and must save Earth from extinction. Brilliantly inventive and heartfelt.",
    rating: 4.9,
    sold: 470,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 28,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    price: 15.99,
    category: "Self-Help",
    image: "../assets/home/book-28.jpeg",
    description:
      "A timeless guide to personal and professional effectiveness, grounded in values and proactive principles.",
    rating: 4.7,
    sold: 760,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 29,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 13.99,
    category: "Self-Help",
    image: "../assets/home/book-29.jpg",
    description:
      "A classic blueprint for success based on insights from the world's most successful individuals.",
    rating: 4.5,
    sold: 910,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 30,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 14.5,
    category: "Self-Help",
    image: "../assets/home/book-30.jpeg",
    description:
      "A brutally honest and humorous look at how to focus on what really matters in life.",
    rating: 4.6,
    sold: 670,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 31,
    title: "Can’t Hurt Me",
    author: "David Goggins",
    price: 16.75,
    category: "Self-Help",
    image: "../assets/home/book-31.jpg",
    description:
      "A powerful memoir and mindset guide from a Navy SEAL who turned pain into personal transformation.",
    rating: 4.8,
    sold: 580,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 32,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 12.99,
    category: "Romantic",
    image: "../assets/home/book-32.jpeg",
    description:
      "A timeless romance between Elizabeth Bennet and Mr. Darcy, full of wit, social insight, and emotional tension.",
    rating: 4.9,
    sold: 880,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 33,
    title: "Me Before You",
    author: "Jojo Moyes",
    price: 14.5,
    category: "Romantic",
    image: "../assets/home/book-33.jpg",
    description:
      "A heartfelt story of an unlikely love between a spirited caregiver and a paralyzed man struggling to find meaning.",
    rating: 4.7,
    sold: 720,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 34,
    title: "The Notebook",
    author: "Nicholas Sparks",
    price: 13.75,
    category: "Romantic",
    image: "../assets/home/book-34.jpeg",
    description:
      "A moving tale of enduring love and devotion, spanning decades and touching the deepest emotions.",
    rating: 4.8,
    sold: 790,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 35,
    title: "It Ends With Us",
    author: "Colleen Hoover",
    price: 15.0,
    category: "Romantic",
    image: "../assets/home/book-35.jpg",
    description:
      "An emotional rollercoaster that explores love, heartbreak, and the difficult choices we make in relationships.",
    rating: 4.6,
    sold: 670,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 36,
    title: "The Time Traveler's Wife",
    author: "Audrey Niffenegger",
    price: 14.99,
    category: "Romantic",
    image: "../assets/home/book-36.jpg",
    description:
      "A unique love story between a woman and a man who involuntarily travels through time. Deeply romantic and tragic.",
    rating: 4.5,
    sold: 530,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 37,
    title: "Outlander",
    author: "Diana Gabaldon",
    price: 16.25,
    category: "Romantic",
    image: "../assets/home/book-37.jpg",
    description:
      "A World War II nurse is transported back to 18th-century Scotland, where she finds danger, passion, and true love.",
    rating: 4.7,
    sold: 610,
    isFeatured: true,
    stock: 25,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
];

if (!localStorage.getItem("books")) {
  localStorage.setItem("books", JSON.stringify(books));
}

const allBooks = JSON.parse(localStorage.getItem("books"));
const featuredBooks = allBooks.filter((book) => book.isFeatured);

const featuredCards = document.querySelectorAll("#booksCarousel .card");

featuredCards.forEach((card, index) => {
  const book = featuredBooks[index];

  if (book) {
    const img = card.querySelector(".card > section > .product-img");
    img.src = book.image;
    img.alt = book.title;
    img.style.width = "200px";
    img.style.height = "260px";
    card.querySelector(".card>.card-body>.product-name").textContent =
      book.title;
    card.querySelector(".card>.card-body>.author").textContent = book.author;
    card.querySelector(
      ".card>.card-body>section>.product-price"
    ).textContent = `$${book.price}`;
  } else {
    card.style.display = "none";
  }
});

const adventureBooks = allBooks.filter((book) => book.category == "Adventure");
const novelsBooks = allBooks.filter((book) => book.category == "Novels");
const romanticBooks = allBooks.filter((book) => book.category == "Romantic");
const selfhelpBooks = allBooks.filter((book) => book.category == "Self-Help");
const scfictionBooks = allBooks.filter(
  (book) => book.category == "Science-Fiction"
);
const financeBooks = allBooks.filter((book) => book.category == "Finance");
const types = [
  adventureBooks,
  novelsBooks,
  romanticBooks,
  selfhelpBooks,
  scfictionBooks,
  financeBooks,
];

const categoriesBooks = [
  books[9],
  books[2],
  books[34],
  books[28],
  books[24],
  books[13],
];
const categories = document.querySelectorAll("#homeFourthSection li");
categories.forEach((li, index) => {
  const category = categoriesBooks[index];
  if (category) {
    const img = li.querySelector("img[class=book-image]");
    img.src = category.image;
    img.alt = category.title;
    img.style.width = "80px";
    img.style.height = "116px";

    li.querySelector("section.badge-number").textContent = index + 1;
    li.querySelector(
      "p.namecat"
    ).textContent = `${category.category} category (${types[index].length})`;
  }
  const categoryName = category.category;
  li.addEventListener("click", () => {
    window.location.href = `pages/category.html?category=${encodeURIComponent(
      categoryName
    )}`;
  });
});

const shuffled = allBooks.slice().sort(() => 0.5 - Math.random());
const topBooks = shuffled.slice(0, 4);

const topbookleBooks = document.querySelectorAll("#BookleTopBooks .card");

topbookleBooks.forEach((card, index) => {
  const book = topBooks[index];
  if (book) {
    const img = card.querySelector(".card > section > img");
    img.src = book.image;
    img.alt = book.title;
    img.style.width = "150px";
    img.style.height = "200px";

    card.querySelector(".card > section > h5.card-title").textContent =
      book.title;
    card.querySelector(".card > section > a.card-text").textContent =
      book.author;
    card.querySelector(
      ".card section > span.product-price"
    ).textContent = `$${book.price}`;
  }
});

const topRatedBooks = allBooks
  .slice()
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 6);
const topRatedCards = document.querySelectorAll("#homeEightthSection .card");

topRatedCards.forEach((card, index) => {
  const book = topRatedBooks[index];
  if (book) {
    const img = card.querySelector(".card img");
    img.src = book.image;
    img.alt = book.title;
    img.style.width = "115px";
    img.style.height = "160px";

    card.querySelector(".card h5.card-title").textContent = book.category;
    card.querySelector(".card p.fs-6").textContent = book.title;
    card.querySelector(".card p.price").textContent = `$${book.price}`;
  }
});

const topsellingBooks = allBooks
  .slice()
  .sort((a, b) => b.sold - a.sold)
  .slice(0, 6);
const topSellingCards = document.querySelectorAll("#homeNinthSection .card");

topSellingCards.forEach((card, index) => {
  const book = topsellingBooks[index];
  if (book) {
    const img = card.querySelector(".card>section>img");
    img.src = book.image;
    img.alt = book.title;
    img.style.width = "150px";
    img.style.height = "200px";

    card.querySelector(".card h5").textContent = book.title;
    card.querySelector(".card a.card-text").textContent = book.author;
    card.querySelector(
      ".card>.card-body>section.fw-bold"
    ).textContent = `$${book.price}`;
  }
});