const getHiddenMessage = (someElement) => {
    if (someElement.style.display === 'none') {
        someElement.style.display = 'block';
    } else {
        someElement.style.display = 'none';
    }
};

export { getHiddenMessage };