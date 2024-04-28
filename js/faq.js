const faqData = [
  {
    title: "ORDER QUESTIONS",
    content: "Here is the answer to ORDER QUESTIONS."
  },
  {
    title: "PRICING & BILLING",
    content: "Here is the answer to PRICING & BILLING."
  },
  {
    title: "Accordion Item #3",
    content: "Here is the content for item #3."
  }
];


function populateAccordion(faqData) {
  const accordion = document.getElementById('accordionExample');
  accordion.innerHTML = '';  // 清空现有的手风琴内容

  faqData.forEach((item, index) => {
    const itemHTML = `
          <div class="accordion-item">
              <h2 class="accordion-header" id="heading${index}">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapse${index}" aria-expanded="${index === 0}" aria-controls="collapse${index}">
                      ${item.title}
                  </button>
              </h2>
              <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                      ${item.content}
                  </div>
              </div>
          </div>
      `;
    accordion.innerHTML += itemHTML;
  });
}



document.addEventListener('DOMContentLoaded', () => {
  populateAccordion(faqData);
});


