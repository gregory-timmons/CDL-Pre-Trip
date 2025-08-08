const accordionHeader = document.querySelectorAll('.accordion__header'); //this is a nodelist of elements
// const panel = document.querySelectorAll('.accordion__body');
accordionHeader.forEach(header =>{
    header.addEventListener('click', () =>{
        header.classList.toggle('active');

        const panel = header.nextElementSibling;
        if(header.classList.contains('active')){
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
        else{
            panel.style.maxHeight = '0';
        }



    })
})

//header in the forEach method id the paramter representing each item in the nodeList
//A parameter is like a placeholder variable that represents each individual item in the list you're looping through.

// You have to match each .accordionHeader to its own .accordion__body..Remember you have multiple accordions so you have to have a way to access each individul accordion body on the exact element the use clicked on. That why your looping through the .accordionnHeader, and that's why you use nextElementSibling..it gives your the correct accordion__body each time..

// Or i could have used another querySelectorAll but you have to match the header with it's body and you would do so by matching the index

// const bodies = document.querySelectorAll('.accordion__body');
// headers.forEach(header, index)=> {
//     header.addEventListener('click', ()=>{
//         const panel = bodies[index];

//     })
// }