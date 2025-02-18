const router = new Navigo("/", { strategy: "ALL" });
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
    render(`<p>Watching video ID: ${idd}</p>`);
  })
  .resolve();

router.updatePageLinks();
