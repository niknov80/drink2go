import{detectedScript,toggleClickHandler}from"./modules/menu.js";import{arrowClickHandler}from"./modules/slider.js";detectedScript(),toggleClickHandler(),arrowClickHandler();const initSortElement=document.querySelector(".sort__item--init"),dropdownElement=document.querySelector(".sort__dropdown"),defaultSortElement=dropdownElement.querySelector("#default"),expensiveSortElement=dropdownElement.querySelector("#expensive"),cheapSortElement=dropdownElement.querySelector("#cheap"),topSortElement=dropdownElement.querySelector("#top"),sortItemClickHandler=()=>{dropdownElement.addEventListener("click",(e=>{switch(e.preventDefault(),e.target.id){case"expensive":defaultSortElement.classList.remove("sort__link--current"),expensiveSortElement.classList.add("sort__link--current"),cheapSortElement.classList.remove("sort__link--current"),topSortElement.classList.remove("sort__link--current"),initSortElement.firstChild.textContent=expensiveSortElement.textContent,console.log("expensive");break;case"cheap":defaultSortElement.classList.remove("sort__link--current"),expensiveSortElement.classList.remove("sort__link--current"),cheapSortElement.classList.add("sort__link--current"),topSortElement.classList.remove("sort__link--current"),initSortElement.firstChild.textContent=cheapSortElement.textContent,console.log("cheap");break;case"top":defaultSortElement.classList.remove("sort__link--current"),expensiveSortElement.classList.remove("sort__link--current"),cheapSortElement.classList.remove("sort__link--current"),topSortElement.classList.add("sort__link--current"),initSortElement.firstChild.textContent=topSortElement.textContent,console.log("top");break;default:defaultSortElement.classList.add("sort__link--current"),expensiveSortElement.classList.remove("sort__link--current"),cheapSortElement.classList.remove("sort__link--current"),topSortElement.classList.remove("sort__link--current"),initSortElement.firstChild.textContent=defaultSortElement.textContent,console.log("default")}}))};dropdownElement.addEventListener("click",(e=>{switch(e.preventDefault(),e.target.id){case"expensive":defaultSortElement.classList.remove("sort__link--current"),expensiveSortElement.classList.add("sort__link--current"),cheapSortElement.classList.remove("sort__link--current"),topSortElement.classList.remove("sort__link--current"),initSortElement.firstChild.textContent=expensiveSortElement.textContent,console.log("expensive");break;case"cheap":defaultSortElement.classList.remove("sort__link--current"),expensiveSortElement.classList.remove("sort__link--current"),cheapSortElement.classList.add("sort__link--current"),topSortElement.classList.remove("sort__link--current"),initSortElement.firstChild.textContent=cheapSortElement.textContent,console.log("cheap");break;case"top":defaultSortElement.classList.remove("sort__link--current"),expensiveSortElement.classList.remove("sort__link--current"),cheapSortElement.classList.remove("sort__link--current"),topSortElement.classList.add("sort__link--current"),initSortElement.firstChild.textContent=topSortElement.textContent,console.log("top");break;default:defaultSortElement.classList.add("sort__link--current"),expensiveSortElement.classList.remove("sort__link--current"),cheapSortElement.classList.remove("sort__link--current"),topSortElement.classList.remove("sort__link--current"),initSortElement.firstChild.textContent=defaultSortElement.textContent,console.log("default")}}));