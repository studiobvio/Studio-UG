// Get all the images

image_array = [
    'dino.png',
    'hey.png',
    'hi.png',
    'hiee.png',
    'shark.png',
    'surprise.png'
]

function get_random_image()  {
    //Get a random index
    random_index = Math.floor(Math.random() * image_array.length)

    //Get an image at the random index
    select_image = image_array[random_index]

    //display the image
    document.getElementById('image_shower').src =`./images/arts/${select_image}`
}