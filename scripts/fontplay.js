$(document).ready(function(){
    $('#creepy').click(function(){
        $('h1, p, h2, h3, button, li, td').css("font-family", '"creepy"');
    })
    $('#hand').click(function(){
        $('h1, p, h2, h3, button, li, td').css("font-family", '"handwrite"');
    })
    $('#normal').click(function(){
        $('p, h2, h3, button, li, td').css("font-family", '"normaltext"')
        $('h1, nav p').css("font-family", '"normaltitle"');
    })
    $('#nostalgia').click(function(){
        $('h1, p, h2, h3, button, li, td').css("font-family", '"nostalgia"');
    })
    $('#no').click(function(){
        $('h1, p, h2, h3, button, li, td').css("font-family", '"nostyle"');
    })
    $('#why').click(function(){
        $('h1, p, h2, h3, button, li, td').css("font-family", '"randomness"');
    })
})