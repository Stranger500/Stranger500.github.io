class Chanellogmanager
{
  static instance = null;

  constructor()
  {
    if(!Chanellogmanager.instance)
    {
      Chanellogmanager.instance = this;
    }

    return Chanellogmanager.instance;
  }

  async fatcChanellog ()
  {
    try {
      const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("content-type", "application/json");
            myHeaders.append("ngrok-skip-browser-warning","true");
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                header: myHeaders,
                redirect: "follow"
            };

            const response = await fetch(apiURL + "channellog/alpha", requestOptions, 'v1/content/channellog')
    } catch (error) {
      
    }
  }
  
}