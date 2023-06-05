// F12 shortcut ke console 

const display = document.querySelector('.display')

const key = document.querySelectorAll('input')

const operator = ['+', '*', '-', '/', '.', '=']
// adakah di file html kita class yang nama nya display
// queryselector cuman 1 yang pertama, kalau all semua

let result = ''

const calculate = (value) => {

    if(value === 'C') result = ''

    else if(value === 'DE') result = result.toString().slice(0, -1)
    
    else if((value === '0' && result === '') || (value === '0' && result === '') || (operator.includes(value) && result === '')) return
    // else if (value === '=' && result != '') result = eval(result.toString()); //fungsi eval, dari string lalu result.tostring (<- buat ngecek string) bakal ngecek apakah ada operator/operasi, kalau ada maka akan di hitung, output number
    else if(value === '=' && result != '') result = eval(result.replace('%', '/100')); //replace, % ga masuk eval jadi harus bikin konversinya dulu

    else result += value
    
    display.value = result
}

key.forEach(
    (button) => button.addEventListener('click', (e) => calculate(e.target.dataset.value)
))

// anonymous function --> function tak punya nama tapi ada parameter
// addEventListener --> nandain kita mau melakukan suatu tindakan
// eval --> ngedetect apakah di dalam string ada operasi kalau ada dioperasikan, toString gegara kita dari awal emang string jadi ga error
