//your code here
let images = document.querySelectorAll('.image');
let dragElement = null;

images.forEach(element => {
    element.addEventListener('dragstart', (e) => {
        dragElement = e.target;
        e.target.style.opacity = 0.5;

    });

    element.addEventListener('dragend', (e) => {

        e.target.style.opacity = "";
    });

    element.addEventListener('dragover', (e) => {

        e.preventDefault();
    });

    element.addEventListener('drop', (e) => {
        e.preventDefault();

        if(e.target !== dragElement){
            swap(e.target, dragElement);
        }
    });
});


function swap(img1, img2){
    let clonedImg1 = img1.cloneNode(img1);
    let clonedImg2 = img2.cloneNode(img2);

    img1.parentNode.replaceChild(clonedImg2, img1);
    img2.parentNode.replaceChild(clonedImg1, img2);

    addDragAndDropListeners(clonedImg1);
    addDragAndDropListeners(clonedImg2);
}

function addDragAndDropListeners(element){
    element.addEventListener('dragstart', (e) => {
        dragElement = e.target;
        e.target.style.opacity = 0.5;

    });

    element.addEventListener('dragend', (e) => {

        e.target.style.opacity = "";
    });

    element.addEventListener('dragover', (e) => {

        e.preventDefault();
    });

    element.addEventListener('drop', (e) => {
        e.preventDefault();

        if(e.target !== dragElement){
            swap(e.target, dragElement);
        }
    });
}