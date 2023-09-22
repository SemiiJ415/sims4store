const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', ()=> {
    // console.log('you clicked me!');

    const html = document.getElementsByTagName('html')[0];

    // console.log(html);

    html.getAttribute('data-bs-theme') == 'light' ? html.setAttribute('data-bs-theme','dark') : html.setAttribute('data-bs-theme','light')
});

// bootstrap popover

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))