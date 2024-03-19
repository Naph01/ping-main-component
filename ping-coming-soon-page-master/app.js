const button = document.querySelector('.btn');
const input = document.querySelector('input');
const error = document.querySelector('.error-text');

const showFunction = () => {
    const inputValue = input.value.trim();

    if(!isEmail(inputValue)) {
        error.classList.remove('hidden');
    }

    else
    {
        error.classList.add('hidden');
    }
}

const isEmail = (input) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}

button.addEventListener('click', showFunction);