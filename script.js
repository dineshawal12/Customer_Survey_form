document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('surveyForm');
    const popup = document.getElementById('popup');
    const popupData = document.getElementById('popupData');
    const closePopup = document.getElementById('closePopup');
    const submitBtn = document.getElementById('submitBtn');
    const resetBtn = document.getElementById('resetBtn');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            showPopup();
        }
    });

    closePopup.addEventListener('click', function () {
        hidePopup();
        resetForm();
    });

    resetBtn.addEventListener('click', function () {
        resetForm();
    });

    function validateForm() {
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;
        const gender = document.querySelectorAll('[name=gender]:checked');


        if (!isValidEmail(email) || !isValidMobile(mobile) || gender.length === 0) {
            alert('Please enter a valid email, mobile number and select gender.');
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return emailPattern.test(email);
    }

    function isValidMobile(mobile) {
        const mobilePattern = /^\d{10}$/;
        return mobilePattern.test(mobile);
    }

    function showPopup() {
        const formData = new FormData(form);
        popupData.innerHTML = '';

        for (const [key, value] of formData.entries()) {
            const label = document.querySelector(`label[for=${key}]`).textContent;
            const li = document.createElement('li');
            li.textContent = `${label.trim()} ${value}`;
            popupData.appendChild(li);
        }

        popup.style.display = 'block';
    }

    function hidePopup() {
        popup.style.display = 'none';
    }

    function resetForm() {
        form.reset();
    }
});
