// const mainMid = document.querySelector('.main-mid');

// mainMid.addEventListener('click', async () => {
//   const response = await fetch('install.html');
//   const text = await response.text();

//   const tempDiv = document.createElement('div');
//   tempDiv.innerHTML = text;

//   const installContent = tempDiv.querySelector('.template1');
//   if (installContent) {
//     mainMid.appendChild(installContent);
//   }
// });


const exploreButton = document.querySelector(".navbar-right-premium")
// const para = document.querySelector('.para')
const mainMid = document.querySelector(".main-mid ");

exploreButton.addEventListener("click", async function(){
    const response =  await fetch('/explore.html')
    const data = await response.text()

    mainMid.innerHTML = data

    console.log(data)
})
