// REFACTORED CODES

let starWars = async () => {
  const url = "https://swapi.dev/api/people";

  let response = await fetch(url);

  let data = await response.json();

  let characters = data.results;


  // CREATING ELEMENTS TO BE RENDERED TO THE HTML PAGE ON A CSS GRID LAYOUT PATTERN

  let header = document.createElement("div");
  header.className = "header";

  let img = document.createElement("img");
  img.src = "/banner/starwarslogo.jpeg";

  header.appendChild(img);

  let page = document.querySelector("#page");
  page.appendChild(header);

  let container = document.createElement("div");
  container.className = "container";

  let modal = document.createElement("div");

  modal.className = "modal";


  // CONTAINER FOR THE PAGE - START
  characters.forEach((char, index) => {
    container.innerHTML += `<div class="character">
                                    <div class="top-img">
                                        <img src="characters/${index}.jpeg" alt="" />
                                    </div>
                                    <div class="bottom-text">
                                        <div>
                                            <span class="content${index + 1}">${char.name}</span>
                                            <button class="btn" id="btn${index}">View Details</button>
                                            </div>
                                        </div>
                                </div>`;
  });

  page.appendChild(container);
  // CONTAINER FOR THE PAGE ENDS


  // FOOTER START
  let footer = document.createElement("div");
  footer.id = "footer";

  footer.innerHTML = `<div id="myName">
                            <a href="http://alexekeh.github.io" target="_blank">
                                <span id='name'>&copy;Alexander Ekeh - Node Stack</span>
                            </a>
                        </div>`;

  page.appendChild(footer);
  // FOOTER END


  // MODAL POPUP START

  let charButton = document.querySelectorAll(".btn");

  charButton.forEach((char, index) => {
    char.addEventListener("click", function show() {
      
      let modal = document.createElement("div");

      modal.className = "modal";

      modal.innerHTML = `<div class="modal-content">
                                    <div id="modal-header">
                                        <span id="closeBtn">esc-key</span>
                                        <h3 class="title"><span style="color: orange;">${characters[index].name}</span> - Biography</h3>
                                        </div>
                                    <div id="modal-body">
                                        <div>
                                            <p>Name: ${characters[index].name}</p>
                                            <p>Gender: ${characters[index].gender}</p>
                                            <p>Height: ${characters[index].height}</p>
                                        </div>
                                    </div>
                                </div>`;
      page.appendChild(modal);

      modal.style.display = "block";


      // CLOSE MODAL IF OUTSIDE IS CLICKED - START
      window.addEventListener("click", outsideClickClose);

      function outsideClickClose(e) {
        if (e.target == modal) {
          modal.style.display = "none";
          modalBody.innerHTML = "";
        }
    // CLOSE MODAL IF OUTSIDE IS CLICKED - END



    // CLOSE MODAL IF ESCAPE KEY IS PRESSED - START
        window.addEventListener("keydown", escapeBtnClose);

        function escapeBtnClose(e) {
          if (e.keyCode === 27) {
            modal.style.display = "none";
            modalBody.innerHTML = "";
          }
        }
    // CLOSE MODAL IF ESCAPE KEY IS PRESSED - END
      } 
    });
  });
}; // ASYNC FUNCTION ENDS HERE



starWars(); // RUN THE ASYNC FUNCTION
