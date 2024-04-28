const faqData = [
  {
    title: "How can I tell if my order shipped?",
    content: "Once your order has been processed for shipping, you will receive an email notification containing shipping details and a tracking number.  Orders typically ship within 1-3 business days of order placement."
  },
  {
    title: "When will my order ship?",
    content: "We do our best to process and ship all orders within 1-3 business days of order placement, excluding weekends and holidays.   Processing time is subject to item availability, so we recommend checking each item’s individual page for more information on its availability. Once your order ships, you will receive a shipment notification via email."
  },
  {
    title: "How can I cancel or make changes to my order?",
    content: "To cancel or make changes to the items in your order, please contact customer service at hello@getphils.com, however please note that once an order has begun processing, we are unable to make any changes or cancellations."
  },
  {
    title: "What do I do if my order never arrived?",
    content: "Please contact customer service at hello@getphils.com for further assistance."
  },
  {
    title: "How can I apply a discount code to my order?",
    content: "After adding items to your cart, click the shopping cart link on the top right of the site to go to your shopping cart.  During the checkout process, you will have the opportunity to enter your discount code in the “discount code” box to apply the code to any applicable items in your cart."
  },
  {
    title: "What are my payment methods do you accept? ",
    content: "We currently accept the following forms of payment: Mastercard, Visa, American Express and Discover Card. If you do not see your specific payment method in the dropdown menu at checkout, we do not accept that method of payment at this time.  Please note that we only accept credit cards with a valid U.S. billing address. We do not accept any international payment methods at this time."
  },
];







function populateAccordion(faqData) {
  const accordion = document.getElementById('faqAccordion');
  accordion.innerHTML = '';

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
                  data-bs-parent="#faqAccordion">
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

