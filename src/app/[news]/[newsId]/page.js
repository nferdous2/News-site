import { getSingleNews } from "@/utils/getSingleNews";
import { Box, Container, Grid, Typography, Avatar, CardMedia } from "@mui/material";
import Image from "next/image";
const NewsDetailPage = async ({ params }) => {
    const { data: news } = await getSingleNews(params.newsId);
    // console.log(data);
    return (
        <Box className="my-5">
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <CardMedia
                            sx={{ height: 550 }}
                            image={news.thumbnail_url}
                            alt="news"

                        />
                        <Grid container spacing={2} className="mt-2">
                            <Grid item lg={6}>

                                <CardMedia
                                    sx={{ height: 500 }}
                                    image={news.image_ur}
                                    alt="news"
                                />
                            </Grid>
                            <Grid item lg={6}>
                            <CardMedia
                                    sx={{ height: 500 }}
                                    image={news.image_ur}
                                    alt="news"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6}>
                        <Typography variant="h5" component="h2">
                            {news.title}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 3,
                                alignItems: "center",
                            }}
                        >
                            <Avatar alt="author" src={news.author.img} />
                            <Typography>By {news.author.name}</Typography>
                            <Typography>Publish: {news.author.published_date}</Typography>
                        </Box>
                        <Typography
                            style={{
                                textAlign: "justify",
                                whiteSpace: "pre-line",
                                margin: "10px 0px",
                                color: "gray",
                            }}
                        >
                            {news.details}
                        </Typography>

                        <Typography variant="h6">
                            ``Many desktop publishing packages and web page editors now use as
                            their default model text!
                        </Typography>
                        <Typography variant="h6">-Jhankar Mahbub Bhai</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default NewsDetailPage;
