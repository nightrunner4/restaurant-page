// loads the HTML of lunch

const lunchLoad = function () {
  // remove previous content
  content.innerHTML = "";

  let lunchHTML = `
  <div class="left">
    <h1>Lunch & Dessert &#x1F35D;</h1>

    <h2>Salads and Bowls</h2>

    <div class="item-container">
      <h3>Cesar Salad - $12</h3>
      <p class="description">
        Mix of lettuce with croutons sautéed in olive oil with salt, pepper,
        lemon and Caesar dressing with Parmesan cheese topping.
      </p>
      <p class="description">Extra: Chicken $2.50</p>
    </div>

    <div class="item-container">
      <h3>Tuna Bowl - $9</h3>
      <p class="description">
        Brown rice base with toppings of fresh tuna, broccoli, carrot,
        avocado, cherry tomatoes, blueberries, cashew nuts served with
        passion fruit dressing.
      </p>
    </div>

    <div class="item-container">
      <h3>Quinoa Bowl - $8 &#x1F331; &#x1F331; &#x1F944;</h3>
      <p class="description">
        A base of quinoa topped with carrot, pumpkin, fresh cucumber,
        avocado and spinach served with a soy reduction dressing.
      </p>
    </div>

    <h2>Pasta</h2>
    <div class="item-container">
      <h3>Fettuccini Pasta</h3>
      <p class="description">4 Cheeses with Vegetables - $10 &#x1F331;</p>
      <p class="description">Bolognese in Red Sauce - $11</p>
      <p class="description">Shrimps in White Sauce - $13.50</p>
      <p class="description legend">* All our pastas include country bread</p>
    </div>

    <div class="item-container">
      <h3>Creamy Chicken - $14</h3>
      <p class="description">
        Chicken in mushroom sauce with brown rice sautéed with vegetables
        and sesame seeds, accompanied with green salad.
      </p>
    </div>

    <div class="item-container legend">
      &#x1F331; &#x1F331; Vegan &nbsp; - &nbsp; &#x1F331; Vegetarian &nbsp;
      - &nbsp; &#x1F944; Gluten Free
    </div>
  </div>

  <div class="right">
    
    <div class="item-container">
      <h3>Veggie Burger - $11 &#x1F331;</h3>
      <p class="description">
        Lentil burger served on artisanal brioche bun with lettuce,
        mozzarella cheese, roasted peppers, fermented purple cabbage and
        garlic sauce accompanied by french fries.
      </p>
    </div>

    <div class="item-container">
      <h3>Nirrí Lodge Burger - $14.50</h3>
      <p class="description">
        Angus beef served on artisan brioche bun with mozzarella cheese,
        pickled cucumber, onion jam, sauteéd mushrooms and coriander sauce
        accompanied by french fries.
      </p>
    </div>

    <div class="item-container">
      <h3>Eggplant Club Sandwich - $9 &#x1F331;</h3>
      <p class="description">
        Eggplant milanesa sandwich served with avocado, tomato, lettuce,
        fried egg, house dressing and accompanied by french fries.
      </p>
    </div>

    <div class="item-container">
      <h3>Chicken Sandwich - $11</h3>
      <p class="description">
        Sautéed chicken served on brioche bread with cheddar cheese,
        guacamole, tomato, fried egg accompanied by a house tomato sauce.
      </p>
    </div>

    <div class="item-container">
      <h3>Tom's Schnitzel - $14</h3>
      <p class="description">
        Breaded chicken with jalapeno sauce accompanied by white rice and
        sautéed vegetables.
      </p>
    </div>

    <div class="item-container">
      <h3>Local Catch - $15</h3>
      <p class="description">
        Grilled mahi mahi with octopus sauce accompanied with potato sautéed
        in butter and garlic with chives and pico de gallo.
      </p>
    </div>

    <h2>Desserts</h2>

    <div class="item-container">
      <h3>Brownie w/ Vanilla Ice Cream - $6 &#x1F331;</h3>
      <p class="description">
        Warm brownie served with a scoop of vanilla ice cream.
      </p>
    </div>
    
    <div class="item-container">
      <h3>Cheesecake with berries - $6 &#x1F331;</h3>
      <p class="description">
        Creamy cheesecake served with a side of fresh berries.
      </p>
    </div>
    
    <div class="item-container">
      <h3>Extra Ice Cream - $1.50</h3>
      <p class="description">
        Additional scoop of your choice of vanilla, chocolate or strawberry ice cream.
      </p>
    </div>
  </div>
  `;

  // create lunch div & append HTML content
  const lunch = document.createElement("div");
  lunch.classList = "lunch";
  lunch.innerHTML = lunchHTML;

  content.appendChild(lunch);

  // navbar feedback
  const navLunch = document.getElementById("lunch");
  navLunch.classList.add("current");
};

export { lunchLoad };
