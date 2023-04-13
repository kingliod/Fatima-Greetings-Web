import { Grid, useTheme, useMediaQuery } from "@mui/material";
import Popup from "../components/Popup";

const Home = () => {
  const Theme = useTheme();
  const Matches = useMediaQuery(Theme.breakpoints.up("sm"));

  return (
    <section className="section" style={{ height: Matches ? "100%" : "100%" }}>
      <Grid container spacing={1}>
        <Grid xs={12}>
          <Popup />
        </Grid>
        {itemData.map((item) => (
          <Grid key={item.img} item xs={4} sm={4} md={4} lg={3} xl={2}>
            <div
              className="image-container"
              style={{ width: "100%", height: "100% ", objectFit: "cover" }}
            >
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{ width: "100%", height: "100% ", objectFit: "cover" }}
                className="image"
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

const images = require.context("../img/pictures/", false, /\.jpg$/);
const itemData = images.keys().map((imageName) => {
  return {
    img: images(imageName),
    title: imageName,
  };
});
export default Home;
