const menuIcon = document.querySelector('#menu_icon');
const navigation = document.querySelector('.navigation');

menuIcon.onclick = () =>{
  navigation.classList.toggle('active')
}
document.querySelectorAll('.navigation a').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('active');
  });
});

const contactButton = document.getElementById('contact_button');
if (contactButton) {
  contactButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = "mailto:denisnguema10@gmail.com?subject=Contact via Portfolio&body=Bonjour,";
  });
}
document.querySelectorAll('.btn').forEach(button => {
  if (button.textContent.trim() === "Voir Démo") {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = "indisponible.html";
    });
  }
});
