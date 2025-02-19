<!-- COMMANDS -->
shopify theme dev --store=spa-detente.myshopify.com
shopify theme push --store=spa-detente.myshopify.com
shopify theme pull --store=spa-detente.myshopify.com

 /!\ AT NEXT PULL, IT MIGHT DIVERGING FROM GIT VERSIONED FILES BECAUSE 
 OF DEVLOPMENT WHILE REMOTE WAS CLOSED - IN THAT CASE MERGE / PUSH BACK TO GIT /!\

<!-- COMMANDS END -->

<!-- BOOK TODO -->
- INTERNATIONALIZE LOCATION AUTH
- CALENDRIFY
- ADD A BACKEND WITH DELIVERY MEN/ PRODUCT / LOCATION
- ADD A DASHBOARD FOR THE DELIVERY MENS
- ADD A WEBHOOK TO NOTIFY DELIVERY MENS
- ADD AN API SO THAT BUYER USER REQUEST AVAILABILITY OF THE PRODUCT PER LOCATION


<!-- END -->




<!-- BOOK THAT APP: STATUS DELETED. FOLLOWING INSTRUCTIONS ARE WHAT HAD BEEN DONE PREVIOUSLY FOR ITS INSTALLATION -->
STEP 1 - (no code change)

STEP 2 - Add the booking form to your product page
Note: In the examples shown in this documentation the '...' lines represent existing code. Do not copy and paste the dots :-)

In your Theme Editor, open sections/product-template.liquid in your published theme. Note: in older themes the file is in templates/product.liquid.
Find the code in your theme where the product variants are located. It will look something like this:

```
<form action="/cart/add" method="post">
    ...
    <select id="product-select" name="id">
      {% for variant in product.variants %}
        <option value="{{ variant.id }}">{{ variant.title }} - {{ variant.price | money }}</option>
      {% endfor %}
    </select>
    ...
</form>
```

Can't find this code?: Check the themes guide to see if we've documented the location for your specific theme. If it is not documented try snippets/product-form.liquid. If you still are unable to find it, please create a help ticket for further assistance (or purchase installation).
Paste the {% render "booking-form" %} just below where this code:

```
<form action="/cart/add" method="post">
    ...
    <select id="product-select" name="id">
      {% for variant in product.variants %}
        <option value="{{ variant.id }}">{{ variant.title }} - {{ variant.price | money }}</option>
      {% endfor %}
    </select>

    {% render 'booking-form' %}
    ...
</form>
```
There are a number of ways to customize the behaviour of the booking form. Please see the product page developer instructions for more details.



STEP 3 - Update the cart page
We need to make the quantity field read only on the cart page so that customers don't overbook. It should currently look something like this:
```
<input type="text" size="4" name="updates[{{item.id}}]" id="updates_{{ item.id }}" value="{{ item.quantity }}" />
```
Replace it with this:
```
{% if item.product.metafields.bookthatapp.config %}
  {{ item.quantity }}
  <input type="hidden" name="updates[{{item.id}}]" id="updates_{{ item.id }}" value="{{ item.quantity }}"/>
{% else %}
  <input type="text" size="4" name="updates[{{item.id}}]" id="updates_{{ item.id }}" value="{{ item.quantity }}"/>
{% endif %}
```
<!-- END BTA -->

