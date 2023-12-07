
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')

const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const savedPic = localStorage.getItem('savedImage');
const disPlayProfilePix = document.getElementById('profilePix2');

disPlayProfilePix.src = savedPic;