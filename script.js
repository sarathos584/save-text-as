const textArea = document.querySelector('textarea');
const fileName = document.querySelector('#file-name-input');
const selectMenu = document.querySelector('.save-as select');
const saveBtn = document.querySelector('.save-btn');

selectMenu.addEventListener('change', ()=>{
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
    
    saveBtn.innerText = `Save As ${selectedOption.split(' ')[0]} File`
})

saveBtn.addEventListener('click', ()=> {

    const blob = new Blob([textArea.value], {type: selectMenu.value});
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = fileName.value;
    link.href = fileUrl;
    link.click();

})
