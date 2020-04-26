let data = {
    photo: 'https://cdn.pixabay.com/photo/2020/04/14/11/16/fox-5042210_960_720.jpg',
    title: 'Fox',
    description: 'This is a very cute fox'
  };
  
let data1 = {
    photo: 'https://cdn.pixabay.com/photo/2015/04/10/01/41/fox-715588_960_720.jpg',
    title: 'Fox in the snow',
    description: 'This is a very cute fox in the snow'
  };

let data2 = {
    photo: 'https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512_960_720.jpg',
    title: 'Fox on the tree',
    description: 'This is a very cute fox on the tree'
  };

let data3 = {
    photo: 'https://cdn.pixabay.com/photo/2016/10/21/14/46/norway-1758183_960_720.jpg',
    title: 'Small white fox in the snow',
    description: 'This is a very cute small white fox in the snow'
  };

let data4 = {
    photo: 'https://cdn.pixabay.com/photo/2016/11/22/19/26/animal-1850186_960_720.jpg',
    title: 'Fox having a rest in the snow',
    description: 'This is a very cute fox having a rest in the snow'
  };

let data5 = {
    photo: 'https://cdn.pixabay.com/photo/2015/10/01/20/28/animal-967657_960_720.jpg',
    title: 'Fox having a rest on wood',
    description: 'This is a very cute fox having a rest on wood'
  };

let data6 = {
    photo: 'https://cdn.pixabay.com/photo/2016/12/05/11/39/fox-1883658_960_720.jpg',
    title: 'A smart fox',
    description: 'This is a very cute smart fox'
  };

  let data7 = {
    photo: 'https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg',
    title: 'A white fox',
    description: 'This is a very cute white fox from Iceland'
  };


let photos = [data, data1, data2, data3, data4, data5, data6, data7]

  
let loadPhoto = (photoNumber) => {
    $('#fox1').attr('src', photos[photoNumber].photo);
  $('#Fox').text(photos[photoNumber].title);
  $('#This-is-a-very-cute-fox').text(photos[photoNumber].description);
    // ...
  }
let currentPhoto = 0;
loadPhoto(currentPhoto);

let max = photos.length-1

$('#rotate').click(() => {
    if(currentPhoto < max) {
    currentPhoto++;
}
    else {currentPhoto = 0;
}
    loadPhoto(currentPhoto)
  })

  $('#previous').click(() => {
    if(currentPhoto > 0) {
    currentPhoto--;
    }
    else {currentPhoto = max;
}
    loadPhoto(currentPhoto)
  })


  photos.forEach((item, index) => {
    //$('#thumbnails').append('<li class="clickable" row="'+index+'"><img src="'+item.photo+'" id="little"></li>'); 
    $('#thumbnails').append('<img src="'+item.photo+'" class="little" row="'+index+'">');
    $('.little').click((event) => {
      let clickedItem = $(event.target).attr("row");
      currentPhoto = clickedItem;  
      loadPhoto(currentPhoto);
      })
  })
