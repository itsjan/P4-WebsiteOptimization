## Website Performance Optimization portfolio project


###Part 1

http://localhost:8383/frontend-nanodegree-mobile-portfolio/


###Part 2
http://localhost:8383/frontend-nanodegree-mobile-portfolio/views/pizza.html


####main.js

#####function changePizzaSizes(size)

- Calculations are moved out of the for loop

#####function updatePositions()
- Calculations are moved out of the for loop

#####document.addEventListener('DOMContentLoaded', function () { ...
- Number of pizzas added to the document is reduced to 50
- Optimized image is used


####style.css

##### .mover
- Added *will-change: transform* in order to force each moving pizza to its own layer.