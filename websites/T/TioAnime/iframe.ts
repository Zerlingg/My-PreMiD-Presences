const iframe = new iFrame();
iframe.on("UpdateData", async () => {
    const video = document.querySelector(".jw-video.jw-reset") ||
        document.querySelector(".video");
    if (video != null && !Number.isNaN(video.duration)) {
        iframe.send({
            video: true,
            duration: video.duration,
            currentTime: video.currentTime,
            paused: video.paused
        });
    }
    else {
        iframe.send({ video: false });
    }
});
