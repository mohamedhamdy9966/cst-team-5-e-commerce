const messages = [
  {
    name: "mona",
    email: "mona@iti.com",
    message: "lorem lorem lorem lorem lorem",
  },
  {
    name: "nasr",
    email: "nasr@iti.com",
    message:
      "fjfkjklkjlj yyutyuuru yufrrutruy yruyguygu ,bbnmbmvvnb ytyutuuyg gsdsgdsd uyoiutyutuy utriytryt nmbmnvnbv",
  },
  {
    name: "omar",
    email: "omar@iti.com",
    message:
      "fjfkjklkjlj yyutyuuru yufrrutruy yruyguygu ,bbnmbmvvnb ytyutuuyg gsdsgdsd uyoiutyutuy utriytryt nmbmnvnbv",
  },
];

if (!localStorage.getItem("messages")) {
  localStorage.setItem("messages",JSON.stringify(messages))
}