document.addEventListener("DOMContentLoaded", async function()
{
  registerAllButtons();
});

function registerAllButtons()
{
  const newsBnt = document.getElementById("js-news");
  newsBnt.addEventListener("click", function()
  {
    if(window.location.href !== "/")
    {
      window.location.href = "/"
    }

  })

  const chlBnt = document.getElementById("js-chanellog");
  chlBnt.addEventListener("click", function()
  {
    if(window.location.href !== "/chanel-log.html")
    {
      window.location.href = "/chanel-log.html"

    }
  })

  const aboutusBnt = document.getElementById("js-about-us");
  aboutusBnt.addEventListener("click", function()
  {
    if(window.location.href !== "/aboutus.html")
    {
      window.location.href = "/aboutus.html"

    }
  })

  const joinBnt = document.getElementById("js-join");
  joinBnt.addEventListener("click", function()
  {
    if(window.location.href !== "https://core.swapix.fun")
    {
      window.location.href = "https://core.swapix.fun"

    }
  })
}