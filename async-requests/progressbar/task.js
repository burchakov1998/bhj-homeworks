const progress = document.getElementById('progress');
const form = document.getElementById('form');
const fileInput = document.getElementById('file');
const fileDesc = document.querySelector('.input__wrapper-desc');

function updateFileDesc(){
    fileDesc.textContent = fileInput.files[0]?.name || 'имя файла...';
}
function uploadFile(){
const xhr = new XMLHttpRequest();
const formData = new FormData(form);

xhr.upload.addEventListener('progress',event =>{
    if(event.lengthComputable){
        const percentage = (event.loaded / event.total);
        progress.value = percentage;
    
    }
});

xhr.open('POST', form.action, true);
xhr.send(formData);
}
fileInput.addEventListener('change', updateFileDesc);
form.addEventListener('submit',event =>{
    event.preventDefault();
    uploadFile();
})