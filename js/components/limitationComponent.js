import data from '../data.js';

const limitationSection = document.querySelector('.limitation-lists');

const limitationComponents = () => {
        for (key in data.limitations) {
            const limitation = data.limitations[key];

            const limitationElement = document.createElement("div");
            limitationElement.setAttribute('class', 'limitation');

            limitationElement.innerHTML = `
                <h4 class="limitation-title"> 
                     <span class="iconify" data-icon=${limitation.icon}></span>
                     ${limitation.title}
                </h4>
                <p class="limitation-description">
                    ${limitation.description}
                </p>

            `;

            limitationSection.appendChild(limitationElement)
        }
}

limitationComponents();