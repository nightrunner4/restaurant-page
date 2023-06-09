// loads the HTML & CSS of appetizers

const appetizersLoad = function () {
  // remove previous content
  content.innerHTML = "";

  let appetizersHTML = `
  <div class="left">
    <h1>Appetizers & Poolside Bites &#x1F32E;</h1>
    <h2>Poolside Bites</h2>

    <div class="item-container">
      <h3>Octopus Tacos - $10 &#x1F944;</h3>
      <p class="description">
        Sauteed octopus on corn tortilla and avocado with pico de gallo and
        red onion.
      </p>
    </div>

    <div class="item-container">
      <h3>Veggie Tacos - $9.50 &#x1F331;</h3>
      <p class="description">
        Crispy tempura broccoli on three corn tortillas with guacamole,
        coleslaw and sriracha mayonnaise.
      </p>
    </div>

    <div class="item-container">
      <h3>Beef Patacon - $10</h3>
      <p class="description">
        Fried plantains from our garden accompanied by braised beef, fresh
        cheese, coleslaw salad served with pink sauce dressing.
      </p>
    </div>

    <div class="item-container">
      <h3>Tuna Patacon - $11</h3>
      <p class="description">
        Fried plantains from our garden accompanied by fresh tuna marinated in
        citrus sealed in sesame seeds on guacamole served with a house red
        sauce dressing.
      </p>
    </div>

    <div class="item-container">
      <h3>Extras:</h3>
      <p class="description">
        Chicken $2.50 - Beef $3 - Shrimp $4 - Bacon $2 - Patacon $1 - Mozzarella Cheese $2 - 
        Fresh Cheese $2 - Plantain Chips $1 - Country Bread $1.50
      </p>
    </div>

    <div class="item-container legend">
      &#x1F331; &#x1F331; Vegan &nbsp; - &nbsp; &#x1F331; Vegetarian &nbsp;
      - &nbsp; &#x1F944; Gluten Free
    </div>
  </div>

  <div class="right">
    <h2>Appetizers</h2>
    <div class="item-container">
      <h3>Loaded French Fries - $6.50 &#x1F331; &#x1F944;</h3>
      <p class="description">
        Fried potatoes with mushrooms, grilled onions, green onions and
        cheddar cheese with cilantro sauce.
      </p>
    </div>

    <div class="item-container">
      <h3>Tropical Ceviche - $8</h3>
      <p class="description">
        Local fish marinated in mango and passion fruit citrus accompanied
        with cucumber, avocado and house special chili.
      </p>
    </div>

    <div class="item-container">
      <h3>Caribbean Ceviche - $8 &#x1F944;</h3>
      <p class="description">
        Local fish marinated in citrus and special local spice accompanied
        with avocado, cucumber, roasted corn, sweet potato and celery.
      </p>
    </div>

    <div class="item-container">
      <h3>Hummus Rojo - $8.50 &#x1F331; &#x1F331;</h3>
      <p class="description">
        Beetroot hummus accompanied by avocado seared in sesame oil, roasted
        cherry tomatoes, pineapple sealed in honey and toasted almonds with
        pita bread.
      </p>
    </div>

    <div class="item-container">
      <h3>Veggie Nachos - $9 &#x1F331;</h3>
      <p class="description">
        Corn chips piled high with mashed black beans, babaganoush, roasted
        tomatoes, sautéed mushrooms, grilled onion, cheddar cheese and sesame
        seeds.
      </p>
    </div>

    <div class="item-container">
      <h3>Mixed Nachos - $14.5</h3>
      <p class="description">
        Corn chips served on mashed black beans accompanied by guacamole,
        cheddar cheese, chicken, shrimp, beef and pico de gallo.
      </p>
    </div>
  </div>
`;

  // create appetizers div & append HTML content
  const appetizers = document.createElement("div");
  appetizers.classList = "appetizers";
  appetizers.innerHTML = appetizersHTML;

  content.appendChild(appetizers);

  // navbar feedback
  const navAppetizers = document.getElementById("appetizers");
  navAppetizers.classList.add("current");
};

export { appetizersLoad };
