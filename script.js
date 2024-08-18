// alert("Script JS Conntected!")

// this function fetch subs count from youtube

function GetSubsCount() {
  const SubCount = document.getElementById("SubCount");
  fetch(
    "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCX6OQ3DkcsbYNE6H8uQQuVA&key=AIzaSyDHQdTvHNHdpyOxkLizf7zcUKng0jBNQHM"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
    //   console.log(data);
      console.log(`SUBS: ${data.items[0].statistics.subscriberCount}`);
      SubCount.innerHTML = data.items[0].statistics.subscriberCount
    });
}

onload = GetSubsCount;

function GetJLGSubsCount() {
  const JLGSubCount = document.getElementById("JLGSubCount");
  fetch(
    "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCnY0-WdawRCyZ_Mli7UUMaw&key=AIzaSyDHQdTvHNHdpyOxkLizf7zcUKng0jBNQHM"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
    //   console.log(data);
      console.log(`SUBS: ${data.items[0].statistics.subscriberCount}`);
      JLGSubCount.innerHTML = data.items[0].statistics.subscriberCount
    });
}

onload = GetJLGSubsCount;
