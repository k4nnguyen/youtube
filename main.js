const router = new Navigo("/", { strategy: "ALL" });
const itemSelected1 = document.querySelectorAll(".side-bar .inner-item");
// Giữ nút bấm đậm màu
itemSelected1.forEach((item) => {
  item.addEventListener("click", function () {
    itemSelected1.forEach((x) => x.classList.remove("active"));
    this.classList.add("active");
  });
});
// Copy ID
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("copy-text")) {
    const url = window.location.href;
    const id = url.substring(url.lastIndexOf("/") + 1);
    navigator.clipboard.writeText(id);
    alert("Đã copy ID: " + id);
  } else if (event.target.classList.contains("scroll-up")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
// Scroll - up

// Về trang chủ
listVideo = document.getElementById("list-video");
if (listVideo) {
  origin = listVideo.innerHTML;
} else {
  origin = "";
}
function render(content) {
  if (content === "home") {
    document.getElementById("list-video").innerHTML = origin;
  } else {
    document.getElementById("list-video").innerHTML = content;
  }
}

router
  .on("/", () => render("home"))
  .on("/short", () => render("<p>Welcome to Short</p>"))
  .on("/subscriptions", () => render("<p>Welcome to Subscriptions</p>"))
  .on("/music", () => render("<p>Welcome to Music</p>"))
  .on("/watch/:id", (match) => {
    const idd = match.data.id;
    render(`<img src="/img/img1.avif" class="video-img" style="width: 700px; border-radius: 20px" /><p>Watching video ID: ${idd}</p><button class="copy-text" style="width: 100px">Copy ID</button><br><br><p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore
  obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa
  repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita
  commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet
  consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae
  cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae
  reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi
  recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam
  debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus
  consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto
  totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
  fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem
  ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore
  obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa
  repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita
  commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet
  consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae
  cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae
  reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi
  recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam
  debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus
  consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto
  totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
  fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem
  ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore
  obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa
  repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita
  commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet
  consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae
  cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae
  reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi
  recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam
  debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus
  consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto
  totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
  fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem
  ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore
  obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa
  repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita
  commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet
  consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae
  cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae
  reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi
  recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam
  debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus
  consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto
  totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
  fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore obcaecati molestiae cumque, optio quam debitis! <br />Lorem
  ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quidem expedita commodi recusandae cum, architecto totam eligendi culpa repudiandae reprehenderit ducimus consectetur inventore
  obcaecati molestiae cumque, optio quam debitis! <br />
</p>`);
  })
  .resolve();

router.updatePageLinks();
