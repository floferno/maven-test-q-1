// const baseUrl = `http://localhost:5500`

$(document).ready(() => {

   $('#btn-generate').on('click', (e) => {
        e.preventDefault();
        numIntoUnits()
        // $('#num-input').val('');
        $('#unit').val()
    });
    
    $('#num-input').on('click', (e) => {
        e.preventDefault();
        $('#div-error').hide()
        $("#unit").empty()
        $('#num-input').val('');

    })
        
});


function numIntoUnits() {
    $('#div-error').hide()
    let num = $('#num-input').val()
    let result
    // console.log(num)
    if (num == "") {
        $('#div-error').show()
        $('#div-error').text('You must enter numbers')
        return false
    } else if (/^[1-9]+$/.test(num) == false) {
            $('#div-error').show()
            $('#div-error').text('You are not allowed to enter zero')
            return false
    } else {
        let arr = []
        let i = 1
        while (num > i / 10)
        {
            arr.unshift(num % i - num % (i / 10));
            i *= 10;
        }
        // console.log(arr.slice(0, -1))
        result = arr.slice(0, -1)
        result.forEach((el, i) => {
             $("#unit").append(`
                <tr>
                    <th scope="row" class="table-bordered" id="unit-${i}">${el}</th>
                </tr>
            `)
        });
        return result;
    }
}
