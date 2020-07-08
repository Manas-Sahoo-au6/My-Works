let [question, answer, timer, submit, tryagain] = [$('#question'), $('#answer'), $('#timer'), $('#submit'), $('#trynext')]

let response = fetch('https://api.jsonbin.io/b/5e255a125df6407208389e9c')
let counter = 0
$('document').ready(_=>{
    response.then(data =>{
        return data.clone().json()
    }).then(data =>{
        let times = 31
        let random = data[Math.floor(Math.random() * 10)]
        question.html(random.question)
    
        var stopper = setInterval(_=>{
                times = times-1
                timer.html(times)
                if(times < 1){
                    submit.attr('disabled', 'true')
                    answer.attr('disabled', 'true')
                    tryagain.removeClass('d-none')
                    clearInterval(stopper)
                    question.html('You\'re Failed!')
                    question.addClass('text-danger')
                }
            }, 1000)

            let task
    if(localStorage.getItem('quiz') === null){
        task = []
    }else{
        task = JSON.parse(localStorage.getItem('quiz'))
    }
    if(task.length === 10){
        submit.attr('disabled', 'true')
        answer.attr('disabled', 'true')
        tryagain.removeClass('d-none')
        clearInterval(stopper)
        question.html('Quiz Completed!')
        question.addClass('text-success')
        timer.addClass('d-none')
        $('.result').addClass('text-success')
        $('.result').addClass('font-weight-bold')
        $('.result').html(`Score : ${task.length}`)
    }

            tryagain.click(_=>{
                location.reload(true)
                localStorage.clear()
                $('.result').removeClass('text-success')
                $('.result').removeClass('font-weight-bold')
                $('.result').html(`Seconds Remaining`)
            })
        submit.click(e =>{
            e.preventDefault()
            counter = counter + 1
            if(answer.val() === random.answer){
                let task;
                if(localStorage.getItem('quiz') === null){
                    task = []
                }else{
                    task = JSON.parse(localStorage.getItem('quiz'))
                }
                task.push(answer.val())
                localStorage.setItem('quiz', JSON.stringify(task))
                location.reload(true)
            }else{
                answer.css({'border' : '1px solid #d9534f', 'color' : '#d9534f'})
                answer.prev().html('Incorrect answer')
                answer.prev().css({'color' : '#d9534f'})
            }
            answer.click(_=>{
                answer.css({'border' : '', 'color' : ''})
                answer.prev().html('')
                answer.prev().css({'color' : ''})
                answer.val('')
            })
        })
    }).catch(data => console.log(data))
})