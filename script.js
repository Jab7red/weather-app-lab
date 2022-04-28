console.log('JS is Working')

const URL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=b367f2b8654cdfd51502b45291a871de'
console.log(URL)


const $city = $('#city');
const $temp = $('#temp');
const $feel = $('#feelsLike');
const $weather = $('#weather');
const $form = $('form');
const $input = $('#input[type="text"]')

$form.on('submit', handleGetData);

function handleGetData(evt) {
    evt.preventDefault();
    const userInput = $input.val();
    if (!userInput) return;
    $input.val('')

    $.ajax(URL + userInput).then(function (data) {
        $city.text(data.city.name);
        $temp.text(data.main.temp);
        $feel.text(data.main.feels_like);
        $weather.text(data.weather);
    }, function (error) {
        console.log('Something went wrong')
        console.log(error);
    })
}



// $.ajax(URL).then(function (data){
//     console.log(data)
//     console.log(URL)
// })