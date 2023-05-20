import * as $ from 'jquery';


export default function getSynonymns(word:String){
    return new Promise(function(resolve, reject) {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/thesaurus?word='+word,
        headers: { 'X-Api-Key': 'API-KEY'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            resolve(result)
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
            reject(jqXHR)
        }
    });
});
}