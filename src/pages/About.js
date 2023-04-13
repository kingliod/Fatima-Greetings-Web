import { Grid, useTheme, useMediaQuery } from "@mui/material";

const About = () => {
  const Theme = useTheme();
  const Matches = useMediaQuery(Theme.breakpoints.up("sm"));
  const couple = require("../img/couple.jpg");
  return (
    <section
      style={{
        backgroundColor: "#f8ceec",
        backgroundImage:
          "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 25%, #fad0c4 35%, #ff9a9e 50%, #d9afd9 65%, #f0c0c0 75%, #e0c3c3 85%, #bdc1e9 100%, #f7c6c5 110%, #fce38a 120%)",
        backgroundSize: "400% 400%",
        animation: "gradientAnimation 10s ease infinite",
        height: Matches ? "95vh" : "100%",
        color: "white",
      }}
    >
      <style>
        {`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}
      </style>
      <Grid
        container
        spacing={1}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",

          margin: "0px",
          padding: Matches ? "40px 5px 0 5px" : "5px 0 0 0",
        }}
      >
        <Grid item xs={10} sm={10} md={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",

              height: "100%",
            }}
          >
            <img
              src={couple}
              loading="lazy"
              style={{
                width: Matches ? "80%" : "100%",
                height: Matches ? "80%" : "100%",
                objectFit: "cover",
                border: "10px white solid",
              }}
            />
          </div>
        </Grid>
        <Grid item xs={10} sm={10} md={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <h5
              style={{
                textAlign: "center",
                paddingTop: Matches ? "10px" : "0px",
              }}
            >
              <i>
                "Our story started in the most unexpected way - as friends on
                chat, bonding over our mutual love for playing Mobile Legends.
                Little did I know that this chance encounter would change my
                life forever. As we spent more time gaming and chatting, I was
                constantly amazed by her incredible characteristics. Her
                kindness and compassion towards others, her unwavering
                determination, and her witty sense of humor never failed to
                captivate me. As our friendship grew deeper, I found myself
                falling for her in ways I never imagined. Her unique qualities
                and genuine personality drew me closer to her with each passing
                day. Despite being miles apart, our connection grew stronger,
                and I realized that I had found someone truly special. Today, we
                are more than just friends. We have embarked on a beautiful
                journey as a couple, filled with love, laughter, and endless
                adventures. I am grateful for the serendipity that brought us
                together and for the wonderful person she is. Our story
                continues to unfold, and I am excited to see what the future
                holds for us, hand in hand".
              </i>
            </h5>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          sx={{ display: "flex", justifyContent: "center" }}
        ></Grid>
      </Grid>
    </section>
  );
};
export default About;
