'use strict';

new TypeIt('.home__title--strong', {
    loop: true,
    speed: 100,
})  // Web Developer|
    .move(-20)
    .type('passionate ')
    .pause(1000)
    .move(null, { to: 'END'})
    .delete() // |
    .type('growth-driven Engineer') 
    .pause(1000)
    .move(-9) 
    .delete(14 ) 
    .type('user-centric') 
    .pause(1000)
    .delete(12) 
    .type('solution-oriented') 
    .pause(1500)
    .move(null, { to: 'END'}) 
    .delete() 
.go();