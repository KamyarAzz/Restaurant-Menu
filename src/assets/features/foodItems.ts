import {TMenuItem} from "../../lib/types";
import item1 from "../images/foodItems/item-1.jpeg";
import item2 from "../images/foodItems/item-2.jpeg";
import item3 from "../images/foodItems/item-3.jpeg";
import item4 from "../images/foodItems/item-4.jpeg";
import item5 from "../images/foodItems/item-5.jpeg";
import item6 from "../images/foodItems/item-6.jpeg";
import item7 from "../images/foodItems/item-7.jpeg";
import item8 from "../images/foodItems/item-8.jpeg";
import item9 from "../images/foodItems/item-9.jpeg";
import item10 from "../images/foodItems/item-10.jpeg";

const menuItems: TMenuItem[] = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15.99,
    img: item1,
    desc: `Fluffy buttermilk pancakes served with a drizzle of maple syrup and a side of fresh berries, perfect for a hearty breakfast.`,
  },
  {
    id: 2,
    title: "Diner Double",
    category: "lunch",
    price: 13.99,
    img: item2,
    desc: `A classic diner-style double cheeseburger topped with fresh lettuce, tomatoes, and our special sauce, served with crispy fries.`,
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: 6.99,
    img: item3,
    desc: `A monstrous milkshake loaded with rich chocolate, whipped cream, and a cherry on top, guaranteed to satisfy your sweet tooth.`,
  },
  {
    id: 4,
    title: "Country Delight",
    category: "breakfast",
    price: 20.99,
    img: item4,
    desc: `A hearty breakfast platter featuring farm-fresh eggs, crispy bacon, and homemade biscuits, served with country gravy.`,
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "lunch",
    price: 22.99,
    img: item5,
    desc: `A delicious egg sandwich with avocado, spicy aioli, and arugula on toasted sourdough, perfect for a midday boost.`,
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "shakes",
    price: 18.99,
    img: item6,
    desc: `A creamy shake blended with crushed Oreos and vanilla ice cream, topped with whipped cream and chocolate drizzle.`,
  },
  {
    id: 7,
    title: "Bacon Overflow",
    category: "breakfast",
    price: 8.99,
    img: item7,
    desc: `A breakfast sandwich overflowing with crispy bacon, scrambled eggs, and cheddar cheese on a toasted bagel.`,
  },
  {
    id: 8,
    title: "American Classic",
    category: "lunch",
    price: 12.99,
    img: item8,
    desc: `A classic American sandwich with turkey, Swiss cheese, and fresh veggies on whole grain bread, served with a pickle.`,
  },
  {
    id: 9,
    title: "Quarantine Buddy",
    category: "shakes",
    price: 16.99,
    img: item9,
    desc: `A comforting shake made with vanilla ice cream, fresh strawberries, and a hint of mint, perfect for a cozy treat.`,
  },
  {
    id: 10,
    title: "Bison Steak",
    category: "dinner",
    price: 22.99,
    img: item10,
    desc: `A juicy bison steak grilled to perfection, served with garlic mashed potatoes and seasonal vegetables for a hearty dinner.`,
  },
];

export default menuItems;
