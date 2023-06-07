async() => {
    const response = await fetch('');
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
}