
const pollTitle = document.querySelector("#poll__title");
const pollList = document.querySelector("#poll__answers");

const getPollResult = async () => {
alert("Спасибо,ваш голос засчитан!");
}
(async() => {
    const response = await fetch("https://students.netoservices.ru/nestjs-backend/poll");
    const body = await response.json();
    pollTitle.textContent = body.data.title;
    body.data.answers.forEach((item,index) => {
        const pollAnswer = document.createElement("button");
        pollAnswer.classList.add("poll__answers");
        pollAnswer.style.margin = "3px";
        pollAnswer.textContent = item;
        pollAnswer.addEventListener("click", () => {
            getPollResult(body.id, index);
        });
pollList.append(pollAnswer);
    });
})();