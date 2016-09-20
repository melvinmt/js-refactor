==== BRIEFING ====

Hi and welcome to Allison's Inn.

As you know, we are a small inn with a prime location in a prominent city ran
by a friendly innkeeper named Allison.  We also buy and sell only the finest
goods. Unfortunately, our goods are constantly degrading in quality as they
approach their sell by date.

We have a system in place that updates our inventory for us. It was developed
by a no-nonsense type named Leeroy, who has moved on to new adventures. Your
task is to add the new feature to our system so that we can begin selling a
new category of items.

First an introduction to our system:

  - All items have a *sell_in* value which denotes the number of days we have to
    sell the item

  - All items have a *quality* value which denotes how valuable the item is

  - At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

  - Once the *sell_in* days is less then zero, *quality* degrades twice as fast

  - The *quality* of an item is never negative

  - "Aged Brie" actually increases in *quality* the older it gets

  - The *quality* of an item is never more than 50

  - "Sulfuras", being a legendary item, never has to be sold nor does it
    decrease in *quality*

  - "Backstage passes", like aged brie, increases in *quality* as it's *sell_in*
    value decreases; *quality* increases by 2 when there are 10 days or less
    and by 3 when there are 5 days or less but *quality* drops to 0 after the
    concert

We have recently signed a supplier of conjured items. This requires an update
to our system:

  - "Conjured" items degrade in *quality* twice as fast as normal items

Just for clarification, an item can never have its *quality* increase above 50,
however "Sulfuras" is a legendary item and as such its *quality* is 80 and it
never alters.

==== INSTRUCTIONS ====

1. Clone this repository.
2. Write enough tests in `spec/tests.js` to test the `update_quality()` function in `src/quality.js` by using the briefing above. You can run the tests by opening `RunThis.html` in your browser.
3. Create a commit with this message: `update_quality is tested` when you're confident that you've tested the `update_quality()` function enough.
4. With your tests in place, refactor the `update_quality()` function to make it better.
5. Create a commit with this message: `update_quality is refactored` when you're confident that you've refactored the `update_quality()` function enough.
6. Write the code required in `update_quality` to add support for the "Conjured" items.
7. Create a commit with this message: `conjured support has been added` when you're confident that your new code did not break anything.
8. Push your repo to Github and send us the link to it.
9. Done!


