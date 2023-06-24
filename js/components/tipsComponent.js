import data from '../data.js';

const tipSection = document.querySelector(".tips-wrapper");

const tipsComponents = () => {
    for (const key in data.tips) {
        const tip = data.tips[key];

        const tipElement = document.createElement("div");
        tipElement.setAttribute('class', 'tip')
        tipElement.innerHTML = `
            <div class="image-wrapper"> 
                <span class="iconify" data-icon=${tip.icon}></span>
            </div>   
            <div class="tip-description">
                <h3 class="tip-title">
                    ${tip.title}
                </h3>
                <p class="tip-description"> 
                    ${tip.description}
                </p>
            </div>
        `;

        tipSection.appendChild(tipElement);
    }
};

tipsComponents();

