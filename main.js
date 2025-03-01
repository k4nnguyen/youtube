const router = new Navigo("/", { strategy: "ALL" });
const itemSelected1 = document.querySelectorAll(".side-bar .inner-item");
// Giữ nút bấm đậm màu
itemSelected1.forEach((item) => {
  item.addEventListener("click", function () {
    itemSelected1.forEach((x) => x.classList.remove("active"));
    this.classList.add("active");
  });
});
// Tắt/bật form login
const loginButton = document.querySelector(".create-btn");
const loginForm = document.querySelector(".login");
loginButton.addEventListener("click", function () {
  if (loginForm.classList.contains("translate-y-[-100%]")) {
    loginForm.classList.remove("translate-y-[-100%]", "opacity-0");
    loginForm.classList.add("translate-y-0", "opacity-100");
  } else {
    loginForm.classList.add("translate-y-[-100%]", "opacity-0");
    loginForm.classList.remove("translate-y-0", "opacity-100");
  }
});
// check api
const loginAction = document.querySelector(".apply-btn");
loginAction.addEventListener("click", function () {
  const username = document.getElementById("login-inp").value;
  const password = document.getElementById("pass-inp").value;
  const hooman = {
    username,
    password,
  };
  fetch("https://auth-wit.vercel.app/auth/login", {
    method: "POST",
    body: JSON.stringify(hooman),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => {
      if (!result.ok) {
        throw new Error("Login ERROR");
      }
      return result.json();
    })
    .then((data) => {
      alert("Đăng nhập thành công");
    })
    .catch((err) => {
      alert("Đăng nhập thất bại");
    });
});
// tắt/bật grid
function setGrid(enable) {
  if (enable) {
    listVideo.classList.add("grid", "grid-cols-3", "gap-6");
  } else {
    listVideo.classList.remove("grid", "grid-cols-3", "gap-6");
  }
}
// Về trang chủ
listVideo = document.getElementById("list-video");
if (listVideo) {
  origin = listVideo.innerHTML;
} else {
  origin = "";
}
function render(content) {
  if (content === "home") {
    setGrid(true);
    document.getElementById("list-video").innerHTML = origin;
  } else {
    setGrid(false);
    document.getElementById("list-video").innerHTML = content;
  }
}
router
  .on("/", () => render("home"))
  .on("/short", () => render(`<p>Welcome to Short</p><video src="/img/song.mp4" type="video/mp4" style="ml-[200px]" autoplay ></video>`))
  .on("/subscriptions", () => render("<p>Welcome to Subscriptions</p>"))
  .on("/music", () => render(`<p>Welcome to Music</p>`))
  .on("/watch/:id", (match) => {
    const idd = match.data.id;
    listVideo.classList.remove("grid", "grid-cols-3");
    if (idd == "001") {
      render(`<div class="col-span-3 w-full flex justify-center">
        <img src="/img/img1.avif" class="w-[55vw] rounded-lg shadow-lg" />
      </div>
      <p class="ml-[5px] mt-[15px] font-bold text-xl col-span-6">BUỒN HAY VUI - VSOUL x MCK x Obito x Ronboogz x Boyzed</p>
      <br>
      <p class="ml-[5px] col-span-3">Watching video ID: ${idd}</p>
      `);
    } else if (idd == "002") {
      render(`<div class="col-span-3 w-full flex justify-center">
        <img src="/img/img2.avif" class="w-[55vw] rounded-lg shadow-lg" />
      </div>
      <p class="ml-[5px] mt-[15px] font-bold text-xl col-span-6">Xin Lỗi</p>
      <br>
      <p class="ml-[5px] col-span-3">Watching video ID: ${idd}</p>
      `);
    } else if (idd == "036") {
      render(`<div class="col-span-3 w-full flex justify-center">
        <img src="/img/img3.avif" class="w-[55vw] rounded-lg shadow-lg" />
      </div>
      <p class="ml-[5px] mt-[15px] font-bold text-xl col-span-6">I'm 36 steps aheads</p>
      <br>
      <p class="ml-[5px] col-span-3">Watching video ID: ${idd}</p>
      `);
    }
  })
  .resolve();

router.updatePageLinks();
