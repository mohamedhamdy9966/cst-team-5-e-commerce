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
    stock: 200,
    isFeatured: true,
    isTopCategories: false,
    isTopBooks: false,
    isTopRating: false,
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
    stock: 200,
    isFeatured: false,
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
    stock: 200,
    isFeatured: true,
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
    stock: 20,
    isFeatured: false,
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
    image: "../assets/home/book-5.png",
    description: "A journey of self-discovery through the deserts of Egypt.",
    rating: 4.7,
    sold: 150,
    stock: 100,
    isFeatured: true,
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
    image: "../assets/home/book-6.png",
    description: "A chilling vision of a totalitarian future.",
    rating: 4.9,
    sold: 200,
    stock: 50,
    isFeatured: true,
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
    rating: 4.8,
    sold: 180,
    stock: 2,
    isFeatured: false,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 8,
    title: "Atomic Habits",
    author: "James Clear",
    price: 16.0,
    category: "Self-help",
    image: "../assets/home/book-8.jpeg",
    description: "Tiny changes make a big difference.",
    rating: 4.6,
    sold: 250,
    stock: 77,
    isFeatured: true,
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
    rating: 4.4,
    sold: 170,
    stock: 56,
    isFeatured: false,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 10,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 15.0,
    category: "Fantasy",
    image: "../assets/home/book-10.jpeg",
    description: "A hobbit’s unexpected adventure.",
    rating: 4.8,
    sold: 300,
    stock: 900,
    isFeatured: true,
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
    rating: 4.3,
    sold: 110,
    stock: 58,
    isFeatured: false,
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
    rating: 4.9,
    sold: 260,
    stock: 83,
    isFeatured: false,
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
    rating: 4.6,
    sold: 140,
    stock: 93,
    isFeatured: false,
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
    rating: 4.7,
    sold: 210,
    stock: 295,
    isFeatured: true,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
  {
    id: 15,
    title: "Deep Work",
    author: "Cal Newport",
    price: 17.25,
    category: "Romance",
    image: "../assets/home/book-15.jpg",
    description: "Rules for focused success in a distracted world.",
    isFeatured: true,
    rating: 4.8,
    sold: 190,
    stock: 25,
    isFeatured: true,
    isTopCategories: true,
    isTopBooks: true,
    isTopRating: true,
  },
];

if (!localStorage.getItem("books")) {
  localStorage.setItem("books", JSON.stringify(books));
}

const featuredBooks = JSON.parse(localStorage.getItem("books")).filter(
  (book) => book.isFeatured
);

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

const topRatedBooks = books
  .slice()
  .sort((a, b) => b.rating - a.rating)
  .slice(0);
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
