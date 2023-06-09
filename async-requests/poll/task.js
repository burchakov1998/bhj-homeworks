const pollTitle = document.querySelector('#poll_title');
const pollList = document.querySelector('poll_answers');

const getPollResult = async (voidId, index) => {
     const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll',{
        method: 'POST',
        Headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: `vote=${voidId}&answer=${index}`
});
const {stat} = await response.json();
pollList.textContent = '';
let totalVotes = 0;
for ({votes} of stat) {
    totalVotes += votes;
    
}    
for (const{answers, votes} of stat){
    pollList.innerHTML += `${answers}: <strong>${(votes * 100 / totalVotes).toFixed(0)}</strong>%</br>`
    alert('Спасибо,ваш голос засчитан!');
}

async() => {
    const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
    const body = await response.json();
    pollTitle.textContent = body.data.title;
    body.data.answers.array.forEach((item,index) => {
        const pollAnswer = document.createElement('button');
        pollAnswer.classList.add('poll_answer');
        pollAnswer.style.margin = '3px';
        pollAnswer.textContent = item;
        pollAnswer.addEventListener('click', () => {
            getPollResult(body.id, index);
        });
pollList.append(pollAnswer);
    });
}};