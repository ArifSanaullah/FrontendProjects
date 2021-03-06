new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  onleave: (origin, destinition, direcion) => {
    const section = destinition.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
  }
});
