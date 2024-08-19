
const showMore = document.getElementById('showMore');

const navBarHeading = document.querySelector('.navBar-heading');

const navBarBrandButton = document.querySelector('.navBar-heading .menu-icon'); 

const sideNavBar = document.querySelector('.side-navBar');

//  event listener functions 
function handleShowMoreClick() {
    sideNavBar.style.display = 'flex';
    showMore.style.display = 'none'; // Hide the showMore button
}

function handleNavBarBrandClick() {
    sideNavBar.style.display = 'none'; 
    showMore.style.display = 'block'; 
}

// Function to check screen size and remove event listeners if needed
function checkScreenSize() {
    if (window.innerWidth < 768) {
        // Remove the event listeners when screen is smaller than 768px
        showMore.removeEventListener('click', handleShowMoreClick);
        navBarBrandButton.removeEventListener('click', handleNavBarBrandClick);
        
        //  set the appropriate display for smaller screens
        showMore.style.display = 'none';
        sideNavBar.style.display = 'flex'; // or whatever is appropriate for small screens
    } else {
        // Add the event listeners back if the screen size is above 768px
        showMore.addEventListener('click', handleShowMoreClick);
        navBarBrandButton.addEventListener('click', handleNavBarBrandClick);
    }
}

// for Intial Run
checkScreenSize();

// Re-run the checkScreenSize function on window resize
window.addEventListener('resize', checkScreenSize);


// to change the text Dynamically
const complainceNumber=document.getElementById('complainceNumber').textContent=4;
const Values = {"incomplete":6,"pending" :2 ,"approved": 10}; //  input values

const colors = ['#f39c6b', '#e74c3c', '#27ae60']; // Colors for each segment

function createDoughnutChart(Values, colors, gap = 2) {
    const total = Object.values(Values).reduce((acc, val) => acc + val, 0);
   console.log(total);
   
    // To show total number of applications Recicved Yet
    document.getElementById('doughnut-chart-text').innerText=`${total} Applications`
    let cumulativePercent = 0;
    const gapPercent = gap / 360; // convert gap to percentage of the circle

    const gradientSegments =  Object.values(Values).map((value, index) => {
        const percent = value / total;
        const startPercent = cumulativePercent;
        cumulativePercent += percent;
        const endPercent = cumulativePercent - gapPercent;

        // Return the gradient string for this segment, with a small gap
        return `${colors[index]} ${startPercent * 100}% ${endPercent * 100}%, transparent ${0.20 * 100}%`;
    }).join(', ');

    // Set the conic-gradient dynamically with gaps
    document.getElementById('doughnutChart').style.background = `conic-gradient(${gradientSegments})`;

}


createDoughnutChart(Values, colors, 3); // 2 degrees gap between each segment


// Select Clickable Links

const navLinkItems=document.getElementsByClassName('nav-link-items');

// To Remove and add the background effect when a navLinks is being clicked
for(let navLinkItem of navLinkItems){
    navLinkItem.addEventListener('click',()=>{
         for(let navItems of navLinkItems){
            navItems.classList.remove('highlight-navLinks')
         }
         navLinkItem.classList.add('highlight-navLinks')
    })
}


// To give the color
// application-status-content
const listItems=document.getElementsByClassName('color-indicator');

let item=0;
for(let listItem of listItems){
    listItem.style.backgroundColor = colors[item];
    item++;

}

// Set the count present inside the tabel
document.getElementById('status-count-new').textContent=23;
document.getElementById('status-count-requested').textContent=24;
document.getElementById('status-count-actionsTaken').textContent=25;

// To dynmaically Add Elements to the list
const getTaskBody=()=>{
    const taskbodyTable=document.getElementById('task-body');
    console.log(taskbodyTable);
     taskbodyTable.innerHTML+=`  <tr>
                                        <td  class="  task-title">${taskTitle} </td>
                                        <td >${taskCategory}</td>
                                        <td>${taskDueDate}</td>
                                        <td><button class="status-button pointer" >Request sent</button></td>
                                    </tr>`
    
}

// Functionality to hihlight the selected button
const buttons=document.querySelectorAll('.task-filters>button');
console.log(buttons);
for(let button of buttons){
    button.addEventListener('click',()=>{
        for(let item of buttons){
            item.classList.remove('selectedButton');
        }
        button.classList.add('selectedButton');
    })
}


// Expand More Icon  on Payement History

const expandMoreIconButtons=document.getElementsByClassName('expand-more');

console.log(expandMoreIconButtons);


for(let expandMoreIconButton of expandMoreIconButtons){

    expandMoreIconButton.addEventListener('click',()=>{
        // console.log(expandMoreIconButton.nextElementSibling);
        console.log(expandMoreIconButtons);
        
        const displayProperty= expandMoreIconButton.nextElementSibling.style.display
       if(displayProperty==='none') 
       {
           expandMoreIconButton.nextElementSibling.style.display='flex'
        //    console.log(  expandMoreIconButton.querySelector('::after').textContent);
           expandMoreIconButton.setAttribute('data-icon', 'up');
           
       }
       else{
           expandMoreIconButton.nextElementSibling.style.display='none'
           expandMoreIconButton.setAttribute('data-icon', 'down');

       }
    })
}