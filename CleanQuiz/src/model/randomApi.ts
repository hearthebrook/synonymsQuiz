import * as $ from 'jquery';


export default function randomWord(){
    return new Promise(function(resolve, reject) {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/randomword',
        headers: { 'X-Api-Key': 'API-KEY'},
        contentType: 'application/json',
        success: function(result) {
            //console.log(result);
            resolve(result)
        },
        error: function ajaxError(jqXHR) {
            reject(jqXHR)
            console.error('Error: ', jqXHR.responseText);
        }
    });
});
}