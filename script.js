const body = document.querySelector("body"),
      Sidebar = body.querySelector(".Sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box");

      toggle.addEventListener("click", () =>{
        Sidebar.classList.toggle("close");
      });

      searchBtn.addEventListener("click", () =>{
        Sidebar.classList.remove("close");
      });


      