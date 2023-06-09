// loads the HTML breakfast

const breakfastLoad = function () {
  // remove previous content
  content.innerHTML = "";

  let breakfastHTML = `
  <div class="left">
    <h1>Breakast &#x1F373;</h1>

    <div class="item-container">
      <h3>Continental Breakfast - $7.50</h3>
      <p class="description">
        Eggs cooked to order accompanied by bacon, country bread toast,
        butter and seasonal fruits.
      </p>
    </div>

    <div class="item-container">
      <h3>Avocado Toast - $8 &#x1F331;</h3>
      <p class="description">
        Country bread toast covered with avocado, egg, feta cheese, jocoque
        (Mexican yogurt cream), cherry tomatoes and sesame seeds.
      </p>
    </div>

    <div class="item-container">
      <h3>Love Pancakes - $8 &#x1F331;</h3>
      <p class="description">
        Three pancakes topped with berries and popcorn. Finished with
        hazelnut cream and orange syrup.
      </p>
    </div>

    <div class="item-container">
      <h3>
        Banana Berry Smoothie Bowl - $10 &#x1F331; &#x1F331; &#x1F944;
      </h3>
      <p class="description">
        Frozen banana, berries and coconut milk base. Topped with sliced
        almonds, toasted coconut, homemade granola and passion fruit jam.
      </p>
    </div>

    <div class="item-container">
      <h3>Bambuda Omelette - $8</h3>
      <p class="description">
        Omelette stuffed with mozzarella cheese, spinach with serrano ham,
        accompanied by toasted country bread and cherry tomato jam.
      </p>
    </div>

    <div class="item-container">
      <h3>Breakfast Burrito - $9.50 &#x1F331;</h3>
      <p class="description">
        Tortilla stuffed with egg, pico de gallo, guacamole, lettuce and a
        mix of sautéed vegetables.
      </p>
    </div>

    <div class="item-container">
      <h3>Veggie Panini - $10.50 &#x1F331;</h3>
      <p class="description">
        Panini bread with mozzarella cheese, egg, feta cheese cubes, mix of
        roasted bell peppers, rucula leaves, olive oil, salt and pepper.
      </p>
    </div>

    <div class="item-container">
      <h3>Panamanian Breakfast - $7.50</h3>
      <p class="description">
        Stewed beef over fried egg accompanied by homemade Panamanian
        hojaldre (traditional fried bread).
      </p>
    </div>

    <div class="item-container">
      <h3>Solarte Breakfast - $7 &#x1F331;</h3>
      <p class="description">
        Eggs cooked to order served with refried black beans, fresh cheese
        and a boiled potato covered with sour cream.
      </p>
    </div>

    <div class="item-container">
      <h3>Caribbean Bowl - $7 &#x1F331;</h3>
      <p class="description">
        Vanilla yogurt topped with homemade granola and seasonal fruits.
      </p>
    </div>

    <div class="item-container legend">
      &#x1F331; &#x1F331; Vegan &nbsp; - &nbsp; &#x1F331; Vegetarian &nbsp;
      - &nbsp; &#x1F944; Gluten Free
    </div>
  </div>

  <div class="right">
    <div class="item-container">
      <h3>Extras:</h3>
      <p class="description">
        Bacon $2 - Egg $1 - Mozzarella Cheese $2 - Mushrooms $2 - Ham $2 -
        Avocado $1 - Country Bread $1.50 - Cream Cheese $1 - Panamanian
        Hojaldre $1.50 - Sauces $0.50
      </p>
    </div>

    <h2>Beverages</h2>
    <div class="item-container">
      <h3>Coffee - $2</h3>
      <p class="description">Black / With milk (Almond milk available)</p>
    </div>

    <div class="item-container">
      <h3>Tea - $2</h3>
    </div>

    <h2>Superfood Smoothies</h2>

    <div class="item-container">
      <h3>Vitamin Sea - $4</h3>
      <p class="description">
        Papaya, pineapple, carrot, ginger and honey.
      </p>
    </div>

    <div class="item-container">
      <h3>Caribbean Power - $4.50</h3>
      <p class="description">
        Beetroot, apple, carrot, pineapple and honey.
      </p>
    </div>

    <div class="item-container">
      <h3>Forest Detox - $4</h3>
      <p class="description">
        Cucumber, celery, pineapple and fresh lemon juice.
      </p>
    </div>

    <h2>Special Smoothies</h2>

    <div class="item-container">
      <h3>Sugar Rush - $4.50</h3>
      <p class="description">
        Vanilla ice cream, cookies, milk, chocolate syrup, and whipped
        cream.
      </p>
    </div>

    <div class="item-container">
      <h3>Sweet Berry - $4.50</h3>
      <p class="description">
        Blueberry, strawberry jam, vanilla ice cream, milk and whipped
        cream.
      </p>
    </div>

    <h2>Boozy</h2>
    <p class="description">* During breakfast time only (until 11 AM).</p>

    <div class="item-container">
      <h3>Bloody Mary - $4.5</h3>
      <p class="description">
        Vodka, tomato juice, Tabasco, pepper, salt, pickle juice,
        Worcestershire sauce, lemon.
      </p>
    </div>

    <div class="item-container">
      <h3>Mimosa - $3</h3>
      <p class="description">Sparkling wine and orange juice.</p>
    </div>
  </div>
  `;

  // create breakfast div & append HTML content
  const breakfast = document.createElement("div");
  breakfast.classList = "breakfast";
  breakfast.innerHTML = breakfastHTML;

  content.appendChild(breakfast);

  // navbar feedback
  const navBreakfast = document.getElementById("breakfast");
  navBreakfast.classList.add("current");
};

export { breakfastLoad };
