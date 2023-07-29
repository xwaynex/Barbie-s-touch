const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//sign in
const SignUpButton = document.getElementById("SignUp");
const SignInButton = document.getElementById("SignIn");
const formContainer = document.getElementById("formContainer");

// modal
const openModalButtons = document.querySelectorAll("[data-modal-target]")
const closeModalButtons = document.querySelectorAll("[data-close-button]")
const overlay = document.getElementById("modal-overlay")

const popupOverlay = document.querySelectorAll(".popup-overlay")
// Select tab content items
function selectItem(e) {
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add("tab-border");
    // Grab content items from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add("show");
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove("tab-border"))
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove("show"))
}

//Listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));


// popup

var popupBtn = document.querySelectorAll("a.popup-Button")

var popups = document.querySelectorAll(".popup")

for (var i = 0; i < popupBtn.length; i++) {
    popupBtn[i].onclick = function(e) {
        e.preventDefault();
        popupAct = document.querySelector(e.target.getAttribute("href"));
        popupAct.classList.add("active");
    }
}
/*document.querySelectorAll("[data-modal-target]").forEach(a => {
    a.addEventListener("click", () => {
        const popup = document.querySelector(a.dataset.popupTarget)
        openModal(popup)
    })
})

function openModal(popup) {
    if (popup == null) return
    popup.classList.add("active")
    document.querySelector("popup-overlay").classList.add("active")
}*/




/*addEventListener("click", function(e){
    document.querySelector(".popup").classList.add=("active");
    document.querySelector(".popup-overlay").classList.add("active");
    e.stopPropagation()
})*/

//Exist the popup by clicking outside the popup content
document.onclick = (event) => {
    let isClickInside =  document.querySelector(".popup", ".popup-overlay").contains(event.target);

    if (!isClickInside) {
      console.log("outside box");
      document.querySelector(".popup").classList.remove = ("active")
    }
}

/*window.onclick = function(event) {
    if (event.target.classList.contains("popupAct")) {
        for (var index in popups) {
            if (typeof popups[index].classList !== "undefined") popups[index].classList.remove("active");
        }
    }
}*/

//signIn form
SignUpButton.addEventListener("click", () =>
    formContainer.classList.add("right-panel-active")
);

SignInButton.addEventListener("click", () =>
    formContainer.classList.remove("right-panel-active")
);

//modal function

//open modal
openModalButtons.forEach(a => {
    a.addEventListener("click", () => {
        const modal = document.querySelector(a.dataset.modalTarget)
        openModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active")
    overlay.classList.add("active")
}


//close modal
closeModalButtons.forEach( button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal")
        closeModal(modal)
    })
})
function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active")
    overlay.classList.remove("active")
}

//close using click outside the modal
overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active", ".popup.active")
    modals.forEach(modal => {
        closeModal(modal)
    })
})