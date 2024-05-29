//socket
let socket = io();
socket.on('number', (msg) => { console.log('Random Number: ' + msg); });


const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.path + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.subTitle + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text card-desc-color">' + item.desciption + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}
 
const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}
 
const submitForm = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.subTitle = $('#subTitle').val();
    formData.path = $('#path').val();
    formData.description = $('#description').val();

    console.log(formData);
    postCats(formData);
}
const getCats=()=>{
    $.get('/api/cats',(response)=>{ 
   if(response.statusCode==200){
    addCards(response.data);
    }
    })
}
const postCats=(formdata)=>{
    $.post('/api/cats',formdata);
}
$(document).ready(function () {
    $('.materialboxed').materialbox();
    
    $('.modal').modal();
    $('#formSubmit').click(() => {
        submitForm();
    })
    getCats();
})